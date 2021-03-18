"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _PageContainer = _interopRequireDefault(require("./PageContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    return AsPage;
  };
};

var _default = asPage;
exports.default = _default;