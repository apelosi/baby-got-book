/**
 * Image Generation Script using OpenAI DALL-E (Alternative to Gemini)
 * 
 * This script uses Gemini to create optimized prompts, then generates images with DALL-E.
 * 
 * Setup:
 * 1. Install: npm install openai @google/generative-ai dotenv
 * 2. Add to .env: OPENAI_API_KEY=your_openai_key_here
 * 3. Run: node scripts/generate-images-with-dalle.js
 */

require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const OpenAI = require('openai');
const fs = require('fs').promises;
const path = require('path');
const https = require('https');

// Initialize APIs
let genAI = null;
let openai = null;

if (process.env.GEMINI_API_KEY) {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
}

if (process.env.OPENAI_API_KEY) {
    openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
} else {
    console.error('Error: OPENAI_API_KEY not found in .env file');
    console.log('Please add: OPENAI_API_KEY=your_openai_key_here');
    process.exit(1);
}

// Book pages data (same as generate-images.js)
const bookPages = require('./generate-images').bookPages;

async function optimizePromptWithGemini(originalPrompt, referenceImages) {
    if (!genAI) {
        return originalPrompt; // Return original if Gemini not available
    }
    
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });
        
        const optimizationPrompt = `You are an expert at creating prompts for AI image generation. 
Take this children's book illustration prompt and optimize it for DALL-E 3 image generation:

${originalPrompt}

Create an optimized prompt that:
- Is clear and specific
- Follows DALL-E 3 best practices
- Maintains the children's board book style
- Is suitable for a square format illustration
- Does NOT include any text (text will be overlaid separately)

Return ONLY the optimized prompt, nothing else.`;

        const result = await model.generateContent(optimizationPrompt);
        const response = await result.response;
        return response.text().trim();
    } catch (error) {
        console.warn(`Gemini optimization failed, using original prompt: ${error.message}`);
        return originalPrompt;
    }
}

async function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download: ${response.statusCode}`));
                return;
            }
            
            const fileStream = fs.createWriteStream(filepath);
            response.pipe(fileStream);
            
            fileStream.on('finish', () => {
                fileStream.close();
                resolve();
            });
            
            fileStream.on('error', reject);
        }).on('error', reject);
    });
}

async function generatePageImage(pageData) {
    console.log(`Generating image for page ${pageData.pageNumber}...`);
    
    try {
        // Optimize prompt with Gemini if available
        let prompt = pageData.prompt;
        if (genAI) {
            console.log(`  Optimizing prompt with Gemini...`);
            prompt = await optimizePromptWithGemini(pageData.prompt, pageData.referenceImages);
            console.log(`  Optimized prompt: ${prompt.substring(0, 100)}...`);
        }
        
        // Generate image with DALL-E
        console.log(`  Generating image with DALL-E...`);
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            size: "1024x1024",
            quality: "standard",
            n: 1,
        });
        
        const imageUrl = response.data[0].url;
        console.log(`  Image generated: ${imageUrl}`);
        
        // Download and save image
        const outputDir = path.join(__dirname, '..', 'images', 'books', 'kais-first-birthday-book');
        const outputPath = path.join(outputDir, `page-${String(pageData.pageNumber).padStart(2, '0')}.png`);
        
        await downloadImage(imageUrl, outputPath);
        console.log(`  ✓ Saved: ${outputPath}\n`);
        
        // Rate limiting - DALL-E has limits
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds between requests
        
    } catch (error) {
        console.error(`  ✗ Error generating page ${pageData.pageNumber}:`, error.message);
        throw error;
    }
}

async function main() {
    // Create output directory
    const outputDir = path.join(__dirname, '..', 'images', 'books', 'kais-first-birthday-book');
    try {
        await fs.mkdir(outputDir, { recursive: true });
    } catch (error) {
        console.error('Error creating output directory:', error);
        process.exit(1);
    }
    
    console.log('Starting image generation with DALL-E...');
    if (genAI) {
        console.log('(Using Gemini to optimize prompts)\n');
    } else {
        console.log('(Using original prompts - add GEMINI_API_KEY to .env to optimize prompts)\n');
    }
    console.log(`Output directory: ${outputDir}\n`);
    
    // Generate images for each page
    for (const pageData of bookPages) {
        try {
            await generatePageImage(pageData);
        } catch (error) {
            console.error(`Failed to generate page ${pageData.pageNumber}:`, error.message);
            // Continue with next page
        }
    }
    
    console.log('Image generation complete!');
    console.log(`\nGenerated ${bookPages.length} images in: ${outputDir}`);
}

// Run the script
if (require.main === module) {
    main().catch(console.error);
}

module.exports = { generatePageImage, bookPages };

