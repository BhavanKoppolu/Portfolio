// =========================================
// Intersection Observer — scroll-triggered fade-ins
// =========================================

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Set initial hidden state and observe each section's direct child div
document.querySelectorAll('section > div').forEach(section => {
    section.classList.add('opacity-0');
    observer.observe(section);
});

// =========================================
// Nav name swap on scroll — smooth crossfade
// =========================================
const navFull  = document.getElementById('nav-name-full');
const navShort = document.getElementById('nav-name-short');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        navFull.style.opacity  = '0';
        navFull.style.transform = 'translateY(-4px)';
        navShort.style.opacity  = '1';
        navShort.style.transform = 'translateY(0)';
    } else {
        navFull.style.opacity  = '1';
        navFull.style.transform = 'translateY(0)';
        navShort.style.opacity  = '0';
        navShort.style.transform = 'translateY(-4px)';
    }
});
