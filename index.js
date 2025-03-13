window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const content = document.querySelector('.content');
    
    // Move the loader off the screen
    loader.style.transform = 'translateY(-100%)'; // Move up off the screen

    // Show the content after a delay to allow the animation to complete
    setTimeout(() => {
        loader.style.display = 'none'; 
        content.style.display = 'block'; 
    }, 500); // Adjust delay to match the transition duration

    // Check for dark mode preference in cookies
    const darkMode = getCookie('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        updateDarkModeIcons(true);
    } else {
        document.body.classList.remove('dark-mode');
        updateDarkModeIcons(false);
    }

    // Set the background image for the parallax effect
    const mainContent = document.querySelector('.main-content');
    mainContent.style.backgroundImage = 'url("/gamestooadd.jpeg")'; // Replace with your image path

    // Add parallax effect
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        mainContent.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
});

document.getElementById('versionDisplay').textContent = 'Version 2.44.0';

function toggleSideBar() {
    const sideBarMenu = document.getElementById('side-bar-menu');
    sideBarMenu.style.display = sideBarMenu.style.display === 'block' ? 'none' : 'block';
}

function onToggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    updateDarkModeIcons(isDarkMode);
    setCookie('darkMode', isDarkMode ? 'enabled' : 'disabled', 365);
}

function updateDarkModeIcons(isDarkMode) {
    const icon = document.getElementById('dark-mode-icon');
    const sidebarIcon = document.getElementById('sidebar-dark-mode-icon');
    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        sidebarIcon.classList.remove('fa-moon');
        sidebarIcon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        sidebarIcon.classList.remove('fa-sun');
        sidebarIcon.classList.add('fa-moon');
    }
}

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}
