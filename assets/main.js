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


