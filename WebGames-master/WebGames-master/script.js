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
    name: "Tic Tac Toes",
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
    name: "Hang Man",
    image: "assets/hangman.png",
    link: "https://hangmangame02.netlify.app/",
  },
  {
    name: "Snow Rider",
    image: "assets/snnowriders3d.jpeg",
    link: "games/Snow-Rider3D-main/Snow-Rider3D-main/index.html",
  },
  {
    name: "HexGL",
    image: "assets/HexGL256.png",
    link: "games/HexGL-master/HexGL-master/index.html",
  },
  {
    name: "Tunnel Rush",
    image: "assets/tunelrush.jpeg",
    link: "games/zTunnel-Rush.html",
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
    name: "The Shadow Reform",
    image: "assets/kaertt.png",
    link: "games/The-Shadow-Reform.html",
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
    name: "BackRooms",
    image: "/WebGames-master/WebGames-master/games2/game/backrooms/Backrooms-Games.webp",
    link: "/WebGames-master/WebGames-master/games2/game/backrooms/index.html",
  },
  {
    name: "Thumb Fighter",
    image: "/WebGames-master/WebGames-master/assets/thum.jpeg",
    link: "/WebGames-master/WebGames-master/games/thumb-fighter-main/index.html",
  },
  {
    name: "Bob The Robber 2",
    image: "/WebGames-master/WebGames-master/games2/assets/bob-the-robber-2.png",
    link: "/WebGames-master/WebGames-master/games2/game/bob-the-robber-2/index.html",
  },
  {
    name: "Vex3",
    image: "/WebGames-master/WebGames-master/games2/assets/vex3.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/vex3/index.html",
  },
  {
    name: "Vex4",
    image: "/WebGames-master/WebGames-master/games2/assets/vex4.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/vex4/index.html",
  },
  {
    name: "Vex5",
    image: "/WebGames-master/WebGames-master/games2/assets/vex5.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/vex5/index.html",
  },
  {
    name: "Vex6",
    image: "/WebGames-master/WebGames-master/games2/assets/vex6.jpeg",
    link: "/WebGames-master/WebGames-master/games2/game/vex6/index.html",
  },
  {
    name: "N-Gon",
    image: "/WebGames-master/WebGames-master/assets/n-gon.png",
    link: "/WebGames-master/WebGames-master/n-gon-master/index.html",
  },
  {
    name: "Chess",
    image: "/WebGames-master/WebGames-master/games2/assets/chess.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/chess/index.html",
  },
 {
    name: "Cluster Rush",
    image: "/WebGames-master/WebGames-master/games2/assets/cluster-rush.png",
    link: "/WebGames-master/WebGames-master/games2/game/cluster-rush/index.html",
  },
  {
    name: "Awesome Tank 2",
    image: "/WebGames-master/WebGames-master/games2/assets/at2.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/awesome-tanks-2/index.html",
  },
  {
    name: "Stickman Hook",
    image: "/WebGames-master/WebGames-master/games2/assets/stickman-hook.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/stickman-hook/index.html",
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
    name: "Achievement Unlocked",
    image: "/image-robert-added/image-robert-added/achievementunlocked.png",
    link: "/WebGames-master/WebGames-master/games/townmain.html",
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
