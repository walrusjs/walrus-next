"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function _react() {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-magic-numbers, sort-keys */
// https://github.com/chalk/ansi-styles/blob/master/index.js#L75
function createColor(open) {
  return message => `\u001B[${open}m${String(message)}\u001B[39m`;
}

var _default = {
  // States
  fail: createColor(31),
  mute: createColor(90),
  pass: createColor(32),
  // Types
  filePath: createColor(36),
  moduleName: createColor(33),
  projectName: createColor(34),
  symbol: createColor(35)
};
exports.default = _default;