import './scss/style.scss';

//--------------------------------------------------- MENU -----------------------------------------------------------//

const menuButton = document.querySelector('.menu-closed');

// Create the navigation links for the open menu
const menuLinks = document.createElement('div');
menuLinks.className = 'menu-links';
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
const closeMenuIcon = document.createElement('img');
closeMenuIcon.src = './assets/menu/close-menu-svg.png';
closeMenuIcon.setAttribute('width', '35');
closeMenuIcon.setAttribute('height', '35');

// Create the open menu
const openMenu = document.createElement('div');
openMenu.className = 'open-menu hidden';
openMenu.appendChild(menuLinks);
openMenu.appendChild(closeMenuIcon);
document.body.appendChild(openMenu);

// Event listeners for the open and close menu icons
menuButton.addEventListener('click', () => {
  openMenu.classList.remove('hidden');
});

closeMenuIcon.addEventListener('click', () => {
  openMenu.classList.add('hidden');
});

//--------------------------------------------------- COOKIES -----------------------------------------------------------//

const cookieBtn = document.getElementById('cookieBtn');
const cookieBar = document.getElementById('cookieBar');

cookieBtn.addEventListener('click', function () {
  console.log('Knappen klickades!');
  //cookieBtn.classList.add('cookie-btn-clicked');
  cookieBar.classList.add('hidden');
});

//--------------------------------------------------- BUTTONS CLICKED -----------------------------------------------------------//

// const commissionsBtn = document.getElementById('commissionsBtn');
// const contactBtn = document.getElementById('contactBtn');
// const newsletterBtn = document.getElementById('newsletterBtn');

//--------------------------------------------------- LAMP -----------------------------------------------------------//

const lampSVG = document.querySelector('#lampSVG');
const lamp = document.getElementById('lampRay');
let intervalId;

lampSVG.addEventListener('click', () => {
  toggleLamp();
});

// Check if lamp is initially on when the page loads
if (lamp.classList.contains('lampOn')) {
  // Start blinking interval if lamp is initially on
  blink();
}

function toggleLamp() {
  lamp.classList.toggle('lampOn');

  // If lamp is on, set up interval for blinking
  if (lamp.classList.contains('lampOn')) {
    blink();
  } else {
    clearInterval(intervalId); // Clear interval if lamp is turned off
  }
}

function blink() {
  const blinkDuration = 500; // Duration of each blink (0.5 second)

  // Function to generate a new random interval for each blink
  function getRandomInterval() {
    return Math.random() * 20000; // Random interval between blinks (0 to 20 seconds)
  }

  /**
   *  Function to perform a single blink
   */
  function performBlink() {
    lamp.classList.add('blinking');
    setTimeout(() => {
      lamp.classList.remove('blinking');
      // Generate a new random interval for the next blink
      const newInterval = getRandomInterval();
      // Call the blink function again after the new interval
      intervalId = setTimeout(performBlink, newInterval);
    }, blinkDuration);
  }

  // Initial blink
  performBlink();
}
