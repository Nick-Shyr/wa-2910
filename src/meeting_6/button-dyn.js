// const btn = document.createElement("button");
// console.log(btn);
const body = document.querySelector("body");
const btn = document.querySelector(".btn");
// const divElement = document.createElement("div");

btn.onclick = () => {
  const divElement = document.createElement("div");
  divElement.style.width = "400px";
  divElement.style.margin = "0 auto";
  divElement.style.fontSize = "30px";
  divElement.textContent = "Hello World from dynamic";
  body.appendChild(divElement);
};
//

//дз
// создать гирлянду, при загрузке страницы промт запрос на сколько лампочек гирлянды
// динамически создать эти эллементы
// при нажатии на каждый елемент, он должен вкл/выкл
// с помощью setInterval заставить їх переключаться
