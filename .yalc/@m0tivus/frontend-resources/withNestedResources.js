"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _icons = require("@material-ui/icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var withNestedResources = function withNestedResources(resources) {
  return function (WrappedComponent) {
    var WithNestedResources = function WithNestedResources(_ref) {
      var _ref$routeParams = _ref.routeParams,
          routeParams = _ref$routeParams === void 0 ? [] : _ref$routeParams,
          props = _objectWithoutProperties(_ref, ["routeParams"]);

      var history = (0, _reactRouterDom.useHistory)();
      var actions = resources.map(function (_ref2) {
        var name = _ref2.name,
            path = _ref2.path;
        return {
          icon: _icons.ArrowForward,
          tooltip: "Ver ".concat(name),
          onClick: function onClick(event, rowData) {
            return history.push(path(rowData, routeParams));
          }
        };
      });
      return /*#__PURE__*/_react.default.createElement(WrappedComponent, _extends({
        nestedResourceActions: actions,
        routeParams: routeParams
      }, props));
    };

    return WithNestedResources;
  };
};

var _default = withNestedResources;
exports.default = _default;