document.addEventListener('DOMContentLoaded', () => {
    const toggleSidebar = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('.sidebar');
    const animationPanel = document.getElementById('animation');

    toggleSidebar.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    function displayRandomAnimation() {
        const animations = Object.keys(animationFrames);
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        let currentFrame = 0;

        function updateAnimation() {
            animationPanel.textContent = animationFrames[randomAnimation][currentFrame];
            currentFrame = (currentFrame + 1) % animationFrames[randomAnimation].length;
        }

        updateAnimation();
        setInterval(updateAnimation, 200);
    }

    displayRandomAnimation();
});
