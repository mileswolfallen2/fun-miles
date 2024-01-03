//The configuration of your game that is a parameter of the Phaser.Game function
const config = {
    type: Phaser.AUTO,
    width : 1200,
    height: 700,
    backgroundColor: "#000000",
    audio: {
        disableWebAudio: false 
      },
    //allows modification of the games physics
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            enableBody: true
            //debug: true
        }
    },
    //subclass scenes 
    scene:[MenuScene,ArenaScene,CameraScene,UIScene],
    //phasers scale system to fit into the brower
    scale: {
        zoom: 1,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

//creats a game game object with the configuration
const game = new Phaser.Game(config);

//create a block-scoped object that stores variables that can be accessed in any scene
let gameState = {
    thingsToSave:{
        night: 1
    },
    save: function(){
        window.localStorage.setItem("thingsToSave", JSON.stringify(gameState.thingsToSave));
    },
    loadSave: function(){
        if(JSON.parse(window.localStorage.getItem("thingsToSave")) !== null){
            gameState.thingsToSave = JSON.parse(window.localStorage.getItem("thingsToSave"));
        }
    },
    locked: false,
    leftDoorStatus: false,
    rightDoorStatus: false,
    ventDoorStatus: false,
    cameraMoniterStatus: false,
    camPosition: 1,
    power: 100,
    usage: 1,
    hour: 12,
    reset :function(){
        gameState.locked = false;  
        gameState.leftDoorStatus = false;
        gameState.rightDoorStatus = false;
        gameState.ventDoorStatus = false;
        gameState.cameraMoniterStatus = false;
        gameState.camPosition = 1;
        gameState.usage = 1;
        gameState.power = 100;
        gameState.ennard.position = 7;
        gameState.ennard.cooldown = 5000;
        gameState.scrapBaby.position = 7;
        gameState.scrapBaby.cooldown = 5000;
        gameState.hour = 12;
    },
    update: function(scene){
        gameState.static.alpha = 1;
        scene.tweens.add({
          targets: gameState.static,
          alpha: 0.1,
          duration: 500,
          ease: 'Power2'
        }, scene);
        if(gameState.camPosition == 1){
            if(gameState.ennard.position == 1){
                gameState.cameraScreen.setTexture('CAM01ennard');   
            }else if(gameState.ennard.position == 12){
                gameState.cameraScreen.setTexture('CAM01ennard2');   
            }else if(gameState.scrapBaby.position == 1){
                gameState.cameraScreen.setTexture('CAM01scrapBaby');   
            }else if(gameState.scrapBaby.position == 12){
                gameState.cameraScreen.setTexture('CAM01scrapBaby2');   
            }else{
                gameState.cameraScreen.setTexture('CAM01');
            }
        }else if(gameState.camPosition == 2){
            if(gameState.ennard.position == 2){
                gameState.cameraScreen.setTexture('CAM02ennard');   
            }else if(gameState.ennard.position == 22){
                gameState.cameraScreen.setTexture('CAM02ennard2');   
            }else{
                gameState.cameraScreen.setTexture('CAM02');
            }
        }else if(gameState.camPosition == 3){
            if(gameState.ennard.position == 3){
                gameState.cameraScreen.setTexture('CAM03ennard');   
            }else{
                gameState.cameraScreen.setTexture('CAM03');
            }
        }else if(gameState.camPosition == 4){
            if(gameState.ennard.position == 4){
                gameState.cameraScreen.setTexture('CAM04ennard');   
            }else{
                gameState.cameraScreen.setTexture('CAM04');
            }
        }else if(gameState.camPosition == 5){
            if(gameState.ennard.position == 5){
                gameState.cameraScreen.setTexture('CAM05ennard');   
            }else if(gameState.ennard.position == 52){
                gameState.cameraScreen.setTexture('CAM05ennard2');   
            }else{
                gameState.cameraScreen.setTexture('CAM05');
            }
        }else if(gameState.camPosition == 6){
          gameState.cameraScreen.setTexture('CAM06');
        }else if(gameState.camPosition == 7){
            if(gameState.ennard.position == 7){
                gameState.cameraScreen.setTexture('CAM07ennard');   
            }else{
                gameState.cameraScreen.setTexture('CAM07');
            }
        }
    },
    
    ennard:{
        position: 7,
        cooldown: 5000,
        aiLevel: 3,
        moveFunction: null,
        movement: function(scene){
            gameState.ennard.moveFunction = scene.time.addEvent({
                delay: gameState.ennard.cooldown,
                callback: ()=>{
                    var random = Math.ceil(Math.random()*20);
                    if(gameState.ennard.aiLevel >= random || gameState.ennard.position == 0 || gameState.power <= 0){
                        if(gameState.ennard.position == 111 && gameState.power <= 0){
                            gameState.ennard.position = 12;
                        }
                        if(gameState.ennard.position == 7){
                            var rand = Math.ceil(Math.random()*3);
                            if(rand == 1){
                                gameState.ennard.position = 4;
                            }else if(rand == 2){
                                gameState.ennard.position = 6;
                            }else{
                                gameState.ennard.position = 5;
                            }
                        }else if (gameState.ennard.position == 6){
                            var rand = Math.ceil(Math.random()*4);
                            if(rand == 1){
                                gameState.ennard.position = 3;
                            }else if(rand == 2){
                                gameState.ennard.position = 1;
                            }else if(rand == 3){
                                gameState.ennard.position = 4;
                            }else{
                                gameState.ennard.position = 5;
                            }
                        }else if (gameState.ennard.position == 5){
                            gameState.ennard.position = 52;
                        }else if (gameState.ennard.position == 52){
                            if(gameState.ventDoorStatus == false){
                                scene.time.addEvent({
                                    delay: 400,
                                    callback: ()=>{
                                        gameState.locked = true;
                                    },  
                                    startAt: 0,
                                    timeScale: 1
                                });
                                gameState.ennard.position = 0; 
                                gameState.ennard.cooldown = 800;
                            }else{
                                gameState.ennard.position = 6;
                            }
                        }

                        else if (gameState.ennard.position == 4){
                            gameState.ennard.position = 2;
                        }
                        else if (gameState.ennard.position==2){
                            gameState.ennard.position = 22;
                        }else if (gameState.ennard.position==22){
                            if(gameState.rightDoorStatus == false){
                                scene.time.addEvent({
                                    delay: 400,
                                    callback: ()=>{
                                        gameState.locked = true;
                                    },  
                                    startAt: 0,
                                    timeScale: 1
                                });
                                gameState.ennard.position = 0; 
                                gameState.ennard.cooldown = 800;
                            }else{
                                gameState.ennard.position = 7;
                            }
                        }

                        else if (gameState.ennard.position==3){
                            gameState.ennard.position = 1;
                        }

                        else if (gameState.ennard.position==1){
                            gameState.ennard.position = 12;
                        }else if (gameState.ennard.position==12){
                            if(gameState.leftDoorStatus == false){
                                gameState.ennard.position = 0; 
                                gameState.ennard.cooldown = 800;
                                scene.time.addEvent({
                                    delay: 400,
                                    callback: ()=>{
                                        gameState.locked = true;
                                    },  
                                    startAt: 0,
                                    timeScale: 1
                                });
                            }else{
                                var rand = Math.ceil(Math.random()*2);
                                if(rand == 1){
                                    gameState.ennard.position = 6;
                                }else{
                                    gameState.ennard.position = 7;
                                }
                            }
                        }else if (gameState.ennard.position==0){
                            gameState.ennard.cooldown = 10000;
                            gameState.call.stop();
                            gameState.ambience.stop();
                            gameState.ennard.jumpscare(gameState.scene);
                        }
                        gameState.update(gameState.cameraScene);
                    }
                    
                    gameState.ennard.movement(scene);
                },  
                startAt: 0,
                timeScale: 1
            });
        },
        jumpscare:function(scene){
            gameState.locked = true;
            if(gameState.cameraMoniterStatus == true){
                gameState.cameraMoniter.anims.play('cameraMoniterClose','true');
                gameState.scene.scene.pause('CameraScene');
                gameState.scene.scene.bringToTop('ArenaScene');
                gameState.cameraMoniterStatus = false;
            }
            var ennard = scene.add.sprite(0,0,'ennardJs').setOrigin(0,0).setDepth(4);
            ennard.anims.play('ennardJsAction','true');
            var ennardJs = scene.sound.add('ennardJsSound');
            ennardJs.play();
            scene.time.addEvent({
                delay: 900,
                callback: ()=>{
                    scene.scene.stop('CameraScene');
                    scene.scene.stop('ArenaScene');
                    scene.scene.start('MenuScene');
                },  
                startAt: 0,
                timeScale: 1
            });
        }
    },
    
    
    scrapBaby:{
        position: 7,
        cooldown: 5000,
        aiLevel: 20,
        moveFunction: null,
        movement: function(scene){
            gameState.scrapBaby.moveFunction = scene.time.addEvent({
                delay: gameState.scrapBaby.cooldown,
                callback: ()=>{
                    var random = Math.ceil(Math.random()*20);
                    if(gameState.scrapBaby.aiLevel >= random || gameState.scrapBaby.position == 0 || gameState.power <= 0){
                        if(gameState.scrapBaby.position == 111 && gameState.power <= 0){
                            gameState.scrapBaby.position = 12;
                        }
                        if(gameState.scrapBaby.position == 7){
                            var rand = Math.ceil(Math.random()*3);
                            if(rand == 1){
                                gameState.scrapBaby.position = 4;
                            }else if(rand == 2){
                                gameState.scrapBaby.position = 6;
                            }else{
                                gameState.scrapBaby.position = 5;
                            }
                        }else if (gameState.scrapBaby.position == 6){
                            var rand = Math.ceil(Math.random()*4);
                            if(rand == 1){
                                gameState.scrapBaby.position = 3;
                            }else if(rand == 2){
                                gameState.scrapBaby.position = 1;
                            }else if(rand == 3){
                                gameState.scrapBaby.position = 4;
                            }else{
                                gameState.scrapBaby.position = 5;
                            }
                        }else if (gameState.scrapBaby.position == 5){
                            gameState.scrapBaby.position = 52;
                        }else if (gameState.scrapBaby.position == 52){
                            if(gameState.ventDoorStatus == false){
                                scene.time.addEvent({
                                    delay: 400,
                                    callback: ()=>{
                                        gameState.locked = true;
                                    },  
                                    startAt: 0,
                                    timeScale: 1
                                });
                                gameState.scrapBaby.position = 0; 
                                gameState.scrapBaby.cooldown = 800;
                            }else{
                                gameState.scrapBaby.position = 7;
                            }
                        }

                        else if (gameState.scrapBaby.position == 4){
                            gameState.scrapBaby.position = 2;
                        }
                        else if (gameState.scrapBaby.position==2){
                            gameState.scrapBaby.position = 22;
                        }else if (gameState.scrapBaby.position==22){
                            if(gameState.rightDoorStatus == false){
                                scene.time.addEvent({
                                    delay: 400,
                                    callback: ()=>{
                                        gameState.locked = true;
                                    },  
                                    startAt: 0,
                                    timeScale: 1
                                });
                                gameState.scrapBaby.position = 0; 
                                gameState.scrapBaby.cooldown = 800;
                            }else{
                                var rand = Math.ceil(Math.random()*2);
                                if(rand == 1){
                                    gameState.scrapBaby.position = 23;
                                    gameState.scrapBabySprite.setFrame(2);
                                    gameState.scrapBabySprite.alpha = 0;
                                    scene.tweens.add({
                                        targets: gameState.scrapBabySprite,
                                        alpha: 1,
                                        duration: 1000,
                                        ease: 'Power2'
                                    }, scene);
                                    
                                }else{
                                    gameState.scrapBaby.position = 6;
                                }
                            }
                        }else if (gameState.scrapBaby.position==23){
                            if(gameState.rightDoorStatus == false){
                                gameState.scrapBabySprite.alpha = 1;
                                scene.tweens.add({
                                    targets: gameState.scrapBabySprite,
                                    alpha: 0,
                                    duration: 500,
                                    ease: 'Power2'
                                }, scene);
                                scene.time.addEvent({
                                    delay: 400,
                                    callback: ()=>{
                                        gameState.locked = true;
                                    },  
                                    startAt: 0,
                                    timeScale: 1
                                });
                                gameState.scrapBaby.position = 0; 
                                gameState.scrapBaby.cooldown = 800;
                            }else{
                                gameState.scrapBabySprite.setFrame(0);
                                gameState.scrapBaby.position = 6;
                            }
                        }

                        else if (gameState.scrapBaby.position==3){
                            gameState.scrapBaby.position = 1;
                        }

                        else if (gameState.scrapBaby.position==1){
                            gameState.scrapBaby.position = 12;
                        }else if (gameState.scrapBaby.position==12){
                            if(gameState.leftDoorStatus == false){
                                gameState.scrapBaby.position = 0; 
                                gameState.scrapBaby.cooldown = 800;
                                scene.time.addEvent({
                                    delay: 400,
                                    callback: ()=>{
                                        gameState.locked = true;
                                    },  
                                    startAt: 0,
                                    timeScale: 1
                                });
                            }else{
                                var rand = Math.ceil(Math.random()*2);
                                if(rand == 1){
                                    gameState.scrapBaby.position = 13;
                                    gameState.scrapBabySprite.setFrame(1);
                                    gameState.scrapBabySprite.alpha = 0;
                                    scene.tweens.add({
                                        targets: gameState.scrapBabySprite,
                                        alpha: 1,
                                        duration: 1000,
                                        ease: 'Power2'
                                    }, scene);
                                    
                                }else{
                                    gameState.scrapBaby.position = 6;
                                }
                            }
                        }else if (gameState.scrapBaby.position==13){
                            if(gameState.leftDoorStatus == false){
                                gameState.scrapBabySprite.alpha = 1;
                                scene.tweens.add({
                                    targets: gameState.scrapBabySprite,
                                    alpha: 0,
                                    duration: 600,
                                    ease: 'Power2'
                                }, scene);
                                gameState.scrapBaby.position = 0; 
                                gameState.scrapBaby.cooldown = 800;
                                scene.time.addEvent({
                                    delay: 400,
                                    callback: ()=>{
                                        gameState.locked = true;
                                    },  
                                    startAt: 0,
                                    timeScale: 1
                                });
                            }else{
                                gameState.scrapBabySprite.setFrame(0);
                                var rand = Math.ceil(Math.random()*2);
                                if(rand == 1){
                                    gameState.scrapBaby.position = 6;
                                }else{
                                    gameState.scrapBaby.position = 7;
                                }
                            }
                        }
                        
                        else if (gameState.scrapBaby.position==0){
                            gameState.scrapBaby.cooldown = 10000;
                            gameState.call.stop();
                            gameState.ambience.stop();
                            gameState.scrapBaby.jumpscare(gameState.scene);
                        }
                        gameState.update(gameState.cameraScene);
                    }
                    console.log(gameState.scrapBaby.position);
                    gameState.scrapBaby.movement(scene);
                },  
                startAt: 0,
                timeScale: 1
            });
        },
        jumpscare:function(scene){
            gameState.locked = true;
            if(gameState.cameraMoniterStatus == true){
                gameState.cameraMoniter.anims.play('cameraMoniterClose','true');
                gameState.scene.scene.pause('CameraScene');
                gameState.scene.scene.bringToTop('ArenaScene');
                gameState.cameraMoniterStatus = false;
            }
            var scrapBaby = scene.add.sprite(0,0,'scrapBabyJumpscare').setOrigin(0,0).setDepth(4);
            scrapBaby.anims.play('scrapBabyJumpscareAction','true');
            var scrapBabyJs = scene.sound.add('scrapBabyJumpscare');
            scrapBabyJs.play();
            scene.time.addEvent({
                delay: 900,
                callback: ()=>{
                    scene.scene.stop('CameraScene');
                    scene.scene.stop('ArenaScene');
                    scene.scene.start('MenuScene');
                },  
                startAt: 0,
                timeScale: 1
            });
        }
    },
    
    
    
    
    fireRate: 10,
    rateCooldown: 0,
    gameSpeed: 100
}