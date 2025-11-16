// Book viewer functionality with Turn.js
let currentBook = null;

document.addEventListener('DOMContentLoaded', () => {
    // Get book ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('book') || 'kais-first-birthday-book';
    
    // Find book in library
    currentBook = bookLibrary.find(b => b.id === bookId);
    
    if (!currentBook) {
        console.error('Book not found');
        return;
    }
    
    // Set book title
    document.getElementById('bookTitle').textContent = currentBook.title;
    document.getElementById('totalPages').textContent = currentBook.pages.length;
    
    // Wait for jQuery and Turn.js to load
    const checkLibraries = setInterval(() => {
        if (typeof jQuery !== 'undefined' && jQuery.fn.turn) {
            clearInterval(checkLibraries);
            console.log('jQuery and Turn.js loaded successfully');
            initializeBook();
            setupEventListeners();
        }
    }, 100);
});

function initializeBook() {
    const bookElement = $('#book');
    
    // Clear any existing content
    bookElement.empty();
    
    // Add all pages to the book
    currentBook.pages.forEach((page, index) => {
        const pageElement = createPageElement(page, index);
        bookElement.append(pageElement);
    });
    
    console.log(`Added ${currentBook.pages.length} pages to book`);
    
    // Determine page size based on viewport
    let pageWidth = 500;
    let pageHeight = 500;
    const viewportWidth = window.innerWidth;
    
    if (viewportWidth <= 480) {
        pageWidth = pageHeight = 200;
    } else if (viewportWidth <= 768) {
        pageWidth = pageHeight = 300;
    } else if (viewportWidth <= 1100) {
        pageWidth = pageHeight = 400;
    }
    
    // Initialize Turn.js
    bookElement.turn({
        width: pageWidth * 2,
        height: pageHeight,
        autoCenter: true,
        display: 'double',
        acceleration: true,
        gradients: true,
        elevation: 50,
        duration: 600,
        when: {
            turning: function(event, page, view) {
                console.log('Turning to page:', page);
                updatePageIndicator(page);
            },
            turned: function(event, page, view) {
                console.log('Turned to page:', page, 'View:', view);
                updatePageIndicator(page);
                updateNavigationButtons();
            },
            start: function(event, pageObject, corner) {
                console.log('Page turn started');
            }
        }
    });
    
    console.log('Turn.js initialized');
    
    // Set initial page to 1
    bookElement.turn('page', 1);
    
    // Update UI
    updatePageIndicator(1);
    updateNavigationButtons();
}

function createPageElement(page, index) {
    const pageDiv = $('<div>').addClass('page').attr('data-page-number', page.pageNumber);
    
    // Determine corner rounding based on page position
    if (index === 0) {
        pageDiv.addClass('page-cover-front');
    } else if (index === currentBook.pages.length - 1) {
        pageDiv.addClass('page-cover-back');
    } else if (page.pageNumber % 2 === 0) {
        pageDiv.addClass('page-left');
    } else {
        pageDiv.addClass('page-right');
    }
    
    const pageContent = $('<div>')
        .addClass('page-content')
        .css('backgroundColor', page.backgroundColor || '#ffffff');
    
    // Add background image
    const pageImage = $('<img>')
        .addClass('page-image')
        .attr('src', page.image)
        .attr('alt', `Page ${page.pageNumber}`)
        .on('error', function() {
            $(this).hide();
        });
    
    // Add text overlay
    const textDiv = $('<div>').addClass('page-text');
    if (page.text.color === 'white') {
        textDiv.addClass('white-text');
    }
    
    page.text.lines.forEach(line => {
        const lineElement = $('<p>')
            .addClass(`${line.size}-text`)
            .css('fontWeight', line.weight || 'normal')
            .text(line.text);
        
        if (line.weight === 'bold') {
            lineElement.css('textTransform', 'uppercase');
        }
        
        textDiv.append(lineElement);
    });
    
    pageContent.append(pageImage).append(textDiv);
    pageDiv.append(pageContent);
    
    return pageDiv;
}

function setupEventListeners() {
    // Back button
    $('#backButton').on('click', () => {
        window.location.href = 'index.html';
    });
    
    // Previous page button
    $('#prevPage').on('click', () => {
        console.log('Previous button clicked');
        $('#book').turn('previous');
    });
    
    // Next page button
    $('#nextPage').on('click', () => {
        console.log('Next button clicked');
        $('#book').turn('next');
    });
    
    // Keyboard navigation
    $(document).on('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            $('#book').turn('previous');
        } else if (e.key === 'ArrowRight') {
            $('#book').turn('next');
        }
    });
    
    // PDF export button
    $('#exportPdfButton').on('click', () => {
        exportToPDF();
    });
    
    console.log('Event listeners set up');
}

function updatePageIndicator(page) {
    $('#currentPage').text(page);
}

function updateNavigationButtons() {
    const bookElement = $('#book');
    const currentPage = bookElement.turn('page');
    const totalPages = currentBook.pages.length;
    
    const prevBtn = $('#prevPage');
    const nextBtn = $('#nextPage');
    
    console.log(`Updating navigation: currentPage=${currentPage}, totalPages=${totalPages}`);
    
    // Hide/show and enable/disable previous button
    if (currentPage === 1) {
        prevBtn.css('visibility', 'hidden');
        prevBtn.prop('disabled', true);
    } else {
        prevBtn.css('visibility', 'visible');
        prevBtn.prop('disabled', false);
    }
    
    // Hide/show and enable/disable next button
    if (currentPage === totalPages) {
        nextBtn.css('visibility', 'hidden');
        nextBtn.prop('disabled', true);
    } else {
        nextBtn.css('visibility', 'visible');
        nextBtn.prop('disabled', false);
    }
}

async function exportToPDF() {
    if (!currentBook) return;
    
    // Show loading state
    const exportButton = $('#exportPdfButton');
    const originalText = exportButton.find('.mdc-button__label').text();
    exportButton.find('.mdc-button__label').text('Generating PDF...');
    exportButton.prop('disabled', true);
    
    try {
        const { jsPDF } = window.jspdf;
        
        // Create PDF with square format - one book page per PDF page
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [500, 500]
        });
        
        let isFirstPage = true;
        
        // Process each page individually
        for (let i = 0; i < currentBook.pages.length; i++) {
            const page = currentBook.pages[i];
            const pageElement = $(`.page[data-page-number="${page.pageNumber}"]`)[0];
            
            if (!pageElement) {
                console.warn(`Page element not found for page ${page.pageNumber}`);
                continue;
            }
            
            // Add new page if not first
            if (!isFirstPage) {
                pdf.addPage([500, 500], 'portrait');
            }
            
            console.log(`Rendering page ${page.pageNumber} to PDF...`);
            
            // Render page to canvas
            const canvas = await html2canvas(pageElement, {
                backgroundColor: page.backgroundColor || '#ffffff',
                scale: 2,
                useCORS: true,
                width: 500,
                height: 500,
                logging: false,
                windowWidth: 500,
                windowHeight: 500
            });
            
            // Add image to PDF
            const imgData = canvas.toDataURL('image/png');
            pdf.addImage(imgData, 'PNG', 0, 0, 500, 500);
            
            isFirstPage = false;
        }
        
        // Save PDF
        const filename = `${currentBook.title.replace(/\s+/g, '-')}.pdf`;
        pdf.save(filename);
        console.log(`PDF saved as ${filename}`);
        
    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Error generating PDF. Please try again.\n\nError: ' + error.message);
    } finally {
        // Reset button state
        exportButton.find('.mdc-button__label').text(originalText);
        exportButton.prop('disabled', false);
    }
}
