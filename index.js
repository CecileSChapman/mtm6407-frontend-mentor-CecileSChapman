const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(function(dropdownToggle){

    dropdownToggle.addEventListener("shown.bs.dropdown", function() {

        const dropdownIcon = dropdownToggle.querySelector('.dropdown-icon');
        dropdownIcon.src = "images/icon-arrow-up.svg";
    });
    dropdownToggle.addEventListener("hidden.bs.dropdown", function() {

        const dropdownIcon = dropdownToggle.querySelector('.dropdown-icon');
        dropdownIcon.src = "images/icon-arrow-down.svg";
    });
});

const menu = document.querySelector(".navMenu");
const menuItems = document.querySelectorAll(".nav-link");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const collapsedElements = document.querySelectorAll('.collapse:not(.show)');
const overlay = document.querySelector('.menuOverlay');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navBar = document.querySelector(".navbar");
const mainContent = document.querySelector(".main-content");
const backgroundOverlay = document.querySelector(".background-overlay")
// overlay.classList.remove("d-flex");
overlay.style.height = "0";
backgroundOverlay.style.display = "none";

function toggleMenu() {
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    console.log('close')
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";    
    // overlay.style.display = "none";
    overlay.classList.remove("d-flex");
    overlay.style.height = "0";
    backgroundOverlay.style.display = "none";
   

    collapsedElements.forEach(function(element) {
      element.style.display = 'none'; 
    });

  } else {
    menu.classList.add("show");
    console.log('open')
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";    
    overlay.style.display = "contents";
    overlay.classList.add("d-flex");
    overlay.style.height = "100vh";
    backgroundOverlay.style.display = "block";

    collapsedElements.forEach(function(element) {
      element.style.display = 'block'; 
    });

  }
}

hamburger.addEventListener("click", toggleMenu);



