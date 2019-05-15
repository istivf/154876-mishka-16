var mainNav = document.querySelector(".main-nav");
var infoNav = document.querySelector(".info-nav");
var navToggle = document.querySelector(".main-nav__toggle");

mainNav.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (mainNav.classList.contains("main-nav--closed") || infoNav.classList.contains("info-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
    infoNav.classList.remove("info-nav--closed");
    infoNav.classList.add("info-nav--opened");
  } else {
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
    infoNav.classList.remove('info-nav--opened');
    infoNav.classList.add('info-nav--closed');
  }

  // if (infoNav.classList.contains("info-nav--closed")) {
  //   infoNav.classList.remove("info-nav--closed");
  //   infoNav.classList.add("info-nav--opened");
  // } else {
  //   infoNav.classList.remove('info-nav--opened');
  //   infoNav.classList.add('info-nav--closed');
  // }
});
