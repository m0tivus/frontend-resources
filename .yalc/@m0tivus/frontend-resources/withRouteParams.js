"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var withRouteParams = function withRouteParams(params) {
  return function (WrappedComponent) {
    var WithRouteParams = function WithRouteParams(props) {
      var routeParams = (0, _reactRouterDom.useParams)();
      return /*#__PURE__*/_react.default.createElement(WrappedComponent, _extends({
        routeParams: (0, _lodash.default)(params).map(function (param) {
          return routeParams[param];
        }).value()
      }, props));
    };

    return WithRouteParams;
  };
};

var _default = withRouteParams;
exports.default = _default;