webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layouts/BaseLayout */ "./components/layouts/BaseLayout.js");
/* harmony import */ var _components_shared_SuperComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/shared/SuperComponent */ "./components/shared/SuperComponent.js");







var _jsxFileName = "/Users/hackintosh/Development/Projects/NextJS Portfolio/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var Index =
/*#__PURE__*/
function (_SuperComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _SuperComponent);

  function Index() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    debugger;
    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "updateTitle", function () {
      _this.setState({
        title: 'I am updated Index Page'
      });
    });

    debugger;
    _this.state = {
      title: 'I am Index Page'
    };
    console.log('constructor');
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('componentDidMount');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log('componentDidUpdate');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('componentWillUnmount');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log('render');
      return __jsx(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("h1", {
        className: "fromPage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "I am index page from Class Component"), __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, " ", this.state.title, " "), __jsx("button", {
        onClick: function onClick() {
          return _this2.updateTitle();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, " Change Title"));
    }
  }]);

  return Index;
}(_components_shared_SuperComponent__WEBPACK_IMPORTED_MODULE_9__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Index); // Sending Props (props.children renders in Header.js as props)
// <Header title={'I am a header Component'}>
//   <h1> I am header subtitle </h1>
// </Header>

/***/ })

})
//# sourceMappingURL=index.js.c715886b281b2d1a6905.hot-update.js.map