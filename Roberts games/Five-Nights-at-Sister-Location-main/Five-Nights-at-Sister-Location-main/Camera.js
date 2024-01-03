class CameraScene extends Phaser.Scene {
    constructor() {
		super({ key: 'CameraScene' })
	}
    preload(){
        
    }
    create(){
        gameState.cameraScene = this;
        gameState.cameraScreen = this.add.sprite(0,0,'blackBackground').setOrigin(0,0);
        gameState.static = this.add.sprite(0,0,'cameraStatic').setOrigin(0,0);
        gameState.static.anims.play('cameraStaticAction','true');
        this.add.image(0,0,'cameraBackground').setOrigin(0,0);
        var cam01 = this.add.sprite(750,580,'CAM01Button').setOrigin(0,0).setInteractive();
        cam01.on('pointerdown', function(pointer){
            gameState.camPosition = 1;
            gameState.update(gameState.cameraScene);
        });
        var cam02 = this.add.sprite(1020,580,'CAM02Button').setOrigin(0,0).setInteractive();
        cam02.on('pointerdown', function(pointer){
            gameState.camPosition = 2;
            gameState.update(gameState.cameraScene);
        });
        var cam03 = this.add.sprite(680,500,'CAM03Button').setOrigin(0,0).setInteractive();
        cam03.on('pointerdown', function(pointer){
            gameState.camPosition = 3;
            gameState.update(gameState.cameraScene);
        });
        var cam04 = this.add.sprite(1100,500,'CAM04Button').setOrigin(0,0).setInteractive();
        cam04.on('pointerdown', function(pointer){
            gameState.camPosition = 4;
            gameState.update(gameState.cameraScene);
        });
        var cam05 = this.add.sprite(880,440,'CAM05Button').setOrigin(0,0).setInteractive();
        cam05.on('pointerdown', function(pointer){
            gameState.camPosition = 5;
            gameState.update(gameState.cameraScene);
        });
        var cam06 = this.add.sprite(750,290,'CAM06Button').setOrigin(0,0).setInteractive();
        cam06.on('pointerdown', function(pointer){
            gameState.camPosition = 6;
            gameState.update(gameState.cameraScene);
        });
        var cam07 = this.add.sprite(1020,290,'CAM07Button').setOrigin(0,0).setInteractive();
        cam07.on('pointerdown', function(pointer){
            gameState.camPosition = 7;
            gameState.update(gameState.cameraScene);
        });
        
        var cameraButton = this.add.sprite(400,650,'cameraButton').setOrigin(0,0).setDepth(3).setInteractive();
        cameraButton.on('pointerover', function(pointer){
            if(gameState.inputTimer>30 && gameState.locked == false){
                gameState.cameraFlipSound.play();
                gameState.inputTimer = 0;
                if(gameState.cameraMoniterStatus == true){
                    gameState.cameraStatic.stop();
                    gameState.cameraMoniter.anims.play('cameraMoniterClose','true');
                    gameState.scene.scene.pause('CameraScene');
                    gameState.scene.scene.bringToTop('ArenaScene');
                    gameState.scene.scene.bringToTop('UIScene');
                    gameState.cameraMoniterStatus = false;
                    gameState.usage -= 1;
                }
            }
        });
    }
    update(){
        
    }
}
