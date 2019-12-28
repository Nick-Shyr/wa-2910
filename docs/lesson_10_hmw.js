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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_10_hmw/functions.js":
/*!****************************************!*\
  !*** ./src/lesson_10_hmw/functions.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var name = prompt("Привіт, друже! Як твоє ім'я?");

if (name != null) {
  namePlayer.textContent = "Привіт " + name;
} else {
  namePlayer.textContent = "Бувай, заходьте ще =)";
}

var words = ["програмування", "мавпа", "вебакадемія", "піцца", "помилка"];
var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];

for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;
var wrongAnswers = 3;

while (remainingLetters > 0 && wrongAnswers > 0) {
  alert(answerArray.join(" "));
  var guess = prompt("Введіть літеру або Cancel для виходу");
  guess = guess.toLowerCase();
  var letterMatch = false;

  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Будь ласочка, введіть лише одну літеру");
  } else {
    for (var _i = 0; _i < word.length; _i++) {
      if (word[_i] === guess) {
        if (answerArray[_i] === "_") {
          answerArray[_i] = guess;
          remainingLetters--;
          letterMatch = true;
        } else if (answerArray[_i] === guess) {
          alert("А ця літера вже відгадана!");
          break;
        }
      }
    }

    if (!letterMatch) {
      --wrongAnswers;

      if (wrongAnswers == 0) {
        alert("На жаль, всі спроби скінчились :(");
      } else {
        alert("Упс... Залишилось лише декілька спроб: " + wrongAnswers);
      }
    }
  }

  console.log("guess", guess);
  console.log("remainingLetters", remainingLetters);
  console.log("letterMatch", letterMatch);
  console.log("wrongAnswers", wrongAnswers);
}

if (wrongAnswers == 0) {
  answer.textContent = "Ех, не вгадав! А слово то було " + word.toUpperCase();
} else {
  alert(answerArray.join(" "));
  answer.textContent = "Круто, вгадав! Слово " + word.toUpperCase();
}

/***/ }),

/***/ "./src/lesson_10_hmw/lesson_10_hmw.js":
/*!********************************************!*\
  !*** ./src/lesson_10_hmw/lesson_10_hmw.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_10_hmw_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_10_hmw.scss */ "./src/lesson_10_hmw/lesson_10_hmw.scss");
/* harmony import */ var _lesson_10_hmw_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_10_hmw_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ "./src/lesson_10_hmw/functions.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_functions_js__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/lesson_10_hmw/lesson_10_hmw.scss":
/*!**********************************************!*\
  !*** ./src/lesson_10_hmw/lesson_10_hmw.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 9:
/*!**************************************************!*\
  !*** multi ./src/lesson_10_hmw/lesson_10_hmw.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_10_hmw/lesson_10_hmw.js */"./src/lesson_10_hmw/lesson_10_hmw.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_10_hmw.js.map