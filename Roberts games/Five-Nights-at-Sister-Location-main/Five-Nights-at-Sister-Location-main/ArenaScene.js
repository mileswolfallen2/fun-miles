class UIScene extends Phaser.Scene {
    constructor() {
		super({ key: 'UIScene' })
	}
    preload(){
        
    }
    create(){
        gameState.UI = this;
        gameState.usageText = this.add.text(20, 5, `USAGE`, {
            fill: '#FFFFFF', 
            fontSize: `20px`,
            fontFamily: 'LiberationSansNarrow',
            strokeThickness: 1,
        }).setInteractive().setDepth(3);
        gameState.powerText = this.add.text(20, 50, `POWER\n${Math.floor(gameState.power)}%`, {
            fill: '#FFFFFF', 
            fontSize: `20px`,
            fontFamily: 'LiberationSansNarrow',
            strokeThickness: 1,
        }).setInteractive().setDepth(3);
        var usage1 = this.add.image(18,27,'usageBar').setOrigin(0,0);
        var usage2 = this.add.image(36,27,'usageBar').setOrigin(0,0);
        var usage3 = this.add.image(54,27,'usageBar').setOrigin(0,0);
        var usage4 = this.add.image(72,27,'usageBar').setOrigin(0,0);
        this.time.addEvent({
            delay: 1,
            callback: ()=>{
                if(gameState.usage >1){
                    usage2.visible = true;
                }else{
                    usage2.visible = false;
                }
                if(gameState.usage >2){
                    usage3.visible = true;
                }else{
                    usage3.visible = false;
                }
                if(gameState.usage >3){
                    usage4.visible = true;
                }else{
                    usage4.visible = false;
                }
            },  
            startAt: 0,
            timeScale: 1,
            repeat:-1
        });
        gameState.hourText = this.add.text(1130, 10, `${gameState.hour} AM`, {
            fill: '#FFFFFF', 
            fontSize: `20px`,
            fontFamily: 'LiberationSansNarrow',
            strokeThickness: 1,
        }).setInteractive().setDepth(3);
    }
    update(){
        
    }
}






























//Create ArenaScene Phaser SubClass
class ArenaScene extends Phaser.Scene {
    constructor() {
        //parameter for phaser class to allow phaser to reference subclass
		super({ key: 'ArenaScene' })
	}
    preload(){
        //no preloads for this subclass
    }
    create(){
        gameState.scene = this;
        gameState.input = this.input;
        gameState.mouse = this.input.mousePointer;
        gameState.cursors = this.input.keyboard.createCursorKeys();
        gameState.keys = this.input.keyboard.addKeys('W,S,A,D,R,SPACE,SHIFT,ONE,TWO,THREE,FOUR,FIVE,SIX,SEVEN,EIGHT,ESC,RIGHT,LEFT');
        
        
        gameState.ambience = this.sound.add('ambience');
        gameState.ambience.play(gameState.loopSound,true);
        
        
        gameState.officeDoorSound = this.sound.add('officeDoor');
        gameState.cameraFlipSound = this.sound.add('cameraFlip');
        
        gameState.cameraStatic = gameState.scene.sound.add('videoStatic');
        
        gameState.call = 0;
        
        if(gameState.thingsToSave.night == 1){
            gameState.ennard.aiLevel = 0;
            gameState.ennard.position = 111;
            this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                    gameState.call = this.sound.add('nightOnePhoneCall');
                    gameState.call.play();
                },  
                startAt: 0,
                timeScale: 1
            });
        }else if(gameState.thingsToSave.night == 2){
            gameState.ennard.aiLevel = 5;
            this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                    gameState.call = this.sound.add('nightTwoPhoneCall');
                    gameState.call.play();
                },  
                startAt: 0,
                timeScale: 1
            });
        }else if(gameState.thingsToSave.night == 3){
            gameState.ennard.aiLevel = 10;
            this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                    gameState.call = this.sound.add('nightThreePhoneCall');
                    gameState.call.play();
                },  
                startAt: 0,
                timeScale: 1
            });
        }else if(gameState.thingsToSave.night == 4){
            gameState.ennard.aiLevel = 14;
            this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                    gameState.call = this.sound.add('nightFourPhoneCall');
                    gameState.call.play();
                },  
                startAt: 0,
                timeScale: 1
            });
        }else if(gameState.thingsToSave.night == 5){
            gameState.ennard.aiLevel = 20;
            this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                    gameState.call = this.sound.add('nightFivePhoneCall');
                    gameState.call.play();
                },  
                startAt: 0,
                timeScale: 1
            });
        }
        else if(gameState.thingsToSave.night == 6){
            gameState.ennard.aiLevel = 0;
            this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                    gameState.call = this.sound.add('nightSixPhoneCall');
                    gameState.call.play();
                },  
                startAt: 0,
                timeScale: 1
            });
        }
        
        var timeChecker = this.time.addEvent({
            delay: 60000,
            callback: ()=>{
                if(gameState.hour == 12){
                    gameState.hour = 1;
                    if(gameState.power > 0){
                        gameState.hourText.setText(`${gameState.hour} AM`);
                    }
                }else{
                    gameState.hour++;
                    if(gameState.power > 0){
                        gameState.hourText.setText(`${gameState.hour} AM`);
                    }
                }
                if(gameState.hour == 6){
                    if(gameState.thingsToSave.night <6){
                        gameState.thingsToSave.night++;
                    }
                    gameState.save();
                    gameState.ambience.stop();
                    gameState.call.stop();
                    gameState.scene.scene.stop('ArenaScene');
                    gameState.scene.scene.stop('CameraScene');
                    gameState.scene.scene.start('MenuScene');
                }
            },  
            startAt: 0,
            timeScale: 1,
            repeat: 5
        });
       
        this.add.image(0,0,'blackBackground').setOrigin(0,0).setScale(10).setDepth(0);
        gameState.scrapBabySprite = this.add.sprite(0,0,'officeScrapBaby').setOrigin(0,0);
        gameState.scrapBabySprite.setFrame(0);
        var officeBg = this.add.sprite(0,0,'officeBackground').setOrigin(0,0).setDepth(3);
        officeBg.anims.play('officeBackgroundAction','true');
        
        
        gameState.rightDoor = this.add.sprite(0,0,'rightDoor').setOrigin(0,0).setDepth(3);
        gameState.rightDoor.setFrame(9);
        gameState.leftDoor = this.add.sprite(0,0,'leftDoor').setOrigin(0,0).setDepth(3);
        gameState.leftDoor.setFrame(9);
        gameState.ventDoor = this.add.sprite(0,0,'ventDoor').setOrigin(0,0).setDepth(3);
        gameState.ventDoor.setFrame(9);
        gameState.cameraMoniter = this.add.sprite(0,0,'cameraMoniter').setOrigin(0,0).setDepth(3);
        gameState.cameraMoniter.setFrame(15);
        gameState.inputTimer = 60;
        
        this.scene.launch('CameraScene');
        this.scene.pause('CameraScene');
        this.scene.bringToTop('ArenaScene');
        
        this.scene.launch('UIScene');
        this.scene.bringToTop('UIScene');
        
        
        var powerChecker = this.time.addEvent({
            delay: 1,
            callback: ()=>{
                gameState.power -= 0.0023*gameState.usage;
                gameState.powerText.setText(`POWER\n${Math.floor(gameState.power)}%`);
                if(gameState.power <= 0){
                    var powerDown = this.sound.add('powerDownSound');
                    powerDown.play();
                    gameState.call.stop();
                    gameState.ambience.stop();
                    powerChecker.destroy();
                    cameraButton.destroy();
                    gameState.powerText.destroy();
                    this.scene.stop('UIScene');
                    gameState.locked = true;
                    if(gameState.rightDoorStatus == true){
                        gameState.rightDoor.anims.play('rightDoorOpen','true');
                        gameState.rightDoorStatus = true;
                    }if(gameState.leftDoorStatus == true){
                        gameState.leftDoor.anims.play('leftDoorOpen','true');
                        gameState.leftDoorStatus = false;
                    }if (gameState.ventDoorStatus == true){
                        gameState.ventDoor.anims.play('ventDoorOpen','true');
                        gameState.ventDoorStatus = false;
                    }if (gameState.cameraMoniterStatus == true){
                        gameState.cameraMoniter.anims.play('cameraMoniterClose','true');
                        gameState.scene.scene.pause('CameraScene');
                        gameState.scene.scene.bringToTop('ArenaScene');
                        gameState.cameraMoniterStatus = false;
                    }
                    officeBg.anims.stop();
                    officeBg.setFrame(5);
                }
            },  
            startAt: 0,
            timeScale: 1,
            repeat:-1
        });
        
        var cameraButton = this.add.sprite(400,650,'cameraButton').setOrigin(0,0).setDepth(3).setInteractive();
        cameraButton.on('pointerover', function(pointer){
            if(gameState.inputTimer>30 && gameState.locked == false){
                gameState.cameraFlipSound.play();
                gameState.inputTimer = 0;
                if(gameState.cameraMoniterStatus == false){
                    gameState.cameraMoniter.anims.play('cameraMoniterOpen','true');
                    gameState.scene.time.addEvent({
                        delay: 300,
                        callback: ()=>{
                            gameState.cameraStatic.play(gameState.lowLoopSound);
                            gameState.cameraMoniterStatus = true;
                            gameState.usage += 1;
                            gameState.scene.scene.resume('CameraScene');
                            gameState.scene.scene.bringToTop('CameraScene');
                            gameState.scene.scene.bringToTop('UIScene');
                            gameState.update(gameState.cameraScene);
                        },  
                        startAt: 0,
                        timeScale: 1
                    });
                }
            }
        });
        if(gameState.thingsToSave.night != 6){
            gameState.ennard.movement(this);
        }else{
            gameState.scrapBaby.movement(this);
            gameState.ennard.position = 111;
        }
        
    }
    update(){
        gameState.inputTimer++;
        if(gameState.inputTimer>30 && gameState.locked == false){
            if(gameState.keys.A.isDown && gameState.cameraMoniterStatus == false){
                gameState.officeDoorSound.play();
                gameState.inputTimer = 0;
                if(gameState.leftDoorStatus == false){
                    gameState.leftDoor.anims.play('leftDoorClose','true');
                    gameState.leftDoorStatus = true;
                    gameState.usage += 1;
                }else{
                    gameState.leftDoor.anims.play('leftDoorOpen','true');
                    gameState.leftDoorStatus = false;
                    gameState.usage -= 1;
                }
            }
            else if(gameState.keys.D.isDown && gameState.cameraMoniterStatus == false){
                gameState.officeDoorSound.play();
                gameState.inputTimer = 0;
                if(gameState.rightDoorStatus == false){
                    gameState.rightDoor.anims.play('rightDoorClose','true');
                    gameState.rightDoorStatus = true;
                    gameState.usage += 1;
                }else{
                    gameState.rightDoor.anims.play('rightDoorOpen','true');
                    gameState.rightDoorStatus = false;
                    gameState.usage -= 1;
                }
            }
            else if(gameState.keys.W.isDown && gameState.cameraMoniterStatus == false){
                gameState.officeDoorSound.play();
                gameState.inputTimer = 0;
                if(gameState.ventDoorStatus == false){
                    gameState.ventDoor.anims.play('ventDoorClose','true');
                    gameState.ventDoorStatus = true;
                    gameState.usage += 1;
                }else{
                    gameState.ventDoor.anims.play('ventDoorOpen','true');
                    gameState.ventDoorStatus = false;
                    gameState.usage -= 1;
                }
            }
            else if(gameState.keys.S.isDown){
                gameState.cameraFlipSound.play();
                gameState.inputTimer = 0;
                if(gameState.cameraMoniterStatus == false){
                    gameState.cameraMoniter.anims.play('cameraMoniterOpen','true');
                    this.time.addEvent({
                        delay: 300,
                        callback: ()=>{
                            gameState.cameraStatic.play(gameState.lowLoopSound);
                            gameState.cameraMoniterStatus = true;
                            gameState.usage += 1;
                            gameState.scene.scene.resume('CameraScene');
                            gameState.scene.scene.bringToTop('CameraScene');
                            gameState.scene.scene.bringToTop('UIScene');
                            gameState.update(gameState.cameraScene);
                        },  
                        startAt: 0,
                        timeScale: 1
                    });
                }else{
                    gameState.cameraStatic.stop();
                    gameState.cameraMoniter.anims.play('cameraMoniterClose','true');
                    gameState.scene.scene.pause('CameraScene');
                    gameState.scene.scene.bringToTop('ArenaScene');
                    gameState.scene.scene.bringToTop('UIScene');
                    gameState.cameraMoniterStatus = false;
                    gameState.usage -= 1;
                }
            }
        }
    }
}
