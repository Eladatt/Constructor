document.addEventListener('DOMContentLoaded', function() {
    const animationContainer = document.getElementById('animation-container');
    const mainContent = document.getElementById('main-content');
    const newAnimationInput = document.getElementById('new-animation-input');
    const addAnimationBtn = document.getElementById('add-animation-btn');

    function displayRandomAnimation() {
        const randomIndex = Math.floor(Math.random() * animations.length);
        const randomAnimation = animations[randomIndex];
        animationContainer.innerHTML = randomAnimation;
        animateText(animationContainer);
    }

    function animateText(element) {
        const text = element.innerHTML;
        element.innerHTML = '';
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 10);
    }

    function addNewAnimation() {
        const newAnimation = newAnimationInput.value.trim();
        if (newAnimation) {
            animations.push(newAnimation);
            newAnimationInput.value = '';
            alert('New animation added successfully!');
        }
    }

    addAnimationBtn.addEventListener('click', addNewAnimation);

    // Display random animation on page load
    displayRandomAnimation();

    // Change animation every 30 seconds
    setInterval(displayRandomAnimation, 30000);

    // Handle navigation
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            mainContent.innerHTML = `<h2>${this.textContent}</h2><p>Content for ${target} goes here.</p>`;
        });
    });
});
