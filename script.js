// ===========================
// Navigation Scroll Effect
// ===========================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class when page is scrolled
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Mobile Menu Toggle
// ===========================

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// ===========================
// Smooth Scrolling for Anchor Links
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Scroll Animations
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
const elementsToAnimate = [
    '.story-card',
    '.benefit-card',
    '.award-item',
    '.feature',
    '.contact-item'
];

elementsToAnimate.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// ===========================
// Parallax Effect for Hero
// ===========================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-content, .hero-gradient');
    
    parallaxElements.forEach(el => {
        const speed = el.classList.contains('hero-gradient') ? 0.3 : 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===========================
// Counter Animation for Stats
// ===========================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Observe cert-value for counter animation
const certValueObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const target = parseInt(entry.target.textContent.replace(/\D/g, ''));
            if (target) {
                entry.target.dataset.animated = 'true';
                animateCounter(entry.target, target, 1500);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.cert-value').forEach(el => {
    certValueObserver.observe(el);
});

// ===========================
// Lazy Loading for Better Performance
// ===========================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// Add Loading Animation
// ===========================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger hero animations
    const heroElements = document.querySelectorAll('.hero-subtitle, .hero-main, .hero-description, .cta-button');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// ===========================
// Console Easter Egg
// ===========================

console.log('%cNIOÉLIA', 'font-size: 40px; font-weight: bold; color: #5a6b4a;');
console.log('%cPremium Extra Virgin Olive Oil from Zakynthos', 'font-size: 14px; color: #c4a962;');
console.log('%cInterested in how this site was built? We use modern HTML, CSS, and JavaScript!', 'font-size: 12px; color: #6b6b6b;');
