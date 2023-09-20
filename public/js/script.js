// Navbar

let navbar = document.querySelector(".navbar");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");

menuOpenBtn.onclick = function () {
  navLinks.style.left = "-20px";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-121%";
};

// sidebar submenu open close js code
let Team = document.querySelector(".Team-arrow");
let Specialties = document.querySelector(".Specialties-arrow");
let Offers = document.querySelector(".Offers-arrow");
let LoyaltyPrograms = document.querySelector(".LoyaltyPrograms-arrow");

Team.onclick = function () {
  navLinks.classList.toggle("show1");
};
Specialties.onclick = function () {
  navLinks.classList.toggle("show2");
};
Offers.onclick = function () {
  navLinks.classList.toggle("show3");
};
LoyaltyPrograms.onclick = function () {
  navLinks.classList.toggle("show4");
};
