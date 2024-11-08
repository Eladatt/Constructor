# LEGO HubLab 🐕‍🦺

## Overview
LEGO HubLab is an interactive, multilingual scientific lab website designed to provide educational content on anesthesia, lab techniques, and statistics. The site features a LEGO-inspired design with ASCII art animations and interactive elements.

## Features
- Multilingual support (English, Hebrew, Arabic, Russian)
- Responsive design for desktop, tablet, and mobile devices
- Interactive sidebar navigation with dropdown menus
- ASCII art animations
- Daily fun fact feature
- Celebration station for acknowledging team achievements
- Password-protected maintenance page

## Setup Instructions
1. Clone the repository
2. Open `index.html` in a web browser

## File Structure
- `index.html`: Main HTML file
- `css/style.css`: Main stylesheet
- `js/script.js`: Main JavaScript file
- `js/animations.js`: ASCII art animations
- `content/`: Directory containing HTML files for each page in different languages
- `images/`: Directory for images, including logo and favicon

## Adding New Content
To add a new guide or page:
1. Create HTML files for each language in the `content/` directory
2. Add a new menu item in `index.html`
3. Update the language files if necessary

## Accessibility Features
- Proper semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support

## Dependencies
- No external libraries are used. The site is built with vanilla HTML, CSS, and JavaScript.

## Language Switching Mechanism
The site uses a language selector that dynamically loads content based on the selected language. RTL support is implemented for Hebrew and Arabic.

## Maintenance Page
Access the maintenance page at `#maintenance`. Use the password "admin123" for demonstration purposes.
