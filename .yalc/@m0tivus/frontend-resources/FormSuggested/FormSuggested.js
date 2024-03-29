"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextFieldCustom = _interopRequireDefault(require("../TextFieldCustom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FormSuggested = function FormSuggested(_ref) {
  var field = _ref.field,
      data = _ref.data,
      setFormFieldValue = _ref.setFieldValue,
      suggestedValue = _ref.suggestedValue,
      props = _objectWithoutProperties(_ref, ["field", "data", "setFieldValue", "suggestedValue"]);

  var _React$useState = _react.default.useState(props.value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      fieldValue = _React$useState2[0],
      setFieldValue = _React$useState2[1];

  var _React$useState3 = _react.default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      touched = _React$useState4[0],
      setTouched = _React$useState4[1];

  var handleChange = function handleChange(event) {
    setFieldValue(event.target.value);
    setFormFieldValue(field.field, event.target.value);
    setTouched(true);
  };

  _react.default.useEffect(function () {
    if (touched) {
      setTouched(false);
    }
  }, [suggestedValue]);

  _react.default.useEffect(function () {
    if (!touched) {
      if (suggestedValue !== props.value) {
        setFieldValue(suggestedValue);
        setFormFieldValue(field.field, suggestedValue);
      }
    } else {
      if (props.value !== fieldValue) {
        setFieldValue(props.value);
      }
    }
  }, [touched, suggestedValue, field, props.value, setFormFieldValue, fieldValue]);

  return /*#__PURE__*/_react.default.createElement(_TextFieldCustom.default, {
    fullWidth: true,
    required: true,
    variant: "filled",
    inputProps: {
      role: 'textbox'
    },
    InputProps: props.InputProps || {},
    type: field.type || 'text',
    name: field.field,
    label: field.name,
    value: fieldValue,
    onChange: handleChange,
    id: field.name
  });
};

var _default = FormSuggested;
exports.default = _default;