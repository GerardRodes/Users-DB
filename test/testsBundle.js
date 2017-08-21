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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _updating = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
	function Component(props, children) {
		_classCallCheck(this, Component);

		this.props = props || {};
		this.children = children || [];

		this._vNode = null;
		this.$parent = null;
	}

	_createClass(Component, [{
		key: 'updateComponent',
		value: function updateComponent(newState) {
			this.state = newState;

			var nextVNode = this.render();
			var index = Array.from(this.$parent.children).indexOf(this.$element);

			(0, _updating.update)(this._vNode, nextVNode, this.$parent, index);

			this._vNode = nextVNode;
		}
	}, {
		key: 'componentWillUpdate',
		value: function componentWillUpdate(nextProps, nextState) {}
	}, {
		key: 'setState',
		value: function setState(newValues) {
			var newState = Object.assign({}, this.state, newValues);
			this.updateComponent(newState);
		}
	}, {
		key: 'render',
		value: function render() {}
	}]);

	return Component;
}();

exports.default = Component;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = mount;

var _mount = __webpack_require__(21);

var _mount2 = _interopRequireDefault(_mount);

var _mount3 = __webpack_require__(22);

var _mount4 = _interopRequireDefault(_mount3);

var _mount5 = __webpack_require__(26);

var _mount6 = _interopRequireDefault(_mount5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
	Decides if a vNode is a vElement, vText or vComponent
	and passes it throught the right mounting method
*/
function mount(vNode, $parent, index) {
	if (vNode !== undefined && vNode !== null) {
		var tag = vNode.tag,
		    props = vNode.props,
		    children = vNode.children;

		index = index || $parent.childNodes.length;

		//It's a text node
		if (typeof vNode === 'string' || typeof vNode === 'number') {
			return (0, _mount6.default)(vNode, $parent, index);
		}

		//It's an element
		if (typeof tag === 'string') {
			return (0, _mount4.default)(vNode, $parent, index);
		}

		//It's a component
		if (typeof tag === 'function') {
			return (0, _mount2.default)(vNode, $parent, index);
		}
	}
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = update;
exports.updateAttributes = updateAttributes;
exports.updateChildren = updateChildren;

__webpack_require__(5);

var _update = __webpack_require__(23);

var _update2 = _interopRequireDefault(_update);

var _update3 = __webpack_require__(24);

var _update4 = _interopRequireDefault(_update3);

var _update5 = __webpack_require__(25);

var _update6 = _interopRequireDefault(_update5);

var _mounting = __webpack_require__(2);

var _mounting2 = _interopRequireDefault(_mounting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  Updates an $element, here we want to assert that
  oldVNode and newVNode reference to the same $element
*/
function update(oldVNode, newVNode, $parent) {
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (oldVNode === undefined && newVNode !== undefined) {
    //New, has to be mounted
    (0, _mounting2.default)(newVNode, $parent, index);
  } else if (oldVNode !== undefined && newVNode === undefined) {
    //Removed, add flag for post deleting
    oldVNode._remove = true;
    return 'deleted';
  } else if (oldVNode !== undefined && newVNode !== undefined) {
    //Updating
    if (typeof oldVNode === 'string' || typeof oldVNode === 'number') {
      (0, _update6.default)(oldVNode, newVNode, $parent, index);
    }

    if (oldVNode.tag === newVNode.tag) {
      if (typeof oldVNode.tag === 'string') {
        (0, _update4.default)(oldVNode, newVNode);
      } else if (typeof oldVNode.tag === 'function') {
        (0, _update2.default)(oldVNode, newVNode);
      }
    }
  }
}

function updateAttributes($element, newAttributes) {

  for (var prop in newAttributes) {
    if (!prop.startsWith('_')) {
      if (prop === 'style') {
        for (var cssProp in newAttributes[prop]) {
          $element.style[cssProp] = newAttributes[prop][cssProp];
        }
      } else {
        var value = newAttributes[prop];
        if (prop.startsWith('on')) {
          //It's an event
          $element[prop.toLowerCase()] = value;
        } else {
          if (value === null) {
            $element.removeAttribute(prop);
          } else {
            $element.setAttribute(prop, value);
          }
        }
      }
    }
  }
}

function updateChildren(oldVElement, newVElement, $element) {
  var prevChildren = Array.isArray(oldVElement.children) ? oldVElement.children : [oldVElement.children];
  var nextChildren = Array.isArray(newVElement.children) ? newVElement.children : [newVElement.children];

  var nodeDeleted = false;

  for (var i = 0; i < nextChildren.length || i < prevChildren.length; i++) {
    var nextChild = nextChildren[i];
    var prevChild = prevChildren[i];
    var status = update(prevChild, nextChild, $element, i);

    if (status === 'deleted') {
      nodeDeleted = true;
    }
  }

  if (nodeDeleted) {
    var deletedNodes = 0;
    prevChildren.forEach(function (prevChild, index) {
      if (prevChild._remove) {
        $element.removeChild($element.childNodes[index - deletedNodes]);
        deletedNodes++;
      }
    });
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(14);
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	Flattens an array
	[1,2, [3,4], [[5,6], [7,8]]] => [1, 2, 3, 4, 5, 6, 7, 8]
*/
Array.prototype.flatten = function () {
  return this.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? toFlatten.flatten() : toFlatten);
  }, []);
};

//Inserts an element at the specefied index or appends it
Element.prototype.insertAtIndex = function (child, index) {
  index = index || 0;
  if (index >= this.children.length) {
    this.appendChild(child);
  } else {
    this.insertBefore(child, this.children[index]);
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {"baseUrl":"http://localhost:3000/"}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fakeComponent = fakeComponent;

var _assert = __webpack_require__(4);

var _assert2 = _interopRequireDefault(_assert);

__webpack_require__(18);

__webpack_require__(19);

__webpack_require__(8);

var _vDOM = __webpack_require__(20);

var _vDOM2 = _interopRequireDefault(_vDOM);

var _app = __webpack_require__(27);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
	Initializes a component for testing purposes
*/
function fakeComponent(instance) {
	instance.$parent = {
		children: []
	};
	instance._vNode = {
		tag: 'div'
	};
	instance.$element = instance._vNode.$element = document.createElement('div');

	return instance;
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*
 * A noop version in case your tests are browserified (eg, when using
 * testling).
 */

module.exports = function () {}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeftBar = function (_Component) {
	_inherits(LeftBar, _Component);

	function LeftBar() {
		_classCallCheck(this, LeftBar);

		return _possibleConstructorReturn(this, (LeftBar.__proto__ || Object.getPrototypeOf(LeftBar)).apply(this, arguments));
	}

	_createClass(LeftBar, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return h(
				'ul',
				null,
				this.props._sections.map(function (section) {
					return h(
						'li',
						{ 'data-section-id': section,
							onClick: function onClick(e) {
								return _this2.props.onChange(e);
							},
							'class': section === _this2.props._active ? 'active' : null,
							role: 'button' },
						section.charAt(0).toUpperCase() + section.slice(1)
					);
				})
			);
		}
	}]);

	return LeftBar;
}(_Component3.default);

exports.default = LeftBar;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

var _RoleWidget = __webpack_require__(12);

var _RoleWidget2 = _interopRequireDefault(_RoleWidget);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseUrl = _config2.default.baseUrl;

var ListUsers = function (_Component) {
	_inherits(ListUsers, _Component);

	function ListUsers(props, children) {
		_classCallCheck(this, ListUsers);

		var _this = _possibleConstructorReturn(this, (ListUsers.__proto__ || Object.getPrototypeOf(ListUsers)).call(this, props, children));

		_this.state = {
			modalIsOpen: false,
			modalIsVisible: false,
			searchString: '',
			userSelected: {},
			newUser: {
				username: '',
				rolesId: []
			}
		};
		return _this;
	}

	_createClass(ListUsers, [{
		key: 'renderUsers',
		value: function renderUsers() {
			var _this2 = this;

			return this.props._users.filter(function (user) {
				if (!_this2.state.searchString) {
					return true;
				} else {
					return user.username.indexOf(_this2.state.searchString) > -1;
				}
			}).map(function (user) {
				return h(
					'li',
					{ 'class': 'list-item',
						'user-id': user.id },
					h(
						'strong',
						{ 'class': "name " + (_this2.state.userSelected.id === user.id ? 'active' : ''),
							onClick: function onClick(e) {
								_this2.setState({
									userSelected: _this2.state.userSelected.id !== user.id ? user : {}
								});
							}
						},
						user.username
					),
					h(_RoleWidget2.default, {
						_user: user,
						_roles: _this2.props._roles
					})
				);
			});
		}
	}, {
		key: 'handleInputUsername',
		value: function handleInputUsername(e) {
			this.setState({
				newUser: {
					username: e.target.value,
					rolesId: this.state.newUser.rolesId
				}
			});
		}
	}, {
		key: 'toggleRole',
		value: function toggleRole(roleId) {
			var roleIndex = this.state.newUser.rolesId.indexOf(roleId);
			if (roleIndex === -1) {
				this.setState({
					newUser: {
						username: this.state.newUser.username,
						rolesId: this.state.newUser.rolesId.concat([roleId])
					}
				});
			} else {
				var rolesIds = this.state.newUser.rolesId.slice();
				rolesIds.splice(roleIndex, 1);
				this.setState({
					newUser: {
						username: this.state.newUser.username,
						rolesId: rolesIds
					}
				});
			}
		}
	}, {
		key: 'createNewUser',
		value: function createNewUser(e) {
			var _this3 = this;

			var newUser = this.state.newUser;
			if (newUser.rolesId.length && newUser.username) {
				fetch(baseUrl + 'users', {
					method: 'post',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(newUser)
				}).then(function (response) {
					return response.json();
				}).then(function (data) {
					if (_this3.props.onUpdateUsers) {
						_this3.props.onUpdateUsers(data);
					}
					_this3.closeModal();
				});
			}
		}
	}, {
		key: 'deleteUser',
		value: function deleteUser() {
			var _this4 = this;

			if (this.state.userSelected.id !== undefined) {
				fetch(baseUrl + 'users/' + this.state.userSelected.id, {
					method: 'delete',
					headers: {
						'Content-Type': 'application/json'
					}
				}).then(function (response) {
					return response.json();
				}).then(function (data) {
					if (_this4.props.onUpdateUsers) {
						_this4.props.onUpdateUsers(data);
					}
				});
			}
		}
	}, {
		key: 'closeModal',
		value: function closeModal() {
			var _this5 = this;

			this.setState({
				modalIsVisible: false,
				emphasis: 0,
				newUser: {
					username: '',
					rolesId: []
				}
			});
			setTimeout(function () {
				return _this5.setState({ modalIsOpen: false });
			}, 250);
		}
	}, {
		key: 'renderModal',
		value: function renderModal() {
			var _this6 = this;

			if (this.state.modalIsOpen) {
				return h(
					'div',
					{ 'class': "modal manage-roles " + (this.state.modalIsVisible ? 'visible' : '') },
					h(
						'span',
						{ 'class': 'close',
							role: 'button',
							onClick: function onClick() {
								return _this6.closeModal();
							} },
						'\u2716'
					),
					h(
						'div',
						{ 'class': 'content' },
						h(
							'h2',
							{ 'class': 'title' },
							'Create new user'
						),
						h(
							'p',
							{ 'class': 'desc' },
							'At least one role must be assigned'
						),
						h('input', { value: this.state.newUser.username,
							type: 'text',
							placeholder: 'username',
							onInput: function onInput(e) {
								return _this6.handleInputUsername(e);
							} }),
						h(
							'ul',
							{ 'class': 'list' },
							this.props._roles.map(function (role) {
								var isAssigned = _this6.state.newUser.rolesId.includes(role.id);
								return h(
									'li',
									{ 'class': 'list-item ' + (isAssigned ? 'active' : ''),
										role: 'button',
										onClick: function onClick() {
											return _this6.toggleRole(role.id);
										} },
									h(
										'strong',
										null,
										role.name
									)
								);
							})
						),
						h(
							'button',
							{ disabled: this.state.newUser.rolesId.length && this.state.newUser.username ? null : 'disabled',
								onClick: function onClick(e) {
									return _this6.createNewUser();
								} },
							'Create user'
						)
					)
				);
			}
		}
	}, {
		key: 'handleInputUsernameSearch',
		value: function handleInputUsernameSearch(e) {
			this.setState({
				searchString: e.target.value
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this7 = this;

			return h(
				'section',
				{ 'data-section-id': 'users' },
				h(
					'h2',
					{ 'class': 'title' },
					'USERS'
				),
				h('input', {
					value: this.state.searchString,
					type: 'text',
					placeholder: 'Search by username',
					onInput: function onInput(e) {
						return _this7.handleInputUsernameSearch(e);
					} }),
				h(
					'ul',
					{ 'class': 'list' },
					this.renderUsers()
				),
				h(
					'div',
					{ 'class': 'actions' },
					h(
						'button',
						{ onClick: function onClick() {
								_this7.setState({ modalIsOpen: true });
								setTimeout(function () {
									return _this7.setState({ modalIsVisible: true });
								}, 100);
							} },
						'Add a new user +'
					),
					h(
						'button',
						{ disabled: this.state.userSelected.id !== undefined ? null : 'disabled',
							onClick: function onClick(e) {
								return _this7.deleteUser();
							} },
						'Delete user'
					),
					this.renderModal()
				)
			);
		}
	}]);

	return ListUsers;
}(_Component3.default);

exports.default = ListUsers;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseUrl = _config2.default.baseUrl;

var RoleWidget = function (_Component) {
	_inherits(RoleWidget, _Component);

	function RoleWidget(props, children) {
		_classCallCheck(this, RoleWidget);

		var _this = _possibleConstructorReturn(this, (RoleWidget.__proto__ || Object.getPrototypeOf(RoleWidget)).call(this, props, children));

		_this.state = {
			modalIsOpen: false,
			modalIsVisible: false,
			user: _this.props._user,
			emphasis: 0
		};

		_this.emphasisStates = ['low', 'medium', 'high', 'maximum', 'OMG'];
		return _this;
	}

	_createClass(RoleWidget, [{
		key: 'getRoleNameById',
		value: function getRoleNameById(roleId) {
			var role = this.props._roles.filter(function (role) {
				return role && role.id === roleId;
			});

			return role.length ? role[0].name : '';
		}
	}, {
		key: 'toggleRole',
		value: function toggleRole(roleId) {
			var _this2 = this;

			var userUrl = baseUrl + 'users/' + this.state.user.id,
			    updatedUser = this.state.user,
			    indexOfRole = this.state.user.rolesId.indexOf(roleId);

			if (indexOfRole > -1) {
				//unassign role
				if (this.state.user.rolesId.length <= 1) {
					this.setState({ emphasis: this.state.emphasis + 1 });
					return null;
				}
				updatedUser.rolesId.splice(indexOfRole, 1);
			} else {
				//assign role
				updatedUser.rolesId.push(roleId);
			}

			this.setState({ emphasis: 0 });
			fetch(userUrl, {
				method: 'put',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(updatedUser)
			}).then(function (response) {
				return response.json();
			}).then(function (data) {
				return _this2.setState({
					user: data,
					assignedRoles: data.rolesId
				});
			});
		}
	}, {
		key: 'renderModal',
		value: function renderModal() {
			var _this3 = this;

			if (this.state.modalIsOpen) {
				return h(
					'div',
					{ 'class': "modal manage-roles " + (this.state.modalIsVisible ? 'visible' : '') },
					h(
						'span',
						{ 'class': 'close',
							role: 'button',
							onClick: function onClick(e) {
								_this3.setState({ modalIsVisible: false, emphasis: 0 });
								setTimeout(function () {
									return _this3.setState({ modalIsOpen: false });
								}, 250);
							} },
						'\u2716'
					),
					h(
						'div',
						{ 'class': 'content' },
						h(
							'h3',
							{ 'class': 'title' },
							'Managing roles for user: ',
							this.state.user.username
						),
						h(
							'p',
							{ 'class': 'desc',
								'data-emphasis': function () {
									if (!_this3.state.emphasis) {
										return null;
									}
									var emphasisLevel = Math.floor(_this3.state.emphasis / 5);

									if (emphasisLevel > _this3.emphasisStates.length - 1) {
										emphasisLevel = _this3.emphasisStates.length - 1;
									}

									return _this3.emphasisStates[emphasisLevel];
								}() },
							'At least one role must be assigned'
						),
						h(
							'ul',
							{ 'class': 'list' },
							this.props._roles.map(function (role) {
								var isAssigned = _this3.state.user.rolesId.includes(role.id);
								return h(
									'li',
									{ 'class': 'list-item ' + (isAssigned ? 'active' : ''),
										role: 'button',
										onClick: function onClick() {
											return _this3.toggleRole(role.id);
										} },
									h(
										'strong',
										null,
										role.name
									)
								);
							})
						)
					)
				);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			return h(
				'div',
				{ 'class': 'labels' },
				h(
					'ul',
					{ 'class': 'label-box',
						onClick: function onClick() {
							_this4.setState({ modalIsOpen: true });
							setTimeout(function () {
								return _this4.setState({ modalIsVisible: true });
							}, 100);
						} },
					this.state.user.rolesId.map(function (assignedRole) {
						return h(
							'li',
							{ 'class': 'label',
								'data-role-id': assignedRole },
							_this4.getRoleNameById(assignedRole)
						);
					})
				),
				this.renderModal()
			);
		}
	}]);

	return RoleWidget;
}(_Component3.default);

exports.default = RoleWidget;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListRoles = function (_Component) {
	_inherits(ListRoles, _Component);

	function ListRoles() {
		_classCallCheck(this, ListRoles);

		return _possibleConstructorReturn(this, (ListRoles.__proto__ || Object.getPrototypeOf(ListRoles)).apply(this, arguments));
	}

	_createClass(ListRoles, [{
		key: "renderRoles",
		value: function renderRoles() {
			return this.props._roles.map(function (role) {
				return h(
					"li",
					{ "class": "list-item",
						"role-id": role.id },
					h(
						"strong",
						{ "class": "name" },
						role.name
					),
					h(
						"div",
						{ "class": "labels" },
						h(
							"ul",
							{ "class": "permissions label-box" },
							role.permissions.map(function (permission) {
								return h(
									"li",
									{ "class": "label" },
									permission
								);
							})
						)
					)
				);
			});
		}
	}, {
		key: "render",
		value: function render() {
			return h(
				"section",
				{ "data-section-id": "roles" },
				h(
					"h2",
					{ "class": "title" },
					"ROLES"
				),
				h(
					"ul",
					{ "class": "list" },
					this.renderRoles()
				)
			);
		}
	}]);

	return ListRoles;
}(_Component3.default);

exports.default = ListRoles;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(16);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(17);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(15)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 *
 *
 * @author Jerry Bendy <jerry@icewingcc.com>
 * @licence MIT
 *
 */

(function(self) {
    'use strict';

    var nativeURLSearchParams = self.URLSearchParams ? self.URLSearchParams : null,
        isSupportObjectConstructor = nativeURLSearchParams && (new nativeURLSearchParams({a: 1})).toString() === 'a=1',
        __URLSearchParams__ = "__URLSearchParams__",
        prototype = URLSearchParamsPolyfill.prototype,
        iterable = !!(self.Symbol && self.Symbol.iterator);

    if (nativeURLSearchParams && isSupportObjectConstructor) {
        return;
    }


    /**
     * Make a URLSearchParams instance
     *
     * @param {object|string|URLSearchParams} search
     * @constructor
     */
    function URLSearchParamsPolyfill(search) {
        search = search || "";

        // support construct object with another URLSearchParams instance
        if (search instanceof URLSearchParams || search instanceof URLSearchParamsPolyfill) {
            search = search.toString();
        }

        this [__URLSearchParams__] = parseToDict(search);
    }


    /**
     * Appends a specified key/value pair as a new search parameter.
     *
     * @param {string} name
     * @param {string} value
     */
    prototype.append = function(name, value) {
        appendTo(this [__URLSearchParams__], name, value);
    };

    /**
     * Deletes the given search parameter, and its associated value,
     * from the list of all search parameters.
     *
     * @param {string} name
     */
    prototype.delete = function(name) {
        delete this [__URLSearchParams__] [name];
    };

    /**
     * Returns the first value associated to the given search parameter.
     *
     * @param {string} name
     * @returns {string|null}
     */
    prototype.get = function(name) {
        var dict = this [__URLSearchParams__];
        return name in dict ? dict[name][0] : null;
    };

    /**
     * Returns all the values association with a given search parameter.
     *
     * @param {string} name
     * @returns {Array}
     */
    prototype.getAll = function(name) {
        var dict = this [__URLSearchParams__];
        return name in dict ? dict [name].slice(0) : [];
    };

    /**
     * Returns a Boolean indicating if such a search parameter exists.
     *
     * @param {string} name
     * @returns {boolean}
     */
    prototype.has = function(name) {
        return name in this [__URLSearchParams__];
    };

    /**
     * Sets the value associated to a given search parameter to
     * the given value. If there were several values, delete the
     * others.
     *
     * @param {string} name
     * @param {string} value
     */
    prototype.set = function set(name, value) {
        this [__URLSearchParams__][name] = ['' + value];
    };

    /**
     * Returns a string containg a query string suitable for use in a URL.
     *
     * @returns {string}
     */
    prototype.toString = function() {
        var dict = this[__URLSearchParams__], query = [], i, key, name, value;
        for (key in dict) {
            name = encode(key);
            for (i = 0, value = dict[key]; i < value.length; i++) {
                query.push(name + '=' + encode(value[i]));
            }
        }
        return query.join('&');
    };


    /*
     * Apply polifill to global object and append other prototype into it
     */
    self.URLSearchParams = (nativeURLSearchParams && !isSupportObjectConstructor) ?
        new Proxy(nativeURLSearchParams, {
            construct: function(target, args) {
                return new target((new URLSearchParamsPolyfill(args[0]).toString()));
            }
        }) :
        URLSearchParamsPolyfill;


    var USPProto = self.URLSearchParams.prototype;

    USPProto.polyfill = true;

    /**
     *
     * @param {function} callback
     * @param {object} thisArg
     */
    USPProto.forEach = USPProto.forEach || function(callback, thisArg) {
        var dict = parseToDict(this.toString());
        Object.getOwnPropertyNames(dict).forEach(function(name) {
            dict[name].forEach(function(value) {
                callback.call(thisArg, value, name, this);
            }, this);
        }, this);
    };

    /**
     * Sort all name-value pairs
     */
    USPProto.sort = USPProto.sort || function() {
        var dict = parseToDict(this.toString()), keys = [], k, i, j;
        for (k in dict) {
            keys.push(k);
        }
        keys.sort();

        for (i = 0; i < keys.length; i++) {
            this.delete(keys[i]);
        }
        for (i = 0; i < keys.length; i++) {
            var key = keys[i], values = dict[key];
            for (j = 0; j < values.length; j++) {
                this.append(key, values[j]);
            }
        }
    };

    /**
     * Returns an iterator allowing to go through all keys of
     * the key/value pairs contained in this object.
     *
     * @returns {function}
     */
    USPProto.keys = USPProto.keys || function() {
        var items = [];
        this.forEach(function(item, name) {
            items.push([name]);
        });
        return makeIterator(items);
    };

    /**
     * Returns an iterator allowing to go through all values of
     * the key/value pairs contained in this object.
     *
     * @returns {function}
     */
    USPProto.values = USPProto.values || function() {
        var items = [];
        this.forEach(function(item) {
            items.push([item]);
        });
        return makeIterator(items);
    };

    /**
     * Returns an iterator allowing to go through all key/value
     * pairs contained in this object.
     *
     * @returns {function}
     */
    USPProto.entries = USPProto.entries || function() {
        var items = [];
        this.forEach(function(item, name) {
            items.push([name, item]);
        });
        return makeIterator(items);
    };


    if (iterable) {
        USPProto[self.Symbol.iterator] = USPProto[self.Symbol.iterator] || USPProto.entries;
    }


    function encode(str) {
        var replace = {
            '!': '%21',
            "'": '%27',
            '(': '%28',
            ')': '%29',
            '~': '%7E',
            '%20': '+',
            '%00': '\x00'
        };
        return encodeURIComponent(str).replace(/[!'\(\)~]|%20|%00/g, function(match) {
            return replace[match];
        });
    }

    function decode(str) {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    }

    function makeIterator(arr) {
        var iterator = {
            next: function() {
                var value = arr.shift();
                return {done: value === undefined, value: value};
            }
        };

        if (iterable) {
            iterator[self.Symbol.iterator] = function() {
                return iterator;
            };
        }

        return iterator;
    }

    function parseToDict(search) {
        var dict = {};

        if (typeof search === "object") {
            for (var i in search) {
                if (search.hasOwnProperty(i)) {
                    var str = typeof search [i] === 'string' ? search [i] : JSON.stringify(search [i]);
                    appendTo(dict, i, str);
                }
            }

        } else {
            // remove first '?'
            if (search.indexOf("?") === 0) {
                search = search.slice(1);
            }

            var pairs = search.split("&");
            for (var j = 0; j < pairs.length; j++) {
                var value = pairs [j],
                    index = value.indexOf('=');

                if (-1 < index) {
                    appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1)));
                }
            }
        }

        return dict;
    }

    function appendTo(dict, name, value) {
        if (name in dict) {
            dict[name].push('' + value);
        } else {
            dict[name] = ['' + value];
        }
    }

})(typeof global !== 'undefined' ? global : (typeof window !== 'undefined' ? window : this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
                                                                                                                                                                                                                                                                              	hypertext function
                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                              	transform-react-jsx transforms this:
                                                                                                                                                                                                                                                                              		<ul>
                                                                                                                                                                                                                                                                              			<li>chil 1</li>
                                                                                                                                                                                                                                                                              			<li>chil 1</li>
                                                                                                                                                                                                                                                                              		</ul>
                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                              	into this:
                                                                                                                                                                                                                                                                              	h(
                                                                                                                                                                                                                                                                              		"ul",
                                                                                                                                                                                                                                                                              		null,
                                                                                                                                                                                                                                                                              		h(
                                                                                                                                                                                                                                                                              			"li",
                                                                                                                                                                                                                                                                              			null,
                                                                                                                                                                                                                                                                              			"child 1"
                                                                                                                                                                                                                                                                              		),
                                                                                                                                                                                                                                                                              		h(
                                                                                                                                                                                                                                                                              			"li",
                                                                                                                                                                                                                                                                              			null,
                                                                                                                                                                                                                                                                              			"child 2"
                                                                                                                                                                                                                                                                              		)
                                                                                                                                                                                                                                                                              	);
                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                              	and h returns:
                                                                                                                                                                                                                                                                              	{"ul", null, [
                                                                                                                                                                                                                                                                              		{"li", null, "child 1"},
                                                                                                                                                                                                                                                                              		{"li", null, "child 2"}
                                                                                                                                                                                                                                                                              	]}
                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                              	so I can create the Virtual DOM
                                                                                                                                                                                                                                                                              */


exports.h = h;

__webpack_require__(5);

function h(tag, props) {
	for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		children[_key - 2] = arguments[_key];
	}

	return {
		tag: tag,
		props: props,
		children: children.flatten().map(function (child, index) {
			if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object') {
				child._key = child.props && child.props.key !== undefined ? child.props.key : index;
			}
			return child;
		})
	};
}

window.h = h;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _assert = __webpack_require__(4);

var _assert2 = _interopRequireDefault(_assert);

var _mochaJsdom = __webpack_require__(9);

var _mochaJsdom2 = _interopRequireDefault(_mochaJsdom);

var _mounting = __webpack_require__(2);

var _mounting2 = _interopRequireDefault(_mounting);

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

var _utils = __webpack_require__(5);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

describe('vDOM', function () {

	before(function () {
		global.h = window.h;
		global.fetch = window.fetch;
	});

	(0, _mochaJsdom2.default)();

	describe('utils', function () {

		describe('Array.flatten', function () {
			it('flattens an array', function () {
				_assert2.default.deepEqual([1, 2, 3, 4, 5], [1, [2, [3, [4, [5]]]]].flatten());
			});
		});

		describe('Element.insertAtIndex', function () {
			it('inserts at defined index', function () {
				var div = document.createElement('div'),
				    child = document.createElement('div');

				child.appendChild(document.createTextNode('child'));

				for (var n = 0; n <= 10; n++) {
					var loopChild = document.createElement('div');
					loopChild.appendChild(document.createTextNode(n));
					div.appendChild(loopChild);
				}

				div.insertAtIndex(child, 5);

				_assert2.default.deepEqual(div.children[5], child);
			});
		});
	});

	describe('JSX', function () {
		it('Parses correctly a div', function () {
			_assert2.default.deepEqual(h('div', null), h('div', null));
		});

		it('Parses correctly a list with text nodes', function () {
			_assert2.default.deepEqual(h(
				'ul',
				null,
				h(
					'li',
					null,
					'Child 1'
				),
				h(
					'li',
					null,
					'Child 2'
				)
			), h('ul', null, h('li', null, 'Child 1'), h('li', null, 'Child 2')));
		});

		it('Parses correctly attributes', function () {
			var element = h('div', { id: 'custom-id',
				'class': 'custom-class',
				'data-value': 'custom-data-value'
			});
			_assert2.default.equal(element.props.id, 'custom-id');
			_assert2.default.equal(element.props.class, 'custom-class');
			_assert2.default.equal(element.props['data-value'], 'custom-data-value');
		});
	});

	describe('mount', function () {

		it('Parses correctly vText', function () {
			var vText = (0, _mounting2.default)('test', document.body);

			_assert2.default.deepEqual(vText, document.createTextNode('test').textContent);
		});

		it('Parses correctly vElement with a nested vText', function () {
			var vElement = (0, _mounting2.default)(h(
				'div',
				null,
				'Test'
			), document.body),
			    $element = document.createElement('div');

			$element.appendChild(document.createTextNode('test'));

			_assert2.default.deepEqual(vElement, $element);
		});

		it('Parses correctly vComponent with nested vElement and vTexts', function () {
			var TestComponent = function (_Component) {
				_inherits(TestComponent, _Component);

				function TestComponent() {
					_classCallCheck(this, TestComponent);

					return _possibleConstructorReturn(this, (TestComponent.__proto__ || Object.getPrototypeOf(TestComponent)).apply(this, arguments));
				}

				_createClass(TestComponent, [{
					key: 'render',
					value: function render() {
						return h(
							'ul',
							null,
							h(
								'li',
								null,
								'Child 1'
							),
							h(
								'li',
								null,
								'Child 2'
							)
						);
					}
				}]);

				return TestComponent;
			}(_Component3.default);

			var $component = (0, _mounting2.default)(h(TestComponent, null), document.body),
			    $element = document.createElement('ul'),
			    childs = ['Child 1', 'Child 2'];

			childs.forEach(function (child) {
				var $child = document.createElement('li');

				$child.appendChild(document.createTextNode(child));

				$element.appendChild($child);
			});

			//To avoid deepEqual false negative
			delete $component._instance;

			_assert2.default.deepEqual($component, $element);
		});
	});
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = mountVComponent;

var _mounting = __webpack_require__(2);

var _mounting2 = _interopRequireDefault(_mounting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vDomIdCounter = 0;

/*
	Mounts a vComponent into the DOM
*/
function mountVComponent(vComponent, $parent, index) {
	var tag = vComponent.tag,
	    props = vComponent.props,
	    children = vComponent.children;

	var Component = tag;
	var instance = new Component(props, children);
	var nextVNode = instance.render();

	if (nextVNode) {
		var vDomId = vDomIdCounter++;

		nextVNode.props = Object.assign(props || {}, nextVNode.props, { 'data-vdom-id': vDomId });

		var $element = (0, _mounting2.default)(nextVNode, $parent);

		instance._vDomId = vDomId;
		instance._vNode = nextVNode;
		instance.$parent = $parent;
		instance.$element = $element;

		vComponent._instance = instance;
		vComponent.$element = $element;

		$element._instance = instance;

		$parent.insertAtIndex($element, index);

		return $element;
	} else if (nextVNode === undefined) {
		console.warn('Method render returns undefined. Component: ', vComponent);
	}
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = mountVElement;

var _mounting = __webpack_require__(2);

var _mounting2 = _interopRequireDefault(_mounting);

var _updating = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
	Mounts a vElement into the DOM
*/
function mountVElement(vElement, $parent, index) {
	var tag = vElement.tag,
	    props = vElement.props,
	    children = vElement.children;

	var $element = document.createElement(tag);
	vElement.$element = $element;

	(0, _updating.updateAttributes)($element, props);

	children.forEach(function (child) {
		return (0, _mounting2.default)(child, $element);
	});

	$parent.insertAtIndex($element, index);

	return $element;
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateVComponent;

var _updating = __webpack_require__(3);

function updateVComponent(oldVComponent, newVComponent) {
  var _instance = oldVComponent._instance;
  var _vNode = _instance._vNode;


  var prevProps = oldVComponent.props;
  var nextProps = newVComponent.props;

  newVComponent.$element = oldVComponent.$element;
  newVComponent._instance = _instance;
  newVComponent._instance.props = nextProps;

  var oldVNode = _vNode;
  var newVNode = _instance.render();

  newVNode.$element = newVComponent.$element;
  newVNode._instance = _instance;
  newVNode.props = Object.assign(newVNode.props || {}, nextProps);

  newVComponent._instance._vNode = newVNode;
  (0, _updating.update)(oldVNode, newVNode, _instance.$parent);
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = updateVElement;

var _updating = __webpack_require__(3);

function updateVElement(oldVElement, newVElement) {
	var $element = oldVElement.$element;
	newVElement.$element = $element;

	var tag = newVElement.tag,
	    props = newVElement.props,
	    children = newVElement.children;


	(0, _updating.updateAttributes)($element, props);
	(0, _updating.updateChildren)(oldVElement, newVElement, $element);
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = updateVText;
function updateVText(oldVText, newVText, $parent) {
	var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	if (oldVText !== newVText) {
		$parent.childNodes[index].nodeValue = newVText;
	}
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = mountVText;
/*
	Mounts a vText into the DOM
*/
function mountVText(vText, $parent, index) {
	var textValue = String(vText),
	    textNode = document.createTextNode(textValue);

	$parent.insertAtIndex(textNode, index);

	return textValue;
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _assert = __webpack_require__(4);

var _assert2 = _interopRequireDefault(_assert);

__webpack_require__(8);

var _mochaJsdom = __webpack_require__(9);

var _mochaJsdom2 = _interopRequireDefault(_mochaJsdom);

var _Main = __webpack_require__(28);

var _Main2 = _interopRequireDefault(_Main);

var _ListUsers = __webpack_require__(11);

var _ListUsers2 = _interopRequireDefault(_ListUsers);

var _ListRoles = __webpack_require__(13);

var _ListRoles2 = _interopRequireDefault(_ListRoles);

var _LeftBar = __webpack_require__(10);

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RoleWidget = __webpack_require__(12);

var _RoleWidget2 = _interopRequireDefault(_RoleWidget);

var _tests = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('App', function () {

	before(function () {
		global.h = window.h;
		global.fetch = window.fetch;
	});

	(0, _mochaJsdom2.default)();

	describe('Main', function () {

		var instance = (0, _tests.fakeComponent)(new _Main2.default());

		it('Initializes', function () {
			_assert2.default.deepEqual(instance.state, {
				users: [],
				roles: [],
				activeSection: 'users'
			});
		});

		it('Changes selected section', function () {
			var section = document.createElement('input');
			section.setAttribute('data-section-id', 'test');

			instance.handleChangeLeftBar({ target: section });

			_assert2.default.equal(instance.state.activeSection, 'test');
		});
	});

	describe('ListUsers', function () {

		var instance = (0, _tests.fakeComponent)(new _ListUsers2.default());

		it('Initializes', function () {
			_assert2.default.deepEqual(instance.state, {
				modalIsOpen: false,
				modalIsVisible: false,
				searchString: '',
				userSelected: {},
				newUser: {
					username: '',
					rolesId: []
				}
			});
		});
	});

	describe('RoleWidget', function () {

		var instance = (0, _tests.fakeComponent)(new _RoleWidget2.default({ _user: 'test' }));

		it('Initializes', function () {
			_assert2.default.deepEqual(instance.state, {
				modalIsOpen: false,
				modalIsVisible: false,
				user: 'test',
				emphasis: 0
			});
		});
	});
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(1);

var _Component3 = _interopRequireDefault(_Component2);

var _LeftBar = __webpack_require__(10);

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _ListUsers = __webpack_require__(11);

var _ListUsers2 = _interopRequireDefault(_ListUsers);

var _ListRoles = __webpack_require__(13);

var _ListRoles2 = _interopRequireDefault(_ListRoles);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseUrl = _config2.default.baseUrl;
var fetch = window.fetch || global.fetch || fetch;

var Main = function (_Component) {
	_inherits(Main, _Component);

	function Main(props, children) {
		_classCallCheck(this, Main);

		var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props, children));

		_this.state = {
			users: [],
			roles: [],
			activeSection: 'users'
		};

		fetch(baseUrl + 'users').then(function (response) {
			if (response.ok) {
				return response.json();
			}
		}).then(function (users) {
			_this.setState({ users: users });
		}).catch(function (error) {
			return console.error(error);
		});

		fetch(baseUrl + 'roles').then(function (response) {
			if (response.ok) {
				return response.json();
			}
		}).then(function (roles) {
			_this.setState({ roles: roles });
		}).catch(function (error) {
			return console.error(error);
		});
		return _this;
	}

	_createClass(Main, [{
		key: 'handleChangeLeftBar',
		value: function handleChangeLeftBar(e) {
			this.setState({
				activeSection: e.target.getAttribute('data-section-id')
			});
		}
	}, {
		key: 'handleUpdateUsers',
		value: function handleUpdateUsers(newUser) {
			var _this2 = this;

			fetch(baseUrl + 'users').then(function (response) {
				if (response.ok) {
					return response.json();
				}
			}).then(function (users) {
				_this2.setState({ users: users });
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return h(
				'div',
				{ 'class': 'container' },
				h(
					'nav',
					{ 'class': 'left-bar' },
					h(_LeftBar2.default, {
						_sections: ['users', 'roles'],
						_active: this.state.activeSection,
						onChange: function onChange(e) {
							return _this3.handleChangeLeftBar(e);
						}
					})
				),
				h(
					'main',
					{ 'class': 'sections' },
					h(_ListUsers2.default, {
						'class': 'section ' + (this.state.activeSection === 'users' ? 'active' : ''),
						onUpdateUsers: function onUpdateUsers(newUser) {
							return _this3.handleUpdateUsers(newUser);
						},
						_users: this.state.users,
						_roles: this.state.roles
					}),
					h(_ListRoles2.default, {
						'class': 'section ' + (this.state.activeSection === 'roles' ? 'active' : ''),
						_roles: this.state.roles
					})
				)
			);
		}
	}]);

	return Main;
}(_Component3.default);

exports.default = Main;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
/******/ ]);