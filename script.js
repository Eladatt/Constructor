document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const navLinks = document.querySelectorAll('.nav-links a');
    const pages = document.querySelectorAll('.page');
    const animationList = document.getElementById('animation-list');
    const randomAnimationContainer = document.getElementById('random-animation');
    const newAnimationForm = document.getElementById('new-animation-form');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            showPage(targetPage);
        });
    });

    function showPage(pageId) {
        pages.forEach(page => {
            page.style.display = 'none';
        });
        document.getElementById(pageId).style.display = 'block';
    }

    function displayAnimations() {
        animationList.innerHTML = '';
        animations.forEach((animation, index) => {
            const animationDiv = document.createElement('div');
            animationDiv.classList.add('ascii-art');
            animationDiv.innerHTML = `<h3>${animation.name}</h3><pre>${animation.frames[0]}</pre>`;
            animationList.appendChild(animationDiv);
        });
    }

    function displayRandomAnimation() {
        const randomIndex = Math.floor(Math.random() * animations.length);
        const randomAnimation = animations[randomIndex];
        randomAnimationContainer.innerHTML = `<h3>${randomAnimation.name}</h3><pre class="ascii-art">${randomAnimation.frames[0]}</pre>`;
        let frameIndex = 0;
        setInterval(() => {
            frameIndex = (frameIndex + 1) % randomAnimation.frames.length;
            randomAnimationContainer.querySelector('pre').textContent = randomAnimation.frames[frameIndex];
        }, 500);
    }

    newAnimationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('animation-name').value;
        const framesText = document.getElementById('animation-frames').value;
        const frames = framesText.split('\n\n').map(frame => frame.trim());
        animations.push({ name, frames });
        displayAnimations();
        this.reset();
        alert('Animation added successfully!');
    });

    displayAnimations();
    displayRandomAnimation();
});
