/**
 * Image Generation Script for Kai's First Birthday Book
 * 
 * This script uses Google's Imagen 4 (latest image generation model) via Gemini API
 * to generate illustrations for each page of the book based on the script and style guide.
 * 
 * Setup:
 * 1. Install Node.js dependencies: npm install @google/generative-ai dotenv
 * 2. Create a .env file in the project root with: GEMINI_API_KEY=your_api_key_here
 * 3. Run: node scripts/generate-images.js
 */

require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs').promises;
const path = require('path');
const https = require('https');
const { characterDescriptions, styleGuideCore, backgroundColors } = require('./character-descriptions');
const { improvedPagePrompts, referenceImagesMap } = require('./improved-page-prompts');

// Initialize Gemini with image generation model
let genAI = null;
let imageModel = null;

if (process.env.GEMINI_API_KEY) {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    // Use Gemini 2.5 Flash Image - latest Gemini model with native image generation
    // Alternative: gemini-2.0-flash-exp-image-generation
    imageModel = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-image' });
} else {
    console.error('Error: GEMINI_API_KEY not found in .env file');
    process.exit(1);
}

// Build book pages array from improved prompts
const bookPages = Object.keys(improvedPagePrompts).map(pageNum => {
    const pageNumber = parseInt(pageNum);
    const pageData = improvedPagePrompts[pageNumber];
    return {
        pageNumber,
        characters: pageData.characters || [],
        textPlacement: pageData.textPlacement || 'top',
        prompt: pageData.prompt,
        referenceImages: referenceImagesMap[pageNumber] || []
    };
});

// Old bookPages array - keeping for reference but not used
// If you need to regenerate with old prompts, uncomment below
/*
const oldBookPages = [
    {
        pageNumber: 1,
        characters: ['kai'],
        textPlacement: 'top',
        prompt: `FRONT COVER - Children's board book illustration:

CHARACTER TO DRAW (study reference photos carefully):
${characterDescriptions.kai}

SCENE DESCRIPTION:
- Center: Kai with a cheerful expression and wide smile
- Surrounding elements: birthday cake (three tiers, blue and white balloon clusters, gold "Kai" and "1"), "Happy Birthday" and "KAI IS 1" banners as playful flags, floating music notes, toddler staircase, green dino car, colorful baby books, bath bubbles, plush stuffed animals
- Background: Solid soft sky blue pastel (#87CEEB)

TEXT SPACE REQUIREMENT:
- Reserve the TOP 25% of the image as blank space (solid background color only, no objects)
- This is where the title "Yippee Kai Yeh turns 1" will be placed
- Keep all characters and objects in the lower 75% of the image`,
        referenceImages: ['images/people/Kai at MOIC with Mommy Daddy.png', 'images/storyline/cake1.jpeg', 'images/storyline/cake2.jpeg', 'images/storyline/sign.jpeg']
    },
    {
        pageNumber: 2,
        prompt: `Create a children's board book illustration:
- Warm peach or coral pastel background (#FFBD9A)
- Cartoon portrait of a family: young child (Kai), Mommy, and Daddy together
- All smiling, close and loving, round gentle features
- Subtle hearts/stars as warm accents
- Bold black outlines, soft shapes, hand-drawn style
- Simple facial features, friendly expressions`,
        referenceImages: ['images/people/Kai at MOIC with Mommy Daddy.png']
    },
    {
        pageNumber: 3,
        prompt: `Create a children's board book illustration:
- Bright pastel yellow background (#FFD966)
- Large stylized birthday cake (three tiers, blue and white balloon decor, gold "Kai")
- Party banners: "Happy Birthday" and "KAI IS 1" in festive flags
- Confetti and sparkles for atmosphere
- Joyful, hand-drawn Boynton style with bold outlines
- Character (Kai) with giggly grin, round face, expressive eyes`,
        referenceImages: ['images/storyline/cake1.jpeg', 'images/storyline/cake2.jpeg', 'images/storyline/sign.jpeg']
    },
    {
        pageNumber: 4,
        prompt: `Create a children's board book illustration (LEFT PAGE of spread):
- Soft green pastel background (#9DC183) flowing across page
- Character (Kai) walking up stairs
- Adult hands gently supporting him
- Joyful motion, safe and supported
- Clean cartoon style with bold outlines
- Simple rounded shapes, minimal detail`,
        referenceImages: ['images/storyline/stairs.jpeg']
    },
    {
        pageNumber: 5,
        prompt: `Create a children's board book illustration (RIGHT PAGE of spread):
- Same soft green pastel background (#9DC183) as left page
- Character (Kai) walking down stairs confidently
- Both feet flat on floor
- Joyful motion, clean cartoon style
- Bold outlines, simple rounded shapes
- Continuation of left page scene`,
        referenceImages: ['images/storyline/stairs.jpeg']
    },
    {
        pageNumber: 6,
        prompt: `Create a children's board book illustration:
- Bold orange pastel background (#FFB088)
- Character (Kai) standing proud, holding a toy in each hand (simplified colorful shapes)
- Slight wiggle in pose, playful expression, big smile
- Bold black outlines, soft rounded forms
- Simple cartoon style`,
        referenceImages: ['images/storyline/holding toy.jpeg']
    },
    {
        pageNumber: 7,
        prompt: `Create a children's board book illustration:
- Light purple pastel background (#B8A9C9)
- Character (Kai) with arms wide, joyfully tossing a ball
- Ball rolls toward viewer
- Dynamic motion, eager face, simple shadows
- Bold outlines, playful cartoon style`,
        referenceImages: ['images/storyline/holding ball.jpg']
    },
    {
        pageNumber: 8,
        prompt: `Create a children's board book illustration (LEFT PAGE of spread):
- Blue pastel background (#7EC8E3)
- Character (Kai) joyfully dancing in front of a Sonos soundbar
- Musical notes swirl around
- Knees bent, arms flailing, pressing soundbar buttons
- Vibrant, energetic pose, playful Boynton style
- Bold outlines, simple shapes`,
        referenceImages: ['images/people/Kai at Sonos.png']
    },
    {
        pageNumber: 9,
        prompt: `Create a children's board book illustration (RIGHT PAGE of spread):
- Same blue pastel background (#7EC8E3) as left page
- Character (Kai) continuing to dance
- Flailing arms, proud expression
- Musical notes continue swirling
- Continuation of left page scene
- Bold outlines, playful style`,
        referenceImages: ['images/people/Kai at Sonos.png']
    },
    {
        pageNumber: 10,
        prompt: `Create a children's board book illustration:
- Soft cream pastel background (#FFF8DC)
- Character (Kai) riding or pushing green dino car with yellow accents
- Outdoor café environment suggested with minimal detail
- Carefree, smiling, cartoon simplicity
- Bold outlines, simple rounded shapes`,
        referenceImages: ['images/storyline/Kai pushing green dino car.HEIC']
    },
    {
        pageNumber: 11,
        prompt: `Create a children's board book illustration:
- Soft pink pastel background (#F4A4A4)
- Character (Kai) cheerfully waving at friendly strangers (simplified facial features)
- Park-like setting with trees and benches (minimal detail)
- Focus on Kai's wave and nearby happy faces
- Bold outlines, simple cartoon style`,
        referenceImages: ['images/storyline/Kai outside in stroller.jpg']
    },
    {
        pageNumber: 12,
        prompt: `Create a children's board book illustration:
- Muted aqua pastel background (#8FBC8F)
- Character (Kai) eagerly flipping a chewed-up baby photo book, pointing at a baby image inside
- Daddy can be shown reading nearby (gentle outline)
- Emphasis on excitement and book love
- Cartoon rendering with bold outlines`,
        referenceImages: ['images/storyline/Kai reading books with Daddy.jpeg', 'images/people/Kai with Book.png']
    },
    {
        pageNumber: 13,
        prompt: `Create a children's board book illustration:
- Warm apricot pastel background (#FFCC99)
- Character (Kai) in high chair, happily eating scrambled eggs, avocado, banana, and yogurt
- Messy tray, food on fingers, food on floor
- Cheerful and silly expression
- Bold outlines, simple cartoon style`,
        referenceImages: ['images/storyline/eating eggs.png']
    },
    {
        pageNumber: 14,
        prompt: `Create a children's board book illustration:
- Soft pink pastel background (#F4A4A4)
- Character (Kai) laughing in bubbly bath
- Includes blue measuring cup and squishy fish toy
- Splashing water, bubbly arcs
- Playful, rounded shapes, bold outlines`,
        referenceImages: ['images/people/Kai in bath.png']
    },
    {
        pageNumber: 15,
        prompt: `Create a children's board book illustration:
- Calm taupe pastel background (#D2B48C)
- Character (Kai) curled up with favorite stuffed animals (monkey, bear, blue dragosaur)
- Nightlight softly glowing
- Cozy, gentle shading, contented face
- Bold outlines, soft rounded shapes`,
        referenceImages: ['images/storyline/kai in crib with monkey.jpeg']
    },
    {
        pageNumber: 16,
        prompt: `Create a children's board book illustration:
- Deep lavender pastel background (#C8B8D0)
- Character (Kai) asleep in crib, snuggling monkey, bear, dragosaur
- Wrapped in sleep sack
- Simple moon or subtle stars in background
- Bold outlines, gentle peaceful scene`,
        referenceImages: ['images/storyline/Kai sleeping in sleep sack with white bear stuffed animal.jpeg', 'images/storyline/kai in crib with monkey.jpeg']
    },
    {
        pageNumber: 17,
        prompt: `Create a children's board book illustration:
- Green pastel background (#9DC183)
- Mommy gently trying to brush character's (Kai) teeth
- Kai turns away with mildly upset, resistant expression
- Toothbrush visible, small foam at mouth
- Simple, expressive cartoon style with bold outlines`,
        referenceImages: ['images/people/Kai at MOIC with Mommy Daddy.png']
    },
    // ... (old prompts removed, see improved-page-prompts.js for current versions)
];
*/

async function loadImageAsBase64(imagePath) {
    try {
        const fullPath = path.join(__dirname, '..', imagePath);
        const imageBuffer = await fs.readFile(fullPath);
        const base64 = imageBuffer.toString('base64');
        const ext = path.extname(imagePath).slice(1).toLowerCase();
        const mimeType = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : 
                         ext === 'heic' ? 'image/heic' : 'image/png';
        return {
            inlineData: {
                data: base64,
                mimeType: mimeType
            }
        };
    } catch (error) {
        console.warn(`Could not load reference image ${imagePath}:`, error.message);
        return null;
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
        // Load reference images
        const imageParts = [];
        for (const refImage of pageData.referenceImages) {
            const imagePart = await loadImageAsBase64(refImage);
            if (imagePart) {
                imageParts.push(imagePart);
            }
        }
        
        // Create the full prompt with style guide instructions
        const fullPrompt = `${pageData.prompt}

${styleGuideCore}

IMPORTANT REMINDERS:
1. Study the reference photos carefully to match character appearances exactly
2. Keep characters consistent - they should look the same as in previous pages
3. Leave 25-30% of the image as blank background space for text
4. Output MUST be perfectly square (1024x1024 pixels, 1:1 aspect ratio)
5. Do NOT include any text in the illustration - text will be added separately`;

        // Generate image with Gemini 2.5 Flash Image
        console.log(`  Sending request to Gemini 2.5 Flash Image...`);
        
        // Build the content parts
        const promptParts = [{ text: fullPrompt }];
        
        // Add reference images if available (for style reference)
        if (imageParts.length > 0) {
            promptParts.push(...imageParts.filter(img => img !== null));
        }
        
        const result = await imageModel.generateContent({
            contents: [{ parts: promptParts }],
            generationConfig: {
                temperature: 0.4,
            }
        });
        
        const response = await result.response;
        
        // Save image
        const outputDir = path.join(__dirname, '..', 'books', 'kais-first-birthday-book', 'pages');
        const outputPath = path.join(outputDir, `page-${String(pageData.pageNumber).padStart(2, '0')}.png`);
        
        // Try to extract image from response
        // Imagen 4 may return images in different formats
        let imageUrl = null;
        let imageData = null;
        
        // Check response structure
        if (response.candidates && response.candidates[0]) {
            const candidate = response.candidates[0];
            
            // Check content.parts for image data
            if (candidate.content && candidate.content.parts) {
                for (const part of candidate.content.parts) {
                    if (part.inlineData && part.inlineData.data) {
                        imageData = part.inlineData.data;
                        break;
                    } else if (part.url) {
                        imageUrl = part.url;
                        break;
                    }
                }
            }
            
            // Check if response has imageBytes directly
            if (!imageData && !imageUrl && candidate.imageBytes) {
                imageData = candidate.imageBytes;
            }
        }
        
        // Alternative: Check if response has imageBytes at top level
        if (!imageData && !imageUrl && response.imageBytes) {
            imageData = response.imageBytes;
        }
        
        // Alternative: Check if response has imageUrl
        if (!imageData && !imageUrl && response.imageUrl) {
            imageUrl = response.imageUrl;
        }
        
        if (imageData) {
            // Save base64 image data
            const imageBuffer = Buffer.from(imageData, 'base64');
            await fs.writeFile(outputPath, imageBuffer);
            console.log(`  ✓ Saved: ${outputPath}`);
        } else if (imageUrl) {
            // Download image from URL
            await downloadImage(imageUrl, outputPath);
            console.log(`  ✓ Downloaded and saved: ${outputPath}`);
        } else {
            // Fallback: save response for debugging
            console.warn(`  ⚠ Unexpected response format. Saving response for debugging.`);
            const debugPath = path.join(outputDir, `page-${String(pageData.pageNumber).padStart(2, '0')}-response.json`);
            await fs.writeFile(debugPath, JSON.stringify(response, null, 2));
            console.log(`  Full response saved to: ${debugPath}`);
            console.log(`  Response keys:`, Object.keys(response));
            if (response.candidates && response.candidates[0]) {
                console.log(`  Candidate keys:`, Object.keys(response.candidates[0]));
            }
            throw new Error('Could not extract image from response. Check the debug file for response structure.');
        }
        
        // Rate limiting - wait between requests
        await new Promise(resolve => setTimeout(resolve, 2000));
        
    } catch (error) {
        console.error(`  ✗ Error generating page ${pageData.pageNumber}:`, error.message);
        if (error.response) {
            console.error(`  Response:`, JSON.stringify(error.response, null, 2));
        }
        throw error;
    }
}

async function main() {
    // Check for API key
    if (!process.env.GEMINI_API_KEY) {
        console.error('Error: GEMINI_API_KEY not found in .env file');
        console.log('Please create a .env file with: GEMINI_API_KEY=your_api_key_here');
        process.exit(1);
    }
    
    // Create output directory
    const outputDir = path.join(__dirname, '..', 'books', 'kais-first-birthday-book', 'pages');
    try {
        await fs.mkdir(outputDir, { recursive: true });
    } catch (error) {
        console.error('Error creating output directory:', error);
        process.exit(1);
    }
    
    console.log('Starting image generation with Gemini 2.5 Flash Image...');
    console.log('(Latest Gemini model with native image generation capabilities)');
    console.log(`Output directory: ${outputDir}`);
    console.log('');
    
    // Generate images for each page
    let successCount = 0;
    let failCount = 0;
    
    for (const pageData of bookPages) {
        try {
            await generatePageImage(pageData);
            successCount++;
            console.log('');
        } catch (error) {
            failCount++;
            console.error(`Failed to generate page ${pageData.pageNumber}:`, error.message);
            console.log('');
        }
    }
    
    console.log('Image generation complete!');
    console.log(`Successfully generated: ${successCount} images`);
    if (failCount > 0) {
        console.log(`Failed: ${failCount} images`);
    }
    console.log(`\nImages saved to: ${outputDir}`);
}

// Run the script
if (require.main === module) {
    main().catch(console.error);
}

module.exports = { generatePageImage, bookPages };
