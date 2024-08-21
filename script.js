document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const langToggle = document.querySelector('.lang-toggle');

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // Language toggle
    langToggle.addEventListener('click', () => {
        const lang = langToggle.getAttribute('data-lang');
        if (lang === 'ar') {
            window.location.href = 'resume-ar.html';
        } else {
            window.location.href = 'index.html';
        }
    });
});
