# Baby Got Book - Kai's First Birthday Book

A mobile-responsive web application for viewing personalized children's board books, built with Material Design guidelines.

## Features

- **Library Page**: Browse available books
- **Book Viewer**: Interactive page-turning experience using Turn.js
- **PDF Export**: Export books as PDF with two-page spreads
- **Material Design**: Modern, responsive UI following Google Material Design guidelines

## Setup Instructions

### 1. Install Dependencies

For the web application, no build step is required. Simply open `index.html` in a web browser.

For image generation, install Node.js dependencies:

```bash
npm install @google/generative-ai dotenv
```

### 2. Set Up Gemini API Key

1. Get your Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a `.env` file in the project root:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```
3. **Important**: Add `.env` to your `.gitignore` file to keep your API key secure

### 3. Generate Book Illustrations

Run the image generation script:

```bash
npm run generate-images
```

Or test the API connection first:

```bash
npm run test-imagen
```

This will:
- Use **Gemini 2.5 Flash Image** (Google's latest Gemini model with native image generation) via Gemini API
- Generate illustrations for all 18 pages of Kai's First Birthday Book
- Save images to `books/kais-first-birthday-book/pages/`
- Use reference images from `images/people/` and `images/storyline/` for inspiration

**Note**: The script uses `gemini-2.5-flash-image` which is Google's latest Gemini model with built-in image generation. Free tier has rate limits - if you hit quota limits, wait a few minutes and retry, or see `IMAGE_GENERATION_GUIDE.md` for troubleshooting.

### 4. View the Book

1. Open `index.html` in a web browser
2. Click on "Kai's First Birthday Book" to view it
3. Use arrow buttons or keyboard arrows to turn pages
4. Click "Export PDF" to generate a PDF version

## Project Structure

```
baby-got-book/
├── index.html              # Library page
├── book-viewer.html        # Book viewer page
├── styles/
│   ├── main.css           # Main styles and Material Design components
│   └── book-viewer.css   # Book viewer specific styles
├── js/
│   ├── library.js        # Library page functionality
│   ├── book-viewer.js    # Book viewer functionality
│   └── book-data.js      # Book data structure
├── scripts/
│   └── generate-images.js # Image generation script
├── images/
│   ├── books/
│   │   └── kais-first-birthday-book/  # Generated book images
│   ├── people/           # Reference photos of Kai and family
│   └── storyline/        # Reference photos for scenes
└── .env                  # API keys (not in git)
```

## Book Structure

The book follows the structure defined in `script-for-kai-1st-birthday.md`:
- Page 1: Front Cover
- Page 2: Title Page
- Pages 3-17: Content pages (some as two-page spreads)
- Page 18: Back Cover

## Page Turning

- **First Page**: Shows front cover only
- **Content Pages**: Show two-page spreads (left and right pages)
- **Last Page**: Shows back cover only
- Navigation: Use arrow buttons or keyboard arrow keys

## PDF Export

The PDF export creates a landscape-oriented PDF with:
- Front cover as single page
- Content pages as two-page spreads where applicable
- Back cover as single page

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Touch gestures supported on mobile devices

## Development Notes

- Uses Turn.js for page turning animation
- Uses jsPDF and html2canvas for PDF generation
- Material Design implemented with custom CSS (no framework)
- Images are generated once and cached locally

## Troubleshooting

### Images Not Loading
- Ensure images have been generated using the image generation script
- Check that image paths in `book-data.js` match the actual file locations

### PDF Export Not Working
- Ensure html2canvas and jsPDF libraries are loaded
- Check browser console for errors
- Some browsers may block PDF downloads - check popup blockers

### API Key Issues
- Verify `.env` file exists and contains `GEMINI_API_KEY`
- Check that the API key is valid and has proper permissions
- Ensure `dotenv` package is installed if running image generation script

