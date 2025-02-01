// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Carousel Automation
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    setInterval(nextSlide, 5000);

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Project Hover Effect
    document.querySelectorAll('.project-media').forEach(media => {
        media.addEventListener('mouseenter', function() {
            this.querySelector('.project-links').style.opacity = '1';
        });
        
        media.addEventListener('mouseleave', function() {
            this.querySelector('.project-links').style.opacity = '0';
        });
    });
});