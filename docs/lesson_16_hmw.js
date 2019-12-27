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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_16_hmw/date_func.js":
/*!****************************************!*\
  !*** ./src/lesson_16_hmw/date_func.js ***!
  \****************************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return Clock; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mountPoint = document.querySelector("body");

var getRandomNumber = function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
};

var getRandomColor = function getRandomColor() {
  return "rgb(".concat(getRandomNumber(255), ", ").concat(getRandomNumber(255), ", ").concat(getRandomNumber(255), ")");
};

var Clock =
/*#__PURE__*/
function () {
  function Clock(mountPoint) {
    var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getRandomColor();

    _classCallCheck(this, Clock);

    this.mountPoint = mountPoint;
    this.bgColor = bgColor;
    this.el;
    console.log(this);
  }

  _createClass(Clock, [{
    key: "render",
    value: function render() {
      this.dateWrap = document.createElement("div");
      this.dateWrap.classList.add("date__wrap");
      this.dateWrap.style.backgroundColor = "".concat(this.bgColor);
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
  }, {
    key: "currentDate",
    value: function currentDate() {
      var _this = this;

      this.dateWrap = document.querySelector(".date__wrap");
      this.dateHours = document.querySelector(".date__hours");
      this.dateMinutes = document.querySelector(".date__min");
      this.dateSecond = document.querySelector(".date__sec");
      this.dateColon = document.querySelectorAll(".date__colon");
      this.dateColon.forEach(function (item) {
        item.textContent = ":";
      });
      setInterval(function () {
        var currentDate = new Date();
        var hours = String(currentDate.getHours());
        var min = String(currentDate.getMinutes());
        var sec = String(currentDate.getSeconds());

        if (hours.length == 1) {
          _this.dateHours.textContent = "0" + sec;
        } else {
          _this.dateHours.textContent = hours;
        }

        if (min.length == 1) {
          _this.dateMinutes.textContent = "0" + min;
        } else {
          _this.dateMinutes.textContent = min;
        }

        if (sec.length == 1) {
          _this.dateSecond.textContent = "0" + sec;
        } else {
          _this.dateSecond.textContent = sec;
        }
      }, 1000);
    }
  }, {
    key: "clickForChangeBg",
    value: function clickForChangeBg() {
      var _this2 = this;

      this.dateWrap = document.querySelector(".date__wrap");
      this.dateWrap.style.cursor = "pointer";
      this.dateWrap.addEventListener("click", function () {
        var bg = getRandomColor();
        _this2.dateWrap.style.backgroundColor = "".concat(bg);
      });
    }
  }]);

  return Clock;
}();

/***/ }),

/***/ "./src/lesson_16_hmw/lesson_16_hmw.js":
/*!********************************************!*\
  !*** ./src/lesson_16_hmw/lesson_16_hmw.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_16_hmw_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_16_hmw.scss */ "./src/lesson_16_hmw/lesson_16_hmw.scss");
/* harmony import */ var _lesson_16_hmw_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_16_hmw_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _date_func__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date_func */ "./src/lesson_16_hmw/date_func.js");


var body = document.querySelector("body");
var clock = new _date_func__WEBPACK_IMPORTED_MODULE_1__["Clock"](body);
clock.render();
clock.currentDate();
clock.clickForChangeBg(); // currentDate();

/***/ }),

/***/ "./src/lesson_16_hmw/lesson_16_hmw.scss":
/*!**********************************************!*\
  !*** ./src/lesson_16_hmw/lesson_16_hmw.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 15:
/*!**************************************************!*\
  !*** multi ./src/lesson_16_hmw/lesson_16_hmw.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_16_hmw/lesson_16_hmw.js */"./src/lesson_16_hmw/lesson_16_hmw.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_16_hmw.js.map