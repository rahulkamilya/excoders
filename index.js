const hamburgerMenu = document.getElementById("hamburger-menu")
const hamburgerMenuBtn = document.getElementById("hamburger-menu-btn")

hamburgerMenuBtn.addEventListener("click", () => {
  hamburgerMenu.style.display = hamburgerMenu.style.display === "block" ? "none" : "block"
  if (hamburgerMenu.style.transform === 'translateX(0%)') {
    hamburgerMenu.style.transform = 'translateX(100%)';
  } else {
    hamburgerMenu.style.transform = 'translateX(0%)';
  }
})
