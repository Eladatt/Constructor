document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const languageSelector = document.getElementById('language');
    const animationContainer = document.getElementById('animation-container');
    const content = document.getElementById('content');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
    });

    languageSelector.addEventListener('change', function() {
        changeLanguage(this.value);
    });

    function changeLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = ['ar', 'he'].includes(lang) ? 'rtl' : 'ltr';
        loadContent(window.location.hash.slice(1) || 'home', lang);
    }

    function loadContent(page, lang) {
        fetch(`pages/${page}-${lang}.html`)
            .then(response => response.text())
            .then(html => {
                content.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading content:', error);
                content.innerHTML = '<p>Error loading content. Please try again.</p>';
            });
    }

    window.addEventListener('hashchange', function() {
        const page = window.location.hash.slice(1) || 'home';
        const lang = languageSelector.value;
        loadContent(page, lang);
    });

    // Initial load
    loadContent('home', languageSelector.value);

    // Start random animation
    startRandomAnimation();
});

function startRandomAnimation() {
    const animations = Object.keys(animationFrames);
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    animateAsciiArt('animation-container', randomAnimation);
}
