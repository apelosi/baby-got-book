/**
 * List available Gemini models
 */

require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function listModels() {
    if (!process.env.GEMINI_API_KEY) {
        console.error('Error: GEMINI_API_KEY not found in .env file');
        process.exit(1);
    }

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        
        // Try to list models (this might require a different endpoint)
        console.log('Note: Gemini API primarily supports text generation.');
        console.log('For image generation, consider using:');
        console.log('1. OpenAI DALL-E API');
        console.log('2. Stable Diffusion API');
        console.log('3. Google Imagen (if available)');
        console.log('\nWe can use Gemini to create optimized prompts for image generation.');
        
    } catch (error) {
        console.error('Error:', error.message);
    }
}

listModels();

