/* ====================================================================
  HIER EINFACH NAMEN & TEXT ÄNDERN
  ==================================================================== */
const CONFIG = {
  // Große Überschrift
  title: "Alles Gute zum Geburtstag!",
  // Kleiner Untertitel
  subtitle: "",
  // Geburtstagsgruß (gerne lang, wird automatisch schön)
  message:
    "Ich wünsche dir von Herzen, dass du immer glücklich und gesund bist. " +
    "Ich wünsche dir, dass du ganz bald deinen inneren Frieden findest. " +
    "Ich wünsche dir, dass du dich immer geliebt und geborgen fühlst. " +
    "Ich wünsche dir nur das Allerbeste. Du schaffst! wir schaffen!",
  // Absender
  signature:"— Mit ganz viel Herzlichkeit",
  // Kleiner Text ganz unten
  footer: "",
};

/* ==================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  createBalloons();
  runPreloader();
  bindSurpriseButton();
});

function applyConfig() {
  document.getElementById("titleText").textContent = CONFIG.title;
  document.getElementById("subtitleText").textContent = CONFIG.subtitle;
  document.getElementById("messageText").textContent = CONFIG.message;
  document.getElementById("signatureText").textContent = CONFIG.signature;
  document.getElementById("footerText").textContent = CONFIG.footer;
}

function createBalloons() {
  const container = document.getElementById("balloons");
  const colors = ["#ff9a76", "#ffd4c2", "#e8763e", "#f7c59f", "#ffb6a0"];
  const count = 12;

  for (let i = 0; i < count; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    const size = 34 + Math.random() * 26;
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size * 1.25}px`;
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.background = colors[i % colors.length];
    balloon.style.animationDuration = `${9 + Math.random() * 8}s`;
    balloon.style.animationDelay = `${Math.random() * 10}s`;
    container.appendChild(balloon);
  }
}

function runPreloader() {
  const preloader = document.getElementById("preloader");
  const fill = document.getElementById("preloaderFill");
  const mainContent = document.getElementById("mainContent");
  document.body.classList.add("no-scroll");

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 18 + 8;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      fill.style.width = "100%";
      setTimeout(finishPreloading, 350);
    } else {
      fill.style.width = `${progress}%`;
    }
  }, 220);

  function finishPreloading() {
    preloader.classList.add("hide");
    document.body.classList.remove("no-scroll");
    mainContent.classList.add("reveal");
    launchConfetti(0.6);
  }
}

function bindSurpriseButton() {
  const btn = document.getElementById("surpriseBtn");
  btn.addEventListener("click", () => {
    launchConfetti(1);
  });
}

function launchConfetti(strength) {
  if (typeof confetti !== "function") return;
  const colors = ["#ff9a76", "#ffd4c2", "#e8763e", "#fff8f0", "#f7c59f"];

  confetti({
    particleCount: 90 * strength,
    spread: 80,
    startVelocity: 45,
    origin: { y: 0.6 },
    colors,
  });

  setTimeout(() => {
    confetti({
      particleCount: 60 * strength,
      angle: 60,
      spread: 70,
      origin: { x: 0, y: 0.6 },
      colors,
    });
    confetti({
      particleCount: 60 * strength,
      angle: 120,
      spread: 70,
      origin: { x: 1, y: 0.6 },
      colors,
    });
  }, 200);
}
