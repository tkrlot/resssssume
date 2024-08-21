document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.getElementById('toggle-theme');
    const toggleLanguageButton = document.getElementById('toggle-language');

    const isDarkMode = localStorage.getItem('theme') === 'dark';

    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.querySelectorAll('nav button').forEach(button => button.classList.add('dark-mode'));
    } else {
        document.body.classList.add('light-mode');
        document.querySelectorAll('nav button').forEach(button => button.classList.add('light-mode'));
    }

    toggleThemeButton.addEventListener('click', () => {
        const isDarkMode = document.body.classList.contains('dark-mode');
        if (isDarkMode) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    });

    toggleLanguageButton.addEventListener('click', () => {
        const isEnglish = document.documentElement.lang === 'en';
        if (isEnglish) {
            document.documentElement.lang = 'ar';
            document.getElementById('name').textContent = 'جون دو';
            document.getElementById('title').textContent = 'مهندس برمجيات';
            document.getElementById('bio-text').textContent = 'أنا مهندس برمجيات أملك أكثر من 10 سنوات من الخبرة في تطوير الويب. تشمل مهاراتي HTML و CSS و JavaScript وأطر عمل مختلفة. لدي شغف بخلق حلول مبتكرة وحل المشكلات المعقدة.';
            document.getElementById('skills-list').innerHTML = `
                <li>HTML و CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Python</li>
            `;
            document.getElementById('contact').innerHTML = `
                <h2>اتصل بي</h2>
                <p>البريد الإلكتروني: john.doe@example.com</p>
                <p>الهاتف: +123456789</p>
            `;
            toggleLanguageButton.textContent = 'Switch to English';
        } else {
            document.documentElement.lang = 'en';
            document.getElementById('name').textContent = 'John Doe';
            document.getElementById('title').textContent = 'Software Engineer';
            document.getElementById('bio-text').textContent = 'I am a software engineer with over 10 years of experience in web development. My skills include HTML, CSS, JavaScript, and various frameworks. I have a passion for creating innovative solutions and solving complex problems.';
            document.getElementById('skills-list').innerHTML = `
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Python</li>
            `;
            document.getElementById('contact').innerHTML = `
                <h2>Contact</h2>
                <p>Email: john.doe@example.com</p>
                <p>Phone: +123456789</p>
            `;
            toggleLanguageButton.textContent = 'Switch to Arabic';
        }
    });
});
