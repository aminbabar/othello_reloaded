/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_boardState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/boardState */ \"./src/scripts/boardState.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let state = new _scripts_boardState__WEBPACK_IMPORTED_MODULE_0__.default();\n// state.test(1, 1);\n// state.test(7, 7);\n// console.log(\"before\");\n    state.printBoard();\n\n// console.log(\"clone\")\n// let newState = clone(state);\n// newState.test(0, 0);\n// newState.test(2, 2);\n// newState.printBoard();\n// debugger;\n\n\n// console.log(\"original\");\n// state.printBoard();\n});\n\n\n\n//# sourceURL=webpack://othello_reloaded/./src/index.js?");

/***/ }),

/***/ "./src/scripts/boardState.js":
/*!***********************************!*\
  !*** ./src/scripts/boardState.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\nclass boardState {\n    constructor() {\n        this.board = boardState.createBoard();\n        // black is the first player in othello\n        this.currentPlayer = \"black\";\n    }\n\n    // A static method that would return a board that is set up!\n    static createBoard() {\n        let boardWidth = 8;\n        let boardLength = 8;\n        let board = [];\n        for (let i = 0; i < boardLength; i++) {\n            let row = [];\n            for (let j = 0; j < boardWidth; j++) {\n                row.push(null);\n            }\n            board.push(row);\n        }\n\n        // Setting up the initial board\n        board[3][3] = \"white\";\n        board[4][4] = \"white\";\n        board[3][4] = \"black\";\n        board[4][3] = \"black\";\n\n        return board;\n    }\n\n    static nextPlayerColor(currentPlayerColor) {\n        if (currentPlayerColor === white) return \"black\";\n        return \"white\"\n    }\n\n\n}\n\nboardState.prototype.makeMove = function() {\n\n}\n\nboardState.prototype.availableMoves = function () {\n\n}\n\n\nboardState.prototype.currentPlayerScore = function () {\n\n}\n\n\n\n// prints out the string version of the board to the console\nboardState.prototype.printBoard = function() {\n    for (let i = 0; i < this.board.length; i++) {\n        let str = \"\";\n        for (let j = 0; j < this.board[0].length; j++) {\n            if (!this.board[i][j]) {\n                str += \" null  \";\n            } else if (this.board[i][j] instanceof Object) {\n                str += \" test  \";\n            }\n             else {\n                str += ` ${this.board[i][j]} `;\n            }\n        }\n        console.log(str);\n    }\n}\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (boardState);\n\n\n// class Test {\n//     constructor() {\n//         this.test = \"test\";\n//         this.length = 10;\n//     }\n// }\n\n// Test.prototype.blah = function() {\n//     return this.length * 10;\n// }\n\n\n// boardState.prototype.test = function (i, j) {\n//     this.board[i][j] = new Test;\n// }\n\n\n\n\n\n\n\n\n\n\n\n\n\n// CITE: Copied form https://gist.github.com/GeorgeGkas/36f7a7f9a9641c2115a11d58233ebed2\n// Creates a deep copy of a class. Allegedly. \nfunction clone(instance) {\n    return Object.assign(\n        Object.create(\n            // Set the prototype of the new object to the prototype of the instance.\n            // Used to allow new object behave like class instance.\n            Object.getPrototypeOf(instance),\n        ),\n        // Prevent shallow copies of nested structures like arrays, etc\n        JSON.parse(JSON.stringify(instance)),\n    );\n}\n// Upon some testing, if I had classes in the board, cloning the board, would \n// not clone the classes present within. \n\n\n// let state = new boardState();\n// state.test(1, 1);\n// state.test(7, 7);\n// console.log(\"before\");\n// state.printBoard();\n\n\n\n// console.log(\"clone\")\n// let newState = clone(state);\n// newState.test(0, 0);\n// newState.test(2, 2);\n// newState.printBoard();\n// debugger;\n\n\n// console.log(\"original\");\n// state.printBoard();\n\n\n\n\n\n\n//# sourceURL=webpack://othello_reloaded/./src/scripts/boardState.js?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;