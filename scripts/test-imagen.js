/**
 * Test script to verify Imagen 4 API connection
 */

require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function testImagen() {
    if (!process.env.GEMINI_API_KEY) {
        console.error('Error: GEMINI_API_KEY not found in .env file');
        process.exit(1);
    }

    console.log('Testing Imagen 4 API connection...\n');
    
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        // Use Gemini 2.5 Flash Image - latest Gemini model with native image generation
        const imageModel = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-image' });
        
        console.log('Model initialized: gemini-2.5-flash-image');
        console.log('(Latest Gemini model with native image generation)');
        console.log('Sending test request...\n');
        
        const testPrompt = `Create a simple children's book illustration: 
A cheerful cartoon character with round face, simple dot eyes, and a big smile. 
Pastel blue background. Bold black outlines. Square format, 1024x1024 pixels. 
No text in the image.`;
        
        const result = await imageModel.generateContent({
            contents: [{ parts: [{ text: testPrompt }] }],
            generationConfig: {
                temperature: 0.4,
            }
        });
        
        const response = await result.response;
        
        console.log('✓ API request successful!');
        console.log('\nResponse structure:');
        console.log('Keys:', Object.keys(response));
        
        if (response.candidates && response.candidates[0]) {
            console.log('\nCandidate structure:');
            console.log('Keys:', Object.keys(response.candidates[0]));
            
            const candidate = response.candidates[0];
            if (candidate.content && candidate.content.parts) {
                console.log('\nContent parts:');
                candidate.content.parts.forEach((part, i) => {
                    console.log(`Part ${i}:`, Object.keys(part));
                });
            }
        }
        
        console.log('\n✓ Gemini Image Generation API is working!');
        console.log('You can now run: npm run generate-images');
        
    } catch (error) {
        console.error('\n✗ Error:', error.message);
        
        if (error.message.includes('404')) {
            console.log('\nPossible issues:');
            console.log('- Model name might be incorrect');
            console.log('- Check Google AI Studio for current model names');
            console.log('- Verify your API key has access to image generation models');
            console.log('- Try running: node scripts/list-models-api.js to see available models');
        } else if (error.message.includes('429')) {
            console.log('\nRate limit exceeded. Wait a few minutes and try again.');
        } else if (error.message.includes('403')) {
            console.log('\nPermission denied. Check API key permissions.');
        }
        
        console.log('\nFull error:', error);
        process.exit(1);
    }
}

testImagen();

