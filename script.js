document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const langToggle = document.querySelector('.lang-toggle');
    
    // Function to apply dark mode based on localStorage
    function applyMode() {
        if (localStorage.getItem('dark-mode') === 'true') {
            document.body.classList.add('dark-mode');
            darkModeToggle.textContent = '☀️'; // Switch to sun icon for light mode
        } else {
            document.body.classList.remove('dark-mode');
            darkModeToggle.textContent = '🌙'; // Switch to moon icon for dark mode
        }
    }

    // Apply the mode on page load
    applyMode();

    // Toggle dark mode on click
    darkModeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            darkModeToggle.textContent = '🌙'; // Moon icon for dark mode
            localStorage.setItem('dark-mode', 'false');
        } else {
            document.body.classList.add('dark-mode');
            darkModeToggle.textContent = '☀️'; // Sun icon for light mode
            localStorage.setItem('dark-mode', 'true');
        }
    });

    // Language toggle
    langToggle.addEventListener('click', () => {
        const lang = langToggle.getAttribute('data-lang');
        window.location.href = lang === 'ar' ? 'resume-ar.html' : 'resume-en.html';
    });
});
