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

function animateAsciiArt(elementId, animationName) {
    const element = document.getElementById(elementId);
    let frameIndex = 0;
    const frames = animationFrames[animationName];
    
    function updateFrame() {
        element.textContent = frames[frameIndex];
        frameIndex = (frameIndex + 1) % frames.length;
    }

    setInterval(updateFrame, 200);
}
  
  
  
function animateAsciiArt(elementId, animationName) {
  const element = document.getElementById(elementId);
  let frameIndex = 0;
  
  setInterval(() => {
    element.textContent = animations[animationName][frameIndex];
    frameIndex = (frameIndex + 1) % animations[animationName].length;
  }, 200); // Change frame every 200ms
}

// Usage example:
// animateAsciiArt('animation-container', 'winkingCat');
