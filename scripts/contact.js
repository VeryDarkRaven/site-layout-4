// Placeholder
function inputAndTextareaClick () {
  const contactBlock = document.querySelector(".contact");
  const form = contactBlock.querySelector("form");
  const inputs = form.querySelectorAll("input, textarea");

  if (inputs.length > 0) {
    for (let input of inputs) {
      input.addEventListener("click", function() {
        const savePlaceholder = this.placeholder;
        const thisElement = this;

        this.setAttribute("placeholder", "");
        document.addEventListener("mouseup", function() {
          thisElement.setAttribute("placeholder", savePlaceholder);
        })
      })
    }
  }
}

inputAndTextareaClick();