const btn = document.querySelector('.submit-btn');
const form = document.querySelector('.newsletter-form');
const emailInput = document.querySelector('.email-input');
const successDiv = document.getElementById('newsletter-success');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (localStorage.getItem('newsletterSubscribed')) {
    successDiv.style.display = 'block';
    successDiv.style.color = 'orange';
    successDiv.textContent = 'You have already subscribed to the newsletter.';
    setTimeout(() => { successDiv.style.display = 'none'; }, 3000);
    return;
  }
  const email = emailInput.value;
  if (email === '') {
    successDiv.style.display = 'block';
    successDiv.style.color = 'red';
    successDiv.textContent = 'Please enter your email address.';
    setTimeout(() => { successDiv.style.display = 'none'; }, 3000);
    return;
  }
  // Simulate form submission
  console.log(`Email submitted: ${email}`);
  localStorage.setItem('newsletterSubscribed', 'true');
  successDiv.style.display = 'block';
  successDiv.style.color = 'green';
  successDiv.textContent = 'Thank you for subscribing!';
  setTimeout(() => { successDiv.style.display = 'none'; }, 3000);
  form.reset(); // Reset the form after submission
});