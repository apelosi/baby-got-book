/**
 * Improved page prompts with character consistency and text space
 */

const { characterDescriptions } = require('./character-descriptions');

const improvedPagePrompts = {
    1: {
        characters: ['kai'],
        textPlacement: 'top',
        prompt: `FRONT COVER - Children's board book illustration:

CHARACTER TO DRAW (study reference photos carefully):
${characterDescriptions.kai}

SCENE DESCRIPTION:
- Center: Kai with a cheerful expression and wide smile
- Surrounding elements: birthday cake (three tiers, blue and white balloon clusters, gold "Kai" and "1"), "Happy Birthday" and "KAI IS 1" banners as playful flags, floating music notes, toddler staircase, green dino car, colorful baby books, bath bubbles, plush stuffed animals
- Background: Solid soft sky blue pastel (#87CEEB)

TEXT SPACE:
- Reserve the TOP 30% of the image as blank space (solid background color only)
- Keep all characters and objects in the lower 70%`
    },
    
    2: {
        characters: ['kai', 'dian', 'tony'],
        textPlacement: 'center',
        prompt: `TITLE PAGE - Children's board book illustration:

CHARACTERS TO DRAW (study reference photos carefully and match exactly):
${characterDescriptions.kai}

${characterDescriptions.dian}

${characterDescriptions.tony}

SCENE DESCRIPTION:
- Cartoon portrait of the family together: Kai (toddler), Dian (Mommy), and Tony (Daddy)
- All smiling, close and loving, gentle expressions
- Subtle hearts/stars as warm accents
- Background: Warm peach pastel (#FFBD9A)

TEXT SPACE:
- Reserve the CENTER 30% of the image as blank space for text
- Position family on left and right sides, leaving center open`
    },
    
    3: {
        characters: ['kai'],
        textPlacement: 'top',
        prompt: `PAGE 3 - Children's board book illustration:

CHARACTER TO DRAW (MUST match previous pages exactly):
${characterDescriptions.kai}

SCENE DESCRIPTION:
- Large stylized birthday cake (three tiers, blue and white balloon decor, gold "Kai")
- Party banners: "Happy Birthday" and "KAI IS 1" in festive flags
- Kai with giggly grin, next to the cake
- Confetti and sparkles for atmosphere
- Background: Bright pastel yellow (#FFD966)

TEXT SPACE:
- Reserve the TOP 30% as blank background
- Keep cake and Kai in lower 70%`
    },
    
    4: {
        characters: ['kai'],
        textPlacement: 'left',
        prompt: `PAGE 4 (LEFT SPREAD) - Children's board book illustration:

CHARACTER TO DRAW (MUST match previous pages exactly):
${characterDescriptions.kai}

SCENE DESCRIPTION:
- Kai walking up stairs with adult hands gently supporting him
- Joyful motion, safe and supported
- Simple stairs (minimal detail)
- Background: Soft green pastel (#9DC183)

TEXT SPACE:
- Reserve the LEFT 30% as blank background
- Position Kai and stairs on the right 70%`
    },
    
    5: {
        characters: ['kai'],
        textPlacement: 'right',
        prompt: `PAGE 5 (RIGHT SPREAD) - Children's board book illustration:

CHARACTER TO DRAW (MUST match previous pages exactly):
${characterDescriptions.kai}

SCENE DESCRIPTION:
- Kai walking down stairs confidently, both feet flat on floor
- Joyful motion, clean cartoon style
- Simple stairs (minimal detail)
- Background: Same soft green pastel (#9DC183) as page 4

TEXT SPACE:
- Reserve the RIGHT 30% as blank background
- Position Kai and stairs on the left 70%`
    },
    
    6: {
        characters: ['kai'],
        textPlacement: 'top',
        prompt: `PAGE 6 - Children's board book illustration:

CHARACTER TO DRAW (MUST match previous pages exactly):
${characterDescriptions.kai}

SCENE DESCRIPTION:
- Kai standing proud, holding a toy in each hand (simplified colorful shapes)
- Slight wiggle in pose, playful expression, big smile
- Background: Bold orange pastel (#FFB088)

TEXT SPACE:
- Reserve the TOP 30% as blank background
- Position Kai in lower 70%`
    },
    
    7: {
        characters: ['kai'],
        textPlacement: 'top',
        prompt: `PAGE 7 - Children's board book illustration:

CHARACTER TO DRAW (MUST match previous pages exactly):
${characterDescriptions.kai}

SCENE DESCRIPTION:
- Kai with arms wide, joyfully tossing a ball that rolls toward viewer
- Dynamic motion, eager face
- Simple ball (solid color)
- Background: Light purple pastel (#B8A9C9)

TEXT SPACE:
- Reserve the TOP 30% as blank background
- Position Kai and ball in lower 70%`
    },
    
    8: {
        characters: ['kai'],
        textPlacement: 'left',
        prompt: `PAGE 8 (LEFT SPREAD) - Children's board book illustration:

CHARACTER TO DRAW (MUST match previous pages exactly):
${characterDescriptions.kai}

SCENE DESCRIPTION:
- Kai joyfully dancing in front of a Sonos soundbar
- Musical notes swirling around
- Knees bent, arms flailing, pressing soundbar buttons
- Vibrant, energetic pose
- Background: Blue pastel (#7EC8E3)

TEXT SPACE:
- Reserve the LEFT 30% as blank background
- Position Kai and soundbar on right 70%`
    },
    
    9: {
        characters: ['kai'],
        textPlacement: 'right',
        prompt: `PAGE 9 (RIGHT SPREAD) - Children's board book illustration:

CHARACTER TO DRAW (MUST match previous pages exactly):
${characterDescriptions.kai}

SCENE DESCRIPTION:
- Kai continuing to dance with flailing arms, proud expression
- Musical notes continue swirling
- Continuation of left page scene
- Background: Same blue pastel (#7EC8E3) as page 8

TEXT SPACE:
- Reserve the RIGHT 30% as blank background
- Position Kai on left 70%`
    },
    
    10: {
        characters: ['kai'],
        textPlacement: 'top',
        prompt: `PAGE 10 - Children's board book illustration:

CHARACTER TO DRAW (MUST match previous pages exactly):
${characterDescriptions.kai}

SCENE DESCRIPTION:
- Kai riding or pushing green dino car with yellow accents
- Outdoor café environment suggested with minimal detail (simple table/chair)
- Carefree, smiling
- Background: Soft cream pastel (#FFF8DC)

TEXT SPACE:
- Reserve the TOP 30% as blank background
- Position Kai and dino car in lower 70%`
    },
    
    11: {
        characters: ['kai'],
        textPlacement: 'top',
        prompt: `PAGE 11 - Children's board book illustration:

CHARACTER TO DRAW (MUST match previous pages exactly):
${characterDescriptions.kai}

SCENE DESCRIPTION:
- Kai cheerfully waving at friendly strangers (simplified faces)
- Park-like setting with trees and benches (very minimal detail)
- Focus on Kai's wave
- Background: Soft pink pastel (#F4A4A4)

TEXT SPACE:
- Reserve the TOP 30% as blank background
- Position Kai and scene in lower 70%`
    },
    
    12: {
        characters: ['kai', 'tony'],
        textPlacement: 'top',
        prompt: `PAGE 12 - Children's board book illustration:

CHARACTERS TO DRAW (MUST match previous pages exactly):
${characterDescriptions.kai}

${characterDescriptions.tony}

SCENE DESCRIPTION:
- Kai eagerly flipping a baby photo book, pointing at a baby image inside
- Tony (Daddy) reading nearby (gentle outline)
- Emphasis on excitement and book love
- Background: Muted aqua pastel (#8FBC8F)

TEXT SPACE:
- Reserve the TOP 30% as blank background
- Position Kai and Tony in lower 70%`
    },
    
    13: {
        characters: ['kai'],
        textPlacement: 'top',
        prompt: `PAGE 13 - Children's board book illustration:

CHARACTER TO DRAW (MUST match previous pages exactly):
${characterDescriptions.kai}

SCENE DESCRIPTION:
- Kai in high chair, happily eating scrambled eggs, avocado, banana, and yogurt
- Messy tray, food on fingers, food on floor
- Cheerful and silly expression
- Background: Warm apricot pastel (#FFCC99)

TEXT SPACE:
- Reserve the TOP 30% as blank background
- Position Kai and high chair in lower 70%`
    },
    
    14: {
        characters: ['kai'],
        textPlacement: 'top',
        prompt: `PAGE 14 - Children's board book illustration:

CHARACTER TO DRAW (MUST match previous pages exactly):
${characterDescriptions.kai}

SCENE DESCRIPTION:
- Kai laughing in bubbly bath
- Includes blue measuring cup and squishy fish toy
- Splashing water, bubbly arcs
- Background: Soft pink pastel (#F4A4A4)

TEXT SPACE:
- Reserve the TOP 30% as blank background
- Position Kai and bath in lower 70%`
    },
    
    15: {
        characters: ['kai'],
        textPlacement: 'top',
        prompt: `PAGE 15 - Children's board book illustration:

CHARACTER TO DRAW (MUST match previous pages exactly):
${characterDescriptions.kai}

SCENE DESCRIPTION:
- Kai curled up with favorite stuffed animals (monkey, bear, blue dragosaur/dinosaur)
- Nightlight softly glowing
- Cozy, gentle scene, contented face
- Background: Calm taupe pastel (#D2B48C)

TEXT SPACE:
- Reserve the TOP 30% as blank background
- Position Kai and stuffed animals in lower 70%`
    },
    
    16: {
        characters: ['kai'],
        textPlacement: 'top',
        prompt: `PAGE 16 - Children's board book illustration:

CHARACTER TO DRAW (MUST match previous pages exactly):
${characterDescriptions.kai}

SCENE DESCRIPTION:
- Kai asleep in crib, snuggling monkey, bear, dragosaur/dinosaur
- Wrapped in sleep sack
- Simple moon or subtle stars in background
- Background: Deep lavender pastel (#C8B8D0)

TEXT SPACE:
- Reserve the TOP 30% as blank background
- Position Kai and crib in lower 70%`
    },
    
    17: {
        characters: ['kai', 'dian'],
        textPlacement: 'top',
        prompt: `PAGE 17 - Children's board book illustration:

CHARACTERS TO DRAW (MUST match previous pages exactly):
${characterDescriptions.kai}

${characterDescriptions.dian}

SCENE DESCRIPTION:
- Dian (Mommy) gently trying to brush Kai's teeth
- Kai turns away with mildly upset, resistant expression
- Toothbrush visible, small foam at mouth
- Background: Green pastel (#9DC183)

TEXT SPACE:
- Reserve the TOP 30% as blank background
- Position Dian and Kai in lower 70%`
    },
    
    18: {
        characters: [],
        textPlacement: 'center',
        prompt: `BACK COVER - Children's board book illustration:

SCENE DESCRIPTION:
- Playful "Baby Got Book" logo with stack of rounded baby books
- Soft hearts/stars as finishing touch
- Friendly Boynton-style cartoon execution
- Background: Light baby blue pastel (#87CEEB)

TEXT SPACE:
- Reserve the CENTER 30% for text
- Position logo and books around the edges`
    }
};

// Reference images for each page
const referenceImagesMap = {
    1: ['images/people/Kai at MOIC with Mommy Daddy.png', 'images/storyline/cake1.jpeg', 'images/storyline/cake2.jpeg', 'images/storyline/sign.jpeg'],
    2: ['images/people/Kai at MOIC with Mommy Daddy.png'],
    3: ['images/storyline/cake1.jpeg', 'images/storyline/cake2.jpeg', 'images/storyline/sign.jpeg'],
    4: ['images/storyline/stairs.jpeg'],
    5: ['images/storyline/stairs.jpeg'],
    6: ['images/storyline/holding toy.jpeg'],
    7: ['images/storyline/holding ball.jpg'],
    8: ['images/people/Kai at Sonos.png'],
    9: ['images/people/Kai at Sonos.png'],
    10: ['images/storyline/Kai pushing green dino car.HEIC'],
    11: ['images/storyline/Kai outside in stroller.jpg'],
    12: ['images/storyline/Kai reading books with Daddy.jpeg', 'images/people/Kai with Book.png'],
    13: ['images/storyline/eating eggs.png'],
    14: ['images/people/Kai in bath.png'],
    15: ['images/storyline/kai in crib with monkey.jpeg'],
    16: ['images/storyline/Kai sleeping in sleep sack with white bear stuffed animal.jpeg', 'images/storyline/kai in crib with monkey.jpeg'],
    17: ['images/people/Kai at MOIC with Mommy Daddy.png'],
    18: []
};

module.exports = {
    improvedPagePrompts,
    referenceImagesMap
};

