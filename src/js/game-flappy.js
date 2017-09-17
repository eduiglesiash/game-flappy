var game = new Phaser.Game(370,550, Phaser.AUTO, 'game__content');
var bckGame;
var btnInit;
var flappy;

var mainStatus = {
	preload: function(){
		// load resources for project
    // asignamos un color de fondo
		// game.stage.backgroundColor = '#330';
    // load bck image
    game.load.image('bck', 'assets/bg.jpeg');
    game.load.image('bird', 'assets/pajaro1.png');
    game.load.image('btnInit', 'assets/btn.png');
    // Para cargar un sprite con varias imagenes tenemos que usar spritesheep
    game.load.spritesheet('birds', 'assets/pajaro.png', 43,30)
	},

	create: function(){
		// Show in browser all resources load into the project
    bckGame = game.add.tileSprite(0,0,370,550, 'bck');
    // Create Bird
    
    // Spritn es una imagen.
    // flappy = game.add.sprite(game.width/2, game.height/2,'bird');
    flappy = game.add.sprite(100,100, 'birds');
    flappy.frame = 2;
    flappy.animations.add('fly', [1,0,2,0], 5, true);
    //btnInit = game.add.sprite(game.width/2,game.height/2,'btnInit');
    
    // ABCHOR POINT: punto de apoyo de una imagen.
    //btnInit.anchor.setTo(0.5);
    flappy.anchor.setTo(0.5);
    
    // Scalamos las imagenes
    // Unicamenete tenemoos que poner el valor negativo para invertir la dirección de la imagen.
    flappy.scale.setTo(1,1);
    // Rotación de la imaen.
    
    
	},

	update: function(){
		// Animate Game
    // move to bck.
    bckGame.tilePosition.x -=1;
    flappy.animations.play('fly');
    // Con este metodo hacemos rotar a flappy.
    // flappy.angle += 1;
	}
};

// ADD MAIN STATUS
game.state.add('main', mainStatus);

// START GAME
game.state.start('main');