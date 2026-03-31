/**
 * Improved page prompts with character consistency, object fidelity, and text space
 * Based on comprehensive review in image-reference.md
 */

const { characterDescriptions } = require('./character-descriptions');

// Text content for each page - used to inform model how much space to reserve
const pageTextContent = {
    1: ['Yippee Kai Yeh', 'turns 1'],
    2: ['Dear Kai,', 'Happy 1st birthday Kai, our little love.', 'You fill our hearts with joy and wonder every day.', 'Dream big and grand; your reach has no bounds.', 'We are here to love and protect, and so excited for what\'s ahead.', 'Love,', 'Mommy and Daddy'],
    3: ['Kai\'s a boy with a giggly grin,', 'Guess who\'s ONE? Let the fun begin!'],
    4: ['He climbs up the stairs', 'always wanting more.'],
    5: ['Then walks back down', 'with both feet on the floor!'],
    6: ['He walks with such pride,', 'one toy in each hand.', 'He wiggles and wobbles', 'but manages to stand!'],
    7: ['He picks up his ball,', 'then throws it away.', 'It rolls to your toes,', 'he\'s ready to play!'],
    8: ['He bounces and sways,', 'to music turned loud.'],
    9: ['He flails both his arms', 'And dances so proud.'],
    10: ['At the Cafe', 'he zooms with a smile.', 'A green dino on wheels,', 'riding in style!'],
    11: ['Kai smiles at strangers', 'and waves with a stare.', 'Everyone smiles', 'when Kai is near!'],
    12: ['His books are well-loved,', 'he reads every day.', 'He points at the babies', 'and calls out, "Bay-Bay!"'],
    13: ['Avocado is yummy,', 'scrambled eggs a delight.', 'He smears and munches,', 'Until he takes flight!'],
    14: ['He is ready for bathtime,', 'and splashes with glee.', 'He plays with his bath toys,', 'until he\'s clean and free!'],
    15: ['When bedtime arrives,', 'he cuddles up tight.', 'He gathers his buddies', 'and off goes the light.'],
    16: ['He snuggles his monkey,', 'and hugs his fluffy bear.', 'He clutches his dragosaur,', 'and sleeps with no fear.'],
    17: ['He sleeps so soundly,', 'barely a peep in the night.', 'But try brushing his teeth,', 'and you might get a fight!'],
    18: ['Made with love by Baby Got Book and YOU!', 'Learn more at: https://babygotbook.app']
};

const improvedPagePrompts = {
    1: {
        characters: ['kai'],
        textPlacement: 'top',
        prompt: `FRONT COVER - Children's board book illustration:

CHARACTER TO DRAW (study ALL reference photos carefully - Kai must look IDENTICAL in every page):
${characterDescriptions.kai}

SCENE DESCRIPTION:
- Center: Kai with a cheerful expression and wide smile
- Behind Kai: Smiling happy people (party guests) in the background, inspired by the birthday party photo
- Surrounding elements: birthday cake (MUST match the 3-tier cake in reference photos exactly - blue and white balloon clusters, gold "Kai" and "1"), birthday sign (MUST match reference), green dino car (MUST match the Little Tikes Cozy Coupe in reference - dark green body with roof/canopy, cute face with eyes on front, yellow accents), stuffed animals, stairs (MUST match wooden stairs in reference)
- Do NOT show food
- Background: Solid soft sky blue pastel (#87CEEB)

TEXT TO BE OVERLAID (reserve space for this):
"Yippee Kai Yeh" (large)
"turns 1" (medium)

TEXT SPACE REQUIREMENT:
- Reserve the TOP 25% of the image as COMPLETELY BLANK (solid #87CEEB background color only)
- NO characters, objects, or decorations in the top 25%
- All scene elements must fit in the lower 75%`
    },

    2: {
        characters: ['kai', 'dian', 'tony'],
        textPlacement: 'center',
        prompt: `TITLE PAGE - Children's board book illustration:

CHARACTERS TO DRAW (study ALL reference photos - must match EXACTLY and be CONSISTENT):
${characterDescriptions.kai}

${characterDescriptions.dian}

${characterDescriptions.tony}

SCENE DESCRIPTION:
- Family portrait: Kai (toddler), Dian (Mommy), and Tony (Daddy) together
- Kai should look EXACTLY like the baby in the reference photos - same skin tone, face shape, hair
- Dian and Tony already look good in current version - maintain their appearance
- All smiling, close and loving, gentle expressions
- Subtle hearts/stars as warm accents
- Background: Warm peach pastel (#FFBD9A)

TEXT TO BE OVERLAID (reserve space for this - 7 lines of text):
"Dear Kai," / "Happy 1st birthday Kai, our little love." / "You fill our hearts with joy and wonder every day." / "Dream big and grand; your reach has no bounds." / "We are here to love and protect, and so excited for what's ahead." / "Love," / "Mommy and Daddy"

TEXT SPACE REQUIREMENT:
- Reserve the CENTER of the image as blank space for the 7-line dedication text
- Position family on LEFT and RIGHT sides, leaving CENTER open
- The center blank area should be approximately 40% of the image width`
    },

    3: {
        characters: ['kai'],
        textPlacement: 'top',
        prompt: `PAGE 3 - Children's board book illustration:

CHARACTER TO DRAW (MUST look IDENTICAL to Kai in pages 1 and 2):
${characterDescriptions.kai}

OBJECTS TO DRAW (MUST match reference photos):
- Birthday cake: 3-tier cake with blue and white balloon decorations, gold "Kai" topper - match the cake in reference photos EXACTLY
- Birthday banner: ONE single "Happy Birthday" banner (not two), with exactly 1 letter per banner piece, letters should not float or extend beyond banner edges
- Birthday sign saying "KAI IS 1" - match the sign in reference photo

SCENE DESCRIPTION:
- Kai with giggly grin, standing next to the cake
- Confetti and sparkles for atmosphere
- Background: Bright pastel yellow (#FFD966)

TEXT TO BE OVERLAID (reserve space for 2 lines):
"Kai's a boy with a giggly grin," / "Guess who's ONE? Let the fun begin!"

TEXT SPACE REQUIREMENT:
- Reserve the TOP 30% as COMPLETELY BLANK (solid #FFD966 only)
- Position cake and Kai in lower 70%`
    },

    4: {
        characters: ['kai'],
        textPlacement: 'left',
        isSpreadLeft: true,
        spreadPartner: 5,
        prompt: `PAGE 4 (LEFT PAGE OF 2-PAGE SPREAD with page 5) - Children's board book illustration:

IMPORTANT: This is the LEFT half of a continuous scene that spans pages 4 and 5. The background, lighting, and style must be identical to page 5.

CHARACTER TO DRAW (MUST look IDENTICAL to previous pages):
${characterDescriptions.kai}

OBJECTS TO DRAW (MUST match reference photos):
- Stairs: MUST match the wooden stairs in the reference photo - natural wood color, indoor residential stairs

SCENE DESCRIPTION:
- Kai walking UP the stairs (not down!) with adult hands gently supporting him from behind
- Show the LEFT portion of the staircase
- Kai should be mid-climb, looking happy and determined
- Adult hands visible providing support (just hands, not full person)
- Background: Soft green pastel (#9DC183) - MUST be identical to page 5

TEXT TO BE OVERLAID (reserve space for 2 lines):
"He climbs up the stairs" / "always wanting more."

TEXT SPACE REQUIREMENT:
- Reserve the LEFT 30% as COMPLETELY BLANK (solid #9DC183 only)
- Position Kai and stairs on the RIGHT 70%
- Do NOT include any vertical lines or dividers`
    },

    5: {
        characters: ['kai'],
        textPlacement: 'right',
        isSpreadRight: true,
        spreadPartner: 4,
        prompt: `PAGE 5 (RIGHT PAGE OF 2-PAGE SPREAD with page 4) - Children's board book illustration:

IMPORTANT: This is the RIGHT half of a continuous scene that spans pages 4 and 5. The background, lighting, and style must be identical to page 4.

CHARACTER TO DRAW (MUST look IDENTICAL to previous pages):
${characterDescriptions.kai}

OBJECTS TO DRAW (MUST match reference photos):
- Stairs: MUST match the wooden stairs in the reference photo - same stairs as page 4, continuation of the scene

SCENE DESCRIPTION:
- Kai walking DOWN the stairs carefully with adult hands supporting him
- Show the RIGHT/BOTTOM portion of the staircase (continuation from page 4)
- Both feet should be shown flat/stable, being careful
- Adult hands visible providing support
- Background: Soft green pastel (#9DC183) - MUST be identical to page 4

TEXT TO BE OVERLAID (reserve space for 2 lines):
"Then walks back down" / "with both feet on the floor!"

TEXT SPACE REQUIREMENT:
- Reserve the RIGHT 30% as COMPLETELY BLANK (solid #9DC183 only)
- Position Kai and stairs on the LEFT 70%`
    },

    6: {
        characters: ['kai'],
        textPlacement: 'top',
        prompt: `PAGE 6 - Children's board book illustration:

CHARACTER TO DRAW (MUST look IDENTICAL to previous pages):
${characterDescriptions.kai}

OBJECTS TO DRAW (MUST match reference photos):
- In one hand: Musical crab toy (red/orange crab shape with musical features) - match the toy in "holding toy.jpeg"
- In other hand: Spinning toy - match the spinning toy visible in "Kai Bday Months Mat - 11.png"

SCENE DESCRIPTION:
- Kai WALKING (not just standing) with a toy in each hand
- Slight wiggle/wobble in his walking pose - he's a toddler learning to walk
- Playful expression, big smile
- Show movement - one foot slightly ahead of the other
- Background: Bold orange pastel (#FFB088)

TEXT TO BE OVERLAID (reserve space for 4 lines):
"He walks with such pride," / "one toy in each hand." / "He wiggles and wobbles" / "but manages to stand!"

TEXT SPACE REQUIREMENT:
- Reserve the TOP 35% as COMPLETELY BLANK (solid #FFB088 only)
- Position walking Kai in lower 65%
- Make sure there is enough vertical space for 4 lines of text`
    },

    7: {
        characters: ['kai'],
        textPlacement: 'top',
        prompt: `PAGE 7 - Children's board book illustration:

CHARACTER TO DRAW (MUST look IDENTICAL to previous pages):
${characterDescriptions.kai}

OBJECTS TO DRAW:
- Orange bouncy ball (this can be a simple orange ball, doesn't need to match a specific reference)

SCENE DESCRIPTION:
- Kai with arms wide, joyfully tossing/throwing the orange ball
- Ball shown rolling toward the viewer
- Dynamic motion, eager excited face
- Background: Light purple pastel (#B8A9C9)

TEXT TO BE OVERLAID (reserve space for 4 lines):
"He picks up his ball," / "then throws it away." / "It rolls to your toes," / "he's ready to play!"

TEXT SPACE REQUIREMENT:
- Reserve the TOP 35% as COMPLETELY BLANK (solid #B8A9C9 only)
- Position Kai and ball in lower 65%`
    },

    8: {
        characters: [],
        textPlacement: 'left',
        isSpreadLeft: true,
        spreadPartner: 9,
        prompt: `PAGE 8 (LEFT PAGE OF 2-PAGE SPREAD with page 9) - Children's board book illustration:

IMPORTANT: This is the LEFT half of a continuous scene. Page 8 shows the TV/soundbar setup, Page 9 shows Kai dancing. Together they form one scene.

NO CHARACTERS ON THIS PAGE - Kai will be on page 9

OBJECTS TO DRAW (MUST match reference photos):
- Black Sonos soundbar - MUST match the soundbar in "Kai at Sonos.png" - rectangular black speaker bar
- Short black TV stand/table
- Television on or above the stand
- Musical notes floating in the air (to connect to page 9 where Kai is dancing)

SCENE DESCRIPTION:
- Living room entertainment setup
- Soundbar on black table/stand with TV
- Musical notes swirling from the soundbar toward the right (toward page 9)
- Background: Blue pastel (#7EC8E3) - MUST be identical to page 9

TEXT TO BE OVERLAID (reserve space for 2 lines):
"He bounces and sways," / "to music turned loud."

TEXT SPACE REQUIREMENT:
- Reserve the LEFT 30% as COMPLETELY BLANK (solid #7EC8E3 only)
- Position TV/soundbar setup in the RIGHT 70%`
    },

    9: {
        characters: ['kai'],
        textPlacement: 'right',
        isSpreadRight: true,
        spreadPartner: 8,
        prompt: `PAGE 9 (RIGHT PAGE OF 2-PAGE SPREAD with page 8) - Children's board book illustration:

IMPORTANT: This is the RIGHT half of a continuous scene with page 8. The TV/soundbar is on page 8, Kai is dancing here on page 9.

CHARACTER TO DRAW (MUST look IDENTICAL to previous pages):
${characterDescriptions.kai}

SCENE DESCRIPTION:
- Kai dancing joyfully, facing toward the left (toward the TV/soundbar on page 8)
- Flailing arms, proud happy expression
- Knees bent in dancing pose
- Musical notes swirling around him (continuing from page 8)
- Background: Blue pastel (#7EC8E3) - MUST be identical to page 8

TEXT TO BE OVERLAID (reserve space for 2 lines):
"He flails both his arms" / "And dances so proud."

TEXT SPACE REQUIREMENT:
- Reserve the RIGHT 30% as COMPLETELY BLANK (solid #7EC8E3 only)
- Position dancing Kai on the LEFT 70%`
    },

    10: {
        characters: ['kai'],
        textPlacement: 'top',
        prompt: `PAGE 10 - Children's board book illustration:

CHARACTER TO DRAW (MUST look IDENTICAL to previous pages):
${characterDescriptions.kai}

OBJECT TO DRAW (MUST match reference photos EXACTLY):
The green dino car is a Little Tikes Cozy Coupe style ride-on toy. Study the reference photos carefully:
- Dark green body shaped like a car/coupe (NOT a simple animal on wheels)
- Has a roof/canopy structure with handle on top
- Cute dinosaur "face" on the front with big round cartoon eyes
- Yellow accents on the roof/canopy
- "Little Tikes" logo on front
- Four wheels (green with flower/star pattern)
- Steering wheel inside
- Child sits inside the car body, feet can touch ground to push

SCENE DESCRIPTION:
- Kai sitting inside the green dino car, pushing/riding it
- Outdoor cafe environment in background with simple table and chairs (make sure table has visible legs, not floating!)
- Carefree, smiling expression
- Background: Soft cream pastel (#FFF8DC)

TEXT TO BE OVERLAID (reserve space for 4 lines):
"At the Cafe" / "he zooms with a smile." / "A green dino on wheels," / "riding in style!"

TEXT SPACE REQUIREMENT:
- Reserve the TOP 30% as COMPLETELY BLANK (solid #FFF8DC only)
- Position Kai in dino car and cafe elements in lower 70%`
    },

    11: {
        characters: ['kai'],
        textPlacement: 'top',
        prompt: `PAGE 11 - Children's board book illustration:

CHARACTER TO DRAW (MUST look IDENTICAL to previous pages):
${characterDescriptions.kai}

SCENE DESCRIPTION:
- Kai IN A STROLLER (not standing on his own) - match the stroller scene in "Kai outside in stroller.jpg"
- Kai is laughing/smiling and waving at people
- Friendly strangers (simplified faces) smiling back at him
- Park-like outdoor setting with minimal detail (trees, path)
- Background: Soft pink pastel (#F4A4A4)

TEXT TO BE OVERLAID (reserve space for 4 lines):
"Kai smiles at strangers" / "and waves with a stare." / "Everyone smiles" / "when Kai is near!"

TEXT SPACE REQUIREMENT:
- Reserve the TOP 30% as COMPLETELY BLANK (solid #F4A4A4 only)
- Position Kai in stroller and scene in lower 70%`
    },

    12: {
        characters: ['kai', 'tony'],
        textPlacement: 'top',
        prompt: `PAGE 12 - Children's board book illustration:

CHARACTERS TO DRAW (MUST look IDENTICAL to previous pages):
${characterDescriptions.kai}

${characterDescriptions.tony}
Tony MUST look consistent with how he appears in page 2 - same face, hair, skin tone.

OBJECTS TO DRAW:
- Baby photo book (the open book style shown in "Kai reading books with Daddy.jpeg" - current version is good)

SCENE DESCRIPTION:
- Kai and Tony sitting together, BOTH FACING THE SAME DIRECTION
- Tony looking over Kai's shoulder at the book (NOT back-to-back!)
- Kai eagerly flipping through and pointing at a baby photo book
- Warm, loving father-son reading moment
- Background: Muted aqua pastel (#8FBC8F)

TEXT TO BE OVERLAID (reserve space for 4 lines):
"His books are well-loved," / "he reads every day." / "He points at the babies" / "and calls out, 'Bay-Bay!'"

TEXT SPACE REQUIREMENT:
- Reserve the TOP 30% as COMPLETELY BLANK (solid #8FBC8F only)
- Position Kai and Tony in lower 70%`
    },

    13: {
        characters: ['kai', 'dian'],
        textPlacement: 'top',
        prompt: `PAGE 13 - Children's board book illustration:

CHARACTERS TO DRAW (MUST look IDENTICAL to previous pages):
${characterDescriptions.kai}

${characterDescriptions.dian}

SCENE DESCRIPTION:
- Kai in high chair, happily eating and THROWING food
- Scrambled eggs (yellow, fluffy) and avocado (green) on his tray - these look great, keep them
- Messy tray, food on fingers, food flying through the air
- Dian (Mommy) nearby getting hit by thrown food, looking exasperated/not happy about it (playful expression)
- Cheerful silly expression on Kai
- Background: Warm apricot pastel (#FFCC99)

TEXT TO BE OVERLAID (reserve space for 4 lines):
"Avocado is yummy," / "scrambled eggs a delight." / "He smears and munches," / "Until he takes flight!"

TEXT SPACE REQUIREMENT:
- Reserve the TOP 30% as COMPLETELY BLANK (solid #FFCC99 only)
- Position high chair scene in lower 70%`
    },

    14: {
        characters: ['kai', 'tony'],
        textPlacement: 'top',
        prompt: `PAGE 14 - Children's board book illustration:

CHARACTERS TO DRAW (MUST look IDENTICAL to previous pages):
${characterDescriptions.kai}

${characterDescriptions.tony}

OBJECTS TO DRAW (MUST match reference photo "Kai in bath.png"):
- Bathtub: Match the style in reference - standard white baby bathtub
- Blue measuring cup (for pouring water)
- Nemo-style clown fish toy (orange with white stripes, like the character from Finding Nemo)
- Other bath toys as shown in reference

SCENE DESCRIPTION:
- Kai laughing in bubbly bath, splashing water
- Tony (Daddy) kneeling beside the tub, making sure Kai is safe
- Splashing water, bubbly arcs
- Background: Soft pink pastel (#F4A4A4)

TEXT TO BE OVERLAID (reserve space for 4 lines):
"He is ready for bathtime," / "and splashes with glee." / "He plays with his bath toys," / "until he's clean and free!"

TEXT SPACE REQUIREMENT:
- Reserve the TOP 30% as COMPLETELY BLANK (solid #F4A4A4 only)
- Position bath scene in lower 70%`
    },

    15: {
        characters: ['kai', 'dian'],
        textPlacement: 'top',
        prompt: `PAGE 15 - Children's board book illustration:

CHARACTERS TO DRAW (MUST look IDENTICAL to previous pages):
${characterDescriptions.kai}

${characterDescriptions.dian}

OBJECTS TO DRAW:
- Three stuffed animals: monkey, teddy bear, blue dragosaur/dinosaur (current versions look good - keep consistent)
- Whale-shaped nightlight (NOT a star) - cute whale silhouette that glows

SCENE DESCRIPTION:
- Kai curled up with his three stuffed animal buddies
- Dian (Mommy) in the scene, turning off/dimming the whale nightlight
- Cozy bedtime atmosphere
- Gentle warm lighting from the whale nightlight
- Background: Calm taupe pastel (#D2B48C)

TEXT TO BE OVERLAID (reserve space for 4 lines):
"When bedtime arrives," / "he cuddles up tight." / "He gathers his buddies" / "and off goes the light."

TEXT SPACE REQUIREMENT:
- Reserve the TOP 30% as COMPLETELY BLANK (solid #D2B48C only)
- Position bedtime scene in lower 70%`
    },

    16: {
        characters: ['kai'],
        textPlacement: 'top-left',
        prompt: `PAGE 16 - Children's board book illustration:

CHARACTER TO DRAW (MUST look IDENTICAL to previous pages):
${characterDescriptions.kai}

OBJECTS TO DRAW:
- Same three stuffed animals from page 15: monkey, teddy bear, blue dragosaur (MUST be consistent with page 15)
- Sleep sack (wearable blanket)
- Crib
- Security camera in the TOP LEFT corner of the room (small, mounted on wall/ceiling)

SCENE DESCRIPTION:
- Kai asleep in crib, snuggling his three stuffed animal friends
- Wrapped in sleep sack
- Simple moon or subtle stars visible through window or on wall
- Security camera visible in top left corner (baby monitor camera)
- Peaceful sleeping scene
- Background: Deep lavender pastel (#C8B8D0)

TEXT TO BE OVERLAID (reserve space for 4 lines):
"He snuggles his monkey," / "and hugs his fluffy bear." / "He clutches his dragosaur," / "and sleeps with no fear."

TEXT SPACE REQUIREMENT:
- Reserve the TOP LEFT quadrant (approximately 30% width, 30% height) as mostly blank for text
- Security camera can be small in the corner but text space should be clear
- Position sleeping Kai and crib in lower right area`
    },

    17: {
        characters: ['kai', 'dian'],
        textPlacement: 'top',
        prompt: `PAGE 17 - Children's board book illustration:

CHARACTERS TO DRAW (MUST look IDENTICAL to previous pages):
${characterDescriptions.kai}
IMPORTANT: Kai is only 1 year old - he should be MUCH SMALLER than Dian. Toddler proportions - large head, small body, about 1/3 the height of an adult.

${characterDescriptions.dian}
Dian MUST look consistent with how she appears in page 2 - same face, hair, skin tone.

OBJECTS TO DRAW:
- Small toothbrush
- Small amount of toothpaste foam

SCENE DESCRIPTION:
- Dian gently trying to brush Kai's teeth
- Kai turning away with mildly upset, resistant "I don't wanna!" expression
- Toothbrush visible near Kai's mouth, small foam
- Kai should be MUCH smaller than Dian (realistic 1-year-old to adult proportions)
- Background: Green pastel (#9DC183)

TEXT TO BE OVERLAID (reserve space for 4 lines):
"He sleeps so soundly," / "barely a peep in the night." / "But try brushing his teeth," / "and you might get a fight!"

TEXT SPACE REQUIREMENT:
- Reserve the TOP 30% as COMPLETELY BLANK (solid #9DC183 only)
- Position tooth brushing scene in lower 70%`
    },

    18: {
        characters: [],
        textPlacement: 'center',
        prompt: `BACK COVER - Children's board book illustration:

SCENE DESCRIPTION:
- Playful "Baby Got Book" logo concept
- Stack of cute rounded baby board books
- Soft hearts and stars as finishing touches
- Friendly, warm, inviting design
- Background: Light baby blue pastel (#87CEEB)

TEXT TO BE OVERLAID (reserve space for 2 lines in center):
"Made with love by Baby Got Book and YOU!" / "Learn more at: https://babygotbook.app"

TEXT SPACE REQUIREMENT:
- Reserve the CENTER of the image for text (middle 30% vertically)
- Position logo and books around the edges, leaving center clear`
    }
};

// Reference images for each page - paths relative to project root
const referenceImagesMap = {
    1: [
        'books/kais-first-birthday-book/people/Kai at MOIC with Mommy Daddy.png',
        'books/kais-first-birthday-book/people/Kai at MOIC.png',
        'books/kais-first-birthday-book/storyline/birthday party attendees.png',
        'books/kais-first-birthday-book/storyline/cake1.jpeg',
        'books/kais-first-birthday-book/storyline/cake2.jpeg',
        'books/kais-first-birthday-book/storyline/sign.jpeg',
        'books/kais-first-birthday-book/storyline/green dino car front.png',
        'books/kais-first-birthday-book/storyline/green dino car side.png',
        'books/kais-first-birthday-book/storyline/stairs.jpeg'
    ],
    2: [
        'books/kais-first-birthday-book/people/Kai at MOIC with Mommy Daddy.png',
        'books/kais-first-birthday-book/people/Kai Bday Months Fam - 11.png',
        'books/kais-first-birthday-book/people/Kai Bday Months Fam - 12.png'
    ],
    3: [
        'books/kais-first-birthday-book/people/Kai at MOIC with Mommy Daddy.png',
        'books/kais-first-birthday-book/people/Kai at MOIC.png',
        'books/kais-first-birthday-book/storyline/cake1.jpeg',
        'books/kais-first-birthday-book/storyline/cake2.jpeg',
        'books/kais-first-birthday-book/storyline/sign.jpeg'
    ],
    4: [
        'books/kais-first-birthday-book/people/Kai at MOIC with Mommy Daddy.png',
        'books/kais-first-birthday-book/storyline/stairs.jpeg'
    ],
    5: [
        'books/kais-first-birthday-book/people/Kai at MOIC with Mommy Daddy.png',
        'books/kais-first-birthday-book/storyline/stairs.jpeg'
    ],
    6: [
        'books/kais-first-birthday-book/people/Kai at MOIC with Mommy Daddy.png',
        'books/kais-first-birthday-book/storyline/holding toy.jpeg',
        'books/kais-first-birthday-book/people/Kai Bday Months Mat - 11.png'
    ],
    7: [
        'books/kais-first-birthday-book/people/Kai at MOIC with Mommy Daddy.png',
        'books/kais-first-birthday-book/storyline/holding ball.jpg'
    ],
    8: [
        'books/kais-first-birthday-book/people/Kai at Sonos.png'
    ],
    9: [
        'books/kais-first-birthday-book/people/Kai at MOIC with Mommy Daddy.png',
        'books/kais-first-birthday-book/people/Kai at Sonos.png'
    ],
    10: [
        'books/kais-first-birthday-book/people/Kai at MOIC with Mommy Daddy.png',
        'books/kais-first-birthday-book/storyline/green dino car front.png',
        'books/kais-first-birthday-book/storyline/green dino car side.png',
        'books/kais-first-birthday-book/storyline/Kai pushing green dino car.HEIC'
    ],
    11: [
        'books/kais-first-birthday-book/people/Kai at MOIC with Mommy Daddy.png',
        'books/kais-first-birthday-book/storyline/Kai outside in stroller.jpg'
    ],
    12: [
        'books/kais-first-birthday-book/people/Kai at MOIC with Mommy Daddy.png',
        'books/kais-first-birthday-book/storyline/Kai reading books with Daddy.jpeg',
        'books/kais-first-birthday-book/people/Kai with Book.png'
    ],
    13: [
        'books/kais-first-birthday-book/people/Kai at MOIC with Mommy Daddy.png',
        'books/kais-first-birthday-book/storyline/eating eggs.png',
        'books/kais-first-birthday-book/storyline/cake2.jpeg'
    ],
    14: [
        'books/kais-first-birthday-book/people/Kai at MOIC with Mommy Daddy.png',
        'books/kais-first-birthday-book/people/Kai in bath.png'
    ],
    15: [
        'books/kais-first-birthday-book/people/Kai at MOIC with Mommy Daddy.png',
        'books/kais-first-birthday-book/storyline/kai in crib with monkey.jpeg'
    ],
    16: [
        'books/kais-first-birthday-book/people/Kai at MOIC with Mommy Daddy.png',
        'books/kais-first-birthday-book/storyline/Kai sleeping in sleep sack with white bear stuffed animal.jpeg',
        'books/kais-first-birthday-book/storyline/kai in crib with monkey.jpeg'
    ],
    17: [
        'books/kais-first-birthday-book/people/Kai at MOIC with Mommy Daddy.png',
        'books/kais-first-birthday-book/storyline/cake2.jpeg'
    ],
    18: []
};

module.exports = {
    improvedPagePrompts,
    referenceImagesMap,
    pageTextContent
};
