import "./final.scss";
import "./media_queries.scss";
import { sentRequest } from "./fetch/fetch";
import { slideShow } from "./slideshow/slideshow";
import { Button, ButtonSearch } from "./button";
import { Post, makePost, Posts } from "./posts";
import {
  navData,
  navDataGenre,
  navFooter,
  footerSocMedia
} from "./static_content";
import { FooterSocialIcons, FooterNav } from "./footer_nav/";
let sliderCount = 1;
let navMiniIsShow = false;

const wrap = document.querySelector(".main__wrap");
const wrapSlider = wrap.querySelector(".main__slider");
const wrapContent = wrap.querySelector(".main__content");
const wrapFooter = wrap.querySelector(".footer");
let activeNav;

let titlePage = wrap.querySelectorAll(".title-page");
titlePage.forEach(element => {
  element.textContent = "THEMOVIEBOX";
});

sentRequest()
  .then(data => {
    console.log(data);
    slideShow(wrapSlider, data.featured);
    // makePost(wrapContent, data.list[0]);
    new Posts(wrapContent, data);
    new Posts(wrapContent, data);
  })
  .then(() => {
    let wrapSliderBottom = wrapSlider.querySelector(".slider__bottom");
    makeButtons(wrapSliderBottom);
    makeButtonsLogin(wrapSlider);
    makeNav();
    setFooterNav();
    leftButtonSlide();
    rightButtonSlide();
  })
  .then(() => {
    let btnWatchMovienew = wrapSlider.querySelector(".button_watch");
    btnWatchMovienew.addEventListener("click", () => {
      console.log("button_watch");
    });
    let btnVievInfo = wrapSlider.querySelector(".button_info");
    btnVievInfo.addEventListener("click", () => {
      console.log("button_info");
    });
    let btnAddWishlist = wrapSlider.querySelector(".button_wishlist");
    btnAddWishlist.addEventListener("click", () => {
      console.log("button_wishlist");
    });
    let btnSignUp = wrapSlider.querySelector(".button_signUp");
    btnSignUp.addEventListener("click", () => {
      console.log("button_signUp");
    });
    let btnLogin = wrapSlider.querySelector(".button_login");
    btnLogin.addEventListener("click", () => {
      console.log("button_login");
    });
  });

const makeButtons = mountPoint => {
  const btnWatchMovienew = new Button(
    mountPoint,
    "WATCH MOVIE",
    "#ff0079",
    "#8d0142",
    "button_watch"
  );

  const btnVievInfo = new Button(
    mountPoint,
    "View info",
    "inherit",
    "rgba(255,255,255,0.4)",
    "button_info"
  );

  const btnAddWishlist = new Button(
    mountPoint,
    "\u002B Add to wishlist",
    "inherit",
    "rgba(255,255,255,0.4)",
    "button_wishlist"
  );
};

const makeButtonsLogin = mountPoint => {
  const btnSignUp = new Button(
    mountPoint,
    "Sign up",
    "#ff0079",
    "#8d0142",
    "button_signUp"
  );
  const btnLogin = new Button(
    mountPoint,
    "Log in",
    "inherit",
    "rgba(255,255,255,0.4)",
    "button_login"
  );

  const btnSearch = new ButtonSearch(mountPoint);
};

const makeNav = () => {
  let navWrapUl = wrap.querySelector(".nav__ul");
  navData.forEach(item => {
    let tempLi = document.createElement("li");
    tempLi.textContent = item;
    let itemReg = item.replace(/\s+/g, "").trim();
    tempLi.classList.add(itemReg);
    navWrapUl.appendChild(tempLi);
    if (item == "Genre") {
      let arrow = document.createElement("div");
      arrow.classList.add("genre-list__arrow");
      tempLi.appendChild(arrow);
      makeNavGenreList(tempLi);
    }
  });
  setEventToNavActive(navWrapUl);

  let navMini = wrap.querySelector(".btn__small");
  navMini.addEventListener("click", () => {
    let spans = navMini.querySelectorAll("span");
    navMiniIsShow = !navMiniIsShow;
    if (navMiniIsShow) {
      // navWrapUl.style.minHeight = "130px";
      navWrapUl.style.height = "170px";
      spans.forEach(item => {
        item.classList.add("activeClose");
      });
      spans.classList.add("activeClose");
    } else {
      // navWrapUl.style.minHeight = "0";
      navWrapUl.style.height = "0";
      spans.forEach(item => {
        item.classList.remove("activeClose");
      });
    }
  });
};

const makeNavGenreList = mountPoint => {
  let arrow = mountPoint.querySelector(".genre-list__arrow");

  let navGenreList = document.createElement("div");
  navGenreList.classList.add("genre-list");

  navDataGenre.forEach(item => {
    let genreList = document.createElement("div");
    genreList.textContent = item;
    navGenreList.appendChild(genreList);
  });
  mountPoint.appendChild(navGenreList);

  mountPoint.addEventListener("mouseover", () => {
    if (window.innerWidth < 640) {
      navGenreList.style.height = "40px";
    } else {
      navGenreList.style.height = "120px";
    }

    navGenreList.style.border = "1px solid #80818a";
    arrow.style.transform = "rotate(180deg)";
  });
  mountPoint.addEventListener("mouseout", () => {
    if (window.innerWidth < 640) {
      navGenreList.style.height = "40px";
    } else {
      navGenreList.style.height = "0";
    }
    navGenreList.style.border = "none";
    arrow.style.transform = "rotate(0)";
  });
};

const setEventToNavActive = mountPoint => {
  let arrLi = mountPoint.querySelectorAll("li");
  let arrGenreList = mountPoint.querySelectorAll(".genre-list div");

  for (let i = 0; i < arrLi.length; i++) {
    let item = arrLi[i];
    if (i == 0) {
      item.classList.add("active");
      activeNav = item;
    }
    item.addEventListener("click", $event => {
      if (item !== activeNav) {
        arrLi.forEach(element => {
          element.classList.remove("active");
        });
        if (
          event.target.textContent == "Fantasy" ||
          event.target.textContent == "Comics" ||
          event.target.textContent == "Fairytail"
        ) {
          arrGenreList.forEach(element => {
            console.log(element);
            element.classList.remove("activeGenre");
          });
          event.target.classList.add("activeGenre");
        } else {
          arrGenreList.forEach(element => {
            element.classList.remove("activeGenre");
          });
        }
        item.classList.add("active");
        activeNav = event.target;
      }
    });
  }
};

const setFooterNav = () => {
  let wrapUl = wrapFooter.querySelector(".footer__media-ul");
  let wrapNav = wrapFooter.querySelector(".footer__nav-ul");
  new FooterSocialIcons(wrapUl, footerSocMedia);
  new FooterNav(wrapNav, navFooter);
};

const leftButtonSlide = () => {
  let btn = wrap.querySelector(".slider__btn_left");

  btn.addEventListener("click", () => {
    // let wrapSliderBlock = wrapSlider.querySelector(".slider__block");
    // wrapSliderBlock.style.opacity = "0";

    sentRequest()
      .then(data => {
        console.log("left button click ->", data);
        let newWrapSlide = document.createElement("div");
        newWrapSlide.classList.add("new-slide", `count-slide_${sliderCount}`);
        newWrapSlide.style.left = "100%";
        newWrapSlide.style.zIndex = `${parseInt(newWrapSlide.style.zIndex) +
          1}`;
        wrapSlider.appendChild(newWrapSlide);
        slideShow(newWrapSlide, data.featured);
      })
      .then(() => {
        let wrapBottom = wrap.querySelector(`.count-slide_${sliderCount}`);

        setTimeout(() => {
          wrapBottom.style.left = "0";
        }, 0);
        // let wrapSliderBlock = wrapBottom.querySelector(".slider__block");

        let wrapSliderBottom = wrapBottom.querySelector(".slider__bottom");
        makeButtons(wrapSliderBottom);
        sliderCount += 1;
        deleteSlide();
      });
  });
};

const rightButtonSlide = () => {
  let btn = wrap.querySelector(".slider__btn_right");

  btn.addEventListener("click", () => {
    sentRequest()
      .then(data => {
        console.log("right button click ->", data);
        let newWrapSlide = document.createElement("div");
        newWrapSlide.classList.add("new-slide", `count-slide_${sliderCount}`);
        newWrapSlide.style.right = "100%";
        newWrapSlide.style.zIndex = `${parseInt(newWrapSlide.style.zIndex) +
          1}`;
        wrapSlider.appendChild(newWrapSlide);
        slideShow(newWrapSlide, data.featured);
      })
      .then(() => {
        let wrapBottom = wrap.querySelector(`.count-slide_${sliderCount}`);

        setTimeout(() => {
          wrapBottom.style.right = "0";
        }, 0);
        // let wrapSliderBlock = wrapBottom.querySelector(".slider__block");
        let wrapSliderBottom = wrapBottom.querySelector(".slider__bottom");
        makeButtons(wrapSliderBottom);
        sliderCount += 1;
        deleteSlide();
      });
  });
};

const deleteSlide = () => {
  let slide = wrapSlider.querySelector(`.count-slide_${sliderCount - 3}`);
  if (slide) {
    // slide.style.display = "none";
    slide.remove();
  }
};
