'use strict';




// PRELOADING

const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function () {
  // Tambahkan delay selama 5 detik sebelum menghapus preloader
  setTimeout(function() {
    loadingElement.classList.add("loaded");
    document.body.classList.remove("active");
  }, 3000);
});

document.body.classList.add("active"); // Tambahkan class active saat preloading dimulai


/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}

const navbarLinks = document.querySelectorAll(".navbar-link");

navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Tutup menu
    navToggleBtn.classList.remove("active");
    navbar.classList.remove("active");
    document.body.classList.remove("active"); // Tambahkan jika diperlukan untuk menghilangkan overlay di body
  });
});
