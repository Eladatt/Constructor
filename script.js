document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
    });

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Daily Fun Fact
    const funFacts = [
        "LEGO is an abbreviation of two Danish words: 'leg godt', meaning 'play well'.",
        "There are about 400 billion LEGO bricks in the world.",
        "In 2012, a LEGO brick was created that was 3.5 meters high and 8 meters wide.",
        "The LEGO Group is the world's largest tire manufacturer, producing about 306 million tiny tires a year.",
        "If you built a column of about 40,000,000,000 LEGO bricks, it would reach the moon."
    ];

    function displayDailyFunFact() {
        const funFactElement = document.getElementById('funFact');
        if (funFactElement) {
            const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
            funFactElement.textContent = randomFact;
        }
    }

    displayDailyFunFact();
});
