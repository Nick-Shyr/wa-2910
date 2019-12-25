import "./meet_7.scss";

const option = [
  { title: "Option 1" },
  { title: "Option 2" },
  { title: "Option 3" }
];

const container = document.querySelector(".container");
const countOption = option.length;
let isOpen = false;
let optionText;

const renderButton = mountPoint => {
  const buttonWrap = document.createElement("div");
  const buttonTitle = document.createElement("div");
  buttonWrap.classList.add("button__wrap");
  buttonTitle.classList.add("button__title");
  buttonTitle.textContent = "Select option:";

  buttonWrap.appendChild(buttonTitle);
  mountPoint.appendChild(buttonWrap);
};

const renderOptions = mountPoint => {
  const buttonOptionWrap = document.createElement("div");
  buttonOptionWrap.classList.add("button__options");
  for (let i = 0; i < countOption; i++) {
    let buttonOption = document.createElement("div");
    buttonOption.classList.add("button__option");
    buttonOption.textContent = option[i].title;

    buttonOptionWrap.appendChild(buttonOption);
  }
  mountPoint.appendChild(buttonOptionWrap);
};

const toggleOptions = () => {
  let button = document.querySelector(".button__wrap");
  let option = document.querySelector(".button__options");
  button.addEventListener("click", () => {
    if (isOpen) {
      option.style.visibility = "hidden";
    } else {
      option.style.visibility = "visible";
    }
    isOpen = !isOpen;
    console.log(isOpen);
  });
};

const optionClick = () => {
  let option = document.querySelectorAll(".button__option");
  option.forEach(item => {
    item.addEventListener("click", () => {
      optionText = item.innerHTML;
    });
  });
  let textButton = document.querySelectorAll(".button__title");
  textButton.textContent = optionText;
  console.log(optionText);
  console.log(textButton);
};

renderButton(container);
renderOptions(container);
toggleOptions();
optionClick();
