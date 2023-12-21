// Random bits of JS
console.log('main.js loaded');

// Show footer when user scrolls to bottom of page
window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});


// Mobile menu
const button = document.querySelector('#menuToggle');
const mobileMenu = document.querySelector('.mobile-menu');

//select body element
const body = document.querySelector('body');

button.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
});

//when page is scrolled from the top, set background color of header to black
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0 && window.scrollY < 600) {
        header.style.backgroundColor = 'black';
    } else if (window.scrollY > 600) {
        header.style.backgroundColor = '#190426';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});


