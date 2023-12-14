/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/validation_cpf.js":
/*!*******************************!*\
  !*** ./src/validation_cpf.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidatorCPF: () => (/* binding */ ValidatorCPF)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ValidatorCPF = /*#__PURE__*/function () {
  function ValidatorCPF(cpf) {
    _classCallCheck(this, ValidatorCPF);
    Object.defineProperty(this, 'cpfClean', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpf.replace(/\D+/g, '')
    });
  }
  _createClass(ValidatorCPF, [{
    key: "validated",
    value: function validated() {
      if (typeof this.cpfClean === 'undefined' || this.cpfClean.length < 11) return false;
      var cpfArray = Array.from(this.cpfClean.slice(0, 9));
      var firstDigit = this.reduceDigit(cpfArray);
      var scondDigit = this.reduceDigit(cpfArray);
      if (Number(this.cpfClean.slice(9, 11)) === firstDigit * 10 + scondDigit) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "reduceDigit",
    value: function reduceDigit(array) {
      var multiplier = array.length;
      var digit = 11 - array.reduce(function (ac, val) {
        var digit = Number(val) * (multiplier + 1);
        multiplier--;
        return ac + digit;
      }, 0) % 11;
      array.push(digit > 9 ? 0 : digit);
      return digit;
    }
  }]);
  return ValidatorCPF;
}();

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/form_validation.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validation_cpf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation_cpf */ "./src/validation_cpf.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var ValidedForm = /*#__PURE__*/function () {
  function ValidedForm() {
    _classCallCheck(this, ValidedForm);
    this.form = document.getElementById('form');
    this.event = this.events();
  }
  _createClass(ValidedForm, [{
    key: "events",
    value: function events() {
      var _this = this;
      this.form.addEventListener('submit', function (e) {
        _this.handleSubmit(e);
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var fieldsValid = this.isValid();
      var keysValid = this.passwordValid();
      if (fieldsValid && keysValid) {
        alert('Cadastro feito com sucesso!!');
        this.form.submit();
      }
    }
  }, {
    key: "passwordValid",
    value: function passwordValid() {
      var valid = true;
      var password = document.getElementById("password");
      var samePassword = document.getElementById("password-confirmation");
      if (password.value !== samePassword.value) {
        this.msgError(samePassword, "As senhas precisam ser iguais");
        valid = false;
      }
      if (password.value.length < 6 || password.value.length > 12) {
        this.msgError(password, "A senha precisa estar entre 6 e 12 caracteres");
        valid = false;
      }
      if (valid) {
        samePassword.parentElement.classList.add('success');
        password.parentElement.classList.add('success');
      }
      return valid;
    }
  }, {
    key: "isValid",
    value: function isValid() {
      var valid = true;
      this.form.querySelectorAll('.success, .error').forEach(function (element) {
        element.classList.remove('success');
        element.classList.remove('error');
        element.querySelector('small').innerText = '';
      });
      var _iterator = _createForOfIteratorHelper(this.form.querySelectorAll('.valided')),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var field = _step.value;
          var label = field.previousElementSibling.innerText;
          if (!field.value) {
            this.msgError(field, "\"".concat(label, "\" n\xE3o p\xF4de estar em branco"));
            valid = false;
          } else if (field.id === 'username' || field.id === 'surname') {
            field.parentElement.classList.add('success');
          }
          if (field.id === 'cpf') {
            if (!this.validedCpf(field)) valid = false;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return valid;
    }
  }, {
    key: "validedCpf",
    value: function validedCpf(field) {
      var cpf = new _validation_cpf__WEBPACK_IMPORTED_MODULE_0__.ValidatorCPF(field.value);
      if (!cpf.validated()) {
        this.msgError(field, '"CPF" inválido');
        return false;
      }
      field.parentElement.classList.add('success');
      return true;
    }
  }, {
    key: "msgError",
    value: function msgError(element, msg) {
      var tagMsg = element.parentElement.querySelector('small');
      element.parentElement.classList.add('error');
      tagMsg.innerHTML += "".concat(msg, "<br/>");
    }
  }]);
  return ValidedForm;
}();
var valided = new ValidedForm();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map