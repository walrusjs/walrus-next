"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createScopedError;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function _react() {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const internalErrors = {
  INVALID_SCOPE_NAME: 'Error scope must be 3 characters and all uppercase.',
  UNKNOWN_ERROR: 'An unknown error has occurred.'
};
const TOKEN_PATTERN = /\{(\d+)\}/gu;

function createScopedError(scope, name, errors) {
  function msg(code, messages, params = []) {
    if (!messages[code]) {
      return '';
    }

    return `${messages[code].replace(TOKEN_PATTERN, (match, index) => String(params[index]))} [${scope}:${code}]`;
  } // @ts-ignore


  if (__DEV__) {
    if (scope.length !== 3 || scope !== scope.toUpperCase()) {
      throw new Error(msg('INVALID_SCOPE_NAME', internalErrors));
    }
  }

  return class InternalError extends Error {
    constructor(code, params) {
      super(msg(code, errors, params));
      this.scope = scope;
      this.code = code;
      this.name = name; // If a message was not loaded, we are throwing an unknown error

      if (!this.message) {
        this.code = 'UNKNOWN_ERROR';
        this.message = msg('UNKNOWN_ERROR', internalErrors);
      }
    }

  };
}