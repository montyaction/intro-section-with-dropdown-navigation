const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');

navToggle.addEventListener('click', () => {

    if (nav.classList.contains("nav__hidden")) {

      nav.classList.remove("nav__hidden");
      hamburger.classList.add("hamburger--close");
      
    } else {
      
      nav.classList.add("nav__hidden");
      hamburger.classList.remove("hamburger--close");

    }
})