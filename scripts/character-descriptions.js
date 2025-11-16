/**
 * Character descriptions for consistent appearance across all pages
 * Based on reference photos provided
 */

const characterDescriptions = {
    kai: `Kai is a 1-year-old toddler with the following EXACT characteristics that MUST be consistent across ALL pages:
- Asian ethnicity with medium-warm skin tone
- Very short dark brown/black hair (typical for a 1-year-old, some areas may appear to have minimal hair)
- Round chubby toddler face with full cheeks
- Small button nose
- Simple dot eyes with warm brown color
- Sweet, innocent toddler expression
- Chubby toddler body proportions (large head relative to body, about 1:1.5 ratio)
- Wearing different colored simple toddler clothing in different scenes (clothing color can vary, but character appearance stays the same)
- Age-appropriate toddler features`,

    dian: `Dian (Mommy) is an adult woman with the following EXACT characteristics that MUST be consistent across ALL pages:
- Asian ethnicity with medium skin tone
- Long straight black hair
- Adult facial features with defined but soft facial structure
- Simple dot eyes
- Warm, loving expression
- Adult body proportions (smaller head relative to body)
- Wearing different colored simple adult clothing in different scenes
- Caring, maternal appearance`,

    tony: `Tony (Daddy) is an adult man with the following EXACT characteristics that MUST be consistent across ALL pages:
- Caucasian/light-medium skin tone
- Short dark brown hair
- Adult facial features with defined but soft facial structure
- Simple dot eyes
- Warm, loving expression
- Adult body proportions (smaller head relative to body)
- Wearing different colored simple adult clothing in different scenes
- Caring, paternal appearance`
};

// Style guide requirements to be added to every prompt
const styleGuideCore = `
CRITICAL STYLE REQUIREMENTS (MUST FOLLOW):

CHARACTER CONSISTENCY (ESSENTIAL):
- Use the EXACT same appearance for each character every time they appear
- Characters are based on reference photos - match ethnicity, skin tone, hair color/texture exactly
- Only clothing colors and expressions may vary between pages
- Maintain consistent level of detail for all characters across all pages
- Study reference images carefully and match the actual people shown

IMAGE FORMAT (MANDATORY):
- MUST be perfectly square (1:1 aspect ratio, 1024x1024 pixels)
- NO portrait or landscape orientations
- Verify output is square before finalizing

TEXT SPACE REQUIREMENT (ESSENTIAL):
- Reserve 25-30% of the image as BLANK SPACE for text overlay
- Text space must be solid background color with NO characters or objects
- Position text space at top, bottom, left, or right edge
- Keep characters and action in remaining 70-75% of the page
- Text will be overlaid later, so leave clear unobstructed areas

BOYNTON ILLUSTRATION STYLE:
- Rounded, soft, bulbous forms with no sharp angles
- Bold black outlines (2-4pt), hand-drawn appearance
- Simple facial features: dots for eyes, simple curves for mouth
- Flat or subtly gradient fills in pastel colors
- Large heads relative to bodies (1:2 or 1:1.5 ratio for children, less for adults)
- Stubby limbs with minimal joint articulation
- Minimal background detail, mostly solid pastel color field
- Gentle, approachable, friendly expressions
- Hand-crafted, personal feel`;

// Background colors by page
const backgroundColors = {
    1: '#87CEEB',  // Soft sky blue
    2: '#FFBD9A',  // Warm peach
    3: '#FFD966',  // Bright pastel yellow
    4: '#9DC183',  // Soft green
    5: '#9DC183',  // Soft green (same spread)
    6: '#FFB088',  // Bold orange pastel
    7: '#B8A9C9',  // Light purple pastel
    8: '#7EC8E3',  // Blue pastel
    9: '#7EC8E3',  // Blue pastel (same spread)
    10: '#FFF8DC', // Soft cream
    11: '#F4A4A4', // Soft pink pastel
    12: '#8FBC8F', // Muted aqua pastel
    13: '#FFCC99', // Warm apricot pastel
    14: '#F4A4A4', // Soft pink pastel
    15: '#D2B48C', // Calm taupe pastel
    16: '#C8B8D0', // Deep lavender pastel
    17: '#9DC183', // Green pastel
    18: '#87CEEB'  // Light baby blue
};

module.exports = {
    characterDescriptions,
    styleGuideCore,
    backgroundColors
};

