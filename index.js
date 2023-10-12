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


function adjustingPadding(){
  const navbar= document.getElementById('navbar');
  const body= document.body;
  const navbarHeight=navbar.clientHeight;
  body.style.paddingTop=navbarHeight+'px';
}

window.addEventListener('load',adjustingPadding);
window.addEventListener('resize',adjustingPadding);

//preloader
window.addEventListener('load', () => {
  // After the page and all assets have loaded
  const preloader = document.querySelector('.preloader');
  const mainSite = document.querySelector('.site-wrap');

  setTimeout(() => {
      preloader.style.display = 'none'; // Hide the preloader
      mainSite.style.display = 'block';  // Show the main site
  }, 3000); // 3 seconds
});