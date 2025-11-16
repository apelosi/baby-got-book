# Gemini Flash 2.5 Image Generation Setup Guide

## Important Note About Gemini Flash 2.5

**Current Status**: As of the creation of this application, Gemini Flash 2.5 may primarily be a text-generation model. For actual image generation, you have a few options:

### Option 1: Use Gemini's Image Generation API (if available)

If Google releases image generation capabilities for Gemini Flash 2.5, update the `generate-images.js` script to use the image generation endpoint. Check the [Google AI Studio](https://makersuite.google.com/) for the latest API capabilities.

### Option 2: Use Gemini with Image-to-Image Workflow

You could:
1. Use Gemini to generate detailed image descriptions/prompts
2. Use those prompts with an image generation service (DALL-E, Midjourney, Stable Diffusion)
3. Or use Gemini Vision to refine/review generated images

### Option 3: Use Alternative Image Generation Services

If Gemini Flash 2.5 doesn't support direct image generation, you can modify the script to use:

- **OpenAI DALL-E**: `openai.images.generate()`
- **Stable Diffusion API**: Various providers
- **Midjourney**: Via API if available
- **Google's Imagen**: If available through their API

## Getting Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key
5. Add it to your `.env` file:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

## Current Script Structure

The `scripts/generate-images.js` script is structured to:
1. Load reference images from `images/people/` and `images/storyline/`
2. Create detailed prompts based on the script and style guide
3. Send prompts to Gemini with reference images
4. Save generated images to `images/books/kais-first-birthday-book/`

## Adapting the Script for Image Generation

If Gemini Flash 2.5 returns text descriptions instead of images, you can:

1. **Use the descriptions with another service**: Extract the description and send it to DALL-E or another image generator
2. **Use Gemini Vision**: Generate images elsewhere, then use Gemini Vision to review/refine them
3. **Hybrid approach**: Use Gemini to create detailed prompts, then generate images with a dedicated image generation service

## Example: Adapting for OpenAI DALL-E

If you want to use DALL-E instead, modify the `generatePageImage` function:

```javascript
const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generatePageImage(pageData) {
    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: pageData.prompt,
        size: "1024x1024",
        quality: "standard",
        n: 1,
    });
    
    const imageUrl = response.data[0].url;
    // Download and save the image
    // ...
}
```

## Testing the Script

1. Ensure your `.env` file has the API key
2. Run: `node scripts/generate-images.js`
3. Check the console output for any errors
4. Verify images are saved to `images/books/kais-first-birthday-book/`

## Troubleshooting

- **"API key not found"**: Check that `.env` file exists and contains `GEMINI_API_KEY`
- **"Model not found"**: Verify the model name is correct (`gemini-2.0-flash-exp` or current version)
- **"Image generation not supported"**: The model may not support image generation - use an alternative service
- **Reference images not loading**: Check file paths are correct relative to the script location

## Next Steps

1. Test the script with your Gemini API key
2. If image generation isn't supported, choose an alternative service
3. Update the script accordingly
4. Generate all 18 page images
5. Test the web application with generated images

