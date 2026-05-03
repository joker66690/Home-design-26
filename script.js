// Language toggle functionality
function toggleLanguage() {
    const html = document.documentElement;
    const currentLang = html.getAttribute('lang');
    const newLang = currentLang === 'he' ? 'en' : 'he';
    
    html.setAttribute('lang', newLang);
    html.style.direction = newLang === 'he' ? 'rtl' : 'ltr';
    
    // Update all elements with data attributes
    updateLanguage(newLang);
    
    // Update button text
    const langButton = document.querySelector('.language-toggle .lang-text');
    langButton.textContent = newLang === 'he' ? 'English' : 'עברית';
    
    // Save preference
    localStorage.setItem('preferredLanguage', newLang);
}

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-he][data-en]');
    
    elements.forEach(el => {
        if (lang === 'he') {
            el.textContent = el.getAttribute('data-he');
        } else {
            el.textContent = el.getAttribute('data-en');
        }
    });
    
    // Update placeholders
    const inputs = document.querySelectorAll('[data-he-placeholder][data-en-placeholder]');
    inputs.forEach(input => {
        if (lang === 'he') {
            input.setAttribute('placeholder', input.getAttribute('data-he-placeholder'));
        } else {
            input.setAttribute('placeholder', input.getAttribute('data-en-placeholder'));
        }
    });
}

// Smooth scroll function
function scrollTo(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Handle navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        scrollTo(target);
    });
});

// Load saved language preference
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'he';
    if (savedLanguage === 'en') {
        toggleLanguage();
    }
});

// Handle contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert(document.documentElement.lang === 'he' ? 'תודה על הודעתך! נחזור אליך בקרוב.' : 'Thank you for your message! We will contact you soon.');
    this.reset();
});