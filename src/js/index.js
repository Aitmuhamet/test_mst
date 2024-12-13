import mobileNav from "./modules/mobile-nav.js";
import shrinkBackdropBlock from "./modules/shrink-backdrop.js";
import initScrollClassToggle from "./modules/scroll-observer.js";
import sectionsNavigation from "./modules/sections-navigation.js";

const initFunctions = [
  initScrollClassToggle,
  shrinkBackdropBlock,
  mobileNav,
  sectionsNavigation,
];

// Инициализируем при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  initFunctions.forEach((func) => func());
});

const header = document.querySelector(".header");
const headerNav = document.querySelector(".header__nav");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.classList.add("scrolled");
    headerNav.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    headerNav.classList.remove("scrolled");
  }
});
