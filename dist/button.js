/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/button.js":
/*!**********************!*\
  !*** ./js/button.js ***!
  \**********************/
/***/ (() => {

eval("function windowLoad() {\n    \n    if (document.querySelector('[data-glow]')) {\n\n        document.documentElement.addEventListener('mouseover', buttonActions);\n        document.documentElement.addEventListener('mouseout', buttonActions);\n        document.documentElement.addEventListener('mousemove', buttonActions);\n\n        let buttonGlow;\n        let buttonGlowColor;\n        let buttonGlowSize;\n        \n\n        function buttonActions(event) {\n\n            const button = event.target.closest('[data-glow]');\n            \n            if (!button) return;\n\n            if (event.type === 'mouseover') {\n\n                button.insertAdjacentHTML('beforeend', `\n                    <span class=\"button__glow\">\n                        <span class=\"button__color\"></span>\n                    </span>\n                `)\n\n                buttonGlow = button.querySelector('.button__glow');\n                buttonGlowColor = button.querySelector('.button__color');\n                buttonGlowSize = Math.min(button.offsetWidth, button.offsetHeight);\n                buttonGlow.style.width = buttonGlow.style.height = `${buttonGlowSize}px`;\n\n                buttonGlowColor.style.width = `${button.offsetWidth}px`;\n                buttonGlowColor.style.height = `${button.offsetHeight}px`;\n            }\n\n            if (event.type === 'mouseout') {\n                button.querySelector('.button__glow').remove();\n            }\n\n            if (event.type === 'mousemove') {\n                const posX = event.pageX - (button.getBoundingClientRect().left - scrollX);\n                const posY = event.pageY - (button.getBoundingClientRect().top - scrollY);\n\n                buttonGlow.style.left =  `${posX - buttonGlowSize / 2}px`;\n                buttonGlow.style.top =  `${posY - buttonGlowSize / 2}px`;\n\n                buttonGlowColor.style.transform = `\n                    translate(${posX - (button.offsetWidth - buttonGlowSize / 2)}px,\n                              ${posY - (button.offsetHeight - buttonGlowSize / 2)}px)`;\n            }\n        }\n    }\n}\n\nwindow.addEventListener('load', windowLoad);\n\n//# sourceURL=webpack:///./js/button.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/button.js"]();
/******/ 	
/******/ })()
;