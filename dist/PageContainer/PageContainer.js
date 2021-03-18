"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    grid: _defineProperty({
      width: 1200,
      marginTop: 40
    }, theme.breakpoints.down('sm'), {
      width: 'calc(100% - 20px)'
    }),
    paper: {
      padding: theme.spacing(3),
      textAlign: 'left',
      color: theme.palette.text.secondary
    }
  };
};

var PageContainer = function PageContainer(_ref) {
  var children = _ref.children,
      classes = _ref.classes;
  return /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    spacing: 4,
    alignItems: "center",
    container: true,
    className: classes.grid
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    md: 12
  }, /*#__PURE__*/_react.default.createElement(_core.Paper, {
    className: classes.paper
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    spacing: 2
  }, children)))));
};

var _default = (0, _styles.withStyles)(styles)(PageContainer);

exports.default = _default;