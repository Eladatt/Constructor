document.addEventListener('DOMContentLoaded', function () {

  // Mode switch functionality
  const modeSwitch = document.getElementById('mode-switch');
  
  modeSwitch.addEventListener('change', function () {
      if (this.checked) {
          document.body.classList.add('light-mode');
          document.body.classList.remove('dark-mode');
      } else {
          document.body.classList.add('dark-mode');
          document.body.classList.remove('light-mode');
      }
  });

  // Vibrant color picker functionality
  const messageInput = document.querySelector('.message-bar input');
  
  const colorButtons = document.querySelectorAll('.color-picker .color');
  
  let currentColor = '#333'; // Default color
  
  colorButtons.forEach(button => {
      button.addEventListener('click', function () {
          currentColor = this.style.backgroundColor;
          messageInput.style.color = currentColor; // Change input text color
      });
  });

});
