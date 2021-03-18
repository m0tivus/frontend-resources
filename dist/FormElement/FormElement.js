"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _Autocomplete = _interopRequireDefault(require("@material-ui/lab/Autocomplete"));

var _lodash = _interopRequireDefault(require("lodash"));

var _FormSuggested = _interopRequireDefault(require("../FormSuggested/FormSuggested"));

var _pickers = require("@material-ui/pickers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

function FormElement(_ref) {
  var field = _ref.field,
      data = _ref.data,
      props = _objectWithoutProperties(_ref, ["field", "data"]);

  var classes = useStyles();

  switch (field.type) {
    case 'currency':
      if (field.suggestedValue) {
        return /*#__PURE__*/_react.default.createElement(_FormSuggested.default, _extends({
          field: field,
          data: data
        }, props));
      } else {
        return /*#__PURE__*/_react.default.createElement(TextFieldAlba, _extends({
          fullWidth: true,
          required: true,
          name: field.field,
          label: field.name,
          variant: "filled",
          type: "number",
          InputProps: {
            startAdornment: /*#__PURE__*/_react.default.createElement(_core.InputAdornment, {
              position: "start"
            }, "$")
          },
          field: field
        }, props));
      }

    case 'boolean':
      return /*#__PURE__*/_react.default.createElement(_core.Box, {
        width: "100%",
        px: 1
      }, /*#__PURE__*/_react.default.createElement(_core.FormControlLabel, {
        control: /*#__PURE__*/_react.default.createElement(AlbaCheckbox, _extends({
          color: "primary",
          name: field.field
        }, props, {
          checked: props.value
        })),
        label: field.name
      }));

    case 'date':
      return /*#__PURE__*/_react.default.createElement(DatePickerAlba, _extends({
        variant: "filled",
        inputVariant: "filled",
        format: "dd/MM/yyyy",
        name: field.field,
        label: field.name
      }, props, {
        onChange: function onChange(d) {
          return props.setFieldValue(field.field, d);
        }
      }));

    default:
      if (field.model) {
        return /*#__PURE__*/_react.default.createElement(_Autocomplete.default, {
          id: field.field,
          options: data,
          getOptionLabel: function getOptionLabel(option) {
            return option.name;
          },
          onChange: function onChange(event, value) {
            var newValue = value && value.id || undefined;
            props.setFieldValue(field.field, newValue);
            props.setSelectionData(value);
          },
          defaultValue: props.resource ? (0, _lodash.default)(props.resource).get(field.editValue) || {
            name: 'Seleccione ...'
          } : '' // _(row).get(field.field)
          ,
          renderInput: function renderInput(params) {
            return /*#__PURE__*/_react.default.createElement(_core.TextField, _extends({}, params, {
              label: field.name,
              variant: "filled",
              size: "small",
              className: classes.textField
            }));
          }
        });
      } else {
        if (field.suggestedValue) {
          return /*#__PURE__*/_react.default.createElement(_FormSuggested.default, _extends({
            field: field,
            data: data
          }, props));
        } else {
          return /*#__PURE__*/_react.default.createElement(TextFieldAlba, _extends({
            fullWidth: true,
            required: true,
            name: field.field,
            label: field.name,
            variant: "filled",
            field: field
          }, props));
        }
      }

  }
}

var _default = FormElement;
exports.default = _default;