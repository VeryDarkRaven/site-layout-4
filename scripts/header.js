// Burger
function burgerClick () {
  const header = document.querySelector(".header");
  const body = document.querySelector("body");
  const burger = header.querySelector(".header__burger");

  burger.onclick = () => {
    burger.classList.toggle("header__burger_active");
    body.classList.toggle("lock");
    header.classList.toggle("header_active");
  }
}

burgerClick();