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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_boardState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/boardState */ \"./src/scripts/boardState.js\");\n// import { stat } from \"fs\";\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let state = new _scripts_boardState__WEBPACK_IMPORTED_MODULE_0__.default();\n// state.test(1, 1);\n// state.test(7, 7);\n// console.log(\"before\");\n    // debugger;   \n    // state.printBoard();\n    console.log(state.availableMoves());\n    // state.printBoard();\n    // state.\n    state.testMove(state.availableMoves());\n    state.printBoard();\n    // console.log(state.movesInDir(3, 0, 2, 1));\n    state.makeMove([3,2]);\n    state.printBoard();\n    console.log(\"hi\");\n    state.testMove(state.availableMoves());\n    state.printBoard();\n\n\n\n// console.log(\"clone\")\n// let newState = clone(state);\n// newState.test(0, 0);\n// newState.test(2, 2);\n// newState.printBoard();\n// debugger;\n\n\n// console.log(\"original\");\n// state.printBoard();\n});\n\n\n\n//# sourceURL=webpack://othello_reloaded/./src/index.js?");

/***/ }),

/***/ "./src/scripts/boardState.js":
/*!***********************************!*\
  !*** ./src/scripts/boardState.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\nclass BoardState {\n    \n    constructor() {\n        this.board = BoardState.createBoard();\n        // black is the first player in othello\n        this.currentPlayer = \"black\";\n        this.BOARDWIDTH = 8;\n        this.BOARDLENGTH = 8;\n    }\n    \n\n    // A static method that would return a board that is set up!\n    static createBoard() {\n        let BOARDLENGTH = 8;\n        let BOARDWIDTH = 8;\n        let board = [];\n        for (let i = 0; i < BOARDLENGTH; i++) {\n            let row = [];\n            for (let j = 0; j < BOARDWIDTH; j++) {\n                row.push(null);\n            }\n            board.push(row);\n        }\n\n        // Setting up the initial board\n        board[3][3] = \"white\";\n        board[4][4] = \"white\";\n        board[3][4] = \"black\";\n        board[4][3] = \"black\";\n\n        return board;\n    }\n\n    static oppColor(color) {\n        if (color === \"black\") return \"white\";\n        return \"black\";\n    }\n\n    static nextPlayerColor(currentPlayerColor) {\n        if (currentPlayerColor === white) return \"black\";\n        return \"white\"\n    }\n\n\n}\n\n// Returns all the moves for the current player \nBoardState.prototype.availableMoves = function () {\n    let moves = [];\n    for (let i = 0; i < this.BOARDLENGTH; i++) {\n        for (let j = 0; j < this.BOARDWIDTH; j++) {\n            if (this.validMove([i, j], this.currentPlayer)) {\n                moves.push([i, j]);\n            }\n        }\n    }\n    return moves;\n}\n\n// returns true if the current position is within bounds, else false\nBoardState.prototype.validPos = function(pos) {\n    let posR = pos[0];\n    let posC = pos[1];\n    if (posR > 7 || posR < 0 || posC > 7 || posC < 0) {\n        return false;\n    }\n    return true;\n}\n\n\n// returns true if a valid move can be made at the given position by the given\n// player\nBoardState.prototype.validMove = function(pos, player) {\n    if (!this.validPos(pos)) return false;\n\n    let dirs = [1, 0, -1];\n\n    let posR = pos[0];\n    let posC = pos[1];\n    for (const dr of dirs) {\n        for (const dc of dirs) {\n            if (dr == 0 && dc == 0) continue;\n            // console.log(posR, dr, posC, dc);\n            if ((this.movesInDir(posR, dr,  posC, dc)).length > 0) return true\n        }\n    }\n    return false;\n}\n\n\n\n// flips the color of the piece at the given pos\nBoardState.prototype.flip = function(pos) {\n    // debugger;\n    this.board[pos[0]][pos[1]] = this.currentPlayer;\n}\n\n\n\n// Returns true if a piece of the current players color is flanking pieces of another\n// player in a given direciton.\nBoardState.prototype.movesInDir = function (r, dr, c, dc, positions = []) {\n    if (!this.validPos([r + dr, c + dc])) return [];\n\n    let currPiece = this.board[r + dr][c + dc];\n\n    if (!currPiece || currPiece === \"MOVE\") return []; // CHANGE THE MOVE PART\n\n    // if flanking condition is true\n    if (currPiece === this.currentPlayer && positions.length > 0) {\n        return positions;\n    } \n    // false if trying to make a move next to our own color in that direction\n    else if (currPiece === this.currentPlayer) {\n        return [];\n    }\n\n\n    if (currPiece === BoardState.oppColor(this.currentPlayer)) {\n        positions.push([r + dr, c + dc]);\n        return this.movesInDir(r + dr, dr, c + dc, dc, positions)\n    }\n}\n\n\n// Should only be called on valid moves. Does not check for validity.\nBoardState.prototype.makeMove = function(pos) {\n    const r = pos[0];\n    const c = pos[1];\n\n    let moves = [];\n    const dirs = [1, 0, -1];\n\n    for (const dr of dirs) {\n        for (const dc of dirs) {\n\n            if (dr === 0 && dc === 0) continue;\n            console.log(r, dr, c, dc);\n            // debugger;\n            moves = moves.concat(this.movesInDir(r, dr, c, dc));\n        }\n    }\n\n    // flip all the relevant pieces for the current move\n    this.board[r][c] = this.currentPlayer;\n    // debugger;\n    for (let move of moves) {\n        this.flip(move);\n    }\n\n    this.currentPlayer = BoardState.oppColor(this.currentPlayer);\n}\n\n\n\nBoardState.prototype.currentPlayerScore = function () {\n\n}\n\n\nBoardState.prototype.testMove = function(arr) {\n    for (let ele of arr) {\n        this.board[ele[0]][ele[1]] = \"MOVE\";\n    }\n}\n\n\n// prints out the string version of the board to the console\nBoardState.prototype.printBoard = function() {\n    for (let i = 0; i < this.board.length; i++) {\n        let str = `${i} `;\n        for (let j = 0; j < this.board[0].length; j++) {\n            if (!this.board[i][j]) {\n                str += \" null  \";\n            } else if (this.board[i][j] instanceof Object) {\n                str += \" test  \";\n            }\n             else {\n                str += ` ${this.board[i][j]} `;\n            }\n        }\n        console.log(str);\n    }\n}\n\nwindow.BoardState = BoardState;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardState);\n\n\n// class Test {\n//     constructor() {\n//         this.test = \"test\";\n//         this.length = 10;\n//     }\n// }\n\n// Test.prototype.blah = function() {\n//     return this.length * 10;\n// }\n\n\n// boardState.prototype.test = function (i, j) {\n//     this.board[i][j] = new Test;\n// }\n\n\n\n\n\n\n\n\n\n\n\n\n\n// CITE: Copied form https://gist.github.com/GeorgeGkas/36f7a7f9a9641c2115a11d58233ebed2\n// Creates a deep copy of a class. Allegedly. \nfunction clone(instance) {\n    return Object.assign(\n        Object.create(\n            // Set the prototype of the new object to the prototype of the instance.\n            // Used to allow new object behave like class instance.\n            Object.getPrototypeOf(instance),\n        ),\n        // Prevent shallow copies of nested structures like arrays, etc\n        JSON.parse(JSON.stringify(instance)),\n    );\n}\n// Upon some testing, if I had classes in the board, cloning the board, would \n// not clone the classes present within. \n\n\n// let state = new boardState();\n// state.test(1, 1);\n// state.test(7, 7);\n// console.log(\"before\");\n// state.printBoard();\n\n\n\n// console.log(\"clone\")\n// let newState = clone(state);\n// newState.test(0, 0);\n// newState.test(2, 2);\n// newState.printBoard();\n// debugger;\n\n\n// console.log(\"original\");\n// state.printBoard();\n\n\n\n\n\n\n//# sourceURL=webpack://othello_reloaded/./src/scripts/boardState.js?");

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