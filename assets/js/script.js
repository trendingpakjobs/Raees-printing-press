// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
});

// Animate Elements on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.stats-card, .service-card, .product-card');
    const windowBottom = window.innerHeight + window.scrollY;

    elements.forEach(el => {
        if(el.offsetTop + 100 < windowBottom){
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }
    });
};
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
