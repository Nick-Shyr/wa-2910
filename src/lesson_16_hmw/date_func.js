let mountPoint = document.querySelector("body");

const getRandomNumber = max => {
  return Math.floor(Math.random() * max);
};
const getRandomColor = () => {
  return `rgb(${getRandomNumber(255)}, ${getRandomNumber(
    255
  )}, ${getRandomNumber(255)})`;
};

export class Clock {
  constructor(mountPoint, bgColor = getRandomColor()) {
    this.mountPoint = mountPoint;
    this.bgColor = bgColor;
    this.el;
    console.log(this);
  }

  render() {
    this.dateWrap = document.createElement("div");
    this.dateWrap.classList.add("date__wrap");
    this.dateWrap.style.backgroundColor = `${this.bgColor}`;
    this.dateHours = document.createElement("div");
    this.dateMinutes = document.createElement("div");
    this.dateSecond = document.createElement("div");
    this.dateColon = document.createElement("div");
    this.dateColon2 = document.createElement("div");

    this.dateWrap.classList.add("date__wrap");
    this.dateHours.classList.add("date__hours");
    this.dateMinutes.classList.add("date__min");
    this.dateColon.classList.add("date__colon");
    this.dateColon2.classList.add("date__colon");
    this.dateSecond.classList.add("date__sec");

    this.dateWrap.appendChild(this.dateHours);
    this.dateWrap.appendChild(this.dateColon);
    this.dateWrap.appendChild(this.dateMinutes);
    this.dateWrap.appendChild(this.dateColon2);
    this.dateWrap.appendChild(this.dateSecond);

    this.mountPoint.appendChild(this.dateWrap);
  }

  currentDate() {
    this.dateWrap = document.querySelector(".date__wrap");
    this.dateHours = document.querySelector(".date__hours");
    this.dateMinutes = document.querySelector(".date__min");
    this.dateSecond = document.querySelector(".date__sec");
    this.dateColon = document.querySelectorAll(".date__colon");

    this.dateColon.forEach(item => {
      item.textContent = ":";
    });

    setInterval(() => {
      const currentDate = new Date();
      const hours = String(currentDate.getHours());
      const min = String(currentDate.getMinutes());
      const sec = String(currentDate.getSeconds());

      if (hours.length == 1) {
        this.dateHours.textContent = "0" + sec;
      } else {
        this.dateHours.textContent = hours;
      }
      if (min.length == 1) {
        this.dateMinutes.textContent = "0" + min;
      } else {
        this.dateMinutes.textContent = min;
      }
      if (sec.length == 1) {
        this.dateSecond.textContent = "0" + sec;
      } else {
        this.dateSecond.textContent = sec;
      }
    }, 1000);
  }

  clickForChangeBg() {
    this.dateWrap = document.querySelector(".date__wrap");
    this.dateWrap.style.cursor = "pointer";
    this.dateWrap.addEventListener("click", () => {
      let bg = getRandomColor();
      this.dateWrap.style.backgroundColor = `${bg}`;
    });
  }
}
