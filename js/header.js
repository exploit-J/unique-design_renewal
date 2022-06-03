const navOpenBtn = document.querySelector(".nav-btn");
const navCloseBtn = document.querySelector(".close-btn");
const navContain = document.querySelector("nav");

console.log(navCloseBtn);

function navOpenActive() {
  navContain.classList.add("active");
}
navOpenBtn.addEventListener("click", navOpenActive);

function navCloseActive() {
  navContain.classList.remove("active");
}
navCloseBtn.addEventListener("click", navCloseActive);
