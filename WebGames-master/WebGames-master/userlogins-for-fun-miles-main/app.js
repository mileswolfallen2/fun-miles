// Initialize Userbase
userbase.init({ appId: '7cd8e25b-723d-4af7-8bdf-ef558bd0dfcc' }); // Replace with your Userbase app ID

document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value; // Email as username
    const password = document.getElementById('signup-password').value;

    try {
        const user = await userbase.signUp({ username: username, password });
        document.cookie = `user=${user.username}; path=/;`;
        alert('Signup successful!');
    } catch (error) {
        console.error('Signup error:', error);
        alert('Signup failed: ' + error.message);
    }
});

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value; // Email as username
    const password = document.getElementById('login-password').value;

    try {
        const user = await userbase.signIn({ username: username, password });
        document.cookie = `user=${user.username}; path=/;`;
        alert('Login successful!');
        document.getElementById('form-container').style.display = 'none';
        document.getElementById('note-management').style.display = 'block';
    } catch (error) {
        console.error('Login error:', error);
        alert('Login failed: ' + error.message);
    }
});

// Function to save note to Userbase
async function saveNote() {
    const note = document.getElementById('note-input').value;
    if (!note) {
        alert('Please enter a note to save.');
        return;
    }

    try {
        const user = await userbase.getCurrentUser(); // Get the current user
        await userbase.insert({
            database: 'user_notes',
            item: { userId: user.userId, text: note }
        });
        alert('Note saved successfully!');
        document.getElementById('note-input').value = ''; // Clear input
        loadNotes(); // Reload notes after saving
    } catch (error) {
        console.error('Error saving note:', error);
        alert('Failed to save note: ' + error.message);
    }
}

// Function to load notes from Userbase
async function loadNotes() {
    try {
        const user = await userbase.getCurrentUser(); // Get the current user
        const result = await userbase.query({
            database: 'user_notes',
            filter: { userId: user.userId }
        });
        const notesList = document.getElementById('notes-list');
        notesList.innerHTML = ''; // Clear existing notes

        if (result.length > 0) {
            result.forEach(note => {
                const noteItem = document.createElement('li');
                noteItem.className = 'note-item';
                noteItem.textContent = note.text;

                // Create delete button
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.style.marginLeft = '10px';
                deleteButton.onclick = () => deleteNote(note.id); // Bind delete function

                noteItem.appendChild(deleteButton);
                notesList.appendChild(noteItem);
            });
        } else {
            alert('No notes found for this user.');
        }
    } catch (error) {
        console.error('Error loading notes:', error);
        alert('Failed to load notes: ' + error.message);
    }
}

// Function to delete a note from Userbase
async function deleteNote(noteId) {
    try {
        await userbase.delete(noteId);
        alert('Note deleted successfully!');
        loadNotes(); // Reload notes after deletion
    } catch (error) {
        console.error('Error deleting note:', error);
        alert('Failed to delete note: ' + error.message);
    }
}

// Function to get user metadata
async function getUserMetadata(userId, accessToken) {
    try {
        const response = await fetch(`https://v1.userbase.com/v1/admin/users/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user metadata');
        }

        const userData = await response.json();
        console.log('User Metadata:', userData);
        alert(`User Metadata Retrieved: ${JSON.stringify(userData)}`);
    } catch (error) {
        console.error('Error fetching user metadata:', error);
        alert('Error fetching user metadata: ' + error.message);
    }
}

// Example usage of getUserMetadata
document.getElementById('get-user-metadata').addEventListener('click', async () => {
    const userId = 'USER_ID'; // Replace with the actual user ID
    const accessToken = 'ACCESS_TOKEN'; // Replace with the actual access token
    await getUserMetadata(userId, accessToken);
});

// Event listeners for buttons
document.getElementById('save-note').addEventListener('click', saveNote);
document.getElementById('load-notes').addEventListener('click', loadNotes);