// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Fade in sections on scroll
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Update the parallax effect for hero section
gsap.to('.hero', {
    backgroundPosition: '50% 50%',
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

// Add parallax effect for invest and learn sections
gsap.utils.toArray('.with-image').forEach(section => {
    gsap.to(section, {
        backgroundPosition: '50% 70%',
        ease: 'none',
        scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
});

// Handle form submissions
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Contact form submitted');
    this.reset();
});

document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Newsletter form submitted');
    this.reset();
});