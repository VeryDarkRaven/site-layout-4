// Slider
function Slider () {
  const sliderSection = document.querySelector(".slider__section");
  const sliderContainer = sliderSection.querySelector(".container");
  let sliderPages = sliderContainer.querySelectorAll(".slider__page");

  const circlesConteiner = sliderSection.querySelector(".slider__circles");

  let sliderPagesArr = [];
  let visibleNum = 0;
  let previousVisibleNum = 0;

  let sliderClassArr = [];

  for (let i = 0; i < sliderPages.length; i++) {
    sliderPagesArr[i] = sliderPages[i]
    sliderPages[i].remove();
  }

  this.createCircle = function () {
    for (let i = 0; i < sliderPagesArr.length; i++) {
      let div = document.createElement("div");
      circlesConteiner.appendChild(div);
      div.classList.add("circle");
    }

    this.switchingCircleActive(0);
  }

  this.createBlock = function () {
    let div = document.createElement("div");
    div = sliderPagesArr[sliderPagesArr.length - 1];
    sliderContainer.appendChild(div);

    div = sliderPagesArr[visibleNum];
    sliderContainer.appendChild(div);

    div = sliderPagesArr[visibleNum + 1];
    sliderContainer.appendChild(div);
  }

  this.clickCircle = function () {
    const circles = circlesConteiner.querySelectorAll(".circle");

    for (let i = 0; i < circles.length; i++) {
      circles[i].onclick = () => {
        visibleNum = i;
        if (visibleNum !== previousVisibleNum) {
          this.jumpToPage();
          this.switchingCircleActive(visibleNum);
        }
      }
    }
  }

  this.switchingCircleActive = function (num) {
    const circles = circlesConteiner.querySelectorAll(".circle");

    for (let circle of circles) {
      if (circle === circles[num]) {
        circle.classList.add("circle_active");
      } else {
        circle.classList.remove("circle_active");
      }
    }
  }

  this.jumpToPage = function () {
    let newSliderItems = sliderContainer.querySelectorAll(".slider__page");

    let div = document.createElement("div");
    div = sliderPagesArr[visibleNum];

    this.removePositionClass();

    if (previousVisibleNum < visibleNum) {
      newSliderItems[2].remove();

      sliderContainer.appendChild(div);

      if (previousVisibleNum === 0 && visibleNum === sliderPagesArr.length - 1) {
        div = sliderPagesArr[visibleNum - 1];
        sliderContainer.insertBefore(div, sliderContainer.firstElementChild);
      }

      this.addPositionClass();

      setTimeout(function() {
        newSliderItems = sliderContainer.querySelectorAll(".slider__page");

        newSliderItems[0].remove();

        slider.removePositionClass();

        slider.addPositionClass();
      }, 1);

      setTimeout(function() {
        slider.changeHiddenPage();

        slider.removePositionClass();

        slider.addPositionClass();

        previousVisibleNum = visibleNum;
      }, 300);
    }

    if (previousVisibleNum > visibleNum) {
      newSliderItems[0].remove();

      sliderContainer.insertBefore(div, sliderContainer.firstElementChild);

      if (visibleNum !== 0 && previousVisibleNum !== sliderPagesArr.length - 1) {
        newSliderItems[2].remove();
      }
      
      slider.addPositionClass();

      setTimeout(function() {
        if (visibleNum === 0) {
          if (visibleNum === 0 && previousVisibleNum === sliderPagesArr.length - 1) {
            div = sliderPagesArr[visibleNum + 1];
          } else {
            div = sliderPagesArr[sliderPagesArr.length - 1];
          }
        } else {
          div = sliderPagesArr[visibleNum - 1];
        }

        sliderContainer.insertBefore(div, sliderContainer.firstElementChild);
  
        slider.removePositionClass();
  
        slider.addPositionClass();
      }, 1)

      setTimeout(function() {
        slider.removePositionClass();

        slider.changeHiddenPage();

        slider.addPositionClass();

        previousVisibleNum = visibleNum;
      }, 300);
    }
  }

  this.changeHiddenPage = function () {
    let newSliderItems = sliderContainer.querySelectorAll(".slider__page");

    if (previousVisibleNum < visibleNum) {
      if (newSliderItems.length > 1) {
        newSliderItems[0].remove();
      }

      let div = document.createElement("div");
        
      if (visibleNum === 0) {
        div = sliderPagesArr[sliderPagesArr.length - 1];
      } else {
        div = sliderPagesArr[visibleNum - 1];
      }

      sliderContainer.insertBefore(div, sliderContainer.firstElementChild);

      div = document.createElement("div");

      if (visibleNum === sliderPagesArr.length - 1) {
        div = sliderPagesArr[0];
      } else {
        div = sliderPagesArr[visibleNum + 1];
      }

      sliderContainer.appendChild(div);
    }

    if (previousVisibleNum > visibleNum) {
      if (newSliderItems[0] !== sliderPagesArr[visibleNum]) {
        newSliderItems[0].remove();

        let div = document.createElement("div");
        div = sliderPagesArr[visibleNum];

        sliderContainer.insertBefore(div, sliderContainer.firstElementChild);
      }

      let div = document.createElement("div");

      if (visibleNum === 0) {
        div = sliderPagesArr[sliderPagesArr.length - 1];
      } else {
        div = sliderPagesArr[visibleNum - 1];
      }

      sliderContainer.insertBefore(div, sliderContainer.firstElementChild);

      newSliderItems = sliderContainer.querySelectorAll(".slider__page");

      if (newSliderItems[2] !== sliderPagesArr[visibleNum + 1] && newSliderItems[2] !== undefined) {
        newSliderItems[2].remove();
      }

      newSliderItems = sliderContainer.querySelectorAll(".slider__page");

      if (newSliderItems[3] !== undefined) {
        newSliderItems[3].remove();
      }

      div = sliderPagesArr[visibleNum + 1];

      sliderContainer.appendChild(div);
    }
  }

  this.addPositionClass = function () {
    const newSliderItems = sliderContainer.querySelectorAll(".slider__page");

    for (let i = 0; i < newSliderItems.length; i++) {
      newSliderItems[i].classList.add(`slider__position_${i + 1}`);
    }
  }

  this.removePositionClass = function () {
    const newSliderItems = sliderContainer.querySelectorAll(".slider__page");
    let newSliderItemsArr = [];
    
    for (let i = 0; i < newSliderItems.length; i++) {
      newSliderItemsArr[i] = newSliderItems[i];
    }

    newSliderItemsArr.map(item => {
      for (let i = 1; i <= item.classList.length; i++) {
        item.classList.remove(`slider__position_${i}`, `slider__position_${newSliderItemsArr.length + 1}`);
      }
    })
  }

  this.createClassArr = function () {
    const newSliderItems = sliderContainer.querySelectorAll(".slider__page");

    for (let i = 0; i < newSliderItems.length; i++) {
      sliderClassArr.push(`slider__position_${i + 1}`);
    }
  }
}

let slider = new Slider();
slider.createBlock();
slider.addPositionClass();
slider.createCircle();
slider.createClassArr();

slider.clickCircle();



//Height slider section
function sliderSectionHeightCalc () {
  const sliderSection = document.querySelector(".slider__section");
  const sliderPage = sliderSection.querySelector(".slider__page");
  const circlesConteiner = sliderSection.querySelector(".slider__circles");

  const sliderPageHeight = sliderPage.clientHeight;
  const circlesConteinerStyles = getComputedStyle(circlesConteiner);
  const circlesConteinerHeight = circlesConteiner.clientHeight + +circlesConteinerStyles.bottom.slice(0, -2);

  sliderSection.style.minHeight = sliderPageHeight + circlesConteinerHeight + "px";
}

sliderSectionHeightCalc();

window.addEventListener("resize", sliderSectionHeightCalc);