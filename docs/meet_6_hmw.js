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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/meet_6_hmw/functions.js":
/*!*************************************!*\
  !*** ./src/meet_6_hmw/functions.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var garlandBlock = document.querySelector(".garland-block__wrap");
var body = document.querySelector("body");
var btn = document.createElement("div");
var btnToggle = document.createElement("div");
var lightsWrap = document.createElement("div");
var countLights;
var isActive = false;
var isActiveLight;
var lightsArray = [];
var time = 500;
var isToggle = false;
btn.classList.add("garland-block__button");
btnToggle.classList.add("garland-block__button", "toggle");
btn.textContent = "Start add garland";
btnToggle.textContent = "Toggle";
lightsWrap.classList.add("garland-block__lights");
garlandBlock.appendChild(btn);
garlandBlock.appendChild(btnToggle);

btn.onclick = function () {
  countLights = Number(prompt("How much you want lights in garland?"));
  garlandBlock.appendChild(lightsWrap);

  for (var i = 0; i < countLights; i++) {
    var light = document.createElement("div");
    light.classList.add("garland-block__light");
    lightsWrap.appendChild(light);
  }

  return lightsArray = document.querySelectorAll(".garland-block__light");
};

var turnOff = function turnOff(lights) {
  for (var i = 0; i < lights.length; i++) {
    lights[i].style.backgroundColor = "rgb(177, 177, 177)";
    lightsArray[i].classList.remove("active");
    lightsArray[i].style.transition = "all ".concat(time, "ms");
  }
};

var getRandomNumber = function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
};

var getRandomColor = function getRandomColor() {
  return "rgb(".concat(getRandomNumber(255), ", ").concat(getRandomNumber(255), ", ").concat(getRandomNumber(255), ")");
};

btnToggle.onclick = function () {
  isToggle = !isToggle;
  console.log(lightsArray.length()); // lightsArray = document.querySelectorAll(".garland-block__light");

  if (isToggle) {
    for (var i = 0; i < lightsArray.length; i++) {
      lightsArray[i].style.disable = true;
    }
  } else {
    var _loop = function _loop(_i) {
      lightsArray[_i].onclick = function () {
        if (isActive) {
          if (lightsArray[_i].classList.contains("active")) {
            lightsArray[_i].classList.remove("active");

            lightsArray[_i].style.backgroundColor = "rgb(177, 177, 177)";
            lightsArray[_i].style.transition = "all ".concat(time, "ms");
            isActive = false;
          } else {
            turnOff(lightsArray);
            lightsArray[_i].style.backgroundColor = getRandomColor();

            lightsArray[_i].classList.add("active");

            lightsArray[_i].style.transition = "all ".concat(time, "ms");
          }
        } else {
          lightsArray[_i].style.backgroundColor = getRandomColor();

          lightsArray[_i].classList.add("active");

          lightsArray[_i].style.transition = "all ".concat(time, "ms");
          isActive = true;
        }
      };
    };

    for (var _i = 0; _i < lightsArray.length; _i++) {
      _loop(_i);
    }
  }
};

/***/ }),

/***/ "./src/meet_6_hmw/meet_6_hmw.js":
/*!**************************************!*\
  !*** ./src/meet_6_hmw/meet_6_hmw.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meet_6_hmw_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meet_6_hmw.scss */ "./src/meet_6_hmw/meet_6_hmw.scss");
/* harmony import */ var _meet_6_hmw_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_meet_6_hmw_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ "./src/meet_6_hmw/functions.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_functions_js__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/meet_6_hmw/meet_6_hmw.scss":
/*!****************************************!*\
  !*** ./src/meet_6_hmw/meet_6_hmw.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 12:
/*!********************************************!*\
  !*** multi ./src/meet_6_hmw/meet_6_hmw.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/meet_6_hmw/meet_6_hmw.js */"./src/meet_6_hmw/meet_6_hmw.js");


/***/ })

/******/ });
//# sourceMappingURL=meet_6_hmw.js.map