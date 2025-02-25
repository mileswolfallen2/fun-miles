// Initialize Userbase
userbase.init({ appId: '7cd8e25b-723d-4af7-8bdf-ef558bd0dfcc' }); // Replace with your Userbase app ID

document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    try {
        const user = await userbase.signUp({ username: email, password });
        // Save user info in cookies
        document.cookie = `user=${user.username}; path=/;`;
        alert('Signup successful!');
    } catch (error) {
        console.error('Signup error:', error);
        alert('Signup failed: ' + error.message);
    }
});

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const user = await userbase.signIn({ username: email, password });
        // Save user info in cookies
        document.cookie = `user=${user.username}; path=/;`;
        alert('Login successful!');
        document.getElementById('form-container').style.display = 'none';
        document.getElementById('notes-container').style.display = 'block';
        loadNotes();
    } catch (error) {
        console.error('Login error:', error);
        alert('Login failed: ' + error.message);
    }
});

// Function to load cookies
function loadCookies() {
    const cookies = document.cookie.split('; ');
    const userCookie = cookies.find(row => row.startsWith('user='));
    if (userCookie) {
        const user = userCookie.split('=')[1];
        alert(`Welcome back, ${user}!`);
        document.getElementById('form-container').style.display = 'none';
        document.getElementById('notes-container').style.display = 'block';
        loadNotes();
    }
}

// Load notes from local storage
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('userNotes')) || [];
    const savedNotesDiv = document.getElementById('saved-notes');
    savedNotesDiv.innerHTML = '';
    notes.forEach((note, index) => {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        noteDiv.textContent = note;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-note';
        deleteButton.onclick = () => deleteNote(index);

        noteDiv.appendChild(deleteButton);
        savedNotesDiv.appendChild(noteDiv);
    });
}

// Delete note from local storage
function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem('userNotes')) || [];
    notes.splice(index, 1);
    localStorage.setItem('userNotes', JSON.stringify(notes));
    loadNotes();
}

// Save note to local storage
document.getElementById('save-note').addEventListener('click', () => {
    const noteInput = document.getElementById('note-input');
    const note = noteInput.value;
    if (note) {
        const notes = JSON.parse(localStorage.getItem('userNotes')) || [];
        notes.push(note);
        localStorage.setItem('userNotes', JSON.stringify(notes));
        noteInput.value = '';
        loadNotes();
    } else {
        alert('Please enter a note.');
    }
});

// Load cookies on page load
window.onload = loadCookies;