// ф-я которая берет картинку при нажатии на нее происходит перемещение из одной точки в другую
// каждый клик на нее перемещает на определенное растояние, доходит до конца екрана, двигается в обратном направлении

const imgbox = document.querySelector(".image__wrap");
let coordinates = 0;
let direction = "forward";
let pointEnd = 200;
const isForwardDirection = true;
let winWidth = document.documentElement.clientWidth;

let moveImg = (img, val) => {
  imgbox.style.transform = `translateX(${val}%)`;
  console.log("imgbox.style.transform", imgbox.style.transform);
  imgbox.style.transition = "all 0.5s";
};

let randomVal = () => {
  let value = 0;
  if (direction === "forward") {
    value = Math.floor(Math.random() * 50);
  } else {
    value = Math.floor(Math.random() * 50);
  }
  return value;
};

// window.onload = () => {
//   winWidth = this.innerWidth;
//   console.log("window size:", winWidth);
// };

imgbox.onclick = () => {
  console.log(direction);
  if (direction === "forward") {
    if (coordinates < pointEnd) {
      coordinates += randomVal();
      console.log("direction forward", coordinates);
      moveImg(imgbox, coordinates);
    } else {
      direction = "reverse";
    }
  } else {
    if (coordinates > 0) {
      coordinates -= randomVal();
      console.log("direction backward", coordinates);
      moveImg(imgbox, coordinates);
    } else {
      direction = "forward";
    }
  }
  //   console.log("val", val);
};
