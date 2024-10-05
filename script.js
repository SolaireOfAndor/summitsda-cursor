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

// Wrap FAB functionality in a function
function initFAB() {
    const fabButton = document.querySelector('.fab-button');
    const fabOptions = document.querySelector('.fab-options');

    if (fabButton && fabOptions) {
        fabButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event from bubbling up
            fabOptions.classList.toggle('show');
        });

        // Close FAB options when clicking outside
        document.addEventListener('click', (e) => {
            if (!fabButton.contains(e.target) && !fabOptions.contains(e.target)) {
                fabOptions.classList.remove('show');
            }
        });

        // Smooth scroll for FAB options
        document.querySelectorAll('.fab-options a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                fabOptions.classList.remove('show');
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }
}

// Add this function to handle header scroll effect
function handleHeaderScroll() {
    const header = document.querySelector('header');
    const scrollTrigger = 100; // Adjust this value to change when the header becomes semi-transparent

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollTrigger) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Call the function after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
    initFAB();
    handleHeaderScroll();
});