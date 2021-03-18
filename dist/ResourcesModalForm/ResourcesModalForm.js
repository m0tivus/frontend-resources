"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ResourcesModalForm;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _Modal = _interopRequireDefault(require("@material-ui/core/Modal"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _formik = require("formik");

var _lodash = _interopRequireDefault(require("lodash"));

var _notistack = require("notistack");

var _FormElement = _interopRequireDefault(require("../FormElement/FormElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
    },
    avatar: {
      height: "28px",
      width: "28px",
      fontSize: ".8em"
    },
    yellowTheme: {
      color: "#fff",
      backgroundColor: "#bb9832"
    },
    greenTheme: {
      color: "#fff",
      backgroundColor: theme.palette.primary.main
    },
    textField: {
      width: "100%",
      backgroundColor: "white",
      marginBottom: "10px"
    },
    addResource: {
      textTransform: "none",
      width: "100%"
    }
  };
});

function ResourcesModalForm(props) {
  var _props$editingResourc;

  var classes = useStyles();

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = _react.default.useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      modelData = _React$useState4[0],
      setModelData = _React$useState4[1];

  var defaultValues = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  var initialSelection = (0, _lodash.default)(props.model.fields).filter(function (f) {
    return !f.value;
  }).filter(function (f) {
    return !f.editable;
  }).filter(function (f) {
    return f.only === "create" || !f.only;
  }).filter(function (f) {
    return f.model;
  }).map("model.resourceKey").zipObject(defaultValues).value();

  var _React$useState5 = _react.default.useState(initialSelection),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      selectionData = _React$useState6[0],
      _setSelectionData = _React$useState6[1];

  var _useSnackbar = (0, _notistack.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var handleOpen = function handleOpen() {
    props.setOpenModal ? props.setOpenModal(true) : setOpen(true);
  };

  var handleClose = function handleClose() {
    props.setOpenModal ? props.setOpenModal(false) : setOpen(false);
  };

  var resource = (_props$editingResourc = props.editingResource) !== null && _props$editingResourc !== void 0 && _props$editingResourc.id ? _objectSpread(_objectSpread({}, props.editingResource), props.additionalValues) : props.resource;
  var fieldNames = (0, _lodash.default)(props.model.fields).filter(function (f) {
    return !f.value;
  }).filter(function (f) {
    return f.only === "create" || !f.only;
  }).map("field");
  var form = (0, _formik.useFormik)({
    initialValues: (0, _lodash.default)(fieldNames).zipObject().mapValues(function (_v, k) {
      return resource ? resource[k] : "";
    }).value(),
    enableReinitialize: true
  });

  var postForm = function postForm() {
    function postData() {
      return _postData.apply(this, arguments);
    }

    function _postData() {
      _postData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _props$model;

        var values, _yield$props$model$cr, id;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (props.model.create) {
                  _context.next = 2;
                  break;
                }

                throw new Error("Missing create function on model");

              case 2:
                values = _objectSpread({}, form.values);

                if (props.additionalValues) {
                  values = _objectSpread(_objectSpread({}, values), props.additionalValues);
                }

                _context.next = 6;
                return (_props$model = props.model).create.apply(_props$model, _toConsumableArray(props.parentSelections || []).concat([values, props.externalState]));

              case 6:
                _yield$props$model$cr = _context.sent;
                id = _yield$props$model$cr.id;
                _context.next = 10;
                return props.refreshData();

              case 10:
                handleClose();
                enqueueSnackbar("Agregado con éxito", {
                  variant: "success",
                  anchorOrigin: {
                    vertical: "top",
                    horizontal: "center"
                  }
                });
                form.resetForm();
                props.setSelected(id);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _postData.apply(this, arguments);
    }

    postData();
  };

  var postEditForm = function postEditForm() {
    function postData() {
      return _postData2.apply(this, arguments);
    }

    function _postData2() {
      _postData2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _props$editingResourc2, _props$model2;

        var resource_id, values;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (props.model.edit) {
                  _context2.next = 2;
                  break;
                }

                throw new Error("Missing edit function on model");

              case 2:
                resource_id = ((_props$editingResourc2 = props.editingResource) === null || _props$editingResourc2 === void 0 ? void 0 : _props$editingResourc2.id) || props.resource.id;
                values = _objectSpread({}, form.values);

                if (props.additionalValues) {
                  values = _objectSpread(_objectSpread({}, values), props.additionalValues);
                } // WARNING: distinto a model.create!!!


                _context2.next = 7;
                return (_props$model2 = props.model).edit.apply(_props$model2, [resource_id, values].concat(_toConsumableArray(props.parentSelections || [])));

              case 7:
                _context2.next = 9;
                return props.refreshData();

              case 9:
                handleClose();
                enqueueSnackbar("Editado con éxito", {
                  variant: "success",
                  anchorOrigin: {
                    vertical: "top",
                    horizontal: "center"
                  }
                });
                form.resetForm();
                /* props.setSelected(id) */

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _postData2.apply(this, arguments);
    }

    postData();
  };

  var dependantKeys = (0, _lodash.default)(props.model.fields).filter(function (f) {
    return !f.value;
  }).filter(function (f) {
    return f.only === "create" || !f.only;
  }).map(function (f) {
    if (f.model && f.depends) {
      return f.depends;
    }

    return null;
  }).filter().value();
  var dependantValues = (0, _lodash.default)(form.values).pick(dependantKeys).values().value();

  var updateModelData = function updateModelData() {
    (0, _lodash.default)(props.model.fields).filter(function (f) {
      return !f.value;
    }).filter(function (f) {
      return f.only === "create" || !f.only;
    }).each( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(f) {
        var depends, data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(f.model && (!f.depends || form.values[f.depends]))) {
                  _context3.next = 6;
                  break;
                }

                depends = form.values[f.depends];
                _context3.next = 4;
                return f.model.all(depends);

              case 4:
                data = _context3.sent;
                setModelData(function (prev) {
                  return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, f.model.collectionKey, data));
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  };

  (0, _react.useEffect)(updateModelData, _toConsumableArray(dependantValues));
  var mode = props.modalMode ? props.modalMode : props.mode;

  var formValues = _objectSpread(_objectSpread({}, form.values), props.additionalValues || {});

  return /*#__PURE__*/_react.default.createElement("div", null, props.buttonComponent ? /*#__PURE__*/_react.default.cloneElement(props.buttonComponent, {
    onClick: handleOpen
  }) : !props.hideAddButton && /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    color: "secondary",
    size: "small",
    className: classes.addResource,
    onClick: handleOpen
  }, "A\xF1adir ", props.title), /*#__PURE__*/_react.default.createElement(_Modal.default, {
    open: props.openModal ? props.openModal : open,
    onClose: handleClose,
    "aria-labelledby": "simple-modal-title",
    "aria-describedby": "simple-modal-description"
  }, mode === "edit" ?
  /*#__PURE__*/

  /* FORMULARIO EDICIÓN */
  _react.default.createElement("div", {
    className: classes.paper
  }, /*#__PURE__*/_react.default.createElement("h2", {
    id: "simple-modal-title"
  }, "Editar ", props.title), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: form.handleSubmit,
    autoComplete: "off"
  }, (0, _lodash.default)(props.model.fields).filter(function (f) {
    return !f.value;
  }).filter(function (f) {
    return !f.editable;
  }).filter(function (f) {
    return f.only === "create" || !f.only;
  }).map(function (f) {
    return /*#__PURE__*/_react.default.createElement(_FormElement.default, {
      field: f,
      resource: resource,
      resources: props.resources,
      onChange: form.handleChange,
      setFieldValue: form.setFieldValue,
      value: formValues[f.field],
      formValues: formValues,
      key: f.name,
      data: f.model ? modelData[f.model.collectionKey] || [] : [],
      selectionData: selectionData,
      setSelectionData: function setSelectionData(selection) {
        return f.model ? _setSelectionData(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, f.model.resourceKey, selection));
        }) : {};
      }
    });
  }).value(), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    color: "secondary",
    type: "submit",
    onClick: postEditForm
  }, "Confirmar"))) :
  /*#__PURE__*/

  /* FORMULARIO CREACIÓN */
  _react.default.createElement("div", {
    className: classes.paper
  }, /*#__PURE__*/_react.default.createElement("h2", {
    id: "simple-modal-title"
  }, "A\xF1adir ", props.title), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: form.handleSubmit,
    autoComplete: "off"
  }, (0, _lodash.default)(props.model.fields).filter(function (f) {
    return !f.value;
  }).filter(function (f) {
    return !f.editable;
  }).filter(function (f) {
    return f.only === "create" || !f.only;
  }).map(function (f) {
    return /*#__PURE__*/_react.default.createElement(_FormElement.default, {
      field: f,
      resources: props.resources,
      onChange: form.handleChange,
      setFieldValue: form.setFieldValue,
      value: formValues[f.field],
      formValues: formValues,
      key: f.name,
      data: f.model ? modelData[f.model.collectionKey] || [] : [],
      selectionData: selectionData,
      setSelectionData: function setSelectionData(selection) {
        return f.model ? _setSelectionData(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, f.model.resourceKey, selection));
        }) : {};
      }
    });
  }).value(), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    color: "secondary",
    type: "submit",
    onClick: postForm
  }, "Confirmar")))));
}