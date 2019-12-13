const lights = document.querySelectorAll(".btn");
const toggleButton = document.querySelector(".btn-toggle");
let isOneLightOn = false;
let lightsDisabled = true;

const toggleOn = light => {
  //   console.log(light);
  if (light.classList[0] == "traffic-lights__red-block") {
    // console.log("red block");
    light.style.transition = "all 0.5s";
    light.style.backgroundColor = "red";
    light.setAttribute("data-is-active", true);
    isOneLightOn = true;
  }
  if (light.classList[0] == "traffic-lights__yellow-block") {
    // console.log("yellow block");
    light.style.transition = "all 0.5s";
    light.style.backgroundColor = "yellow";
    light.setAttribute("data-is-active", true);
    isOneLightOn = true;
  }
  if (light.classList[0] == "traffic-lights__green-block") {
    // console.log("green block");
    light.style.transition = "all 0.5s";
    light.style.backgroundColor = "green";
    light.setAttribute("data-is-active", true);
    isOneLightOn = true;
  }
};

const toggleOff = light => {
  if (light.classList[0] == "traffic-lights__red-block") {
    // console.log("red block");
    light.style.transition = "all 0.5s";
    light.style.backgroundColor = "rgb(51, 51, 51)";
    light.removeAttribute("data-is-active");
  }
  if (light.classList[0] == "traffic-lights__yellow-block") {
    // console.log("yellow block");
    light.style.transition = "all 0.5s";
    light.style.backgroundColor = "rgb(51, 51, 51)";
    light.removeAttribute("data-is-active");
  }
  if (light.classList[0] == "traffic-lights__green-block") {
    // console.log("green block");
    light.style.transition = "all 0.5s";
    light.style.backgroundColor = "rgb(51, 51, 51)";
    light.removeAttribute("data-is-active");
  }
};
const turnOffAll = () => {
  for (let i = 0; i < lights.length; i++) {
    toggleOff(lights[i]);
  }
};
const whatIsLight = () => {
  let lightOn;
  for (let i = 0; i < lights.length; i++) {
    let isAttr = lights[i].getAttribute("data-is-active");
    if (isAttr) {
      lightOn = lights[i];
    }
  }
  return lightOn;
};

for (let i = 0; i < lights.length; i++) {
  lights[i].onclick = () => {
    console.dir(lights[i]);
    let lightOn = whatIsLight();
    if (isOneLightOn) {
      if (lights[i] == lightOn) {
        toggleOff(lights[i]);
        isOneLightOn = false;
      } else {
        turnOffAll();
        toggleOn(lights[i]);
      }
    } else {
      toggleOn(lights[i]);
    }
  };
}

const changeButtonText = () => {
  let btnText = document.querySelector(".btn-toggle").textContent;
  if (btnText === "Turn OFF") {
    document.querySelector(".btn-toggle").textContent = "Turn ON";
  } else {
    document.querySelector(".btn-toggle").textContent = "Turn OFF";
  }
};
toggleButton.onclick = () => {
  changeButtonText();
  if (lightsDisabled) {
    // lights is disabled on for turn them ON:
    for (let i = 0; i < lights.length; i++) {
      lights[i].disabled = false;
    }
    lightsDisabled = false;
    toggleButton.style.backgroundColor = "rgb(65, 88, 173)";
  } else {
    // lights is non disabled on for turn them OFF:
    turnOffAll();
    for (let i = 0; i < lights.length; i++) {
      lights[i].disabled = true;
    }
    lightsDisabled = true;
    toggleButton.style.backgroundColor = "rgb(29, 40, 78)";
  }
};
window.onload = () => {
  for (let i = 0; i < lights.length; i++) {
    lights[i].disabled = true;
  }
  lightsDisabled = true;
  toggleButton.style.backgroundColor = "rgb(29, 40, 78)";
};
