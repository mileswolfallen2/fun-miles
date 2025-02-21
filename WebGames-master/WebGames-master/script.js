const mainContent = document.querySelector(".main-content");
const navBar = document.querySelector(".nav-bar");
const gameText = document.getElementsByClassName("game-text");
const navItem = document.getElementsByClassName("nav-item");
const gameIcon = document.getElementsByClassName("game");
const sideBar = document.getElementById("side-bar-menu");
const darkModeIcon = document.getElementById("dark-mode-icon");
const sidebarDarkModeIcon = document.getElementById("sidebar-dark-mode-icon");

const onToggleDarkMode = () => {
  if (darkModeIcon.classList.contains("fa-moon")) {
    mainContent.style.backgroundColor = "#15202B";
    sideBar.style.backgroundColor = "rgb(1, 125, 63)";
    for (let i = 0; i < gameText.length; i++) {
      gameText[i].style.color = "#E4E6EB";
    }
    for (let i = 0; i < gameIcon.length; i++) {
      gameIcon[i].style.setProperty("--game-icon-hover-color", "#22303C");
    }

    navBar.style.backgroundColor = "#03DAC5";
    navBar.style.color = "#212628";
    for (let i = 0; i < navItem.length; i++) {
      navItem[i].style.color = "#212628";
    }
    darkModeIcon.className = "fa-solid fa-sun";
    sidebarDarkModeIcon.className = "fa-solid fa-sun";
  } else {
    mainContent.style.backgroundColor = "white";
    sideBar.style.backgroundColor = "rgb(0, 144, 72)";
    for (let i = 0; i < gameText.length; i++) {
      gameText[i].style.color = "#333333";
    }
    for (let i = 0; i < gameIcon.length; i++) {
      gameIcon[i].style.setProperty("--game-icon-hover-color", "#dedede");
    }

    navBar.style.backgroundColor = "#009090";
    navBar.style.color = "white";
    for (let i = 0; i < navItem.length; i++) {
      navItem[i].style.color = "white";
    }
    darkModeIcon.className = "fa-solid fa-moon";
    sidebarDarkModeIcon.className = "fa-solid fa-moon";
  }
};


const toggleSideBar = () => {
  const currentWidth = sideBar.style.width;
  if (currentWidth === "73vw") {
    sideBar.style.width = "0";
    mainContent.style.filter = "brightness(1)";
  } else {
    sideBar.style.width = "73vw";
    mainContent.style.filter = "brightness(50%)";
  }
};

// Rendering the main content dynamically
const mainContentData = [
  {
    name: "Back",
    image: "/WebGames-master/WebGames-master/assets/home.png",
    link: "/index.html",
  },
  {
    name: "Tic-Tac-Toe",
    image: "assets/tic-tac-toe.png",
    link: "tic-tac-toe/index.html",
  },
  {
    name: "The Bubble Game",
    image: "assets/the_bubble_game.png",
    link: "BubbleGame/index.html",
  },
  {
    name: "Dev Quiz",
    image: "assets/dev_quiz.png",
    link: "DevQuiz/index.html",
  },
  {
    name: "HangMan",
    image: "assets/hangman.png",
    link: "https://hangmangame02.netlify.app/",
  },
  {
    name: "Snow-Rider3D",
    image: "assets/snnowriders3d.jpeg",
    link: "games/Snow-Rider3D-main/Snow-Rider3D-main/index.html",
  },
  {
    name: "HexGL",
    image: "assets/HexGL256.png",
    link: "games/HexGL-master/HexGL-master/index.html",
  },
  {
    name: "cut the rope",
    image: "assets/cut-the-rope.jpeg",
    link: "games/CutTheRope-master/CutTheRope-master/index.html",
  },
  {
    name: "Tunnel-Rush",
    image: "assets/tunelrush.jpeg",
    link: "games/zTunnel-Rush.html",
  },
  {
    name: "DuckLife4",
    image: "assets/duck-lifde-4.jpeg",
    link: "games/DuckLife4-main/DuckLife4-main/index.html",
  },
  {
    name: "Learn To Fly 2",
    image: "assets/learn-to-fly-2.jpeg",
    link: "games/Learn-To-Fly-2-main/Learn-To-Fly-2-main/index.html",
  },
  {
    name: "Slope",
    image: "assets/slope.jpeg",
    link: "games/Slope-Game-main/Slope-Game-main/index.html",
  },
  {
    name: "Henry Stick Man Collection",
    image: "assets/stealing-the-dimend.jpeg",
    link: "/henry_stick_man.html",
  },
  {
    name: "Basketball Legends 2020",
    image: "assets/2020.avif",
    link: "games/Basketball-Legends-2020-gh-pages/Basketball-Legends-2020-gh-pages/index.html",
  },
  {
    name: "Tanuki Sunset",
    image: "assets/taunki.jpeg",
    link: "games/tanuki-sunset-master/index.html",
  },
  {
    name: "fnaf",
    image: "assets/anan.jpeg",
    link: "/Fanf.html",
  },
  {
    name: "gun-mayhem",
    image: "assets/gamemntze-gun-mayhem-original-29173-img.png",
    link: "games/gun-mayhem-main/gun-mayhem-main/index.html",
  },
  {
    name: "The Shadow Reform",
    image: "assets/kaertt.png",
    link: "games/The-Shadow-Reform.html",
  },
  {
    name: "Kirby's Dreamland 3 Maker",
    image: "assets/images3.jpeg",
    link: "games/Kirby's-Dreamland-3-Maker.html",
  },
  {
    name: "drift-hunters",
    image: "assets/512x512bb.jpg",
    link: "games/drift-hunters-main/index.html",
  },
 {
    name: "Deth run 3d",
    image: "assets/Dethrun3d.jpeg",
    link: "games/3d-gam.zip_unzipped/1-main/index.html",
  },
  {
    name: "Chrono-Trigger",
    image: "assets/Chrono-Trigger.jpeg",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/Chrono-Trigger.html",
  },
  {
    name: "Mario Kart 64",
    image: "assets/mareoc64.jpeg",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/Mario-Kart-64.html",
  },
  {
    name: "isaac rath or the lam",
    image: "assets/isik.jpeg",
    link: "stuftochanch/isaac.html",
  },
  {
    name: "nes gd",
    image: "assets/gd-nes.jpeg",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/gd.html",
  },
  {
    name: "earthbound",
    image: "assets/earthbound.png",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/EarthBound.html",
  },
  {
    name: "temple-run",
    image: "games2/assets/temple-run.png",
    link: "games2/game/temple-run/index.html",
  },
  {
    name: "drift-boss",
    image: "games2/assets/drift-boss.jpg",
    link: "games2/game/drift-boss/index.html",
  },
  {
    name: "drift-hunters",
    image: "games2/assets/drifthunters.jpg",
    link: "games2/game/drift-hunters/index.html",
  },
  {
    name: "new cookie-clicker",
    image: "games2/assets/cookie-clicker.png",
    link: "games2/game/cookie-clicker/index.html",
  },
  {
    name: "retro-bowl",
    image: "games2/assets/retro-bowl.jpg",
    link: "games2/game/retro-bowl/index.html",
  },
  {
    name: "tiny-fishing",
    image: "games2/game/tiny-fishing/thumb.png",
    link: "games2/game/tiny-fishing/indx.html",
  },
  {
    name: "idle-breakout",
    image: "games2/assets/idle-breakout.jpg",
    link: "games2/game/idle-breakout/index.html",
  },
  {
    name: "just-fall",
    image: "/games2/assets/just-fall.jpg",
    link: "/games2/game/just-fall/index.html",
  },
  {
    name: "monkey-mart",
    image: "/games2/assets/monkey-mart.png",
    link: "/monkey mart/index.html",
  },
  {
    name: "moto-x3m",
    image: "games2/assets/moto-x3m.jpg",
    link: "games2/game/moto-x3m/index.html",
  },
  {
    name: "moto-x3m-spooky-land",
    image: "games2/assets/moto-spooky.jpg",
    link: "games2/game/moto-x3m-spooky-land/index.html",
  },
  {
    name: "motox3m2",
    image: "games2/assets/motox3m2.jpg",
    link: "games2/game/motox3m2/index.html",
  },
  {
    name: "Drill Dozer",
    image: "assets/Drill-Dozer.jpeg",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/DrillDozer(USA).html",
  },
  {
    name: "doom",
    image: "assets/doom.jpeg",
    link: "/Doom-In-Docker-master/Doom-In-Docker-master/doom/public/index.html",
  },
  {
    name: "paper moaro",
    image: "assets/papermoaro.jpeg",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/n64test/papermaro.html",
  },
  {
    name: "FZeroX",
    image: "assets/F_ZOERX.jpeg",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/n64test/FZeroX.html",
  },
  {
    name: "GD",
    image: "/WebGames-master/WebGames-master/games2/assets/geometry.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/geometry-dash-remastered/index.html",
  },
  {
    name: "pacman",
    image: "/WebGames-master/WebGames-master/games2/assets/pacman.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/pacman/index.html",
  },
  {
    name: "backrooms",
    image: "/WebGames-master/WebGames-master/games2/game/backrooms/Backrooms-Games.webp",
    link: "/WebGames-master/WebGames-master/games2/game/backrooms/index.html",
  },
  {
    name: "car game",
    image: "/WebGames-master/WebGames-master/games2/game/cars-simulator/splash.png",
    link: "/WebGames-master/WebGames-master/games2/game/cars-simulator/index.html",
  },
  {
    name: "a-dance-of-fire-and-ice",
    image: "/WebGames-master/WebGames-master/games2/game/a-dance-of-fire-and-ice/splash.png",
    link: "/WebGames-master/WebGames-master/games2/game/a-dance-of-fire-and-ice/index.html",
  },
  {
    name: "worlds-hardest-game",
    image: "/WebGames-master/WebGames-master/games2/assets/worlds-hardest-game.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/worlds-hardest-game/index.html",
  },
  {
    name: "thumb fighter",
    image: "/WebGames-master/WebGames-master/assets/thum.jpeg",
    link: "/WebGames-master/WebGames-master/games/thumb-fighter-main/index.html",
  },
  {
    name: "bob the robber 2",
    image: "/WebGames-master/WebGames-master/games2/assets/bob-the-robber-2.png",
    link: "/WebGames-master/WebGames-master/games2/game/bob-the-robber-2/index.html",
  },
  {
    name: "vex3",
    image: "/WebGames-master/WebGames-master/games2/assets/vex3.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/vex3/index.html",
  },
  {
    name: "vex4",
    image: "/WebGames-master/WebGames-master/games2/assets/vex4.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/vex4/index.html",
  },
  {
    name: "vex5",
    image: "/WebGames-master/WebGames-master/games2/assets/vex5.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/vex5/index.html",
  },
  {
    name: "vex6",
    image: "/WebGames-master/WebGames-master/games2/assets/vex6.jpeg",
    link: "/WebGames-master/WebGames-master/games2/game/vex6/index.html",
  },
  {
    name: "vex7",
    image: "/WebGames-master/WebGames-master/games2/assets/vex7.jpeg",
    link: "/WebGames-master/WebGames-master/games2/game/vex7/index.html",
  },
  {
    name: "N-Gon",
    image: "/WebGames-master/WebGames-master/assets/n-gon.png",
    link: "/n-gon-master/n-gon-master/index.html",
  },
  {
    name: "Chess",
    image: "/WebGames-master/WebGames-master/games2/assets/chess.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/chess/index.html",
  },
 {
    name: "Cluster-rush",
    image: "/WebGames-master/WebGames-master/games2/assets/cluster-rush.png",
    link: "/WebGames-master/WebGames-master/games2/game/cluster-rush/index.html",
  },
  {
    name: "Awesome Tanks 2",
    image: "/WebGames-master/WebGames-master/games2/assets/at2.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/awesome-tanks-2/index.html",
  },
  {
    name: "Stickman Hook",
    image: "/WebGames-master/WebGames-master/games2/assets/stickman-hook.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/stickman-hook/index.html",
  },
  {
    name: "Subway Surfers",
    image: "/WebGames-master/WebGames-master/games2/assets/subway-surfer.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/subway-surfers/index.html",
  },
  {
    name: "Stick Merge",
    image: "/WebGames-master/WebGames-master/games2/assets/stick-merge.png",
    link: "/WebGames-master/WebGames-master/games2/game/stick-merge/index.html",
  },
  {
    name: "Cube Field",
    image: "/WebGames-master/WebGames-master/games2/assets/cubefield.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/cubefield/index.html",
  },
  {
    name: "House Of Hazards",
    image: "/WebGames-master/WebGames-master/games/HouseOfHazards-main/screenshots/0609b0ba2889859b21cf47ca205818fe.avif",
    link: "/WebGames-master/WebGames-master/games/HouseOfHazards-main/index.html",
  },
  {
    name: "2048",
    image: "/image-robert-added/2048.png",
    link: "/dao-2048-main/dao-2048-main/index.html",
  },
  {
    name: "Drive Mad",
    image: "/image-robert-added/unnamed.png",
    link: "/drive-mad-main/index.html",
  },
  {
    name: "Stacktris",
    image: "/image-robert-added/Stack.png",
    link: "/stacktris-main/stacktris-main/index.html",
  },
  {
    name: "Dino Game",
    image: "/image-robert-added/Dino.png",
    link: "/dino.html",
  },
  {
    name: "Sky Rush",
    image: "/image-robert-added/Skyrush.png",
    link: "/WebGames-master/WebGames-master/games/skyrush.html",
  },
  {
    name: "Power Tower",
    image: "/image-robert-added/PowerTower.png",
    link: "/WebGames-master/WebGames-master/games/P.html",
  },
  {
    name: "Scratch Town",
    image: "/image-robert-added/town.png",
    link: "/WebGames-master/WebGames-master/games/townmain.html",
  },
  {
    name: "Achievement Unlocked Not Here Yet",
    image: "/image-robert-added/image-robert-added/achievementunlocked.png",
    link: "/WebGames-master/WebGames-master/games/townmain.html",
  },
  {
    name: "Tube Jumpers",
    image: "/image-robert-added/Tube.png",
    link: "/WebGames-master/WebGames-master/tube-jumpers-main/tube-jumpers-main/index.html",
  },
  {
    name: "Phoenix Wright Ace Attorney",
    image: "/WebGames-master/WebGames-master/assets/phoenix-wright-ace-attorney.avif",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/n64test/wit.html",
  },
    {
    name: "Pokemon Games",
    image:"/image-robert-added/poke.png",
    link:"/pokemonindex.html",
  },
    {
    name: "FNAF",
    image: "assets/anan.jpeg",
    link: "games/FNAF/FNAF/index.html",
  },
    {
    name: "Tetris",
    image: "assets/tetres.png",
    link: "games2/game/tetris/index.html",
  },
    {
    name: "FNF Unstable",
    image: "assets/fnf.png",
    link: "games/FNF-Week7-Html5-Test-main/index.html",
  },
    {
    name: "Kirby's Dreamland 3 Maker",
    image: "assets/images3.jpeg",
    link: "games/Kirby's-Dreamland-3-Maker.html",
  },
    {
    name: "Super Smash Flash",
    image: "assets/supersmashflash.jpeg",
    link: "games/flasharchive-main/flasharchive-main/html/supersmashflash.html",
  },
    {
    name: "Bit Life",
    image: "assets/unnamed_480.webp",
    link: "games/ditlifytest/index.html",
  },
    {
    name: "Chrono Trigger",
    image: "assets/Chrono-Trigger.jpeg",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/Chrono-Trigger.html",
  },
    {
    name: "Legend Of Zelda The. A Link To the Past",
    image: "assets/thelegindofzelda.jpg",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/Legend-of-Zelda-The--A-Link-to-the-Past.html",
  },
    {
    name: "Earth Bound",
    image: "assets/earthbound.png",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/EarthBound.html",
  },
    {
    name: "Drill Dozer",
    image: "assets/Drill-Dozer.jpeg",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/DrillDozer(USA).html",
  },
    {
    name: "Super Mario Land 2",
    image: "assets/Super-Mario-Land-2.png",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/SuperMarioLand2DX.html",
  },
    {
    name: "Doom",
    image: "assets/doom.jpeg",
    link: "/Doom-In-Docker-master/Doom-In-Docker-master/doom/public/index.html",
  },
    {
    name: "Legend Of Zelda The Time Lost",
    image: "assets/LegendofZeldaTimeLost.jpeg",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/n64test/index.html",
  },
    {
    name: "Yoshi 64",
    image: "assets/yoshey64.jpeg",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/n64test/youshey.html",
  },
    {
    name: "Paper Mario",
    image: "assets/papermoaro.jpeg",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/n64test/papermaro.html",
  },
    {
    name: "F-Zero X",
    image: "assets/F_ZOERX.jpeg",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/n64test/FZeroX.html",
  },
    {
    name: "Geometry Dash",
    image: "/WebGames-master/WebGames-master/games2/assets/geometry.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/geometry-dash-remastered/index.html",
  },
    {
    name: "Pac Man",
    image: "/WebGames-master/WebGames-master/games2/assets/pacman.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/pacman/index.html",
  },
    {
    name: "Timing Clicker",
    image: "/WebGames-master/WebGames-master/games2/game/a-dance-of-fire-and-ice/splash.png",
    link: "/WebGames-master/WebGames-master/games2/game/a-dance-of-fire-and-ice/index.html",
  },
    {
    name: "Gladi Hoppers",
    image: "/WebGames-master/WebGames-master/assets/glad.jpeg",
    link: "/WebGames-master/WebGames-master/games/Gladihoppers-gh-pages/index.html",
  },
    {
    name: "Subway Surfers",
    image: "/WebGames-master/WebGames-master/games2/assets/subway-surfer.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/subway-surfers/index.html",
  },
    {
    name: "Block Blast",
    image: "/WebGames-master/WebGames-master/assets/blockblast.jpeg",
    link: "/WebGames-master/WebGames-master/games/block-blast-main/index.html",
  },
    {
    name: "Super Hot",
    image: "/WebGames-master/WebGames-master/games2/assets/super-hot.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/superhot/index.html",
  },
    {
    name: "Mario Kart Flash",
    image: "/WebGames-master/WebGames-master/assets/mareokartflach.jpeg",
    link: "/WebGames-master/WebGames-master/games/flasharchive-main/flasharchive-main/html/mariokart.html",
  },
    {
    name: "Factory Balls",
    image: "/WebGames-master/WebGames-master/games2/assets/factory-balls.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/factoryballsforever/index.html",
  },
    {
    name: "Duck Life 4",
    image: "assets/duck-lifde-4.jpeg",
    link: "games/DuckLife4-main/DuckLife4-main/index.html",
  },
    {
    name: "Learn To Fly 2",
    image: "assets/learn-to-fly-2.jpeg",
    link: "games/Learn-To-Fly-2-main/Learn-To-Fly-2-main/index.html",
  },
    {
    name: "Cut The Rope",
    image: "assets/cut-the-rope.jpeg",
    link: "games/CutTheRope-master/CutTheRope-master/index.html",
  },
    {
    name: "Stealing The Diamond",
    image: "assets/stealing-the-dimend.jpeg",
    link: "games/henreystikman/Stealing_the_Diamond.html",
  },
    {
    name: "Slope",
    image: "assets/slope.jpeg",
    link: "games/Slope-Game-main/Slope-Game-main/index.html",
  },
    {
    name: "Worlds Hardest Game",
    image: "/WebGames-master/WebGames-master/games2/assets/worlds-hardest-game.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/worlds-hardest-game/index.html",
  },
    {
    name: "Car Game",
    image: "/WebGames-master/WebGames-master/games2/game/cars-simulator/splash.png",
    link: "/WebGames-master/WebGames-master/games2/game/cars-simulator/index.html",
  },
    {
    name: "10 Minutes Till Dawn",
    image: "/WebGames-master/WebGames-master/games/10-minutes-till-dawn/icon.png",
    link: "/WebGames-master/WebGames-master/games/10-minutes-till-dawn/index.html",
  },
    {
    name: "Doodle Jump",
    image: "games2/assets/doodle.jpg",
    link: "games/flasharchive-main/flasharchive-main/html/doodlejump.html",
  },
    {
    name: "Moto XM3 Spooky Land",
    image: "games2/assets/moto-spooky.jpg",
    link: "games2/game/moto-x3m-spooky-land/index.html",
  },
  {
    name: "Moto XM2",
    image: "games2/assets/motox3m2.jpg",
    link: "games2/game/motox3m2/index.html",
  },
    {
    name: "Moto XM",
    image: "games2/assets/moto-x3m.jpg",
    link: "games2/game/moto-x3m/index.html",
  },
    {
    name: "Jetpack Joyride",
    image: "games2/assets/jetpack-joyride.jpg",
    link: "games2/game/jetpack-joyride/index.html",
  },
    {
    name: "Getaway Shootout",
    image: "games2/assets/getaway-shootout.jpg",
    link: "games2/game/getaway-shootout/index.html",
  },
    {
    name: "Temple Run",
    image: "games2/assets/temple-run.png",
    link: "games2/game/temple-run/index.html",
  },
    {
    name: "GD Nes",
    image: "assets/gd-nes.jpeg",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/gd.html",
  },
     {
    name: "Death Run 3",
    image: "assets/Dethrun3d.jpeg",
    link: "games/3d-gam.zip_unzipped/1-main/index.html",
  },
    {
    name: "Drift Hunters",
    image: "games2/assets/drifthunters.jpg",
    link: "games2/game/drift-hunters/index.html",
  },
   {
    name: "Gun Mayhem",
    image: "assets/gamemntze-gun-mayhem-original-29173-img.png",
    link: "games/gun-mayhem-main/gun-mayhem-main/index.html",
  },
    {
    name: "Super Scratch Bros",
    image: "assets/Super-Scratch-Bros-Beta.jpeg",
    link: "/WebGames-master/WebGames-master/games/SuperScratchBros41.html",
  },
    {
    name: "Henry Stick Man Collectsin",
    image: "assets/Super-Scratch-Bros-Beta.jpeg",
    link: "/henry stick man.html",
  },
  {
    name: "Roof Top Snipers",
    image: "assets/Super-Scratch-Bros-Beta.jpeg",
    link: "/WebGames-master/WebGames-master/games2/game/rooftop-snipers/index.html",
  },
];

mainContentData.forEach(item => {
  let newDiv = `
     <a href=${item.link} class="game game1" >
        <img src=${item.image} alt="" />
        <h3 class="game-text">${item.name}</h3>
      </a>
  `;

  mainContent.innerHTML += newDiv;
});
