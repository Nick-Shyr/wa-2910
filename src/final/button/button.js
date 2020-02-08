import "./button.scss";

let showInput = false;

class Button {
  constructor(
    mountPoint,
    buttonText = "test",
    buttonBackground = "inherit",
    buttonBackgroundHover = "inherit",
    buttonClass
  ) {
    this.mountPoint = mountPoint;
    this.buttonText = buttonText;
    this.buttonBackground = buttonBackground;
    this.buttonBackgroundHover = buttonBackgroundHover;
    this.buttonClass = buttonClass;
    this.init();
  }

  init() {
    this.render();
    this.addEvents();
  }

  render() {
    this.btnWrapper = document.createElement("button");
    this.btnWrapper.classList.add("button-el", `${this.buttonClass}`);
    this.btnWrapper.style.minWidth = "140px";
    this.btnWrapper.style.height = "40px";
    this.btnWrapper.style.backgroundColor = this.buttonBackground;
    this.btnWrapper.style.transition = "transition: all linear 0.3s";
    this.btnWrapper.textContent = this.buttonText;
    this.mountPoint.appendChild(this.btnWrapper);
  }

  addEvents() {
    this.btnWrapper.addEventListener("mouseenter", () => {
      this.btnWrapper.style.backgroundColor = this.buttonBackgroundHover;
    });
    this.btnWrapper.addEventListener("mouseleave", () => {
      this.btnWrapper.style.backgroundColor = this.buttonBackground;
    });
  }
}

class ButtonSearch {
  constructor(mountPoint) {
    this.mountPoint = mountPoint;
    this.init();
  }

  init() {
    this.render();
    this.addEvents();
  }
  render() {
    this.btnWrapper = document.createElement("div");
    this.btnWrapper.classList.add("button__search");

    this.btnInput = document.createElement("input");
    this.btnIcon = document.createElement("div");
    this.btnIcon.classList.add("search-icon");

    this.btnWrapper.appendChild(this.btnInput);
    this.btnWrapper.appendChild(this.btnIcon);
    this.mountPoint.appendChild(this.btnWrapper);
  }
  addEvents() {
    this.btnIcon.addEventListener("click", () => {
      console.log("search-icon click");
      this.showInput = !this.showInput;
      if (this.showInput) {
        if (window.innerWidth < 840) {
          this.btnInput.style.width = "130px";
          this.btnInput.style.padding = "3px";
        } else {
          this.btnInput.style.width = "200px";
          this.btnInput.style.padding = "5px";
        }
      } else {
        this.btnInput.style.width = "0";
        this.btnInput.style.padding = "0";
      }
    });
  }
}

export { Button, ButtonSearch };
