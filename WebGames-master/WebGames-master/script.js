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
    name: "vex 5",
    image: "assets/vex-5.jpeg",
    link: "games/vex5/index.html",
  },
  {
    name: "slope",
    image: "assets/slope.jpeg",
    link: "games/Slope-Game-main/Slope-Game-main/index.html",
  },
  {
    name: "Stealing the Diamond",
    image: "assets/stealing-the-dimend.jpeg",
    link: "games/henreystikman/Stealing_the_Diamond.html",
  },
  {
    name: "fnf not stabel we will work on it",
    image: "assets/fnf.png",
    link: "games/FNF-Week7-Html5-Test-main/index.html",
  },
  {
    name: "Tetris",
    image: "assets/tetres.png",
    link: "games2/game/tetris/index.html",
  },
  {
    name: "Basketball Legends 2020",
    image: "assets/2020.avif",
    link: "games/Basketball-Legends-2020-gh-pages/Basketball-Legends-2020-gh-pages/index.html",
  },
  {
    name: "tanuki sunset",
    image: "assets/taunki.jpeg",
    link: "games/tanuki-sunset-master/index.html",
  },
  {
    name: "fnaf",
    image: "assets/anan.jpeg",
    link: "games/FNAF/FNAF/index.html",
  },
  {
    name: "Super Scratch Bros Beta 4",
    image: "assets/Super-Scratch-Bros-Beta.jpeg",
    link: "games/Super-Scratch-Bros-Beta-4-(2).html",
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
    name: "supersmashflash",
    image: "assets/supersmashflash.jpeg",
    link: "games/flasharchive-main/flasharchive-main/html/supersmashflash.html",
  },
  {
    name: "drift-hunters",
    image: "assets/512x512bb.jpg",
    link: "games/drift-hunters-main/index.html",
  },
  {
    name: "dit life",
    image: "assets/unnamed_480.webp",
    link: "games/ditlifytest/index.html",
  }, {
    name: "Deth run 3d",
    image: "assets/Dethrun3d.jpeg",
    link: "games/3d-gam.zip_unzipped/1-main/index.html",
  },
  {
    name: "Pokemon - Red Version",
    image: "assets/pokemon-red.jpeg",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/Pokemon-Red-Version.html",
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
    name: "Legend-of-Zelda-The--A-Link-to-the-Past",
    image: "assets/thelegindofzelda.jpg",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/Legend-of-Zelda-The--A-Link-to-the-Past.html",
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
    link: "games2/game/tiny-fishing/index.html",
  },
  {
    name: "idle-breakout",
    image: "games2/assets/idle-breakout.jpg",
    link: "games2/game/idle-breakout/index.html",
  },
  {
    name: "getaway-shootout",
    image: "games2/assets/getaway-shootout.jpg",
    link: "games2/game/getaway-shootout/index.html",
  },
  {
    name: "jetpack-joyride",
    image: "games2/assets/jetpack-joyride.jpg",
    link: "games2/game/jetpack-joyride/index.html",
  },
  {
    name: "just-fall",
    image: "games2/assets/just-fall.jpg",
    link: "games2/game/just-fall/index.html",
  },
  {
    name: "monkey-mart",
    image: "games2/assets/monkey-mart.png",
    link: "games2/game/monkey-mart/index.html",
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
    name: "SuperMarioLand2",
    image: "assets/Super-Mario-Land-2.png",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/SuperMarioLand2DX.html",
  },
  {
    name: "doom",
    image: "assets/doom.jpeg",
    link: "/Doom-In-Docker-master/Doom-In-Docker-master/doom/public/index.html",
  },
  {
    name: "doodle-jump ",
    image: "games2/assets/doodle.jpg",
    link: "games/flasharchive-main/flasharchive-main/html/doodlejump.html",
  },
  {
    name: "pokemon f red",
    image: "assets/pokemonfred.jpeg",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/Pokemon_FireRedVersion.html",
  },
  {
    name: "Legend of Zelda - Time Lost",
    image: "assets/LegendofZeldaTimeLost.jpeg",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/n64test/index.html",
  },
  {
    name: "youshey 64",
    image: "assets/yoshey64.jpeg",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/n64test/youshey.html",
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
    name: "10-minutes-till-dawn",
    image: "/WebGames-master/WebGames-master/games/10-minutes-till-dawn/icon.png",
    link: "/WebGames-master/WebGames-master/games/10-minutes-till-dawn/index.html",
  },
  {
    name: "pokemon emerald",
    image: "/WebGames-master/WebGames-master/games2/assets/pok-emerald.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/pokemon/emerald/index.html",
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
    name: "pokemon sapphire",
    image: "/WebGames-master/WebGames-master/assets/61p+1+PYSML.jpg",
    link: "/WebGames-master/WebGames-master/pokemon-netplay/pokemon/sapphire/index.html",
  },
  {
    name: "pokemon sapphire",
    image: "/WebGames-master/WebGames-master/assets/glad.jpeg",
    link: "/WebGames-master/WebGames-master/games/Gladihoppers/index.html",
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
