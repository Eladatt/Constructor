const creatureFrames = {
    dragon: ["Dragon Frame 1", "Dragon Frame 2", "Dragon Frame 3", "Dragon Frame 4", "Dragon Frame 5"],
    unicorn: ["Unicorn Frame 1", "Unicorn Frame 2", "Unicorn Frame 3", "Unicorn Frame 4", "Unicorn Frame 5"],
    phoenix: ["Phoenix Frame 1", "Phoenix Frame 2", "Phoenix Frame 3", "Phoenix Frame 4", "Phoenix Frame 5"],
    mermaid: ["Mermaid Frame 1", "Mermaid Frame 2", "Mermaid Frame 3", "Mermaid Frame 4", "Mermaid Frame 5"],
    griffin: ["Griffin Frame 1", "Griffin Frame 2", "Griffin Frame 3", "Griffin Frame 4", "Griffin Frame 5"],
    brain: ["Brain Frame 1", "Brain Frame 2", "Brain Frame 3", "Brain Frame 4", "Brain Frame 5"]
};
const animationFrames = {
    winkingCat: [
    `
 /\\___/\\   
(  o o  ) 
( =^.^= ) 
(       )
 (_____)  
`,
    `
 /\\___/\\   
(  - o  ) 
( =^.^= ) 
(       )
 (_____)  
`,
    `
 /\\___/\\   
(  o o  ) 
( =^.^= ) 
(       )
 (_____)  
`,
    `
 /\\___/\\   
(  - o  ) 
( =^.^= ) 
(       )
 (_____)  
`,
    `
 /\\___/\\   
(  o o  ) 
( =^.^= ) 
(       )
 (_____)  
`
  ],
    jumpingRabbit: [
    `
  (\\ /)   
 ( . .)   
 c(")(")  
          
          
`,
    `
  (\\ /)   
 ( . .)   
 c(")(")  
    ^     
          
`,
    `
  (\\ /)   
 ( ^ ^)   
 c(")(")  
   ^ ^    
          
`,
    `
  (\\ /)   
 ( . .)   
 c(")(")  
    ^     
          
`,
    `
  (\\ /)   
 ( . .)   
 c(")(")  
          
          
`
  ],
  
  wavingBear: [
    `
 ʕ •ᴥ•ʔ  
 /    \\  
         
         
         
`,
    `
 ʕ •ᴥ•ʔ  
 /   >\\  
         
         
         
`,
    `
 ʕ •ᴥ•ʔ  
 /  |>\\  
         
         
         
`,
    `
 ʕ •ᴥ•ʔ  
 /   >\\  
         
         
         
`,
    `
 ʕ •ᴥ•ʔ  
 /    \\  
         
         
         
`
  ],
  
  growingFlower: [
    `
          
          
          
     _    
    (_)   
`,
    `
          
          
     |    
     |    
    (_)   
`,
    `
          
     _    
    (_)   
     |    
    (_)   
`,
    `
     _    
    (_)   
     |    
     |    
    (_)   
`,
    `
     _    
    (_)   
   \\|//  
     |    
    (_)   
`
  ],
  
  swimmingFish: [
    `
><(((º>   
          
          
          
          
`,
    `
 ><(((º>  
          
          
          
          
`,
    `
  ><(((º> 
          
          
          
          
`,
    `
   ><(((º>
          
          
          
          
`,
    `
    ><(((º
          
          
          
          
`
  ],
  
  spinningPinwheel: [
    `
    *    
  * * *  
*   +   *
  * * *  
    *    
`,
    `
  *   *  
   * *   
*   +   *
   * *   
  *   *  
`,
    `
 *     * 
*   *   *
    +    
*   *   *
 *     * 
`,
    `
  *   *  
   * *   
*   +   *
   * *   
  *   *  
`,
    `
    *    
  * * *  
*   +   *
  * * *  
    *    
`
  ],
  
  beatingHeart: [
    `
  /\\/\\  
 ( .. ) 
  \\\\/  
   \\/   
`,
    `
  /\\/\\  
 (  .  ) 
  \\  /  
   \\/   
`,
    `
  /\\/\\  
 (    ) 
  \\  /  
   \\/   
`,
    `
  /\\/\\  
 (  .  ) 
  \\  /  
   \\/   
`,
    `
  /\\/\\  
 ( .. ) 
  \\\\/  
   \\/   
`
  ],
  
  rainingCloud: [
    `
   .--.   
 .(    ). 
(   __   )
 \\ (  ) / 
  '----'  
`,
    `
   .--.   
 .(    ). 
(   __   )
 \\ (  ) / 
  '----'  
 ' ' ' '  
`,
    `
   .--.   
 .(    ). 
(   __   )
 \\ (  ) / 
  '----'  
   ' ' '  
`,
    `
   .--.   
 .(    ). 
(   __   )
 \\ (  ) / 
  '----'  
 ' ' ' '  
`,
    `
   .--.   
 .(    ). 
(   __   )
 \\ (  ) / 
  '----'  
`
  ],
  
  blinkingRobot: [
    `
 _____
|[O O]|
|-----|
|_____|
`,
    `
 _____
|[- -]|
|-----|
|_____|
`,
    `
 _____
|[O O]|
|-----|
|_____|
`,
    `
 _____
|[- -]|
|-----|
|_____|
`,
    `
 _____
|[O O]|
|-----|
|_____|
`
  ],
  
  tickingClock: [
    `
 _____
|     |
|  |  |
|_____|
`,
    `
 _____
|     |
|  /  |
|_____|
`,
    `
 _____
|     |
|-----|
|_____|
`,
    `
 _____
|     |
|  \\  |
|_____|
`,
    `
 _____
|     |
|  |  |
|_____|
`
  ],
  
  travelingSnake: [
    `
    _____
---'   )
          
          
          
`,
    `
     _____
----'   )~
          
          
          
`,
    `
      ____
-----'  )
          
          
          
`,
    `
       ___
------' )~
          
          
          
`,
    `
        __
-------')
          
          
          
`
  ]
      spin: [
    
    
  \
          
          
          
`,
    
     
   |
          
          
          
`,
    
      
    /
          
          
          
`,
    
    ~
        '
          
          
          
 ,
    
     
    -   
          
          
          
`
  ]
};

    // Add more animations here
};
const smallAnimationFrames = {
    hoppingBunny: ["Bunny Frame 1", "Bunny Frame 2", "Bunny Frame 3", "Bunny Frame 4", "Bunny Frame 5"],
    wavingBear: ["Bear Frame 1", "Bear Frame 2", "Bear Frame 3", "Bear Frame 4", "Bear Frame 5"],
    bloomingFlower: ["Flower Frame 1", "Flower Frame 2", "Flower Frame 3", "Flower Frame 4", "Flower Frame 5"],
    blinkingCat: ["Cat Frame 1", "Cat Frame 2", "Cat Frame 3", "Cat Frame 4", "Cat Frame 5"]
};

function animateAsciiArt(elementId, frames) {
    let frameIndex = 0;
    const element = document.getElementById(elementId);
    setInterval(() => {
        element.textContent = frames[frameIndex];
        frameIndex = (frameIndex + 1) % frames.length;
    }, 200);
}

function showCreature(creatureId) {
    const creatures = document.getElementsByClassName('creature');
    for (let creature of creatures) {
        creature.classList.remove('active');
    }
    document.getElementById(creatureId).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize creature animations
    for (let creature in creatureFrames) {
        animateAsciiArt(`${creature}-art`, creatureFrames[creature]);
    }

    // Initialize small animations
    for (let animation in smallAnimationFrames) {
        animateAsciiArt(animation, smallAnimationFrames[animation]);
    }

    // Set up navigation
    const navButtons = document.querySelectorAll('#creature-nav button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            showCreature(button.dataset.creature);
        });
    });

    // Show dragon by default
    showCreature('dragon');

    // Set up language selector
    const langToggle = document.getElementById('lang-toggle');
    const langOptions = document.getElementById('lang-options');
    langToggle.addEventListener('click', () => {
        langOptions.classList.toggle('hidden');
    });

    const langButtons = document.querySelectorAll('#lang-options button');
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            changeLanguage(button.dataset.lang);
            langOptions.classList.add('hidden');
        });
    });
});

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.body.setAttribute('dir', lang === 'ar' || lang === 'he' ? 'rtl' : 'ltr');
    updateTranslations(lang);
}
