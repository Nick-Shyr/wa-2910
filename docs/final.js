/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/final/button/button.js":
/*!************************************!*\
  !*** ./src/final/button/button.js ***!
  \************************************/
/*! exports provided: Button, ButtonSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonSearch", function() { return ButtonSearch; });
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ "./src/final/button/button.scss");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var showInput = false;

var Button =
/*#__PURE__*/
function () {
  function Button(mountPoint) {
    var buttonText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "test";
    var buttonBackground = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "inherit";
    var buttonBackgroundHover = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "inherit";
    var buttonClass = arguments.length > 4 ? arguments[4] : undefined;

    _classCallCheck(this, Button);

    this.mountPoint = mountPoint;
    this.buttonText = buttonText;
    this.buttonBackground = buttonBackground;
    this.buttonBackgroundHover = buttonBackgroundHover;
    this.buttonClass = buttonClass;
    this.init();
  }

  _createClass(Button, [{
    key: "init",
    value: function init() {
      this.render();
      this.addEvents();
    }
  }, {
    key: "render",
    value: function render() {
      this.btnWrapper = document.createElement("button");
      this.btnWrapper.classList.add("button-el", "".concat(this.buttonClass));
      this.btnWrapper.style.minWidth = "140px";
      this.btnWrapper.style.height = "40px";
      this.btnWrapper.style.backgroundColor = this.buttonBackground;
      this.btnWrapper.style.transition = "transition: all linear 0.3s";
      this.btnWrapper.textContent = this.buttonText;
      this.mountPoint.appendChild(this.btnWrapper);
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this = this;

      this.btnWrapper.addEventListener("mouseenter", function () {
        _this.btnWrapper.style.backgroundColor = _this.buttonBackgroundHover;
      });
      this.btnWrapper.addEventListener("mouseleave", function () {
        _this.btnWrapper.style.backgroundColor = _this.buttonBackground;
      });
    }
  }]);

  return Button;
}();

var ButtonSearch =
/*#__PURE__*/
function () {
  function ButtonSearch(mountPoint) {
    _classCallCheck(this, ButtonSearch);

    this.mountPoint = mountPoint;
    this.init();
  }

  _createClass(ButtonSearch, [{
    key: "init",
    value: function init() {
      this.render();
      this.addEvents();
    }
  }, {
    key: "render",
    value: function render() {
      this.btnWrapper = document.createElement("div");
      this.btnWrapper.classList.add("button__search");
      this.btnInput = document.createElement("input");
      this.btnIcon = document.createElement("div");
      this.btnIcon.classList.add("search-icon");
      this.btnWrapper.appendChild(this.btnInput);
      this.btnWrapper.appendChild(this.btnIcon);
      this.mountPoint.appendChild(this.btnWrapper);
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this2 = this;

      this.btnIcon.addEventListener("click", function () {
        console.log("search-icon click");
        _this2.showInput = !_this2.showInput;

        if (_this2.showInput) {
          if (window.innerWidth < 840) {
            _this2.btnInput.style.width = "130px";
            _this2.btnInput.style.padding = "3px";
          } else {
            _this2.btnInput.style.width = "200px";
            _this2.btnInput.style.padding = "5px";
          }
        } else {
          _this2.btnInput.style.width = "0";
          _this2.btnInput.style.padding = "0";
        }
      });
    }
  }]);

  return ButtonSearch;
}();



/***/ }),

/***/ "./src/final/button/button.scss":
/*!**************************************!*\
  !*** ./src/final/button/button.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/final/button/index.js":
/*!***********************************!*\
  !*** ./src/final/button/index.js ***!
  \***********************************/
/*! exports provided: Button, ButtonSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/final/button/button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonSearch", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["ButtonSearch"]; });



/***/ }),

/***/ "./src/final/fetch/fetch.js":
/*!**********************************!*\
  !*** ./src/final/fetch/fetch.js ***!
  \**********************************/
/*! exports provided: sentRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sentRequest", function() { return sentRequest; });
function sentRequest() {
  return fetch("https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/movies").then(function (response) {
    if (response.status >= 400) {
      console.error("error from fetch request");
      throw response;
    } else {
      return response.json();
    }
  }).then(function (response) {
    //   console.log("data from request:", response2);
    return response;
  })["catch"](function (error) {
    console.log("error from catch", error);
  });
}

/***/ }),

/***/ "./src/final/final.js":
/*!****************************!*\
  !*** ./src/final/final.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _final_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./final.scss */ "./src/final/final.scss");
/* harmony import */ var _final_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_final_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media_queries_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media_queries.scss */ "./src/final/media_queries.scss");
/* harmony import */ var _media_queries_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_media_queries_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fetch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch/fetch */ "./src/final/fetch/fetch.js");
/* harmony import */ var _slideshow_slideshow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slideshow/slideshow */ "./src/final/slideshow/slideshow.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button */ "./src/final/button/index.js");
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts */ "./src/final/posts/index.js");
/* harmony import */ var _static_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./static_content */ "./src/final/static_content.js");
/* harmony import */ var _footer_nav___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer_nav/ */ "./src/final/footer_nav/index.js");








var sliderCount = 1;
var navMiniIsShow = false;
var wrap = document.querySelector(".main__wrap");
var wrapSlider = wrap.querySelector(".main__slider");
var wrapContent = wrap.querySelector(".main__content");
var wrapFooter = wrap.querySelector(".footer");
var activeNav;
var titlePage = wrap.querySelectorAll(".title-page");
titlePage.forEach(function (element) {
  element.textContent = "THEMOVIEBOX";
});
Object(_fetch_fetch__WEBPACK_IMPORTED_MODULE_2__["sentRequest"])().then(function (data) {
  console.log(data);
  Object(_slideshow_slideshow__WEBPACK_IMPORTED_MODULE_3__["slideShow"])(wrapSlider, data.featured); // makePost(wrapContent, data.list[0]);

  new _posts__WEBPACK_IMPORTED_MODULE_5__["Posts"](wrapContent, data);
  new _posts__WEBPACK_IMPORTED_MODULE_5__["Posts"](wrapContent, data);
}).then(function () {
  var wrapSliderBottom = wrapSlider.querySelector(".slider__bottom");
  makeButtons(wrapSliderBottom);
  makeButtonsLogin(wrapSlider);
  makeNav();
  setFooterNav();
  leftButtonSlide();
  rightButtonSlide();
}).then(function () {
  var btnWatchMovienew = wrapSlider.querySelector(".button_watch");
  btnWatchMovienew.addEventListener("click", function () {
    console.log("button_watch");
  });
  var btnVievInfo = wrapSlider.querySelector(".button_info");
  btnVievInfo.addEventListener("click", function () {
    console.log("button_info");
  });
  var btnAddWishlist = wrapSlider.querySelector(".button_wishlist");
  btnAddWishlist.addEventListener("click", function () {
    console.log("button_wishlist");
  });
  var btnSignUp = wrapSlider.querySelector(".button_signUp");
  btnSignUp.addEventListener("click", function () {
    console.log("button_signUp");
  });
  var btnLogin = wrapSlider.querySelector(".button_login");
  btnLogin.addEventListener("click", function () {
    console.log("button_login");
  });
});

var makeButtons = function makeButtons(mountPoint) {
  var btnWatchMovienew = new _button__WEBPACK_IMPORTED_MODULE_4__["Button"](mountPoint, "WATCH MOVIE", "#ff0079", "#8d0142", "button_watch");
  var btnVievInfo = new _button__WEBPACK_IMPORTED_MODULE_4__["Button"](mountPoint, "View info", "inherit", "rgba(255,255,255,0.4)", "button_info");
  var btnAddWishlist = new _button__WEBPACK_IMPORTED_MODULE_4__["Button"](mountPoint, "+ Add to wishlist", "inherit", "rgba(255,255,255,0.4)", "button_wishlist");
};

var makeButtonsLogin = function makeButtonsLogin(mountPoint) {
  var btnSignUp = new _button__WEBPACK_IMPORTED_MODULE_4__["Button"](mountPoint, "Sign up", "#ff0079", "#8d0142", "button_signUp");
  var btnLogin = new _button__WEBPACK_IMPORTED_MODULE_4__["Button"](mountPoint, "Log in", "inherit", "rgba(255,255,255,0.4)", "button_login");
  var btnSearch = new _button__WEBPACK_IMPORTED_MODULE_4__["ButtonSearch"](mountPoint);
};

var makeNav = function makeNav() {
  var navWrapUl = wrap.querySelector(".nav__ul");
  _static_content__WEBPACK_IMPORTED_MODULE_6__["navData"].forEach(function (item) {
    var tempLi = document.createElement("li");
    tempLi.textContent = item;
    var itemReg = item.replace(/\s+/g, "").trim();
    tempLi.classList.add(itemReg);
    navWrapUl.appendChild(tempLi);

    if (item == "Genre") {
      var arrow = document.createElement("div");
      arrow.classList.add("genre-list__arrow");
      tempLi.appendChild(arrow);
      makeNavGenreList(tempLi);
    }
  });
  setEventToNavActive(navWrapUl);
  var navMini = wrap.querySelector(".btn__small");
  navMini.addEventListener("click", function () {
    var spans = navMini.querySelectorAll("span");
    navMiniIsShow = !navMiniIsShow;

    if (navMiniIsShow) {
      // navWrapUl.style.minHeight = "130px";
      navWrapUl.style.height = "170px";
      spans.forEach(function (item) {
        item.classList.add("activeClose");
      });
      spans.classList.add("activeClose");
    } else {
      // navWrapUl.style.minHeight = "0";
      navWrapUl.style.height = "0";
      spans.forEach(function (item) {
        item.classList.remove("activeClose");
      });
    }
  });
};

var makeNavGenreList = function makeNavGenreList(mountPoint) {
  var arrow = mountPoint.querySelector(".genre-list__arrow");
  var navGenreList = document.createElement("div");
  navGenreList.classList.add("genre-list");
  _static_content__WEBPACK_IMPORTED_MODULE_6__["navDataGenre"].forEach(function (item) {
    var genreList = document.createElement("div");
    genreList.textContent = item;
    navGenreList.appendChild(genreList);
  });
  mountPoint.appendChild(navGenreList);
  mountPoint.addEventListener("mouseover", function () {
    if (window.innerWidth < 640) {
      navGenreList.style.height = "40px";
    } else {
      navGenreList.style.height = "120px";
    }

    navGenreList.style.border = "1px solid #80818a";
    arrow.style.transform = "rotate(180deg)";
  });
  mountPoint.addEventListener("mouseout", function () {
    if (window.innerWidth < 640) {
      navGenreList.style.height = "40px";
    } else {
      navGenreList.style.height = "0";
    }

    navGenreList.style.border = "none";
    arrow.style.transform = "rotate(0)";
  });
};

var setEventToNavActive = function setEventToNavActive(mountPoint) {
  var arrLi = mountPoint.querySelectorAll("li");
  var arrGenreList = mountPoint.querySelectorAll(".genre-list div");

  var _loop = function _loop(i) {
    var item = arrLi[i];

    if (i == 0) {
      item.classList.add("active");
      activeNav = item;
    }

    item.addEventListener("click", function ($event) {
      if (item !== activeNav) {
        arrLi.forEach(function (element) {
          element.classList.remove("active");
        });

        if (event.target.textContent == "Fantasy" || event.target.textContent == "Comics" || event.target.textContent == "Fairytail") {
          arrGenreList.forEach(function (element) {
            console.log(element);
            element.classList.remove("activeGenre");
          });
          event.target.classList.add("activeGenre");
        } else {
          arrGenreList.forEach(function (element) {
            element.classList.remove("activeGenre");
          });
        }

        item.classList.add("active");
        activeNav = event.target;
      }
    });
  };

  for (var i = 0; i < arrLi.length; i++) {
    _loop(i);
  }
};

var setFooterNav = function setFooterNav() {
  var wrapUl = wrapFooter.querySelector(".footer__media-ul");
  var wrapNav = wrapFooter.querySelector(".footer__nav-ul");
  new _footer_nav___WEBPACK_IMPORTED_MODULE_7__["FooterSocialIcons"](wrapUl, _static_content__WEBPACK_IMPORTED_MODULE_6__["footerSocMedia"]);
  new _footer_nav___WEBPACK_IMPORTED_MODULE_7__["FooterNav"](wrapNav, _static_content__WEBPACK_IMPORTED_MODULE_6__["navFooter"]);
};

var leftButtonSlide = function leftButtonSlide() {
  var btn = wrap.querySelector(".slider__btn_left");
  btn.addEventListener("click", function () {
    // let wrapSliderBlock = wrapSlider.querySelector(".slider__block");
    // wrapSliderBlock.style.opacity = "0";
    Object(_fetch_fetch__WEBPACK_IMPORTED_MODULE_2__["sentRequest"])().then(function (data) {
      console.log("left button click ->", data);
      var newWrapSlide = document.createElement("div");
      newWrapSlide.classList.add("new-slide", "count-slide_".concat(sliderCount));
      newWrapSlide.style.left = "100%";
      newWrapSlide.style.zIndex = "".concat(parseInt(newWrapSlide.style.zIndex) + 1);
      wrapSlider.appendChild(newWrapSlide);
      Object(_slideshow_slideshow__WEBPACK_IMPORTED_MODULE_3__["slideShow"])(newWrapSlide, data.featured);
    }).then(function () {
      var wrapBottom = wrap.querySelector(".count-slide_".concat(sliderCount));
      setTimeout(function () {
        wrapBottom.style.left = "0";
      }, 0); // let wrapSliderBlock = wrapBottom.querySelector(".slider__block");

      var wrapSliderBottom = wrapBottom.querySelector(".slider__bottom");
      makeButtons(wrapSliderBottom);
      sliderCount += 1;
      deleteSlide();
    });
  });
};

var rightButtonSlide = function rightButtonSlide() {
  var btn = wrap.querySelector(".slider__btn_right");
  btn.addEventListener("click", function () {
    Object(_fetch_fetch__WEBPACK_IMPORTED_MODULE_2__["sentRequest"])().then(function (data) {
      console.log("right button click ->", data);
      var newWrapSlide = document.createElement("div");
      newWrapSlide.classList.add("new-slide", "count-slide_".concat(sliderCount));
      newWrapSlide.style.right = "100%";
      newWrapSlide.style.zIndex = "".concat(parseInt(newWrapSlide.style.zIndex) + 1);
      wrapSlider.appendChild(newWrapSlide);
      Object(_slideshow_slideshow__WEBPACK_IMPORTED_MODULE_3__["slideShow"])(newWrapSlide, data.featured);
    }).then(function () {
      var wrapBottom = wrap.querySelector(".count-slide_".concat(sliderCount));
      setTimeout(function () {
        wrapBottom.style.right = "0";
      }, 0); // let wrapSliderBlock = wrapBottom.querySelector(".slider__block");

      var wrapSliderBottom = wrapBottom.querySelector(".slider__bottom");
      makeButtons(wrapSliderBottom);
      sliderCount += 1;
      deleteSlide();
    });
  });
};

var deleteSlide = function deleteSlide() {
  var slide = wrapSlider.querySelector(".count-slide_".concat(sliderCount - 3));

  if (slide) {
    // slide.style.display = "none";
    slide.remove();
  }
};

/***/ }),

/***/ "./src/final/final.scss":
/*!******************************!*\
  !*** ./src/final/final.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/final/footer_nav/footer.js":
/*!****************************************!*\
  !*** ./src/final/footer_nav/footer.js ***!
  \****************************************/
/*! exports provided: FooterSocialIcons, FooterNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterSocialIcons", function() { return FooterSocialIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterNav", function() { return FooterNav; });
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.scss */ "./src/final/footer_nav/footer.scss");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var FooterSocialIcons =
/*#__PURE__*/
function () {
  function FooterSocialIcons(mountPoint, data) {
    _classCallCheck(this, FooterSocialIcons);

    this.mountPoint = mountPoint;
    this.data = data;
    this.render();
  }

  _createClass(FooterSocialIcons, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.data.forEach(function (item) {
        var wrapLi = document.createElement("li");
        wrapLi.classList.add("li_".concat(item));

        _this.mountPoint.appendChild(wrapLi);

        if (item == "facebook") {
          wrapLi.addEventListener("click", function () {
            alert("Do you want to open Facebook.com?");
          });
        } else if (item == "twitter") {
          wrapLi.addEventListener("click", function () {
            alert("Do you want to open twitter.com?");
          });
        } else if (item == "linkedin") {
          wrapLi.addEventListener("click", function () {
            alert("Do you want to open linkedin.com?");
          });
        } else if (item == "instagram") {
          wrapLi.addEventListener("click", function () {
            alert("Do you want to open instagram.com?");
          });
        }
      });
    }
  }]);

  return FooterSocialIcons;
}();

var FooterNav =
/*#__PURE__*/
function () {
  function FooterNav(mountPoint, data) {
    _classCallCheck(this, FooterNav);

    this.mountPoint = mountPoint;
    this.data = data;
    this.render();
  }

  _createClass(FooterNav, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      this.data.forEach(function (item) {
        var wrapLi = document.createElement("li");
        wrapLi.classList.add(item);
        wrapLi.textContent = item;

        _this2.mountPoint.appendChild(wrapLi);
      });
    }
  }]);

  return FooterNav;
}();



/***/ }),

/***/ "./src/final/footer_nav/footer.scss":
/*!******************************************!*\
  !*** ./src/final/footer_nav/footer.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/final/footer_nav/index.js":
/*!***************************************!*\
  !*** ./src/final/footer_nav/index.js ***!
  \***************************************/
/*! exports provided: FooterSocialIcons, FooterNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/final/footer_nav/footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterSocialIcons", function() { return _footer__WEBPACK_IMPORTED_MODULE_0__["FooterSocialIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterNav", function() { return _footer__WEBPACK_IMPORTED_MODULE_0__["FooterNav"]; });



/***/ }),

/***/ "./src/final/media_queries.scss":
/*!**************************************!*\
  !*** ./src/final/media_queries.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/final/posts/index.js":
/*!**********************************!*\
  !*** ./src/final/posts/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts */ "./src/final/posts/posts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return _posts__WEBPACK_IMPORTED_MODULE_0__["Post"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePost", function() { return _posts__WEBPACK_IMPORTED_MODULE_0__["makePost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Posts", function() { return _posts__WEBPACK_IMPORTED_MODULE_0__["Posts"]; });

/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./src/final/posts/post.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_post__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _post__WEBPACK_IMPORTED_MODULE_1__) if(["Post","makePost","Posts","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _post__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/final/posts/post.js":
/*!*********************************!*\
  !*** ./src/final/posts/post.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/final/posts/posts.js":
/*!**********************************!*\
  !*** ./src/final/posts/posts.js ***!
  \**********************************/
/*! exports provided: Post, makePost, Posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePost", function() { return makePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Posts", function() { return Posts; });
/* harmony import */ var _posts_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.scss */ "./src/final/posts/posts.scss");
/* harmony import */ var _posts_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_posts_scss__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var makePost = function makePost(mountPoint, data) {
  var post = new Post(mountPoint, data);
};

var Post =
/*#__PURE__*/
function () {
  function Post(mountPoint, data) {
    _classCallCheck(this, Post);

    this.mountPoint = mountPoint;
    this.data = data;
    this.init();
  }

  _createClass(Post, [{
    key: "init",
    value: function init() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var postWrap = document.createElement("div");
      postWrap.classList.add("post__wrap");
      var postImgDiv = document.createElement("div");
      postImgDiv.classList.add("post__imgBlock");
      var postImg = document.createElement("img");
      postImg.src = this.data.preview.low;
      var postYear = document.createElement("div");
      postYear.classList.add("post__year");
      var postTextWrap = document.createElement("div");
      postTextWrap.classList.add("post__text-wrap");
      var postTextBlock = document.createElement("div");
      postTextBlock.classList.add("post__text-block");
      var postTitle = document.createElement("div");
      postTitle.classList.add("post__title");
      postTitle.textContent = this.data.title;

      if (postTitle.textContent == "Fantastic beasts and where to find them") {
        postYear.textContent = "2016";
      } else {
        postYear.textContent = "2017";
      }

      var postGenre = document.createElement("div");
      postGenre.classList.add("post__genre");
      postGenre.textContent = this.data.genre;
      var postRating = document.createElement("div");
      postRating.classList.add("post__rating");
      postRating.textContent = this.data.rating;
      postImgDiv.appendChild(postYear);
      postImgDiv.appendChild(postImg);
      postTextBlock.appendChild(postTitle);
      postTextBlock.appendChild(postGenre);
      postTextWrap.appendChild(postTextBlock);
      postTextWrap.appendChild(postRating);
      postWrap.appendChild(postImgDiv);
      postWrap.appendChild(postTextWrap);
      this.mountPoint.appendChild(postWrap);
    }
  }]);

  return Post;
}();

var Posts = function Posts(mountPoint, data) {
  _classCallCheck(this, Posts);

  this.mountPoint = mountPoint;
  this.data = data;

  for (var i = 0; i < data.list.length; i++) {
    var item = data.list[i];
    var itemPost = new Post(mountPoint, item);
  }
};



/***/ }),

/***/ "./src/final/posts/posts.scss":
/*!************************************!*\
  !*** ./src/final/posts/posts.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/final/slideshow/slideshow.js":
/*!******************************************!*\
  !*** ./src/final/slideshow/slideshow.js ***!
  \******************************************/
/*! exports provided: slideShow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideShow", function() { return slideShow; });
/* harmony import */ var _slideshow_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideshow.scss */ "./src/final/slideshow/slideshow.scss");
/* harmony import */ var _slideshow_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slideshow_scss__WEBPACK_IMPORTED_MODULE_0__);

var sliderCount = 0;
var slideShow = function slideShow(mountPoint, data) {
  // console.log(data);
  var backSlide = document.createElement("div");
  backSlide.classList.add("slider__block");
  backSlide.style.backgroundImage = "url(".concat(data.preview.high, ")"); // backSlide.style.backgroundColor = "grey";
  // backSlide.style.opacity = "0";
  // setTimeout(() => {
  //   backSlide.style.opacity = "1";
  // }, 1000);

  var slideBlockBottom = document.createElement("div");
  slideBlockBottom.classList.add("slider__bottom");
  var titleBlock = document.createElement("div");
  titleBlock.classList.add("slider__title");
  titleBlock.textContent = data.title;
  var genreBlock = document.createElement("div");
  genreBlock.classList.add("slider__genre");
  genreBlock.textContent = data.genre;
  slideBlockBottom.appendChild(titleBlock);
  slideBlockBottom.appendChild(genreBlock);
  backSlide.appendChild(slideBlockBottom);
  mountPoint.appendChild(backSlide);
  var ratingBLock = document.createElement("div");
  ratingBLock.classList.add("slider__rating");
  var ratingBLockBottom = document.createElement("div");
  ratingBLockBottom.classList.add("slider__rating_bottom");
  var ratingBLockText = document.createElement("div");
  ratingBLockText.classList.add("slider__rating_text");
  ratingBLockText.textContent = "Rating";
  var ratingBLockNumber = document.createElement("div");
  ratingBLockNumber.classList.add("slider__rating_number");
  ratingBLockNumber.textContent = data.rating;
  var ratingBLockStars = document.createElement("div");
  ratingBLockStars.classList.add("slider__rating_stars");

  for (var i = 1; i < 6; i++) {
    var parseRating = parseInt(data.rating);
    var star = document.createElement("span");
    star.classList.add("rating-star-".concat(i));
    star.style.position = "relative";

    if (i <= data.rating) {
      star.textContent = "\u2605";
    } else {
      if (i == parseRating + 1) {
        star.textContent = "\u2606";
        var starHalf = document.createElement("span");
        starHalf.style.position = "absolute";
        starHalf.style.overflow = "hidden";
        starHalf.style.width = "10px";
        starHalf.style.top = "0";
        starHalf.style.left = "0";
        starHalf.style.color = "#ff0079";
        starHalf.textContent = "\u2605";
        star.appendChild(starHalf);
      }
    }

    ratingBLockStars.appendChild(star);
  }

  ratingBLockBottom.appendChild(ratingBLockStars);
  ratingBLockBottom.appendChild(ratingBLockNumber);
  ratingBLock.appendChild(ratingBLockText);
  ratingBLock.appendChild(ratingBLockBottom);
  slideBlockBottom.appendChild(ratingBLock);
};

/***/ }),

/***/ "./src/final/slideshow/slideshow.scss":
/*!********************************************!*\
  !*** ./src/final/slideshow/slideshow.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/final/static_content.js":
/*!*************************************!*\
  !*** ./src/final/static_content.js ***!
  \*************************************/
/*! exports provided: navData, navDataGenre, navFooter, footerSocMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navData", function() { return navData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navDataGenre", function() { return navDataGenre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navFooter", function() { return navFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footerSocMedia", function() { return footerSocMedia; });
var navData = ["Trending", "Top Rated", "New Arrivals", "Genre"];
var navDataGenre = ["Fantasy", "Comics", "Fairytail"];
var navFooter = ["About", "Movies", "Rating", "Contact"];
var footerSocMedia = ["facebook", "twitter", "linkedin", "instagram"];


/***/ }),

/***/ 16:
/*!**********************************!*\
  !*** multi ./src/final/final.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/final/final.js */"./src/final/final.js");


/***/ })

/******/ });
//# sourceMappingURL=final.js.map