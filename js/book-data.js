// Book data structure for Kai's First Birthday Book
const kaiBookData = {
    id: 'kais-first-birthday-book',
    title: "Kai's First Birthday Book",
    coverImage: 'books/kais-first-birthday-book/pages/page-01.png',
    pages: [
        {
            pageNumber: 1,
            type: 'cover',
            text: {
                lines: [
                    { text: 'Yippee Kai Yeh', size: 'large', weight: 'bold' },
                    { text: 'turns 1', size: 'medium', weight: 'normal' }
                ],
                color: 'black'
            },
            image: 'books/kais-first-birthday-book/pages/page-01.png',
            backgroundColor: '#87CEEB' // Soft sky blue
        },
        {
            pageNumber: 2,
            type: 'title',
            text: {
                lines: [
                    { text: 'Dear Kai,', size: 'medium', weight: 'normal' },
                    { text: 'Happy 1st birthday Kai, our little love.', size: 'small', weight: 'normal' },
                    { text: 'You fill our hearts with joy and wonder every day.', size: 'small', weight: 'normal' },
                    { text: 'Dream big and grand; your reach has no bounds.', size: 'small', weight: 'normal' },
                    { text: 'We are here to love and protect, and so excited for what\'s ahead.', size: 'small', weight: 'normal' },
                    { text: 'Love,', size: 'small', weight: 'normal' },
                    { text: 'Mommy and Daddy', size: 'medium', weight: 'normal' }
                ],
                color: 'black'
            },
            image: 'books/kais-first-birthday-book/pages/page-02.png',
            backgroundColor: '#FFBD9A' // Warm peach
        },
        {
            pageNumber: 3,
            type: 'content',
            text: {
                lines: [
                    { text: 'Kai\'s a boy with a giggly grin,', size: 'medium', weight: 'normal' },
                    { text: 'Guess who\'s ONE? Let the fun begin!', size: 'medium', weight: 'bold' }
                ],
                color: 'black'
            },
            image: 'books/kais-first-birthday-book/pages/page-03.png',
            backgroundColor: '#FFD966' // Bright pastel yellow
        },
        {
            pageNumber: 4,
            type: 'spread-left',
            text: {
                lines: [
                    { text: 'He climbs up the stairs', size: 'medium', weight: 'normal' },
                    { text: 'always wanting more.', size: 'medium', weight: 'normal' }
                ],
                color: 'black'
            },
            image: 'books/kais-first-birthday-book/pages/page-04.png',
            backgroundColor: '#9DC183' // Soft green
        },
        {
            pageNumber: 5,
            type: 'spread-right',
            text: {
                lines: [
                    { text: 'Then walks back down', size: 'medium', weight: 'normal' },
                    { text: 'with both feet on the floor!', size: 'medium', weight: 'bold' }
                ],
                color: 'black'
            },
            image: 'books/kais-first-birthday-book/pages/page-05.png',
            backgroundColor: '#9DC183' // Same green for spread
        },
        {
            pageNumber: 6,
            type: 'content',
            text: {
                lines: [
                    { text: 'He walks with such pride,', size: 'medium', weight: 'normal' },
                    { text: 'one toy in each hand.', size: 'medium', weight: 'normal' },
                    { text: 'He wiggles and wobbles', size: 'medium', weight: 'normal' },
                    { text: 'but manages to stand!', size: 'medium', weight: 'bold' }
                ],
                color: 'black'
            },
            image: 'books/kais-first-birthday-book/pages/page-06.png',
            backgroundColor: '#FFB088' // Bold orange pastel
        },
        {
            pageNumber: 7,
            type: 'content',
            text: {
                lines: [
                    { text: 'He picks up his ball,', size: 'medium', weight: 'normal' },
                    { text: 'then throws it away.', size: 'medium', weight: 'normal' },
                    { text: 'It rolls to your toes,', size: 'medium', weight: 'normal' },
                    { text: 'he\'s ready to play!', size: 'medium', weight: 'bold' }
                ],
                color: 'black'
            },
            image: 'books/kais-first-birthday-book/pages/page-07.png',
            backgroundColor: '#B8A9C9' // Light purple pastel
        },
        {
            pageNumber: 8,
            type: 'spread-left',
            text: {
                lines: [
                    { text: 'He bounces and sways,', size: 'medium', weight: 'normal' },
                    { text: 'to music turned loud.', size: 'medium', weight: 'normal' }
                ],
                color: 'black'
            },
            image: 'books/kais-first-birthday-book/pages/page-08.png',
            backgroundColor: '#7EC8E3' // Blue pastel
        },
        {
            pageNumber: 9,
            type: 'spread-right',
            text: {
                lines: [
                    { text: 'He flails both his arms', size: 'medium', weight: 'normal' },
                    { text: 'And dances so proud.', size: 'medium', weight: 'bold' }
                ],
                color: 'black'
            },
            image: 'books/kais-first-birthday-book/pages/page-09.png',
            backgroundColor: '#7EC8E3' // Same blue for spread
        },
        {
            pageNumber: 10,
            type: 'content',
            text: {
                lines: [
                    { text: 'At the Café', size: 'medium', weight: 'bold' },
                    { text: 'he zooms with a smile.', size: 'medium', weight: 'normal' },
                    { text: 'A green dino on wheels,', size: 'medium', weight: 'normal' },
                    { text: 'riding in style!', size: 'medium', weight: 'bold' }
                ],
                color: 'black'
            },
            image: 'books/kais-first-birthday-book/pages/page-10.png',
            backgroundColor: '#FFF8DC' // Soft cream
        },
        {
            pageNumber: 11,
            type: 'content',
            text: {
                lines: [
                    { text: 'Kai smiles at strangers', size: 'medium', weight: 'normal' },
                    { text: 'and waves with a stare.', size: 'medium', weight: 'normal' },
                    { text: 'Everyone smiles', size: 'medium', weight: 'normal' },
                    { text: 'when Kai is near!', size: 'medium', weight: 'bold' }
                ],
                color: 'black'
            },
            image: 'books/kais-first-birthday-book/pages/page-11.png',
            backgroundColor: '#F4A4A4' // Soft pink pastel
        },
        {
            pageNumber: 12,
            type: 'content',
            text: {
                lines: [
                    { text: 'His books are well-loved,', size: 'medium', weight: 'normal' },
                    { text: 'he reads every day.', size: 'medium', weight: 'normal' },
                    { text: 'He points at the babies', size: 'medium', weight: 'normal' },
                    { text: 'and calls out, "Bay-Bay!"', size: 'medium', weight: 'bold' }
                ],
                color: 'black'
            },
            image: 'books/kais-first-birthday-book/pages/page-12.png',
            backgroundColor: '#8FBC8F' // Muted aqua pastel
        },
        {
            pageNumber: 13,
            type: 'content',
            text: {
                lines: [
                    { text: 'Avocado is yummy,', size: 'medium', weight: 'normal' },
                    { text: 'scrambled eggs a delight.', size: 'medium', weight: 'normal' },
                    { text: 'He smears and munches,', size: 'medium', weight: 'normal' },
                    { text: 'Until he takes flight!', size: 'medium', weight: 'bold' }
                ],
                color: 'black'
            },
            image: 'books/kais-first-birthday-book/pages/page-13.png',
            backgroundColor: '#FFCC99' // Warm apricot pastel
        },
        {
            pageNumber: 14,
            type: 'content',
            text: {
                lines: [
                    { text: 'He is ready for bathtime,', size: 'medium', weight: 'normal' },
                    { text: 'and splashes with glee.', size: 'medium', weight: 'normal' },
                    { text: 'He plays with his bath toys,', size: 'medium', weight: 'normal' },
                    { text: 'until he\'s clean and free!', size: 'medium', weight: 'bold' }
                ],
                color: 'black'
            },
            image: 'books/kais-first-birthday-book/pages/page-14.png',
            backgroundColor: '#F4A4A4' // Soft pink pastel
        },
        {
            pageNumber: 15,
            type: 'content',
            text: {
                lines: [
                    { text: 'When bedtime arrives,', size: 'medium', weight: 'normal' },
                    { text: 'he cuddles up tight.', size: 'medium', weight: 'normal' },
                    { text: 'He gathers his buddies', size: 'medium', weight: 'normal' },
                    { text: 'and off goes the light.', size: 'medium', weight: 'normal' }
                ],
                color: 'black'
            },
            image: 'books/kais-first-birthday-book/pages/page-15.png',
            backgroundColor: '#D2B48C' // Calm taupe pastel
        },
        {
            pageNumber: 16,
            type: 'content',
            text: {
                lines: [
                    { text: 'He snuggles his monkey,', size: 'medium', weight: 'normal' },
                    { text: 'and hugs his fluffy bear.', size: 'medium', weight: 'normal' },
                    { text: 'He clutches his dragosaur,', size: 'medium', weight: 'normal' },
                    { text: 'and sleeps with no fear.', size: 'medium', weight: 'normal' }
                ],
                color: 'black'
            },
            image: 'books/kais-first-birthday-book/pages/page-16.png',
            backgroundColor: '#C8B8D0' // Deep lavender pastel
        },
        {
            pageNumber: 17,
            type: 'content',
            text: {
                lines: [
                    { text: 'He sleeps so soundly,', size: 'medium', weight: 'normal' },
                    { text: 'barely a peep in the night.', size: 'medium', weight: 'normal' },
                    { text: 'But try brushing his teeth,', size: 'medium', weight: 'normal' },
                    { text: 'and you might get a fight!', size: 'medium', weight: 'bold' }
                ],
                color: 'black'
            },
            image: 'books/kais-first-birthday-book/pages/page-17.png',
            backgroundColor: '#9DC183' // Green pastel
        },
        {
            pageNumber: 18,
            type: 'back-cover',
            text: {
                lines: [
                    { text: 'Made with love by Baby Got Book and YOU!', size: 'small', weight: 'normal' },
                    { text: 'Learn more at: https://babygotbook.app', size: 'small', weight: 'normal' }
                ],
                color: 'black'
            },
            image: 'books/kais-first-birthday-book/pages/page-18.png',
            backgroundColor: '#87CEEB' // Light baby blue
        }
    ]
};

// Library of books
const bookLibrary = [
    kaiBookData
];

