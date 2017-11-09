var game = new Phaser.Game(370,550, Phaser.AUTO, 'game__content');
var bckGame;
var btnInit;
var flappy;
var cursores;
var person;


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
    game.load.spritesheet('birds', 'assets/pajaro.png', 43,30);
    game.load.spritesheet('person', 'assets/persona.png', 64,64);
	},

	create: function(){
		// Show in browser all resources load into the project
    bckGame = game.add.tileSprite(0,0,370,550, 'bck');
    // Create Bird
    
    // Spritn es una imagen.
    // flappy = game.add.sprite(game.width/2, game.height/2,'bird');
    flappy = game.add.sprite(100,100, 'birds');
    flappy.frame = 2;
    flappy.animations.add('fly', [1,0,2], 5, true);
    //btnInit = game.add.sprite(game.width/2,game.height/2,'btnInit');
    
    // ANCHOR POINT: punto de apoyo de una imagen.
    //btnInit.anchor.setTo(0.5);
    flappy.anchor.setTo(0.5);
    
    // Scalamos las imagenes
    // Unicamenete tenemoos que poner el valor negativo para invertir la dirección de la imagen.
    flappy.scale.setTo(1,1);
    // Rotación de la imaen.
    
    // Capturamos las pulsaciones de teclado
    // keyRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    cursores = game.input.keyboard.createCursorKeys();

    // Este metodo nos prepara ofrece herramientas básicas para nuestro juego
    // Gravedad, delimitaciones del canvas, etc. 

    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Le pasamos como parámetro a flappy
    game.physics.arcade.enable(flappy);
    flappy.body.collideWorldBounds = true;
    
	},

	update: function(){
		// Animate Game
    // move to bck.
    bckGame.tilePosition.x -=1;
    flappy.animations.play('fly');
    // Con este metodo hacemos rotar a flappy.
    // flappy.angle += 1;

    // isDown: Activa el movimiento cuando la tecla está presionada. 
    // isUp: Ejecutar el movimiento mientras las tecla no este presionada. 
    if(cursores.right.isDown){
      // Inclinacion 90
      // flappy.angle = 90;
      flappy.position.x += 1;
    }
    if(cursores.left.isDown){
      flappy.position.x -= 1;
    }
    if(cursores.up.isDown){
      flappy.position.y -= 1;
    }
    if(cursores.down.isDown){
      flappy.position.y += 1;
    }
	}
};

// ADD MAIN STATUS
game.state.add('main', mainStatus);

// START GAME
game.state.start('main');