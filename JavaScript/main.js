const hamburger = document.querySelector("#hamburger");
const lblock = document.querySelector(".lblock");
const links = document.querySelector("lblock li")

hamburger.addEventListener('click', () => {
    lblock.classList.toggle("open");
})