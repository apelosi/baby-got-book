# Quick Reference Card

## Common Commands

### Generate All Images
```bash
npm run generate-images
```

### View the Book
```bash
# If server not running, start it:
python3 -m http.server 8000

# Then open: http://localhost:8000
```

### Check Images Generated
```bash
ls books/kais-first-birthday-book/pages/
```

## Quick Edits

### Change Character Appearance (All Pages)
Edit: `scripts/character-descriptions.js`
```javascript
kai: `Kai is a 1-year-old toddler with:
- [CHANGE HERE] Asian ethnicity with medium-warm skin tone
- [CHANGE HERE] Very short dark brown/black hair
- ...`
```
Then regenerate: `npm run generate-images`

### Change Single Page
Edit: `scripts/improved-page-prompts.js`
```javascript
3: {
    characters: ['kai'],
    textPlacement: 'top',
    prompt: `PAGE 3 - ...
    [CHANGE SCENE DESCRIPTION HERE]`
}
```
Then regenerate: `npm run generate-images`

### Update Style Guide
Edit: `children-board-book-style-guide.md`
(Changes apply to future generations)

## Troubleshooting Quick Fixes

### "Could not load reference image"
```bash
# Check if image exists
ls images/people/
ls images/storyline/

# If missing, see: REFERENCE_IMAGES_SETUP.md
```

### Characters Still Look Different
1. Check character descriptions in `scripts/character-descriptions.js`
2. Make descriptions more specific
3. Add more reference photos
4. Regenerate

### No Text Space
1. Edit page prompt in `scripts/improved-page-prompts.js`
2. Increase text space requirement (e.g., "TOP 30%" → "TOP 40%")
3. Regenerate specific page

### Images Not Square
- Should be fixed automatically
- Check Gemini API response in console
- Verify output dimensions: `file books/kais-first-birthday-book/pages/page-01.png`

## File Locations

| File | Purpose | When to Edit |
|------|---------|-------------|
| `scripts/character-descriptions.js` | Character specs | Change appearance globally |
| `scripts/improved-page-prompts.js` | Page-specific prompts | Change single page |
| `children-board-book-style-guide.md` | Style guidelines | Update style requirements |
| `books/kais-first-birthday-book/pages/` | Generated images | Check output |
| `images/people/` | Reference photos | Add character photos |
| `images/storyline/` | Reference photos | Add scene photos |

## Quick Checks

### Character Consistency ✅
```bash
# View all generated images quickly
open books/kais-first-birthday-book/pages/
```
Check: Does Kai look the same in all pages?

### Text Space ✅
Look at each image: Is there blank space for text?

### Square Format ✅
```bash
# Check dimensions (should be 1024x1024)
file books/kais-first-birthday-book/pages/*.png | grep -v "1024 x 1024"
```
If output is empty: All images are square ✅

## Documentation Files

| File | Description |
|------|-------------|
| `CHANGES_SUMMARY.md` | **START HERE** - Overview of all changes |
| `IMAGE_GENERATION_IMPROVEMENTS.md` | Detailed improvements documentation |
| `REFERENCE_IMAGES_SETUP.md` | How to add reference photos |
| `QUICK_REFERENCE.md` | **THIS FILE** - Quick commands |
| `README.md` | Project overview |
| `IMAGE_GENERATION_GUIDE.md` | Original guide |

## Cost & Time

| Operation | Cost | Time |
|-----------|------|------|
| Generate 1 page | ~$0.05-0.10 | ~3-5 seconds |
| Generate all 18 pages | ~$0.90-1.80 | ~1-2 minutes |
| View in browser | Free | Instant |

Your $300 credit = ~150-300 full book regenerations

## Workflow

### Initial Generation
```bash
# 1. Optional: Add reference photos
mkdir -p images/people images/storyline
# (copy photos into folders)

# 2. Generate
npm run generate-images

# 3. View
open http://localhost:8000
```

### Iterative Refinement
```bash
# 1. Edit character descriptions or page prompts
# 2. Regenerate
npm run generate-images

# 3. Check results
open books/kais-first-birthday-book/pages/

# 4. Repeat until satisfied
```

## Getting Help

- **Character consistency issues**: See `IMAGE_GENERATION_IMPROVEMENTS.md` → Character Quality
- **Text space problems**: See `IMAGE_GENERATION_IMPROVEMENTS.md` → Text Space
- **Reference images**: See `REFERENCE_IMAGES_SETUP.md`
- **Format issues**: See `IMAGE_GENERATION_IMPROVEMENTS.md` → Troubleshooting
- **Style questions**: See `children-board-book-style-guide.md`

## Emergency Fixes

### Revert to Old Prompts
Edit `scripts/generate-images.js`:
```javascript
// Comment out new implementation
// const bookPages = Object.keys(improvedPagePrompts).map(...);

// Uncomment old implementation
const bookPages = [
    // Old prompts are still in the file, commented out
];
```

### Regenerate Single Page
Edit `scripts/generate-images.js`, in `main()` function:
```javascript
for (const pageData of bookPages.filter(p => p.pageNumber === 5)) {
    await generatePageImage(pageData);
}
```

### Check API Key
```bash
cat .env
# Should show: GEMINI_API_KEY=your_key_here
```

## Success Criteria

✅ **Ready for production when**:
- All characters look identical across pages
- Characters match reference photos
- Each page has 25-30% blank space
- All images are square (1024x1024)
- Boynton style is consistent
- Text overlays look good in browser

## Contact / Questions

For issues not covered here:
1. Check `IMAGE_GENERATION_IMPROVEMENTS.md` (comprehensive troubleshooting)
2. Review `CHANGES_SUMMARY.md` (what changed and why)
3. Read `REFERENCE_IMAGES_SETUP.md` (reference photo issues)

