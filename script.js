// ASCII art for each creature
const creatureArt = {
    dragon: `\||/
                |  @___oo
      /\\  /\\   / (__,,,,|
     ) /^\\) ^\\/ _)
     )   /^\\/ _)
     )   _ /  / _)
 /\\  )/\\/ ||  | )_)
<  >      |(,,) )__)
 ||      /    \\)___)\\
 | \\____(      )___) )___
  \\______(_______;;; __;;;`,
    unicorn: `                            ___________ _
  \\/                    __/   .::::.-'-(/-/)
                     _/:  .::::.-' .-'\\/\\_\`*******          __ (_))
        \\/          /:  .::::./ -._-.  d\\|               (_))_(__))
                     /: (""""/    '.  (__/||           (_))__(_))--(__))
                      \\::).-'  -._  \\/ \\\\/\\|
              __ _ .-'\`)/  '-'. . '. |  (i_O
          .-'      \\       -'      '\\|
     _ _./      .-'|       '.  (    \\\\                         % % %
  .-'   :      '_  \\         '-'\\  /|/      @ @ @             % % % %
 /      )\\_      '- )_________.-|_/^\\      @ @ @@@           % %\\/% %
 (   .-'   )-._-:  /        \\(/\\'-._ \`.     @|@@@@@            ..|........
  (   )  _//_/|:  /          \`\\()   \`\\_\\     |/_@@             )'-._.-._.-
   ( (   \\()^_/)_/             )/      \\\\    /                /   /
    )  _.-\\\\.\\(_)__._.-'-.-'-.//_.-'-.-)\\-'/._              /
.-.-.-'   _o\\ \\\\\\     '::'   (o_ '-.-' |__\\'-.-;~ ~ ~ ~ ~ ~~/   /\\
          \\ /  \\\\\\__          )_\\    .:::::::.-'\\          '- - -|
     :::''':::::^)__\\:::::::::::::::::'''''''-.  \\                '- - - 
    :::::::  '''''''''''   ''''''''''''':::. -'\\  \\     C. SWANSIGER`,
    phoenix: `         __/\\__
    ____/      \\____
   /( (  )\\^^/( (  )\\
  ((  )  ) )( (  )  ))
   \\,\\,,\\/  \\,/,,\\,/
    -------  -------
      (o o)    (o o)
   ooO--(_)--Ooo-(_)--Ooo-`,
    mermaid: `           _
         .' '.
        /'-...-)
       /    /__\\
      /     \\  /
    .'   ಠ ಠ) /
   / / ,--'-)
  | /\`  (    \\
  o       \`.__\\
   \`._________/
      |  | |
   __/   | |
  /  \\   | |
 //..\   | |
//,,.\   | |
\\]\`"\`/   | |
 \\__/    | |
  \` \\    | |
     )   | |
    /    | |
   /     | |
  /      | |
 (       | |
 |       | |
 |       | |
 |       | |
 |       | |`,
    griffin: `           /\\
          /  \\
         /\\/\\/\\
        /  /\\  \\
   /\\  /  /  \\  \\
  /  \\/  /    \\  \\
 /    \\ /     /\\  \\
/\\/\\   /     /  \\  \\
/  /\\_/\\    /    \\  \\
\\ /    \\/\\ /     /\\  \\
 \\      \\ /     /  \\  \\
  \\      \\     /    \\  \\
   \\     /\\   /      \\  \\
    \\   /  \\ /       /\\  \\
     \\ /    \\       /  \\  \\
      \\     /\\     /    \\  \\
       \\   /  \\   /     /\\  \\
        \\ /    \\ /     /  \\  \\
         \\     /\\     /    \\  \\
          \\   /  \\   /     /\\  \\
           \\ /    \\ /     /  \\  \\
            \\     /\\     /    \\  \\
             \\   /  \\   /      \\  \\
              \\ /    \\ /        \\  \\
               \\      \\          \\  \\
                \\      \\          \\  \\
                 \\      \\          \\  \\
                  \\      \\          \\  \\
                   \\      \\          \\  \\
                    \\      \\          \\  \\
                     \\______\\__________\\__\\`,
    brain: `\\||/
                |  @___oo
      /\\  /\\   / (__,,,,|
     ) /^\\) ^\\/ _)
     )   /^\\/ _)
     )   _ /  / _)
 /\\  )/\\/ ||  | )_)
<  >      |(,,) )__)
 ||      /    \\)___)\\
 | \\____(      )___) )___
  \\______(_______;;; __;;;`
};

// Function to display ASCII art
function displayAsciiArt(creature) {
    const artElement = document.getElementById(`${creature}-art`);
    artElement.textContent = creatureArt[creature];
}

// Function to show selected creature
function showCreature(creature) {
    const creatures = document.getElementsByClassName('creature');
    for (let c of creatures) {
        c.style.display = 'none';
    }
    document.getElementById(creature).style.display = 'block';
    displayAsciiArt(creature);
}

// Function to handle language selection
function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.body.dir = lang === 'he' ? 'rtl' : 'ltr';
    updateTranslations(lang);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Set up navigation
    const navButtons = document.querySelectorAll('#creature-nav button');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            showCreature(this.dataset.creature);
        });
    });

    // Set up language selection
    const langToggle = document.getElementById('lang-toggle');
    const langOptions = document.getElementById('lang-options');
    langToggle.addEventListener('click', function() {
        langOptions.classList.toggle('hidden');
    });

    const langButtons = document.querySelectorAll('#lang-options button');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            changeLanguage(this.dataset.lang);
            langOptions.classList.add('hidden');
        });
    });

    // Show dragon by default
    showCreature('dragon');
});

// This function should be defined in translations.js
function updateTranslations(lang) {
    // Implementation depends on your translations structure
    // Update text content of elements based on selected language
}
