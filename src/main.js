let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    physics: {
      default: 'arcade',
    },
      
    scene: [Menu, Play, Twoplayer, player2on]
  }
  
let game = new Phaser.Game(config);
// Set the UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
// reserve keyboard 
let keyA, keyD, keySPACE, keyUP;
let keyF, keyR, keyLEFT, keyRIGHT;

this.menuistrue = true;


/* Chosen Mods
* Small Ship that moves "Fast" and gives 1000 points when hit (20)
* Implement a simultaneous two-player mode (30)
* Implemented time showing on screen (10)
* Implemented mouse controls (20)
*
*
*
*/