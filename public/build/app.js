(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/react/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!**********************************************************************************************************************!*\
  !*** ./assets/react/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \**********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./DepositInputs.jsx": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/react/controllers/DepositInputs.jsx",
	"./TransactionHistory.jsx": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/react/controllers/TransactionHistory.jsx",
	"./WithdrawInputs.jsx": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/react/controllers/WithdrawInputs.jsx",
	"./components/ContinueResetButtons.jsx": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/react/controllers/components/ContinueResetButtons.jsx",
	"./components/Form.jsx": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/react/controllers/components/Form.jsx",
	"./components/TransactionItem.jsx": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/react/controllers/components/TransactionItem.jsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/react/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./assets/react/controllers sync recursive \\.(j%7Ct)sx?$":
/*!******************************************************!*\
  !*** ./assets/react/controllers/ sync \.(j%7Ct)sx?$ ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./DepositInputs.jsx": "./assets/react/controllers/DepositInputs.jsx",
	"./TransactionHistory.jsx": "./assets/react/controllers/TransactionHistory.jsx",
	"./WithdrawInputs.jsx": "./assets/react/controllers/WithdrawInputs.jsx",
	"./components/ContinueResetButtons.jsx": "./assets/react/controllers/components/ContinueResetButtons.jsx",
	"./components/Form.jsx": "./assets/react/controllers/components/Form.jsx",
	"./components/TransactionItem.jsx": "./assets/react/controllers/components/TransactionItem.jsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/react/controllers sync recursive \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_react_dist_render_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-react/dist/render_controller.js */ "./node_modules/@symfony/ux-react/dist/render_controller.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-react--react': _symfony_ux_react_dist_render_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/react/controllers/DepositInputs.jsx":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/react/controllers/DepositInputs.jsx ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var react_spinners_PropagateLoader__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-spinners/PropagateLoader */ "./node_modules/react-spinners/PropagateLoader.js");
/* harmony import */ var react_spinners_PropagateLoader__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PropagateLoader__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _components_ContinueResetButtons__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/ContinueResetButtons */ "./assets/react/controllers/components/ContinueResetButtons.jsx");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/Form */ "./assets/react/controllers/components/Form.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }































function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var DepositInputs = function DepositInputs() {
  // state variables
  var ButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_31__.useRef)(null);
  var InputRef = (0,react__WEBPACK_IMPORTED_MODULE_31__.useRef)(null);
  var ConvDivRef = (0,react__WEBPACK_IMPORTED_MODULE_31__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    gbpDepositAmount = _useState2[0],
    setGbpDepositAmount = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isGbpValid = _useState4[0],
    setIsGbpValid = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    conversionFetched = _useState6[0],
    setConversionFetched = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    hasError = _useState8[0],
    setHasError = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isLoading = _useState10[0],
    setIsLoading = _useState10[1];

  // function that checks if the USD amount is valid
  function checkGbpIsValid(value) {
    {
      value >= 20 ? setIsGbpValid(true) : setIsGbpValid(false);
    }
    ;
  }
  function switchButtons(bool) {
    ButtonRef.current.disabled = bool;
    InputRef.current.disabled = bool;
  }

  //validate input, regex check for letters etc, remove commas from the value, then format the value to have the correct commas
  function validateAndSetGbp(value) {
    var pattern = /^[0-9, ]*$/;
    if (!pattern.test(value)) return;
    var strippedVal = value.replace(/,/g, '');
    var formattedValue = Number(strippedVal).toLocaleString();
    formattedValue === '0' ? setGbpDepositAmount('') : setGbpDepositAmount(formattedValue);
  }
  function retrieveUsdConversion(_x2) {
    return _retrieveUsdConversion.apply(this, arguments);
  }
  function _retrieveUsdConversion() {
    _retrieveUsdConversion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            setIsLoading(true);
            if (!isGbpValid) {
              _context.next = 16;
              break;
            }
            _context.prev = 3;
            _context.next = 6;
            return fetch('/create-deposit-session', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                gbpDepositAmount: gbpDepositAmount
              })
            });
          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();
          case 9:
            return _context.abrupt("return", _context.sent);
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](3);
            console.error(_context.t0);
            setHasError(true);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 12]]);
    }));
    return _retrieveUsdConversion.apply(this, arguments);
  }
  function ConfirmAndConvertGbp(event) {
    //disable the GbpDepositAmount input field
    switchButtons(true);
    event.preventDefault();
    ConvDivRef.current.innerHTML = '';
    if (isGbpValid) {
      retrieveUsdConversion(event).then(function (data) {
        console.log('Data received:', data.usd, data.gbp);
        setIsLoading(false);
        var newElement = document.createElement("p");
        newElement.textContent = "The USD value of your deposit will be $".concat(data.usd);
        setConversionFetched(true);
        ConvDivRef.current.appendChild(newElement);
      })["catch"](function (error) {
        console.error('Error:', error);
        setHasError(true);
      });
    }
  }

  // event handlers for the two input fields
  function setGbpDepositAmountHandler(event) {
    checkGbpIsValid(event.target.value.replace(/,/g, ''));
    validateAndSetGbp(event.target.value, 'gbp');
  }
  function handleConversionReset(event) {
    event.preventDefault();
    switchButtons(false);
    ConvDivRef.current.innerHTML = '';
    setConversionFetched(false);
  }
  if (hasError) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", null, "oops something went wrong");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("h3", null, "Enter amount to deposit:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", null, "Enter the amount you would like to deposit and convert to USD."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("form", {
    onSubmit: ConfirmAndConvertGbp
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("label", {
    htmlFor: "GbpDepositAmount"
  }, "Deposit Amount in GBP(\xA3)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("input", {
    ref: InputRef,
    type: "text",
    id: "GbpDepositAmount",
    name: "GbpDepositAmount",
    maxLength: "8",
    onChange: setGbpDepositAmountHandler,
    value: gbpDepositAmount
  }), isGbpValid && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("button", {
    ref: ButtonRef,
    id: "convert-btn",
    onClick: ConfirmAndConvertGbp
  }, "Convert")), gbpDepositAmount < 20 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("span", null, "Deposit must be at least \xA320 in value."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    ref: ConvDivRef
  }, isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement((react_spinners_PropagateLoader__WEBPACK_IMPORTED_MODULE_34___default()), {
    color: "#5f66e6",
    size: 25,
    "aria-label": "Loading Spinner",
    "data-testid": "loader"
  })), isGbpValid && conversionFetched && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_components_ContinueResetButtons__WEBPACK_IMPORTED_MODULE_32__["default"], {
    link: '/deposit/deposit-details',
    handleConversionReset: handleConversionReset
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DepositInputs);

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/react/controllers/TransactionHistory.jsx":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/react/controllers/TransactionHistory.jsx ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.repeat.js */ "./node_modules/core-js/modules/es.string.repeat.js");
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_TransactionItem__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/TransactionItem */ "./assets/react/controllers/components/TransactionItem.jsx");



















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function TransactionHistory(_ref) {
  var deposits = _ref.deposits,
    withdrawals = _ref.withdrawals;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)('withdrawals'),
    _useState2 = _slicedToArray(_useState, 2),
    selected = _useState2[0],
    setSelected = _useState2[1];
  function handleSelectChange(event) {
    setSelected(event.target.value);
  }
  var transactionList = (0,react__WEBPACK_IMPORTED_MODULE_19__.useMemo)(function () {
    var transactions = selected === 'withdrawals' ? withdrawals : deposits;
    return transactions.map(function (transaction, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_components_TransactionItem__WEBPACK_IMPORTED_MODULE_20__["default"], {
        key: index,
        id: transaction.id,
        usd: transaction.usd_amount,
        gbp: transaction.gbp_amount
        //replaces trailing zeros with spaces on timestamp
        ,
        timestamp: transaction.timestamp.date.replace(/.0+$/, function (match) {
          return ' '.repeat(match.length);
        }),
        isVerified: transaction.is_verified
      });
    });
  }, [selected, deposits, withdrawals]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("h1", null, "Transaction History"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("a", {
    href: "/dashboard"
  }, "Back to Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("select", {
    onChange: handleSelectChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("option", {
    value: "withdrawals"
  }, "Withdrawals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("option", {
    value: "deposits"
  }, "Deposits")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("th", null, "Transaction ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("th", null, "USD Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("th", null, "GBP Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("th", null, "Timestamp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("th", null, "Verified"))), transactionList));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionHistory);

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/react/controllers/WithdrawInputs.jsx":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/react/controllers/WithdrawInputs.jsx ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var react_spinners_PropagateLoader__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-spinners/PropagateLoader */ "./node_modules/react-spinners/PropagateLoader.js");
/* harmony import */ var react_spinners_PropagateLoader__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PropagateLoader__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _components_ContinueResetButtons__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/ContinueResetButtons */ "./assets/react/controllers/components/ContinueResetButtons.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

































function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function WithdrawInputs(props) {
  var InputRef = (0,react__WEBPACK_IMPORTED_MODULE_33__.useRef)(null);
  var ConvertButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_33__.useRef)(null);
  var MaxButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_33__.useRef)(null);
  var ConvDivRef = (0,react__WEBPACK_IMPORTED_MODULE_33__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    usdWithdrawAmount = _useState2[0],
    setUsdWithdrawAmount = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    exceedsBalance = _useState4[0],
    setExceedsBalance = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isMoreThanMin = _useState6[0],
    setIsMoreThanMin = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    valueValid = _useState8[0],
    setValueValid = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isLoading = _useState10[0],
    setIsLoading = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    hasError = _useState12[0],
    setHasError = _useState12[1];
  var isInputValid = !exceedsBalance && isMoreThanMin;

  // function that checks if the USD input is valid
  function checkUsdIsValid(value) {
    {
      +value >= 20 ? setIsMoreThanMin(true) : setIsMoreThanMin(false);
    }
    {
      +value <= +props.max ? setExceedsBalance(false) : setExceedsBalance(true);
    }
  }
  function disableInput(bool) {
    ConvertButtonRef.current.disabled = bool;
    InputRef.current.disabled = bool;
    MaxButtonRef.current.disabled = bool;
  }

  //validate input, regex check for letters, remove commas from the value, then format the value to have the correct commas
  function validateAndSetUsd(value) {
    var pattern = /^[0-9,. ]*$/;
    if (!pattern.test(value)) return;
    var strippedVal = value.replace(/,/g, '');
    var formattedValue = Number(strippedVal).toLocaleString();
    formattedValue === '0' ? setUsdWithdrawAmount('') : setUsdWithdrawAmount(formattedValue);
  }
  function setToMax() {
    validateAndSetUsd(props.max.toString());
    checkUsdIsValid(props.max);
  }
  function withdrawalInputChangeHandler(event) {
    checkUsdIsValid(event.target.value.replace(/,/g, ''));
    validateAndSetUsd(event.target.value.toString());
  }
  function handleConversionReset(event) {
    event.preventDefault();
    disableInput(false);
    ConvDivRef.current.innerHTML = '';
    setValueValid(false);
  }
  function fetchData(_x2) {
    return _fetchData.apply(this, arguments);
  }
  function _fetchData() {
    _fetchData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            setIsLoading(true);
            if (!isInputValid) {
              _context.next = 16;
              break;
            }
            _context.prev = 3;
            _context.next = 6;
            return fetch('/create-withdrawal-session', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                usdWithdrawAmount: usdWithdrawAmount
              })
            });
          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();
          case 9:
            return _context.abrupt("return", _context.sent);
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](3);
            console.error(_context.t0);
            setHasError(true);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 12]]);
    }));
    return _fetchData.apply(this, arguments);
  }
  function ConfirmAndConvertUsd(event) {
    disableInput(true);
    fetchData(event).then(function (data) {
      var newElement = document.createElement("p");
      if (+data.usd >= 20 && data.result) {
        setValueValid(data.result);
        newElement.textContent = "The GBP value of your withdrawal will be \xA3".concat(data.gbp);
      } else {
        newElement.textContent = 'Invalid amount';
      }
      setIsLoading(false);
      //if data.gbp is less than 20, display a message saying that the withdrawal amount is less than £20
      ConvDivRef.current.appendChild(newElement);
    })["catch"](function (error) {
      console.error('Error:', error);
      setHasError(true);
    });
  }
  if (hasError) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("p", null, "oops something went wrong");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("h3", null, "Request Withdrawal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("p", null, "Please enter a withdrawal amount and convert to GBP:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("p", null, "Your account balance is $", props.max), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("form", {
    onSubmit: ConfirmAndConvertUsd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("label", {
    htmlFor: "UsdWithdrawAmount"
  }, "Withdrawal Amount In USD($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("input", {
    ref: InputRef,
    type: "text",
    id: "UsdWithdrawAmount",
    name: "UsdWithdrawAmount",
    maxLength: "8",
    onChange: withdrawalInputChangeHandler,
    value: usdWithdrawAmount
  }), isInputValid && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("button", {
    ref: ConvertButtonRef,
    id: "convert-btn",
    onClick: ConfirmAndConvertUsd
  }, "Convert")), exceedsBalance && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("span", null, "Amount entered exceeds account balance"), !isMoreThanMin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("span", null, "Amount needs to equal $20 or more"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("button", {
    ref: MaxButtonRef,
    onClick: setToMax
  }, "Max"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("div", {
    ref: ConvDivRef
  }), isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement((react_spinners_PropagateLoader__WEBPACK_IMPORTED_MODULE_35___default()), {
    color: "#5f66e6",
    size: 25,
    "aria-label": "Loading Spinner",
    "data-testid": "loader"
  }), isInputValid && valueValid && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement(_components_ContinueResetButtons__WEBPACK_IMPORTED_MODULE_34__["default"], {
    link: '/withdraw/withdraw-details',
    handleConversionReset: handleConversionReset
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithdrawInputs);

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/react/controllers/components/ContinueResetButtons.jsx":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/react/controllers/components/ContinueResetButtons.jsx ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ContinueResetButtons(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    id: "confirm-continue-btn",
    href: props.link
  }, "Continue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    id: "reset-btn",
    onClick: props.handleConversionReset
  }, "Reset"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContinueResetButtons);

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/react/controllers/components/Form.jsx":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/react/controllers/components/Form.jsx ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Form(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: ConfirmAndConvertGbp
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "GbpDepositAmount"
  }, "Deposit Amount in GBP(\xA3)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    ref: InputRef,
    type: "text",
    id: "GbpDepositAmount",
    name: "GbpDepositAmount",
    maxLength: "8",
    onChange: props.setGbpDepositAmountHandler,
    value: props.gbpDepositAmount
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    ref: ButtonRef,
    id: "convert-btn",
    onClick: props.ConfirmAndConvertGbp
  }, "Convert"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/react/controllers/components/TransactionItem.jsx":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/react/controllers/components/TransactionItem.jsx ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function TransactionItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, props.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "$", props.usd), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "\xA3", props.gbp), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, props.timestamp), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, props.isVerified ? 'verified' : 'not verified')));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionItem);

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _symfony_ux_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @symfony/ux-react */ "./node_modules/@symfony/ux-react/dist/register_controller.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
// start the Stimulus application


// assets/app.js


// Registers React controller components to allow loading them from Twig
//
// React controller components are components that are meant to be rendered
// from Twig. These component then rely on other components that won't be called
// directly from Twig.
//
// By putting only controller components in `react/controllers`, you ensure that
// internal components won't be automatically included in your JS built file if
// they are not necessary.
(0,_symfony_ux_react__WEBPACK_IMPORTED_MODULE_2__.registerReactControllerComponents)(__webpack_require__("./assets/react/controllers sync recursive \\.(j%7Ct)sx?$"));

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/react/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/react/controllers/DepositInputs.jsx":
/*!****************************************************!*\
  !*** ./assets/react/controllers/DepositInputs.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var react_spinners_PropagateLoader__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-spinners/PropagateLoader */ "./node_modules/react-spinners/PropagateLoader.js");
/* harmony import */ var react_spinners_PropagateLoader__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PropagateLoader__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _components_ContinueResetButtons__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/ContinueResetButtons */ "./assets/react/controllers/components/ContinueResetButtons.jsx");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/Form */ "./assets/react/controllers/components/Form.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }































function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var DepositInputs = function DepositInputs() {
  // state variables
  var ButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_31__.useRef)(null);
  var InputRef = (0,react__WEBPACK_IMPORTED_MODULE_31__.useRef)(null);
  var ConvDivRef = (0,react__WEBPACK_IMPORTED_MODULE_31__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    gbpDepositAmount = _useState2[0],
    setGbpDepositAmount = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isGbpValid = _useState4[0],
    setIsGbpValid = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    conversionFetched = _useState6[0],
    setConversionFetched = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    hasError = _useState8[0],
    setHasError = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isLoading = _useState10[0],
    setIsLoading = _useState10[1];

  // function that checks if the USD amount is valid
  function checkGbpIsValid(value) {
    {
      value >= 20 ? setIsGbpValid(true) : setIsGbpValid(false);
    }
    ;
  }
  function switchButtons(bool) {
    ButtonRef.current.disabled = bool;
    InputRef.current.disabled = bool;
  }

  //validate input, regex check for letters etc, remove commas from the value, then format the value to have the correct commas
  function validateAndSetGbp(value) {
    var pattern = /^[0-9, ]*$/;
    if (!pattern.test(value)) return;
    var strippedVal = value.replace(/,/g, '');
    var formattedValue = Number(strippedVal).toLocaleString();
    formattedValue === '0' ? setGbpDepositAmount('') : setGbpDepositAmount(formattedValue);
  }
  function retrieveUsdConversion(_x2) {
    return _retrieveUsdConversion.apply(this, arguments);
  }
  function _retrieveUsdConversion() {
    _retrieveUsdConversion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            setIsLoading(true);
            if (!isGbpValid) {
              _context.next = 16;
              break;
            }
            _context.prev = 3;
            _context.next = 6;
            return fetch('/create-deposit-session', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                gbpDepositAmount: gbpDepositAmount
              })
            });
          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();
          case 9:
            return _context.abrupt("return", _context.sent);
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](3);
            console.error(_context.t0);
            setHasError(true);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 12]]);
    }));
    return _retrieveUsdConversion.apply(this, arguments);
  }
  function ConfirmAndConvertGbp(event) {
    //disable the GbpDepositAmount input field
    switchButtons(true);
    event.preventDefault();
    ConvDivRef.current.innerHTML = '';
    if (isGbpValid) {
      retrieveUsdConversion(event).then(function (data) {
        console.log('Data received:', data.usd, data.gbp);
        setIsLoading(false);
        var newElement = document.createElement("p");
        newElement.textContent = "The USD value of your deposit will be $".concat(data.usd);
        setConversionFetched(true);
        ConvDivRef.current.appendChild(newElement);
      })["catch"](function (error) {
        console.error('Error:', error);
        setHasError(true);
      });
    }
  }

  // event handlers for the two input fields
  function setGbpDepositAmountHandler(event) {
    checkGbpIsValid(event.target.value.replace(/,/g, ''));
    validateAndSetGbp(event.target.value, 'gbp');
  }
  function handleConversionReset(event) {
    event.preventDefault();
    switchButtons(false);
    ConvDivRef.current.innerHTML = '';
    setConversionFetched(false);
  }
  if (hasError) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", null, "oops something went wrong");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("h3", null, "Enter amount to deposit:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", null, "Enter the amount you would like to deposit and convert to USD."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("form", {
    onSubmit: ConfirmAndConvertGbp
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("label", {
    htmlFor: "GbpDepositAmount"
  }, "Deposit Amount in GBP(\xA3)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("input", {
    ref: InputRef,
    type: "text",
    id: "GbpDepositAmount",
    name: "GbpDepositAmount",
    maxLength: "8",
    onChange: setGbpDepositAmountHandler,
    value: gbpDepositAmount
  }), isGbpValid && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("button", {
    ref: ButtonRef,
    id: "convert-btn",
    onClick: ConfirmAndConvertGbp
  }, "Convert")), gbpDepositAmount < 20 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("span", null, "Deposit must be at least \xA320 in value."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    ref: ConvDivRef
  }, isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement((react_spinners_PropagateLoader__WEBPACK_IMPORTED_MODULE_34___default()), {
    color: "#5f66e6",
    size: 25,
    "aria-label": "Loading Spinner",
    "data-testid": "loader"
  })), isGbpValid && conversionFetched && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_components_ContinueResetButtons__WEBPACK_IMPORTED_MODULE_32__["default"], {
    link: '/deposit/deposit-details',
    handleConversionReset: handleConversionReset
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DepositInputs);

/***/ }),

/***/ "./assets/react/controllers/TransactionHistory.jsx":
/*!*********************************************************!*\
  !*** ./assets/react/controllers/TransactionHistory.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.repeat.js */ "./node_modules/core-js/modules/es.string.repeat.js");
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_TransactionItem__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/TransactionItem */ "./assets/react/controllers/components/TransactionItem.jsx");



















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function TransactionHistory(_ref) {
  var deposits = _ref.deposits,
    withdrawals = _ref.withdrawals;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)('withdrawals'),
    _useState2 = _slicedToArray(_useState, 2),
    selected = _useState2[0],
    setSelected = _useState2[1];
  function handleSelectChange(event) {
    setSelected(event.target.value);
  }
  var transactionList = (0,react__WEBPACK_IMPORTED_MODULE_19__.useMemo)(function () {
    var transactions = selected === 'withdrawals' ? withdrawals : deposits;
    return transactions.map(function (transaction, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_components_TransactionItem__WEBPACK_IMPORTED_MODULE_20__["default"], {
        key: index,
        id: transaction.id,
        usd: transaction.usd_amount,
        gbp: transaction.gbp_amount
        //replaces trailing zeros with spaces on timestamp
        ,
        timestamp: transaction.timestamp.date.replace(/.0+$/, function (match) {
          return ' '.repeat(match.length);
        }),
        isVerified: transaction.is_verified
      });
    });
  }, [selected, deposits, withdrawals]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("h1", null, "Transaction History"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("a", {
    href: "/dashboard"
  }, "Back to Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("select", {
    onChange: handleSelectChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("option", {
    value: "withdrawals"
  }, "Withdrawals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("option", {
    value: "deposits"
  }, "Deposits")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("th", null, "Transaction ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("th", null, "USD Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("th", null, "GBP Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("th", null, "Timestamp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("th", null, "Verified"))), transactionList));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionHistory);

/***/ }),

/***/ "./assets/react/controllers/WithdrawInputs.jsx":
/*!*****************************************************!*\
  !*** ./assets/react/controllers/WithdrawInputs.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var react_spinners_PropagateLoader__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-spinners/PropagateLoader */ "./node_modules/react-spinners/PropagateLoader.js");
/* harmony import */ var react_spinners_PropagateLoader__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PropagateLoader__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _components_ContinueResetButtons__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/ContinueResetButtons */ "./assets/react/controllers/components/ContinueResetButtons.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

































function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function WithdrawInputs(props) {
  var InputRef = (0,react__WEBPACK_IMPORTED_MODULE_33__.useRef)(null);
  var ConvertButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_33__.useRef)(null);
  var MaxButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_33__.useRef)(null);
  var ConvDivRef = (0,react__WEBPACK_IMPORTED_MODULE_33__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    usdWithdrawAmount = _useState2[0],
    setUsdWithdrawAmount = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    exceedsBalance = _useState4[0],
    setExceedsBalance = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isMoreThanMin = _useState6[0],
    setIsMoreThanMin = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    valueValid = _useState8[0],
    setValueValid = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isLoading = _useState10[0],
    setIsLoading = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    hasError = _useState12[0],
    setHasError = _useState12[1];
  var isInputValid = !exceedsBalance && isMoreThanMin;

  // function that checks if the USD input is valid
  function checkUsdIsValid(value) {
    {
      +value >= 20 ? setIsMoreThanMin(true) : setIsMoreThanMin(false);
    }
    {
      +value <= +props.max ? setExceedsBalance(false) : setExceedsBalance(true);
    }
  }
  function disableInput(bool) {
    ConvertButtonRef.current.disabled = bool;
    InputRef.current.disabled = bool;
    MaxButtonRef.current.disabled = bool;
  }

  //validate input, regex check for letters, remove commas from the value, then format the value to have the correct commas
  function validateAndSetUsd(value) {
    var pattern = /^[0-9,. ]*$/;
    if (!pattern.test(value)) return;
    var strippedVal = value.replace(/,/g, '');
    var formattedValue = Number(strippedVal).toLocaleString();
    formattedValue === '0' ? setUsdWithdrawAmount('') : setUsdWithdrawAmount(formattedValue);
  }
  function setToMax() {
    validateAndSetUsd(props.max.toString());
    checkUsdIsValid(props.max);
  }
  function withdrawalInputChangeHandler(event) {
    checkUsdIsValid(event.target.value.replace(/,/g, ''));
    validateAndSetUsd(event.target.value.toString());
  }
  function handleConversionReset(event) {
    event.preventDefault();
    disableInput(false);
    ConvDivRef.current.innerHTML = '';
    setValueValid(false);
  }
  function fetchData(_x2) {
    return _fetchData.apply(this, arguments);
  }
  function _fetchData() {
    _fetchData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            setIsLoading(true);
            if (!isInputValid) {
              _context.next = 16;
              break;
            }
            _context.prev = 3;
            _context.next = 6;
            return fetch('/create-withdrawal-session', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                usdWithdrawAmount: usdWithdrawAmount
              })
            });
          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();
          case 9:
            return _context.abrupt("return", _context.sent);
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](3);
            console.error(_context.t0);
            setHasError(true);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 12]]);
    }));
    return _fetchData.apply(this, arguments);
  }
  function ConfirmAndConvertUsd(event) {
    disableInput(true);
    fetchData(event).then(function (data) {
      var newElement = document.createElement("p");
      if (+data.usd >= 20 && data.result) {
        setValueValid(data.result);
        newElement.textContent = "The GBP value of your withdrawal will be \xA3".concat(data.gbp);
      } else {
        newElement.textContent = 'Invalid amount';
      }
      setIsLoading(false);
      //if data.gbp is less than 20, display a message saying that the withdrawal amount is less than £20
      ConvDivRef.current.appendChild(newElement);
    })["catch"](function (error) {
      console.error('Error:', error);
      setHasError(true);
    });
  }
  if (hasError) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("p", null, "oops something went wrong");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("h3", null, "Request Withdrawal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("p", null, "Please enter a withdrawal amount and convert to GBP:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("p", null, "Your account balance is $", props.max), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("form", {
    onSubmit: ConfirmAndConvertUsd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("label", {
    htmlFor: "UsdWithdrawAmount"
  }, "Withdrawal Amount In USD($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("input", {
    ref: InputRef,
    type: "text",
    id: "UsdWithdrawAmount",
    name: "UsdWithdrawAmount",
    maxLength: "8",
    onChange: withdrawalInputChangeHandler,
    value: usdWithdrawAmount
  }), isInputValid && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("button", {
    ref: ConvertButtonRef,
    id: "convert-btn",
    onClick: ConfirmAndConvertUsd
  }, "Convert")), exceedsBalance && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("span", null, "Amount entered exceeds account balance"), !isMoreThanMin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("span", null, "Amount needs to equal $20 or more"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("button", {
    ref: MaxButtonRef,
    onClick: setToMax
  }, "Max"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("div", {
    ref: ConvDivRef
  }), isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement((react_spinners_PropagateLoader__WEBPACK_IMPORTED_MODULE_35___default()), {
    color: "#5f66e6",
    size: 25,
    "aria-label": "Loading Spinner",
    "data-testid": "loader"
  }), isInputValid && valueValid && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement(_components_ContinueResetButtons__WEBPACK_IMPORTED_MODULE_34__["default"], {
    link: '/withdraw/withdraw-details',
    handleConversionReset: handleConversionReset
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithdrawInputs);

/***/ }),

/***/ "./assets/react/controllers/components/ContinueResetButtons.jsx":
/*!**********************************************************************!*\
  !*** ./assets/react/controllers/components/ContinueResetButtons.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ContinueResetButtons(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    id: "confirm-continue-btn",
    href: props.link
  }, "Continue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    id: "reset-btn",
    onClick: props.handleConversionReset
  }, "Reset"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContinueResetButtons);

/***/ }),

/***/ "./assets/react/controllers/components/Form.jsx":
/*!******************************************************!*\
  !*** ./assets/react/controllers/components/Form.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Form(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: ConfirmAndConvertGbp
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "GbpDepositAmount"
  }, "Deposit Amount in GBP(\xA3)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    ref: InputRef,
    type: "text",
    id: "GbpDepositAmount",
    name: "GbpDepositAmount",
    maxLength: "8",
    onChange: props.setGbpDepositAmountHandler,
    value: props.gbpDepositAmount
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    ref: ButtonRef,
    id: "convert-btn",
    onClick: props.ConfirmAndConvertGbp
  }, "Convert"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./assets/react/controllers/components/TransactionItem.jsx":
/*!*****************************************************************!*\
  !*** ./assets/react/controllers/components/TransactionItem.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function TransactionItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, props.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "$", props.usd), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "\xA3", props.gbp), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, props.timestamp), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, props.isVerified ? 'verified' : 'not verified')));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionItem);

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_symfony_ux-react_dist-dccd1f"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNCdUU7QUFDdkUsaUVBQWU7QUFDZiw4QkFBOEIsbUZBQVk7QUFDMUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQ0ZELHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxPQUFBLFNBQUFBLE9BQUEsT0FBQUMsRUFBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsTUFBQSxHQUFBSCxFQUFBLENBQUFJLGNBQUEsRUFBQUMsY0FBQSxHQUFBSixNQUFBLENBQUFJLGNBQUEsY0FBQUMsR0FBQSxFQUFBQyxHQUFBLEVBQUFDLElBQUEsSUFBQUYsR0FBQSxDQUFBQyxHQUFBLElBQUFDLElBQUEsQ0FBQUMsS0FBQSxLQUFBQyxPQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsY0FBQSxHQUFBRixPQUFBLENBQUFHLFFBQUEsa0JBQUFDLG1CQUFBLEdBQUFKLE9BQUEsQ0FBQUssYUFBQSx1QkFBQUMsaUJBQUEsR0FBQU4sT0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBWixHQUFBLEVBQUFDLEdBQUEsRUFBQUUsS0FBQSxXQUFBUixNQUFBLENBQUFJLGNBQUEsQ0FBQUMsR0FBQSxFQUFBQyxHQUFBLElBQUFFLEtBQUEsRUFBQUEsS0FBQSxFQUFBVSxVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBZixHQUFBLENBQUFDLEdBQUEsV0FBQVcsTUFBQSxtQkFBQUksR0FBQSxJQUFBSixNQUFBLFlBQUFBLE9BQUFaLEdBQUEsRUFBQUMsR0FBQSxFQUFBRSxLQUFBLFdBQUFILEdBQUEsQ0FBQUMsR0FBQSxJQUFBRSxLQUFBLGdCQUFBYyxLQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLFFBQUFDLGNBQUEsR0FBQUgsT0FBQSxJQUFBQSxPQUFBLENBQUF2QixTQUFBLFlBQUEyQixTQUFBLEdBQUFKLE9BQUEsR0FBQUksU0FBQSxFQUFBQyxTQUFBLEdBQUE3QixNQUFBLENBQUE4QixNQUFBLENBQUFILGNBQUEsQ0FBQTFCLFNBQUEsR0FBQThCLE9BQUEsT0FBQUMsT0FBQSxDQUFBTixXQUFBLGdCQUFBdEIsY0FBQSxDQUFBeUIsU0FBQSxlQUFBckIsS0FBQSxFQUFBeUIsZ0JBQUEsQ0FBQVYsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsTUFBQUYsU0FBQSxhQUFBSyxTQUFBQyxFQUFBLEVBQUE5QixHQUFBLEVBQUErQixHQUFBLG1CQUFBQyxJQUFBLFlBQUFELEdBQUEsRUFBQUQsRUFBQSxDQUFBRyxJQUFBLENBQUFqQyxHQUFBLEVBQUErQixHQUFBLGNBQUFmLEdBQUEsYUFBQWdCLElBQUEsV0FBQUQsR0FBQSxFQUFBZixHQUFBLFFBQUF2QixPQUFBLENBQUF3QixJQUFBLEdBQUFBLElBQUEsTUFBQWlCLGdCQUFBLGdCQUFBWCxVQUFBLGNBQUFZLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLGlCQUFBLE9BQUF6QixNQUFBLENBQUF5QixpQkFBQSxFQUFBL0IsY0FBQSxxQ0FBQWdDLFFBQUEsR0FBQTNDLE1BQUEsQ0FBQTRDLGNBQUEsRUFBQUMsdUJBQUEsR0FBQUYsUUFBQSxJQUFBQSxRQUFBLENBQUFBLFFBQUEsQ0FBQUcsTUFBQSxRQUFBRCx1QkFBQSxJQUFBQSx1QkFBQSxLQUFBOUMsRUFBQSxJQUFBRyxNQUFBLENBQUFvQyxJQUFBLENBQUFPLHVCQUFBLEVBQUFsQyxjQUFBLE1BQUErQixpQkFBQSxHQUFBRyx1QkFBQSxPQUFBRSxFQUFBLEdBQUFOLDBCQUFBLENBQUF4QyxTQUFBLEdBQUEyQixTQUFBLENBQUEzQixTQUFBLEdBQUFELE1BQUEsQ0FBQThCLE1BQUEsQ0FBQVksaUJBQUEsWUFBQU0sc0JBQUEvQyxTQUFBLGdDQUFBZ0QsT0FBQSxXQUFBQyxNQUFBLElBQUFqQyxNQUFBLENBQUFoQixTQUFBLEVBQUFpRCxNQUFBLFlBQUFkLEdBQUEsZ0JBQUFlLE9BQUEsQ0FBQUQsTUFBQSxFQUFBZCxHQUFBLHNCQUFBZ0IsY0FBQXZCLFNBQUEsRUFBQXdCLFdBQUEsYUFBQUMsT0FBQUosTUFBQSxFQUFBZCxHQUFBLEVBQUFtQixPQUFBLEVBQUFDLE1BQUEsUUFBQUMsTUFBQSxHQUFBdkIsUUFBQSxDQUFBTCxTQUFBLENBQUFxQixNQUFBLEdBQUFyQixTQUFBLEVBQUFPLEdBQUEsbUJBQUFxQixNQUFBLENBQUFwQixJQUFBLFFBQUFxQixNQUFBLEdBQUFELE1BQUEsQ0FBQXJCLEdBQUEsRUFBQTVCLEtBQUEsR0FBQWtELE1BQUEsQ0FBQWxELEtBQUEsU0FBQUEsS0FBQSxnQkFBQW1ELE9BQUEsQ0FBQW5ELEtBQUEsS0FBQU4sTUFBQSxDQUFBb0MsSUFBQSxDQUFBOUIsS0FBQSxlQUFBNkMsV0FBQSxDQUFBRSxPQUFBLENBQUEvQyxLQUFBLENBQUFvRCxPQUFBLEVBQUFDLElBQUEsV0FBQXJELEtBQUEsSUFBQThDLE1BQUEsU0FBQTlDLEtBQUEsRUFBQStDLE9BQUEsRUFBQUMsTUFBQSxnQkFBQW5DLEdBQUEsSUFBQWlDLE1BQUEsVUFBQWpDLEdBQUEsRUFBQWtDLE9BQUEsRUFBQUMsTUFBQSxRQUFBSCxXQUFBLENBQUFFLE9BQUEsQ0FBQS9DLEtBQUEsRUFBQXFELElBQUEsV0FBQUMsU0FBQSxJQUFBSixNQUFBLENBQUFsRCxLQUFBLEdBQUFzRCxTQUFBLEVBQUFQLE9BQUEsQ0FBQUcsTUFBQSxnQkFBQUssS0FBQSxXQUFBVCxNQUFBLFVBQUFTLEtBQUEsRUFBQVIsT0FBQSxFQUFBQyxNQUFBLFNBQUFBLE1BQUEsQ0FBQUMsTUFBQSxDQUFBckIsR0FBQSxTQUFBNEIsZUFBQSxFQUFBNUQsY0FBQSxvQkFBQUksS0FBQSxXQUFBQSxNQUFBMEMsTUFBQSxFQUFBZCxHQUFBLGFBQUE2QiwyQkFBQSxlQUFBWixXQUFBLFdBQUFFLE9BQUEsRUFBQUMsTUFBQSxJQUFBRixNQUFBLENBQUFKLE1BQUEsRUFBQWQsR0FBQSxFQUFBbUIsT0FBQSxFQUFBQyxNQUFBLGdCQUFBUSxlQUFBLEdBQUFBLGVBQUEsR0FBQUEsZUFBQSxDQUFBSCxJQUFBLENBQUFJLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBaEMsaUJBQUFWLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLFFBQUFtQyxLQUFBLHNDQUFBaEIsTUFBQSxFQUFBZCxHQUFBLHdCQUFBOEIsS0FBQSxZQUFBQyxLQUFBLHNEQUFBRCxLQUFBLG9CQUFBaEIsTUFBQSxRQUFBZCxHQUFBLFNBQUFnQyxVQUFBLFdBQUFyQyxPQUFBLENBQUFtQixNQUFBLEdBQUFBLE1BQUEsRUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBQSxHQUFBLFVBQUFpQyxRQUFBLEdBQUF0QyxPQUFBLENBQUFzQyxRQUFBLE1BQUFBLFFBQUEsUUFBQUMsY0FBQSxHQUFBQyxtQkFBQSxDQUFBRixRQUFBLEVBQUF0QyxPQUFBLE9BQUF1QyxjQUFBLFFBQUFBLGNBQUEsS0FBQS9CLGdCQUFBLG1CQUFBK0IsY0FBQSxxQkFBQXZDLE9BQUEsQ0FBQW1CLE1BQUEsRUFBQW5CLE9BQUEsQ0FBQXlDLElBQUEsR0FBQXpDLE9BQUEsQ0FBQTBDLEtBQUEsR0FBQTFDLE9BQUEsQ0FBQUssR0FBQSxzQkFBQUwsT0FBQSxDQUFBbUIsTUFBQSw2QkFBQWdCLEtBQUEsUUFBQUEsS0FBQSxnQkFBQW5DLE9BQUEsQ0FBQUssR0FBQSxFQUFBTCxPQUFBLENBQUEyQyxpQkFBQSxDQUFBM0MsT0FBQSxDQUFBSyxHQUFBLHVCQUFBTCxPQUFBLENBQUFtQixNQUFBLElBQUFuQixPQUFBLENBQUE0QyxNQUFBLFdBQUE1QyxPQUFBLENBQUFLLEdBQUEsR0FBQThCLEtBQUEsb0JBQUFULE1BQUEsR0FBQXZCLFFBQUEsQ0FBQVgsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsb0JBQUEwQixNQUFBLENBQUFwQixJQUFBLFFBQUE2QixLQUFBLEdBQUFuQyxPQUFBLENBQUE2QyxJQUFBLG1DQUFBbkIsTUFBQSxDQUFBckIsR0FBQSxLQUFBRyxnQkFBQSxxQkFBQS9CLEtBQUEsRUFBQWlELE1BQUEsQ0FBQXJCLEdBQUEsRUFBQXdDLElBQUEsRUFBQTdDLE9BQUEsQ0FBQTZDLElBQUEsa0JBQUFuQixNQUFBLENBQUFwQixJQUFBLEtBQUE2QixLQUFBLGdCQUFBbkMsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLG1CQUFBbUMsb0JBQUFGLFFBQUEsRUFBQXRDLE9BQUEsUUFBQThDLFVBQUEsR0FBQTlDLE9BQUEsQ0FBQW1CLE1BQUEsRUFBQUEsTUFBQSxHQUFBbUIsUUFBQSxDQUFBekQsUUFBQSxDQUFBaUUsVUFBQSxPQUFBQyxTQUFBLEtBQUE1QixNQUFBLFNBQUFuQixPQUFBLENBQUFzQyxRQUFBLHFCQUFBUSxVQUFBLElBQUFSLFFBQUEsQ0FBQXpELFFBQUEsZUFBQW1CLE9BQUEsQ0FBQW1CLE1BQUEsYUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxFQUFBUCxtQkFBQSxDQUFBRixRQUFBLEVBQUF0QyxPQUFBLGVBQUFBLE9BQUEsQ0FBQW1CLE1BQUEsa0JBQUEyQixVQUFBLEtBQUE5QyxPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsT0FBQTJDLFNBQUEsdUNBQUFGLFVBQUEsaUJBQUF0QyxnQkFBQSxNQUFBa0IsTUFBQSxHQUFBdkIsUUFBQSxDQUFBZ0IsTUFBQSxFQUFBbUIsUUFBQSxDQUFBekQsUUFBQSxFQUFBbUIsT0FBQSxDQUFBSyxHQUFBLG1CQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxTQUFBTixPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXFCLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQUwsT0FBQSxDQUFBc0MsUUFBQSxTQUFBOUIsZ0JBQUEsTUFBQXlDLElBQUEsR0FBQXZCLE1BQUEsQ0FBQXJCLEdBQUEsU0FBQTRDLElBQUEsR0FBQUEsSUFBQSxDQUFBSixJQUFBLElBQUE3QyxPQUFBLENBQUFzQyxRQUFBLENBQUFZLFVBQUEsSUFBQUQsSUFBQSxDQUFBeEUsS0FBQSxFQUFBdUIsT0FBQSxDQUFBbUQsSUFBQSxHQUFBYixRQUFBLENBQUFjLE9BQUEsZUFBQXBELE9BQUEsQ0FBQW1CLE1BQUEsS0FBQW5CLE9BQUEsQ0FBQW1CLE1BQUEsV0FBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxHQUFBL0MsT0FBQSxDQUFBc0MsUUFBQSxTQUFBOUIsZ0JBQUEsSUFBQXlDLElBQUEsSUFBQWpELE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxPQUFBMkMsU0FBQSxzQ0FBQWhELE9BQUEsQ0FBQXNDLFFBQUEsU0FBQTlCLGdCQUFBLGNBQUE2QyxhQUFBQyxJQUFBLFFBQUFDLEtBQUEsS0FBQUMsTUFBQSxFQUFBRixJQUFBLFlBQUFBLElBQUEsS0FBQUMsS0FBQSxDQUFBRSxRQUFBLEdBQUFILElBQUEsV0FBQUEsSUFBQSxLQUFBQyxLQUFBLENBQUFHLFVBQUEsR0FBQUosSUFBQSxLQUFBQyxLQUFBLENBQUFJLFFBQUEsR0FBQUwsSUFBQSxXQUFBTSxVQUFBLENBQUFDLElBQUEsQ0FBQU4sS0FBQSxjQUFBTyxjQUFBUCxLQUFBLFFBQUE3QixNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsUUFBQXJDLE1BQUEsQ0FBQXBCLElBQUEsb0JBQUFvQixNQUFBLENBQUFyQixHQUFBLEVBQUFrRCxLQUFBLENBQUFRLFVBQUEsR0FBQXJDLE1BQUEsYUFBQXpCLFFBQUFOLFdBQUEsU0FBQWlFLFVBQUEsTUFBQUosTUFBQSxhQUFBN0QsV0FBQSxDQUFBdUIsT0FBQSxDQUFBbUMsWUFBQSxjQUFBVyxLQUFBLGlCQUFBakQsT0FBQWtELFFBQUEsUUFBQUEsUUFBQSxRQUFBQyxjQUFBLEdBQUFELFFBQUEsQ0FBQXJGLGNBQUEsT0FBQXNGLGNBQUEsU0FBQUEsY0FBQSxDQUFBM0QsSUFBQSxDQUFBMEQsUUFBQSw0QkFBQUEsUUFBQSxDQUFBZCxJQUFBLFNBQUFjLFFBQUEsT0FBQUUsS0FBQSxDQUFBRixRQUFBLENBQUFHLE1BQUEsU0FBQUMsQ0FBQSxPQUFBbEIsSUFBQSxZQUFBQSxLQUFBLGFBQUFrQixDQUFBLEdBQUFKLFFBQUEsQ0FBQUcsTUFBQSxPQUFBakcsTUFBQSxDQUFBb0MsSUFBQSxDQUFBMEQsUUFBQSxFQUFBSSxDQUFBLFVBQUFsQixJQUFBLENBQUExRSxLQUFBLEdBQUF3RixRQUFBLENBQUFJLENBQUEsR0FBQWxCLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFNBQUFBLElBQUEsQ0FBQTFFLEtBQUEsR0FBQXNFLFNBQUEsRUFBQUksSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsWUFBQUEsSUFBQSxDQUFBQSxJQUFBLEdBQUFBLElBQUEsZUFBQUEsSUFBQSxFQUFBZCxVQUFBLGVBQUFBLFdBQUEsYUFBQTVELEtBQUEsRUFBQXNFLFNBQUEsRUFBQUYsSUFBQSxpQkFBQXBDLGlCQUFBLENBQUF2QyxTQUFBLEdBQUF3QywwQkFBQSxFQUFBckMsY0FBQSxDQUFBMkMsRUFBQSxtQkFBQXZDLEtBQUEsRUFBQWlDLDBCQUFBLEVBQUF0QixZQUFBLFNBQUFmLGNBQUEsQ0FBQXFDLDBCQUFBLG1CQUFBakMsS0FBQSxFQUFBZ0MsaUJBQUEsRUFBQXJCLFlBQUEsU0FBQXFCLGlCQUFBLENBQUE2RCxXQUFBLEdBQUFwRixNQUFBLENBQUF3QiwwQkFBQSxFQUFBMUIsaUJBQUEsd0JBQUFqQixPQUFBLENBQUF3RyxtQkFBQSxhQUFBQyxNQUFBLFFBQUFDLElBQUEsd0JBQUFELE1BQUEsSUFBQUEsTUFBQSxDQUFBRSxXQUFBLFdBQUFELElBQUEsS0FBQUEsSUFBQSxLQUFBaEUsaUJBQUEsNkJBQUFnRSxJQUFBLENBQUFILFdBQUEsSUFBQUcsSUFBQSxDQUFBRSxJQUFBLE9BQUE1RyxPQUFBLENBQUE2RyxJQUFBLGFBQUFKLE1BQUEsV0FBQXZHLE1BQUEsQ0FBQTRHLGNBQUEsR0FBQTVHLE1BQUEsQ0FBQTRHLGNBQUEsQ0FBQUwsTUFBQSxFQUFBOUQsMEJBQUEsS0FBQThELE1BQUEsQ0FBQU0sU0FBQSxHQUFBcEUsMEJBQUEsRUFBQXhCLE1BQUEsQ0FBQXNGLE1BQUEsRUFBQXhGLGlCQUFBLHlCQUFBd0YsTUFBQSxDQUFBdEcsU0FBQSxHQUFBRCxNQUFBLENBQUE4QixNQUFBLENBQUFpQixFQUFBLEdBQUF3RCxNQUFBLEtBQUF6RyxPQUFBLENBQUFnSCxLQUFBLGFBQUExRSxHQUFBLGFBQUF3QixPQUFBLEVBQUF4QixHQUFBLE9BQUFZLHFCQUFBLENBQUFJLGFBQUEsQ0FBQW5ELFNBQUEsR0FBQWdCLE1BQUEsQ0FBQW1DLGFBQUEsQ0FBQW5ELFNBQUEsRUFBQVksbUJBQUEsaUNBQUFmLE9BQUEsQ0FBQXNELGFBQUEsR0FBQUEsYUFBQSxFQUFBdEQsT0FBQSxDQUFBaUgsS0FBQSxhQUFBeEYsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxFQUFBMkIsV0FBQSxlQUFBQSxXQUFBLEtBQUFBLFdBQUEsR0FBQTJELE9BQUEsT0FBQUMsSUFBQSxPQUFBN0QsYUFBQSxDQUFBOUIsSUFBQSxDQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLEdBQUEyQixXQUFBLFVBQUF2RCxPQUFBLENBQUF3RyxtQkFBQSxDQUFBOUUsT0FBQSxJQUFBeUYsSUFBQSxHQUFBQSxJQUFBLENBQUEvQixJQUFBLEdBQUFyQixJQUFBLFdBQUFILE1BQUEsV0FBQUEsTUFBQSxDQUFBa0IsSUFBQSxHQUFBbEIsTUFBQSxDQUFBbEQsS0FBQSxHQUFBeUcsSUFBQSxDQUFBL0IsSUFBQSxXQUFBbEMscUJBQUEsQ0FBQUQsRUFBQSxHQUFBOUIsTUFBQSxDQUFBOEIsRUFBQSxFQUFBaEMsaUJBQUEsZ0JBQUFFLE1BQUEsQ0FBQThCLEVBQUEsRUFBQXBDLGNBQUEsaUNBQUFNLE1BQUEsQ0FBQThCLEVBQUEsNkRBQUFqRCxPQUFBLENBQUFvSCxJQUFBLGFBQUFDLEdBQUEsUUFBQUMsTUFBQSxHQUFBcEgsTUFBQSxDQUFBbUgsR0FBQSxHQUFBRCxJQUFBLGdCQUFBNUcsR0FBQSxJQUFBOEcsTUFBQSxFQUFBRixJQUFBLENBQUF0QixJQUFBLENBQUF0RixHQUFBLFVBQUE0RyxJQUFBLENBQUFHLE9BQUEsYUFBQW5DLEtBQUEsV0FBQWdDLElBQUEsQ0FBQWYsTUFBQSxTQUFBN0YsR0FBQSxHQUFBNEcsSUFBQSxDQUFBSSxHQUFBLFFBQUFoSCxHQUFBLElBQUE4RyxNQUFBLFNBQUFsQyxJQUFBLENBQUExRSxLQUFBLEdBQUFGLEdBQUEsRUFBQTRFLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFdBQUFBLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFFBQUFwRixPQUFBLENBQUFnRCxNQUFBLEdBQUFBLE1BQUEsRUFBQWQsT0FBQSxDQUFBL0IsU0FBQSxLQUFBd0csV0FBQSxFQUFBekUsT0FBQSxFQUFBK0QsS0FBQSxXQUFBQSxNQUFBd0IsYUFBQSxhQUFBQyxJQUFBLFdBQUF0QyxJQUFBLFdBQUFWLElBQUEsUUFBQUMsS0FBQSxHQUFBSyxTQUFBLE9BQUFGLElBQUEsWUFBQVAsUUFBQSxjQUFBbkIsTUFBQSxnQkFBQWQsR0FBQSxHQUFBMEMsU0FBQSxPQUFBYSxVQUFBLENBQUExQyxPQUFBLENBQUE0QyxhQUFBLElBQUEwQixhQUFBLFdBQUFiLElBQUEsa0JBQUFBLElBQUEsQ0FBQWUsTUFBQSxPQUFBdkgsTUFBQSxDQUFBb0MsSUFBQSxPQUFBb0UsSUFBQSxNQUFBUixLQUFBLEVBQUFRLElBQUEsQ0FBQWdCLEtBQUEsY0FBQWhCLElBQUEsSUFBQTVCLFNBQUEsTUFBQTZDLElBQUEsV0FBQUEsS0FBQSxTQUFBL0MsSUFBQSxXQUFBZ0QsVUFBQSxRQUFBakMsVUFBQSxJQUFBRyxVQUFBLGtCQUFBOEIsVUFBQSxDQUFBdkYsSUFBQSxRQUFBdUYsVUFBQSxDQUFBeEYsR0FBQSxjQUFBeUYsSUFBQSxLQUFBbkQsaUJBQUEsV0FBQUEsa0JBQUFvRCxTQUFBLGFBQUFsRCxJQUFBLFFBQUFrRCxTQUFBLE1BQUEvRixPQUFBLGtCQUFBZ0csT0FBQUMsR0FBQSxFQUFBQyxNQUFBLFdBQUF4RSxNQUFBLENBQUFwQixJQUFBLFlBQUFvQixNQUFBLENBQUFyQixHQUFBLEdBQUEwRixTQUFBLEVBQUEvRixPQUFBLENBQUFtRCxJQUFBLEdBQUE4QyxHQUFBLEVBQUFDLE1BQUEsS0FBQWxHLE9BQUEsQ0FBQW1CLE1BQUEsV0FBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxLQUFBbUQsTUFBQSxhQUFBN0IsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLEdBQUEzQyxNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsaUJBQUFSLEtBQUEsQ0FBQUMsTUFBQSxTQUFBd0MsTUFBQSxhQUFBekMsS0FBQSxDQUFBQyxNQUFBLFNBQUFpQyxJQUFBLFFBQUFVLFFBQUEsR0FBQWhJLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQWdELEtBQUEsZUFBQTZDLFVBQUEsR0FBQWpJLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQWdELEtBQUEscUJBQUE0QyxRQUFBLElBQUFDLFVBQUEsYUFBQVgsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRSxRQUFBLFNBQUF1QyxNQUFBLENBQUF6QyxLQUFBLENBQUFFLFFBQUEsZ0JBQUFnQyxJQUFBLEdBQUFsQyxLQUFBLENBQUFHLFVBQUEsU0FBQXNDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUcsVUFBQSxjQUFBeUMsUUFBQSxhQUFBVixJQUFBLEdBQUFsQyxLQUFBLENBQUFFLFFBQUEsU0FBQXVDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUUsUUFBQSxxQkFBQTJDLFVBQUEsWUFBQWhFLEtBQUEscURBQUFxRCxJQUFBLEdBQUFsQyxLQUFBLENBQUFHLFVBQUEsU0FBQXNDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUcsVUFBQSxZQUFBZCxNQUFBLFdBQUFBLE9BQUF0QyxJQUFBLEVBQUFELEdBQUEsYUFBQWdFLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxPQUFBZCxLQUFBLENBQUFDLE1BQUEsU0FBQWlDLElBQUEsSUFBQXRILE1BQUEsQ0FBQW9DLElBQUEsQ0FBQWdELEtBQUEsd0JBQUFrQyxJQUFBLEdBQUFsQyxLQUFBLENBQUFHLFVBQUEsUUFBQTJDLFlBQUEsR0FBQTlDLEtBQUEsYUFBQThDLFlBQUEsaUJBQUEvRixJQUFBLG1CQUFBQSxJQUFBLEtBQUErRixZQUFBLENBQUE3QyxNQUFBLElBQUFuRCxHQUFBLElBQUFBLEdBQUEsSUFBQWdHLFlBQUEsQ0FBQTNDLFVBQUEsS0FBQTJDLFlBQUEsY0FBQTNFLE1BQUEsR0FBQTJFLFlBQUEsR0FBQUEsWUFBQSxDQUFBdEMsVUFBQSxjQUFBckMsTUFBQSxDQUFBcEIsSUFBQSxHQUFBQSxJQUFBLEVBQUFvQixNQUFBLENBQUFyQixHQUFBLEdBQUFBLEdBQUEsRUFBQWdHLFlBQUEsU0FBQWxGLE1BQUEsZ0JBQUFnQyxJQUFBLEdBQUFrRCxZQUFBLENBQUEzQyxVQUFBLEVBQUFsRCxnQkFBQSxTQUFBOEYsUUFBQSxDQUFBNUUsTUFBQSxNQUFBNEUsUUFBQSxXQUFBQSxTQUFBNUUsTUFBQSxFQUFBaUMsUUFBQSxvQkFBQWpDLE1BQUEsQ0FBQXBCLElBQUEsUUFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEscUJBQUFxQixNQUFBLENBQUFwQixJQUFBLG1CQUFBb0IsTUFBQSxDQUFBcEIsSUFBQSxRQUFBNkMsSUFBQSxHQUFBekIsTUFBQSxDQUFBckIsR0FBQSxnQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsU0FBQXdGLElBQUEsUUFBQXpGLEdBQUEsR0FBQXFCLE1BQUEsQ0FBQXJCLEdBQUEsT0FBQWMsTUFBQSxrQkFBQWdDLElBQUEseUJBQUF6QixNQUFBLENBQUFwQixJQUFBLElBQUFxRCxRQUFBLFVBQUFSLElBQUEsR0FBQVEsUUFBQSxHQUFBbkQsZ0JBQUEsS0FBQStGLE1BQUEsV0FBQUEsT0FBQTdDLFVBQUEsYUFBQVcsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUcsVUFBQSxLQUFBQSxVQUFBLGNBQUE0QyxRQUFBLENBQUEvQyxLQUFBLENBQUFRLFVBQUEsRUFBQVIsS0FBQSxDQUFBSSxRQUFBLEdBQUFHLGFBQUEsQ0FBQVAsS0FBQSxHQUFBL0MsZ0JBQUEseUJBQUFnRyxPQUFBaEQsTUFBQSxhQUFBYSxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBQyxNQUFBLEtBQUFBLE1BQUEsUUFBQTlCLE1BQUEsR0FBQTZCLEtBQUEsQ0FBQVEsVUFBQSxrQkFBQXJDLE1BQUEsQ0FBQXBCLElBQUEsUUFBQW1HLE1BQUEsR0FBQS9FLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQXlELGFBQUEsQ0FBQVAsS0FBQSxZQUFBa0QsTUFBQSxnQkFBQXJFLEtBQUEsOEJBQUFzRSxhQUFBLFdBQUFBLGNBQUF6QyxRQUFBLEVBQUFmLFVBQUEsRUFBQUUsT0FBQSxnQkFBQWQsUUFBQSxLQUFBekQsUUFBQSxFQUFBa0MsTUFBQSxDQUFBa0QsUUFBQSxHQUFBZixVQUFBLEVBQUFBLFVBQUEsRUFBQUUsT0FBQSxFQUFBQSxPQUFBLG9CQUFBakMsTUFBQSxVQUFBZCxHQUFBLEdBQUEwQyxTQUFBLEdBQUF2QyxnQkFBQSxPQUFBekMsT0FBQTtBQUFBLFNBQUE0SSxtQkFBQUMsR0FBQSxFQUFBcEYsT0FBQSxFQUFBQyxNQUFBLEVBQUFvRixLQUFBLEVBQUFDLE1BQUEsRUFBQXZJLEdBQUEsRUFBQThCLEdBQUEsY0FBQTRDLElBQUEsR0FBQTJELEdBQUEsQ0FBQXJJLEdBQUEsRUFBQThCLEdBQUEsT0FBQTVCLEtBQUEsR0FBQXdFLElBQUEsQ0FBQXhFLEtBQUEsV0FBQXVELEtBQUEsSUFBQVAsTUFBQSxDQUFBTyxLQUFBLGlCQUFBaUIsSUFBQSxDQUFBSixJQUFBLElBQUFyQixPQUFBLENBQUEvQyxLQUFBLFlBQUF3RyxPQUFBLENBQUF6RCxPQUFBLENBQUEvQyxLQUFBLEVBQUFxRCxJQUFBLENBQUErRSxLQUFBLEVBQUFDLE1BQUE7QUFBQSxTQUFBQyxrQkFBQTNHLEVBQUEsNkJBQUFWLElBQUEsU0FBQXNILElBQUEsR0FBQUMsU0FBQSxhQUFBaEMsT0FBQSxXQUFBekQsT0FBQSxFQUFBQyxNQUFBLFFBQUFtRixHQUFBLEdBQUF4RyxFQUFBLENBQUE4RyxLQUFBLENBQUF4SCxJQUFBLEVBQUFzSCxJQUFBLFlBQUFILE1BQUFwSSxLQUFBLElBQUFrSSxrQkFBQSxDQUFBQyxHQUFBLEVBQUFwRixPQUFBLEVBQUFDLE1BQUEsRUFBQW9GLEtBQUEsRUFBQUMsTUFBQSxVQUFBckksS0FBQSxjQUFBcUksT0FBQXhILEdBQUEsSUFBQXFILGtCQUFBLENBQUFDLEdBQUEsRUFBQXBGLE9BQUEsRUFBQUMsTUFBQSxFQUFBb0YsS0FBQSxFQUFBQyxNQUFBLFdBQUF4SCxHQUFBLEtBQUF1SCxLQUFBLENBQUE5RCxTQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFBb0UsZUFBQUMsR0FBQSxFQUFBL0MsQ0FBQSxXQUFBZ0QsZUFBQSxDQUFBRCxHQUFBLEtBQUFFLHFCQUFBLENBQUFGLEdBQUEsRUFBQS9DLENBQUEsS0FBQWtELDJCQUFBLENBQUFILEdBQUEsRUFBQS9DLENBQUEsS0FBQW1ELGdCQUFBO0FBQUEsU0FBQUEsaUJBQUEsY0FBQXhFLFNBQUE7QUFBQSxTQUFBdUUsNEJBQUFFLENBQUEsRUFBQUMsTUFBQSxTQUFBRCxDQUFBLHFCQUFBQSxDQUFBLHNCQUFBRSxpQkFBQSxDQUFBRixDQUFBLEVBQUFDLE1BQUEsT0FBQUUsQ0FBQSxHQUFBM0osTUFBQSxDQUFBQyxTQUFBLENBQUEySixRQUFBLENBQUF0SCxJQUFBLENBQUFrSCxDQUFBLEVBQUE5QixLQUFBLGFBQUFpQyxDQUFBLGlCQUFBSCxDQUFBLENBQUEvQyxXQUFBLEVBQUFrRCxDQUFBLEdBQUFILENBQUEsQ0FBQS9DLFdBQUEsQ0FBQUMsSUFBQSxNQUFBaUQsQ0FBQSxjQUFBQSxDQUFBLG1CQUFBRSxLQUFBLENBQUFDLElBQUEsQ0FBQU4sQ0FBQSxPQUFBRyxDQUFBLCtEQUFBSSxJQUFBLENBQUFKLENBQUEsVUFBQUQsaUJBQUEsQ0FBQUYsQ0FBQSxFQUFBQyxNQUFBO0FBQUEsU0FBQUMsa0JBQUFQLEdBQUEsRUFBQWEsR0FBQSxRQUFBQSxHQUFBLFlBQUFBLEdBQUEsR0FBQWIsR0FBQSxDQUFBaEQsTUFBQSxFQUFBNkQsR0FBQSxHQUFBYixHQUFBLENBQUFoRCxNQUFBLFdBQUFDLENBQUEsTUFBQTZELElBQUEsT0FBQUosS0FBQSxDQUFBRyxHQUFBLEdBQUE1RCxDQUFBLEdBQUE0RCxHQUFBLEVBQUE1RCxDQUFBLElBQUE2RCxJQUFBLENBQUE3RCxDQUFBLElBQUErQyxHQUFBLENBQUEvQyxDQUFBLFVBQUE2RCxJQUFBO0FBQUEsU0FBQVosc0JBQUFGLEdBQUEsRUFBQS9DLENBQUEsUUFBQThELEVBQUEsV0FBQWYsR0FBQSxnQ0FBQXpJLE1BQUEsSUFBQXlJLEdBQUEsQ0FBQXpJLE1BQUEsQ0FBQUUsUUFBQSxLQUFBdUksR0FBQSw0QkFBQWUsRUFBQSxRQUFBQyxFQUFBLEVBQUFDLEVBQUEsRUFBQUMsRUFBQSxFQUFBQyxFQUFBLEVBQUFDLElBQUEsT0FBQUMsRUFBQSxPQUFBQyxFQUFBLGlCQUFBSixFQUFBLElBQUFILEVBQUEsR0FBQUEsRUFBQSxDQUFBNUgsSUFBQSxDQUFBNkcsR0FBQSxHQUFBakUsSUFBQSxRQUFBa0IsQ0FBQSxRQUFBcEcsTUFBQSxDQUFBa0ssRUFBQSxNQUFBQSxFQUFBLFVBQUFNLEVBQUEsdUJBQUFBLEVBQUEsSUFBQUwsRUFBQSxHQUFBRSxFQUFBLENBQUEvSCxJQUFBLENBQUE0SCxFQUFBLEdBQUF0RixJQUFBLE1BQUEyRixJQUFBLENBQUEzRSxJQUFBLENBQUF1RSxFQUFBLENBQUEzSixLQUFBLEdBQUErSixJQUFBLENBQUFwRSxNQUFBLEtBQUFDLENBQUEsR0FBQW9FLEVBQUEsaUJBQUFuSixHQUFBLElBQUFvSixFQUFBLE9BQUFMLEVBQUEsR0FBQS9JLEdBQUEseUJBQUFtSixFQUFBLFlBQUFOLEVBQUEsZUFBQUksRUFBQSxHQUFBSixFQUFBLGNBQUFsSyxNQUFBLENBQUFzSyxFQUFBLE1BQUFBLEVBQUEsMkJBQUFHLEVBQUEsUUFBQUwsRUFBQSxhQUFBRyxJQUFBO0FBQUEsU0FBQW5CLGdCQUFBRCxHQUFBLFFBQUFVLEtBQUEsQ0FBQWEsT0FBQSxDQUFBdkIsR0FBQSxVQUFBQSxHQUFBO0FBRDhDO0FBQ2U7QUFDUTtBQUNoQztBQUVyQyxJQUFNOEIsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVU7RUFDMUI7RUFDQSxJQUFNQyxTQUFTLEdBQUdMLDhDQUFNLENBQUMsSUFBSSxDQUFDO0VBQzlCLElBQU1NLFFBQVEsR0FBR04sOENBQU0sQ0FBQyxJQUFJLENBQUM7RUFDN0IsSUFBTU8sVUFBVSxHQUFHUCw4Q0FBTSxDQUFDLElBQUksQ0FBQztFQUMvQixJQUFBUSxTQUFBLEdBQWdEVCxnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBVSxVQUFBLEdBQUFwQyxjQUFBLENBQUFtQyxTQUFBO0lBQXJERSxnQkFBZ0IsR0FBQUQsVUFBQTtJQUFFRSxtQkFBbUIsR0FBQUYsVUFBQTtFQUM1QyxJQUFBRyxVQUFBLEdBQW9DYixnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBYyxVQUFBLEdBQUF4QyxjQUFBLENBQUF1QyxVQUFBO0lBQTVDRSxVQUFVLEdBQUFELFVBQUE7SUFBRUUsYUFBYSxHQUFBRixVQUFBO0VBQ2hDLElBQUFHLFVBQUEsR0FBa0RqQixnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBa0IsVUFBQSxHQUFBNUMsY0FBQSxDQUFBMkMsVUFBQTtJQUExREUsaUJBQWlCLEdBQUFELFVBQUE7SUFBRUUsb0JBQW9CLEdBQUFGLFVBQUE7RUFDOUMsSUFBQUcsVUFBQSxHQUFnQ3JCLGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFzQixVQUFBLEdBQUFoRCxjQUFBLENBQUErQyxVQUFBO0lBQXhDRSxRQUFRLEdBQUFELFVBQUE7SUFBRUUsV0FBVyxHQUFBRixVQUFBO0VBQzVCLElBQUFHLFVBQUEsR0FBa0N6QixnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBMEIsV0FBQSxHQUFBcEQsY0FBQSxDQUFBbUQsVUFBQTtJQUExQ0UsU0FBUyxHQUFBRCxXQUFBO0lBQUVFLFlBQVksR0FBQUYsV0FBQTs7RUFFOUI7RUFDQSxTQUFTRyxlQUFlQSxDQUFDak0sS0FBSyxFQUFFO0lBQzdCO01BQUVBLEtBQUssSUFBSSxFQUFFLEdBQUlvTCxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUdBLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUFDO0VBQy9EO0VBRUEsU0FBU2MsYUFBYUEsQ0FBRUMsSUFBSSxFQUFFO0lBQzNCekIsU0FBUyxDQUFDMEIsT0FBTyxDQUFDQyxRQUFRLEdBQUdGLElBQUk7SUFDakN4QixRQUFRLENBQUN5QixPQUFPLENBQUNDLFFBQVEsR0FBR0YsSUFBSTtFQUNuQzs7RUFFQTtFQUNBLFNBQVNHLGlCQUFpQkEsQ0FBQ3RNLEtBQUssRUFBRTtJQUMvQixJQUFNdU0sT0FBTyxHQUFHLFlBQVk7SUFDNUIsSUFBSSxDQUFDQSxPQUFPLENBQUNoRCxJQUFJLENBQUN2SixLQUFLLENBQUMsRUFBRTtJQUUxQixJQUFJd00sV0FBVyxHQUFHeE0sS0FBSyxDQUFDeU0sT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7SUFDekMsSUFBSUMsY0FBYyxHQUFHQyxNQUFNLENBQUNILFdBQVcsQ0FBQyxDQUFDSSxjQUFjLEVBQUU7SUFFeERGLGNBQWMsS0FBSyxHQUFHLEdBQUkxQixtQkFBbUIsQ0FBQyxFQUFFLENBQUMsR0FBR0EsbUJBQW1CLENBQUMwQixjQUFjLENBQUM7RUFDM0Y7RUFBQyxTQUVjRyxxQkFBcUJBLENBQUFDLEdBQUE7SUFBQSxPQUFBQyxzQkFBQSxDQUFBdEUsS0FBQSxPQUFBRCxTQUFBO0VBQUE7RUFBQSxTQUFBdUUsdUJBQUE7SUFBQUEsc0JBQUEsR0FBQXpFLGlCQUFBLGVBQUFqSixtQkFBQSxHQUFBOEcsSUFBQSxDQUFwQyxTQUFBNkcsUUFBcUNDLEtBQUs7TUFBQSxJQUFBQyxRQUFBO01BQUEsT0FBQTdOLG1CQUFBLEdBQUF5QixJQUFBLFVBQUFxTSxTQUFBQyxRQUFBO1FBQUEsa0JBQUFBLFFBQUEsQ0FBQXBHLElBQUEsR0FBQW9HLFFBQUEsQ0FBQTFJLElBQUE7VUFBQTtZQUN2Q3VJLEtBQUssQ0FBQ0ksY0FBYyxFQUFFO1lBQ3RCckIsWUFBWSxDQUFDLElBQUksQ0FBQztZQUFDLEtBQ2ZiLFVBQVU7Y0FBQWlDLFFBQUEsQ0FBQTFJLElBQUE7Y0FBQTtZQUFBO1lBQUEwSSxRQUFBLENBQUFwRyxJQUFBO1lBQUFvRyxRQUFBLENBQUExSSxJQUFBO1lBQUEsT0FFZTRJLEtBQUssQ0FBQyx5QkFBeUIsRUFBRTtjQUNyRDVLLE1BQU0sRUFBRSxNQUFNO2NBQ2Q2SyxPQUFPLEVBQUU7Z0JBQ04sY0FBYyxFQUFFO2NBQ25CLENBQUM7Y0FDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztnQkFDbEIzQyxnQkFBZ0IsRUFBRUE7Y0FDckIsQ0FBQztZQUNKLENBQUMsQ0FBQztVQUFBO1lBUkltQyxRQUFRLEdBQUFFLFFBQUEsQ0FBQXBKLElBQUE7WUFBQW9KLFFBQUEsQ0FBQTFJLElBQUE7WUFBQSxPQVNEd0ksUUFBUSxDQUFDUyxJQUFJLEVBQUU7VUFBQTtZQUFBLE9BQUFQLFFBQUEsQ0FBQWpKLE1BQUEsV0FBQWlKLFFBQUEsQ0FBQXBKLElBQUE7VUFBQTtZQUFBb0osUUFBQSxDQUFBcEcsSUFBQTtZQUFBb0csUUFBQSxDQUFBUSxFQUFBLEdBQUFSLFFBQUE7WUFFNUJTLE9BQU8sQ0FBQ3RLLEtBQUssQ0FBQTZKLFFBQUEsQ0FBQVEsRUFBQSxDQUFPO1lBQ3BCaEMsV0FBVyxDQUFDLElBQUksQ0FBQztVQUFDO1VBQUE7WUFBQSxPQUFBd0IsUUFBQSxDQUFBakcsSUFBQTtRQUFBO01BQUEsR0FBQTZGLE9BQUE7SUFBQSxDQUcxQjtJQUFBLE9BQUFELHNCQUFBLENBQUF0RSxLQUFBLE9BQUFELFNBQUE7RUFBQTtFQUVELFNBQVNzRixvQkFBb0JBLENBQUNiLEtBQUssRUFBRTtJQUNsQztJQUNBZixhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ25CZSxLQUFLLENBQUNJLGNBQWMsRUFBRTtJQUN0QnpDLFVBQVUsQ0FBQ3dCLE9BQU8sQ0FBQzJCLFNBQVMsR0FBRyxFQUFFO0lBRWpDLElBQUk1QyxVQUFVLEVBQUU7TUFDYjBCLHFCQUFxQixDQUFDSSxLQUFLLENBQUMsQ0FDeEI1SixJQUFJLENBQUMsVUFBQTJLLElBQUksRUFBSTtRQUNYSCxPQUFPLENBQUNJLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRUQsSUFBSSxDQUFDRSxHQUFHLEVBQUVGLElBQUksQ0FBQ0csR0FBRyxDQUFDO1FBQ2pEbkMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNuQixJQUFNb0MsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDOUNGLFVBQVUsQ0FBQ0csV0FBVyw2Q0FBQUMsTUFBQSxDQUE2Q1IsSUFBSSxDQUFDRSxHQUFHLENBQUU7UUFDN0UxQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7UUFDMUJaLFVBQVUsQ0FBQ3dCLE9BQU8sQ0FBQ3FDLFdBQVcsQ0FBQ0wsVUFBVSxDQUFDO01BRTdDLENBQUMsQ0FBQyxTQUFNLENBQUMsVUFBQTdLLEtBQUssRUFBSTtRQUNsQnNLLE9BQU8sQ0FBQ3RLLEtBQUssQ0FBQyxRQUFRLEVBQUVBLEtBQUssQ0FBQztRQUM5QnFJLFdBQVcsQ0FBQyxJQUFJLENBQUM7TUFDcEIsQ0FBQyxDQUFDO0lBQ0w7RUFDSDs7RUFFQTtFQUNBLFNBQVM4QywwQkFBMEJBLENBQUN6QixLQUFLLEVBQUU7SUFDeENoQixlQUFlLENBQUNnQixLQUFLLENBQUMwQixNQUFNLENBQUMzTyxLQUFLLENBQUN5TSxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JESCxpQkFBaUIsQ0FBQ1csS0FBSyxDQUFDMEIsTUFBTSxDQUFDM08sS0FBSyxFQUFFLEtBQUssQ0FBQztFQUMvQztFQUVBLFNBQVM0TyxxQkFBcUJBLENBQUMzQixLQUFLLEVBQUU7SUFDbkNBLEtBQUssQ0FBQ0ksY0FBYyxFQUFFO0lBQ3RCbkIsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNwQnRCLFVBQVUsQ0FBQ3dCLE9BQU8sQ0FBQzJCLFNBQVMsR0FBRyxFQUFFO0lBQ2pDdkMsb0JBQW9CLENBQUMsS0FBSyxDQUFDO0VBQzlCO0VBRUEsSUFBSUcsUUFBUSxFQUFFLG9CQUFReEIsMkRBQUEsWUFBRywyQkFBeUIsQ0FBSTtFQUV0RCxvQkFDR0EsMkRBQUEsMkJBQ0dBLDJEQUFBLDJCQUNHQSwyREFBQSxhQUFJLDBCQUF3QixDQUFLLGVBQ2pDQSwyREFBQSxZQUFHLGdFQUE4RCxDQUFJLGVBQ3JFQSwyREFBQSwyQkFDR0EsMkRBQUE7SUFBTTBFLFFBQVEsRUFBRWY7RUFBcUIsZ0JBQ2xDM0QsMkRBQUE7SUFBTzJFLE9BQU8sRUFBQztFQUFrQixHQUFDLDZCQUF3QixDQUFRLGVBQ2xFM0UsMkRBQUE7SUFBTzRFLEdBQUcsRUFBRXBFLFFBQVM7SUFBQzlJLElBQUksRUFBQyxNQUFNO0lBQUNtTixFQUFFLEVBQUMsa0JBQWtCO0lBQUM5SSxJQUFJLEVBQUMsa0JBQWtCO0lBQUMrSSxTQUFTLEVBQUMsR0FBRztJQUFDQyxRQUFRLEVBQUVSLDBCQUEyQjtJQUFDMU8sS0FBSyxFQUFFK0s7RUFBaUIsRUFBRSxFQUM3SkksVUFBVSxpQkFBSWhCLDJEQUFBO0lBQVE0RSxHQUFHLEVBQUVyRSxTQUFVO0lBQUNzRSxFQUFFLEVBQUMsYUFBYTtJQUFDRyxPQUFPLEVBQUVyQjtFQUFxQixHQUFFLFNBQU8sQ0FBUyxDQUNwRyxFQUNOL0MsZ0JBQWdCLEdBQUcsRUFBRSxpQkFBSVosMkRBQUEsZUFBTSwyQ0FBc0MsQ0FBTyxDQUMxRSxDQUNILGVBQ05BLDJEQUFBO0lBQUs0RSxHQUFHLEVBQUVuRTtFQUFXLEdBQ3BCbUIsU0FBUyxpQkFDUDVCLDJEQUFBLENBQUNHLHdFQUFlO0lBQUM4RSxLQUFLLEVBQUUsU0FBVTtJQUFDQyxJQUFJLEVBQUUsRUFBRztJQUFDLGNBQVcsaUJBQWlCO0lBQUMsZUFBWTtFQUFRLEVBQUUsQ0FFN0YsRUFDTGxFLFVBQVUsSUFBSUksaUJBQWlCLGlCQUM3QnBCLDJEQUFBLENBQUNJLHlFQUFvQjtJQUFDK0UsSUFBSSxFQUFFLDBCQUEyQjtJQUFDVixxQkFBcUIsRUFBRUE7RUFBc0IsRUFBRyxDQUV4RztBQUVaLENBQUM7QUFFRCxpRUFBZW5FLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNIcUI7QUFDVTtBQUUzRCxTQUFTZ0Ysa0JBQWtCQSxDQUFBQyxJQUFBLEVBQTRCO0VBQUEsSUFBekJDLFFBQVEsR0FBQUQsSUFBQSxDQUFSQyxRQUFRO0lBQUVDLFdBQVcsR0FBQUYsSUFBQSxDQUFYRSxXQUFXO0VBQ2hELElBQUEvRSxTQUFBLEdBQWdDVCxnREFBUSxDQUFDLGFBQWEsQ0FBQztJQUFBVSxVQUFBLEdBQUFwQyxjQUFBLENBQUFtQyxTQUFBO0lBQWhEZ0YsUUFBUSxHQUFBL0UsVUFBQTtJQUFFZ0YsV0FBVyxHQUFBaEYsVUFBQTtFQUU1QixTQUFTaUYsa0JBQWtCQSxDQUFDOUMsS0FBSyxFQUFFO0lBQ2hDNkMsV0FBVyxDQUFDN0MsS0FBSyxDQUFDMEIsTUFBTSxDQUFDM08sS0FBSyxDQUFDO0VBQ2xDO0VBRUEsSUFBTWdRLGVBQWUsR0FBR1QsK0NBQU8sQ0FBQyxZQUFNO0lBQ25DLElBQU1VLFlBQVksR0FBR0osUUFBUSxLQUFLLGFBQWEsR0FBR0QsV0FBVyxHQUFHRCxRQUFRO0lBRXhFLE9BQU9NLFlBQVksQ0FBQ0MsR0FBRyxDQUFDLFVBQUNDLFdBQVcsRUFBRUMsS0FBSztNQUFBLG9CQUN4Q2pHLDJEQUFBLENBQUNxRixvRUFBZTtRQUNiMVAsR0FBRyxFQUFFc1EsS0FBTTtRQUNYcEIsRUFBRSxFQUFFbUIsV0FBVyxDQUFDbkIsRUFBRztRQUNuQmQsR0FBRyxFQUFFaUMsV0FBVyxDQUFDRSxVQUFXO1FBQzVCbEMsR0FBRyxFQUFFZ0MsV0FBVyxDQUFDRztRQUNqQjtRQUFBO1FBQ0FDLFNBQVMsRUFBRUosV0FBVyxDQUFDSSxTQUFTLENBQUNDLElBQUksQ0FBQy9ELE9BQU8sQ0FBQyxNQUFNLEVBQUUsVUFBQWdFLEtBQUs7VUFBQSxPQUFJLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDRCxLQUFLLENBQUM5SyxNQUFNLENBQUM7UUFBQSxFQUFFO1FBQ3pGZ0wsVUFBVSxFQUFFUixXQUFXLENBQUNTO01BQVksRUFDckM7SUFBQSxDQUNKLENBQUM7RUFDTCxDQUFDLEVBQUUsQ0FBQ2YsUUFBUSxFQUFFRixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxDQUFDO0VBRXJDLG9CQUNHekYsMkRBQUEsMkJBQ0dBLDJEQUFBLGFBQUkscUJBQW1CLENBQUssZUFDNUJBLDJEQUFBO0lBQUcwRyxJQUFJLEVBQUM7RUFBWSxHQUFDLG1CQUFpQixDQUFJLGVBQzFDMUcsMkRBQUE7SUFBUStFLFFBQVEsRUFBRWE7RUFBbUIsZ0JBQ2xDNUYsMkRBQUE7SUFBUW5LLEtBQUssRUFBQztFQUFhLEdBQUMsYUFBVyxDQUFTLGVBQ2hEbUssMkRBQUE7SUFBUW5LLEtBQUssRUFBQztFQUFVLEdBQUMsVUFBUSxDQUFTLENBQ3BDLGVBQ1RtSywyREFBQSw2QkFDQUEsMkRBQUEsNkJBQ0FBLDJEQUFBLDBCQUNHQSwyREFBQSxhQUFJLGdCQUFjLENBQUssZUFDdkJBLDJEQUFBLGFBQUksWUFBVSxDQUFLLGVBQ25CQSwyREFBQSxhQUFJLFlBQVUsQ0FBSyxlQUNuQkEsMkRBQUEsYUFBSSxXQUFTLENBQUssZUFDbEJBLDJEQUFBLGFBQUksVUFBUSxDQUFLLENBQ2YsQ0FDRyxFQUNKNkYsZUFBZSxDQUNYLENBQ0w7QUFFWjtBQUVBLGlFQUFlUCxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0NqRGpDLHFKQUFBcFEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9BQUFDLEVBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLE1BQUEsR0FBQUgsRUFBQSxDQUFBSSxjQUFBLEVBQUFDLGNBQUEsR0FBQUosTUFBQSxDQUFBSSxjQUFBLGNBQUFDLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxJQUFBLElBQUFGLEdBQUEsQ0FBQUMsR0FBQSxJQUFBQyxJQUFBLENBQUFDLEtBQUEsS0FBQUMsT0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLGNBQUEsR0FBQUYsT0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxtQkFBQSxHQUFBSixPQUFBLENBQUFLLGFBQUEsdUJBQUFDLGlCQUFBLEdBQUFOLE9BQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQVosR0FBQSxFQUFBQyxHQUFBLEVBQUFFLEtBQUEsV0FBQVIsTUFBQSxDQUFBSSxjQUFBLENBQUFDLEdBQUEsRUFBQUMsR0FBQSxJQUFBRSxLQUFBLEVBQUFBLEtBQUEsRUFBQVUsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQWYsR0FBQSxDQUFBQyxHQUFBLFdBQUFXLE1BQUEsbUJBQUFJLEdBQUEsSUFBQUosTUFBQSxZQUFBQSxPQUFBWixHQUFBLEVBQUFDLEdBQUEsRUFBQUUsS0FBQSxXQUFBSCxHQUFBLENBQUFDLEdBQUEsSUFBQUUsS0FBQSxnQkFBQWMsS0FBQUMsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxRQUFBQyxjQUFBLEdBQUFILE9BQUEsSUFBQUEsT0FBQSxDQUFBdkIsU0FBQSxZQUFBMkIsU0FBQSxHQUFBSixPQUFBLEdBQUFJLFNBQUEsRUFBQUMsU0FBQSxHQUFBN0IsTUFBQSxDQUFBOEIsTUFBQSxDQUFBSCxjQUFBLENBQUExQixTQUFBLEdBQUE4QixPQUFBLE9BQUFDLE9BQUEsQ0FBQU4sV0FBQSxnQkFBQXRCLGNBQUEsQ0FBQXlCLFNBQUEsZUFBQXJCLEtBQUEsRUFBQXlCLGdCQUFBLENBQUFWLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLE1BQUFGLFNBQUEsYUFBQUssU0FBQUMsRUFBQSxFQUFBOUIsR0FBQSxFQUFBK0IsR0FBQSxtQkFBQUMsSUFBQSxZQUFBRCxHQUFBLEVBQUFELEVBQUEsQ0FBQUcsSUFBQSxDQUFBakMsR0FBQSxFQUFBK0IsR0FBQSxjQUFBZixHQUFBLGFBQUFnQixJQUFBLFdBQUFELEdBQUEsRUFBQWYsR0FBQSxRQUFBdkIsT0FBQSxDQUFBd0IsSUFBQSxHQUFBQSxJQUFBLE1BQUFpQixnQkFBQSxnQkFBQVgsVUFBQSxjQUFBWSxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxpQkFBQSxPQUFBekIsTUFBQSxDQUFBeUIsaUJBQUEsRUFBQS9CLGNBQUEscUNBQUFnQyxRQUFBLEdBQUEzQyxNQUFBLENBQUE0QyxjQUFBLEVBQUFDLHVCQUFBLEdBQUFGLFFBQUEsSUFBQUEsUUFBQSxDQUFBQSxRQUFBLENBQUFHLE1BQUEsUUFBQUQsdUJBQUEsSUFBQUEsdUJBQUEsS0FBQTlDLEVBQUEsSUFBQUcsTUFBQSxDQUFBb0MsSUFBQSxDQUFBTyx1QkFBQSxFQUFBbEMsY0FBQSxNQUFBK0IsaUJBQUEsR0FBQUcsdUJBQUEsT0FBQUUsRUFBQSxHQUFBTiwwQkFBQSxDQUFBeEMsU0FBQSxHQUFBMkIsU0FBQSxDQUFBM0IsU0FBQSxHQUFBRCxNQUFBLENBQUE4QixNQUFBLENBQUFZLGlCQUFBLFlBQUFNLHNCQUFBL0MsU0FBQSxnQ0FBQWdELE9BQUEsV0FBQUMsTUFBQSxJQUFBakMsTUFBQSxDQUFBaEIsU0FBQSxFQUFBaUQsTUFBQSxZQUFBZCxHQUFBLGdCQUFBZSxPQUFBLENBQUFELE1BQUEsRUFBQWQsR0FBQSxzQkFBQWdCLGNBQUF2QixTQUFBLEVBQUF3QixXQUFBLGFBQUFDLE9BQUFKLE1BQUEsRUFBQWQsR0FBQSxFQUFBbUIsT0FBQSxFQUFBQyxNQUFBLFFBQUFDLE1BQUEsR0FBQXZCLFFBQUEsQ0FBQUwsU0FBQSxDQUFBcUIsTUFBQSxHQUFBckIsU0FBQSxFQUFBTyxHQUFBLG1CQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxRQUFBcUIsTUFBQSxHQUFBRCxNQUFBLENBQUFyQixHQUFBLEVBQUE1QixLQUFBLEdBQUFrRCxNQUFBLENBQUFsRCxLQUFBLFNBQUFBLEtBQUEsZ0JBQUFtRCxPQUFBLENBQUFuRCxLQUFBLEtBQUFOLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQTlCLEtBQUEsZUFBQTZDLFdBQUEsQ0FBQUUsT0FBQSxDQUFBL0MsS0FBQSxDQUFBb0QsT0FBQSxFQUFBQyxJQUFBLFdBQUFyRCxLQUFBLElBQUE4QyxNQUFBLFNBQUE5QyxLQUFBLEVBQUErQyxPQUFBLEVBQUFDLE1BQUEsZ0JBQUFuQyxHQUFBLElBQUFpQyxNQUFBLFVBQUFqQyxHQUFBLEVBQUFrQyxPQUFBLEVBQUFDLE1BQUEsUUFBQUgsV0FBQSxDQUFBRSxPQUFBLENBQUEvQyxLQUFBLEVBQUFxRCxJQUFBLFdBQUFDLFNBQUEsSUFBQUosTUFBQSxDQUFBbEQsS0FBQSxHQUFBc0QsU0FBQSxFQUFBUCxPQUFBLENBQUFHLE1BQUEsZ0JBQUFLLEtBQUEsV0FBQVQsTUFBQSxVQUFBUyxLQUFBLEVBQUFSLE9BQUEsRUFBQUMsTUFBQSxTQUFBQSxNQUFBLENBQUFDLE1BQUEsQ0FBQXJCLEdBQUEsU0FBQTRCLGVBQUEsRUFBQTVELGNBQUEsb0JBQUFJLEtBQUEsV0FBQUEsTUFBQTBDLE1BQUEsRUFBQWQsR0FBQSxhQUFBNkIsMkJBQUEsZUFBQVosV0FBQSxXQUFBRSxPQUFBLEVBQUFDLE1BQUEsSUFBQUYsTUFBQSxDQUFBSixNQUFBLEVBQUFkLEdBQUEsRUFBQW1CLE9BQUEsRUFBQUMsTUFBQSxnQkFBQVEsZUFBQSxHQUFBQSxlQUFBLEdBQUFBLGVBQUEsQ0FBQUgsSUFBQSxDQUFBSSwwQkFBQSxFQUFBQSwwQkFBQSxJQUFBQSwwQkFBQSxxQkFBQWhDLGlCQUFBVixPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxRQUFBbUMsS0FBQSxzQ0FBQWhCLE1BQUEsRUFBQWQsR0FBQSx3QkFBQThCLEtBQUEsWUFBQUMsS0FBQSxzREFBQUQsS0FBQSxvQkFBQWhCLE1BQUEsUUFBQWQsR0FBQSxTQUFBZ0MsVUFBQSxXQUFBckMsT0FBQSxDQUFBbUIsTUFBQSxHQUFBQSxNQUFBLEVBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQUEsR0FBQSxVQUFBaUMsUUFBQSxHQUFBdEMsT0FBQSxDQUFBc0MsUUFBQSxNQUFBQSxRQUFBLFFBQUFDLGNBQUEsR0FBQUMsbUJBQUEsQ0FBQUYsUUFBQSxFQUFBdEMsT0FBQSxPQUFBdUMsY0FBQSxRQUFBQSxjQUFBLEtBQUEvQixnQkFBQSxtQkFBQStCLGNBQUEscUJBQUF2QyxPQUFBLENBQUFtQixNQUFBLEVBQUFuQixPQUFBLENBQUF5QyxJQUFBLEdBQUF6QyxPQUFBLENBQUEwQyxLQUFBLEdBQUExQyxPQUFBLENBQUFLLEdBQUEsc0JBQUFMLE9BQUEsQ0FBQW1CLE1BQUEsNkJBQUFnQixLQUFBLFFBQUFBLEtBQUEsZ0JBQUFuQyxPQUFBLENBQUFLLEdBQUEsRUFBQUwsT0FBQSxDQUFBMkMsaUJBQUEsQ0FBQTNDLE9BQUEsQ0FBQUssR0FBQSx1QkFBQUwsT0FBQSxDQUFBbUIsTUFBQSxJQUFBbkIsT0FBQSxDQUFBNEMsTUFBQSxXQUFBNUMsT0FBQSxDQUFBSyxHQUFBLEdBQUE4QixLQUFBLG9CQUFBVCxNQUFBLEdBQUF2QixRQUFBLENBQUFYLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLG9CQUFBMEIsTUFBQSxDQUFBcEIsSUFBQSxRQUFBNkIsS0FBQSxHQUFBbkMsT0FBQSxDQUFBNkMsSUFBQSxtQ0FBQW5CLE1BQUEsQ0FBQXJCLEdBQUEsS0FBQUcsZ0JBQUEscUJBQUEvQixLQUFBLEVBQUFpRCxNQUFBLENBQUFyQixHQUFBLEVBQUF3QyxJQUFBLEVBQUE3QyxPQUFBLENBQUE2QyxJQUFBLGtCQUFBbkIsTUFBQSxDQUFBcEIsSUFBQSxLQUFBNkIsS0FBQSxnQkFBQW5DLE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBcUIsTUFBQSxDQUFBckIsR0FBQSxtQkFBQW1DLG9CQUFBRixRQUFBLEVBQUF0QyxPQUFBLFFBQUE4QyxVQUFBLEdBQUE5QyxPQUFBLENBQUFtQixNQUFBLEVBQUFBLE1BQUEsR0FBQW1CLFFBQUEsQ0FBQXpELFFBQUEsQ0FBQWlFLFVBQUEsT0FBQUMsU0FBQSxLQUFBNUIsTUFBQSxTQUFBbkIsT0FBQSxDQUFBc0MsUUFBQSxxQkFBQVEsVUFBQSxJQUFBUixRQUFBLENBQUF6RCxRQUFBLGVBQUFtQixPQUFBLENBQUFtQixNQUFBLGFBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQTBDLFNBQUEsRUFBQVAsbUJBQUEsQ0FBQUYsUUFBQSxFQUFBdEMsT0FBQSxlQUFBQSxPQUFBLENBQUFtQixNQUFBLGtCQUFBMkIsVUFBQSxLQUFBOUMsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLE9BQUEyQyxTQUFBLHVDQUFBRixVQUFBLGlCQUFBdEMsZ0JBQUEsTUFBQWtCLE1BQUEsR0FBQXZCLFFBQUEsQ0FBQWdCLE1BQUEsRUFBQW1CLFFBQUEsQ0FBQXpELFFBQUEsRUFBQW1CLE9BQUEsQ0FBQUssR0FBQSxtQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsU0FBQU4sT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLEVBQUFMLE9BQUEsQ0FBQXNDLFFBQUEsU0FBQTlCLGdCQUFBLE1BQUF5QyxJQUFBLEdBQUF2QixNQUFBLENBQUFyQixHQUFBLFNBQUE0QyxJQUFBLEdBQUFBLElBQUEsQ0FBQUosSUFBQSxJQUFBN0MsT0FBQSxDQUFBc0MsUUFBQSxDQUFBWSxVQUFBLElBQUFELElBQUEsQ0FBQXhFLEtBQUEsRUFBQXVCLE9BQUEsQ0FBQW1ELElBQUEsR0FBQWIsUUFBQSxDQUFBYyxPQUFBLGVBQUFwRCxPQUFBLENBQUFtQixNQUFBLEtBQUFuQixPQUFBLENBQUFtQixNQUFBLFdBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQTBDLFNBQUEsR0FBQS9DLE9BQUEsQ0FBQXNDLFFBQUEsU0FBQTlCLGdCQUFBLElBQUF5QyxJQUFBLElBQUFqRCxPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsT0FBQTJDLFNBQUEsc0NBQUFoRCxPQUFBLENBQUFzQyxRQUFBLFNBQUE5QixnQkFBQSxjQUFBNkMsYUFBQUMsSUFBQSxRQUFBQyxLQUFBLEtBQUFDLE1BQUEsRUFBQUYsSUFBQSxZQUFBQSxJQUFBLEtBQUFDLEtBQUEsQ0FBQUUsUUFBQSxHQUFBSCxJQUFBLFdBQUFBLElBQUEsS0FBQUMsS0FBQSxDQUFBRyxVQUFBLEdBQUFKLElBQUEsS0FBQUMsS0FBQSxDQUFBSSxRQUFBLEdBQUFMLElBQUEsV0FBQU0sVUFBQSxDQUFBQyxJQUFBLENBQUFOLEtBQUEsY0FBQU8sY0FBQVAsS0FBQSxRQUFBN0IsTUFBQSxHQUFBNkIsS0FBQSxDQUFBUSxVQUFBLFFBQUFyQyxNQUFBLENBQUFwQixJQUFBLG9CQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxFQUFBa0QsS0FBQSxDQUFBUSxVQUFBLEdBQUFyQyxNQUFBLGFBQUF6QixRQUFBTixXQUFBLFNBQUFpRSxVQUFBLE1BQUFKLE1BQUEsYUFBQTdELFdBQUEsQ0FBQXVCLE9BQUEsQ0FBQW1DLFlBQUEsY0FBQVcsS0FBQSxpQkFBQWpELE9BQUFrRCxRQUFBLFFBQUFBLFFBQUEsUUFBQUMsY0FBQSxHQUFBRCxRQUFBLENBQUFyRixjQUFBLE9BQUFzRixjQUFBLFNBQUFBLGNBQUEsQ0FBQTNELElBQUEsQ0FBQTBELFFBQUEsNEJBQUFBLFFBQUEsQ0FBQWQsSUFBQSxTQUFBYyxRQUFBLE9BQUFFLEtBQUEsQ0FBQUYsUUFBQSxDQUFBRyxNQUFBLFNBQUFDLENBQUEsT0FBQWxCLElBQUEsWUFBQUEsS0FBQSxhQUFBa0IsQ0FBQSxHQUFBSixRQUFBLENBQUFHLE1BQUEsT0FBQWpHLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQTBELFFBQUEsRUFBQUksQ0FBQSxVQUFBbEIsSUFBQSxDQUFBMUUsS0FBQSxHQUFBd0YsUUFBQSxDQUFBSSxDQUFBLEdBQUFsQixJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxTQUFBQSxJQUFBLENBQUExRSxLQUFBLEdBQUFzRSxTQUFBLEVBQUFJLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFlBQUFBLElBQUEsQ0FBQUEsSUFBQSxHQUFBQSxJQUFBLGVBQUFBLElBQUEsRUFBQWQsVUFBQSxlQUFBQSxXQUFBLGFBQUE1RCxLQUFBLEVBQUFzRSxTQUFBLEVBQUFGLElBQUEsaUJBQUFwQyxpQkFBQSxDQUFBdkMsU0FBQSxHQUFBd0MsMEJBQUEsRUFBQXJDLGNBQUEsQ0FBQTJDLEVBQUEsbUJBQUF2QyxLQUFBLEVBQUFpQywwQkFBQSxFQUFBdEIsWUFBQSxTQUFBZixjQUFBLENBQUFxQywwQkFBQSxtQkFBQWpDLEtBQUEsRUFBQWdDLGlCQUFBLEVBQUFyQixZQUFBLFNBQUFxQixpQkFBQSxDQUFBNkQsV0FBQSxHQUFBcEYsTUFBQSxDQUFBd0IsMEJBQUEsRUFBQTFCLGlCQUFBLHdCQUFBakIsT0FBQSxDQUFBd0csbUJBQUEsYUFBQUMsTUFBQSxRQUFBQyxJQUFBLHdCQUFBRCxNQUFBLElBQUFBLE1BQUEsQ0FBQUUsV0FBQSxXQUFBRCxJQUFBLEtBQUFBLElBQUEsS0FBQWhFLGlCQUFBLDZCQUFBZ0UsSUFBQSxDQUFBSCxXQUFBLElBQUFHLElBQUEsQ0FBQUUsSUFBQSxPQUFBNUcsT0FBQSxDQUFBNkcsSUFBQSxhQUFBSixNQUFBLFdBQUF2RyxNQUFBLENBQUE0RyxjQUFBLEdBQUE1RyxNQUFBLENBQUE0RyxjQUFBLENBQUFMLE1BQUEsRUFBQTlELDBCQUFBLEtBQUE4RCxNQUFBLENBQUFNLFNBQUEsR0FBQXBFLDBCQUFBLEVBQUF4QixNQUFBLENBQUFzRixNQUFBLEVBQUF4RixpQkFBQSx5QkFBQXdGLE1BQUEsQ0FBQXRHLFNBQUEsR0FBQUQsTUFBQSxDQUFBOEIsTUFBQSxDQUFBaUIsRUFBQSxHQUFBd0QsTUFBQSxLQUFBekcsT0FBQSxDQUFBZ0gsS0FBQSxhQUFBMUUsR0FBQSxhQUFBd0IsT0FBQSxFQUFBeEIsR0FBQSxPQUFBWSxxQkFBQSxDQUFBSSxhQUFBLENBQUFuRCxTQUFBLEdBQUFnQixNQUFBLENBQUFtQyxhQUFBLENBQUFuRCxTQUFBLEVBQUFZLG1CQUFBLGlDQUFBZixPQUFBLENBQUFzRCxhQUFBLEdBQUFBLGFBQUEsRUFBQXRELE9BQUEsQ0FBQWlILEtBQUEsYUFBQXhGLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsRUFBQTJCLFdBQUEsZUFBQUEsV0FBQSxLQUFBQSxXQUFBLEdBQUEyRCxPQUFBLE9BQUFDLElBQUEsT0FBQTdELGFBQUEsQ0FBQTlCLElBQUEsQ0FBQUMsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxHQUFBMkIsV0FBQSxVQUFBdkQsT0FBQSxDQUFBd0csbUJBQUEsQ0FBQTlFLE9BQUEsSUFBQXlGLElBQUEsR0FBQUEsSUFBQSxDQUFBL0IsSUFBQSxHQUFBckIsSUFBQSxXQUFBSCxNQUFBLFdBQUFBLE1BQUEsQ0FBQWtCLElBQUEsR0FBQWxCLE1BQUEsQ0FBQWxELEtBQUEsR0FBQXlHLElBQUEsQ0FBQS9CLElBQUEsV0FBQWxDLHFCQUFBLENBQUFELEVBQUEsR0FBQTlCLE1BQUEsQ0FBQThCLEVBQUEsRUFBQWhDLGlCQUFBLGdCQUFBRSxNQUFBLENBQUE4QixFQUFBLEVBQUFwQyxjQUFBLGlDQUFBTSxNQUFBLENBQUE4QixFQUFBLDZEQUFBakQsT0FBQSxDQUFBb0gsSUFBQSxhQUFBQyxHQUFBLFFBQUFDLE1BQUEsR0FBQXBILE1BQUEsQ0FBQW1ILEdBQUEsR0FBQUQsSUFBQSxnQkFBQTVHLEdBQUEsSUFBQThHLE1BQUEsRUFBQUYsSUFBQSxDQUFBdEIsSUFBQSxDQUFBdEYsR0FBQSxVQUFBNEcsSUFBQSxDQUFBRyxPQUFBLGFBQUFuQyxLQUFBLFdBQUFnQyxJQUFBLENBQUFmLE1BQUEsU0FBQTdGLEdBQUEsR0FBQTRHLElBQUEsQ0FBQUksR0FBQSxRQUFBaEgsR0FBQSxJQUFBOEcsTUFBQSxTQUFBbEMsSUFBQSxDQUFBMUUsS0FBQSxHQUFBRixHQUFBLEVBQUE0RSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxXQUFBQSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxRQUFBcEYsT0FBQSxDQUFBZ0QsTUFBQSxHQUFBQSxNQUFBLEVBQUFkLE9BQUEsQ0FBQS9CLFNBQUEsS0FBQXdHLFdBQUEsRUFBQXpFLE9BQUEsRUFBQStELEtBQUEsV0FBQUEsTUFBQXdCLGFBQUEsYUFBQUMsSUFBQSxXQUFBdEMsSUFBQSxXQUFBVixJQUFBLFFBQUFDLEtBQUEsR0FBQUssU0FBQSxPQUFBRixJQUFBLFlBQUFQLFFBQUEsY0FBQW5CLE1BQUEsZ0JBQUFkLEdBQUEsR0FBQTBDLFNBQUEsT0FBQWEsVUFBQSxDQUFBMUMsT0FBQSxDQUFBNEMsYUFBQSxJQUFBMEIsYUFBQSxXQUFBYixJQUFBLGtCQUFBQSxJQUFBLENBQUFlLE1BQUEsT0FBQXZILE1BQUEsQ0FBQW9DLElBQUEsT0FBQW9FLElBQUEsTUFBQVIsS0FBQSxFQUFBUSxJQUFBLENBQUFnQixLQUFBLGNBQUFoQixJQUFBLElBQUE1QixTQUFBLE1BQUE2QyxJQUFBLFdBQUFBLEtBQUEsU0FBQS9DLElBQUEsV0FBQWdELFVBQUEsUUFBQWpDLFVBQUEsSUFBQUcsVUFBQSxrQkFBQThCLFVBQUEsQ0FBQXZGLElBQUEsUUFBQXVGLFVBQUEsQ0FBQXhGLEdBQUEsY0FBQXlGLElBQUEsS0FBQW5ELGlCQUFBLFdBQUFBLGtCQUFBb0QsU0FBQSxhQUFBbEQsSUFBQSxRQUFBa0QsU0FBQSxNQUFBL0YsT0FBQSxrQkFBQWdHLE9BQUFDLEdBQUEsRUFBQUMsTUFBQSxXQUFBeEUsTUFBQSxDQUFBcEIsSUFBQSxZQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxHQUFBMEYsU0FBQSxFQUFBL0YsT0FBQSxDQUFBbUQsSUFBQSxHQUFBOEMsR0FBQSxFQUFBQyxNQUFBLEtBQUFsRyxPQUFBLENBQUFtQixNQUFBLFdBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQTBDLFNBQUEsS0FBQW1ELE1BQUEsYUFBQTdCLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxHQUFBM0MsTUFBQSxHQUFBNkIsS0FBQSxDQUFBUSxVQUFBLGlCQUFBUixLQUFBLENBQUFDLE1BQUEsU0FBQXdDLE1BQUEsYUFBQXpDLEtBQUEsQ0FBQUMsTUFBQSxTQUFBaUMsSUFBQSxRQUFBVSxRQUFBLEdBQUFoSSxNQUFBLENBQUFvQyxJQUFBLENBQUFnRCxLQUFBLGVBQUE2QyxVQUFBLEdBQUFqSSxNQUFBLENBQUFvQyxJQUFBLENBQUFnRCxLQUFBLHFCQUFBNEMsUUFBQSxJQUFBQyxVQUFBLGFBQUFYLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUUsUUFBQSxTQUFBdUMsTUFBQSxDQUFBekMsS0FBQSxDQUFBRSxRQUFBLGdCQUFBZ0MsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFNBQUFzQyxNQUFBLENBQUF6QyxLQUFBLENBQUFHLFVBQUEsY0FBQXlDLFFBQUEsYUFBQVYsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRSxRQUFBLFNBQUF1QyxNQUFBLENBQUF6QyxLQUFBLENBQUFFLFFBQUEscUJBQUEyQyxVQUFBLFlBQUFoRSxLQUFBLHFEQUFBcUQsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFNBQUFzQyxNQUFBLENBQUF6QyxLQUFBLENBQUFHLFVBQUEsWUFBQWQsTUFBQSxXQUFBQSxPQUFBdEMsSUFBQSxFQUFBRCxHQUFBLGFBQUFnRSxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBQyxNQUFBLFNBQUFpQyxJQUFBLElBQUF0SCxNQUFBLENBQUFvQyxJQUFBLENBQUFnRCxLQUFBLHdCQUFBa0MsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFFBQUEyQyxZQUFBLEdBQUE5QyxLQUFBLGFBQUE4QyxZQUFBLGlCQUFBL0YsSUFBQSxtQkFBQUEsSUFBQSxLQUFBK0YsWUFBQSxDQUFBN0MsTUFBQSxJQUFBbkQsR0FBQSxJQUFBQSxHQUFBLElBQUFnRyxZQUFBLENBQUEzQyxVQUFBLEtBQUEyQyxZQUFBLGNBQUEzRSxNQUFBLEdBQUEyRSxZQUFBLEdBQUFBLFlBQUEsQ0FBQXRDLFVBQUEsY0FBQXJDLE1BQUEsQ0FBQXBCLElBQUEsR0FBQUEsSUFBQSxFQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxHQUFBQSxHQUFBLEVBQUFnRyxZQUFBLFNBQUFsRixNQUFBLGdCQUFBZ0MsSUFBQSxHQUFBa0QsWUFBQSxDQUFBM0MsVUFBQSxFQUFBbEQsZ0JBQUEsU0FBQThGLFFBQUEsQ0FBQTVFLE1BQUEsTUFBQTRFLFFBQUEsV0FBQUEsU0FBQTVFLE1BQUEsRUFBQWlDLFFBQUEsb0JBQUFqQyxNQUFBLENBQUFwQixJQUFBLFFBQUFvQixNQUFBLENBQUFyQixHQUFBLHFCQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxtQkFBQW9CLE1BQUEsQ0FBQXBCLElBQUEsUUFBQTZDLElBQUEsR0FBQXpCLE1BQUEsQ0FBQXJCLEdBQUEsZ0JBQUFxQixNQUFBLENBQUFwQixJQUFBLFNBQUF3RixJQUFBLFFBQUF6RixHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLE9BQUFjLE1BQUEsa0JBQUFnQyxJQUFBLHlCQUFBekIsTUFBQSxDQUFBcEIsSUFBQSxJQUFBcUQsUUFBQSxVQUFBUixJQUFBLEdBQUFRLFFBQUEsR0FBQW5ELGdCQUFBLEtBQUErRixNQUFBLFdBQUFBLE9BQUE3QyxVQUFBLGFBQUFXLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxPQUFBZCxLQUFBLENBQUFHLFVBQUEsS0FBQUEsVUFBQSxjQUFBNEMsUUFBQSxDQUFBL0MsS0FBQSxDQUFBUSxVQUFBLEVBQUFSLEtBQUEsQ0FBQUksUUFBQSxHQUFBRyxhQUFBLENBQUFQLEtBQUEsR0FBQS9DLGdCQUFBLHlCQUFBZ0csT0FBQWhELE1BQUEsYUFBQWEsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUMsTUFBQSxLQUFBQSxNQUFBLFFBQUE5QixNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsa0JBQUFyQyxNQUFBLENBQUFwQixJQUFBLFFBQUFtRyxNQUFBLEdBQUEvRSxNQUFBLENBQUFyQixHQUFBLEVBQUF5RCxhQUFBLENBQUFQLEtBQUEsWUFBQWtELE1BQUEsZ0JBQUFyRSxLQUFBLDhCQUFBc0UsYUFBQSxXQUFBQSxjQUFBekMsUUFBQSxFQUFBZixVQUFBLEVBQUFFLE9BQUEsZ0JBQUFkLFFBQUEsS0FBQXpELFFBQUEsRUFBQWtDLE1BQUEsQ0FBQWtELFFBQUEsR0FBQWYsVUFBQSxFQUFBQSxVQUFBLEVBQUFFLE9BQUEsRUFBQUEsT0FBQSxvQkFBQWpDLE1BQUEsVUFBQWQsR0FBQSxHQUFBMEMsU0FBQSxHQUFBdkMsZ0JBQUEsT0FBQXpDLE9BQUE7QUFBQSxTQUFBNEksbUJBQUFDLEdBQUEsRUFBQXBGLE9BQUEsRUFBQUMsTUFBQSxFQUFBb0YsS0FBQSxFQUFBQyxNQUFBLEVBQUF2SSxHQUFBLEVBQUE4QixHQUFBLGNBQUE0QyxJQUFBLEdBQUEyRCxHQUFBLENBQUFySSxHQUFBLEVBQUE4QixHQUFBLE9BQUE1QixLQUFBLEdBQUF3RSxJQUFBLENBQUF4RSxLQUFBLFdBQUF1RCxLQUFBLElBQUFQLE1BQUEsQ0FBQU8sS0FBQSxpQkFBQWlCLElBQUEsQ0FBQUosSUFBQSxJQUFBckIsT0FBQSxDQUFBL0MsS0FBQSxZQUFBd0csT0FBQSxDQUFBekQsT0FBQSxDQUFBL0MsS0FBQSxFQUFBcUQsSUFBQSxDQUFBK0UsS0FBQSxFQUFBQyxNQUFBO0FBQUEsU0FBQUMsa0JBQUEzRyxFQUFBLDZCQUFBVixJQUFBLFNBQUFzSCxJQUFBLEdBQUFDLFNBQUEsYUFBQWhDLE9BQUEsV0FBQXpELE9BQUEsRUFBQUMsTUFBQSxRQUFBbUYsR0FBQSxHQUFBeEcsRUFBQSxDQUFBOEcsS0FBQSxDQUFBeEgsSUFBQSxFQUFBc0gsSUFBQSxZQUFBSCxNQUFBcEksS0FBQSxJQUFBa0ksa0JBQUEsQ0FBQUMsR0FBQSxFQUFBcEYsT0FBQSxFQUFBQyxNQUFBLEVBQUFvRixLQUFBLEVBQUFDLE1BQUEsVUFBQXJJLEtBQUEsY0FBQXFJLE9BQUF4SCxHQUFBLElBQUFxSCxrQkFBQSxDQUFBQyxHQUFBLEVBQUFwRixPQUFBLEVBQUFDLE1BQUEsRUFBQW9GLEtBQUEsRUFBQUMsTUFBQSxXQUFBeEgsR0FBQSxLQUFBdUgsS0FBQSxDQUFBOUQsU0FBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUFvRSxlQUFBQyxHQUFBLEVBQUEvQyxDQUFBLFdBQUFnRCxlQUFBLENBQUFELEdBQUEsS0FBQUUscUJBQUEsQ0FBQUYsR0FBQSxFQUFBL0MsQ0FBQSxLQUFBa0QsMkJBQUEsQ0FBQUgsR0FBQSxFQUFBL0MsQ0FBQSxLQUFBbUQsZ0JBQUE7QUFBQSxTQUFBQSxpQkFBQSxjQUFBeEUsU0FBQTtBQUFBLFNBQUF1RSw0QkFBQUUsQ0FBQSxFQUFBQyxNQUFBLFNBQUFELENBQUEscUJBQUFBLENBQUEsc0JBQUFFLGlCQUFBLENBQUFGLENBQUEsRUFBQUMsTUFBQSxPQUFBRSxDQUFBLEdBQUEzSixNQUFBLENBQUFDLFNBQUEsQ0FBQTJKLFFBQUEsQ0FBQXRILElBQUEsQ0FBQWtILENBQUEsRUFBQTlCLEtBQUEsYUFBQWlDLENBQUEsaUJBQUFILENBQUEsQ0FBQS9DLFdBQUEsRUFBQWtELENBQUEsR0FBQUgsQ0FBQSxDQUFBL0MsV0FBQSxDQUFBQyxJQUFBLE1BQUFpRCxDQUFBLGNBQUFBLENBQUEsbUJBQUFFLEtBQUEsQ0FBQUMsSUFBQSxDQUFBTixDQUFBLE9BQUFHLENBQUEsK0RBQUFJLElBQUEsQ0FBQUosQ0FBQSxVQUFBRCxpQkFBQSxDQUFBRixDQUFBLEVBQUFDLE1BQUE7QUFBQSxTQUFBQyxrQkFBQVAsR0FBQSxFQUFBYSxHQUFBLFFBQUFBLEdBQUEsWUFBQUEsR0FBQSxHQUFBYixHQUFBLENBQUFoRCxNQUFBLEVBQUE2RCxHQUFBLEdBQUFiLEdBQUEsQ0FBQWhELE1BQUEsV0FBQUMsQ0FBQSxNQUFBNkQsSUFBQSxPQUFBSixLQUFBLENBQUFHLEdBQUEsR0FBQTVELENBQUEsR0FBQTRELEdBQUEsRUFBQTVELENBQUEsSUFBQTZELElBQUEsQ0FBQTdELENBQUEsSUFBQStDLEdBQUEsQ0FBQS9DLENBQUEsVUFBQTZELElBQUE7QUFBQSxTQUFBWixzQkFBQUYsR0FBQSxFQUFBL0MsQ0FBQSxRQUFBOEQsRUFBQSxXQUFBZixHQUFBLGdDQUFBekksTUFBQSxJQUFBeUksR0FBQSxDQUFBekksTUFBQSxDQUFBRSxRQUFBLEtBQUF1SSxHQUFBLDRCQUFBZSxFQUFBLFFBQUFDLEVBQUEsRUFBQUMsRUFBQSxFQUFBQyxFQUFBLEVBQUFDLEVBQUEsRUFBQUMsSUFBQSxPQUFBQyxFQUFBLE9BQUFDLEVBQUEsaUJBQUFKLEVBQUEsSUFBQUgsRUFBQSxHQUFBQSxFQUFBLENBQUE1SCxJQUFBLENBQUE2RyxHQUFBLEdBQUFqRSxJQUFBLFFBQUFrQixDQUFBLFFBQUFwRyxNQUFBLENBQUFrSyxFQUFBLE1BQUFBLEVBQUEsVUFBQU0sRUFBQSx1QkFBQUEsRUFBQSxJQUFBTCxFQUFBLEdBQUFFLEVBQUEsQ0FBQS9ILElBQUEsQ0FBQTRILEVBQUEsR0FBQXRGLElBQUEsTUFBQTJGLElBQUEsQ0FBQTNFLElBQUEsQ0FBQXVFLEVBQUEsQ0FBQTNKLEtBQUEsR0FBQStKLElBQUEsQ0FBQXBFLE1BQUEsS0FBQUMsQ0FBQSxHQUFBb0UsRUFBQSxpQkFBQW5KLEdBQUEsSUFBQW9KLEVBQUEsT0FBQUwsRUFBQSxHQUFBL0ksR0FBQSx5QkFBQW1KLEVBQUEsWUFBQU4sRUFBQSxlQUFBSSxFQUFBLEdBQUFKLEVBQUEsY0FBQWxLLE1BQUEsQ0FBQXNLLEVBQUEsTUFBQUEsRUFBQSwyQkFBQUcsRUFBQSxRQUFBTCxFQUFBLGFBQUFHLElBQUE7QUFBQSxTQUFBbkIsZ0JBQUFELEdBQUEsUUFBQVUsS0FBQSxDQUFBYSxPQUFBLENBQUF2QixHQUFBLFVBQUFBLEdBQUE7QUFEOEM7QUFDZTtBQUNRO0FBRXJFLFNBQVNtSSxjQUFjQSxDQUFDQyxLQUFLLEVBQUU7RUFDNUIsSUFBTXBHLFFBQVEsR0FBR04sOENBQU0sQ0FBQyxJQUFJLENBQUM7RUFDN0IsSUFBTTJHLGdCQUFnQixHQUFHM0csOENBQU0sQ0FBQyxJQUFJLENBQUM7RUFDckMsSUFBTTRHLFlBQVksR0FBRzVHLDhDQUFNLENBQUMsSUFBSSxDQUFDO0VBQ2pDLElBQU1PLFVBQVUsR0FBR1AsOENBQU0sQ0FBQyxJQUFJLENBQUM7RUFDL0IsSUFBQVEsU0FBQSxHQUFrRFQsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVUsVUFBQSxHQUFBcEMsY0FBQSxDQUFBbUMsU0FBQTtJQUF2RHFHLGlCQUFpQixHQUFBcEcsVUFBQTtJQUFFcUcsb0JBQW9CLEdBQUFyRyxVQUFBO0VBQzlDLElBQUFHLFVBQUEsR0FBNENiLGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFjLFVBQUEsR0FBQXhDLGNBQUEsQ0FBQXVDLFVBQUE7SUFBcERtRyxjQUFjLEdBQUFsRyxVQUFBO0lBQUVtRyxpQkFBaUIsR0FBQW5HLFVBQUE7RUFDeEMsSUFBQUcsVUFBQSxHQUEwQ2pCLGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFrQixVQUFBLEdBQUE1QyxjQUFBLENBQUEyQyxVQUFBO0lBQWxEaUcsYUFBYSxHQUFBaEcsVUFBQTtJQUFFaUcsZ0JBQWdCLEdBQUFqRyxVQUFBO0VBQ3RDLElBQUFHLFVBQUEsR0FBb0NyQixnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBc0IsVUFBQSxHQUFBaEQsY0FBQSxDQUFBK0MsVUFBQTtJQUE1QytGLFVBQVUsR0FBQTlGLFVBQUE7SUFBRStGLGFBQWEsR0FBQS9GLFVBQUE7RUFDaEMsSUFBQUcsVUFBQSxHQUFrQ3pCLGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUEwQixXQUFBLEdBQUFwRCxjQUFBLENBQUFtRCxVQUFBO0lBQTFDRSxTQUFTLEdBQUFELFdBQUE7SUFBRUUsWUFBWSxHQUFBRixXQUFBO0VBQzlCLElBQUE0RixXQUFBLEdBQWdDdEgsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQXVILFdBQUEsR0FBQWpKLGNBQUEsQ0FBQWdKLFdBQUE7SUFBeEMvRixRQUFRLEdBQUFnRyxXQUFBO0lBQUUvRixXQUFXLEdBQUErRixXQUFBO0VBQzVCLElBQUlDLFlBQVksR0FBRyxDQUFDUixjQUFjLElBQUlFLGFBQWE7O0VBRW5EO0VBQ0EsU0FBU08sZUFBZUEsQ0FBQzdSLEtBQUssRUFBRTtJQUM3QjtNQUFFLENBQUNBLEtBQUssSUFBSSxFQUFFLEdBQUl1UixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBR0EsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO0lBQUE7SUFDbEU7TUFBRSxDQUFDdlIsS0FBSyxJQUFJLENBQUMrUSxLQUFLLENBQUNlLEdBQUcsR0FBSVQsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEdBQUdBLGlCQUFpQixDQUFDLElBQUksQ0FBQztJQUFBO0VBQy9FO0VBRUEsU0FBU1UsWUFBWUEsQ0FBRTVGLElBQUksRUFBRTtJQUMxQjZFLGdCQUFnQixDQUFDNUUsT0FBTyxDQUFDQyxRQUFRLEdBQUdGLElBQUk7SUFDeEN4QixRQUFRLENBQUN5QixPQUFPLENBQUNDLFFBQVEsR0FBR0YsSUFBSTtJQUNoQzhFLFlBQVksQ0FBQzdFLE9BQU8sQ0FBQ0MsUUFBUSxHQUFHRixJQUFJO0VBQ3ZDOztFQUVBO0VBQ0EsU0FBUzZGLGlCQUFpQkEsQ0FBQ2hTLEtBQUssRUFBRTtJQUMvQixJQUFNdU0sT0FBTyxHQUFHLGFBQWE7SUFDN0IsSUFBSSxDQUFDQSxPQUFPLENBQUNoRCxJQUFJLENBQUN2SixLQUFLLENBQUMsRUFBRTtJQUMxQixJQUFNd00sV0FBVyxHQUFHeE0sS0FBSyxDQUFDeU0sT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7SUFDM0MsSUFBSUMsY0FBYyxHQUFHQyxNQUFNLENBQUNILFdBQVcsQ0FBQyxDQUFDSSxjQUFjLEVBQUU7SUFDeERGLGNBQWMsS0FBSyxHQUFHLEdBQUl5RSxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsR0FBR0Esb0JBQW9CLENBQUN6RSxjQUFjLENBQUM7RUFDN0Y7RUFFQSxTQUFTdUYsUUFBUUEsQ0FBQSxFQUFHO0lBQ2pCRCxpQkFBaUIsQ0FBQ2pCLEtBQUssQ0FBQ2UsR0FBRyxDQUFDMUksUUFBUSxFQUFFLENBQUM7SUFDdkN5SSxlQUFlLENBQUNkLEtBQUssQ0FBQ2UsR0FBRyxDQUFDO0VBQzdCO0VBRUEsU0FBU0ksNEJBQTRCQSxDQUFDakYsS0FBSyxFQUFFO0lBQzFDNEUsZUFBZSxDQUFDNUUsS0FBSyxDQUFDMEIsTUFBTSxDQUFDM08sS0FBSyxDQUFDeU0sT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyRHVGLGlCQUFpQixDQUFDL0UsS0FBSyxDQUFDMEIsTUFBTSxDQUFDM08sS0FBSyxDQUFDb0osUUFBUSxFQUFFLENBQUM7RUFDbkQ7RUFFQSxTQUFTd0YscUJBQXFCQSxDQUFDM0IsS0FBSyxFQUFFO0lBQ25DQSxLQUFLLENBQUNJLGNBQWMsRUFBRTtJQUN0QjBFLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFDbkJuSCxVQUFVLENBQUN3QixPQUFPLENBQUMyQixTQUFTLEdBQUcsRUFBRTtJQUNqQzBELGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDdkI7RUFBQyxTQUVjVSxTQUFTQSxDQUFBckYsR0FBQTtJQUFBLE9BQUFzRixVQUFBLENBQUEzSixLQUFBLE9BQUFELFNBQUE7RUFBQTtFQUFBLFNBQUE0SixXQUFBO0lBQUFBLFVBQUEsR0FBQTlKLGlCQUFBLGVBQUFqSixtQkFBQSxHQUFBOEcsSUFBQSxDQUF4QixTQUFBNkcsUUFBeUJDLEtBQUs7TUFBQSxJQUFBQyxRQUFBO01BQUEsT0FBQTdOLG1CQUFBLEdBQUF5QixJQUFBLFVBQUFxTSxTQUFBQyxRQUFBO1FBQUEsa0JBQUFBLFFBQUEsQ0FBQXBHLElBQUEsR0FBQW9HLFFBQUEsQ0FBQTFJLElBQUE7VUFBQTtZQUMzQnVJLEtBQUssQ0FBQ0ksY0FBYyxFQUFFO1lBQ3RCckIsWUFBWSxDQUFDLElBQUksQ0FBQztZQUFDLEtBQ2Y0RixZQUFZO2NBQUF4RSxRQUFBLENBQUExSSxJQUFBO2NBQUE7WUFBQTtZQUFBMEksUUFBQSxDQUFBcEcsSUFBQTtZQUFBb0csUUFBQSxDQUFBMUksSUFBQTtZQUFBLE9BRWE0SSxLQUFLLENBQUMsNEJBQTRCLEVBQUU7Y0FDeEQ1SyxNQUFNLEVBQUUsTUFBTTtjQUNkNkssT0FBTyxFQUFFO2dCQUNOLGNBQWMsRUFBRTtjQUNuQixDQUFDO2NBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7Z0JBQ2xCd0QsaUJBQWlCLEVBQUVBO2NBQ3RCLENBQUM7WUFDSixDQUFDLENBQUM7VUFBQTtZQVJJaEUsUUFBUSxHQUFBRSxRQUFBLENBQUFwSixJQUFBO1lBQUFvSixRQUFBLENBQUExSSxJQUFBO1lBQUEsT0FTRHdJLFFBQVEsQ0FBQ1MsSUFBSSxFQUFFO1VBQUE7WUFBQSxPQUFBUCxRQUFBLENBQUFqSixNQUFBLFdBQUFpSixRQUFBLENBQUFwSixJQUFBO1VBQUE7WUFBQW9KLFFBQUEsQ0FBQXBHLElBQUE7WUFBQW9HLFFBQUEsQ0FBQVEsRUFBQSxHQUFBUixRQUFBO1lBRTVCUyxPQUFPLENBQUN0SyxLQUFLLENBQUE2SixRQUFBLENBQUFRLEVBQUEsQ0FBTztZQUNwQmhDLFdBQVcsQ0FBQyxJQUFJLENBQUM7VUFBQztVQUFBO1lBQUEsT0FBQXdCLFFBQUEsQ0FBQWpHLElBQUE7UUFBQTtNQUFBLEdBQUE2RixPQUFBO0lBQUEsQ0FHMUI7SUFBQSxPQUFBb0YsVUFBQSxDQUFBM0osS0FBQSxPQUFBRCxTQUFBO0VBQUE7RUFFRCxTQUFTNkosb0JBQW9CQSxDQUFDcEYsS0FBSyxFQUFFO0lBQ2xDOEUsWUFBWSxDQUFDLElBQUksQ0FBQztJQUNsQkksU0FBUyxDQUFDbEYsS0FBSyxDQUFDLENBQ1o1SixJQUFJLENBQUMsVUFBQTJLLElBQUksRUFBSTtNQUNYLElBQU1JLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO01BQzlDLElBQUksQ0FBQ04sSUFBSSxDQUFDRSxHQUFHLElBQUksRUFBRSxJQUFJRixJQUFJLENBQUM5SyxNQUFNLEVBQUU7UUFDakN1TyxhQUFhLENBQUN6RCxJQUFJLENBQUM5SyxNQUFNLENBQUM7UUFDMUJrTCxVQUFVLENBQUNHLFdBQVcsbURBQUFDLE1BQUEsQ0FBZ0RSLElBQUksQ0FBQ0csR0FBRyxDQUFFO01BQ25GLENBQUMsTUFBTTtRQUNKQyxVQUFVLENBQUNHLFdBQVcsR0FBRyxnQkFBZ0I7TUFDNUM7TUFDQXZDLFlBQVksQ0FBQyxLQUFLLENBQUM7TUFDbkI7TUFDQXBCLFVBQVUsQ0FBQ3dCLE9BQU8sQ0FBQ3FDLFdBQVcsQ0FBQ0wsVUFBVSxDQUFDO0lBRTdDLENBQUMsQ0FBQyxTQUFNLENBQUMsVUFBQTdLLEtBQUssRUFBSTtNQUNsQnNLLE9BQU8sQ0FBQ3RLLEtBQUssQ0FBQyxRQUFRLEVBQUVBLEtBQUssQ0FBQztNQUM5QnFJLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFFcEIsQ0FBQyxDQUFDO0VBQ0w7RUFFQSxJQUFJRCxRQUFRLEVBQUUsb0JBQVF4QiwyREFBQSxZQUFHLDJCQUF5QixDQUFJO0VBRXRELG9CQUNHQSwyREFBQSwyQkFDR0EsMkRBQUEsYUFBSSxvQkFBa0IsQ0FBSyxlQUMzQkEsMkRBQUEsWUFBRyxzREFBb0QsQ0FBSSxlQUMzREEsMkRBQUEsWUFBRywyQkFBeUIsRUFBQzRHLEtBQUssQ0FBQ2UsR0FBRyxDQUFLLGVBQzNDM0gsMkRBQUE7SUFBTTBFLFFBQVEsRUFBRXdEO0VBQXFCLGdCQUNsQ2xJLDJEQUFBO0lBQU8yRSxPQUFPLEVBQUM7RUFBbUIsR0FBQyw2QkFBMkIsQ0FBUSxlQUN0RTNFLDJEQUFBO0lBQU80RSxHQUFHLEVBQUVwRSxRQUFTO0lBQUM5SSxJQUFJLEVBQUMsTUFBTTtJQUFDbU4sRUFBRSxFQUFDLG1CQUFtQjtJQUFDOUksSUFBSSxFQUFDLG1CQUFtQjtJQUFDK0ksU0FBUyxFQUFDLEdBQUc7SUFBQ0MsUUFBUSxFQUFFZ0QsNEJBQTZCO0lBQUNsUyxLQUFLLEVBQUVrUjtFQUFrQixFQUFFLEVBQ2xLVSxZQUFZLGlCQUFJekgsMkRBQUE7SUFBUTRFLEdBQUcsRUFBRWlDLGdCQUFpQjtJQUFDaEMsRUFBRSxFQUFDLGFBQWE7SUFBQ0csT0FBTyxFQUFFa0Q7RUFBcUIsR0FBQyxTQUFPLENBQVMsQ0FDNUcsRUFDTmpCLGNBQWMsaUJBQUlqSCwyREFBQSxlQUFNLHdDQUFzQyxDQUFPLEVBQ3JFLENBQUNtSCxhQUFhLGlCQUFJbkgsMkRBQUEsZUFBTSxtQ0FBaUMsQ0FBTyxlQUNqRUEsMkRBQUE7SUFBUTRFLEdBQUcsRUFBRWtDLFlBQWE7SUFBQzlCLE9BQU8sRUFBRThDO0VBQVMsR0FBRSxLQUFHLENBQVMsZUFFM0Q5SCwyREFBQTtJQUFLNEUsR0FBRyxFQUFFbkU7RUFBVyxFQUFRLEVBQzVCbUIsU0FBUyxpQkFDUDVCLDJEQUFBLENBQUNHLHdFQUFlO0lBQUM4RSxLQUFLLEVBQUUsU0FBVTtJQUFDQyxJQUFJLEVBQUUsRUFBRztJQUFDLGNBQVcsaUJBQWlCO0lBQUMsZUFBWTtFQUFRLEVBQUUsRUFFbEd1QyxZQUFZLElBQUlKLFVBQVUsaUJBQ3hCckgsMkRBQUEsQ0FBQ0kseUVBQW9CO0lBQUMrRSxJQUFJLEVBQUUsNEJBQTZCO0lBQUNWLHFCQUFxQixFQUFFQTtFQUFzQixFQUFFLENBRXpHO0FBRVo7QUFFQSxpRUFBZWtDLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUhIO0FBRTFCLFNBQVN2RyxvQkFBb0JBLENBQUN3RyxLQUFLLEVBQUU7RUFDbEMsb0JBQ0c1RywwREFBQSwyQkFDR0EsMERBQUE7SUFBRzZFLEVBQUUsRUFBQyxzQkFBc0I7SUFBQzZCLElBQUksRUFBRUUsS0FBSyxDQUFDekI7RUFBSyxHQUFFLFVBQVEsQ0FBSSxlQUM1RG5GLDBEQUFBO0lBQVE2RSxFQUFFLEVBQUMsV0FBVztJQUFDRyxPQUFPLEVBQUU0QixLQUFLLENBQUNuQztFQUFzQixHQUFDLE9BQUssQ0FBUyxDQUN4RTtBQUVaO0FBRUEsaUVBQWVyRSxvQkFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWFQ7QUFFMUIsU0FBU0MsSUFBSUEsQ0FBQ3VHLEtBQUssRUFBRTtFQUNsQixvQkFDRzVHLDBEQUFBO0lBQU0wRSxRQUFRLEVBQUVmO0VBQXFCLGdCQUNsQzNELDBEQUFBO0lBQU8yRSxPQUFPLEVBQUM7RUFBa0IsR0FBQyw2QkFBd0IsQ0FBUSxlQUNsRTNFLDBEQUFBO0lBQU80RSxHQUFHLEVBQUVwRSxRQUFTO0lBQUM5SSxJQUFJLEVBQUMsTUFBTTtJQUFDbU4sRUFBRSxFQUFDLGtCQUFrQjtJQUFDOUksSUFBSSxFQUFDLGtCQUFrQjtJQUFDK0ksU0FBUyxFQUFDLEdBQUc7SUFBQ0MsUUFBUSxFQUFFNkIsS0FBSyxDQUFDckMsMEJBQTJCO0lBQUMxTyxLQUFLLEVBQUUrUSxLQUFLLENBQUNoRztFQUFpQixFQUFFLGVBQzFLWiwwREFBQTtJQUFRNEUsR0FBRyxFQUFFckUsU0FBVTtJQUFDc0UsRUFBRSxFQUFDLGFBQWE7SUFBQ0csT0FBTyxFQUFFNEIsS0FBSyxDQUFDakQ7RUFBcUIsR0FBRSxTQUFPLENBQVMsQ0FDM0Y7QUFFYjtBQUVBLGlFQUFldEQsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaTztBQUUxQixTQUFTZ0YsZUFBZUEsQ0FBQ3VCLEtBQUssRUFBRTtFQUM3QixvQkFDRzVHLDBEQUFBLDZCQUNHQSwwREFBQSwwQkFDR0EsMERBQUEsYUFBSzRHLEtBQUssQ0FBQy9CLEVBQUUsQ0FBTSxlQUNuQjdFLDBEQUFBLGFBQUksR0FBQyxFQUFDNEcsS0FBSyxDQUFDN0MsR0FBRyxDQUFNLGVBQ3JCL0QsMERBQUEsYUFBSSxNQUFDLEVBQUM0RyxLQUFLLENBQUM1QyxHQUFHLENBQU0sZUFDckJoRSwwREFBQSxhQUFLNEcsS0FBSyxDQUFDUixTQUFTLENBQU0sZUFDMUJwRywwREFBQSxhQUFLNEcsS0FBSyxDQUFDSixVQUFVLEdBQUcsVUFBVSxHQUFHLGNBQWMsQ0FBTSxDQUN2RCxDQUNBO0FBRWQ7QUFFQSxpRUFBZW5CLGVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ2hCOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMkI7QUFDM0I7QUFDQTtBQUNxQjs7QUFFckI7QUFDc0U7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOEMsb0ZBQWlDLENBQUNDLCtFQUEyRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJsQzs7QUFFNUQ7QUFDTyxJQUFNRSxHQUFHLEdBQUdELDBFQUFnQixDQUFDRCwrSUFJbkMsQ0FBQzs7QUFFRjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NQVEEscUpBQUFsVCxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxPQUFBLFNBQUFBLE9BQUEsT0FBQUMsRUFBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsTUFBQSxHQUFBSCxFQUFBLENBQUFJLGNBQUEsRUFBQUMsY0FBQSxHQUFBSixNQUFBLENBQUFJLGNBQUEsY0FBQUMsR0FBQSxFQUFBQyxHQUFBLEVBQUFDLElBQUEsSUFBQUYsR0FBQSxDQUFBQyxHQUFBLElBQUFDLElBQUEsQ0FBQUMsS0FBQSxLQUFBQyxPQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsY0FBQSxHQUFBRixPQUFBLENBQUFHLFFBQUEsa0JBQUFDLG1CQUFBLEdBQUFKLE9BQUEsQ0FBQUssYUFBQSx1QkFBQUMsaUJBQUEsR0FBQU4sT0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBWixHQUFBLEVBQUFDLEdBQUEsRUFBQUUsS0FBQSxXQUFBUixNQUFBLENBQUFJLGNBQUEsQ0FBQUMsR0FBQSxFQUFBQyxHQUFBLElBQUFFLEtBQUEsRUFBQUEsS0FBQSxFQUFBVSxVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBZixHQUFBLENBQUFDLEdBQUEsV0FBQVcsTUFBQSxtQkFBQUksR0FBQSxJQUFBSixNQUFBLFlBQUFBLE9BQUFaLEdBQUEsRUFBQUMsR0FBQSxFQUFBRSxLQUFBLFdBQUFILEdBQUEsQ0FBQUMsR0FBQSxJQUFBRSxLQUFBLGdCQUFBYyxLQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLFFBQUFDLGNBQUEsR0FBQUgsT0FBQSxJQUFBQSxPQUFBLENBQUF2QixTQUFBLFlBQUEyQixTQUFBLEdBQUFKLE9BQUEsR0FBQUksU0FBQSxFQUFBQyxTQUFBLEdBQUE3QixNQUFBLENBQUE4QixNQUFBLENBQUFILGNBQUEsQ0FBQTFCLFNBQUEsR0FBQThCLE9BQUEsT0FBQUMsT0FBQSxDQUFBTixXQUFBLGdCQUFBdEIsY0FBQSxDQUFBeUIsU0FBQSxlQUFBckIsS0FBQSxFQUFBeUIsZ0JBQUEsQ0FBQVYsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsTUFBQUYsU0FBQSxhQUFBSyxTQUFBQyxFQUFBLEVBQUE5QixHQUFBLEVBQUErQixHQUFBLG1CQUFBQyxJQUFBLFlBQUFELEdBQUEsRUFBQUQsRUFBQSxDQUFBRyxJQUFBLENBQUFqQyxHQUFBLEVBQUErQixHQUFBLGNBQUFmLEdBQUEsYUFBQWdCLElBQUEsV0FBQUQsR0FBQSxFQUFBZixHQUFBLFFBQUF2QixPQUFBLENBQUF3QixJQUFBLEdBQUFBLElBQUEsTUFBQWlCLGdCQUFBLGdCQUFBWCxVQUFBLGNBQUFZLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLGlCQUFBLE9BQUF6QixNQUFBLENBQUF5QixpQkFBQSxFQUFBL0IsY0FBQSxxQ0FBQWdDLFFBQUEsR0FBQTNDLE1BQUEsQ0FBQTRDLGNBQUEsRUFBQUMsdUJBQUEsR0FBQUYsUUFBQSxJQUFBQSxRQUFBLENBQUFBLFFBQUEsQ0FBQUcsTUFBQSxRQUFBRCx1QkFBQSxJQUFBQSx1QkFBQSxLQUFBOUMsRUFBQSxJQUFBRyxNQUFBLENBQUFvQyxJQUFBLENBQUFPLHVCQUFBLEVBQUFsQyxjQUFBLE1BQUErQixpQkFBQSxHQUFBRyx1QkFBQSxPQUFBRSxFQUFBLEdBQUFOLDBCQUFBLENBQUF4QyxTQUFBLEdBQUEyQixTQUFBLENBQUEzQixTQUFBLEdBQUFELE1BQUEsQ0FBQThCLE1BQUEsQ0FBQVksaUJBQUEsWUFBQU0sc0JBQUEvQyxTQUFBLGdDQUFBZ0QsT0FBQSxXQUFBQyxNQUFBLElBQUFqQyxNQUFBLENBQUFoQixTQUFBLEVBQUFpRCxNQUFBLFlBQUFkLEdBQUEsZ0JBQUFlLE9BQUEsQ0FBQUQsTUFBQSxFQUFBZCxHQUFBLHNCQUFBZ0IsY0FBQXZCLFNBQUEsRUFBQXdCLFdBQUEsYUFBQUMsT0FBQUosTUFBQSxFQUFBZCxHQUFBLEVBQUFtQixPQUFBLEVBQUFDLE1BQUEsUUFBQUMsTUFBQSxHQUFBdkIsUUFBQSxDQUFBTCxTQUFBLENBQUFxQixNQUFBLEdBQUFyQixTQUFBLEVBQUFPLEdBQUEsbUJBQUFxQixNQUFBLENBQUFwQixJQUFBLFFBQUFxQixNQUFBLEdBQUFELE1BQUEsQ0FBQXJCLEdBQUEsRUFBQTVCLEtBQUEsR0FBQWtELE1BQUEsQ0FBQWxELEtBQUEsU0FBQUEsS0FBQSxnQkFBQW1ELE9BQUEsQ0FBQW5ELEtBQUEsS0FBQU4sTUFBQSxDQUFBb0MsSUFBQSxDQUFBOUIsS0FBQSxlQUFBNkMsV0FBQSxDQUFBRSxPQUFBLENBQUEvQyxLQUFBLENBQUFvRCxPQUFBLEVBQUFDLElBQUEsV0FBQXJELEtBQUEsSUFBQThDLE1BQUEsU0FBQTlDLEtBQUEsRUFBQStDLE9BQUEsRUFBQUMsTUFBQSxnQkFBQW5DLEdBQUEsSUFBQWlDLE1BQUEsVUFBQWpDLEdBQUEsRUFBQWtDLE9BQUEsRUFBQUMsTUFBQSxRQUFBSCxXQUFBLENBQUFFLE9BQUEsQ0FBQS9DLEtBQUEsRUFBQXFELElBQUEsV0FBQUMsU0FBQSxJQUFBSixNQUFBLENBQUFsRCxLQUFBLEdBQUFzRCxTQUFBLEVBQUFQLE9BQUEsQ0FBQUcsTUFBQSxnQkFBQUssS0FBQSxXQUFBVCxNQUFBLFVBQUFTLEtBQUEsRUFBQVIsT0FBQSxFQUFBQyxNQUFBLFNBQUFBLE1BQUEsQ0FBQUMsTUFBQSxDQUFBckIsR0FBQSxTQUFBNEIsZUFBQSxFQUFBNUQsY0FBQSxvQkFBQUksS0FBQSxXQUFBQSxNQUFBMEMsTUFBQSxFQUFBZCxHQUFBLGFBQUE2QiwyQkFBQSxlQUFBWixXQUFBLFdBQUFFLE9BQUEsRUFBQUMsTUFBQSxJQUFBRixNQUFBLENBQUFKLE1BQUEsRUFBQWQsR0FBQSxFQUFBbUIsT0FBQSxFQUFBQyxNQUFBLGdCQUFBUSxlQUFBLEdBQUFBLGVBQUEsR0FBQUEsZUFBQSxDQUFBSCxJQUFBLENBQUFJLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBaEMsaUJBQUFWLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLFFBQUFtQyxLQUFBLHNDQUFBaEIsTUFBQSxFQUFBZCxHQUFBLHdCQUFBOEIsS0FBQSxZQUFBQyxLQUFBLHNEQUFBRCxLQUFBLG9CQUFBaEIsTUFBQSxRQUFBZCxHQUFBLFNBQUFnQyxVQUFBLFdBQUFyQyxPQUFBLENBQUFtQixNQUFBLEdBQUFBLE1BQUEsRUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBQSxHQUFBLFVBQUFpQyxRQUFBLEdBQUF0QyxPQUFBLENBQUFzQyxRQUFBLE1BQUFBLFFBQUEsUUFBQUMsY0FBQSxHQUFBQyxtQkFBQSxDQUFBRixRQUFBLEVBQUF0QyxPQUFBLE9BQUF1QyxjQUFBLFFBQUFBLGNBQUEsS0FBQS9CLGdCQUFBLG1CQUFBK0IsY0FBQSxxQkFBQXZDLE9BQUEsQ0FBQW1CLE1BQUEsRUFBQW5CLE9BQUEsQ0FBQXlDLElBQUEsR0FBQXpDLE9BQUEsQ0FBQTBDLEtBQUEsR0FBQTFDLE9BQUEsQ0FBQUssR0FBQSxzQkFBQUwsT0FBQSxDQUFBbUIsTUFBQSw2QkFBQWdCLEtBQUEsUUFBQUEsS0FBQSxnQkFBQW5DLE9BQUEsQ0FBQUssR0FBQSxFQUFBTCxPQUFBLENBQUEyQyxpQkFBQSxDQUFBM0MsT0FBQSxDQUFBSyxHQUFBLHVCQUFBTCxPQUFBLENBQUFtQixNQUFBLElBQUFuQixPQUFBLENBQUE0QyxNQUFBLFdBQUE1QyxPQUFBLENBQUFLLEdBQUEsR0FBQThCLEtBQUEsb0JBQUFULE1BQUEsR0FBQXZCLFFBQUEsQ0FBQVgsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsb0JBQUEwQixNQUFBLENBQUFwQixJQUFBLFFBQUE2QixLQUFBLEdBQUFuQyxPQUFBLENBQUE2QyxJQUFBLG1DQUFBbkIsTUFBQSxDQUFBckIsR0FBQSxLQUFBRyxnQkFBQSxxQkFBQS9CLEtBQUEsRUFBQWlELE1BQUEsQ0FBQXJCLEdBQUEsRUFBQXdDLElBQUEsRUFBQTdDLE9BQUEsQ0FBQTZDLElBQUEsa0JBQUFuQixNQUFBLENBQUFwQixJQUFBLEtBQUE2QixLQUFBLGdCQUFBbkMsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLG1CQUFBbUMsb0JBQUFGLFFBQUEsRUFBQXRDLE9BQUEsUUFBQThDLFVBQUEsR0FBQTlDLE9BQUEsQ0FBQW1CLE1BQUEsRUFBQUEsTUFBQSxHQUFBbUIsUUFBQSxDQUFBekQsUUFBQSxDQUFBaUUsVUFBQSxPQUFBQyxTQUFBLEtBQUE1QixNQUFBLFNBQUFuQixPQUFBLENBQUFzQyxRQUFBLHFCQUFBUSxVQUFBLElBQUFSLFFBQUEsQ0FBQXpELFFBQUEsZUFBQW1CLE9BQUEsQ0FBQW1CLE1BQUEsYUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxFQUFBUCxtQkFBQSxDQUFBRixRQUFBLEVBQUF0QyxPQUFBLGVBQUFBLE9BQUEsQ0FBQW1CLE1BQUEsa0JBQUEyQixVQUFBLEtBQUE5QyxPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsT0FBQTJDLFNBQUEsdUNBQUFGLFVBQUEsaUJBQUF0QyxnQkFBQSxNQUFBa0IsTUFBQSxHQUFBdkIsUUFBQSxDQUFBZ0IsTUFBQSxFQUFBbUIsUUFBQSxDQUFBekQsUUFBQSxFQUFBbUIsT0FBQSxDQUFBSyxHQUFBLG1CQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxTQUFBTixPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXFCLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQUwsT0FBQSxDQUFBc0MsUUFBQSxTQUFBOUIsZ0JBQUEsTUFBQXlDLElBQUEsR0FBQXZCLE1BQUEsQ0FBQXJCLEdBQUEsU0FBQTRDLElBQUEsR0FBQUEsSUFBQSxDQUFBSixJQUFBLElBQUE3QyxPQUFBLENBQUFzQyxRQUFBLENBQUFZLFVBQUEsSUFBQUQsSUFBQSxDQUFBeEUsS0FBQSxFQUFBdUIsT0FBQSxDQUFBbUQsSUFBQSxHQUFBYixRQUFBLENBQUFjLE9BQUEsZUFBQXBELE9BQUEsQ0FBQW1CLE1BQUEsS0FBQW5CLE9BQUEsQ0FBQW1CLE1BQUEsV0FBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxHQUFBL0MsT0FBQSxDQUFBc0MsUUFBQSxTQUFBOUIsZ0JBQUEsSUFBQXlDLElBQUEsSUFBQWpELE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxPQUFBMkMsU0FBQSxzQ0FBQWhELE9BQUEsQ0FBQXNDLFFBQUEsU0FBQTlCLGdCQUFBLGNBQUE2QyxhQUFBQyxJQUFBLFFBQUFDLEtBQUEsS0FBQUMsTUFBQSxFQUFBRixJQUFBLFlBQUFBLElBQUEsS0FBQUMsS0FBQSxDQUFBRSxRQUFBLEdBQUFILElBQUEsV0FBQUEsSUFBQSxLQUFBQyxLQUFBLENBQUFHLFVBQUEsR0FBQUosSUFBQSxLQUFBQyxLQUFBLENBQUFJLFFBQUEsR0FBQUwsSUFBQSxXQUFBTSxVQUFBLENBQUFDLElBQUEsQ0FBQU4sS0FBQSxjQUFBTyxjQUFBUCxLQUFBLFFBQUE3QixNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsUUFBQXJDLE1BQUEsQ0FBQXBCLElBQUEsb0JBQUFvQixNQUFBLENBQUFyQixHQUFBLEVBQUFrRCxLQUFBLENBQUFRLFVBQUEsR0FBQXJDLE1BQUEsYUFBQXpCLFFBQUFOLFdBQUEsU0FBQWlFLFVBQUEsTUFBQUosTUFBQSxhQUFBN0QsV0FBQSxDQUFBdUIsT0FBQSxDQUFBbUMsWUFBQSxjQUFBVyxLQUFBLGlCQUFBakQsT0FBQWtELFFBQUEsUUFBQUEsUUFBQSxRQUFBQyxjQUFBLEdBQUFELFFBQUEsQ0FBQXJGLGNBQUEsT0FBQXNGLGNBQUEsU0FBQUEsY0FBQSxDQUFBM0QsSUFBQSxDQUFBMEQsUUFBQSw0QkFBQUEsUUFBQSxDQUFBZCxJQUFBLFNBQUFjLFFBQUEsT0FBQUUsS0FBQSxDQUFBRixRQUFBLENBQUFHLE1BQUEsU0FBQUMsQ0FBQSxPQUFBbEIsSUFBQSxZQUFBQSxLQUFBLGFBQUFrQixDQUFBLEdBQUFKLFFBQUEsQ0FBQUcsTUFBQSxPQUFBakcsTUFBQSxDQUFBb0MsSUFBQSxDQUFBMEQsUUFBQSxFQUFBSSxDQUFBLFVBQUFsQixJQUFBLENBQUExRSxLQUFBLEdBQUF3RixRQUFBLENBQUFJLENBQUEsR0FBQWxCLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFNBQUFBLElBQUEsQ0FBQTFFLEtBQUEsR0FBQXNFLFNBQUEsRUFBQUksSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsWUFBQUEsSUFBQSxDQUFBQSxJQUFBLEdBQUFBLElBQUEsZUFBQUEsSUFBQSxFQUFBZCxVQUFBLGVBQUFBLFdBQUEsYUFBQTVELEtBQUEsRUFBQXNFLFNBQUEsRUFBQUYsSUFBQSxpQkFBQXBDLGlCQUFBLENBQUF2QyxTQUFBLEdBQUF3QywwQkFBQSxFQUFBckMsY0FBQSxDQUFBMkMsRUFBQSxtQkFBQXZDLEtBQUEsRUFBQWlDLDBCQUFBLEVBQUF0QixZQUFBLFNBQUFmLGNBQUEsQ0FBQXFDLDBCQUFBLG1CQUFBakMsS0FBQSxFQUFBZ0MsaUJBQUEsRUFBQXJCLFlBQUEsU0FBQXFCLGlCQUFBLENBQUE2RCxXQUFBLEdBQUFwRixNQUFBLENBQUF3QiwwQkFBQSxFQUFBMUIsaUJBQUEsd0JBQUFqQixPQUFBLENBQUF3RyxtQkFBQSxhQUFBQyxNQUFBLFFBQUFDLElBQUEsd0JBQUFELE1BQUEsSUFBQUEsTUFBQSxDQUFBRSxXQUFBLFdBQUFELElBQUEsS0FBQUEsSUFBQSxLQUFBaEUsaUJBQUEsNkJBQUFnRSxJQUFBLENBQUFILFdBQUEsSUFBQUcsSUFBQSxDQUFBRSxJQUFBLE9BQUE1RyxPQUFBLENBQUE2RyxJQUFBLGFBQUFKLE1BQUEsV0FBQXZHLE1BQUEsQ0FBQTRHLGNBQUEsR0FBQTVHLE1BQUEsQ0FBQTRHLGNBQUEsQ0FBQUwsTUFBQSxFQUFBOUQsMEJBQUEsS0FBQThELE1BQUEsQ0FBQU0sU0FBQSxHQUFBcEUsMEJBQUEsRUFBQXhCLE1BQUEsQ0FBQXNGLE1BQUEsRUFBQXhGLGlCQUFBLHlCQUFBd0YsTUFBQSxDQUFBdEcsU0FBQSxHQUFBRCxNQUFBLENBQUE4QixNQUFBLENBQUFpQixFQUFBLEdBQUF3RCxNQUFBLEtBQUF6RyxPQUFBLENBQUFnSCxLQUFBLGFBQUExRSxHQUFBLGFBQUF3QixPQUFBLEVBQUF4QixHQUFBLE9BQUFZLHFCQUFBLENBQUFJLGFBQUEsQ0FBQW5ELFNBQUEsR0FBQWdCLE1BQUEsQ0FBQW1DLGFBQUEsQ0FBQW5ELFNBQUEsRUFBQVksbUJBQUEsaUNBQUFmLE9BQUEsQ0FBQXNELGFBQUEsR0FBQUEsYUFBQSxFQUFBdEQsT0FBQSxDQUFBaUgsS0FBQSxhQUFBeEYsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxFQUFBMkIsV0FBQSxlQUFBQSxXQUFBLEtBQUFBLFdBQUEsR0FBQTJELE9BQUEsT0FBQUMsSUFBQSxPQUFBN0QsYUFBQSxDQUFBOUIsSUFBQSxDQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLEdBQUEyQixXQUFBLFVBQUF2RCxPQUFBLENBQUF3RyxtQkFBQSxDQUFBOUUsT0FBQSxJQUFBeUYsSUFBQSxHQUFBQSxJQUFBLENBQUEvQixJQUFBLEdBQUFyQixJQUFBLFdBQUFILE1BQUEsV0FBQUEsTUFBQSxDQUFBa0IsSUFBQSxHQUFBbEIsTUFBQSxDQUFBbEQsS0FBQSxHQUFBeUcsSUFBQSxDQUFBL0IsSUFBQSxXQUFBbEMscUJBQUEsQ0FBQUQsRUFBQSxHQUFBOUIsTUFBQSxDQUFBOEIsRUFBQSxFQUFBaEMsaUJBQUEsZ0JBQUFFLE1BQUEsQ0FBQThCLEVBQUEsRUFBQXBDLGNBQUEsaUNBQUFNLE1BQUEsQ0FBQThCLEVBQUEsNkRBQUFqRCxPQUFBLENBQUFvSCxJQUFBLGFBQUFDLEdBQUEsUUFBQUMsTUFBQSxHQUFBcEgsTUFBQSxDQUFBbUgsR0FBQSxHQUFBRCxJQUFBLGdCQUFBNUcsR0FBQSxJQUFBOEcsTUFBQSxFQUFBRixJQUFBLENBQUF0QixJQUFBLENBQUF0RixHQUFBLFVBQUE0RyxJQUFBLENBQUFHLE9BQUEsYUFBQW5DLEtBQUEsV0FBQWdDLElBQUEsQ0FBQWYsTUFBQSxTQUFBN0YsR0FBQSxHQUFBNEcsSUFBQSxDQUFBSSxHQUFBLFFBQUFoSCxHQUFBLElBQUE4RyxNQUFBLFNBQUFsQyxJQUFBLENBQUExRSxLQUFBLEdBQUFGLEdBQUEsRUFBQTRFLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFdBQUFBLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFFBQUFwRixPQUFBLENBQUFnRCxNQUFBLEdBQUFBLE1BQUEsRUFBQWQsT0FBQSxDQUFBL0IsU0FBQSxLQUFBd0csV0FBQSxFQUFBekUsT0FBQSxFQUFBK0QsS0FBQSxXQUFBQSxNQUFBd0IsYUFBQSxhQUFBQyxJQUFBLFdBQUF0QyxJQUFBLFdBQUFWLElBQUEsUUFBQUMsS0FBQSxHQUFBSyxTQUFBLE9BQUFGLElBQUEsWUFBQVAsUUFBQSxjQUFBbkIsTUFBQSxnQkFBQWQsR0FBQSxHQUFBMEMsU0FBQSxPQUFBYSxVQUFBLENBQUExQyxPQUFBLENBQUE0QyxhQUFBLElBQUEwQixhQUFBLFdBQUFiLElBQUEsa0JBQUFBLElBQUEsQ0FBQWUsTUFBQSxPQUFBdkgsTUFBQSxDQUFBb0MsSUFBQSxPQUFBb0UsSUFBQSxNQUFBUixLQUFBLEVBQUFRLElBQUEsQ0FBQWdCLEtBQUEsY0FBQWhCLElBQUEsSUFBQTVCLFNBQUEsTUFBQTZDLElBQUEsV0FBQUEsS0FBQSxTQUFBL0MsSUFBQSxXQUFBZ0QsVUFBQSxRQUFBakMsVUFBQSxJQUFBRyxVQUFBLGtCQUFBOEIsVUFBQSxDQUFBdkYsSUFBQSxRQUFBdUYsVUFBQSxDQUFBeEYsR0FBQSxjQUFBeUYsSUFBQSxLQUFBbkQsaUJBQUEsV0FBQUEsa0JBQUFvRCxTQUFBLGFBQUFsRCxJQUFBLFFBQUFrRCxTQUFBLE1BQUEvRixPQUFBLGtCQUFBZ0csT0FBQUMsR0FBQSxFQUFBQyxNQUFBLFdBQUF4RSxNQUFBLENBQUFwQixJQUFBLFlBQUFvQixNQUFBLENBQUFyQixHQUFBLEdBQUEwRixTQUFBLEVBQUEvRixPQUFBLENBQUFtRCxJQUFBLEdBQUE4QyxHQUFBLEVBQUFDLE1BQUEsS0FBQWxHLE9BQUEsQ0FBQW1CLE1BQUEsV0FBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxLQUFBbUQsTUFBQSxhQUFBN0IsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLEdBQUEzQyxNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsaUJBQUFSLEtBQUEsQ0FBQUMsTUFBQSxTQUFBd0MsTUFBQSxhQUFBekMsS0FBQSxDQUFBQyxNQUFBLFNBQUFpQyxJQUFBLFFBQUFVLFFBQUEsR0FBQWhJLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQWdELEtBQUEsZUFBQTZDLFVBQUEsR0FBQWpJLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQWdELEtBQUEscUJBQUE0QyxRQUFBLElBQUFDLFVBQUEsYUFBQVgsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRSxRQUFBLFNBQUF1QyxNQUFBLENBQUF6QyxLQUFBLENBQUFFLFFBQUEsZ0JBQUFnQyxJQUFBLEdBQUFsQyxLQUFBLENBQUFHLFVBQUEsU0FBQXNDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUcsVUFBQSxjQUFBeUMsUUFBQSxhQUFBVixJQUFBLEdBQUFsQyxLQUFBLENBQUFFLFFBQUEsU0FBQXVDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUUsUUFBQSxxQkFBQTJDLFVBQUEsWUFBQWhFLEtBQUEscURBQUFxRCxJQUFBLEdBQUFsQyxLQUFBLENBQUFHLFVBQUEsU0FBQXNDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUcsVUFBQSxZQUFBZCxNQUFBLFdBQUFBLE9BQUF0QyxJQUFBLEVBQUFELEdBQUEsYUFBQWdFLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxPQUFBZCxLQUFBLENBQUFDLE1BQUEsU0FBQWlDLElBQUEsSUFBQXRILE1BQUEsQ0FBQW9DLElBQUEsQ0FBQWdELEtBQUEsd0JBQUFrQyxJQUFBLEdBQUFsQyxLQUFBLENBQUFHLFVBQUEsUUFBQTJDLFlBQUEsR0FBQTlDLEtBQUEsYUFBQThDLFlBQUEsaUJBQUEvRixJQUFBLG1CQUFBQSxJQUFBLEtBQUErRixZQUFBLENBQUE3QyxNQUFBLElBQUFuRCxHQUFBLElBQUFBLEdBQUEsSUFBQWdHLFlBQUEsQ0FBQTNDLFVBQUEsS0FBQTJDLFlBQUEsY0FBQTNFLE1BQUEsR0FBQTJFLFlBQUEsR0FBQUEsWUFBQSxDQUFBdEMsVUFBQSxjQUFBckMsTUFBQSxDQUFBcEIsSUFBQSxHQUFBQSxJQUFBLEVBQUFvQixNQUFBLENBQUFyQixHQUFBLEdBQUFBLEdBQUEsRUFBQWdHLFlBQUEsU0FBQWxGLE1BQUEsZ0JBQUFnQyxJQUFBLEdBQUFrRCxZQUFBLENBQUEzQyxVQUFBLEVBQUFsRCxnQkFBQSxTQUFBOEYsUUFBQSxDQUFBNUUsTUFBQSxNQUFBNEUsUUFBQSxXQUFBQSxTQUFBNUUsTUFBQSxFQUFBaUMsUUFBQSxvQkFBQWpDLE1BQUEsQ0FBQXBCLElBQUEsUUFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEscUJBQUFxQixNQUFBLENBQUFwQixJQUFBLG1CQUFBb0IsTUFBQSxDQUFBcEIsSUFBQSxRQUFBNkMsSUFBQSxHQUFBekIsTUFBQSxDQUFBckIsR0FBQSxnQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsU0FBQXdGLElBQUEsUUFBQXpGLEdBQUEsR0FBQXFCLE1BQUEsQ0FBQXJCLEdBQUEsT0FBQWMsTUFBQSxrQkFBQWdDLElBQUEseUJBQUF6QixNQUFBLENBQUFwQixJQUFBLElBQUFxRCxRQUFBLFVBQUFSLElBQUEsR0FBQVEsUUFBQSxHQUFBbkQsZ0JBQUEsS0FBQStGLE1BQUEsV0FBQUEsT0FBQTdDLFVBQUEsYUFBQVcsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUcsVUFBQSxLQUFBQSxVQUFBLGNBQUE0QyxRQUFBLENBQUEvQyxLQUFBLENBQUFRLFVBQUEsRUFBQVIsS0FBQSxDQUFBSSxRQUFBLEdBQUFHLGFBQUEsQ0FBQVAsS0FBQSxHQUFBL0MsZ0JBQUEseUJBQUFnRyxPQUFBaEQsTUFBQSxhQUFBYSxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBQyxNQUFBLEtBQUFBLE1BQUEsUUFBQTlCLE1BQUEsR0FBQTZCLEtBQUEsQ0FBQVEsVUFBQSxrQkFBQXJDLE1BQUEsQ0FBQXBCLElBQUEsUUFBQW1HLE1BQUEsR0FBQS9FLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQXlELGFBQUEsQ0FBQVAsS0FBQSxZQUFBa0QsTUFBQSxnQkFBQXJFLEtBQUEsOEJBQUFzRSxhQUFBLFdBQUFBLGNBQUF6QyxRQUFBLEVBQUFmLFVBQUEsRUFBQUUsT0FBQSxnQkFBQWQsUUFBQSxLQUFBekQsUUFBQSxFQUFBa0MsTUFBQSxDQUFBa0QsUUFBQSxHQUFBZixVQUFBLEVBQUFBLFVBQUEsRUFBQUUsT0FBQSxFQUFBQSxPQUFBLG9CQUFBakMsTUFBQSxVQUFBZCxHQUFBLEdBQUEwQyxTQUFBLEdBQUF2QyxnQkFBQSxPQUFBekMsT0FBQTtBQUFBLFNBQUE0SSxtQkFBQUMsR0FBQSxFQUFBcEYsT0FBQSxFQUFBQyxNQUFBLEVBQUFvRixLQUFBLEVBQUFDLE1BQUEsRUFBQXZJLEdBQUEsRUFBQThCLEdBQUEsY0FBQTRDLElBQUEsR0FBQTJELEdBQUEsQ0FBQXJJLEdBQUEsRUFBQThCLEdBQUEsT0FBQTVCLEtBQUEsR0FBQXdFLElBQUEsQ0FBQXhFLEtBQUEsV0FBQXVELEtBQUEsSUFBQVAsTUFBQSxDQUFBTyxLQUFBLGlCQUFBaUIsSUFBQSxDQUFBSixJQUFBLElBQUFyQixPQUFBLENBQUEvQyxLQUFBLFlBQUF3RyxPQUFBLENBQUF6RCxPQUFBLENBQUEvQyxLQUFBLEVBQUFxRCxJQUFBLENBQUErRSxLQUFBLEVBQUFDLE1BQUE7QUFBQSxTQUFBQyxrQkFBQTNHLEVBQUEsNkJBQUFWLElBQUEsU0FBQXNILElBQUEsR0FBQUMsU0FBQSxhQUFBaEMsT0FBQSxXQUFBekQsT0FBQSxFQUFBQyxNQUFBLFFBQUFtRixHQUFBLEdBQUF4RyxFQUFBLENBQUE4RyxLQUFBLENBQUF4SCxJQUFBLEVBQUFzSCxJQUFBLFlBQUFILE1BQUFwSSxLQUFBLElBQUFrSSxrQkFBQSxDQUFBQyxHQUFBLEVBQUFwRixPQUFBLEVBQUFDLE1BQUEsRUFBQW9GLEtBQUEsRUFBQUMsTUFBQSxVQUFBckksS0FBQSxjQUFBcUksT0FBQXhILEdBQUEsSUFBQXFILGtCQUFBLENBQUFDLEdBQUEsRUFBQXBGLE9BQUEsRUFBQUMsTUFBQSxFQUFBb0YsS0FBQSxFQUFBQyxNQUFBLFdBQUF4SCxHQUFBLEtBQUF1SCxLQUFBLENBQUE5RCxTQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFBb0UsZUFBQUMsR0FBQSxFQUFBL0MsQ0FBQSxXQUFBZ0QsZUFBQSxDQUFBRCxHQUFBLEtBQUFFLHFCQUFBLENBQUFGLEdBQUEsRUFBQS9DLENBQUEsS0FBQWtELDJCQUFBLENBQUFILEdBQUEsRUFBQS9DLENBQUEsS0FBQW1ELGdCQUFBO0FBQUEsU0FBQUEsaUJBQUEsY0FBQXhFLFNBQUE7QUFBQSxTQUFBdUUsNEJBQUFFLENBQUEsRUFBQUMsTUFBQSxTQUFBRCxDQUFBLHFCQUFBQSxDQUFBLHNCQUFBRSxpQkFBQSxDQUFBRixDQUFBLEVBQUFDLE1BQUEsT0FBQUUsQ0FBQSxHQUFBM0osTUFBQSxDQUFBQyxTQUFBLENBQUEySixRQUFBLENBQUF0SCxJQUFBLENBQUFrSCxDQUFBLEVBQUE5QixLQUFBLGFBQUFpQyxDQUFBLGlCQUFBSCxDQUFBLENBQUEvQyxXQUFBLEVBQUFrRCxDQUFBLEdBQUFILENBQUEsQ0FBQS9DLFdBQUEsQ0FBQUMsSUFBQSxNQUFBaUQsQ0FBQSxjQUFBQSxDQUFBLG1CQUFBRSxLQUFBLENBQUFDLElBQUEsQ0FBQU4sQ0FBQSxPQUFBRyxDQUFBLCtEQUFBSSxJQUFBLENBQUFKLENBQUEsVUFBQUQsaUJBQUEsQ0FBQUYsQ0FBQSxFQUFBQyxNQUFBO0FBQUEsU0FBQUMsa0JBQUFQLEdBQUEsRUFBQWEsR0FBQSxRQUFBQSxHQUFBLFlBQUFBLEdBQUEsR0FBQWIsR0FBQSxDQUFBaEQsTUFBQSxFQUFBNkQsR0FBQSxHQUFBYixHQUFBLENBQUFoRCxNQUFBLFdBQUFDLENBQUEsTUFBQTZELElBQUEsT0FBQUosS0FBQSxDQUFBRyxHQUFBLEdBQUE1RCxDQUFBLEdBQUE0RCxHQUFBLEVBQUE1RCxDQUFBLElBQUE2RCxJQUFBLENBQUE3RCxDQUFBLElBQUErQyxHQUFBLENBQUEvQyxDQUFBLFVBQUE2RCxJQUFBO0FBQUEsU0FBQVosc0JBQUFGLEdBQUEsRUFBQS9DLENBQUEsUUFBQThELEVBQUEsV0FBQWYsR0FBQSxnQ0FBQXpJLE1BQUEsSUFBQXlJLEdBQUEsQ0FBQXpJLE1BQUEsQ0FBQUUsUUFBQSxLQUFBdUksR0FBQSw0QkFBQWUsRUFBQSxRQUFBQyxFQUFBLEVBQUFDLEVBQUEsRUFBQUMsRUFBQSxFQUFBQyxFQUFBLEVBQUFDLElBQUEsT0FBQUMsRUFBQSxPQUFBQyxFQUFBLGlCQUFBSixFQUFBLElBQUFILEVBQUEsR0FBQUEsRUFBQSxDQUFBNUgsSUFBQSxDQUFBNkcsR0FBQSxHQUFBakUsSUFBQSxRQUFBa0IsQ0FBQSxRQUFBcEcsTUFBQSxDQUFBa0ssRUFBQSxNQUFBQSxFQUFBLFVBQUFNLEVBQUEsdUJBQUFBLEVBQUEsSUFBQUwsRUFBQSxHQUFBRSxFQUFBLENBQUEvSCxJQUFBLENBQUE0SCxFQUFBLEdBQUF0RixJQUFBLE1BQUEyRixJQUFBLENBQUEzRSxJQUFBLENBQUF1RSxFQUFBLENBQUEzSixLQUFBLEdBQUErSixJQUFBLENBQUFwRSxNQUFBLEtBQUFDLENBQUEsR0FBQW9FLEVBQUEsaUJBQUFuSixHQUFBLElBQUFvSixFQUFBLE9BQUFMLEVBQUEsR0FBQS9JLEdBQUEseUJBQUFtSixFQUFBLFlBQUFOLEVBQUEsZUFBQUksRUFBQSxHQUFBSixFQUFBLGNBQUFsSyxNQUFBLENBQUFzSyxFQUFBLE1BQUFBLEVBQUEsMkJBQUFHLEVBQUEsUUFBQUwsRUFBQSxhQUFBRyxJQUFBO0FBQUEsU0FBQW5CLGdCQUFBRCxHQUFBLFFBQUFVLEtBQUEsQ0FBQWEsT0FBQSxDQUFBdkIsR0FBQSxVQUFBQSxHQUFBO0FBRDhDO0FBQ2U7QUFDUTtBQUNoQztBQUVyQyxJQUFNOEIsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVU7RUFDMUI7RUFDQSxJQUFNQyxTQUFTLEdBQUdMLDhDQUFNLENBQUMsSUFBSSxDQUFDO0VBQzlCLElBQU1NLFFBQVEsR0FBR04sOENBQU0sQ0FBQyxJQUFJLENBQUM7RUFDN0IsSUFBTU8sVUFBVSxHQUFHUCw4Q0FBTSxDQUFDLElBQUksQ0FBQztFQUMvQixJQUFBUSxTQUFBLEdBQWdEVCxnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBVSxVQUFBLEdBQUFwQyxjQUFBLENBQUFtQyxTQUFBO0lBQXJERSxnQkFBZ0IsR0FBQUQsVUFBQTtJQUFFRSxtQkFBbUIsR0FBQUYsVUFBQTtFQUM1QyxJQUFBRyxVQUFBLEdBQW9DYixnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBYyxVQUFBLEdBQUF4QyxjQUFBLENBQUF1QyxVQUFBO0lBQTVDRSxVQUFVLEdBQUFELFVBQUE7SUFBRUUsYUFBYSxHQUFBRixVQUFBO0VBQ2hDLElBQUFHLFVBQUEsR0FBa0RqQixnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBa0IsVUFBQSxHQUFBNUMsY0FBQSxDQUFBMkMsVUFBQTtJQUExREUsaUJBQWlCLEdBQUFELFVBQUE7SUFBRUUsb0JBQW9CLEdBQUFGLFVBQUE7RUFDOUMsSUFBQUcsVUFBQSxHQUFnQ3JCLGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFzQixVQUFBLEdBQUFoRCxjQUFBLENBQUErQyxVQUFBO0lBQXhDRSxRQUFRLEdBQUFELFVBQUE7SUFBRUUsV0FBVyxHQUFBRixVQUFBO0VBQzVCLElBQUFHLFVBQUEsR0FBa0N6QixnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBMEIsV0FBQSxHQUFBcEQsY0FBQSxDQUFBbUQsVUFBQTtJQUExQ0UsU0FBUyxHQUFBRCxXQUFBO0lBQUVFLFlBQVksR0FBQUYsV0FBQTs7RUFFOUI7RUFDQSxTQUFTRyxlQUFlQSxDQUFDak0sS0FBSyxFQUFFO0lBQzdCO01BQUVBLEtBQUssSUFBSSxFQUFFLEdBQUlvTCxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUdBLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUFDO0VBQy9EO0VBRUEsU0FBU2MsYUFBYUEsQ0FBRUMsSUFBSSxFQUFFO0lBQzNCekIsU0FBUyxDQUFDMEIsT0FBTyxDQUFDQyxRQUFRLEdBQUdGLElBQUk7SUFDakN4QixRQUFRLENBQUN5QixPQUFPLENBQUNDLFFBQVEsR0FBR0YsSUFBSTtFQUNuQzs7RUFFQTtFQUNBLFNBQVNHLGlCQUFpQkEsQ0FBQ3RNLEtBQUssRUFBRTtJQUMvQixJQUFNdU0sT0FBTyxHQUFHLFlBQVk7SUFDNUIsSUFBSSxDQUFDQSxPQUFPLENBQUNoRCxJQUFJLENBQUN2SixLQUFLLENBQUMsRUFBRTtJQUUxQixJQUFJd00sV0FBVyxHQUFHeE0sS0FBSyxDQUFDeU0sT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7SUFDekMsSUFBSUMsY0FBYyxHQUFHQyxNQUFNLENBQUNILFdBQVcsQ0FBQyxDQUFDSSxjQUFjLEVBQUU7SUFFeERGLGNBQWMsS0FBSyxHQUFHLEdBQUkxQixtQkFBbUIsQ0FBQyxFQUFFLENBQUMsR0FBR0EsbUJBQW1CLENBQUMwQixjQUFjLENBQUM7RUFDM0Y7RUFBQyxTQUVjRyxxQkFBcUJBLENBQUFDLEdBQUE7SUFBQSxPQUFBQyxzQkFBQSxDQUFBdEUsS0FBQSxPQUFBRCxTQUFBO0VBQUE7RUFBQSxTQUFBdUUsdUJBQUE7SUFBQUEsc0JBQUEsR0FBQXpFLGlCQUFBLGVBQUFqSixtQkFBQSxHQUFBOEcsSUFBQSxDQUFwQyxTQUFBNkcsUUFBcUNDLEtBQUs7TUFBQSxJQUFBQyxRQUFBO01BQUEsT0FBQTdOLG1CQUFBLEdBQUF5QixJQUFBLFVBQUFxTSxTQUFBQyxRQUFBO1FBQUEsa0JBQUFBLFFBQUEsQ0FBQXBHLElBQUEsR0FBQW9HLFFBQUEsQ0FBQTFJLElBQUE7VUFBQTtZQUN2Q3VJLEtBQUssQ0FBQ0ksY0FBYyxFQUFFO1lBQ3RCckIsWUFBWSxDQUFDLElBQUksQ0FBQztZQUFDLEtBQ2ZiLFVBQVU7Y0FBQWlDLFFBQUEsQ0FBQTFJLElBQUE7Y0FBQTtZQUFBO1lBQUEwSSxRQUFBLENBQUFwRyxJQUFBO1lBQUFvRyxRQUFBLENBQUExSSxJQUFBO1lBQUEsT0FFZTRJLEtBQUssQ0FBQyx5QkFBeUIsRUFBRTtjQUNyRDVLLE1BQU0sRUFBRSxNQUFNO2NBQ2Q2SyxPQUFPLEVBQUU7Z0JBQ04sY0FBYyxFQUFFO2NBQ25CLENBQUM7Y0FDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztnQkFDbEIzQyxnQkFBZ0IsRUFBRUE7Y0FDckIsQ0FBQztZQUNKLENBQUMsQ0FBQztVQUFBO1lBUkltQyxRQUFRLEdBQUFFLFFBQUEsQ0FBQXBKLElBQUE7WUFBQW9KLFFBQUEsQ0FBQTFJLElBQUE7WUFBQSxPQVNEd0ksUUFBUSxDQUFDUyxJQUFJLEVBQUU7VUFBQTtZQUFBLE9BQUFQLFFBQUEsQ0FBQWpKLE1BQUEsV0FBQWlKLFFBQUEsQ0FBQXBKLElBQUE7VUFBQTtZQUFBb0osUUFBQSxDQUFBcEcsSUFBQTtZQUFBb0csUUFBQSxDQUFBUSxFQUFBLEdBQUFSLFFBQUE7WUFFNUJTLE9BQU8sQ0FBQ3RLLEtBQUssQ0FBQTZKLFFBQUEsQ0FBQVEsRUFBQSxDQUFPO1lBQ3BCaEMsV0FBVyxDQUFDLElBQUksQ0FBQztVQUFDO1VBQUE7WUFBQSxPQUFBd0IsUUFBQSxDQUFBakcsSUFBQTtRQUFBO01BQUEsR0FBQTZGLE9BQUE7SUFBQSxDQUcxQjtJQUFBLE9BQUFELHNCQUFBLENBQUF0RSxLQUFBLE9BQUFELFNBQUE7RUFBQTtFQUVELFNBQVNzRixvQkFBb0JBLENBQUNiLEtBQUssRUFBRTtJQUNsQztJQUNBZixhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ25CZSxLQUFLLENBQUNJLGNBQWMsRUFBRTtJQUN0QnpDLFVBQVUsQ0FBQ3dCLE9BQU8sQ0FBQzJCLFNBQVMsR0FBRyxFQUFFO0lBRWpDLElBQUk1QyxVQUFVLEVBQUU7TUFDYjBCLHFCQUFxQixDQUFDSSxLQUFLLENBQUMsQ0FDeEI1SixJQUFJLENBQUMsVUFBQTJLLElBQUksRUFBSTtRQUNYSCxPQUFPLENBQUNJLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRUQsSUFBSSxDQUFDRSxHQUFHLEVBQUVGLElBQUksQ0FBQ0csR0FBRyxDQUFDO1FBQ2pEbkMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNuQixJQUFNb0MsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDOUNGLFVBQVUsQ0FBQ0csV0FBVyw2Q0FBQUMsTUFBQSxDQUE2Q1IsSUFBSSxDQUFDRSxHQUFHLENBQUU7UUFDN0UxQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7UUFDMUJaLFVBQVUsQ0FBQ3dCLE9BQU8sQ0FBQ3FDLFdBQVcsQ0FBQ0wsVUFBVSxDQUFDO01BRTdDLENBQUMsQ0FBQyxTQUFNLENBQUMsVUFBQTdLLEtBQUssRUFBSTtRQUNsQnNLLE9BQU8sQ0FBQ3RLLEtBQUssQ0FBQyxRQUFRLEVBQUVBLEtBQUssQ0FBQztRQUM5QnFJLFdBQVcsQ0FBQyxJQUFJLENBQUM7TUFDcEIsQ0FBQyxDQUFDO0lBQ0w7RUFDSDs7RUFFQTtFQUNBLFNBQVM4QywwQkFBMEJBLENBQUN6QixLQUFLLEVBQUU7SUFDeENoQixlQUFlLENBQUNnQixLQUFLLENBQUMwQixNQUFNLENBQUMzTyxLQUFLLENBQUN5TSxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JESCxpQkFBaUIsQ0FBQ1csS0FBSyxDQUFDMEIsTUFBTSxDQUFDM08sS0FBSyxFQUFFLEtBQUssQ0FBQztFQUMvQztFQUVBLFNBQVM0TyxxQkFBcUJBLENBQUMzQixLQUFLLEVBQUU7SUFDbkNBLEtBQUssQ0FBQ0ksY0FBYyxFQUFFO0lBQ3RCbkIsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNwQnRCLFVBQVUsQ0FBQ3dCLE9BQU8sQ0FBQzJCLFNBQVMsR0FBRyxFQUFFO0lBQ2pDdkMsb0JBQW9CLENBQUMsS0FBSyxDQUFDO0VBQzlCO0VBRUEsSUFBSUcsUUFBUSxFQUFFLG9CQUFReEIsMkRBQUEsWUFBRywyQkFBeUIsQ0FBSTtFQUV0RCxvQkFDR0EsMkRBQUEsMkJBQ0dBLDJEQUFBLDJCQUNHQSwyREFBQSxhQUFJLDBCQUF3QixDQUFLLGVBQ2pDQSwyREFBQSxZQUFHLGdFQUE4RCxDQUFJLGVBQ3JFQSwyREFBQSwyQkFDR0EsMkRBQUE7SUFBTTBFLFFBQVEsRUFBRWY7RUFBcUIsZ0JBQ2xDM0QsMkRBQUE7SUFBTzJFLE9BQU8sRUFBQztFQUFrQixHQUFDLDZCQUF3QixDQUFRLGVBQ2xFM0UsMkRBQUE7SUFBTzRFLEdBQUcsRUFBRXBFLFFBQVM7SUFBQzlJLElBQUksRUFBQyxNQUFNO0lBQUNtTixFQUFFLEVBQUMsa0JBQWtCO0lBQUM5SSxJQUFJLEVBQUMsa0JBQWtCO0lBQUMrSSxTQUFTLEVBQUMsR0FBRztJQUFDQyxRQUFRLEVBQUVSLDBCQUEyQjtJQUFDMU8sS0FBSyxFQUFFK0s7RUFBaUIsRUFBRSxFQUM3SkksVUFBVSxpQkFBSWhCLDJEQUFBO0lBQVE0RSxHQUFHLEVBQUVyRSxTQUFVO0lBQUNzRSxFQUFFLEVBQUMsYUFBYTtJQUFDRyxPQUFPLEVBQUVyQjtFQUFxQixHQUFFLFNBQU8sQ0FBUyxDQUNwRyxFQUNOL0MsZ0JBQWdCLEdBQUcsRUFBRSxpQkFBSVosMkRBQUEsZUFBTSwyQ0FBc0MsQ0FBTyxDQUMxRSxDQUNILGVBQ05BLDJEQUFBO0lBQUs0RSxHQUFHLEVBQUVuRTtFQUFXLEdBQ3BCbUIsU0FBUyxpQkFDUDVCLDJEQUFBLENBQUNHLHdFQUFlO0lBQUM4RSxLQUFLLEVBQUUsU0FBVTtJQUFDQyxJQUFJLEVBQUUsRUFBRztJQUFDLGNBQVcsaUJBQWlCO0lBQUMsZUFBWTtFQUFRLEVBQUUsQ0FFN0YsRUFDTGxFLFVBQVUsSUFBSUksaUJBQWlCLGlCQUM3QnBCLDJEQUFBLENBQUNJLHlFQUFvQjtJQUFDK0UsSUFBSSxFQUFFLDBCQUEyQjtJQUFDVixxQkFBcUIsRUFBRUE7RUFBc0IsRUFBRyxDQUV4RztBQUVaLENBQUM7QUFFRCxpRUFBZW5FLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNIcUI7QUFDVTtBQUUzRCxTQUFTZ0Ysa0JBQWtCQSxDQUFBQyxJQUFBLEVBQTRCO0VBQUEsSUFBekJDLFFBQVEsR0FBQUQsSUFBQSxDQUFSQyxRQUFRO0lBQUVDLFdBQVcsR0FBQUYsSUFBQSxDQUFYRSxXQUFXO0VBQ2hELElBQUEvRSxTQUFBLEdBQWdDVCxnREFBUSxDQUFDLGFBQWEsQ0FBQztJQUFBVSxVQUFBLEdBQUFwQyxjQUFBLENBQUFtQyxTQUFBO0lBQWhEZ0YsUUFBUSxHQUFBL0UsVUFBQTtJQUFFZ0YsV0FBVyxHQUFBaEYsVUFBQTtFQUU1QixTQUFTaUYsa0JBQWtCQSxDQUFDOUMsS0FBSyxFQUFFO0lBQ2hDNkMsV0FBVyxDQUFDN0MsS0FBSyxDQUFDMEIsTUFBTSxDQUFDM08sS0FBSyxDQUFDO0VBQ2xDO0VBRUEsSUFBTWdRLGVBQWUsR0FBR1QsK0NBQU8sQ0FBQyxZQUFNO0lBQ25DLElBQU1VLFlBQVksR0FBR0osUUFBUSxLQUFLLGFBQWEsR0FBR0QsV0FBVyxHQUFHRCxRQUFRO0lBRXhFLE9BQU9NLFlBQVksQ0FBQ0MsR0FBRyxDQUFDLFVBQUNDLFdBQVcsRUFBRUMsS0FBSztNQUFBLG9CQUN4Q2pHLDJEQUFBLENBQUNxRixvRUFBZTtRQUNiMVAsR0FBRyxFQUFFc1EsS0FBTTtRQUNYcEIsRUFBRSxFQUFFbUIsV0FBVyxDQUFDbkIsRUFBRztRQUNuQmQsR0FBRyxFQUFFaUMsV0FBVyxDQUFDRSxVQUFXO1FBQzVCbEMsR0FBRyxFQUFFZ0MsV0FBVyxDQUFDRztRQUNqQjtRQUFBO1FBQ0FDLFNBQVMsRUFBRUosV0FBVyxDQUFDSSxTQUFTLENBQUNDLElBQUksQ0FBQy9ELE9BQU8sQ0FBQyxNQUFNLEVBQUUsVUFBQWdFLEtBQUs7VUFBQSxPQUFJLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDRCxLQUFLLENBQUM5SyxNQUFNLENBQUM7UUFBQSxFQUFFO1FBQ3pGZ0wsVUFBVSxFQUFFUixXQUFXLENBQUNTO01BQVksRUFDckM7SUFBQSxDQUNKLENBQUM7RUFDTCxDQUFDLEVBQUUsQ0FBQ2YsUUFBUSxFQUFFRixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxDQUFDO0VBRXJDLG9CQUNHekYsMkRBQUEsMkJBQ0dBLDJEQUFBLGFBQUkscUJBQW1CLENBQUssZUFDNUJBLDJEQUFBO0lBQUcwRyxJQUFJLEVBQUM7RUFBWSxHQUFDLG1CQUFpQixDQUFJLGVBQzFDMUcsMkRBQUE7SUFBUStFLFFBQVEsRUFBRWE7RUFBbUIsZ0JBQ2xDNUYsMkRBQUE7SUFBUW5LLEtBQUssRUFBQztFQUFhLEdBQUMsYUFBVyxDQUFTLGVBQ2hEbUssMkRBQUE7SUFBUW5LLEtBQUssRUFBQztFQUFVLEdBQUMsVUFBUSxDQUFTLENBQ3BDLGVBQ1RtSywyREFBQSw2QkFDQUEsMkRBQUEsNkJBQ0FBLDJEQUFBLDBCQUNHQSwyREFBQSxhQUFJLGdCQUFjLENBQUssZUFDdkJBLDJEQUFBLGFBQUksWUFBVSxDQUFLLGVBQ25CQSwyREFBQSxhQUFJLFlBQVUsQ0FBSyxlQUNuQkEsMkRBQUEsYUFBSSxXQUFTLENBQUssZUFDbEJBLDJEQUFBLGFBQUksVUFBUSxDQUFLLENBQ2YsQ0FDRyxFQUNKNkYsZUFBZSxDQUNYLENBQ0w7QUFFWjtBQUVBLGlFQUFlUCxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0NqRGpDLHFKQUFBcFEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9BQUFDLEVBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLE1BQUEsR0FBQUgsRUFBQSxDQUFBSSxjQUFBLEVBQUFDLGNBQUEsR0FBQUosTUFBQSxDQUFBSSxjQUFBLGNBQUFDLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxJQUFBLElBQUFGLEdBQUEsQ0FBQUMsR0FBQSxJQUFBQyxJQUFBLENBQUFDLEtBQUEsS0FBQUMsT0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLGNBQUEsR0FBQUYsT0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxtQkFBQSxHQUFBSixPQUFBLENBQUFLLGFBQUEsdUJBQUFDLGlCQUFBLEdBQUFOLE9BQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQVosR0FBQSxFQUFBQyxHQUFBLEVBQUFFLEtBQUEsV0FBQVIsTUFBQSxDQUFBSSxjQUFBLENBQUFDLEdBQUEsRUFBQUMsR0FBQSxJQUFBRSxLQUFBLEVBQUFBLEtBQUEsRUFBQVUsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQWYsR0FBQSxDQUFBQyxHQUFBLFdBQUFXLE1BQUEsbUJBQUFJLEdBQUEsSUFBQUosTUFBQSxZQUFBQSxPQUFBWixHQUFBLEVBQUFDLEdBQUEsRUFBQUUsS0FBQSxXQUFBSCxHQUFBLENBQUFDLEdBQUEsSUFBQUUsS0FBQSxnQkFBQWMsS0FBQUMsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxRQUFBQyxjQUFBLEdBQUFILE9BQUEsSUFBQUEsT0FBQSxDQUFBdkIsU0FBQSxZQUFBMkIsU0FBQSxHQUFBSixPQUFBLEdBQUFJLFNBQUEsRUFBQUMsU0FBQSxHQUFBN0IsTUFBQSxDQUFBOEIsTUFBQSxDQUFBSCxjQUFBLENBQUExQixTQUFBLEdBQUE4QixPQUFBLE9BQUFDLE9BQUEsQ0FBQU4sV0FBQSxnQkFBQXRCLGNBQUEsQ0FBQXlCLFNBQUEsZUFBQXJCLEtBQUEsRUFBQXlCLGdCQUFBLENBQUFWLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLE1BQUFGLFNBQUEsYUFBQUssU0FBQUMsRUFBQSxFQUFBOUIsR0FBQSxFQUFBK0IsR0FBQSxtQkFBQUMsSUFBQSxZQUFBRCxHQUFBLEVBQUFELEVBQUEsQ0FBQUcsSUFBQSxDQUFBakMsR0FBQSxFQUFBK0IsR0FBQSxjQUFBZixHQUFBLGFBQUFnQixJQUFBLFdBQUFELEdBQUEsRUFBQWYsR0FBQSxRQUFBdkIsT0FBQSxDQUFBd0IsSUFBQSxHQUFBQSxJQUFBLE1BQUFpQixnQkFBQSxnQkFBQVgsVUFBQSxjQUFBWSxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxpQkFBQSxPQUFBekIsTUFBQSxDQUFBeUIsaUJBQUEsRUFBQS9CLGNBQUEscUNBQUFnQyxRQUFBLEdBQUEzQyxNQUFBLENBQUE0QyxjQUFBLEVBQUFDLHVCQUFBLEdBQUFGLFFBQUEsSUFBQUEsUUFBQSxDQUFBQSxRQUFBLENBQUFHLE1BQUEsUUFBQUQsdUJBQUEsSUFBQUEsdUJBQUEsS0FBQTlDLEVBQUEsSUFBQUcsTUFBQSxDQUFBb0MsSUFBQSxDQUFBTyx1QkFBQSxFQUFBbEMsY0FBQSxNQUFBK0IsaUJBQUEsR0FBQUcsdUJBQUEsT0FBQUUsRUFBQSxHQUFBTiwwQkFBQSxDQUFBeEMsU0FBQSxHQUFBMkIsU0FBQSxDQUFBM0IsU0FBQSxHQUFBRCxNQUFBLENBQUE4QixNQUFBLENBQUFZLGlCQUFBLFlBQUFNLHNCQUFBL0MsU0FBQSxnQ0FBQWdELE9BQUEsV0FBQUMsTUFBQSxJQUFBakMsTUFBQSxDQUFBaEIsU0FBQSxFQUFBaUQsTUFBQSxZQUFBZCxHQUFBLGdCQUFBZSxPQUFBLENBQUFELE1BQUEsRUFBQWQsR0FBQSxzQkFBQWdCLGNBQUF2QixTQUFBLEVBQUF3QixXQUFBLGFBQUFDLE9BQUFKLE1BQUEsRUFBQWQsR0FBQSxFQUFBbUIsT0FBQSxFQUFBQyxNQUFBLFFBQUFDLE1BQUEsR0FBQXZCLFFBQUEsQ0FBQUwsU0FBQSxDQUFBcUIsTUFBQSxHQUFBckIsU0FBQSxFQUFBTyxHQUFBLG1CQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxRQUFBcUIsTUFBQSxHQUFBRCxNQUFBLENBQUFyQixHQUFBLEVBQUE1QixLQUFBLEdBQUFrRCxNQUFBLENBQUFsRCxLQUFBLFNBQUFBLEtBQUEsZ0JBQUFtRCxPQUFBLENBQUFuRCxLQUFBLEtBQUFOLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQTlCLEtBQUEsZUFBQTZDLFdBQUEsQ0FBQUUsT0FBQSxDQUFBL0MsS0FBQSxDQUFBb0QsT0FBQSxFQUFBQyxJQUFBLFdBQUFyRCxLQUFBLElBQUE4QyxNQUFBLFNBQUE5QyxLQUFBLEVBQUErQyxPQUFBLEVBQUFDLE1BQUEsZ0JBQUFuQyxHQUFBLElBQUFpQyxNQUFBLFVBQUFqQyxHQUFBLEVBQUFrQyxPQUFBLEVBQUFDLE1BQUEsUUFBQUgsV0FBQSxDQUFBRSxPQUFBLENBQUEvQyxLQUFBLEVBQUFxRCxJQUFBLFdBQUFDLFNBQUEsSUFBQUosTUFBQSxDQUFBbEQsS0FBQSxHQUFBc0QsU0FBQSxFQUFBUCxPQUFBLENBQUFHLE1BQUEsZ0JBQUFLLEtBQUEsV0FBQVQsTUFBQSxVQUFBUyxLQUFBLEVBQUFSLE9BQUEsRUFBQUMsTUFBQSxTQUFBQSxNQUFBLENBQUFDLE1BQUEsQ0FBQXJCLEdBQUEsU0FBQTRCLGVBQUEsRUFBQTVELGNBQUEsb0JBQUFJLEtBQUEsV0FBQUEsTUFBQTBDLE1BQUEsRUFBQWQsR0FBQSxhQUFBNkIsMkJBQUEsZUFBQVosV0FBQSxXQUFBRSxPQUFBLEVBQUFDLE1BQUEsSUFBQUYsTUFBQSxDQUFBSixNQUFBLEVBQUFkLEdBQUEsRUFBQW1CLE9BQUEsRUFBQUMsTUFBQSxnQkFBQVEsZUFBQSxHQUFBQSxlQUFBLEdBQUFBLGVBQUEsQ0FBQUgsSUFBQSxDQUFBSSwwQkFBQSxFQUFBQSwwQkFBQSxJQUFBQSwwQkFBQSxxQkFBQWhDLGlCQUFBVixPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxRQUFBbUMsS0FBQSxzQ0FBQWhCLE1BQUEsRUFBQWQsR0FBQSx3QkFBQThCLEtBQUEsWUFBQUMsS0FBQSxzREFBQUQsS0FBQSxvQkFBQWhCLE1BQUEsUUFBQWQsR0FBQSxTQUFBZ0MsVUFBQSxXQUFBckMsT0FBQSxDQUFBbUIsTUFBQSxHQUFBQSxNQUFBLEVBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQUEsR0FBQSxVQUFBaUMsUUFBQSxHQUFBdEMsT0FBQSxDQUFBc0MsUUFBQSxNQUFBQSxRQUFBLFFBQUFDLGNBQUEsR0FBQUMsbUJBQUEsQ0FBQUYsUUFBQSxFQUFBdEMsT0FBQSxPQUFBdUMsY0FBQSxRQUFBQSxjQUFBLEtBQUEvQixnQkFBQSxtQkFBQStCLGNBQUEscUJBQUF2QyxPQUFBLENBQUFtQixNQUFBLEVBQUFuQixPQUFBLENBQUF5QyxJQUFBLEdBQUF6QyxPQUFBLENBQUEwQyxLQUFBLEdBQUExQyxPQUFBLENBQUFLLEdBQUEsc0JBQUFMLE9BQUEsQ0FBQW1CLE1BQUEsNkJBQUFnQixLQUFBLFFBQUFBLEtBQUEsZ0JBQUFuQyxPQUFBLENBQUFLLEdBQUEsRUFBQUwsT0FBQSxDQUFBMkMsaUJBQUEsQ0FBQTNDLE9BQUEsQ0FBQUssR0FBQSx1QkFBQUwsT0FBQSxDQUFBbUIsTUFBQSxJQUFBbkIsT0FBQSxDQUFBNEMsTUFBQSxXQUFBNUMsT0FBQSxDQUFBSyxHQUFBLEdBQUE4QixLQUFBLG9CQUFBVCxNQUFBLEdBQUF2QixRQUFBLENBQUFYLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLG9CQUFBMEIsTUFBQSxDQUFBcEIsSUFBQSxRQUFBNkIsS0FBQSxHQUFBbkMsT0FBQSxDQUFBNkMsSUFBQSxtQ0FBQW5CLE1BQUEsQ0FBQXJCLEdBQUEsS0FBQUcsZ0JBQUEscUJBQUEvQixLQUFBLEVBQUFpRCxNQUFBLENBQUFyQixHQUFBLEVBQUF3QyxJQUFBLEVBQUE3QyxPQUFBLENBQUE2QyxJQUFBLGtCQUFBbkIsTUFBQSxDQUFBcEIsSUFBQSxLQUFBNkIsS0FBQSxnQkFBQW5DLE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBcUIsTUFBQSxDQUFBckIsR0FBQSxtQkFBQW1DLG9CQUFBRixRQUFBLEVBQUF0QyxPQUFBLFFBQUE4QyxVQUFBLEdBQUE5QyxPQUFBLENBQUFtQixNQUFBLEVBQUFBLE1BQUEsR0FBQW1CLFFBQUEsQ0FBQXpELFFBQUEsQ0FBQWlFLFVBQUEsT0FBQUMsU0FBQSxLQUFBNUIsTUFBQSxTQUFBbkIsT0FBQSxDQUFBc0MsUUFBQSxxQkFBQVEsVUFBQSxJQUFBUixRQUFBLENBQUF6RCxRQUFBLGVBQUFtQixPQUFBLENBQUFtQixNQUFBLGFBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQTBDLFNBQUEsRUFBQVAsbUJBQUEsQ0FBQUYsUUFBQSxFQUFBdEMsT0FBQSxlQUFBQSxPQUFBLENBQUFtQixNQUFBLGtCQUFBMkIsVUFBQSxLQUFBOUMsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLE9BQUEyQyxTQUFBLHVDQUFBRixVQUFBLGlCQUFBdEMsZ0JBQUEsTUFBQWtCLE1BQUEsR0FBQXZCLFFBQUEsQ0FBQWdCLE1BQUEsRUFBQW1CLFFBQUEsQ0FBQXpELFFBQUEsRUFBQW1CLE9BQUEsQ0FBQUssR0FBQSxtQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsU0FBQU4sT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLEVBQUFMLE9BQUEsQ0FBQXNDLFFBQUEsU0FBQTlCLGdCQUFBLE1BQUF5QyxJQUFBLEdBQUF2QixNQUFBLENBQUFyQixHQUFBLFNBQUE0QyxJQUFBLEdBQUFBLElBQUEsQ0FBQUosSUFBQSxJQUFBN0MsT0FBQSxDQUFBc0MsUUFBQSxDQUFBWSxVQUFBLElBQUFELElBQUEsQ0FBQXhFLEtBQUEsRUFBQXVCLE9BQUEsQ0FBQW1ELElBQUEsR0FBQWIsUUFBQSxDQUFBYyxPQUFBLGVBQUFwRCxPQUFBLENBQUFtQixNQUFBLEtBQUFuQixPQUFBLENBQUFtQixNQUFBLFdBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQTBDLFNBQUEsR0FBQS9DLE9BQUEsQ0FBQXNDLFFBQUEsU0FBQTlCLGdCQUFBLElBQUF5QyxJQUFBLElBQUFqRCxPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsT0FBQTJDLFNBQUEsc0NBQUFoRCxPQUFBLENBQUFzQyxRQUFBLFNBQUE5QixnQkFBQSxjQUFBNkMsYUFBQUMsSUFBQSxRQUFBQyxLQUFBLEtBQUFDLE1BQUEsRUFBQUYsSUFBQSxZQUFBQSxJQUFBLEtBQUFDLEtBQUEsQ0FBQUUsUUFBQSxHQUFBSCxJQUFBLFdBQUFBLElBQUEsS0FBQUMsS0FBQSxDQUFBRyxVQUFBLEdBQUFKLElBQUEsS0FBQUMsS0FBQSxDQUFBSSxRQUFBLEdBQUFMLElBQUEsV0FBQU0sVUFBQSxDQUFBQyxJQUFBLENBQUFOLEtBQUEsY0FBQU8sY0FBQVAsS0FBQSxRQUFBN0IsTUFBQSxHQUFBNkIsS0FBQSxDQUFBUSxVQUFBLFFBQUFyQyxNQUFBLENBQUFwQixJQUFBLG9CQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxFQUFBa0QsS0FBQSxDQUFBUSxVQUFBLEdBQUFyQyxNQUFBLGFBQUF6QixRQUFBTixXQUFBLFNBQUFpRSxVQUFBLE1BQUFKLE1BQUEsYUFBQTdELFdBQUEsQ0FBQXVCLE9BQUEsQ0FBQW1DLFlBQUEsY0FBQVcsS0FBQSxpQkFBQWpELE9BQUFrRCxRQUFBLFFBQUFBLFFBQUEsUUFBQUMsY0FBQSxHQUFBRCxRQUFBLENBQUFyRixjQUFBLE9BQUFzRixjQUFBLFNBQUFBLGNBQUEsQ0FBQTNELElBQUEsQ0FBQTBELFFBQUEsNEJBQUFBLFFBQUEsQ0FBQWQsSUFBQSxTQUFBYyxRQUFBLE9BQUFFLEtBQUEsQ0FBQUYsUUFBQSxDQUFBRyxNQUFBLFNBQUFDLENBQUEsT0FBQWxCLElBQUEsWUFBQUEsS0FBQSxhQUFBa0IsQ0FBQSxHQUFBSixRQUFBLENBQUFHLE1BQUEsT0FBQWpHLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQTBELFFBQUEsRUFBQUksQ0FBQSxVQUFBbEIsSUFBQSxDQUFBMUUsS0FBQSxHQUFBd0YsUUFBQSxDQUFBSSxDQUFBLEdBQUFsQixJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxTQUFBQSxJQUFBLENBQUExRSxLQUFBLEdBQUFzRSxTQUFBLEVBQUFJLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFlBQUFBLElBQUEsQ0FBQUEsSUFBQSxHQUFBQSxJQUFBLGVBQUFBLElBQUEsRUFBQWQsVUFBQSxlQUFBQSxXQUFBLGFBQUE1RCxLQUFBLEVBQUFzRSxTQUFBLEVBQUFGLElBQUEsaUJBQUFwQyxpQkFBQSxDQUFBdkMsU0FBQSxHQUFBd0MsMEJBQUEsRUFBQXJDLGNBQUEsQ0FBQTJDLEVBQUEsbUJBQUF2QyxLQUFBLEVBQUFpQywwQkFBQSxFQUFBdEIsWUFBQSxTQUFBZixjQUFBLENBQUFxQywwQkFBQSxtQkFBQWpDLEtBQUEsRUFBQWdDLGlCQUFBLEVBQUFyQixZQUFBLFNBQUFxQixpQkFBQSxDQUFBNkQsV0FBQSxHQUFBcEYsTUFBQSxDQUFBd0IsMEJBQUEsRUFBQTFCLGlCQUFBLHdCQUFBakIsT0FBQSxDQUFBd0csbUJBQUEsYUFBQUMsTUFBQSxRQUFBQyxJQUFBLHdCQUFBRCxNQUFBLElBQUFBLE1BQUEsQ0FBQUUsV0FBQSxXQUFBRCxJQUFBLEtBQUFBLElBQUEsS0FBQWhFLGlCQUFBLDZCQUFBZ0UsSUFBQSxDQUFBSCxXQUFBLElBQUFHLElBQUEsQ0FBQUUsSUFBQSxPQUFBNUcsT0FBQSxDQUFBNkcsSUFBQSxhQUFBSixNQUFBLFdBQUF2RyxNQUFBLENBQUE0RyxjQUFBLEdBQUE1RyxNQUFBLENBQUE0RyxjQUFBLENBQUFMLE1BQUEsRUFBQTlELDBCQUFBLEtBQUE4RCxNQUFBLENBQUFNLFNBQUEsR0FBQXBFLDBCQUFBLEVBQUF4QixNQUFBLENBQUFzRixNQUFBLEVBQUF4RixpQkFBQSx5QkFBQXdGLE1BQUEsQ0FBQXRHLFNBQUEsR0FBQUQsTUFBQSxDQUFBOEIsTUFBQSxDQUFBaUIsRUFBQSxHQUFBd0QsTUFBQSxLQUFBekcsT0FBQSxDQUFBZ0gsS0FBQSxhQUFBMUUsR0FBQSxhQUFBd0IsT0FBQSxFQUFBeEIsR0FBQSxPQUFBWSxxQkFBQSxDQUFBSSxhQUFBLENBQUFuRCxTQUFBLEdBQUFnQixNQUFBLENBQUFtQyxhQUFBLENBQUFuRCxTQUFBLEVBQUFZLG1CQUFBLGlDQUFBZixPQUFBLENBQUFzRCxhQUFBLEdBQUFBLGFBQUEsRUFBQXRELE9BQUEsQ0FBQWlILEtBQUEsYUFBQXhGLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsRUFBQTJCLFdBQUEsZUFBQUEsV0FBQSxLQUFBQSxXQUFBLEdBQUEyRCxPQUFBLE9BQUFDLElBQUEsT0FBQTdELGFBQUEsQ0FBQTlCLElBQUEsQ0FBQUMsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxHQUFBMkIsV0FBQSxVQUFBdkQsT0FBQSxDQUFBd0csbUJBQUEsQ0FBQTlFLE9BQUEsSUFBQXlGLElBQUEsR0FBQUEsSUFBQSxDQUFBL0IsSUFBQSxHQUFBckIsSUFBQSxXQUFBSCxNQUFBLFdBQUFBLE1BQUEsQ0FBQWtCLElBQUEsR0FBQWxCLE1BQUEsQ0FBQWxELEtBQUEsR0FBQXlHLElBQUEsQ0FBQS9CLElBQUEsV0FBQWxDLHFCQUFBLENBQUFELEVBQUEsR0FBQTlCLE1BQUEsQ0FBQThCLEVBQUEsRUFBQWhDLGlCQUFBLGdCQUFBRSxNQUFBLENBQUE4QixFQUFBLEVBQUFwQyxjQUFBLGlDQUFBTSxNQUFBLENBQUE4QixFQUFBLDZEQUFBakQsT0FBQSxDQUFBb0gsSUFBQSxhQUFBQyxHQUFBLFFBQUFDLE1BQUEsR0FBQXBILE1BQUEsQ0FBQW1ILEdBQUEsR0FBQUQsSUFBQSxnQkFBQTVHLEdBQUEsSUFBQThHLE1BQUEsRUFBQUYsSUFBQSxDQUFBdEIsSUFBQSxDQUFBdEYsR0FBQSxVQUFBNEcsSUFBQSxDQUFBRyxPQUFBLGFBQUFuQyxLQUFBLFdBQUFnQyxJQUFBLENBQUFmLE1BQUEsU0FBQTdGLEdBQUEsR0FBQTRHLElBQUEsQ0FBQUksR0FBQSxRQUFBaEgsR0FBQSxJQUFBOEcsTUFBQSxTQUFBbEMsSUFBQSxDQUFBMUUsS0FBQSxHQUFBRixHQUFBLEVBQUE0RSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxXQUFBQSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxRQUFBcEYsT0FBQSxDQUFBZ0QsTUFBQSxHQUFBQSxNQUFBLEVBQUFkLE9BQUEsQ0FBQS9CLFNBQUEsS0FBQXdHLFdBQUEsRUFBQXpFLE9BQUEsRUFBQStELEtBQUEsV0FBQUEsTUFBQXdCLGFBQUEsYUFBQUMsSUFBQSxXQUFBdEMsSUFBQSxXQUFBVixJQUFBLFFBQUFDLEtBQUEsR0FBQUssU0FBQSxPQUFBRixJQUFBLFlBQUFQLFFBQUEsY0FBQW5CLE1BQUEsZ0JBQUFkLEdBQUEsR0FBQTBDLFNBQUEsT0FBQWEsVUFBQSxDQUFBMUMsT0FBQSxDQUFBNEMsYUFBQSxJQUFBMEIsYUFBQSxXQUFBYixJQUFBLGtCQUFBQSxJQUFBLENBQUFlLE1BQUEsT0FBQXZILE1BQUEsQ0FBQW9DLElBQUEsT0FBQW9FLElBQUEsTUFBQVIsS0FBQSxFQUFBUSxJQUFBLENBQUFnQixLQUFBLGNBQUFoQixJQUFBLElBQUE1QixTQUFBLE1BQUE2QyxJQUFBLFdBQUFBLEtBQUEsU0FBQS9DLElBQUEsV0FBQWdELFVBQUEsUUFBQWpDLFVBQUEsSUFBQUcsVUFBQSxrQkFBQThCLFVBQUEsQ0FBQXZGLElBQUEsUUFBQXVGLFVBQUEsQ0FBQXhGLEdBQUEsY0FBQXlGLElBQUEsS0FBQW5ELGlCQUFBLFdBQUFBLGtCQUFBb0QsU0FBQSxhQUFBbEQsSUFBQSxRQUFBa0QsU0FBQSxNQUFBL0YsT0FBQSxrQkFBQWdHLE9BQUFDLEdBQUEsRUFBQUMsTUFBQSxXQUFBeEUsTUFBQSxDQUFBcEIsSUFBQSxZQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxHQUFBMEYsU0FBQSxFQUFBL0YsT0FBQSxDQUFBbUQsSUFBQSxHQUFBOEMsR0FBQSxFQUFBQyxNQUFBLEtBQUFsRyxPQUFBLENBQUFtQixNQUFBLFdBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQTBDLFNBQUEsS0FBQW1ELE1BQUEsYUFBQTdCLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxHQUFBM0MsTUFBQSxHQUFBNkIsS0FBQSxDQUFBUSxVQUFBLGlCQUFBUixLQUFBLENBQUFDLE1BQUEsU0FBQXdDLE1BQUEsYUFBQXpDLEtBQUEsQ0FBQUMsTUFBQSxTQUFBaUMsSUFBQSxRQUFBVSxRQUFBLEdBQUFoSSxNQUFBLENBQUFvQyxJQUFBLENBQUFnRCxLQUFBLGVBQUE2QyxVQUFBLEdBQUFqSSxNQUFBLENBQUFvQyxJQUFBLENBQUFnRCxLQUFBLHFCQUFBNEMsUUFBQSxJQUFBQyxVQUFBLGFBQUFYLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUUsUUFBQSxTQUFBdUMsTUFBQSxDQUFBekMsS0FBQSxDQUFBRSxRQUFBLGdCQUFBZ0MsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFNBQUFzQyxNQUFBLENBQUF6QyxLQUFBLENBQUFHLFVBQUEsY0FBQXlDLFFBQUEsYUFBQVYsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRSxRQUFBLFNBQUF1QyxNQUFBLENBQUF6QyxLQUFBLENBQUFFLFFBQUEscUJBQUEyQyxVQUFBLFlBQUFoRSxLQUFBLHFEQUFBcUQsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFNBQUFzQyxNQUFBLENBQUF6QyxLQUFBLENBQUFHLFVBQUEsWUFBQWQsTUFBQSxXQUFBQSxPQUFBdEMsSUFBQSxFQUFBRCxHQUFBLGFBQUFnRSxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBQyxNQUFBLFNBQUFpQyxJQUFBLElBQUF0SCxNQUFBLENBQUFvQyxJQUFBLENBQUFnRCxLQUFBLHdCQUFBa0MsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFFBQUEyQyxZQUFBLEdBQUE5QyxLQUFBLGFBQUE4QyxZQUFBLGlCQUFBL0YsSUFBQSxtQkFBQUEsSUFBQSxLQUFBK0YsWUFBQSxDQUFBN0MsTUFBQSxJQUFBbkQsR0FBQSxJQUFBQSxHQUFBLElBQUFnRyxZQUFBLENBQUEzQyxVQUFBLEtBQUEyQyxZQUFBLGNBQUEzRSxNQUFBLEdBQUEyRSxZQUFBLEdBQUFBLFlBQUEsQ0FBQXRDLFVBQUEsY0FBQXJDLE1BQUEsQ0FBQXBCLElBQUEsR0FBQUEsSUFBQSxFQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxHQUFBQSxHQUFBLEVBQUFnRyxZQUFBLFNBQUFsRixNQUFBLGdCQUFBZ0MsSUFBQSxHQUFBa0QsWUFBQSxDQUFBM0MsVUFBQSxFQUFBbEQsZ0JBQUEsU0FBQThGLFFBQUEsQ0FBQTVFLE1BQUEsTUFBQTRFLFFBQUEsV0FBQUEsU0FBQTVFLE1BQUEsRUFBQWlDLFFBQUEsb0JBQUFqQyxNQUFBLENBQUFwQixJQUFBLFFBQUFvQixNQUFBLENBQUFyQixHQUFBLHFCQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxtQkFBQW9CLE1BQUEsQ0FBQXBCLElBQUEsUUFBQTZDLElBQUEsR0FBQXpCLE1BQUEsQ0FBQXJCLEdBQUEsZ0JBQUFxQixNQUFBLENBQUFwQixJQUFBLFNBQUF3RixJQUFBLFFBQUF6RixHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLE9BQUFjLE1BQUEsa0JBQUFnQyxJQUFBLHlCQUFBekIsTUFBQSxDQUFBcEIsSUFBQSxJQUFBcUQsUUFBQSxVQUFBUixJQUFBLEdBQUFRLFFBQUEsR0FBQW5ELGdCQUFBLEtBQUErRixNQUFBLFdBQUFBLE9BQUE3QyxVQUFBLGFBQUFXLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxPQUFBZCxLQUFBLENBQUFHLFVBQUEsS0FBQUEsVUFBQSxjQUFBNEMsUUFBQSxDQUFBL0MsS0FBQSxDQUFBUSxVQUFBLEVBQUFSLEtBQUEsQ0FBQUksUUFBQSxHQUFBRyxhQUFBLENBQUFQLEtBQUEsR0FBQS9DLGdCQUFBLHlCQUFBZ0csT0FBQWhELE1BQUEsYUFBQWEsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUMsTUFBQSxLQUFBQSxNQUFBLFFBQUE5QixNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsa0JBQUFyQyxNQUFBLENBQUFwQixJQUFBLFFBQUFtRyxNQUFBLEdBQUEvRSxNQUFBLENBQUFyQixHQUFBLEVBQUF5RCxhQUFBLENBQUFQLEtBQUEsWUFBQWtELE1BQUEsZ0JBQUFyRSxLQUFBLDhCQUFBc0UsYUFBQSxXQUFBQSxjQUFBekMsUUFBQSxFQUFBZixVQUFBLEVBQUFFLE9BQUEsZ0JBQUFkLFFBQUEsS0FBQXpELFFBQUEsRUFBQWtDLE1BQUEsQ0FBQWtELFFBQUEsR0FBQWYsVUFBQSxFQUFBQSxVQUFBLEVBQUFFLE9BQUEsRUFBQUEsT0FBQSxvQkFBQWpDLE1BQUEsVUFBQWQsR0FBQSxHQUFBMEMsU0FBQSxHQUFBdkMsZ0JBQUEsT0FBQXpDLE9BQUE7QUFBQSxTQUFBNEksbUJBQUFDLEdBQUEsRUFBQXBGLE9BQUEsRUFBQUMsTUFBQSxFQUFBb0YsS0FBQSxFQUFBQyxNQUFBLEVBQUF2SSxHQUFBLEVBQUE4QixHQUFBLGNBQUE0QyxJQUFBLEdBQUEyRCxHQUFBLENBQUFySSxHQUFBLEVBQUE4QixHQUFBLE9BQUE1QixLQUFBLEdBQUF3RSxJQUFBLENBQUF4RSxLQUFBLFdBQUF1RCxLQUFBLElBQUFQLE1BQUEsQ0FBQU8sS0FBQSxpQkFBQWlCLElBQUEsQ0FBQUosSUFBQSxJQUFBckIsT0FBQSxDQUFBL0MsS0FBQSxZQUFBd0csT0FBQSxDQUFBekQsT0FBQSxDQUFBL0MsS0FBQSxFQUFBcUQsSUFBQSxDQUFBK0UsS0FBQSxFQUFBQyxNQUFBO0FBQUEsU0FBQUMsa0JBQUEzRyxFQUFBLDZCQUFBVixJQUFBLFNBQUFzSCxJQUFBLEdBQUFDLFNBQUEsYUFBQWhDLE9BQUEsV0FBQXpELE9BQUEsRUFBQUMsTUFBQSxRQUFBbUYsR0FBQSxHQUFBeEcsRUFBQSxDQUFBOEcsS0FBQSxDQUFBeEgsSUFBQSxFQUFBc0gsSUFBQSxZQUFBSCxNQUFBcEksS0FBQSxJQUFBa0ksa0JBQUEsQ0FBQUMsR0FBQSxFQUFBcEYsT0FBQSxFQUFBQyxNQUFBLEVBQUFvRixLQUFBLEVBQUFDLE1BQUEsVUFBQXJJLEtBQUEsY0FBQXFJLE9BQUF4SCxHQUFBLElBQUFxSCxrQkFBQSxDQUFBQyxHQUFBLEVBQUFwRixPQUFBLEVBQUFDLE1BQUEsRUFBQW9GLEtBQUEsRUFBQUMsTUFBQSxXQUFBeEgsR0FBQSxLQUFBdUgsS0FBQSxDQUFBOUQsU0FBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUFvRSxlQUFBQyxHQUFBLEVBQUEvQyxDQUFBLFdBQUFnRCxlQUFBLENBQUFELEdBQUEsS0FBQUUscUJBQUEsQ0FBQUYsR0FBQSxFQUFBL0MsQ0FBQSxLQUFBa0QsMkJBQUEsQ0FBQUgsR0FBQSxFQUFBL0MsQ0FBQSxLQUFBbUQsZ0JBQUE7QUFBQSxTQUFBQSxpQkFBQSxjQUFBeEUsU0FBQTtBQUFBLFNBQUF1RSw0QkFBQUUsQ0FBQSxFQUFBQyxNQUFBLFNBQUFELENBQUEscUJBQUFBLENBQUEsc0JBQUFFLGlCQUFBLENBQUFGLENBQUEsRUFBQUMsTUFBQSxPQUFBRSxDQUFBLEdBQUEzSixNQUFBLENBQUFDLFNBQUEsQ0FBQTJKLFFBQUEsQ0FBQXRILElBQUEsQ0FBQWtILENBQUEsRUFBQTlCLEtBQUEsYUFBQWlDLENBQUEsaUJBQUFILENBQUEsQ0FBQS9DLFdBQUEsRUFBQWtELENBQUEsR0FBQUgsQ0FBQSxDQUFBL0MsV0FBQSxDQUFBQyxJQUFBLE1BQUFpRCxDQUFBLGNBQUFBLENBQUEsbUJBQUFFLEtBQUEsQ0FBQUMsSUFBQSxDQUFBTixDQUFBLE9BQUFHLENBQUEsK0RBQUFJLElBQUEsQ0FBQUosQ0FBQSxVQUFBRCxpQkFBQSxDQUFBRixDQUFBLEVBQUFDLE1BQUE7QUFBQSxTQUFBQyxrQkFBQVAsR0FBQSxFQUFBYSxHQUFBLFFBQUFBLEdBQUEsWUFBQUEsR0FBQSxHQUFBYixHQUFBLENBQUFoRCxNQUFBLEVBQUE2RCxHQUFBLEdBQUFiLEdBQUEsQ0FBQWhELE1BQUEsV0FBQUMsQ0FBQSxNQUFBNkQsSUFBQSxPQUFBSixLQUFBLENBQUFHLEdBQUEsR0FBQTVELENBQUEsR0FBQTRELEdBQUEsRUFBQTVELENBQUEsSUFBQTZELElBQUEsQ0FBQTdELENBQUEsSUFBQStDLEdBQUEsQ0FBQS9DLENBQUEsVUFBQTZELElBQUE7QUFBQSxTQUFBWixzQkFBQUYsR0FBQSxFQUFBL0MsQ0FBQSxRQUFBOEQsRUFBQSxXQUFBZixHQUFBLGdDQUFBekksTUFBQSxJQUFBeUksR0FBQSxDQUFBekksTUFBQSxDQUFBRSxRQUFBLEtBQUF1SSxHQUFBLDRCQUFBZSxFQUFBLFFBQUFDLEVBQUEsRUFBQUMsRUFBQSxFQUFBQyxFQUFBLEVBQUFDLEVBQUEsRUFBQUMsSUFBQSxPQUFBQyxFQUFBLE9BQUFDLEVBQUEsaUJBQUFKLEVBQUEsSUFBQUgsRUFBQSxHQUFBQSxFQUFBLENBQUE1SCxJQUFBLENBQUE2RyxHQUFBLEdBQUFqRSxJQUFBLFFBQUFrQixDQUFBLFFBQUFwRyxNQUFBLENBQUFrSyxFQUFBLE1BQUFBLEVBQUEsVUFBQU0sRUFBQSx1QkFBQUEsRUFBQSxJQUFBTCxFQUFBLEdBQUFFLEVBQUEsQ0FBQS9ILElBQUEsQ0FBQTRILEVBQUEsR0FBQXRGLElBQUEsTUFBQTJGLElBQUEsQ0FBQTNFLElBQUEsQ0FBQXVFLEVBQUEsQ0FBQTNKLEtBQUEsR0FBQStKLElBQUEsQ0FBQXBFLE1BQUEsS0FBQUMsQ0FBQSxHQUFBb0UsRUFBQSxpQkFBQW5KLEdBQUEsSUFBQW9KLEVBQUEsT0FBQUwsRUFBQSxHQUFBL0ksR0FBQSx5QkFBQW1KLEVBQUEsWUFBQU4sRUFBQSxlQUFBSSxFQUFBLEdBQUFKLEVBQUEsY0FBQWxLLE1BQUEsQ0FBQXNLLEVBQUEsTUFBQUEsRUFBQSwyQkFBQUcsRUFBQSxRQUFBTCxFQUFBLGFBQUFHLElBQUE7QUFBQSxTQUFBbkIsZ0JBQUFELEdBQUEsUUFBQVUsS0FBQSxDQUFBYSxPQUFBLENBQUF2QixHQUFBLFVBQUFBLEdBQUE7QUFEOEM7QUFDZTtBQUNRO0FBRXJFLFNBQVNtSSxjQUFjQSxDQUFDQyxLQUFLLEVBQUU7RUFDNUIsSUFBTXBHLFFBQVEsR0FBR04sOENBQU0sQ0FBQyxJQUFJLENBQUM7RUFDN0IsSUFBTTJHLGdCQUFnQixHQUFHM0csOENBQU0sQ0FBQyxJQUFJLENBQUM7RUFDckMsSUFBTTRHLFlBQVksR0FBRzVHLDhDQUFNLENBQUMsSUFBSSxDQUFDO0VBQ2pDLElBQU1PLFVBQVUsR0FBR1AsOENBQU0sQ0FBQyxJQUFJLENBQUM7RUFDL0IsSUFBQVEsU0FBQSxHQUFrRFQsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVUsVUFBQSxHQUFBcEMsY0FBQSxDQUFBbUMsU0FBQTtJQUF2RHFHLGlCQUFpQixHQUFBcEcsVUFBQTtJQUFFcUcsb0JBQW9CLEdBQUFyRyxVQUFBO0VBQzlDLElBQUFHLFVBQUEsR0FBNENiLGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFjLFVBQUEsR0FBQXhDLGNBQUEsQ0FBQXVDLFVBQUE7SUFBcERtRyxjQUFjLEdBQUFsRyxVQUFBO0lBQUVtRyxpQkFBaUIsR0FBQW5HLFVBQUE7RUFDeEMsSUFBQUcsVUFBQSxHQUEwQ2pCLGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFrQixVQUFBLEdBQUE1QyxjQUFBLENBQUEyQyxVQUFBO0lBQWxEaUcsYUFBYSxHQUFBaEcsVUFBQTtJQUFFaUcsZ0JBQWdCLEdBQUFqRyxVQUFBO0VBQ3RDLElBQUFHLFVBQUEsR0FBb0NyQixnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBc0IsVUFBQSxHQUFBaEQsY0FBQSxDQUFBK0MsVUFBQTtJQUE1QytGLFVBQVUsR0FBQTlGLFVBQUE7SUFBRStGLGFBQWEsR0FBQS9GLFVBQUE7RUFDaEMsSUFBQUcsVUFBQSxHQUFrQ3pCLGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUEwQixXQUFBLEdBQUFwRCxjQUFBLENBQUFtRCxVQUFBO0lBQTFDRSxTQUFTLEdBQUFELFdBQUE7SUFBRUUsWUFBWSxHQUFBRixXQUFBO0VBQzlCLElBQUE0RixXQUFBLEdBQWdDdEgsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQXVILFdBQUEsR0FBQWpKLGNBQUEsQ0FBQWdKLFdBQUE7SUFBeEMvRixRQUFRLEdBQUFnRyxXQUFBO0lBQUUvRixXQUFXLEdBQUErRixXQUFBO0VBQzVCLElBQUlDLFlBQVksR0FBRyxDQUFDUixjQUFjLElBQUlFLGFBQWE7O0VBRW5EO0VBQ0EsU0FBU08sZUFBZUEsQ0FBQzdSLEtBQUssRUFBRTtJQUM3QjtNQUFFLENBQUNBLEtBQUssSUFBSSxFQUFFLEdBQUl1UixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBR0EsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO0lBQUE7SUFDbEU7TUFBRSxDQUFDdlIsS0FBSyxJQUFJLENBQUMrUSxLQUFLLENBQUNlLEdBQUcsR0FBSVQsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEdBQUdBLGlCQUFpQixDQUFDLElBQUksQ0FBQztJQUFBO0VBQy9FO0VBRUEsU0FBU1UsWUFBWUEsQ0FBRTVGLElBQUksRUFBRTtJQUMxQjZFLGdCQUFnQixDQUFDNUUsT0FBTyxDQUFDQyxRQUFRLEdBQUdGLElBQUk7SUFDeEN4QixRQUFRLENBQUN5QixPQUFPLENBQUNDLFFBQVEsR0FBR0YsSUFBSTtJQUNoQzhFLFlBQVksQ0FBQzdFLE9BQU8sQ0FBQ0MsUUFBUSxHQUFHRixJQUFJO0VBQ3ZDOztFQUVBO0VBQ0EsU0FBUzZGLGlCQUFpQkEsQ0FBQ2hTLEtBQUssRUFBRTtJQUMvQixJQUFNdU0sT0FBTyxHQUFHLGFBQWE7SUFDN0IsSUFBSSxDQUFDQSxPQUFPLENBQUNoRCxJQUFJLENBQUN2SixLQUFLLENBQUMsRUFBRTtJQUMxQixJQUFNd00sV0FBVyxHQUFHeE0sS0FBSyxDQUFDeU0sT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7SUFDM0MsSUFBSUMsY0FBYyxHQUFHQyxNQUFNLENBQUNILFdBQVcsQ0FBQyxDQUFDSSxjQUFjLEVBQUU7SUFDeERGLGNBQWMsS0FBSyxHQUFHLEdBQUl5RSxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsR0FBR0Esb0JBQW9CLENBQUN6RSxjQUFjLENBQUM7RUFDN0Y7RUFFQSxTQUFTdUYsUUFBUUEsQ0FBQSxFQUFHO0lBQ2pCRCxpQkFBaUIsQ0FBQ2pCLEtBQUssQ0FBQ2UsR0FBRyxDQUFDMUksUUFBUSxFQUFFLENBQUM7SUFDdkN5SSxlQUFlLENBQUNkLEtBQUssQ0FBQ2UsR0FBRyxDQUFDO0VBQzdCO0VBRUEsU0FBU0ksNEJBQTRCQSxDQUFDakYsS0FBSyxFQUFFO0lBQzFDNEUsZUFBZSxDQUFDNUUsS0FBSyxDQUFDMEIsTUFBTSxDQUFDM08sS0FBSyxDQUFDeU0sT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyRHVGLGlCQUFpQixDQUFDL0UsS0FBSyxDQUFDMEIsTUFBTSxDQUFDM08sS0FBSyxDQUFDb0osUUFBUSxFQUFFLENBQUM7RUFDbkQ7RUFFQSxTQUFTd0YscUJBQXFCQSxDQUFDM0IsS0FBSyxFQUFFO0lBQ25DQSxLQUFLLENBQUNJLGNBQWMsRUFBRTtJQUN0QjBFLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFDbkJuSCxVQUFVLENBQUN3QixPQUFPLENBQUMyQixTQUFTLEdBQUcsRUFBRTtJQUNqQzBELGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDdkI7RUFBQyxTQUVjVSxTQUFTQSxDQUFBckYsR0FBQTtJQUFBLE9BQUFzRixVQUFBLENBQUEzSixLQUFBLE9BQUFELFNBQUE7RUFBQTtFQUFBLFNBQUE0SixXQUFBO0lBQUFBLFVBQUEsR0FBQTlKLGlCQUFBLGVBQUFqSixtQkFBQSxHQUFBOEcsSUFBQSxDQUF4QixTQUFBNkcsUUFBeUJDLEtBQUs7TUFBQSxJQUFBQyxRQUFBO01BQUEsT0FBQTdOLG1CQUFBLEdBQUF5QixJQUFBLFVBQUFxTSxTQUFBQyxRQUFBO1FBQUEsa0JBQUFBLFFBQUEsQ0FBQXBHLElBQUEsR0FBQW9HLFFBQUEsQ0FBQTFJLElBQUE7VUFBQTtZQUMzQnVJLEtBQUssQ0FBQ0ksY0FBYyxFQUFFO1lBQ3RCckIsWUFBWSxDQUFDLElBQUksQ0FBQztZQUFDLEtBQ2Y0RixZQUFZO2NBQUF4RSxRQUFBLENBQUExSSxJQUFBO2NBQUE7WUFBQTtZQUFBMEksUUFBQSxDQUFBcEcsSUFBQTtZQUFBb0csUUFBQSxDQUFBMUksSUFBQTtZQUFBLE9BRWE0SSxLQUFLLENBQUMsNEJBQTRCLEVBQUU7Y0FDeEQ1SyxNQUFNLEVBQUUsTUFBTTtjQUNkNkssT0FBTyxFQUFFO2dCQUNOLGNBQWMsRUFBRTtjQUNuQixDQUFDO2NBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7Z0JBQ2xCd0QsaUJBQWlCLEVBQUVBO2NBQ3RCLENBQUM7WUFDSixDQUFDLENBQUM7VUFBQTtZQVJJaEUsUUFBUSxHQUFBRSxRQUFBLENBQUFwSixJQUFBO1lBQUFvSixRQUFBLENBQUExSSxJQUFBO1lBQUEsT0FTRHdJLFFBQVEsQ0FBQ1MsSUFBSSxFQUFFO1VBQUE7WUFBQSxPQUFBUCxRQUFBLENBQUFqSixNQUFBLFdBQUFpSixRQUFBLENBQUFwSixJQUFBO1VBQUE7WUFBQW9KLFFBQUEsQ0FBQXBHLElBQUE7WUFBQW9HLFFBQUEsQ0FBQVEsRUFBQSxHQUFBUixRQUFBO1lBRTVCUyxPQUFPLENBQUN0SyxLQUFLLENBQUE2SixRQUFBLENBQUFRLEVBQUEsQ0FBTztZQUNwQmhDLFdBQVcsQ0FBQyxJQUFJLENBQUM7VUFBQztVQUFBO1lBQUEsT0FBQXdCLFFBQUEsQ0FBQWpHLElBQUE7UUFBQTtNQUFBLEdBQUE2RixPQUFBO0lBQUEsQ0FHMUI7SUFBQSxPQUFBb0YsVUFBQSxDQUFBM0osS0FBQSxPQUFBRCxTQUFBO0VBQUE7RUFFRCxTQUFTNkosb0JBQW9CQSxDQUFDcEYsS0FBSyxFQUFFO0lBQ2xDOEUsWUFBWSxDQUFDLElBQUksQ0FBQztJQUNsQkksU0FBUyxDQUFDbEYsS0FBSyxDQUFDLENBQ1o1SixJQUFJLENBQUMsVUFBQTJLLElBQUksRUFBSTtNQUNYLElBQU1JLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO01BQzlDLElBQUksQ0FBQ04sSUFBSSxDQUFDRSxHQUFHLElBQUksRUFBRSxJQUFJRixJQUFJLENBQUM5SyxNQUFNLEVBQUU7UUFDakN1TyxhQUFhLENBQUN6RCxJQUFJLENBQUM5SyxNQUFNLENBQUM7UUFDMUJrTCxVQUFVLENBQUNHLFdBQVcsbURBQUFDLE1BQUEsQ0FBZ0RSLElBQUksQ0FBQ0csR0FBRyxDQUFFO01BQ25GLENBQUMsTUFBTTtRQUNKQyxVQUFVLENBQUNHLFdBQVcsR0FBRyxnQkFBZ0I7TUFDNUM7TUFDQXZDLFlBQVksQ0FBQyxLQUFLLENBQUM7TUFDbkI7TUFDQXBCLFVBQVUsQ0FBQ3dCLE9BQU8sQ0FBQ3FDLFdBQVcsQ0FBQ0wsVUFBVSxDQUFDO0lBRTdDLENBQUMsQ0FBQyxTQUFNLENBQUMsVUFBQTdLLEtBQUssRUFBSTtNQUNsQnNLLE9BQU8sQ0FBQ3RLLEtBQUssQ0FBQyxRQUFRLEVBQUVBLEtBQUssQ0FBQztNQUM5QnFJLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFFcEIsQ0FBQyxDQUFDO0VBQ0w7RUFFQSxJQUFJRCxRQUFRLEVBQUUsb0JBQVF4QiwyREFBQSxZQUFHLDJCQUF5QixDQUFJO0VBRXRELG9CQUNHQSwyREFBQSwyQkFDR0EsMkRBQUEsYUFBSSxvQkFBa0IsQ0FBSyxlQUMzQkEsMkRBQUEsWUFBRyxzREFBb0QsQ0FBSSxlQUMzREEsMkRBQUEsWUFBRywyQkFBeUIsRUFBQzRHLEtBQUssQ0FBQ2UsR0FBRyxDQUFLLGVBQzNDM0gsMkRBQUE7SUFBTTBFLFFBQVEsRUFBRXdEO0VBQXFCLGdCQUNsQ2xJLDJEQUFBO0lBQU8yRSxPQUFPLEVBQUM7RUFBbUIsR0FBQyw2QkFBMkIsQ0FBUSxlQUN0RTNFLDJEQUFBO0lBQU80RSxHQUFHLEVBQUVwRSxRQUFTO0lBQUM5SSxJQUFJLEVBQUMsTUFBTTtJQUFDbU4sRUFBRSxFQUFDLG1CQUFtQjtJQUFDOUksSUFBSSxFQUFDLG1CQUFtQjtJQUFDK0ksU0FBUyxFQUFDLEdBQUc7SUFBQ0MsUUFBUSxFQUFFZ0QsNEJBQTZCO0lBQUNsUyxLQUFLLEVBQUVrUjtFQUFrQixFQUFFLEVBQ2xLVSxZQUFZLGlCQUFJekgsMkRBQUE7SUFBUTRFLEdBQUcsRUFBRWlDLGdCQUFpQjtJQUFDaEMsRUFBRSxFQUFDLGFBQWE7SUFBQ0csT0FBTyxFQUFFa0Q7RUFBcUIsR0FBQyxTQUFPLENBQVMsQ0FDNUcsRUFDTmpCLGNBQWMsaUJBQUlqSCwyREFBQSxlQUFNLHdDQUFzQyxDQUFPLEVBQ3JFLENBQUNtSCxhQUFhLGlCQUFJbkgsMkRBQUEsZUFBTSxtQ0FBaUMsQ0FBTyxlQUNqRUEsMkRBQUE7SUFBUTRFLEdBQUcsRUFBRWtDLFlBQWE7SUFBQzlCLE9BQU8sRUFBRThDO0VBQVMsR0FBRSxLQUFHLENBQVMsZUFFM0Q5SCwyREFBQTtJQUFLNEUsR0FBRyxFQUFFbkU7RUFBVyxFQUFRLEVBQzVCbUIsU0FBUyxpQkFDUDVCLDJEQUFBLENBQUNHLHdFQUFlO0lBQUM4RSxLQUFLLEVBQUUsU0FBVTtJQUFDQyxJQUFJLEVBQUUsRUFBRztJQUFDLGNBQVcsaUJBQWlCO0lBQUMsZUFBWTtFQUFRLEVBQUUsRUFFbEd1QyxZQUFZLElBQUlKLFVBQVUsaUJBQ3hCckgsMkRBQUEsQ0FBQ0kseUVBQW9CO0lBQUMrRSxJQUFJLEVBQUUsNEJBQTZCO0lBQUNWLHFCQUFxQixFQUFFQTtFQUFzQixFQUFFLENBRXpHO0FBRVo7QUFFQSxpRUFBZWtDLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUhIO0FBRTFCLFNBQVN2RyxvQkFBb0JBLENBQUN3RyxLQUFLLEVBQUU7RUFDbEMsb0JBQ0c1RywwREFBQSwyQkFDR0EsMERBQUE7SUFBRzZFLEVBQUUsRUFBQyxzQkFBc0I7SUFBQzZCLElBQUksRUFBRUUsS0FBSyxDQUFDekI7RUFBSyxHQUFFLFVBQVEsQ0FBSSxlQUM1RG5GLDBEQUFBO0lBQVE2RSxFQUFFLEVBQUMsV0FBVztJQUFDRyxPQUFPLEVBQUU0QixLQUFLLENBQUNuQztFQUFzQixHQUFDLE9BQUssQ0FBUyxDQUN4RTtBQUVaO0FBRUEsaUVBQWVyRSxvQkFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWFQ7QUFFMUIsU0FBU0MsSUFBSUEsQ0FBQ3VHLEtBQUssRUFBRTtFQUNsQixvQkFDRzVHLDBEQUFBO0lBQU0wRSxRQUFRLEVBQUVmO0VBQXFCLGdCQUNsQzNELDBEQUFBO0lBQU8yRSxPQUFPLEVBQUM7RUFBa0IsR0FBQyw2QkFBd0IsQ0FBUSxlQUNsRTNFLDBEQUFBO0lBQU80RSxHQUFHLEVBQUVwRSxRQUFTO0lBQUM5SSxJQUFJLEVBQUMsTUFBTTtJQUFDbU4sRUFBRSxFQUFDLGtCQUFrQjtJQUFDOUksSUFBSSxFQUFDLGtCQUFrQjtJQUFDK0ksU0FBUyxFQUFDLEdBQUc7SUFBQ0MsUUFBUSxFQUFFNkIsS0FBSyxDQUFDckMsMEJBQTJCO0lBQUMxTyxLQUFLLEVBQUUrUSxLQUFLLENBQUNoRztFQUFpQixFQUFFLGVBQzFLWiwwREFBQTtJQUFRNEUsR0FBRyxFQUFFckUsU0FBVTtJQUFDc0UsRUFBRSxFQUFDLGFBQWE7SUFBQ0csT0FBTyxFQUFFNEIsS0FBSyxDQUFDakQ7RUFBcUIsR0FBRSxTQUFPLENBQVMsQ0FDM0Y7QUFFYjtBQUVBLGlFQUFldEQsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaTztBQUUxQixTQUFTZ0YsZUFBZUEsQ0FBQ3VCLEtBQUssRUFBRTtFQUM3QixvQkFDRzVHLDBEQUFBLDZCQUNHQSwwREFBQSwwQkFDR0EsMERBQUEsYUFBSzRHLEtBQUssQ0FBQy9CLEVBQUUsQ0FBTSxlQUNuQjdFLDBEQUFBLGFBQUksR0FBQyxFQUFDNEcsS0FBSyxDQUFDN0MsR0FBRyxDQUFNLGVBQ3JCL0QsMERBQUEsYUFBSSxNQUFDLEVBQUM0RyxLQUFLLENBQUM1QyxHQUFHLENBQU0sZUFDckJoRSwwREFBQSxhQUFLNEcsS0FBSyxDQUFDUixTQUFTLENBQU0sZUFDMUJwRywwREFBQSxhQUFLNEcsS0FBSyxDQUFDSixVQUFVLEdBQUcsVUFBVSxHQUFHLGNBQWMsQ0FBTSxDQUN2RCxDQUNBO0FBRWQ7QUFFQSxpRUFBZW5CLGVBQWU7Ozs7Ozs7Ozs7OztBR2hCOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvIHN5bmMgXFwuKGolN0N0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9EZXBvc2l0SW5wdXRzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvVHJhbnNhY3Rpb25IaXN0b3J5LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvV2l0aGRyYXdJbnB1dHMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9jb21wb25lbnRzL0NvbnRpbnVlUmVzZXRCdXR0b25zLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvY29tcG9uZW50cy9Gb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvY29tcG9uZW50cy9UcmFuc2FjdGlvbkl0ZW0uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL0RlcG9zaXRJbnB1dHMuanN4XCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvRGVwb3NpdElucHV0cy5qc3hcIixcblx0XCIuL1RyYW5zYWN0aW9uSGlzdG9yeS5qc3hcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9UcmFuc2FjdGlvbkhpc3RvcnkuanN4XCIsXG5cdFwiLi9XaXRoZHJhd0lucHV0cy5qc3hcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9XaXRoZHJhd0lucHV0cy5qc3hcIixcblx0XCIuL2NvbXBvbmVudHMvQ29udGludWVSZXNldEJ1dHRvbnMuanN4XCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvY29tcG9uZW50cy9Db250aW51ZVJlc2V0QnV0dG9ucy5qc3hcIixcblx0XCIuL2NvbXBvbmVudHMvRm9ybS5qc3hcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9jb21wb25lbnRzL0Zvcm0uanN4XCIsXG5cdFwiLi9jb21wb25lbnRzL1RyYW5zYWN0aW9uSXRlbS5qc3hcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9jb21wb25lbnRzL1RyYW5zYWN0aW9uSXRlbS5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vRGVwb3NpdElucHV0cy5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9EZXBvc2l0SW5wdXRzLmpzeFwiLFxuXHRcIi4vVHJhbnNhY3Rpb25IaXN0b3J5LmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL1RyYW5zYWN0aW9uSGlzdG9yeS5qc3hcIixcblx0XCIuL1dpdGhkcmF3SW5wdXRzLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL1dpdGhkcmF3SW5wdXRzLmpzeFwiLFxuXHRcIi4vY29tcG9uZW50cy9Db250aW51ZVJlc2V0QnV0dG9ucy5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9jb21wb25lbnRzL0NvbnRpbnVlUmVzZXRCdXR0b25zLmpzeFwiLFxuXHRcIi4vY29tcG9uZW50cy9Gb3JtLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2NvbXBvbmVudHMvRm9ybS5qc3hcIixcblx0XCIuL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25JdGVtLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25JdGVtLmpzeFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihqJTdDdClzeD8kXCI7IiwiaW1wb3J0IGNvbnRyb2xsZXJfMCBmcm9tICdAc3ltZm9ueS91eC1yZWFjdC9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXJlYWN0LS1yZWFjdCc6IGNvbnRyb2xsZXJfMCxcbn07IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BhZ2F0ZUxvYWRlciBmcm9tIFwicmVhY3Qtc3Bpbm5lcnMvUHJvcGFnYXRlTG9hZGVyXCI7XG5pbXBvcnQgQ29udGludWVSZXNldEJ1dHRvbnMgZnJvbSAnLi9jb21wb25lbnRzL0NvbnRpbnVlUmVzZXRCdXR0b25zJztcbmltcG9ydCBGb3JtIGZyb20gXCIuL2NvbXBvbmVudHMvRm9ybVwiO1xuXG5jb25zdCBEZXBvc2l0SW5wdXRzID0gKCkgPT4gIHtcbiAgIC8vIHN0YXRlIHZhcmlhYmxlc1xuICAgY29uc3QgQnV0dG9uUmVmID0gdXNlUmVmKG51bGwpO1xuICAgY29uc3QgSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICBjb25zdCBDb252RGl2UmVmID0gdXNlUmVmKG51bGwpO1xuICAgY29uc3QgW2dicERlcG9zaXRBbW91bnQsIHNldEdicERlcG9zaXRBbW91bnRdID0gdXNlU3RhdGUoJycpO1xuICAgY29uc3QgW2lzR2JwVmFsaWQsIHNldElzR2JwVmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgY29uc3QgW2NvbnZlcnNpb25GZXRjaGVkLCBzZXRDb252ZXJzaW9uRmV0Y2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICBjb25zdCBbaGFzRXJyb3IsIHNldEhhc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgIC8vIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGlmIHRoZSBVU0QgYW1vdW50IGlzIHZhbGlkXG4gICBmdW5jdGlvbiBjaGVja0dicElzVmFsaWQodmFsdWUpIHtcbiAgICAgIHsodmFsdWUgPj0gMjApID8gc2V0SXNHYnBWYWxpZCh0cnVlKSA6IHNldElzR2JwVmFsaWQoZmFsc2UpfTtcbiAgIH1cblxuICAgZnVuY3Rpb24gc3dpdGNoQnV0dG9ucyAoYm9vbCkge1xuICAgICAgQnV0dG9uUmVmLmN1cnJlbnQuZGlzYWJsZWQgPSBib29sO1xuICAgICAgSW5wdXRSZWYuY3VycmVudC5kaXNhYmxlZCA9IGJvb2w7XG4gICB9XG5cbiAgIC8vdmFsaWRhdGUgaW5wdXQsIHJlZ2V4IGNoZWNrIGZvciBsZXR0ZXJzIGV0YywgcmVtb3ZlIGNvbW1hcyBmcm9tIHRoZSB2YWx1ZSwgdGhlbiBmb3JtYXQgdGhlIHZhbHVlIHRvIGhhdmUgdGhlIGNvcnJlY3QgY29tbWFzXG4gICBmdW5jdGlvbiB2YWxpZGF0ZUFuZFNldEdicCh2YWx1ZSkge1xuICAgICAgY29uc3QgcGF0dGVybiA9IC9eWzAtOSwgXSokLztcbiAgICAgIGlmICghcGF0dGVybi50ZXN0KHZhbHVlKSkgcmV0dXJuO1xuXG4gICAgICBsZXQgc3RyaXBwZWRWYWwgPSB2YWx1ZS5yZXBsYWNlKC8sL2csICcnKTtcbiAgICAgIGxldCBmb3JtYXR0ZWRWYWx1ZSA9IE51bWJlcihzdHJpcHBlZFZhbCkudG9Mb2NhbGVTdHJpbmcoKTtcblxuICAgICAgKGZvcm1hdHRlZFZhbHVlID09PSAnMCcpID8gc2V0R2JwRGVwb3NpdEFtb3VudCgnJykgOiBzZXRHYnBEZXBvc2l0QW1vdW50KGZvcm1hdHRlZFZhbHVlKTtcbiAgIH1cblxuICAgYXN5bmMgZnVuY3Rpb24gcmV0cmlldmVVc2RDb252ZXJzaW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgaWYgKGlzR2JwVmFsaWQpIHtcbiAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvY3JlYXRlLWRlcG9zaXQtc2Vzc2lvbicsIHtcbiAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICBnYnBEZXBvc2l0QW1vdW50OiBnYnBEZXBvc2l0QW1vdW50LFxuICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHNldEhhc0Vycm9yKHRydWUpO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBmdW5jdGlvbiBDb25maXJtQW5kQ29udmVydEdicChldmVudCkge1xuICAgICAgLy9kaXNhYmxlIHRoZSBHYnBEZXBvc2l0QW1vdW50IGlucHV0IGZpZWxkXG4gICAgICBzd2l0Y2hCdXR0b25zKHRydWUpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIENvbnZEaXZSZWYuY3VycmVudC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgaWYgKGlzR2JwVmFsaWQpIHtcbiAgICAgICAgIHJldHJpZXZlVXNkQ29udmVyc2lvbihldmVudClcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RhdGEgcmVjZWl2ZWQ6JywgZGF0YS51c2QsIGRhdGEuZ2JwKTtcbiAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gYFRoZSBVU0QgdmFsdWUgb2YgeW91ciBkZXBvc2l0IHdpbGwgYmUgJCR7ZGF0YS51c2R9YDtcbiAgICAgICAgICAgICAgIHNldENvbnZlcnNpb25GZXRjaGVkKHRydWUpO1xuICAgICAgICAgICAgICAgQ29udkRpdlJlZi5jdXJyZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICAgICAgICBzZXRIYXNFcnJvcih0cnVlKTtcbiAgICAgICAgIH0pO1xuICAgICAgfVxuICAgfVxuXG4gICAvLyBldmVudCBoYW5kbGVycyBmb3IgdGhlIHR3byBpbnB1dCBmaWVsZHNcbiAgIGZ1bmN0aW9uIHNldEdicERlcG9zaXRBbW91bnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgICBjaGVja0dicElzVmFsaWQoZXZlbnQudGFyZ2V0LnZhbHVlLnJlcGxhY2UoLywvZywgJycpKTtcbiAgICAgIHZhbGlkYXRlQW5kU2V0R2JwKGV2ZW50LnRhcmdldC52YWx1ZSwgJ2dicCcpO1xuICAgfVxuXG4gICBmdW5jdGlvbiBoYW5kbGVDb252ZXJzaW9uUmVzZXQoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzd2l0Y2hCdXR0b25zKGZhbHNlKTtcbiAgICAgIENvbnZEaXZSZWYuY3VycmVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgIHNldENvbnZlcnNpb25GZXRjaGVkKGZhbHNlKTtcbiAgIH1cblxuICAgaWYgKGhhc0Vycm9yKSByZXR1cm4gKDxwPm9vcHMgc29tZXRoaW5nIHdlbnQgd3Jvbmc8L3A+KTtcblxuICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzPkVudGVyIGFtb3VudCB0byBkZXBvc2l0OjwvaDM+XG4gICAgICAgICAgICA8cD5FbnRlciB0aGUgYW1vdW50IHlvdSB3b3VsZCBsaWtlIHRvIGRlcG9zaXQgYW5kIGNvbnZlcnQgdG8gVVNELjwvcD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Q29uZmlybUFuZENvbnZlcnRHYnB9PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJHYnBEZXBvc2l0QW1vdW50XCI+RGVwb3NpdCBBbW91bnQgaW4gR0JQKMKjKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtJbnB1dFJlZn0gdHlwZT1cInRleHRcIiBpZD1cIkdicERlcG9zaXRBbW91bnRcIiBuYW1lPVwiR2JwRGVwb3NpdEFtb3VudFwiIG1heExlbmd0aD1cIjhcIiBvbkNoYW5nZT17c2V0R2JwRGVwb3NpdEFtb3VudEhhbmRsZXJ9IHZhbHVlPXtnYnBEZXBvc2l0QW1vdW50fS8+XG4gICAgICAgICAgICAgICAgICB7aXNHYnBWYWxpZCAmJiA8YnV0dG9uIHJlZj17QnV0dG9uUmVmfSBpZD1cImNvbnZlcnQtYnRuXCIgb25DbGljaz17Q29uZmlybUFuZENvbnZlcnRHYnB9ID5Db252ZXJ0PC9idXR0b24+fVxuICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAge2dicERlcG9zaXRBbW91bnQgPCAyMCAmJiA8c3Bhbj5EZXBvc2l0IG11c3QgYmUgYXQgbGVhc3QgwqMyMCBpbiB2YWx1ZS48L3NwYW4+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXYgcmVmPXtDb252RGl2UmVmfT5cbiAgICAgICAgIHtpc0xvYWRpbmcgJiZcbiAgICAgICAgICAgIDxQcm9wYWdhdGVMb2FkZXIgY29sb3I9e1wiIzVmNjZlNlwifSBzaXplPXsyNX0gYXJpYS1sYWJlbD1cIkxvYWRpbmcgU3Bpbm5lclwiIGRhdGEtdGVzdGlkPVwibG9hZGVyXCIvPlxuICAgICAgICAgfVxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICB7aXNHYnBWYWxpZCAmJiBjb252ZXJzaW9uRmV0Y2hlZCAmJlxuICAgICAgICAgICAgPENvbnRpbnVlUmVzZXRCdXR0b25zIGxpbms9eycvZGVwb3NpdC9kZXBvc2l0LWRldGFpbHMnfSBoYW5kbGVDb252ZXJzaW9uUmVzZXQ9e2hhbmRsZUNvbnZlcnNpb25SZXNldH0gLz5cbiAgICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVwb3NpdElucHV0czsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJhbnNhY3Rpb25JdGVtIGZyb20gJy4vY29tcG9uZW50cy9UcmFuc2FjdGlvbkl0ZW0nO1xuXG5mdW5jdGlvbiBUcmFuc2FjdGlvbkhpc3RvcnkoeyBkZXBvc2l0cywgd2l0aGRyYXdhbHMgfSkge1xuICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgnd2l0aGRyYXdhbHMnKTtcblxuICAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0Q2hhbmdlKGV2ZW50KSB7XG4gICAgICBzZXRTZWxlY3RlZChldmVudC50YXJnZXQudmFsdWUpO1xuICAgfVxuXG4gICBjb25zdCB0cmFuc2FjdGlvbkxpc3QgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9ucyA9IHNlbGVjdGVkID09PSAnd2l0aGRyYXdhbHMnID8gd2l0aGRyYXdhbHMgOiBkZXBvc2l0cztcblxuICAgICAgcmV0dXJuIHRyYW5zYWN0aW9ucy5tYXAoKHRyYW5zYWN0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgPFRyYW5zYWN0aW9uSXRlbVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGlkPXt0cmFuc2FjdGlvbi5pZH1cbiAgICAgICAgICAgIHVzZD17dHJhbnNhY3Rpb24udXNkX2Ftb3VudH1cbiAgICAgICAgICAgIGdicD17dHJhbnNhY3Rpb24uZ2JwX2Ftb3VudH1cbiAgICAgICAgICAgIC8vcmVwbGFjZXMgdHJhaWxpbmcgemVyb3Mgd2l0aCBzcGFjZXMgb24gdGltZXN0YW1wXG4gICAgICAgICAgICB0aW1lc3RhbXA9e3RyYW5zYWN0aW9uLnRpbWVzdGFtcC5kYXRlLnJlcGxhY2UoLy4wKyQvLCBtYXRjaCA9PiAnICcucmVwZWF0KG1hdGNoLmxlbmd0aCkpfVxuICAgICAgICAgICAgaXNWZXJpZmllZD17dHJhbnNhY3Rpb24uaXNfdmVyaWZpZWR9XG4gICAgICAgICAvPlxuICAgICAgKSk7XG4gICB9LCBbc2VsZWN0ZWQsIGRlcG9zaXRzLCB3aXRoZHJhd2Fsc10pO1xuXG4gICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgIDxoMT5UcmFuc2FjdGlvbiBIaXN0b3J5PC9oMT5cbiAgICAgICAgIDxhIGhyZWY9XCIvZGFzaGJvYXJkXCI+QmFjayB0byBEYXNoYm9hcmQ8L2E+XG4gICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3RDaGFuZ2V9PlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIndpdGhkcmF3YWxzXCI+V2l0aGRyYXdhbHM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZXBvc2l0c1wiPkRlcG9zaXRzPC9vcHRpb24+XG4gICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5UcmFuc2FjdGlvbiBJRDwvdGg+XG4gICAgICAgICAgICA8dGg+VVNEIEFtb3VudDwvdGg+XG4gICAgICAgICAgICA8dGg+R0JQIEFtb3VudDwvdGg+XG4gICAgICAgICAgICA8dGg+VGltZXN0YW1wPC90aD5cbiAgICAgICAgICAgIDx0aD5WZXJpZmllZDwvdGg+XG4gICAgICAgICA8L3RyPlxuICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIHt0cmFuc2FjdGlvbkxpc3R9XG4gICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2FjdGlvbkhpc3Rvcnk7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcGFnYXRlTG9hZGVyIGZyb20gXCJyZWFjdC1zcGlubmVycy9Qcm9wYWdhdGVMb2FkZXJcIjtcbmltcG9ydCBDb250aW51ZVJlc2V0QnV0dG9ucyBmcm9tICcuL2NvbXBvbmVudHMvQ29udGludWVSZXNldEJ1dHRvbnMnO1xuXG5mdW5jdGlvbiBXaXRoZHJhd0lucHV0cyhwcm9wcykge1xuICAgY29uc3QgSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICBjb25zdCBDb252ZXJ0QnV0dG9uUmVmID0gdXNlUmVmKG51bGwpO1xuICAgY29uc3QgTWF4QnV0dG9uUmVmID0gdXNlUmVmKG51bGwpO1xuICAgY29uc3QgQ29udkRpdlJlZiA9IHVzZVJlZihudWxsKTtcbiAgIGNvbnN0IFt1c2RXaXRoZHJhd0Ftb3VudCwgc2V0VXNkV2l0aGRyYXdBbW91bnRdID0gdXNlU3RhdGUoJycpO1xuICAgY29uc3QgW2V4Y2VlZHNCYWxhbmNlLCBzZXRFeGNlZWRzQmFsYW5jZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICBjb25zdCBbaXNNb3JlVGhhbk1pbiwgc2V0SXNNb3JlVGhhbk1pbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICBjb25zdCBbdmFsdWVWYWxpZCwgc2V0VmFsdWVWYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgY29uc3QgW2hhc0Vycm9yLCBzZXRIYXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICBsZXQgaXNJbnB1dFZhbGlkID0gIWV4Y2VlZHNCYWxhbmNlICYmIGlzTW9yZVRoYW5NaW47XG5cbiAgIC8vIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGlmIHRoZSBVU0QgaW5wdXQgaXMgdmFsaWRcbiAgIGZ1bmN0aW9uIGNoZWNrVXNkSXNWYWxpZCh2YWx1ZSkge1xuICAgICAgeygrdmFsdWUgPj0gMjApID8gc2V0SXNNb3JlVGhhbk1pbih0cnVlKSA6IHNldElzTW9yZVRoYW5NaW4oZmFsc2UpfVxuICAgICAgeygrdmFsdWUgPD0gK3Byb3BzLm1heCkgPyBzZXRFeGNlZWRzQmFsYW5jZShmYWxzZSkgOiBzZXRFeGNlZWRzQmFsYW5jZSh0cnVlKX1cbiAgIH1cblxuICAgZnVuY3Rpb24gZGlzYWJsZUlucHV0IChib29sKSB7XG4gICAgICBDb252ZXJ0QnV0dG9uUmVmLmN1cnJlbnQuZGlzYWJsZWQgPSBib29sO1xuICAgICAgSW5wdXRSZWYuY3VycmVudC5kaXNhYmxlZCA9IGJvb2w7XG4gICAgICBNYXhCdXR0b25SZWYuY3VycmVudC5kaXNhYmxlZCA9IGJvb2w7XG4gICB9XG5cbiAgIC8vdmFsaWRhdGUgaW5wdXQsIHJlZ2V4IGNoZWNrIGZvciBsZXR0ZXJzLCByZW1vdmUgY29tbWFzIGZyb20gdGhlIHZhbHVlLCB0aGVuIGZvcm1hdCB0aGUgdmFsdWUgdG8gaGF2ZSB0aGUgY29ycmVjdCBjb21tYXNcbiAgIGZ1bmN0aW9uIHZhbGlkYXRlQW5kU2V0VXNkKHZhbHVlKSB7XG4gICAgICBjb25zdCBwYXR0ZXJuID0gL15bMC05LC4gXSokLztcbiAgICAgIGlmICghcGF0dGVybi50ZXN0KHZhbHVlKSkgcmV0dXJuO1xuICAgICAgY29uc3Qgc3RyaXBwZWRWYWwgPSB2YWx1ZS5yZXBsYWNlKC8sL2csICcnKTtcbiAgICAgIGxldCBmb3JtYXR0ZWRWYWx1ZSA9IE51bWJlcihzdHJpcHBlZFZhbCkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgIChmb3JtYXR0ZWRWYWx1ZSA9PT0gJzAnKSA/IHNldFVzZFdpdGhkcmF3QW1vdW50KCcnKSA6IHNldFVzZFdpdGhkcmF3QW1vdW50KGZvcm1hdHRlZFZhbHVlKTtcbiAgIH1cblxuICAgZnVuY3Rpb24gc2V0VG9NYXgoKSB7XG4gICAgICB2YWxpZGF0ZUFuZFNldFVzZChwcm9wcy5tYXgudG9TdHJpbmcoKSk7XG4gICAgICBjaGVja1VzZElzVmFsaWQocHJvcHMubWF4KTtcbiAgIH1cblxuICAgZnVuY3Rpb24gd2l0aGRyYXdhbElucHV0Q2hhbmdlSGFuZGxlcihldmVudCkge1xuICAgICAgY2hlY2tVc2RJc1ZhbGlkKGV2ZW50LnRhcmdldC52YWx1ZS5yZXBsYWNlKC8sL2csICcnKSk7XG4gICAgICB2YWxpZGF0ZUFuZFNldFVzZChldmVudC50YXJnZXQudmFsdWUudG9TdHJpbmcoKSk7XG4gICB9XG5cbiAgIGZ1bmN0aW9uIGhhbmRsZUNvbnZlcnNpb25SZXNldChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRpc2FibGVJbnB1dChmYWxzZSk7XG4gICAgICBDb252RGl2UmVmLmN1cnJlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICBzZXRWYWx1ZVZhbGlkKGZhbHNlKTtcbiAgIH1cblxuICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgaWYgKGlzSW5wdXRWYWxpZCkge1xuICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9jcmVhdGUtd2l0aGRyYXdhbC1zZXNzaW9uJywge1xuICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgIHVzZFdpdGhkcmF3QW1vdW50OiB1c2RXaXRoZHJhd0Ftb3VudCxcbiAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICBzZXRIYXNFcnJvcih0cnVlKTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgZnVuY3Rpb24gQ29uZmlybUFuZENvbnZlcnRVc2QoZXZlbnQpIHtcbiAgICAgIGRpc2FibGVJbnB1dCh0cnVlKTtcbiAgICAgIGZldGNoRGF0YShldmVudClcbiAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgaWYgKCtkYXRhLnVzZCA+PSAyMCAmJiBkYXRhLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgc2V0VmFsdWVWYWxpZChkYXRhLnJlc3VsdCk7XG4gICAgICAgICAgICAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gYFRoZSBHQlAgdmFsdWUgb2YgeW91ciB3aXRoZHJhd2FsIHdpbGwgYmUgwqMke2RhdGEuZ2JwfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9ICdJbnZhbGlkIGFtb3VudCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgLy9pZiBkYXRhLmdicCBpcyBsZXNzIHRoYW4gMjAsIGRpc3BsYXkgYSBtZXNzYWdlIHNheWluZyB0aGF0IHRoZSB3aXRoZHJhd2FsIGFtb3VudCBpcyBsZXNzIHRoYW4gwqMyMFxuICAgICAgICAgICAgQ29udkRpdlJlZi5jdXJyZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuXG4gICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICAgICBzZXRIYXNFcnJvcih0cnVlKTtcblxuICAgICAgfSk7XG4gICB9XG5cbiAgIGlmIChoYXNFcnJvcikgcmV0dXJuICg8cD5vb3BzIHNvbWV0aGluZyB3ZW50IHdyb25nPC9wPik7XG5cbiAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgPGgzPlJlcXVlc3QgV2l0aGRyYXdhbDwvaDM+XG4gICAgICAgICA8cD5QbGVhc2UgZW50ZXIgYSB3aXRoZHJhd2FsIGFtb3VudCBhbmQgY29udmVydCB0byBHQlA6PC9wPlxuICAgICAgICAgPHA+WW91ciBhY2NvdW50IGJhbGFuY2UgaXMgJHtwcm9wcy5tYXh9PC9wPlxuICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e0NvbmZpcm1BbmRDb252ZXJ0VXNkfT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiVXNkV2l0aGRyYXdBbW91bnRcIj5XaXRoZHJhd2FsIEFtb3VudCBJbiBVU0QoJCk8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHJlZj17SW5wdXRSZWZ9IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJVc2RXaXRoZHJhd0Ftb3VudFwiIG5hbWU9XCJVc2RXaXRoZHJhd0Ftb3VudFwiIG1heExlbmd0aD1cIjhcIiBvbkNoYW5nZT17d2l0aGRyYXdhbElucHV0Q2hhbmdlSGFuZGxlcn0gdmFsdWU9e3VzZFdpdGhkcmF3QW1vdW50fS8+XG4gICAgICAgICAgICB7aXNJbnB1dFZhbGlkICYmIDxidXR0b24gcmVmPXtDb252ZXJ0QnV0dG9uUmVmfSBpZD1cImNvbnZlcnQtYnRuXCIgb25DbGljaz17Q29uZmlybUFuZENvbnZlcnRVc2R9PkNvbnZlcnQ8L2J1dHRvbj59XG4gICAgICAgICA8L2Zvcm0+XG4gICAgICAgICB7ZXhjZWVkc0JhbGFuY2UgJiYgPHNwYW4+QW1vdW50IGVudGVyZWQgZXhjZWVkcyBhY2NvdW50IGJhbGFuY2U8L3NwYW4+fVxuICAgICAgICAgeyFpc01vcmVUaGFuTWluICYmIDxzcGFuPkFtb3VudCBuZWVkcyB0byBlcXVhbCAkMjAgb3IgbW9yZTwvc3Bhbj59XG4gICAgICAgICA8YnV0dG9uIHJlZj17TWF4QnV0dG9uUmVmfSBvbkNsaWNrPXtzZXRUb01heH0gPk1heDwvYnV0dG9uPlxuXG4gICAgICAgICA8ZGl2IHJlZj17Q29udkRpdlJlZn0gPjwvZGl2PlxuICAgICAgICAge2lzTG9hZGluZyAmJlxuICAgICAgICAgICAgPFByb3BhZ2F0ZUxvYWRlciBjb2xvcj17XCIjNWY2NmU2XCJ9IHNpemU9ezI1fSBhcmlhLWxhYmVsPVwiTG9hZGluZyBTcGlubmVyXCIgZGF0YS10ZXN0aWQ9XCJsb2FkZXJcIi8+XG4gICAgICAgICB9XG4gICAgICAgICB7aXNJbnB1dFZhbGlkICYmIHZhbHVlVmFsaWQgJiZcbiAgICAgICAgICAgIDxDb250aW51ZVJlc2V0QnV0dG9ucyBsaW5rPXsnL3dpdGhkcmF3L3dpdGhkcmF3LWRldGFpbHMnfSBoYW5kbGVDb252ZXJzaW9uUmVzZXQ9e2hhbmRsZUNvbnZlcnNpb25SZXNldH0vPlxuICAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXaXRoZHJhd0lucHV0cztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIENvbnRpbnVlUmVzZXRCdXR0b25zKHByb3BzKSB7XG4gICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgIDxhIGlkPVwiY29uZmlybS1jb250aW51ZS1idG5cIiBocmVmPXtwcm9wcy5saW5rfSA+Q29udGludWU8L2E+XG4gICAgICAgICA8YnV0dG9uIGlkPVwicmVzZXQtYnRuXCIgb25DbGljaz17cHJvcHMuaGFuZGxlQ29udmVyc2lvblJlc2V0fT5SZXNldDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb250aW51ZVJlc2V0QnV0dG9uczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBGb3JtKHByb3BzKSB7XG4gICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e0NvbmZpcm1BbmRDb252ZXJ0R2JwfT5cbiAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiR2JwRGVwb3NpdEFtb3VudFwiPkRlcG9zaXQgQW1vdW50IGluIEdCUCjCoyk8L2xhYmVsPlxuICAgICAgICAgPGlucHV0IHJlZj17SW5wdXRSZWZ9IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJHYnBEZXBvc2l0QW1vdW50XCIgbmFtZT1cIkdicERlcG9zaXRBbW91bnRcIiBtYXhMZW5ndGg9XCI4XCIgb25DaGFuZ2U9e3Byb3BzLnNldEdicERlcG9zaXRBbW91bnRIYW5kbGVyfSB2YWx1ZT17cHJvcHMuZ2JwRGVwb3NpdEFtb3VudH0vPlxuICAgICAgICAgPGJ1dHRvbiByZWY9e0J1dHRvblJlZn0gaWQ9XCJjb252ZXJ0LWJ0blwiIG9uQ2xpY2s9e3Byb3BzLkNvbmZpcm1BbmRDb252ZXJ0R2JwfSA+Q29udmVydDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBUcmFuc2FjdGlvbkl0ZW0ocHJvcHMpIHtcbiAgIHJldHVybiAoXG4gICAgICA8dGJvZHk+XG4gICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+e3Byb3BzLmlkfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+JHtwcm9wcy51c2R9PC90ZD5cbiAgICAgICAgICAgIDx0ZD7Co3twcm9wcy5nYnB9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57cHJvcHMudGltZXN0YW1wfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3Byb3BzLmlzVmVyaWZpZWQgPyAndmVyaWZpZWQnIDogJ25vdCB2ZXJpZmllZCd9PC90ZD5cbiAgICAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb25JdGVtOyIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbi8vIGFzc2V0cy9hcHAuanNcbmltcG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gJ0BzeW1mb255L3V4LXJlYWN0JztcblxuLy8gUmVnaXN0ZXJzIFJlYWN0IGNvbnRyb2xsZXIgY29tcG9uZW50cyB0byBhbGxvdyBsb2FkaW5nIHRoZW0gZnJvbSBUd2lnXG4vL1xuLy8gUmVhY3QgY29udHJvbGxlciBjb21wb25lbnRzIGFyZSBjb21wb25lbnRzIHRoYXQgYXJlIG1lYW50IHRvIGJlIHJlbmRlcmVkXG4vLyBmcm9tIFR3aWcuIFRoZXNlIGNvbXBvbmVudCB0aGVuIHJlbHkgb24gb3RoZXIgY29tcG9uZW50cyB0aGF0IHdvbid0IGJlIGNhbGxlZFxuLy8gZGlyZWN0bHkgZnJvbSBUd2lnLlxuLy9cbi8vIEJ5IHB1dHRpbmcgb25seSBjb250cm9sbGVyIGNvbXBvbmVudHMgaW4gYHJlYWN0L2NvbnRyb2xsZXJzYCwgeW91IGVuc3VyZSB0aGF0XG4vLyBpbnRlcm5hbCBjb21wb25lbnRzIHdvbid0IGJlIGF1dG9tYXRpY2FsbHkgaW5jbHVkZWQgaW4geW91ciBKUyBidWlsdCBmaWxlIGlmXG4vLyB0aGV5IGFyZSBub3QgbmVjZXNzYXJ5LlxucmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dCgnLi9yZWFjdC9jb250cm9sbGVycycsIHRydWUsIC9cXC4oanx0KXN4PyQvKSk7XG5cblxuXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9yZWFjdC9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiX3NsaWNlZFRvQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwibyIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibiIsInRvU3RyaW5nIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImxlbiIsImFycjIiLCJfaSIsIl9zIiwiX2UiLCJfeCIsIl9yIiwiX2FyciIsIl9uIiwiX2QiLCJpc0FycmF5IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIlByb3BhZ2F0ZUxvYWRlciIsIkNvbnRpbnVlUmVzZXRCdXR0b25zIiwiRm9ybSIsIkRlcG9zaXRJbnB1dHMiLCJCdXR0b25SZWYiLCJJbnB1dFJlZiIsIkNvbnZEaXZSZWYiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiZ2JwRGVwb3NpdEFtb3VudCIsInNldEdicERlcG9zaXRBbW91bnQiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImlzR2JwVmFsaWQiLCJzZXRJc0dicFZhbGlkIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJjb252ZXJzaW9uRmV0Y2hlZCIsInNldENvbnZlcnNpb25GZXRjaGVkIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJoYXNFcnJvciIsInNldEhhc0Vycm9yIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTEwIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY2hlY2tHYnBJc1ZhbGlkIiwic3dpdGNoQnV0dG9ucyIsImJvb2wiLCJjdXJyZW50IiwiZGlzYWJsZWQiLCJ2YWxpZGF0ZUFuZFNldEdicCIsInBhdHRlcm4iLCJzdHJpcHBlZFZhbCIsInJlcGxhY2UiLCJmb3JtYXR0ZWRWYWx1ZSIsIk51bWJlciIsInRvTG9jYWxlU3RyaW5nIiwicmV0cmlldmVVc2RDb252ZXJzaW9uIiwiX3gyIiwiX3JldHJpZXZlVXNkQ29udmVyc2lvbiIsIl9jYWxsZWUiLCJldmVudCIsInJlc3BvbnNlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwidDAiLCJjb25zb2xlIiwiQ29uZmlybUFuZENvbnZlcnRHYnAiLCJpbm5lckhUTUwiLCJkYXRhIiwibG9nIiwidXNkIiwiZ2JwIiwibmV3RWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiY29uY2F0IiwiYXBwZW5kQ2hpbGQiLCJzZXRHYnBEZXBvc2l0QW1vdW50SGFuZGxlciIsInRhcmdldCIsImhhbmRsZUNvbnZlcnNpb25SZXNldCIsIm9uU3VibWl0IiwiaHRtbEZvciIsInJlZiIsImlkIiwibWF4TGVuZ3RoIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwiY29sb3IiLCJzaXplIiwibGluayIsInVzZU1lbW8iLCJUcmFuc2FjdGlvbkl0ZW0iLCJUcmFuc2FjdGlvbkhpc3RvcnkiLCJfcmVmIiwiZGVwb3NpdHMiLCJ3aXRoZHJhd2FscyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJoYW5kbGVTZWxlY3RDaGFuZ2UiLCJ0cmFuc2FjdGlvbkxpc3QiLCJ0cmFuc2FjdGlvbnMiLCJtYXAiLCJ0cmFuc2FjdGlvbiIsImluZGV4IiwidXNkX2Ftb3VudCIsImdicF9hbW91bnQiLCJ0aW1lc3RhbXAiLCJkYXRlIiwibWF0Y2giLCJyZXBlYXQiLCJpc1ZlcmlmaWVkIiwiaXNfdmVyaWZpZWQiLCJocmVmIiwiV2l0aGRyYXdJbnB1dHMiLCJwcm9wcyIsIkNvbnZlcnRCdXR0b25SZWYiLCJNYXhCdXR0b25SZWYiLCJ1c2RXaXRoZHJhd0Ftb3VudCIsInNldFVzZFdpdGhkcmF3QW1vdW50IiwiZXhjZWVkc0JhbGFuY2UiLCJzZXRFeGNlZWRzQmFsYW5jZSIsImlzTW9yZVRoYW5NaW4iLCJzZXRJc01vcmVUaGFuTWluIiwidmFsdWVWYWxpZCIsInNldFZhbHVlVmFsaWQiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwiaXNJbnB1dFZhbGlkIiwiY2hlY2tVc2RJc1ZhbGlkIiwibWF4IiwiZGlzYWJsZUlucHV0IiwidmFsaWRhdGVBbmRTZXRVc2QiLCJzZXRUb01heCIsIndpdGhkcmF3YWxJbnB1dENoYW5nZUhhbmRsZXIiLCJmZXRjaERhdGEiLCJfZmV0Y2hEYXRhIiwiQ29uZmlybUFuZENvbnZlcnRVc2QiLCJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCJdLCJzb3VyY2VSb290IjoiIn0=