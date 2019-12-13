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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_12_hmw/functions.js":
/*!****************************************!*\
  !*** ./src/lesson_12_hmw/functions.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var lights = document.querySelectorAll(".btn");
var toggleButton = document.querySelector(".btn-toggle");
var isOneLightOn = false;
var lightsDisabled = true;

var toggleOn = function toggleOn(light) {
  //   console.log(light);
  if (light.classList[0] == "traffic-lights__red-block") {
    // console.log("red block");
    light.style.transition = "all 0.5s";
    light.style.backgroundColor = "red";
    light.setAttribute("data-is-active", true);
    isOneLightOn = true;
  }

  if (light.classList[0] == "traffic-lights__yellow-block") {
    // console.log("yellow block");
    light.style.transition = "all 0.5s";
    light.style.backgroundColor = "yellow";
    light.setAttribute("data-is-active", true);
    isOneLightOn = true;
  }

  if (light.classList[0] == "traffic-lights__green-block") {
    // console.log("green block");
    light.style.transition = "all 0.5s";
    light.style.backgroundColor = "green";
    light.setAttribute("data-is-active", true);
    isOneLightOn = true;
  }
};

var toggleOff = function toggleOff(light) {
  if (light.classList[0] == "traffic-lights__red-block") {
    // console.log("red block");
    light.style.transition = "all 0.5s";
    light.style.backgroundColor = "rgb(51, 51, 51)";
    light.removeAttribute("data-is-active");
  }

  if (light.classList[0] == "traffic-lights__yellow-block") {
    // console.log("yellow block");
    light.style.transition = "all 0.5s";
    light.style.backgroundColor = "rgb(51, 51, 51)";
    light.removeAttribute("data-is-active");
  }

  if (light.classList[0] == "traffic-lights__green-block") {
    // console.log("green block");
    light.style.transition = "all 0.5s";
    light.style.backgroundColor = "rgb(51, 51, 51)";
    light.removeAttribute("data-is-active");
  }
};

var turnOffAll = function turnOffAll() {
  for (var i = 0; i < lights.length; i++) {
    toggleOff(lights[i]);
  }
};

var whatIsLight = function whatIsLight() {
  var lightOn;

  for (var i = 0; i < lights.length; i++) {
    var isAttr = lights[i].getAttribute("data-is-active");

    if (isAttr) {
      lightOn = lights[i];
    }
  }

  return lightOn;
};

var _loop = function _loop(i) {
  lights[i].onclick = function () {
    console.dir(lights[i]);
    var lightOn = whatIsLight();

    if (isOneLightOn) {
      if (lights[i] == lightOn) {
        toggleOff(lights[i]);
        isOneLightOn = false;
      } else {
        turnOffAll();
        toggleOn(lights[i]);
      }
    } else {
      toggleOn(lights[i]);
    }
  };
};

for (var i = 0; i < lights.length; i++) {
  _loop(i);
}

var changeButtonText = function changeButtonText() {
  var btnText = document.querySelector(".btn-toggle").textContent;

  if (btnText === "Turn OFF") {
    document.querySelector(".btn-toggle").textContent = "Turn ON";
  } else {
    document.querySelector(".btn-toggle").textContent = "Turn OFF";
  }
};

toggleButton.onclick = function () {
  changeButtonText();

  if (lightsDisabled) {
    // lights is disabled on for turn them ON:
    for (var _i = 0; _i < lights.length; _i++) {
      lights[_i].disabled = false;
    }

    lightsDisabled = false;
    toggleButton.style.backgroundColor = "rgb(65, 88, 173)";
  } else {
    // lights is non disabled on for turn them OFF:
    turnOffAll();

    for (var _i2 = 0; _i2 < lights.length; _i2++) {
      lights[_i2].disabled = true;
    }

    lightsDisabled = true;
    toggleButton.style.backgroundColor = "rgb(29, 40, 78)";
  }
};

window.onload = function () {
  for (var _i3 = 0; _i3 < lights.length; _i3++) {
    lights[_i3].disabled = true;
  }

  lightsDisabled = true;
  toggleButton.style.backgroundColor = "rgb(29, 40, 78)";
};

/***/ }),

/***/ "./src/lesson_12_hmw/lesson_12_hmw.js":
/*!********************************************!*\
  !*** ./src/lesson_12_hmw/lesson_12_hmw.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_12_hmw_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_12_hmw.scss */ "./src/lesson_12_hmw/lesson_12_hmw.scss");
/* harmony import */ var _lesson_12_hmw_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_12_hmw_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/lesson_12_hmw/functions.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_functions__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/lesson_12_hmw/lesson_12_hmw.scss":
/*!**********************************************!*\
  !*** ./src/lesson_12_hmw/lesson_12_hmw.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 10:
/*!**************************************************!*\
  !*** multi ./src/lesson_12_hmw/lesson_12_hmw.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_12_hmw/lesson_12_hmw.js */"./src/lesson_12_hmw/lesson_12_hmw.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_12_hmw.js.map