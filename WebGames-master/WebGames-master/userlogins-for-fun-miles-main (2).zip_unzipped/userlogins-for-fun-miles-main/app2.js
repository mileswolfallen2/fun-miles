//Userbase
userbase.init({ appId: '7cd8e25b-723d-4af7-8bdf-ef558bd0dfcc' }); // Replace with your Userbase app ID

let currentUser; // Variable to hold the current user object
let isDatabaseOpen = false; // Flag to check if the database is open


document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value; // Email as username
    const password = document.getElementById('signup-password').value;

    try {
        const user = await userbase.signUp({ username: username, password });
        alert('Signup successful!');
        await logout(); // Log out the user immediately after signup
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
        currentUser = await userbase.signIn({
            username: username,
            password: password,
            rememberMe: 'none' // Do not remember the session
        });
        alert('Login successful!');
        document.getElementById('form-container').style.display = 'none';
        document.getElementById('note-management').style.display = 'block';

        // Open the Userbase database
        await openUserbaseDatabase();
    } catch (error) {
        console.error('Login error:', error);
        alert('Login failed: ' + error.message);
    }
});

// Function to check if user is logged in
async function checkUserLoggedIn() {
    try {
        currentUser = await userbase.getUser();
        if (currentUser) {
            document.getElementById('form-container').style.display = 'none';
            document.getElementById('note-management').style.display = 'block';

            // Open the Userbase database
            await openUserbaseDatabase();
        }
    } catch (error) {
        console.error('Error checking user login status:', error);
    }
}

// Function to open Userbase database
async function openUserbaseDatabase() {
    try {
        await userbase.openDatabase({
            databaseName: 'notes-database',
            changeHandler: function (items) {
                const notesList = document.getElementById('notes-list');
                notesList.innerHTML = ''; // Clear existing notes
                items.forEach(item => {
                    const noteItem = document.createElement('li');
                    noteItem.className = 'note-item';
                    noteItem.textContent = item.item.text;

                    // Create delete button
                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    deleteButton.style.marginLeft = '10px';
                    deleteButton.onclick = () => deleteNote(item.itemId); // Bind delete function

                    noteItem.appendChild(deleteButton);
                    notesList.appendChild(noteItem);
                });
            }
        });
        isDatabaseOpen = true;
        console.log('Database opened successfully.');
    } catch (error) {
        isDatabaseOpen = false;
        console.error('Error opening database:', error);
    }
}

// Function to save note to Userbase
async function saveNote() {
    if (!isDatabaseOpen) {
        alert('Database is not open. Please try again later.');
        return;
    }

    const noteText = document.getElementById('note-input').value;
    if (!noteText) {
        alert('Please enter a note to save.');
        return;
    }

    try {
        await userbase.insertItem({
            databaseName: 'notes-database',
            item: { text: noteText }
        });
        alert('Note saved successfully!');
        document.getElementById('note-input').value = ''; // Clear input
    } catch (error) {
        console.error('Error saving note:', error);
        alert('Failed to save note: ' + error.message);
    }
}

// Function to delete a note from Userbase
async function deleteNote(itemId) {
    if (!isDatabaseOpen) {
        alert('Database is not open. Please try again later.');
        return;
    }

    try {
        await userbase.deleteItem({
            databaseName: 'notes-database',
            itemId: itemId
        });
        alert('Note deleted successfully!');
    } catch (error) {
        console.error('Error deleting note:', error);
        alert('Failed to delete note: ' + error.message);
    }
}

// Function to log out the user
async function logout() {
    try {
        await userbase.signOut(); // Sign out from Userbase
        currentUser = null; // Clear current user
        isDatabaseOpen = false; // Reset database open flag
        document.getElementById('form-container').style.display = 'block'; // Show login/signup forms
        document.getElementById('note-management').style.display = 'none'; // Hide note management
        alert('Logged out successfully!');
    } catch (error) {
        console.error('Logout error:', error);
        alert('Logout failed: ' + error.message);
    }
}

// Function to save cookies to the cloud
document.getElementById('save-cookies-cloud').addEventListener('click', async () => {
    if (!isDatabaseOpen) {
        alert('Database is not open. Please try again later.');
        return;
    }

    try {
        // Clear existing items in the database
        await userbase.openDatabase({
            databaseName: 'notes-database',
            changeHandler: async function (items) {
                for (const item of items) {
                    await userbase.deleteItem({
                        databaseName: 'notes-database',
                        itemId: item.itemId
                    });
                }

                // Save cookies to the cloud
                const cookies = document.cookie.split('; ').map(cookie => decodeURIComponent(cookie)).join('\n');
                const chunkSize = 9000; // Set chunk size to be less than 10 KB
                for (let i = 0; i < cookies.length; i += chunkSize) {
                    const chunk = cookies.substring(i, i + chunkSize);
                    await userbase.insertItem({
                        databaseName: 'notes-database',
                        item: { text: chunk }
                    });
                }
            }
        }
    );
    } catch (error) {
        console.error('Error saving cookies to cloud:', error);
        alert('Failed to save cookies to cloud: ' + error.message);
    }
});

async function loadCookiesFromCloud() {
    try {
        // Ensure the database is open
        if (!isDatabaseOpen) {
            await openUserbaseDatabase();
        }

        // Fetch cookies from the cloud
        const items = await userbase.getDatabaseItems({ databaseName: 'notes-database' });
        let cookiesFromCloud = '';
        items.forEach(item => {
            cookiesFromCloud += item.item.text;
        });

        // Replace the current cookies with the loaded ones
        document.cookie.split(";").forEach((cookie) => {
            document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });

        const cookies = cookiesFromCloud.split('\n');
        cookies.forEach(cookie => {
            document.cookie = cookie.trim();
        });

        // Display the cookies in the text box
        document.getElementById('cookies-input').value = cookiesFromCloud;

        // Alert the user that the cookies have been loaded and replaced
        alert('Cookies loaded from cloud and replaced!');
    } catch (error) {
        console.error('Error loading cookies from cloud:', error);
        alert('Failed to load cookies from cloud: ' + error.message);
    }
}
// Add event listener to the "Load Cookies from Cloud" button
document.getElementById('load-cookies-cloud').addEventListener('click', loadCookiesFromCloud);

// Function to display cookies
function displayCookies() {
    const cookies = document.cookie.split('; ').map(cookie => decodeURIComponent(cookie)).join('\n');
    document.getElementById('cookies-display').textContent = cookies;
    document.getElementById('cookies-input').value = cookies;
}

// Function to save cookies from the textarea
document.getElementById('save-cookies').addEventListener('click', () => {
    const cookies = document.getElementById('cookies-input').value.split('\n');
    cookies.forEach(cookie => {
        document.cookie = encodeURIComponent(cookie.trim());
    });
    alert('Cookies updated!');
    displayCookies();
});

// Event listeners for buttons
document.getElementById('save-note').addEventListener('click', saveNote);
document.getElementById('logout-button').addEventListener('click', logout);

// Check if user is logged in when the page loads
window.onload = checkUserLoggedIn;
