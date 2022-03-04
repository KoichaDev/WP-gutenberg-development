/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/stores/todos-stores/actions.js":
/*!********************************************!*\
  !*** ./src/stores/todos-stores/actions.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": function() { return /* binding */ addTodo; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/stores/todos-stores/types.js");

const addTodo = todo => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_TODO,
    todo
  };
};

/***/ }),

/***/ "./src/stores/todos-stores/controls.js":
/*!*********************************************!*\
  !*** ./src/stores/todos-stores/controls.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchTodos": function() { return /* binding */ fetchTodos; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/stores/todos-stores/types.js");
 // controllers is used to send API-request to our resolvers. Controllers are another type of actions that is called "control-actions"

const fetchTodos = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.FETCH_TODOS
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  FETCH_TODOS() {
    return window.fetch('https://jsonplaceholder.typicode.com/todos?_limit=10').then(response => response.json());
  }

});

/***/ }),

/***/ "./src/stores/todos-stores/index.js":
/*!******************************************!*\
  !*** ./src/stores/todos-stores/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/stores/todos-stores/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./src/stores/todos-stores/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/stores/todos-stores/actions.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ "./src/stores/todos-stores/resolvers.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls */ "./src/stores/todos-stores/controls.js");






const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)('blocks-course/todos', {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__,
  // selectors is only going to return something from a local state, and not any API (side-effects )
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__,
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_4__,
  controls: _controls__WEBPACK_IMPORTED_MODULE_5__["default"] // control functions that will run whenever a control-action is called

});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);

/***/ }),

/***/ "./src/stores/todos-stores/reducer.js":
/*!********************************************!*\
  !*** ./src/stores/todos-stores/reducer.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/stores/todos-stores/types.js");

const DEFAULT_STATE = {
  todos: []
};

const reducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__.ADD_TODO:
      return { ...state,
        todos: [...state.todos, action.todo]
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/stores/todos-stores/resolvers.js":
/*!**********************************************!*\
  !*** ./src/stores/todos-stores/resolvers.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTodos": function() { return /* binding */ getTodos; }
/* harmony export */ });
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ "./src/stores/todos-stores/controls.js");
// Resolvers is handling the side-effects
 // The generator function are a function that can stop their execution at a certain pointa and come back and continue later
// More info about how generator function works: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

function* getTodos() {
  // // we have to use 'yield' keyword  to dispatch it, because w are using generator function
  const todos = yield (0,_controls__WEBPACK_IMPORTED_MODULE_0__.fetchTodos)();
  console.log(todos);
}

/***/ }),

/***/ "./src/stores/todos-stores/selectors.js":
/*!**********************************************!*\
  !*** ./src/stores/todos-stores/selectors.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTodos": function() { return /* binding */ getTodos; }
/* harmony export */ });
const getTodos = state => {
  return state.todos;
};

/***/ }),

/***/ "./src/stores/todos-stores/types.js":
/*!******************************************!*\
  !*** ./src/stores/todos-stores/types.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_TODO": function() { return /* binding */ ADD_TODO; },
/* harmony export */   "FETCH_TODOS": function() { return /* binding */ FETCH_TODOS; }
/* harmony export */ });
const ADD_TODO = 'ADD_TODO';
const FETCH_TODOS = 'FETCH_TODOS';

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stores_todos_stores_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stores/todos-stores/index.js */ "./src/stores/todos-stores/index.js");

}();
/******/ })()
;
//# sourceMappingURL=index.js.map