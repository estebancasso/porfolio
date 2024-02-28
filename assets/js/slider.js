const btnLeft = document.querySelector(".btn-left");
const btnRigth = document.querySelector(".btn-rigth");
const slider = document.querySelector("#slider");
const sliderSection = document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", (e) => moveToLeft());
btnRigth.addEventListener("click", (e) => moveToRigth());

setInterval(() => {
  moveToRigth()
}, 3000);

let operation = 0;
let withImg = 100 / sliderSection.length;
let counter = 0;

function moveToRigth() {
  if (counter >= sliderSection.length - 1) {
    counter = 0;
    operation = 0;
    slider.style.transform = `translate(-${operation}%)`;
    slider.style.transition = "none";
    return;
  }
  counter++;
  operation += withImg;
  slider.style.transform = `translate(-${operation}%)`;
  slider.style.transition = "all ease .6s";
}
function moveToLeft() {
  counter--;
  if (counter < 0) {
    counter = sliderSection.length - 1;
    operation = withImg * (sliderSection.length - 1);
    slider.style.transform = `translate(-${operation}%)`;
    slider.style.transition = "none";
    return;
  }
  operation -= withImg;
  slider.style.transform = `translate(-${operation}%)`;
  slider.style.transition = "all ease .6s";
}
