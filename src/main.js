// Burger Menu
const menuBtn = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav__list");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    nav.classList.add("nav-open");
    document.body.classList.add("no-scroll");
    nav.classList.remove("nav__list");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    nav.classList.remove("nav-open");
    document.body.classList.remove("no-scroll");
    nav.classList.add("nav__list");
    menuOpen = false;
  }
});

// Navbar Scroll Check + Move To Top Button
const header = document.querySelector("header");
const topBtn = document.querySelector(".top-btn");

let scrollValue = 0;
window.addEventListener("load", (event) => {
  window.addEventListener("scroll", () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st == 0) {
      header.style.backgroundColor = "transparent";
    } else {
      header.style.backgroundColor = "white";
    }

    scrollValue = st <= 0 ? 0 : st;
  });

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 20) {
      topBtn.classList.add("show");
    } else if (window.pageYOffset < 20) {
      topBtn.classList.remove("show");
    }
  });

  topBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
});

// Fade Effect
AOS.init();

// const appear = document.querySelectorAll(".appear");

// let handler = (entries) => {
//   entries.map((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("inview");
//     } else {
//       entry.target.classList.remove("inview");
//     }
//   });
// };

// const io = new IntersectionObserver(handler);

// appear.forEach((a) => {
//   io.observe(a);
// });
