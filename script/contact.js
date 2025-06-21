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

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Use EmailJS (client-side email service)
        emailjs.send('service_oslfe5k','template_hcj643e', {
            from_name: name,
            from_email: email,
            message: message,
            to_email: 'kashenyiss@gmail.com'
        }, 'gDVRY-RrfRUMNQEGy')
        .then(function(response) {
            formStatus.textContent = 'Thank you for contacting us! We will get back to you soon.';
            formStatus.style.color = '#2caf50';
            contactForm.reset();
        }, function(error) {
            formStatus.textContent = 'Failed to send message. Please try again later.';
            formStatus.style.color = 'red';
        });
    });
}