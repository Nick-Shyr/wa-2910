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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/meet_7/meet_7.js":
/*!******************************!*\
  !*** ./src/meet_7/meet_7.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meet_7_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meet_7.scss */ "./src/meet_7/meet_7.scss");
/* harmony import */ var _meet_7_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_meet_7_scss__WEBPACK_IMPORTED_MODULE_0__);

var option = [{
  title: "Option 1"
}, {
  title: "Option 2"
}, {
  title: "Option 3"
}, {
  title: "Option 4"
}, {
  title: "Option 5"
}];
var container = document.querySelector(".container");
var countOption = option.length;
var isOpen = false;
var optionText;

var renderButton = function renderButton(mountPoint) {
  var buttonWrap = document.createElement("div");
  var buttonTitle = document.createElement("div");
  buttonWrap.classList.add("button__wrap");
  buttonTitle.classList.add("button__title");
  buttonTitle.textContent = "Select option:";
  buttonWrap.appendChild(buttonTitle);
  mountPoint.appendChild(buttonWrap);
};

var renderOptions = function renderOptions(mountPoint) {
  var buttonOptionWrap = document.createElement("div");
  buttonOptionWrap.classList.add("button__options");

  for (var i = 0; i < countOption; i++) {
    var buttonOption = document.createElement("div");
    buttonOption.classList.add("button__option");
    buttonOption.textContent = option[i].title;
    buttonOptionWrap.appendChild(buttonOption);
  }

  mountPoint.appendChild(buttonOptionWrap);
};

var openOptions = function openOptions() {
  var option = document.querySelector(".button__options");
  var optionItems = document.querySelectorAll(".button__option");
  option.style.visibility = "visible";
  option.style.height = 40 * optionItems.length + "px";
};

var closeOptions = function closeOptions() {
  var option = document.querySelector(".button__options");
  option.style.visibility = "hidden";
  option.style.height = "0";
};

var toggleOptions = function toggleOptions() {
  var button = document.querySelector(".button__wrap");
  button.addEventListener("click", function () {
    if (isOpen) {
      closeOptions();
    } else {
      openOptions();
    }

    isOpen = !isOpen;
  });
};

var optionClick = function optionClick() {
  var option = document.querySelectorAll(".button__option");
  var title = document.querySelector(".button__title");
  option.forEach(function (item) {
    item.addEventListener("click", function () {
      optionText = item.innerHTML;
      title.textContent = optionText;
      closeOptions();
      isOpen = false;
    });
  });
};

renderButton(container);
renderOptions(container);
toggleOptions();
optionClick();

/***/ }),

/***/ "./src/meet_7/meet_7.scss":
/*!********************************!*\
  !*** ./src/meet_7/meet_7.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 14:
/*!************************************!*\
  !*** multi ./src/meet_7/meet_7.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/meet_7/meet_7.js */"./src/meet_7/meet_7.js");


/***/ })

/******/ });
//# sourceMappingURL=meet_7.js.map