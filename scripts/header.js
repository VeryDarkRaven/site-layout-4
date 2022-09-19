// Burger
function burgerClick () {
  const header = document.querySelector(".header");
  const body = document.querySelector("body");
  const burger = header.querySelector(".header__burger");

  burger.onclick = () => {
    burger.classList.toggle("header__burger_active");
    body.classList.toggle("lock");
    header.classList.toggle("header_active");

    let scroll = window.pageYOffset;

    if (scroll > 0) {
      header.classList.add("header_translucent");
    }
  }
}

burgerClick();



// Header scroll toggle class
window.addEventListener("scroll", function() {
  const header = document.querySelector(".header");
  let scroll = window.pageYOffset;

  if (scroll > 0) {
    header.classList.add("header_translucent");
  } else {
    header.classList.remove("header_translucent");
  }
});

function headerHover () {
  const header = document.querySelector(".header");
  let scroll = 0;
  
  header.onmouseover = () => {
    scroll = window.pageYOffset;

    if (scroll > 0) {
      header.classList.remove("header_translucent");
    }
  }

  header.onmouseout = () => {
    scroll = window.pageYOffset;

    if (scroll > 0) {
      header.classList.add("header_translucent");
    }
  }
}

headerHover();