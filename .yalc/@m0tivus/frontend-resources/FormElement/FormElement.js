"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _Autocomplete = _interopRequireDefault(require("@material-ui/lab/Autocomplete"));

var _lodash = _interopRequireDefault(require("lodash"));

var _FormSuggested = _interopRequireDefault(require("../FormSuggested"));

var _pickers = require("@material-ui/pickers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TextFieldAlba = (0, _core.withStyles)(function () {
  return {
    root: {
      backgroundColor: 'white',
      marginBottom: '10px'
    }
  };
})(function (props) {
  return /*#__PURE__*/_react.default.createElement(_core.TextField, _extends({}, props, {
    type: props.field.type || 'text'
  }));
});
var DatePickerAlba = (0, _core.withStyles)(function () {
  return {
    root: {
      backgroundColor: 'white',
      marginBottom: '10px',
      width: '100%'
    }
  };
})(_pickers.DatePicker);
var AlbaCheckbox = (0, _core.withStyles)(function () {
  return {
    root: {
      color: 'white',
      '&$checked': {
        color: 'white'
      }
    },
    checked: {}
  };
})(_core.Checkbox);
var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    textField: {
      width: '100%',
      backgroundColor: 'white',
      marginBottom: '10px'
    }
  };
});

function getSuggestedValue(field, selectionData, formValues, additionalValues, resources) {
  var resource = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var value = field.suggestedValue(selectionData, _objectSpread(_objectSpread({}, formValues), additionalValues || {}), resources, resource);

  if (field.type === 'number' || field.type === 'currency') {
    value = _lodash.default.toInteger(value);
  }

  return value;
}

function FormElement(_ref) {
  var field = _ref.field,
      data = _ref.data,
      editMode = _ref.editMode,
      props = _objectWithoutProperties(_ref, ["field", "data", "editMode"]);

  var classes = useStyles();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showSuggested = _useState2[0],
      setShowSuggested = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      suggestedDidUpdate = _useState4[0],
      setSuggestedDidUpdate = _useState4[1];

  var suggestedRef = (0, _react.useRef)(undefined);
  var suggestedValue = field.suggestedValue ? getSuggestedValue(field, props.selectionData, props.formValues, props.additionalValues, props.resources, props.resource) : undefined;
  (0, _react.useEffect)(function () {
    var normalStart = !editMode && field.suggestedValue && !showSuggested;

    if (normalStart) {
      setShowSuggested(true);
    }
  }, [suggestedValue, editMode, field, showSuggested]);
  (0, _react.useEffect)(function () {
    if (suggestedRef.current === undefined) {
      suggestedRef.current = suggestedValue;
      return;
    }

    if (suggestedRef.current !== suggestedValue && editMode && field.suggestedValue) {
      suggestedRef.current = suggestedValue;
      setShowSuggested(true);
    }
  }, [editMode, field.suggestedValue, suggestedValue]);

  switch (field.type) {
    case 'currency':
      if (showSuggested) {
        return /*#__PURE__*/_react.default.createElement(_FormSuggested.default, _extends({
          suggestedValue: suggestedValue,
          field: field,
          data: data,
          InputProps: {
            startAdornment: /*#__PURE__*/_react.default.createElement(_core.InputAdornment, {
              position: "start"
            }, "$")
          }
        }, props));
      } else {
        return /*#__PURE__*/_react.default.createElement(TextFieldAlba, {
          fullWidth: true,
          required: true,
          name: field.field,
          label: field.name,
          variant: "filled",
          type: "number",
          inputProps: {
            role: 'textbox'
          },
          value: props.value,
          onChange: props.onChange,
          id: field.name,
          InputProps: {
            startAdornment: /*#__PURE__*/_react.default.createElement(_core.InputAdornment, {
              position: "start"
            }, "$")
          },
          field: field
        });
      }

    case 'boolean':
      return /*#__PURE__*/_react.default.createElement(_core.Box, {
        width: "100%",
        px: 1
      }, /*#__PURE__*/_react.default.createElement(_core.FormControlLabel, {
        control: /*#__PURE__*/_react.default.createElement(AlbaCheckbox, {
          color: "primary",
          name: field.field,
          checked: !!props.value,
          onChange: props.onChange
        }),
        label: field.name
      }));

    case 'date':
      return /*#__PURE__*/_react.default.createElement(DatePickerAlba, {
        variant: "filled",
        inputVariant: "filled",
        format: "dd/MM/yyyy",
        name: field.field,
        label: field.name,
        onChange: function onChange(d) {
          return props.setFieldValue(field.field, d);
        }
      });

    case 'number':
      return /*#__PURE__*/_react.default.createElement(TextFieldAlba, {
        fullWidth: true,
        required: true,
        name: field.field,
        label: field.name,
        id: field.name,
        variant: "filled",
        field: field,
        value: props.value,
        inputProps: {
          role: 'textbox'
        },
        onChange: function onChange(e) {
          return props.setFieldValue(field.field, e.target.value);
        }
      });

    default:
      if (field.model) {
        return /*#__PURE__*/_react.default.createElement(_Autocomplete.default, {
          id: field.field,
          options: data,
          getOptionLabel: function getOptionLabel(option) {
            var _field$model;

            return ((_field$model = field.model) !== null && _field$model !== void 0 && _field$model.getOptionLabel ? field.model.getOptionLabel(option) : option.name) || '';
          },
          onChange: function onChange(_event, value) {
            var newValue = value && value.id || undefined;
            props.setFieldValue(field.field, newValue);
            props.setSelectionData(value);
          },
          defaultValue: props.resource ? (0, _lodash.default)(props.resource).get(field.editValue || field.field) || null : null,
          renderInput: function renderInput(params) {
            return /*#__PURE__*/_react.default.createElement(_core.TextField, _extends({}, params, {
              label: field.name,
              variant: "filled",
              size: "small",
              className: classes.textField,
              InputProps: _objectSpread(_objectSpread({}, params.InputProps), {}, {
                role: 'search' // <React.Fragment>
                //   {loading ? (
                //     <CircularProgress
                //       role='progressbar'
                //       color='inherit'
                //       size={20}
                //     />
                //   ) : null}
                //   {params.InputProps.endAdornment}
                // </React.Fragment>

              })
            }));
          },
          disablePortal: true
        });
      }

      if (showSuggested) {
        return /*#__PURE__*/_react.default.createElement(_FormSuggested.default, _extends({
          suggestedValue: suggestedValue,
          field: field,
          data: data
        }, props));
      } else {
        return /*#__PURE__*/_react.default.createElement(TextFieldAlba, {
          fullWidth: true,
          required: true,
          name: field.field,
          label: field.name,
          id: field.name,
          variant: "filled",
          field: field,
          value: props.value,
          inputProps: {
            role: 'textbox'
          },
          onChange: function onChange(e) {
            return props.setFieldValue(field.field, e.target.value);
          }
        });
      }

  }
}

var _default = FormElement;
exports.default = _default;