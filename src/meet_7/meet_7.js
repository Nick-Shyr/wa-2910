import "./meet_7.scss";

const option = [
  { title: "Option 1" },
  { title: "Option 2" },
  { title: "Option 3" },
  { title: "Option 4" },
  { title: "Option 5" }
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
const openOptions = () => {
  let option = document.querySelector(".button__options");
  let optionItems = document.querySelectorAll(".button__option");
  option.style.visibility = "visible";
  option.style.height = 40 * optionItems.length + "px";
};
const closeOptions = () => {
  let option = document.querySelector(".button__options");
  option.style.visibility = "hidden";
  option.style.height = "0";
};

const toggleOptions = () => {
  let button = document.querySelector(".button__wrap");

  button.addEventListener("click", () => {
    if (isOpen) {
      closeOptions();
    } else {
      openOptions();
    }
    isOpen = !isOpen;
  });
};

const optionClick = () => {
  let option = document.querySelectorAll(".button__option");
  let title = document.querySelector(".button__title");
  option.forEach(item => {
    item.addEventListener("click", () => {
      optionText = item.innerHTML;
      title.textContent = optionText;
      closeOptions();
      isOpen = false;
    });
  });
};

renderButton(container);
renderOptions(container);
toggleOptions();
optionClick();
