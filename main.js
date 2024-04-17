import './scss/style.scss';



const lampSVG = document.querySelector("#lampSVG");
const lamp = document.getElementById("lampRay");
let intervalId;

lampSVG.addEventListener("click", () => {
  toggleLamp();
});

// Check if lamp is initially on when the page loads
if (lamp.classList.contains("lampOn")) {
  // Start blinking interval if lamp is initially on
  blink();
}

function toggleLamp() {
  lamp.classList.toggle("lampOn");

  // If lamp is on, set up interval for blinking
  if (lamp.classList.contains("lampOn")) {
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

  // Function to perform a single blink
  function performBlink() {
    lamp.classList.add("blinking");
    setTimeout(() => {
      lamp.classList.remove("blinking");
      // Generate a new random interval for the next blink
      const newInterval = getRandomInterval();
      // Call the blink function again after the new interval
      intervalId = setTimeout(performBlink, newInterval);
    }, blinkDuration);
  }

  // Initial blink
  performBlink();
}