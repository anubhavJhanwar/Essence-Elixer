// Select the carousel element
const carousel = document.querySelector('.carousel');

// Pause animation on mouse over
carousel.addEventListener('mouseover', () => {
    carousel.style.animationPlayState = 'paused';
});

// Resume animation on mouse out
carousel.addEventListener('mouseout', () => {
    carousel.style.animationPlayState = 'running';
});