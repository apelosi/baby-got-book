# Reference Images Setup Guide

## Overview
The image generation system requires reference photos to create consistent character illustrations. These photos help Gemini accurately depict Kai, Dian, and Tony throughout the book.

## Required Directory Structure

Your `images` folder should contain two subdirectories:

```
images/
├── people/              ← Photos of Kai, Dian, and Tony
├── storyline/           ← Photos of scenes and objects
└── books-for-image-generation-training/  ← Style reference (already present)
```

## Current Status

⚠️ **MISSING**: The `people/` and `storyline/` folders are not currently in your images directory.

The image generation script will still work without reference images, but character consistency will be worse. The character descriptions in the prompts will help, but reference photos significantly improve accuracy.

## Setting Up Reference Images

### 1. Create the Directories

```bash
cd "/Users/apelosi/Library/Mobile Documents/com~apple~CloudDocs/Development/Cursor and Claude Code/baby-got-book"
mkdir -p images/people
mkdir -p images/storyline
```

### 2. Add People Photos

Place photos of Kai, Dian, and Tony in `images/people/`:

**Required Photos:**
- Photos showing Kai clearly (face, full body)
- Photos showing Dian (Kai's mom) clearly
- Photos showing Tony (Kai's dad) clearly
- Family photos showing all three together

**Naming Convention** (as referenced in the prompts):
- `Kai at MOIC with Mommy Daddy.png` - Family photo
- `Kai at Sonos.png` - Kai at the Sonos soundbar
- `Kai with Book.png` - Kai with a book
- `Kai in bath.png` - Kai in the bathtub

**File Format Tips:**
- PNG, JPEG, JPG, or HEIC formats work
- Clear, well-lit photos work best
- Multiple angles/expressions of each person help
- Close-up face photos are most useful for character design

### 3. Add Storyline Photos

Place scene and object photos in `images/storyline/`:

**Referenced in Prompts:**
- `cake1.jpeg` - Birthday cake
- `cake2.jpeg` - Another birthday cake view
- `sign.jpeg` - Birthday sign/banner
- `stairs.jpeg` - Stairs (for pages 4-5)
- `holding toy.jpeg` - Kai holding a toy
- `holding ball.jpg` - Kai with a ball
- `Kai pushing green dino car.HEIC` - Kai with dino car
- `Kai outside in stroller.jpg` - Kai outdoors
- `Kai reading books with Daddy.jpeg` - Reading scene
- `eating eggs.png` - Mealtime
- `kai in crib with monkey.jpeg` - Bedtime with stuffed animal
- `Kai sleeping in sleep sack with white bear stuffed animal.jpeg` - Sleeping

## What Happens Without Reference Images?

The script will still generate images, but:
- Character appearance may not match real people as closely
- Consistency between pages may be less accurate
- Scene details may not reflect actual objects/locations

**Character descriptions in the prompts help**, but photos are much better for accuracy.

## Testing Reference Images

After adding your reference images, test that they load correctly:

```bash
cd "/Users/apelosi/Library/Mobile Documents/com~apple~CloudDocs/Development/Cursor and Claude Code/baby-got-book"
ls -la images/people/
ls -la images/storyline/
```

Then run the image generation:

```bash
npm run generate-images
```

Watch the console output for:
- ✓ Reference images loading successfully (no warnings)
- ⚠️ "Could not load reference image..." warnings (file missing or unreadable)

## Updating Reference Image Paths

If your image files have different names, update them in `scripts/improved-page-prompts.js`:

```javascript
const referenceImagesMap = {
    1: ['images/people/YOUR_FILENAME_HERE.png', 'images/storyline/cake.jpeg'],
    2: ['images/people/family_photo.jpg'],
    // ... etc
};
```

## Privacy Note

Reference images are:
- Used locally only (not uploaded to any server except Gemini API during generation)
- Sent to Gemini API as part of the image generation request
- Not stored or cached by the generation script
- Only used to inform character design, not embedded in final images

## Alternative: Generate Without Reference Images

If you prefer not to use reference photos, the system will still work with:
- Character descriptions in prompts (already detailed)
- Style guide requirements
- Consistency reminders

To generate without photos, simply leave the folders empty. The script handles missing reference images gracefully.

## Troubleshooting

### "Could not load reference image" Warnings

**Cause**: File doesn't exist or path is wrong

**Solutions**:
1. Check file exists: `ls "images/people/filename.png"`
2. Check filename matches exactly (case-sensitive)
3. Verify file format is supported (PNG, JPEG, JPG, HEIC)
4. Update path in `scripts/improved-page-prompts.js` if needed

### Reference Images Not Improving Consistency

**Possible Issues**:
1. Photos are low quality or unclear
2. Multiple photos show different appearances (lighting, angle)
3. Need more photos of each person
4. Character description in prompt may need adjustment

**Solutions**:
- Use clearer, well-lit photos
- Add multiple photos per character (different angles)
- Ensure photos consistently show same appearance
- Update character descriptions in `scripts/character-descriptions.js`

## Next Steps

1. ✅ Add reference photos to `images/people/` and `images/storyline/`
2. ✅ Verify photos load correctly
3. ✅ Run image generation: `npm run generate-images`
4. ✅ Check output for character consistency
5. ✅ Adjust character descriptions if needed
6. ✅ Regenerate images until satisfied

## Questions?

If you have questions about:
- Which photos to use
- How to organize images
- Updating character descriptions
- Troubleshooting image generation

Refer to:
- `IMAGE_GENERATION_IMPROVEMENTS.md` - System improvements
- `IMAGE_GENERATION_GUIDE.md` - Original generation guide
- `scripts/character-descriptions.js` - Character specs
- `scripts/improved-page-prompts.js` - Page-specific prompts

