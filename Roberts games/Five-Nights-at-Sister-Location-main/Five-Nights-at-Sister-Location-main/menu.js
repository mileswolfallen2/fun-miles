//menu subclass
class MenuScene extends Phaser.Scene {
    constructor() {
        //parameter for phaser class to allow phaser to reference subclass
		super({ key: 'MenuScene' })
	}
    //functions preloads sprites, images, and audio
    preload(){
        this.load.spritesheet('mainMenuStatic','images/mainMenuStatic.png',{frameWidth: 1200,frameHeight:700});
        this.load.spritesheet('officeBackground','images/officeBackground.png',{frameWidth: 1200,frameHeight:700});
        this.load.spritesheet('rightDoor','images/rightDoor.png',{frameWidth: 1200,frameHeight:700});
        this.load.spritesheet('leftDoor','images/leftDoor.png',{frameWidth: 1200,frameHeight:700});
        this.load.spritesheet('ventDoor','images/ventDoor.png',{frameWidth: 1200,frameHeight:700});
        this.load.spritesheet('cameraMoniter','images/cameraMoniter.png',{frameWidth: 1200,frameHeight:700});
        this.load.spritesheet('cameraStatic','images/cameraStatic.png',{frameWidth: 1200,frameHeight:700});
        this.load.spritesheet('officeScrapBaby','images/officeScrapBaby.png',{frameWidth: 1200,frameHeight:700});
        this.load.spritesheet('scrapBabyJumpscare','images/scrapBabyJumpscare.png',{frameWidth: 1200,frameHeight:700});
        this.load.image('mainMenuBackground','images/mainMenuBackground.png');
        this.load.image('menuTextLine','images/menuTextLine.png');
        this.load.image('cameraBackground','images/cameraBackground.png');
        this.load.image('blackBackground','images/blackBackground.png');
        this.load.image('CAM01','images/CAM01.png');
        this.load.image('CAM01ennard','images/CAM01ennard.png');
        this.load.image('CAM01ennard2','images/CAM01ennard2.png');
        this.load.image('CAM01scrapBaby','images/CAM01scrapBaby.png');
        this.load.image('CAM01scrapBaby2','images/CAM01scrapBaby2.png');
        this.load.image('CAM02','images/CAM02.png');
        this.load.image('CAM02ennard','images/CAM02ennard.png');
        this.load.image('CAM02ennard2','images/CAM02ennard2.png');
        this.load.image('CAM03','images/CAM03.png');
        this.load.image('CAM03ennard','images/CAM03ennard.png');
        this.load.image('CAM04','images/CAM04.png');
        this.load.image('CAM04ennard','images/CAM04ennard.png');
        this.load.image('CAM05','images/CAM05.png');
        this.load.image('CAM05ennard','images/CAM05ennard.png');
        this.load.image('CAM05ennard2','images/CAM05ennard2.png');
        this.load.image('CAM06','images/CAM06.png');
        this.load.image('CAM07','images/CAM07.png');
        this.load.image('CAM07ennard','images/CAM07ennard.png');
        
        this.load.image('cameraButton','images/cameraButton.png');
        this.load.image('usageBar','images/usageBar.png');
        
        this.load.spritesheet('ennardJs','images/ennardJs.png',{frameWidth: 1200,frameHeight:700});
        
        
        this.load.spritesheet('CAM01Button','images/CAM01Button.png',{frameWidth: 90,frameHeight:39});
        this.load.spritesheet('CAM02Button','images/CAM02Button.png',{frameWidth: 90,frameHeight:39});
        this.load.spritesheet('CAM03Button','images/CAM03Button.png',{frameWidth: 90,frameHeight:39});
        this.load.spritesheet('CAM04Button','images/CAM04Button.png',{frameWidth: 90,frameHeight:39});
        this.load.spritesheet('CAM05Button','images/CAM05Button.png',{frameWidth: 90,frameHeight:39});
        this.load.spritesheet('CAM06Button','images/CAM06Button.png',{frameWidth: 90,frameHeight:39});
        this.load.spritesheet('CAM07Button','images/CAM07Button.png',{frameWidth: 90,frameHeight:39});
        
        
        
        this.load.audio('ambience', 'audio/ambience.mp3');
        this.load.audio('officeDoor', 'audio/officeDoor.mp3');
        this.load.audio('cameraFlip', 'audio/cameraFlip.mp3');
        this.load.audio('ennardJsSound', 'audio/ennardJs.mp3');
        this.load.audio('scrapBabyJumpscare', 'audio/scrapBabyJumpscare.mp3');
        this.load.audio('videoStatic', 'audio/videoStatic.mp3');
        this.load.audio('powerDownSound', 'audio/powerDownSound.mp3');
        this.load.audio('menuMusic', 'audio/menuMusic.mp3');
        this.load.audio('nightOnePhoneCall', 'audio/nightOnePhoneCall.mp3');
        this.load.audio('nightTwoPhoneCall', 'audio/nightTwoPhoneCall.mp3');
        this.load.audio('nightThreePhoneCall', 'audio/nightThreePhoneCall.mp3');
        this.load.audio('nightFourPhoneCall', 'audio/nightFourPhoneCall.mp3');
        this.load.audio('nightFivePhoneCall', 'audio/nightFivePhoneCall.mp3');
        this.load.audio('nightSixPhoneCall', 'audio/nightSixPhoneCall.mp3');
        /*
        this.load.audio('click', 'audio/click.mp3');*/
    }
    create() {
        var scene = this;
        this.scene.stop('UIScene');
        //set current scene to variable
        
    //audio
        //config for keeping sound loop
        gameState.loopSound = {
            loop: true,
            volume: 1
        }
        gameState.lowLoopSound = {
            loop: true,
            volume: 0.7
        }
        gameState.reset();
        
        gameState.loadSave();
        
        
        this.anims.create({
            key: 'mainMenuStaticAction',
            frameRate: 20,
            repeat: -1,
            frames:this.anims.generateFrameNames('mainMenuStatic',{start: 0,end: 12})
        });
        this.anims.create({
            key: 'officeBackgroundAction',
            frameRate: 20,
            repeat: -1,
            frames:this.anims.generateFrameNames('officeBackground',{start: 0,end: 4})
        });
        
        
        
        this.anims.create({
            key: 'rightDoorOpen',
            frameRate: 20,
            frames:this.anims.generateFrameNames('rightDoor',{start: 5,end: 9})
        });
        this.anims.create({
            key: 'rightDoorClose',
            frameRate: 20,
            frames:this.anims.generateFrameNames('rightDoor',{start: 0,end: 4})
        });
        
        
        
        this.anims.create({
            key: 'leftDoorOpen',
            frameRate: 15,
            frames:this.anims.generateFrameNames('leftDoor',{start: 5,end: 9})
        });
        this.anims.create({
            key: 'leftDoorClose',
            frameRate: 15,
            frames:this.anims.generateFrameNames('leftDoor',{start: 0,end: 4})
        });
        
        
        this.anims.create({
            key: 'ventDoorOpen',
            frameRate: 24,
            frames:this.anims.generateFrameNames('ventDoor',{start: 5,end: 9})
        });
        this.anims.create({
            key: 'ventDoorClose',
            frameRate: 24,
            frames:this.anims.generateFrameNames('ventDoor',{start: 0,end: 4})
        });
        
        
        this.anims.create({
            key: 'cameraMoniterOpen',
            frameRate: 24,
            frames:this.anims.generateFrameNames('cameraMoniter',{start: 0,end: 8})
        });
        this.anims.create({
            key: 'cameraMoniterClose',
            frameRate: 24,
            frames:this.anims.generateFrameNames('cameraMoniter',{start: 9,end: 15})
        });
        
        this.anims.create({
            key: 'cameraStaticAction',
            frameRate: 20,
            repeat:-1,
            frames:this.anims.generateFrameNames('cameraStatic',{start: 0,end: 4})
        });
        
        
        
        this.anims.create({
            key: 'ennardJsAction',
            frameRate: 28,
            frames:this.anims.generateFrameNames('ennardJs',{start: 0,end: 16})
        });
        
        this.anims.create({
            key: 'scrapBabyJumpscareAction',
            frameRate: 15,
            frames:this.anims.generateFrameNames('scrapBabyJumpscare',{start: 0,end: 11})
        });
        
        
        
        var menuBg = this.add.image(-600,0,'mainMenuBackground').setOrigin(0,0);
        menuBg.scale = 1200/menuBg.width;
        
        var menuMusic = this.sound.add('menuMusic');
        menuMusic.play(gameState.lowLoopSound);
        
        var menuStatic = this.add.sprite(0,0,'mainMenuStatic').setOrigin(0,0);
        menuStatic.anims.play('mainMenuStaticAction','true');
        
        var title = this.add.text(100, 100, `F  I  V  E    N  I  G  H  T  S    A T    S  I  S  T  E  R   L  O  C  A  T  I  O  N`, {
            fill: '#FFFFFF', 
            fontSize: `30px`,
            fontFamily: 'LiberationSansNarrow',
            strokeThickness: .5,
        }).setInteractive();
        
        var newGameText = this.add.text(850, 420, `N E W   G A M E`, {
            fill: '#FFFFFF', 
            fontSize: `30px`,
            fontFamily: 'LiberationSansNarrow',
            strokeThickness: .5,
        }).setInteractive();
        newGameText.on('pointerdown', function(pointer){
            menuMusic.stop();
            gameState.thingsToSave.night = 1;
            scene.scene.start('ArenaScene');
        });
        var menuTextLine1 = this.add.image(0,430,'menuTextLine').setOrigin(0,0);
        menuTextLine1.visible = false;
        newGameText.on('pointerover', function(pointer){
            menuTextLine1.visible = true;
        });
        newGameText.on('pointerout', function(pointer){
            menuTextLine1.visible = false;
        });
        
        
        var continueText = this.add.text(850, 510, `C O N T I N U E`, {
            fill: '#FFFFFF', 
            fontSize: `25px`,
            fontFamily: 'LiberationSansNarrow',
            strokeThickness: .5,
        }).setInteractive();
        continueText.on('pointerdown', function(pointer){
            menuMusic.stop();
            scene.scene.start('ArenaScene');
        });
        var menuTextLine2 = this.add.image(0,519,'menuTextLine').setOrigin(0,0);
        menuTextLine2.visible = false;
        continueText.on('pointerover', function(pointer){
            menuTextLine2.visible = true;
            continueText.setText(`C O N T I N U E  ${gameState.thingsToSave.night}`);
        });
        continueText.on('pointerout', function(pointer){
            menuTextLine2.visible = false;
            continueText.setText(`C O N T I N U E`);
        });
        //this.scene.start('ArenaScene');
        /*gameState.bgM = this.sound.add('menuBgMusic');
        gameState.bgM.setMute(false);
        gameState.bgM.play(gameState.loopSound,true);*/
        
        
        //Loading Animation
        
        /*
        
        //sets global scene to variable for inside local functions
        gameState.globalScene = this;
        //create and animate background
        var bg = this.physics.add.sprite(0,0,'background').setOrigin(0,0).setScale(window.innerHeight/675).setDepth(-100);
        bg.anims.play('bganimate','true');
        
        //add title
        var title = this.add.sprite(window.innerWidth/2,120,'titleImage').setScale(1);
        this.time.addEvent({
            delay: 3000,
            callback: ()=>{
                title.anims.play('moveTitle');
            },  
            startAt: 0,
            repeat: -1,
            timeScale: 1
        });
        
        
        var Ubutton = this.add.image(window.innerWidth/2+60,window.innerHeight/2+280,'upgradeButton').setInteractive();
        Ubutton.on('pointerdown', function(pointer){
            gameState.globalScene.scene.start('UpgradeScene');
        });
        Ubutton.on('pointerover', function(pointer){
            scene.sound.play('click',{volume: 5});
            Ubutton.setFrame(1);
        });
        Ubutton.on('pointerout', function(pointer){
            Ubutton.setFrame(0);
        });
        */
	}
    update(){
        //game loop that constantly runs (not needed for menu)
    }
}