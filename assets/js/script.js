'use strict';




// PRELOADING
const loadingElement = document.querySelector("[data-loading]");

// Mulai timer segera setelah skrip dijalankan
const preloadTimeout = setTimeout(() => {
  loadingElement.classList.add("loaded");
  document.body.classList.remove("active");
}, 5000); // 5000 milidetik = 5 detik

window.addEventListener("load", function () {
  // Jika halaman selesai dimuat sebelum 5 detik, pastikan kelas "active" tetap dihapus dan timer direset
  clearTimeout(preloadTimeout);
  loadingElement.classList.add("loaded");
  document.body.classList.remove("active");
});
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
