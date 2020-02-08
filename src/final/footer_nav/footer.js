import "./footer.scss";

class FooterSocialIcons {
  constructor(mountPoint, data) {
    this.mountPoint = mountPoint;
    this.data = data;
    this.render();
  }

  render() {
    this.data.forEach(item => {
      let wrapLi = document.createElement("li");
      wrapLi.classList.add(`li_${item}`);

      this.mountPoint.appendChild(wrapLi);
      if (item == "facebook") {
        wrapLi.addEventListener("click", () => {
          alert("Do you want to open Facebook.com?");
        });
      } else if (item == "twitter") {
        wrapLi.addEventListener("click", () => {
          alert("Do you want to open twitter.com?");
        });
      } else if (item == "linkedin") {
        wrapLi.addEventListener("click", () => {
          alert("Do you want to open linkedin.com?");
        });
      } else if (item == "instagram") {
        wrapLi.addEventListener("click", () => {
          alert("Do you want to open instagram.com?");
        });
      }
    });
  }
}

class FooterNav {
  constructor(mountPoint, data) {
    this.mountPoint = mountPoint;
    this.data = data;
    this.render();
  }

  render() {
    this.data.forEach(item => {
      let wrapLi = document.createElement("li");
      wrapLi.classList.add(item);
      wrapLi.textContent = item;
      this.mountPoint.appendChild(wrapLi);
    });
  }
}

export { FooterSocialIcons, FooterNav };
