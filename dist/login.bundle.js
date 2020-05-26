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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Src/Scss/main.scss":
/*!****************************!*\
  !*** ./Src/Scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Src/Scss/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./Src/Scss/main.scss?");

/***/ }),

/***/ "./Src/javascript/Modules/checkForm.js":
/*!*********************************************!*\
  !*** ./Src/javascript/Modules/checkForm.js ***!
  \*********************************************/
/*! exports provided: CheckForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CheckForm\", function() { return CheckForm; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CheckForm = /*#__PURE__*/function () {\n  function CheckForm() {\n    _classCallCheck(this, CheckForm);\n\n    this.icons = document.querySelectorAll(\".show-hidden-icon\");\n    this.email = document.getElementById(\"email\");\n    this.password = document.getElementById(\"password\");\n    this.password2 = document.getElementById(\"password2\");\n    this.loginButton = document.getElementById(\"login-button\");\n    this.registerButton = document.getElementById(\"register-button\");\n    this.init();\n  }\n\n  _createClass(CheckForm, [{\n    key: \"init\",\n    value: function init() {\n      this.showOrHidePassword();\n      this.formValid();\n    }\n  }, {\n    key: \"formValid\",\n    value: function formValid() {\n      var _this = this;\n\n      // For Register Page\n      if (this.registerButton) {\n        this.registerButton.addEventListener(\"click\", function () {\n          _this.checkRequired([_this.email, _this.password, _this.password2]);\n\n          _this.checkLength(_this.password, 6, 25);\n\n          _this.checkLength(_this.password2, 6, 25);\n\n          _this.checkEmail();\n\n          _this.checkPasswordsMatch();\n        });\n      } // For Login Page\n\n\n      if (this.loginButton) {\n        this.loginButton.addEventListener(\"click\", function () {\n          _this.checkRequired([_this.email, _this.password]);\n\n          _this.checkLength(_this.password, 6, 25);\n\n          _this.checkEmail();\n        });\n      }\n    } // Check Empty inputs\n\n  }, {\n    key: \"checkRequired\",\n    value: function checkRequired(inputArr) {\n      var _this2 = this;\n\n      inputArr.forEach(function (input) {\n        input.value === \"\" ? _this2.showError(input, \"\".concat(_this2.getFieldName(input), \" is required!\")) : _this2.showSuccess(input);\n      });\n    } // Check Length --Global--\n\n  }, {\n    key: \"checkLength\",\n    value: function checkLength(input, min, max) {\n      input.value.length < min && this.showError(input, \"\".concat(this.getFieldName(input), \" must contain a min of \").concat(min, \" characters\"));\n      input.value.length > max && this.showError(input, \"\".concat(this.getFieldName(input), \" must contain a max of \").concat(max, \" characters\"));\n    } // First Letter to Uppercase\n\n  }, {\n    key: \"getFieldName\",\n    value: function getFieldName(input) {\n      var id = input.id.charAt(0).toUpperCase() + input.id.slice(1);\n      return id;\n    } // Match passwords\n\n  }, {\n    key: \"checkPasswordsMatch\",\n    value: function checkPasswordsMatch() {\n      this.password.value.trim() !== this.password2.value.trim() && this.showError(this.password2, \"Passwords doesn't match!\");\n    } // Email valid\n\n  }, {\n    key: \"checkEmail\",\n    value: function checkEmail() {\n      var input = this.email;\n      var re = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n      re.test(input.value.trim()) ? this.showSuccess : this.showError(input, \"Email not valid\");\n    } // --Global-- Success Message\n\n  }, {\n    key: \"showSuccess\",\n    value: function showSuccess(input) {\n      var formItem = input.parentElement.parentElement;\n      formItem.className = \"form-item success\";\n    } // --Global --Error Message\n\n  }, {\n    key: \"showError\",\n    value: function showError(input, errorMessage) {\n      var formItem = input.parentElement.parentElement;\n      formItem.className = \"form-item error\";\n      var small = formItem.querySelector(\"small\");\n      small.innerText = errorMessage;\n    } // Eye icon in the form\n\n  }, {\n    key: \"showOrHidePassword\",\n    value: function showOrHidePassword() {\n      this.icons.forEach(function (icon) {\n        icon.addEventListener(\"click\", function (e) {\n          var input = e.target.previousElementSibling;\n          input.type === \"password\" ? (input.type = \"text\", e.target.className = \"fa fa-eye show-hidden-icon show\") : (input.type = \"password\", e.target.className = \"fa fa-eye-slash show-hidden-icon\");\n        });\n      });\n    }\n  }]);\n\n  return CheckForm;\n}();\n\n//# sourceURL=webpack:///./Src/javascript/Modules/checkForm.js?");

/***/ }),

/***/ "./Src/javascript/Modules/login.js":
/*!*****************************************!*\
  !*** ./Src/javascript/Modules/login.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Scss/main.scss */ \"./Src/Scss/main.scss\");\n/* harmony import */ var _Scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebaseConfig_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebaseConfig/config */ \"./Src/javascript/firebaseConfig/config.js\");\n/* harmony import */ var _checkForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkForm */ \"./Src/javascript/Modules/checkForm.js\");\n/* harmony import */ var _loginFirebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loginFirebase */ \"./Src/javascript/Modules/loginFirebase.js\");\n\n\n\n\nwindow.addEventListener(\"load\", function () {\n  new _checkForm__WEBPACK_IMPORTED_MODULE_2__[\"CheckForm\"]();\n  new _loginFirebase__WEBPACK_IMPORTED_MODULE_3__[\"LoginFirebase\"](_firebaseConfig_config__WEBPACK_IMPORTED_MODULE_1__[\"firebaseConfig\"]);\n});\n\n//# sourceURL=webpack:///./Src/javascript/Modules/login.js?");

/***/ }),

/***/ "./Src/javascript/Modules/loginFirebase.js":
/*!*************************************************!*\
  !*** ./Src/javascript/Modules/loginFirebase.js ***!
  \*************************************************/
/*! exports provided: LoginFirebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginFirebase\", function() { return LoginFirebase; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar LoginFirebase = /*#__PURE__*/function () {\n  function LoginFirebase(config) {\n    _classCallCheck(this, LoginFirebase);\n\n    this.config = firebase.initializeApp(config);\n    this.password = document.getElementById(\"password\");\n    this.loginBtn = document.getElementById(\"login-button\");\n    this.email = document.getElementById(\"email\");\n    this.init();\n  }\n\n  _createClass(LoginFirebase, [{\n    key: \"init\",\n    value: function init() {\n      this.loginFirebase();\n    }\n  }, {\n    key: \"loginFirebase\",\n    value: function loginFirebase() {\n      var _this = this;\n\n      this.loginBtn.addEventListener(\"click\", function () {\n        firebase.auth().signInWithEmailAndPassword(_this.email.value, _this.password.value).then(function () {\n          window.location.href = \"index.html\";\n        })[\"catch\"](function (err) {\n          return console.log(err);\n        });\n      });\n    }\n  }]);\n\n  return LoginFirebase;\n}();\n\n//# sourceURL=webpack:///./Src/javascript/Modules/loginFirebase.js?");

/***/ }),

/***/ "./Src/javascript/firebaseConfig/config.js":
/*!*************************************************!*\
  !*** ./Src/javascript/firebaseConfig/config.js ***!
  \*************************************************/
/*! exports provided: firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firebaseConfig\", function() { return firebaseConfig; });\nvar firebaseConfig = {\n  apiKey: \"AIzaSyAsEJwJXyjb9bJ1zfu_FTBvADgAqCaw4qo\",\n  authDomain: \"todo-app-36b5c.firebaseapp.com\",\n  databaseURL: \"https://todo-app-36b5c.firebaseio.com\",\n  projectId: \"todo-app-36b5c\",\n  storageBucket: \"todo-app-36b5c.appspot.com\",\n  messagingSenderId: \"370374245151\",\n  appId: \"1:370374245151:web:35802084848872d3c78e2a\",\n  measurementId: \"G-40MS5J1MJ5\"\n};\n\n//# sourceURL=webpack:///./Src/javascript/firebaseConfig/config.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Src/Scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Src/Scss/main.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,400&display=swap);\"]);\n// Module\nexports.push([module.i, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box; }\\n\\nbody {\\n  font-family: 'Open Sans', sans-serif; }\\n\\n::placeholder {\\n  color: #bdc3c7; }\\n\\n.button {\\n  display: block;\\n  width: 100%;\\n  text-transform: uppercase;\\n  text-align: center;\\n  padding: 10px 20px;\\n  background-color: #00b894;\\n  color: #fff !important;\\n  outline: 0 !important;\\n  border-radius: 7px;\\n  cursor: pointer;\\n  transition-property: all;\\n  transition-duration: 0.3s;\\n  transition-timing-function: ease; }\\n  .button:hover {\\n    color: #130f40 !important;\\n    background-color: #ced6e0; }\\n\\n.form-container {\\n  background-color: #fff;\\n  border-radius: 10px;\\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\\n  width: 450px;\\n  padding: 20px; }\\n  .form-container .form-title {\\n    text-align: center;\\n    padding: 20px 0; }\\n  .form-container .form-item {\\n    position: relative;\\n    margin: 30px 0;\\n    display: flex;\\n    flex-direction: column; }\\n    .form-container .form-item label {\\n      font-size: 12px; }\\n    .form-container .form-item input {\\n      border: 0;\\n      outline: none;\\n      font-size: 14px;\\n      width: 90%; }\\n    .form-container .form-item small {\\n      visibility: hidden; }\\n    .form-container .form-item i {\\n      color: #130f40; }\\n  .form-container .input-box {\\n    border-bottom: 1px solid #2e86de; }\\n    .form-container .input-box .show-hidden-icon {\\n      position: absolute;\\n      right: 0;\\n      cursor: pointer; }\\n      .form-container .input-box .show-hidden-icon.show {\\n        color: #2e86de; }\\n\\n.form-item.success .input-box {\\n  border-color: #2ecc71; }\\n\\n.form-item.error .input-box {\\n  border-color: #c0392b; }\\n\\n.form-item.error small {\\n  visibility: visible;\\n  color: #c0392b; }\\n\\n.todo-container {\\n  width: 60%;\\n  margin: 20px auto;\\n  overflow: hidden; }\\n  .todo-container .todo-up {\\n    color: #130f40;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    background: #00b894; }\\n    .todo-container .todo-up-title {\\n      text-transform: uppercase;\\n      font-size: 1.8rem;\\n      padding-left: 10px; }\\n    .todo-container .todo-up-icon {\\n      background-color: #4b4b4b;\\n      padding: 22px; }\\n      .todo-container .todo-up-icon i {\\n        cursor: pointer;\\n        font-size: 1.8rem;\\n        transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }\\n        .todo-container .todo-up-icon i.clicked {\\n          transform: rotate(135deg); }\\n  .todo-container .todo-center {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-wrap: wrap;\\n    width: 80%;\\n    margin: 20px auto;\\n    display: none;\\n    text-align: center; }\\n    .todo-container .todo-center.active {\\n      display: flex; }\\n    .todo-container .todo-center select {\\n      padding: 3px;\\n      border-radius: 0;\\n      outline: 0;\\n      font-size: .9rem;\\n      border-color: #ced6e0;\\n      background-color: transparent;\\n      color: #fff; }\\n    .todo-container .todo-center label {\\n      font-style: italic;\\n      color: #c23616; }\\n    .todo-container .todo-center input {\\n      border: 0;\\n      border-bottom: 1px solid #ced6e0;\\n      outline: 0;\\n      background-color: transparent;\\n      color: #fff; }\\n    .todo-container .todo-center .todo-item {\\n      display: flex;\\n      flex-direction: column;\\n      width: 30%;\\n      padding-right: 20px; }\\n    .todo-container .todo-center-description {\\n      width: 100%;\\n      display: flex;\\n      flex-direction: column;\\n      margin: 20px 0; }\\n    .todo-container .todo-center-button {\\n      background-color: #c23616;\\n      padding: 10px 30px;\\n      color: #fff;\\n      font-size: 14px;\\n      text-transform: capitalize;\\n      transition: .3s ease background-color;\\n      min-width: 150px;\\n      text-align: center; }\\n      .todo-container .todo-center-button:hover {\\n        cursor: pointer;\\n        background-color: #ced6e0; }\\n      .todo-container .todo-center-button.active {\\n        display: none; }\\n  .todo-container .todo-bottom {\\n    margin-top: 50px;\\n    width: 100%; }\\n    .todo-container .todo-bottom .todo-item {\\n      position: relative;\\n      display: flex;\\n      align-items: center;\\n      justify-content: space-between;\\n      background-color: #00b894;\\n      border-radius: 5px;\\n      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\\n      padding: 5px 10px;\\n      border-left: 7px solid #c23616; }\\n      .todo-container .todo-bottom .todo-item-action {\\n        color: #c23616;\\n        font-weight: bold;\\n        font-size: 1.1rem;\\n        flex-basis: 100px; }\\n      .todo-container .todo-bottom .todo-item-date {\\n        color: #c23616;\\n        font-weight: bold;\\n        font-size: 1.1rem;\\n        flex-basis: 100px;\\n        text-align: right; }\\n      .todo-container .todo-bottom .todo-item-icons {\\n        position: absolute;\\n        top: 0;\\n        right: 0;\\n        width: 100%;\\n        height: 100%;\\n        background-color: #ced6e0;\\n        opacity: .8;\\n        display: flex;\\n        align-items: center;\\n        justify-content: space-evenly;\\n        visibility: hidden; }\\n        .todo-container .todo-bottom .todo-item-icons i {\\n          font-size: 1.56rem;\\n          color: #130f40; }\\n          .todo-container .todo-bottom .todo-item-icons i:hover {\\n            cursor: pointer;\\n            color: #00b894; }\\n      .todo-container .todo-bottom .todo-item .todoTitleAndDescription {\\n        display: flex;\\n        flex-flow: column wrap;\\n        flex-basis: 600px;\\n        align-items: center;\\n        text-align: center; }\\n        .todo-container .todo-bottom .todo-item .todoTitleAndDescription p {\\n          text-transform: capitalize;\\n          color: #ced6e0;\\n          font-size: 1.1rem;\\n          margin-bottom: 3px; }\\n        .todo-container .todo-bottom .todo-item .todoTitleAndDescription small {\\n          color: #130f40;\\n          font-size: 0.9rem; }\\n          .todo-container .todo-bottom .todo-item .todoTitleAndDescription small::first-letter {\\n            text-transform: uppercase; }\\n\\n.todo-item:hover .todo-item-icons {\\n  visibility: visible; }\\n\\n@media only screen and (max-width: 576px) {\\n  html {\\n    font-size: 13px; }\\n  .todo-container {\\n    width: 95% !important; }\\n    .todo-container .todo-center {\\n      width: 100%; }\\n    .todo-container .todoTitleAndDescription {\\n      padding: 0 6px; }\\n  .form-container {\\n    width: 95% !important; }\\n  ::placeholder {\\n    font-size: 13px; } }\\n\\n@media only screen and (max-width: 992px) {\\n  .todo-container {\\n    width: 85%; }\\n  .form-container {\\n    width: 60%; } }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./Src/Scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ 2:
/*!***********************************************!*\
  !*** multi ./Src/javascript/Modules/login.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./Src/javascript/Modules/login.js */\"./Src/javascript/Modules/login.js\");\n\n\n//# sourceURL=webpack:///multi_./Src/javascript/Modules/login.js?");

/***/ })

/******/ });