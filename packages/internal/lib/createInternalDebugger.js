"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sentenceCase = sentenceCase;
exports.default = createInternalDebugger;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function _react() {
    return data;
  };

  return data;
}

function _debug() {
  const data = _interopRequireDefault(require("debug"));

  _debug = function _debug() {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sentenceCase(value) {
  return String(value).replace(/[A-Z]/gu, match => ` ${match.toLocaleLowerCase()}`).trim();
}

_debug().default.formatters.S = sentenceCase;

function createInternalDebugger(namespace) {
  return (0, _debug().default)(`boost:${namespace}`);
}