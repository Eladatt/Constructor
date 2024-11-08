document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const languageSelector = document.getElementById('language');
    const animationContainer = document.getElementById('animation-container');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
    });

    languageSelector.addEventListener('change', function() {
        changeLanguage(this.value);
    });

    function changeLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = ['ar', 'he'].includes(lang) ? 'rtl' : 'ltr';
        // Update content based on selected language
        // This would involve loading new content or updating existing content
    }

    function animateAsciiArt() {
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        let frameIndex = 0;
        let colorIndex = 0;
        const colors = ['pink', 'purple', 'orange', 'green', 'red', 'cyan'];
        const colorTransitionDuration = 10000; // 10 seconds
        const frameInterval = 200; // 200ms between frames

        function updateFrame() {
            let frame = randomAnimation[frameIndex];
            const colorChar = frame[Math.floor(Math.random() * frame.length)];
            const currentColor = interpolateColor(colors[colorIndex], colors[(colorIndex + 1) % colors.length], (Date.now() % colorTransitionDuration) / colorTransitionDuration);
            frame = frame.replace(colorChar, `<span style="color: ${currentColor}">${colorChar}</span>`);
            animationContainer.innerHTML = frame;
            frameIndex = (frameIndex + 1) % randomAnimation.length;
        }

        setInterval(updateFrame, frameInterval);
        setInterval(() => {
            colorIndex = (colorIndex + 1) % colors.length;
        }, colorTransitionDuration);
    }

    function interpolateColor(color1, color2, factor) {
        const result = color1.slice(1).match(/.{2}/g).map((hex, i) => {
            const int1 = parseInt(hex, 16);
            const int2 = parseInt(color2.slice(1).match(/.{2}/g)[i], 16);
            const int = Math.round(int1 + (int2 - int1) * factor);
            return `0${int.toString(16)}`.slice(-2);
        }).join('');
        return `#${result}`;
    }

    animateAsciiArt();
});

// Add more JavaScript functionality as needed
