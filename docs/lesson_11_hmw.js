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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_11_hmw/functions.js":
/*!****************************************!*\
  !*** ./src/lesson_11_hmw/functions.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//Напишите функцию randomInteger(min, max) для генерации случайного целого числа между min и
//max, включая min,max как возможные значения
var minInt = 1;
var maxInt = 10;
var firstFunc = document.querySelector("#func-1");
var secondFunc = document.querySelector("#func-2");
var thirdFunc = document.querySelector("#func-3");

var randomInteger = function randomInteger(min, max) {
  var randVal = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randVal);
  return randVal;
};

firstFunc.onclick = function () {
  randomInteger(100, 110);
}; // Мини-задача на синтаксис объектов. Напишите код, по строке на каждое действие.
// Создайте пустой объект user.
// Добавьте свойство name со значением Вася.
// Добавьте свойство surname со значением Петров.
// Поменяйте значение name на Сергей.
// Удалите свойство name из объектa


var user = {
  name: "Vasya",
  surname: "Petrov"
};
user.name = "Sergey";
console;
delete user.name; // Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если
// хоть одно свойство есть.

var objFunc3 = {// a: "adsfaf",
  // b: "adfadfadfadf",
  // c: "qqqqqq"
};

var isEmpty = function isEmpty(test) {
  var tmpArr = Object.keys(test);
  var tmpArrLenght;

  if (tmpArr.length === 0) {
    tmpArrLenght = true;
  } else {
    tmpArrLenght = false;
  }

  return tmpArrLenght;
};

secondFunc.onclick = function () {
  var result = isEmpty(objFunc3);
  console.log("result of isEmpty function = ", result);
}; // Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат. Если объект
// пустой, то результат должен быть 0.


var salaries = {
  John: 400,
  Jack: 20000,
  test: "asdasdasd"
};

var calc = function calc(objSalaries) {
  var sum = 0;
  var tmpArr = Object.keys(objSalaries);

  for (var i = 0; i < tmpArr.length; i++) {
    console.log(_typeof(tmpArr[i]));
    console.log(tmpArr[i]);

    if (typeof tmpArr[i] === "number") {
      sum += tmpArr[i];
    }
  }

  console.log(sum);
  return sum;
};

thirdFunc.onclick = function () {
  calc(salaries);
};

/***/ }),

/***/ "./src/lesson_11_hmw/lesson_11_hmw.js":
/*!********************************************!*\
  !*** ./src/lesson_11_hmw/lesson_11_hmw.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_11_hmw_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_11_hmw.scss */ "./src/lesson_11_hmw/lesson_11_hmw.scss");
/* harmony import */ var _lesson_11_hmw_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_11_hmw_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/lesson_11_hmw/functions.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_functions__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/lesson_11_hmw/lesson_11_hmw.scss":
/*!**********************************************!*\
  !*** ./src/lesson_11_hmw/lesson_11_hmw.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 8:
/*!**************************************************!*\
  !*** multi ./src/lesson_11_hmw/lesson_11_hmw.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_11_hmw/lesson_11_hmw.js */"./src/lesson_11_hmw/lesson_11_hmw.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_11_hmw.js.map