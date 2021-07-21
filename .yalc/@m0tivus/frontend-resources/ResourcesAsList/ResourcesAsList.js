"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ArrowDropDown = _interopRequireDefault(require("@material-ui/icons/ArrowDropDown"));

var _core = require("@material-ui/core");

var _ResourcesModalForm = _interopRequireDefault(require("../ResourcesModalForm/ResourcesModalForm"));

var _ModalDeleteConfirm = _interopRequireDefault(require("../ModalDeleteConfirm/ModalDeleteConfirm"));

var _notistack = require("notistack");

var _clsx = _interopRequireDefault(require("clsx"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    dropdownButton: {
      width: 5
    },
    resourceName: {
      textTransform: "none"
    },
    container: {
      padding: theme.spacing(1)
    },
    containerList: {
      width: "100%",
      height: "100%"
    },
    fixedHeight: {
      position: "absolute",
      height: "100%",
      overflowX: "hidden",
      overlflowY: "scroll"
    }
  };
});

function removeResource(_x, _x2, _x3, _x4) {
  return _removeResource.apply(this, arguments);
}

function _removeResource() {
  _removeResource = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(props, resource, enqueueSnackbar, setSelected) {
    var _props$model;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (_props$model = props.model).remove.apply(_props$model, _toConsumableArray(props.parentSelections || []).concat([resource.id]));

          case 2:
            //añadir error
            setSelected(undefined);
            _context.next = 5;
            return props.refreshData();

          case 5:
            enqueueSnackbar("Se eliminó con éxito", {
              variant: "success",
              anchorOrigin: {
                vertical: "top",
                horizontal: "center"
              }
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _removeResource.apply(this, arguments);
}

var ResourceListItem = function ResourceListItem(_ref) {
  var setSelected = _ref.setSelected,
      resource = _ref.resource,
      isSelected = _ref.isSelected,
      modalMode = _ref.modalMode,
      props = _objectWithoutProperties(_ref, ["setSelected", "resource", "isSelected", "modalMode"]);

  var classes = useStyles();

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var anchorRef = _react.default.useRef(null);

  var handleClick = function handleClick() {
    setSelected(resource.id);
  };

  var handleToggle = function handleToggle() {
    setOpen(function (prevOpen) {
      return !prevOpen;
    });
  };

  var handleClose = function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  var _useSnackbar = (0, _notistack.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  return /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 11
  }, /*#__PURE__*/_react.default.createElement(_core.ButtonGroup, {
    variant: "contained",
    color: isSelected ? "primary" : "secondary",
    ref: anchorRef,
    "aria-label": "split button",
    size: "small",
    fullWidth: true
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    onClick: handleClick,
    className: classes.resourceName
  }, props.model.customName ? props.model.customName(resource) : resource.name), !props.listOnly && /*#__PURE__*/_react.default.createElement(_core.Button, {
    "aria-controls": open ? "split-button-menu" : undefined,
    "aria-expanded": open ? "true" : undefined,
    "aria-label": "select merge strategy",
    "aria-haspopup": "menu",
    onClick: handleToggle,
    className: classes.dropdownButton
  }, /*#__PURE__*/_react.default.createElement(_ArrowDropDown.default, null))), !props.listOnly && /*#__PURE__*/_react.default.createElement(_core.Popper, {
    open: open,
    anchorEl: anchorRef.current,
    role: undefined,
    transition: true,
    disablePortal: true,
    style: {
      zIndex: 10
    }
  }, function (_ref2) {
    var TransitionProps = _ref2.TransitionProps,
        placement = _ref2.placement;
    return /*#__PURE__*/_react.default.createElement(_core.Grow, _extends({}, TransitionProps, {
      style: {
        transformOrigin: placement === "bottom" ? "center top" : "center bottom"
      }
    }), /*#__PURE__*/_react.default.createElement(_core.Paper, null, /*#__PURE__*/_react.default.createElement(_core.ClickAwayListener, {
      onClickAway: handleClose
    }, /*#__PURE__*/_react.default.createElement(_core.MenuList, {
      id: "split-button-menu"
    }, /*#__PURE__*/_react.default.createElement(_ResourcesModalForm.default, _extends({
      mode: "edit",
      resource: resource,
      buttonComponent: /*#__PURE__*/_react.default.createElement(_core.MenuItem, null, "Editar"),
      resources: props.resources
    }, props)), /*#__PURE__*/_react.default.createElement(_ModalDeleteConfirm.default, _extends({
      removeResource: removeResource,
      r: resource,
      enqueueSnackbar: enqueueSnackbar,
      setSelected: setSelected,
      buttonComponent: /*#__PURE__*/_react.default.createElement(_core.MenuItem, null, "Eliminar")
    }, props))))));
  }));
};

function ResourcesAsList(_ref3) {
  var _ref3$resources = _ref3.resources,
      resources = _ref3$resources === void 0 ? [] : _ref3$resources,
      props = _objectWithoutProperties(_ref3, ["resources"]);

  var classes = useStyles();

  if (!props.enoughSelections) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(props.allowCreation && classes.fixedHeight, classes.containerList)
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    spacing: 1,
    justify: "center",
    className: classes.container
  }, resources.map(function (r) {
    return /*#__PURE__*/_react.default.createElement(ResourceListItem, _extends({
      key: r.id,
      resource: r,
      isSelected: (0, _lodash.default)(props.selected).isArray() ? (0, _lodash.default)(props.selected).indexOf(r.id) > -1 : props.selected === r.id
    }, props));
  }), !props.listOnly && /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 11
  }, props.enoughSelections ? /*#__PURE__*/_react.default.createElement(_ResourcesModalForm.default, _extends({
    mode: "create"
  }, props, {
    resources: resources
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null)))));
}

var _default = ResourcesAsList;
exports.default = _default;