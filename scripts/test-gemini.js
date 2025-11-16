/**
 * Test script to verify Gemini API connection and capabilities
 */

require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function testGemini() {
    if (!process.env.GEMINI_API_KEY) {
        console.error('Error: GEMINI_API_KEY not found in .env file');
        process.exit(1);
    }

    console.log('Testing Gemini API connection...\n');
    
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        
        // Try different model names
        const models = [
            'gemini-2.0-flash-exp',
            'gemini-1.5-flash',
            'gemini-1.5-pro',
            'gemini-pro'
        ];
        
        for (const modelName of models) {
            try {
                console.log(`Testing model: ${modelName}...`);
                const model = genAI.getGenerativeModel({ model: modelName });
                
                const prompt = 'Hello! Can you generate images? Respond with yes or no.';
                const result = await model.generateContent(prompt);
                const response = await result.response;
                const text = response.text();
                
                console.log(`✓ ${modelName} works!`);
                console.log(`Response: ${text.substring(0, 100)}...\n`);
                
            } catch (error) {
                console.log(`✗ ${modelName} failed: ${error.message}\n`);
            }
        }
        
        console.log('\nNote: Gemini models are primarily text generation models.');
        console.log('For image generation, you may need to use:');
        console.log('- Google Imagen API (if available)');
        console.log('- OpenAI DALL-E API');
        console.log('- Stable Diffusion API');
        console.log('- Or use Gemini to generate detailed prompts for image generation services');
        
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

testGemini();

