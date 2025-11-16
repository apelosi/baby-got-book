# Image Generation Guide - Using Gemini 2.5 Flash Image

## ✅ Using Google's Gemini 2.5 Flash Image (Latest Image Generation Model)

**Great news!** The script uses **Gemini 2.5 Flash Image**, Google's latest Gemini model with native image generation capabilities, accessible through the Gemini API.

### Model Information
- **Model Name**: `gemini-2.5-flash-image`
- **Access**: Via Gemini API (same API key)
- **Features**: Native image generation built into Gemini, high-quality illustrations
- **Alternative Models**: 
  - `gemini-2.0-flash-exp-image-generation` (also available)
  - `gemini-2.5-flash-image-preview` (preview version)

## Quick Start

### 1. Ensure API Key is Set
Your Gemini API key should already be in `.env`:
```
GEMINI_API_KEY=your_api_key_here
```

### 2. Generate Images
```bash
npm run generate-images
```

This will:
1. Use Gemini 2.5 Flash Image to generate illustrations for all 18 pages
2. Save images to `books/kais-first-birthday-book/pages/page-XX.png`
3. Use reference images from `images/people/` and `images/storyline/` for inspiration

## How It Works

1. **Prompt Creation**: Each page has a detailed prompt based on the script and style guide
2. **Reference Images**: Loads reference photos to help Gemini understand the style
3. **Style Guide**: Applies children's board book style requirements
4. **Image Generation**: Gemini 2.5 Flash Image generates square format (1024x1024) illustrations
5. **Saving**: Images are saved as PNG files ready for the web app

## Troubleshooting

### API Errors

**Quota Exceeded (429 Error)** ⚠️
- **This is normal for free tier** - wait 12-60 seconds and retry
- The script includes automatic rate limiting (2 second delay between pages)
- Free tier has limited requests per day/minute
- **Solutions**:
  - Wait for quota to reset (usually resets every minute/day)
  - Consider upgrading your Google AI Studio plan for higher limits
  - Generate images in smaller batches (e.g., 5-6 pages at a time)

**Model Not Found (404 Error)**
- Verify the model name: `gemini-2.5-flash-image`
- Check available models: `node scripts/list-models-api.js`
- Ensure your API key has access to image generation models

**Unexpected Response Format**
- The script saves debug files if it can't parse the response
- Check `page-XX-response.json` files for the actual API response
- Update the script's response parsing if needed

### Image Quality Issues

If images don't match the style guide:
1. Review the prompts in the script
2. Adjust style requirements in the prompt
3. Ensure reference images are loading correctly
4. Try regenerating specific pages

## File Structure After Generation

```
books/kais-first-birthday-book/
└── pages/
    ├── page-01.png      # Front cover
    ├── page-02.png      # Title page
    ├── page-03.png      # Content page 1
    ├── page-04.png      # Content page 2 (left spread)
    ├── page-05.png      # Content page 3 (right spread)
    ...
    └── page-18.png      # Back cover
```

## Cost Information

- **Free Tier**: Limited requests per day/minute (you may hit quota limits)
- **Paid Tier**: Check [Google AI Studio pricing](https://ai.google.dev/pricing)
- **18 images**: May require waiting for quota resets or upgrading plan
- **Tip**: Generate images in batches to work within free tier limits

## Alternative: DALL-E Option

If you prefer to use DALL-E instead:
```bash
npm run generate-images-dalle
```
(Requires `OPENAI_API_KEY` in `.env`)

## Next Steps

1. **Generate Images**: Run `npm run generate-images`
2. **Review Images**: Check the generated images in `books/kais-first-birthday-book/pages/`
3. **Test Web App**: Open `index.html` to view the book
4. **Regenerate if Needed**: Delete specific page images and rerun the script

## Tips

- **Reference Images**: The script uses photos from `images/people/` and `images/storyline/` to help Imagen understand Kai's appearance and scenes
- **Style Consistency**: All prompts include the style guide requirements for consistent illustrations
- **Square Format**: All images are generated as 1024x1024 squares suitable for board books
- **No Text in Images**: Text is overlaid separately in the web app, so prompts explicitly exclude text

## Support

If you encounter issues:
1. Check the console output for error messages
2. Review debug files if generated (`page-XX-response.json`)
3. Verify API key permissions in Google AI Studio
4. Check Google's Imagen 4 documentation for API updates
