document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('statusMessage').textContent = 'Thank you for reaching out, ' + name + '! We will get back to you soon.';
    } else {
        document.getElementById('statusMessage').textContent = 'Please fill out all fields.';
    }
});