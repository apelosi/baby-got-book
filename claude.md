# Baby Got Book

A web application for creating and viewing personalized children's birthday books with an interactive flip-book interface.

## Project Overview

Baby Got Book allows users to view custom children's books with:
- Interactive page-turning animations (Turn.js)
- PDF export functionality
- Modern glassmorphism UI design

## Resources

Script for Kai's 1st Birthday Book
https://docs.google.com/document/d/1W6dhxwdvMHKjHTUccdvpDWF3KKpt0Gp6jLOeEE137CQ

## Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Libraries**:
  - jQuery 3.6.0
  - Turn.js (page flip animations)
  - jsPDF 2.5.1 (PDF generation)
  - html2canvas 1.4.1 (DOM to canvas)
- **Design**: RONAS-inspired modern UI with glassmorphism effects
- **Fonts**: Roboto (Google Fonts), Material Icons

## Project Structure

```
baby-got-book/
├── index.html              # Library page (book grid)
├── book-viewer.html        # Book viewing page with Turn.js
├── js/
│   ├── book-data.js        # Book content data structure
│   ├── book-viewer.js      # Book viewer & PDF export logic
│   └── library.js          # Library page functionality
├── styles/
│   ├── main.css            # Global styles, library page
│   └── book-viewer.css     # Book viewer specific styles
├── books/
│   └── kais-first-birthday-book/
│       ├── pages/          # Generated page images (page-01.png to page-18.png)
│       ├── people/         # Source photos of people
│       └── storyline/      # Source photos for story
├── images/                 # Training images for image generation
├── scripts/                # Book scripts/storylines
└── node_modules/           # Google Generative AI SDK (for future use)
```

## Key Files

### js/book-data.js
Contains the book data structure with:
- Page metadata (number, type, backgroundColor)
- Text content (lines with size, weight properties)
- Image paths for each page

### js/book-viewer.js
Handles:
- Turn.js initialization for page flip animations
- Navigation controls (prev/next, keyboard arrows)
- PDF export functionality (rebuilds pages from data)

### js/library.js
Simple library grid that displays available books as clickable cards.

## Running the App

```bash
# Start a local server (required for image loading)
python3 -m http.server 8000

# Or with Node.js
npx serve .
```

Then open http://localhost:8000

## Current Book

**Kai's First Birthday Book** - 18 pages including:
- Cover and title pages
- Content pages with rhyming text
- Two-page spreads
- Back cover

## Known Issues / Pending Work

### 1. PDF Export - Images May Not Load Properly
**Issue**: The PDF export rebuilds pages from scratch rather than capturing the Turn.js DOM. Image loading depends on proper CORS headers and local server configuration.

**Technical Details**:
- PDF uses 500x500px square format per page
- Images loaded with 5-second timeout
- Export time: ~18-36 seconds for 18 pages

**Testing**: Check browser console for:
```
Rendering page X to PDF...
✓ Page X rendered successfully
```

### 2. Page Images Need to Exist
**Issue**: The book references images at `books/kais-first-birthday-book/pages/page-XX.png` - these need to be generated/created for the book to display properly.

**Current State**: Source photos exist in `people/` and `storyline/` folders but final page images may need generation.

### 3. Turn.js CDN Source
**Issue**: Turn.js is loaded from `raw.githack.com` which may be unreliable for production.

**Recommendation**: Download Turn.js locally or use a more stable CDN.

## Code Patterns

### Adding a New Book
1. Create book data object in `js/book-data.js` following `kaiBookData` structure
2. Add to `bookLibrary` array
3. Create page images in `books/{book-id}/pages/`

### Page Types
- `cover` - Front cover
- `title` - Title/dedication page
- `content` - Standard content page
- `spread-left` / `spread-right` - Two-page spread pairs
- `back-cover` - Back cover

### Text Sizing
- `large` - 3rem, bold (typically titles)
- `medium` - 2rem (main content)
- `small` - 1.25rem (supplementary text)

## Development Notes

- Use `object-fit: contain` for images to preserve aspect ratio
- Turn.js requires pages to be `position: absolute`
- PDF export bypasses Turn.js DOM manipulation issues by rebuilding pages
- Glassmorphism effects use `backdrop-filter: blur()` - check browser support

## Future Enhancements

- Book creation wizard
- AI-powered image generation (Google Generative AI SDK included)
- Multiple book support
- Dark mode
- Print-ready PDF formatting
