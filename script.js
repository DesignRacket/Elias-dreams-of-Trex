document.addEventListener('DOMContentLoaded', function() {
    // Book content data - using numbered image files
    const bookPages = [
        {
            id: "page1",
            title: "Page 1",
            text: "Welcome to this magical adventure!",
            image: "images/01.png",
            sound: "welcome"
        },
        {
            id: "page2",
            title: "Page 2",
            text: "Once upon a time in a forest far away...",
            image: "images/02.png",
            sound: "forest"
        },
        {
            id: "page3",
            title: "Page 3",
            text: "The adventure continues...",
            image: "images/03.png", 
            sound: "discovery"
        },
        {
            id: "page4",
            title: "Page 4",
            text: "Our hero discovers something amazing...",
            image: "images/04.png",
            sound: "magic"
        },
        {
            id: "page5",
            title: "Page 5",
            text: "The End",
            image: "images/05.png",
            sound: "ending"
        }
    ];

    // Initialize book navigation
    let currentPage = 0;
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const book = document.querySelector('.book');

    // Clear any existing pages (except the first one which is in HTML)
    const existingPages = document.querySelectorAll('.page:not(:first-child)');
    existingPages.forEach(page => page.remove());

    // Update first page with content from data
    const firstPage = document.getElementById('page1');
    if (firstPage) {
        const firstPageContent = firstPage.querySelector('.page-content');
        const firstPageTitle = firstPageContent.querySelector('h1');
        const firstPageText = firstPageContent.querySelector('p');
        const firstPageImage = firstPageContent.querySelector('img');
        
        firstPageTitle.textContent = bookPages[0].title;
        firstPageText.textContent = bookPages[0].text;
        firstPageImage.src = bookPages[0].image;
        firstPageImage.alt = `Image for ${bookPages[0].title}`;
    }

    // Dynamically create remaining pages
    function createPages() {
        // Add pages 2 through end dynamically
        for (let i = 1; i < bookPages.length; i++) {
            const page = document.createElement('div');
            page.className = 'page';
            page.id = bookPages[i].id;
            
            const pageContent = document.createElement('div');
            pageContent.className = 'page-content';
            
            const title = document.createElement('h1');
            title.textContent = bookPages[i].title;
            
            const text = document.createElement('p');
            text.textContent = bookPages[i].text;
            
            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';
            
            const image = document.createElement('img');
            image.src = bookPages[i].image;
            image.alt = `Image for ${bookPages[i].title}`;
            
            const soundBtn = document.createElement('button');
            soundBtn.className = 'sound-btn';
            soundBtn.setAttribute('data-sound', bookPages[i].sound);
            soundBtn.textContent = 'Play Sound';
            
            // Create audio element if it doesn't exist
            if (!document.getElementById(bookPages[i].sound)) {
                const audio = document.createElement('audio');
                audio.id = bookPages[i].sound;
                audio.src = `sounds/${bookPages[i].sound}.mp3`;
                document.body.appendChild(audio);
            }
            
            // Assemble page
            imageContainer.appendChild(image);
            pageContent.appendChild(title);
            pageContent.appendChild(text);
            pageContent.appendChild(imageContainer);
            pageContent.appendChild(soundBtn);
            page.appendChild(pageContent);
            book.appendChild(page);
        }
    }

    // Initialize pages
    createPages();

    // Sound button functionality
    document.querySelectorAll('.sound-btn').forEach(button => {
        button.addEventListener('click', function() {
            const soundId = this.getAttribute('data-sound');
            const audio = document.getElementById(soundId);
            if (audio) {
                audio.currentTime = 0; // Restart sound if already playing
                audio.play();
            }
        });
    });

    // Navigation functions
    function updatePage() {
        const pages = document.querySelectorAll('.page');
        pages.forEach((page, index) => {
            if (index === currentPage) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
        
        // Update button states
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage === bookPages.length - 1;
    }

    // Button listeners
    prevBtn.addEventListener('click', function() {
        if (currentPage > 0) {
            currentPage--;
            updatePage();
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentPage < bookPages.length - 1) {
            currentPage++;
            updatePage();
        }
    });

    // Also support keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' && currentPage < bookPages.length - 1) {
            currentPage++;
            updatePage();
        } else if (e.key === 'ArrowLeft' && currentPage > 0) {
            currentPage--;
            updatePage();
        }
    });
});