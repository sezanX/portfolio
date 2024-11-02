// animations.js

// Intersection Observer for fade-in effect
const fadeInSections = document.querySelectorAll('section, h1, h2');

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('active'); // Re-adds class when element leaves viewport
        }
    });
}, { threshold: 0.2 });

fadeInSections.forEach(section => {
    sectionObserver.observe(section);
});