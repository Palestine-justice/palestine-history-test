/* ============================================================
   PALESTINE HISTORY WEBSITE - JAVASCRIPT
   ============================================================

   This file only controls the hamburger menu.
   It is deliberately simple so it is easy to maintain.
   ============================================================ */

// Find the hamburger button in the HTML.
const menuButton = document.getElementById("menuButton");

// Find the menu that contains the links.
const mainMenu = document.getElementById("mainMenu");

// When the user clicks the hamburger button, run this code.
menuButton.addEventListener("click", function () {

  // Add the class if it is missing, or remove it if it is present.
  mainMenu.classList.toggle("menu-open");

  // Check whether the menu is now open.
  const menuIsOpen = mainMenu.classList.contains("menu-open");

  // Tell screen readers whether the menu is open or closed.
  menuButton.setAttribute("aria-expanded", menuIsOpen);
});

// Close the menu after the user clicks any menu link.
const menuLinks = mainMenu.querySelectorAll("a");

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mainMenu.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
