// toggle
const navbarNav = document.querySelector(".navbar-nav");
// toggle onlick
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// // close menu
// const navbarNav = document.querySelector("#hamburger-menu");

// document.addEventListener('click', function(e) {

//   if (!hamburger.constains(e.target) && !navbarNav.contains(e.target)) {
//     navbarNav.classList.remove('active');
//   }
// });
