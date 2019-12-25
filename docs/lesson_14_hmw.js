/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = "/"; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 13));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "../src/common/accordion/accordion.js":
      /*!*******************************************!*\
  !*** ./src/common/accordion/accordion.js ***!
  \*******************************************/
      /*! exports provided: accordion */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "accordion",
          function() {
            return accordion;
          }
        );
        /* harmony import */ var _accordion_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./accordion.scss */ "../src/common/accordion/accordion.scss"
        );
        /* harmony import */ var _accordion_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _accordion_scss__WEBPACK_IMPORTED_MODULE_0__
        );

        var sections = [
          {
            title: "Section 1",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis perferendis ipsum tempora quam magnam accusamus, vero quod dolorem repellendus earum qui eius sequi facere at, totam cupiditate ut exercitationem? "
          },
          {
            title: "Section 2",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis perferendis ipsum tempora quam magnam accusamus, vero quod dolorem repellendus earum qui eius sequi facere at, totam cupiditate ut exercitationem? "
          },
          {
            title: "Section 3",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis perferendis ipsum tempora quam magnam accusamus, vero quod dolorem repellendus earum qui eius sequi facere at, totam cupiditate ut exercitationem? "
          },
          {
            title: "Section 4",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis perferendis ipsum tempora quam magnam accusamus, vero quod dolorem repellendus earum qui eius sequi facere at, totam cupiditate ut exercitationem? "
          },
          {
            title: "Section 5",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis perferendis ipsum tempora quam magnam accusamus, vero quod dolorem repellendus earum qui eius sequi facere at, totam cupiditate ut exercitationem? "
          }
        ];

        var renderAccordionBlock = function renderAccordionBlock(item, i) {
          var blockWrap = document.createElement("div");
          var blockTitle = document.createElement("div");
          var blockTitleText = document.createElement("div");
          var blockText = document.createElement("div");
          var blockButton = document.createElement("div"); // const buttonImg = document.createElement("img");

          blockWrap.classList.add("accordionBlock__wrap");
          blockTitle.classList.add("accordionBlock__title");
          blockTitleText.classList.add("accordionBlock__title-text");
          blockTitleText.textContent = item.title;
          blockText.classList.add("accordionBlock__text");
          blockText.textContent = item.content;
          blockButton.classList.add("accordionBlock__button"); // buttonImg.src = "../img/arrow.png";

          blockWrap.appendChild(blockTitle);
          blockTitle.appendChild(blockTitleText);
          blockTitle.appendChild(blockButton);
          blockWrap.appendChild(blockText); // blockButton.appendChild(buttonImg);

          return blockWrap;
        };

        var renderAccordion = function renderAccordion(mountPoint) {
          var accordionBlocks = [];
          sections.forEach(function(item, i) {
            var block = renderAccordionBlock(item, i);
            accordionBlocks.push(block);
            mountPoint.appendChild(block);
          });
          return accordionBlocks;
        };

        var accordion = function accordion(mountPoint) {
          var activeSlideIndex = -1;
          var isActive = false;
          var container = document.createElement("div");
          container.classList.add("container");
          var acc = renderAccordion(container);
          mountPoint.appendChild(container);
          openText();

          function openText() {
            var _loop = function _loop(i) {
              var item = acc[i];
              var itemTextActive = void 0;
              var itemButActive = void 0;
              var itemTitleActive = void 0;
              var itemText = item.querySelector(".accordionBlock__text");
              var itemTitle = item.querySelector(".accordionBlock__title");
              var itemButImg = item.querySelector(".accordionBlock__button");
              item.addEventListener("click", function() {
                if (activeSlideIndex >= 0) {
                  itemTextActive = acc[activeSlideIndex].querySelector(
                    ".accordionBlock__text"
                  );
                  itemButActive = acc[activeSlideIndex].querySelector(
                    ".accordionBlock__button"
                  );
                  itemTitleActive = acc[activeSlideIndex].querySelector(
                    ".accordionBlock__title"
                  );
                }

                if (isActive) {
                  if (activeSlideIndex == i) {
                    itemText.style.height = "0";
                    isActive = false;
                    activeSlideIndex = -1;
                    itemButImg.style.transform = "rotate(180deg)";
                    itemTitle.classList.remove("active");
                  } else {
                    itemTextActive.style.height = "0";
                    itemButActive.style.transform = "rotate(180deg)";
                    itemTitleActive.classList.remove("active");
                    itemText.style.height = "50px";
                    itemButImg.style.transform = "rotate(0deg)";
                    itemTitle.classList.add("active");
                    activeSlideIndex = i;
                  }
                } else {
                  isActive = true;
                  itemText.style.height = "50px";
                  activeSlideIndex = i;
                  itemButImg.style.transform = "rotate(0deg)";
                  itemTitle.classList.add("active");
                }
              });
            };

            for (var i = 0; i < acc.length; i++) {
              _loop(i);
            }
          }
        };

        /***/
      },

    /***/ "../src/common/accordion/accordion.scss":
      /*!*********************************************!*\
  !*** ./src/common/accordion/accordion.scss ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ "../src/common/accordion/index.js":
      /*!***************************************!*\
  !*** ./src/common/accordion/index.js ***!
  \***************************************/
      /*! exports provided: accordion */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./accordion */ "../src/common/accordion/accordion.js"
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "accordion",
          function() {
            return _accordion__WEBPACK_IMPORTED_MODULE_0__["accordion"];
          }
        );

        /***/
      },

    /***/ "../src/lesson_14_hmw/lesson_14_hmw.js":
      /*!********************************************!*\
  !*** ./src/lesson_14_hmw/lesson_14_hmw.js ***!
  \********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _lesson_14_hmw_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./lesson_14_hmw.scss */ "../src/lesson_14_hmw/lesson_14_hmw.scss"
        );
        /* harmony import */ var _lesson_14_hmw_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _lesson_14_hmw_scss__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _common_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../common/accordion */ "../src/common/accordion/index.js"
        );

        var point = document.querySelector(".mainWrap");
        Object(_common_accordion__WEBPACK_IMPORTED_MODULE_1__["accordion"])(
          point
        );

        /***/
      },

    /***/ "../src/lesson_14_hmw/lesson_14_hmw.scss":
      /*!**********************************************!*\
  !*** ./src/lesson_14_hmw/lesson_14_hmw.scss ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ 13:
      /*!**************************************************!*\
  !*** multi ./src/lesson_14_hmw/lesson_14_hmw.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! ./src/lesson_14_hmw/lesson_14_hmw.js */ "../src/lesson_14_hmw/lesson_14_hmw.js"
        );

        /***/
      }

    /******/
  }
);
//# sourceMappingURL=lesson_14_hmw.js.map
