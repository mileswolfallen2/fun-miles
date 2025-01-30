document.getElementById('contactForm').addEventListener('submit', functie(gebeurtenis) {
    gebeurtenis.preventDefault();
    const naam = document.getElementById('naam').value;
    const email = document.getElementById('email').value;
    const bericht = document.getElementById('bericht').value;
    
    als (naam && e-mail && bericht) {
    document.getElementById('statusMessage').textContent = 'Bedankt voor uw bericht, ' + name + '! We nemen zo snel mogelijk contact met u op.';
    } anders {
    document.getElementById('statusMessage').textContent = 'Vul alle velden in.';
    }
    });