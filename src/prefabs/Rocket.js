// Rocket prefab
class Rocket extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
  
      // add object to existing scene
      scene.add.existing(this);
      this.isFiring = false;
      this.moveSpeed = 2;
      this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
      
    }

    update() {
      // Left/Right Movement 
      game.input.mousePointer.x;
      //game.input.mousePointer.y;

      //if(!this.isFiring) {
        //if(game.input.activePointer.leftButtonDown() && this.x >= borderUISize + this.width) {
        this.x = game.input.mousePointer.x;
        //}
        //else if(game.input.activePointer.rightButtonDown() && this.x <= game.config.width - borderUISize - this.width) {
        //  this.x += this.moveSpeed;
        //}
    
      //}
      
      // fire button
      if(game.input.activePointer.leftButtonDown() && !this.isFiring) {
        this.isFiring = true;
        this.sfxRocket.play();  // play sfx
      }
      //if fired, move up
      if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
        this.y -= this.moveSpeed;
      }
      //reset on miss
      if(this.y <= borderUISize * 3 + borderPadding) {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
      }
    }

    // reset rocket to "ground"
    reset() {
      this.isFiring = false;
      this.y = game.config.height - borderUISize - borderPadding;
    }
  }
  