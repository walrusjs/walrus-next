"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = env;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function _react() {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let envVars = {};

if (typeof global.process !== 'undefined') {
  envVars = process.env;
} else if (typeof global.window !== 'undefined') {
  // @ts-expect-error
  envVars = window;
}

function env(key, value) {
  const name = `BOOSTJS_${key}`;

  if (value === null) {
    delete envVars[name];
    return undefined;
  }

  if (typeof value === 'string') {
    envVars[name] = value;
    return value;
  }

  return envVars[name];
}