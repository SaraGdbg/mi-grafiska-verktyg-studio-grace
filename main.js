import "./scss/style.scss";

//--------------------------------------------------- MENU -----------------------------------------------------------//

const menuButton = document.querySelector(".menu-closed");

// Create the navigation links for the open menu
const menuLinks = document.createElement("div");
menuLinks.className = "menu-links";
menuLinks.innerHTML = `
    <a class="hyperlink" href="#">Book a studio</a>
    <a class="hyperlink" href="#">Book a session</a>
    <a class="hyperlink" href="#">Our studios</a>
    <a class="hyperlink" href="#">The vision</a>
    <a class="hyperlink" href="#">Our team</a>
    <a class="hyperlink" href="#">Contact us</a>
    <a class="hyperlink" href="#">Faq</a>
`;

// Create the close menu icon
const closeMenuIcon = document.createElement("span");
closeMenuIcon.classList.add("material-symbols-rounded");
closeMenuIcon.innerHTML = "close";

// Create the open menu
const openMenu = document.createElement("div");
openMenu.className = "open-menu hidden";
openMenu.appendChild(menuLinks);
openMenu.appendChild(closeMenuIcon);
document.body.appendChild(openMenu);

// Add new menu icon to top right corner
const scrollMenu = document.createElement("img");
scrollMenu.src = "./assets/menu/scroll-menu.png";
scrollMenu.setAttribute("width", "35");
scrollMenu.setAttribute("height", "35");
scrollMenu.classList.add("scroll-menu", "hidden");
document.body.appendChild(scrollMenu);

// Event listeners for the open and close menu icons
menuButton.addEventListener("click", () => {
  openMenu.classList.remove("hidden");
});

closeMenuIcon.addEventListener("click", () => {
  openMenu.classList.add("hidden");
});

scrollMenu.addEventListener("click", () => {
  openMenu.classList.remove("hidden");
  scrollMenu.classList.add("hidden");
});

window.addEventListener("scroll", () => {
  const menuButtonRect = menuButton.getBoundingClientRect();
  if (menuButtonRect.bottom < 0 && openMenu.classList.contains("hidden")) {
    scrollMenu.classList.remove("hidden");
  } else {
    scrollMenu.classList.add("hidden");
  }
});

//--------------------------------------------------- COOKIES -----------------------------------------------------------//

const cookieBtn = document.getElementById("cookieBtn");
const cookieBar = document.getElementById("cookieBar");

cookieBtn.addEventListener("click", function () {
  console.log("Knappen klickades!");
  cookieBar.classList.add("hidden");
});

//--------------------------------------------------- LAMP -----------------------------------------------------------//

const lampSVG = document.querySelector("#lampSVG");
const lamp = document.getElementById("lampRay");

let intervalId;

lampSVG.addEventListener("click", () => {
  toggleLamp();
});

// Check if lamp is initially on when the page loads
if (lamp.classList.contains("lampOn")) {
  blink();
}

/**
 * Function to toggle lights on or off
 */
function toggleLamp() {
  lamp.classList.toggle("lampOn");

  if (lamp.classList.contains("lampOn")) {
    blink();
  } else {
    clearInterval(intervalId);
  }
}

/**
 * Function making the light blink every 20 seconds.
 */
function blink() {
  const blinkDuration = 500;

  // Function to generate a new random interval for each blink
  function getRandomInterval() {
    return Math.random() * 20000;
  }

  //Function to perform a single blink
  function performBlink() {
    lamp.classList.add("blinking");
    setTimeout(() => {
      lamp.classList.remove("blinking");

      const newInterval = getRandomInterval();

      intervalId = setTimeout(performBlink, newInterval);
    }, blinkDuration);
  }

  // Initial blink
  performBlink();
}
