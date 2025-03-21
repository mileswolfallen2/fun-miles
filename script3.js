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

const mainContentData = [
  {
    name: "Back",
    image: "/WebGames-master/WebGames-master/assets/home.png",
    link: "/WebGames-master/WebGames-master/index.html",
  },
  {
    name: "Pokemon Red",
    image: "WebGames-master/WebGames-master/assets/pokemon-red.jpeg",
    link: "/webretro-master/webretro-master/embed/Pokemon-Red-Version.html",
  },
  {
    name: "Pokemon Fire Red",
    image: "WebGames-master/WebGames-master/assets/pokemonfred.jpeg",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/Pokemon_FireRedVersion.html",
  },
  {
    name: "Pokemon Emerald",
    image: "/WebGames-master/WebGames-master/games2/assets/pok-emerald.jpg",
    link: "/WebGames-master/WebGames-master/games2/game/pokemon/emerald/index.html",
  },
  {
    name: "Pokemon Sapphire",
    image: "/WebGames-master/WebGames-master/assets/61p+1+PYSML.jpg",
    link: "/WebGames-master/WebGames-master/pokemon-netplay/pokemon/sapphire/index.html",
  },
  {
    name: "Pokemon Pearl",
    image: "/image-robert-added/peral.webp",
    link: "/Pokemon-Pearl-main/Pokemon-Pearl-main/index.html",
  },
    {
    name: "Pokemon Diamond",
    image: "/image-robert-added/daimond.webp",
    link: "/Pokemon-Diamond-main/Pokemon-Diamond-main/index.html",
  },
  {
    name: "Pokemon Gold",
    image: "/WebGames-master/WebGames-master/assets/pokemongold.webp",
    link: "/wedrowemdlemtest/webretro-master/webretro-master/embed/Pokemon-GoldVersion.html",
  },
  {
    name: "Cat",
    image: "/image-robert-added/pokefun.webp",
    link: "/cat.html",
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
