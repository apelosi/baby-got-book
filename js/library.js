// Library page functionality
document.addEventListener('DOMContentLoaded', () => {
    const bookGrid = document.getElementById('bookGrid');
    
    // Load books from library
    bookLibrary.forEach(book => {
        const bookCard = createBookCard(book);
        bookGrid.appendChild(bookCard);
    });
});

function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.addEventListener('click', () => {
        window.location.href = `book-viewer.html?book=${book.id}`;
    });
    
    const image = document.createElement('img');
    image.className = 'book-card-image';
    image.src = book.coverImage;
    image.alt = book.title;
    image.onerror = function() {
        // Fallback if image doesn't exist yet
        this.style.backgroundColor = '#e0e0e0';
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        this.alt = 'Cover image coming soon';
    };
    
    const content = document.createElement('div');
    content.className = 'book-card-content';
    
    const title = document.createElement('h2');
    title.className = 'book-card-title';
    title.textContent = book.title;
    
    const subtitle = document.createElement('p');
    subtitle.className = 'book-card-subtitle';
    subtitle.textContent = `${book.pages.length} pages`;
    
    content.appendChild(title);
    content.appendChild(subtitle);
    
    card.appendChild(image);
    card.appendChild(content);
    
    return card;
}

