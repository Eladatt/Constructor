const animations = {
    pikachu: [
        `  \\:. .:/
\\''._____.''/
 \\ / .--.--, /
 .':. .':. \\
 '::' . '::' |
|'. ._. .'|
|.' '.|
|.\\  /.|
\\ ;,/ '|
 '. .'`,
        `  \\:. .:/
\\''._____.''/
 \\ / .--.--, /
 .':. .':. \\
 '::' . '::' |
|'. ._. .'|
|.' '.|
|.\\ / /.|
\\ ;,/ '|
 '. .'`,
        `  \\:. .:/
\\''._____.''/
 \\ / .--.--, /
 .':. .':. \\
 '::' . '::' |
|'. ._. .'|
|.' '.|
|.\\  /.|
\\ ;,/ '|
 '. .'`,
        `  \\:. .:/
\\''._____.''/
 \\ / .--.--, /
 .':. .':. \\
 '::' . '::' |
|'. ._. .'|
|.' '.|
|.\\ / /.|
\\ ;,/ '|
 '. .'`,
        `  \\:. .:/
\\''._____.''/
 \\ / .--.--, /
 .':. .':. \\
 '::' . '::' |
|'. ._. .'|
|.' '.|
|.\\  /.|
\\ ;,/ '|
 '. .'`
    ],
    // Add more animations here
};

function animateAsciiArt(element, frames, speed = 500) {
    let currentFrame = 0;
    setInterval(() => {
        element.textContent = frames[currentFrame];
        currentFrame = (currentFrame + 1) % frames.length;
    }, speed);
}

document.addEventListener('DOMContentLoaded', () => {
    const welcomeAnimation = document.getElementById('welcome-animation');
    animateAsciiArt(welcomeAnimation, animations.pikachu);

    // Add more functionality here
});

// Function to add new animation
function addNewAnimation() {
    const name = document.getElementById('animation-name').value;
    const frames = [];
    for (let i = 1; i <= 5; i++) {
        frames.push(document.getElementById(`frame-${i}`).value);
    }
    animations[name] = frames;
    alert('New animation added!');
}

// Function to display random animation
function displayRandomAnimation() {
    const animationNames = Object.keys(animations);
    const randomName = animationNames[Math.floor(Math.random() * animationNames.length)];
    const contentArea = document.getElementById('content');
    contentArea.innerHTML = `<pre id="random-animation"></pre>`;
    const randomAnimationElement = document.getElementById('random-animation');
    animateAsciiArt(randomAnimationElement, animations[randomName]);
}

// Add event listeners
document.getElementById('add-animation-form').addEventListener('submit', (e) => {
    e.preventDefault();
    addNewAnimation();
});

document.getElementById('random-animation-button').addEventListener('click', displayRandomAnimation);
