console.log('main.js loaded');

// Mobile menu
const button = document.querySelector('#menuToggle');
const mobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('header');

//select body element
const body = document.querySelector('body');

button.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
});

// when page is scrolled from the top, set background color of header to black
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


