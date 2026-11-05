// Image Pool for Slideshow & Interaction
const galleryImages = [
    { src: 'Corridor.png', title: 'Corridor Security Glow' },
    { src: 'Main.jpg', title: 'Mitsurin Studio Wing' },
    { src: 'Atrium.jpg', title: 'Atrium Skylight' },
    { src: 'Play.png', title: 'Vacant Play Area' },
    { src: 'Window.png', title: 'Geometric Skylight Foliage' },
    { src: 'Fresh.png', title: 'Vacant Produce Store' },
    { src: 'Main.jpg', title: 'Modern Escalator Wing' },
    { src: 'Vending.jpg', title: 'Kiddie Castle Vending' },
    { src: 'PartyCentral.jpg', title: 'Party Central Arcade' },
    { src: 'Empty.jpg', title: 'Pink Concourse' }
];

let currentSlideIdx = 0;

// 1. Home Page Slide Switcher
const slideImg = document.getElementById('home-slide-img');
const nextBtn = document.getElementById('next-slide-btn');

if (nextBtn && slideImg) {
    nextBtn.addEventListener('click', () => {
        currentSlideIdx = (currentSlideIdx + 1) % galleryImages.length;
        slideImg.style.opacity = '0.4';
        setTimeout(() => {
            slideImg.src = galleryImages[currentSlideIdx].src;
            slideImg.style.opacity = '1';
        }, 150);
    });
}

// 2. Gallery Lightbox Modal
function openLightbox(src, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    if (lightbox && lightboxImg) {
        lightbox.style.display = 'flex';
        lightboxImg.src = src;
        lightboxCaption.textContent = caption || '';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
    }
}

// 3. Locations State Directory Data
const stateData = {
    'AL': {
        name: 'Alabama',
        malls: [
            { name: 'Century Plaza: Birmingham, AL', url: '#' },
            { name: 'Eastwood Mall: Birmingham, AL ☕', url: '#' }
        ]
    },
    'CA': {
        name: 'California',
        malls: [
            { name: 'Hawthorne Plaza: Hawthorne, CA', url: '#' },
            { name: 'Indio Fashion Mall: Indio, CA', url: '#' },
            { name: 'Puente Hills Mall: City of Industry, CA', url: '#' }
        ]
    },
    'TX': {
        name: 'Texas',
        malls: [
            { name: 'West Oaks Mall: Houston, TX', url: '#' },
            { name: 'Sunrise Mall: Corpus Christi, TX', url: '#' }
        ]
    },
    'WA': {
        name: 'Washington',
        malls: [
            { name: 'Cascade Mall: Burlington, WA', url: '#' },
            { name: 'Westlake Center Wing: Seattle, WA', url: '#' }
        ]
    }
};

function selectState(stateCode) {
    const heading = document.getElementById('state-heading');
    const ul = document.getElementById('mall-ul');
    const selectBox = document.getElementById('state-select');

    if (!stateCode || !stateData[stateCode]) return;

    if (selectBox) selectBox.value = stateCode;
    if (heading) heading.textContent = stateData[stateCode].name;

    if (ul) {
        ul.innerHTML = '';
        stateData[stateCode].malls.forEach(mall => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = mall.url;
            a.innerHTML = mall.name;
            li.appendChild(a);
            ul.appendChild(li);
        });
    }
}

// 4. FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq-question');
    
    questions.forEach(q => {
        q.addEventListener('click', () => {
            const answer = q.nextElementSibling;
            const isOpen = answer.style.display === 'block';
            
            // Close all other answers
            document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
            
            // Toggle clicked answer
            answer.style.display = isOpen ? 'none' : 'block';
        });
    });
});