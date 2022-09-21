// Review stars block
function  searchStarsBlock () {
  const reviewBlock = document.querySelector(".review");
  const columnsBlock = reviewBlock.querySelector(".review__columns");
  const columns = columnsBlock.querySelectorAll(".column");

  for (let column of columns) {
    let starsBlock = column.querySelector(".column__stars");

    createStars(starsBlock);
  }
}

searchStarsBlock();

function createStars (starsBlock) {
  let numStars = starsBlock.textContent;

  starsBlock.textContent = "";

  starsBlock.innerHTML = '<div class="star"></div>'.repeat(5);

  let stars = starsBlock.querySelectorAll(".star");

  for (let i = 0; i < numStars; i++) {
    stars[i].classList.add("star_active");
  }
}