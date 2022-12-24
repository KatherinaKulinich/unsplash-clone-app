/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./sass/styles.scss":
/*!**************************!*\
  !*** ./sass/styles.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./sass/styles.scss?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./sass/styles.scss\");\n/* harmony import */ var _images_gallery_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/gallery.png */ \"./images/gallery.png\");\n/* harmony import */ var _images_arrow_prev_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/arrow-prev.svg */ \"./images/arrow-prev.svg\");\n/* harmony import */ var _images_arrow_next_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/arrow-next.svg */ \"./images/arrow-next.svg\");\n/* harmony import */ var _images_cross_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/cross.svg */ \"./images/cross.svg\");\n\n\n\n\n\n\n\n\nconst form = document.querySelector('#form');\nconst container = document.querySelector('.container');\n\nconst slider = document.querySelector('#slider');\nslider.style.display = \"none\";\n\nconst sliderContent = document.querySelector('#content');\nconst buttonNext = document.querySelector('#next');\nconst buttonPrev = document.querySelector('#prev');\nconst buttonClose = document.querySelector('#close');\nbuttonPrev.style.display = \"block\";\nbuttonNext.style.display = \"block\";\n\n\n\n\nform.addEventListener('submit', (event) => {\n    event.preventDefault();\n    \n    const topic = form.elements['searchTopic'].value;\n\n    if (topic.length === 0) {\n        container.replaceChildren();\n        showErrorMessage('You need to enter a search topic');\n        return;\n    }\n\n    const api = `https://api.unsplash.com/search/photos?query=${topic}&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;\n    getImages(api);\n\n    form.elements['searchTopic'].value = '';\n})\n\n\n\n\n\nfunction getImages(url) {\n    fetch(url)\n    .then((response) => {\n        return response.json();\n    })\n    .then((json) => createImagesList(json))\n    .catch((error) => {\n        showErrorMessage('An error has occurred. Please, try again');\n    })\n}\n\n\nfunction createImagesList(data) {\n    container.replaceChildren();\n\n    if (data.results.length > 0) {\n\n        for (let i = 0; i < data.results.length; i++) {\n    \n            let imageItem = document.createElement('div');\n            imageItem.classList.add('container__image');\n            imageItem.style.backgroundImage = `url(${data.results[i].urls.raw}&w=1366&h=768 )`;\n    \n\n\n            imageItem.addEventListener(\"dblclick\", () => {\n                window.open(data.results[i].links.download, '_blank');\n            });\n\n\n\n            imageItem.addEventListener('click', () => {\n                slider.style.display = \"block\";\n                sliderContent.style.backgroundImage = `url(${data.results[i].urls.raw}&w=1366&h=768 )`;\n\n                buttonPrev.style.display = \"none\";\n                buttonNext.style.display = \"none\";\n                \n                // let sliderNumber = i;\n                \n                // buttonPrev.style.display = \"block\";\n                // buttonNext.style.display = \"block\";\n                \n                // if (sliderNumber === 0) {\n                //     buttonPrev.style.display = \"none\";\n                //     return;\n                // }\n                // if (sliderNumber === data.results.length -1) {\n                //     buttonNext.style.display = \"none\";\n                //     return;\n                // }\n            \n                // function getAnotherSlide() {\n                //     sliderContent.style.backgroundImage = `url(${data.results[sliderNumber].urls.raw}&w=1366&h=768 )`;\n                //     console.warn(data.results[sliderNumber].urls.raw, sliderContent);\n                // }\n            \n                // buttonNext.addEventListener('click', () => {\n                //     sliderContent.removeAttribute('style', '');\n                    \n                //     buttonPrev.style.display = \"block\";\n                //     sliderNumber++;\n                //     console.warn(sliderNumber, data.results.length);\n                //     getAnotherSlide();\n                    \n                   \n                //     if (sliderNumber < data.results.length -1) return;\n                    \n                //     if (sliderNumber === data.results.length - 1) {\n                //         buttonNext.style.display = \"none\";\n                //         return;\n                //     }  \n                // })\n            \n            \n                // buttonPrev.addEventListener('click', () => {\n            \n                //     sliderContent.removeAttribute('style', '');\n                //     buttonNext.style.display = \"block\";\n                    \n                //     sliderNumber--;\n                //     console.warn(sliderNumber, data.results.length);\n                //     getAnotherSlide();\n                    \n                //     if (sliderNumber > 0)  return;\n                    \n                //     if (sliderNumber === 0) {\n                        \n                //         buttonPrev.style.display = \"none\";\n                //         return;\n                //     }\n            \n                // });\n            \n            \n                buttonClose.addEventListener('click', () => {\n                    slider.style.display = \"none\";\n                })\n            \n            \n            })\n            \n\n            container.append(imageItem);\n        }\n        \n        return ;\n    }\n\n    showErrorMessage('No results were found for this query.')\n}\n\n  \n\n\n\n\nfunction showErrorMessage(messageText) {\n    const errorMessage = document.createElement('p');\n    errorMessage.classList.add('container__error');\n    errorMessage.innerHTML = messageText;\n    container.append(errorMessage);\n\n    setTimeout(() => {\n        errorMessage.remove()\n    }, 4000)\n}\n\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./images/arrow-next.svg":
/*!*******************************!*\
  !*** ./images/arrow-next.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/arrow-next.svg\";\n\n//# sourceURL=webpack:///./images/arrow-next.svg?");

/***/ }),

/***/ "./images/arrow-prev.svg":
/*!*******************************!*\
  !*** ./images/arrow-prev.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/arrow-prev.svg\";\n\n//# sourceURL=webpack:///./images/arrow-prev.svg?");

/***/ }),

/***/ "./images/cross.svg":
/*!**************************!*\
  !*** ./images/cross.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/cross.svg\";\n\n//# sourceURL=webpack:///./images/cross.svg?");

/***/ }),

/***/ "./images/gallery.png":
/*!****************************!*\
  !*** ./images/gallery.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/gallery.png\";\n\n//# sourceURL=webpack:///./images/gallery.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;