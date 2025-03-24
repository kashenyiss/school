document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Display success message
    if (name && email && message) {
        document.getElementById('formStatus').textContent = 'Thank you for reaching out, ' + name + '. I will get back to you soon!';
        document.getElementById('contactForm').reset(); // Reset form after submission
    } else {
        document.getElementById('formStatus').textContent = 'Please fill in all fields.';
        document.getElementById('formStatus').style.color = 'red';
    }
});