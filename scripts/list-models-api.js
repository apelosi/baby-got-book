/**
 * List available models from Gemini API
 */

require('dotenv').config();
const https = require('https');

async function listModels() {
    if (!process.env.GEMINI_API_KEY) {
        console.error('Error: GEMINI_API_KEY not found in .env file');
        process.exit(1);
    }

    const apiKey = process.env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const response = JSON.parse(data);
                    if (response.models) {
                        console.log('Available models:\n');
                        response.models.forEach(model => {
                            console.log(`- ${model.name}`);
                            if (model.supportedGenerationMethods) {
                                console.log(`  Methods: ${model.supportedGenerationMethods.join(', ')}`);
                            }
                            console.log('');
                        });
                        
                        // Filter for Imagen models
                        const imagenModels = response.models.filter(m => 
                            m.name.toLowerCase().includes('imagen') || 
                            m.name.toLowerCase().includes('image')
                        );
                        
                        if (imagenModels.length > 0) {
                            console.log('\n=== Imagen/Image Generation Models ===\n');
                            imagenModels.forEach(model => {
                                console.log(`- ${model.name}`);
                                if (model.supportedGenerationMethods) {
                                    console.log(`  Methods: ${model.supportedGenerationMethods.join(', ')}`);
                                }
                                console.log('');
                            });
                        }
                    } else {
                        console.log('Response:', JSON.stringify(response, null, 2));
                    }
                    resolve();
                } catch (error) {
                    console.error('Error parsing response:', error);
                    console.log('Raw response:', data);
                    reject(error);
                }
            });
        }).on('error', (error) => {
            console.error('Error:', error);
            reject(error);
        });
    });
}

listModels().catch(console.error);

