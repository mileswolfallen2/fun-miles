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
    link: "games/☁Tetris-Online-Multiplayer☁.html",
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
    name: "vido chat room",
    image: "assets/gamemntze-gun-mayhem-original-29173-img.png",
    link: "chat.html",
  },
  {
    name: "The Shadow Reform",
    image: "assets/L16Q_;$y06Eo%NIp_9${IrNK^d-inGgRhouA.png",
    link: "games/The-Shadow-Reform.html",
  },
  {
    name: "Kirby's Dreamland 3 Maker",
    image: "",
    link: "games/Kirby's Dreamland 3 Maker.html",
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