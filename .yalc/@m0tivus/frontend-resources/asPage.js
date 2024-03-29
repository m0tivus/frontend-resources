"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _PageContainer = _interopRequireDefault(require("./PageContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var asPage = function asPage(config) {
  return function (WrappedElement) {
    var AsPage = function AsPage(props) {
      return /*#__PURE__*/_react.default.createElement(_PageContainer.default, null, /*#__PURE__*/_react.default.createElement(_core.Grid, {
        item: true,
        md: 12
      }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
        container: true,
        spacing: 2
      }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
        item: true,
        md: 12
      }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
        gutterBottom: true,
        variant: "h4"
      }, config.title)), /*#__PURE__*/_react.default.createElement(_core.Grid, {
        item: true,
        md: 12
      }, /*#__PURE__*/_react.default.createElement(WrappedElement, props)))));
    };

    AsPage.propTypes = _objectSpread({}, WrappedElement.propTypes);
    return AsPage;
  };
};

var _default = asPage;
exports.default = _default;