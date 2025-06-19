function call(phoneNumber) {
    window.location.href = `tel:${phoneNumber}`;
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formStatus.textContent = 'Sending...';
        formStatus.style.color = '#0097e6';
        // Simulate sending (replace with real backend integration if needed)
        setTimeout(() => {
            formStatus.textContent = 'Thank you for contacting us! We will get back to you soon.';
            formStatus.style.color = '#2caf50';
            contactForm.reset();
        }, 1200);
    });
}