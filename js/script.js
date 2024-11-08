document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const languageSelector = document.getElementById('language');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const links = document.querySelectorAll('.nav-links a[data-page]');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
    });

    languageSelector.addEventListener('change', function() {
        changeLanguage(this.value);
    });

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            this.parentElement.classList.toggle('active');
        });
    });

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            loadContent(this.getAttribute('data-page'), languageSelector.value);
        });
    });

    function changeLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = ['ar', 'he'].includes(lang) ? 'rtl' : 'ltr';
        loadContent(getCurrentPage(), lang);
    }

    function getCurrentPage() {
        return window.location.hash.slice(1) || 'home';
    }

    function loadContent(page, lang) {
        fetch(`content/${page}-${lang}.html`)
            .then(response => response.text())
            .then(html => {
                document.getElementById('page-content').innerHTML = html;
                window.location.hash = `#${page}`;
            })
            .catch(error => {
                console.error('Error loading content:', error);
                document.getElementById('page-content').innerHTML = '<p>Error loading content. Please try again.</p>';
            });
    }

    // Initial load
    loadContent(getCurrentPage(), languageSelector.value);

    // Start random animation
    startRandomAnimation();
});

function startRandomAnimation() {
    const animations = Object.keys(animationFrames);
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    animateAsciiArt('animation-container', randomAnimation);
}

function animateAsciiArt(elementId, animationName) {
    const element = document.getElementById(elementId);
    let frameIndex = 0;
    const frames = animationFrames[animationName];
    
    function updateFrame() {
        element.textContent = frames[frameIndex];
        frameIndex = (frameIndex + 1) % frames.length;
    }

    setInterval(updateFrame, 200);
}
