"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalDeleteConfirm;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Modal = _interopRequireDefault(require("@material-ui/core/Modal"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _icons = require("@material-ui/icons/");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    paper: {
      position: "absolute",
      width: 600,
      backgroundColor: theme.palette.primary.main,
      color: "white",
      boxShadow: theme.shadows[5],
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      outline: "none",
      padding: "10px"
    }
  };
});

function ModalDeleteConfirm(_ref) {
  var removeResource = _ref.removeResource,
      r = _ref.r,
      enqueueSnackbar = _ref.enqueueSnackbar,
      setSelected = _ref.setSelected,
      props = _objectWithoutProperties(_ref, ["removeResource", "r", "enqueueSnackbar", "setSelected"]);

  var classes = useStyles();

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  return /*#__PURE__*/_react.default.createElement("div", null, props.buttonComponent ? /*#__PURE__*/_react.default.cloneElement(props.buttonComponent, {
    onClick: handleOpen
  }) : /*#__PURE__*/_react.default.createElement(_icons.Delete, {
    fontSize: "small",
    onClick: handleOpen
  }), /*#__PURE__*/_react.default.createElement(_Modal.default, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "simple-modal-title",
    "aria-describedby": "simple-modal-description"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.paper
  }, /*#__PURE__*/_react.default.createElement("p", null, " \xBFEst\xE1 seguro que desea eliminar el elemento? "), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    color: "secondary",
    onClick: function onClick() {
      removeResource(props, r, enqueueSnackbar, setSelected);
      handleClose();
    }
  }, "Confirmar"), "  ", /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    color: "default",
    onClick: handleClose
  }, "Cancelar"))));
}