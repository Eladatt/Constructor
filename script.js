document.addEventListener('DOMContentLoaded', function() {

   // Dark/Light Mode Toggle
   const toggleModeButton = document.getElementById('toggle-mode');
   toggleModeButton.addEventListener('click', function() {
       document.body.classList.toggle('dark-mode');
   });

   // Message Bar Functionality
   const messageInput = document.getElementById('message-input');
   const sendMessageButton = document.getElementById('send-message');
   const colorButtons = document.querySelectorAll('.color-btn');
   let currentColor = '#000000'; // Default black color

   // Set Message Input Color
   colorButtons.forEach(button => {
       button.addEventListener('click', function() {
           currentColor = this.style.backgroundColor; // Set current color to selected button's color
           messageInput.style.color = currentColor; // Change input text color
       });
   });

   // Send Message Action
   sendMessageButton.addEventListener('click', function() {
       const message = messageInput.value.trim();
       if (message !== '') {
           console.log(`Message Sent! Text Color is ${currentColor}: ${message}`);
           messageInput.value = ''; // Clear input after sending
       }
   });

   // Add Another Guide Functionality
   const addAnotherGuideButton = document.getElementById('add-another-guide');
   addAnotherGuideButton.addEventListener('click', function() {
       alert("Add another guide functionality coming soon!");
       // You can add more logic here to dynamically add fields to add multiple guides at once.
   });
});
