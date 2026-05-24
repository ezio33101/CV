const yearElement = document.querySelector("#year");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

yearElement.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    nav.classList.remove("open");
  }
});
