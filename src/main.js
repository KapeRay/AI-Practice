let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play]
  }
  
let game = new Phaser.Game(config);
// Set the UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

/* Chosen Mods
* Small Ship that moves "Fast" and gives 1000 points when hit 20
*
*
*
*
*
*
*/