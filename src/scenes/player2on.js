
class player2on extends Phaser.Scene {
    constructor() {
        super("multiplayer");
    }
    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }
    create() {
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(game.config.width/2, game.config.height/2, 'To return to one player', menuConfig).setOrigin(0.5, 5);
        this.add.text(game.config.width/2, game.config.height/2, 'Press the Up arrow', menuConfig).setOrigin(0.5, 4);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Player 1 controls:', menuConfig).setOrigin(0.5,3.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'A & D to move and F to fire', menuConfig).setOrigin(0.5,2.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Player 2 controls:', menuConfig).setOrigin(0.5,1.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, '<- & -> to move and Space bar to fire', menuConfig).setOrigin(0.5,0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press <- for Novice or -> for Expert', menuConfig).setOrigin(0.5, -1);
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            superSpeed: 9,
            gameTimer: 60000    
          }
          let multi = true;
          this.sound.play('sfx_select');
          this.scene.start('playScene2');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            superSpeed: 10,
            gameTimer: 45000    
          }
          let multi = true;
          this.sound.play('sfx_select');
          this.scene.start('playScene2');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyUP)) {
          // multiplayer deactivate
          let multi = false;
          this.sound.play('sfx_select');
          this.scene.start('menuScene');    
        }
      }
      
}