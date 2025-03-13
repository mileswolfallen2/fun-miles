function redirectToFile() {
    window.location.href = 'index.html'; // Replace 'file.html' with the actual file you want to redirect to
  }
    
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const Name = document.getElementById('Name').value;
    const Email = document.getElementById('Email').value;
    const Message = document.getElementById('Message').value;

    if (Name && Email && Message) {
        document.getElementById('statusMessage').textContent = 'Thank you for reaching out, ' + Name + '! We will get back to you soon.';
    } else {
        document.getElementById('statusMessage').textContent = 'Please fill out all fields.';
    }
});