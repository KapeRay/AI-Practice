class Fastboi extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); // add to existing scene
        scene.physics.add.existing(this);
        this.points = pointValue; // store pointValue
        this.moveSpeed = game.settings.superSpeed;       // pixels per frame
    }

    update() {
        // move spaceship left
        //this.x -= this.moveSpeed;
        // wrap around from left edge to right edge
        if(this.x <= 10 - this.width) {
            this.x = game.config.width;
        }
    }
    reset() {
        this.x = game.config.width;
    }
}