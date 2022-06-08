const firstSquare = document.querySelector("#firstSquare");
const secondSquare = document.querySelector("#secondSquare");

for (let i = 1; i < 10; i++) {
  let element = document.createElement("div");
  element.textContent = i;
  element.classList = "numbers";
  element.addEventListener("click", () => {
    if (element.parentElement.id == "firstSquare") {
      element.parentNode.removeChild(element);
      secondSquare.appendChild(element);
    } else {
      element.parentNode.removeChild(element);
      firstSquare.appendChild(element);
    }
  });
  firstSquare.appendChild(element);
}
