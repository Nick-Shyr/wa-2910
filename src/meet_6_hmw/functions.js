const garlandBlock = document.querySelector(".garland-block__wrap");
const body = document.querySelector("body");
const btn = document.createElement("div");
const btnToggle = document.createElement("div");
const lightsWrap = document.createElement("div");
let countLights;
let isActive = false;
let isActiveLight;
let lightsArray = [];
const time = 500;
let isToggle = false;

btn.classList.add("garland-block__button");
btnToggle.classList.add("garland-block__button", "toggle");
btn.textContent = "Start add garland";
btnToggle.textContent = "Toggle";
lightsWrap.classList.add("garland-block__lights");
garlandBlock.appendChild(btn);
garlandBlock.appendChild(btnToggle);

btn.onclick = () => {
  countLights = Number(prompt("How much you want lights in garland?"));
  garlandBlock.appendChild(lightsWrap);
  for (let i = 0; i < countLights; i++) {
    const light = document.createElement("div");
    light.classList.add("garland-block__light");
    lightsWrap.appendChild(light);
  }

  return (lightsArray = document.querySelectorAll(".garland-block__light"));
};

const turnOff = lights => {
  for (let i = 0; i < lights.length; i++) {
    lights[i].style.backgroundColor = "rgb(177, 177, 177)";
    lightsArray[i].classList.remove("active");
    lightsArray[i].style.transition = `all ${time}ms`;
  }
};
const getRandomNumber = max => {
  return Math.floor(Math.random() * max);
};
const getRandomColor = () => {
  return `rgb(${getRandomNumber(255)}, ${getRandomNumber(
    255
  )}, ${getRandomNumber(255)})`;
};
btnToggle.onclick = () => {
  isToggle = !isToggle;
  console.log(lightsArray.length());
  // lightsArray = document.querySelectorAll(".garland-block__light");
  if (isToggle) {
    for (let i = 0; i < lightsArray.length; i++) {
      lightsArray[i].style.disable = true;
    }
  } else {
    for (let i = 0; i < lightsArray.length; i++) {
      lightsArray[i].onclick = () => {
        if (isActive) {
          if (lightsArray[i].classList.contains("active")) {
            lightsArray[i].classList.remove("active");
            lightsArray[i].style.backgroundColor = "rgb(177, 177, 177)";
            lightsArray[i].style.transition = `all ${time}ms`;
            isActive = false;
          } else {
            turnOff(lightsArray);
            lightsArray[i].style.backgroundColor = getRandomColor();
            lightsArray[i].classList.add("active");
            lightsArray[i].style.transition = `all ${time}ms`;
          }
        } else {
          lightsArray[i].style.backgroundColor = getRandomColor();
          lightsArray[i].classList.add("active");
          lightsArray[i].style.transition = `all ${time}ms`;
          isActive = true;
        }
      };
    }
  }
};
