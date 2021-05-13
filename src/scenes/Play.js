class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {
        // load images/tile sprites
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('fastboi', './assets/fast_boi.png');
        // load spritesheet
        this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});

      }
        
    create() {
        // place tile sprite

        //adding player square
        this.player = this.add.rectangle(game.config.width/2, game.config.height - borderUISize - borderPadding, 20, 20, 0xFFFF00).setOrigin(0,0);
        this.physics.add.existing(this.player);
        this.player.body.collideWorldBounds = true;
        // adding blockades
        this.squareGroup = this.physics.add.group();
        this.squareGroup.runChildUpdate = true;
        this.blockingSquare1 = this.add.rectangle(150, 100, 100, 100, 0x6666ff).setOrigin(0,0);
        this.blockingSquare2 = this.add.rectangle(400, 250, 100, 100, 0x6666ff).setOrigin(0,0);
        this.blockingSquare3 = this.add.rectangle(100, 300, 100, 100, 0x6666ff).setOrigin(0,0);
        this.blockingSquare4 = this.add.rectangle(400, 50, 100, 100, 0x6666ff).setOrigin(0,0);

        
        this.squareGroup.add(this.blockingSquare1);
        this.squareGroup.add(this.blockingSquare2);
        this.squareGroup.add(this.blockingSquare3);
        this.squareGroup.add(this.blockingSquare4);
        this.physics.add.existing(this.squareGroup);

        this.squareGroup.body.immovable = true;
        
        //this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0);
        // add spaceships (x3)
         this.ship01 = new Spaceship(this, game.config.width + borderUISize*8, borderUISize*8, 'spaceship', 0, 30).setOrigin(0, 0);
         this.ship02 = new Spaceship(this, game.config.width + borderUISize*3, borderUISize*4 + borderPadding*4, 'spaceship', 0, 20).setOrigin(0,0);
         this.ship03 = new Spaceship(this, game.config.width, borderUISize*6 + borderPadding*4, 'spaceship', 0, 10).setOrigin(0,0);
        // added small fast spaceship
        this.crazyShip = this.add.rectangle(game.config.width / 2, game.config.height / 2, 20, 20, 0xFFFFFF).setOrigin(0, 0);
        this.physics.add.existing(this.crazyShip);

        this.crazyShip.body.collideWorldBounds = true;

        this.physics.add.collider(this.squareGroup, this.crazyShip);
        this.physics.add.collider(this.player, this.squareGroup, (p,e) => {
            console.log('Player collided with enemy: ', e);
        });
        
        //this.physics.add.collider(this.squareGroup, this.player);        
        
        
        // define 
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        
        //this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig);
        //this.highScore = 0;
        //this.highestScore = this.add.text(borderUISize + borderPadding + 225, borderUISize + borderPadding*2, this.p1Score, scoreConfig);
        // GAME OVER flag
        this.gameOver = false;
        // 60-second play clock
        //scoreConfig.fixedWidth = 0;
        //this.timeCounter = this.game.settings.gameTimer;
        //this.timer = this.add.text(borderUISize + borderPadding + 525, borderUISize + borderPadding*2, this.timeCounter, scoreConfig);
        /*this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or ← for Menu', scoreConfig).setOrigin(0.5);

                        
            this.gameOver = true;
        }, null, this);
        */
        
        //this.timeRemain = this.game.settings.gameTimer;
        
    }
    update(time, delta) {
        // check key input for restart
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart();
            //this.timeCounter.destroy();
        }
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start("menuScene");
            //this.timeCounter.reset();
        }
        if(this.gameOver){
            // if(this.highScore < this.p1Score){
            //     this.highScore = this. p1Score;
            //     this.highestScore.text = this.highScore;
            //     game.scene.score = parseInt(localStorage.getItem('totalScore')) || this.highScore;

            // }
        }
        //this.starfield.tilePositionX -= 2;
        if(!this.gameOver){
            if(keyLEFT.isDown){
                this.player.x -= 1;
            }
            if(keyRIGHT.isDown){
                this.player.x += 1;
                //this.player.body.deltaX(1);
            }
            if(keyUP.isDown){
                this.player.y -= 1;
            }
            if(keyDOWN.isDown){
                this.player.y += 1;
            }
            //this.p1Rocket.update();
            //this.ship01.update();               // update spaceships (x3)
            //this.ship02.update();
            //this.ship03.update();
            //this.crazyShip.update();
            //this.timeCounter = this.clock.getOverallRemainingSeconds();
            //this.timeCounter = Math.floor(this.timeCounter);
            //this.timer.text = this.timeCounter;   
            // this.timeRemain -= delta;
            // this.timeCounter = time;
            // this.timeCounter = Math.floor(this.timeRemain/1000) + 1;
            // this.timer.text = this.timeCounter;
            if(!moving) {
                moving = true;
                let changeDirection = Phaser.Math.Between(1, 4);
                if(changeDirection <= 1) {
                        this.crazyShip.body.setVelocityX(50);
                        //this.crazyShip.x -= 5;
                } else if(changeDirection <= 2) {
                        this.crazyShip.body.setVelocityX(-50);
                        //this.crazyShip.x += 5;
                } else if (changeDirection <= 3) {
                        this.crazyShip.body.setVelocityY(50);
                        //this.crazyShip.y -= 5;
                } else if (changeDirection <= 4) {
                        this.crazyShip.body.setVelocityY(-50);
                        //this.crazyShip.x -= 5;
                }

                this.crazyShip.body.setVelocityX(Phaser.Math.Between(-50, 50));
                this.crazyShip.body.setVelocityY(Phaser.Math.Between(-50, 50));

                this.clock = this.time.delayedCall(500, () => {
                    moving = false;
                }, null, this);
            }
            //this.checkForGameOver();
        }

        //this.physics.arcade.collide(this.player, this.squareGroup);

        if(this.physics.collide(this.squareGroup, this.player)) {
            console.log("we are colliding");
            this.player.body.bounce.set(1);
            //this.player.body.immovable = true;
        }
        
        
        
        // check collisions
        // if(this.checkCollision(this.p1Rocket, this.ship03)) {
        //     this.p1Rocket.reset();
        //     this.shipExplode(this.ship03);
        //     this.timeRemain += 1000;
        //     //console.log("we got a hit");
        // }
        // if (this.checkCollision(this.p1Rocket, this.ship02)) {
        //     this.p1Rocket.reset();
        //     this.shipExplode(this.ship02);
        //     this.timeRemain += 1000;
        //     //console.log("we got a hit");
        // }
        // if (this.checkCollision(this.p1Rocket, this.ship01)) {
        //     this.p1Rocket.reset();
        //     this.shipExplode(this.ship01);
        //     this.timeRemain += 1000;
        //     //console.log("we got a hit");
        // }
        // if (this.checkCollision(this.p1Rocket, this.crazyShip)) {
        //     this.p1Rocket.reset();
        //     this.shipExplode(this.crazyShip);
        //     this.timeRemain += 5000;
        //     //console.log("we got a hit");
        // }  
  
      
    }
    checkCollision(rocket, ship) {
        // simple AABB checking
        if (rocket.x < ship.x + ship.width && 
            rocket.x + rocket.width > ship.x && 
            rocket.y < ship.y + ship.height &&
            rocket.height + rocket.y > ship. y) {
                return true;
        } else {
            return false;
        }
    }
    checkSmallCollision(rocket, ship) {
        // simple AABB checking
        if (rocket.x < ship.x + ship.width && 
            rocket.x + rocket.width < ship.x && 
            rocket.y < ship.y + ship.height &&
            rocket.height + rocket.y > ship. y) {
                return true;
        } else {
            return false;
        }
    }
    shipExplode(ship) {
        // temporarily hide ship
        ship.alpha = 0;
        // create explosion sprite at ship's position
        let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
        boom.anims.play('explode');             // play explode animation
        boom.on('animationcomplete', () => {    // callback after anim completes
          ship.reset();                         // reset ship position
          ship.alpha = 1;                       // make ship visible again
          boom.destroy();                       // remove explosion sprite
        });
        // score add and repaint
        this.p1Score += ship.points;
        this.scoreLeft.text = this.p1Score;
        this.sound.play('sfx_explosion');       
    }
    checkForGameOver(){
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 570
        }
        if(this.timeRemain <= 0){
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or ← for Menu', scoreConfig).setOrigin(0.5);
            this.gameOver = true;
        }
    }
      
    
    
}