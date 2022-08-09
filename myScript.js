const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');

const navTooltips = document.querySelectorAll('.nav__tooltip');
const navTooltipList = document.querySelectorAll('.nav__tooltip--list');
console.log(navTooltips);
console.log(navTooltipList);

navToggle.addEventListener('click', () => {

    if (nav.classList.contains("nav__hidden")) {

      nav.classList.remove("nav__hidden");
      hamburger.classList.add("hamburger--close");
      
    } else {
      
      nav.classList.add("nav__hidden");
      hamburger.classList.remove("hamburger--close");

    }
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunc1() {
  document.querySelector("#myDropdown-1").classList.toggle("show-1");
  document.querySelector("#arrow-dwon-1").classList.toggle("arrow--up");
}

function myFunc2() {
  document.querySelector("#myDropdown-2").classList.toggle("show-2");
  document.querySelector("#arrow-dwon-2").classList.toggle("arrow--up");
}
