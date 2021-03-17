"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons/");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash"));

var _clsx = _interopRequireDefault(require("clsx"));

var _dateFns = require("date-fns");

var _notistack = require("notistack");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    table: {},
    container: {
      padding: theme.spacing(1)
    },
    selectedRow: {
      backgroundColor: theme.palette.primary.main,
      color: "white"
    },
    tableContainer: {
      position: "absolute",
      height: "calc(100% - 8px)",
      width: "calc(100% - 8px)",
      margin: "4px",
      top: 0,
      left: 0
    }
  };
});
/* async function removeResource(props, resource, enqueueSnackbar, setSelected) {
  if (setSelected && props.parentSelections) {
    await props.model.remove(...props.parentSelections, resource.id);
    setSelected(undefined);
  } else {
    await props.model.remove(resource.id);
  }

  await props.refreshData();
  enqueueSnackbar("Se eliminó con éxito", {
    variant: "success",
    anchorOrigin: {
      vertical: "top",
      horizontal: "center",
    },
  });
} */

var formatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP"
});

function renderField(row, field) {
  var value = field.value ? field.value(row) : (0, _lodash.default)(row).get(field.field);

  switch (field.type) {
    case "currency":
      return formatter.format(value);

    case "date":
      return (0, _dateFns.format)(new Date(value), "dd/MM/yyyy");

    case "boolean":
      return value ? "Si" : "No";

    default:
      return value;
  }
}

function ResourcesAsTable(_ref) {
  var _ref$enoughSelections = _ref.enoughSelections,
      enoughSelections = _ref$enoughSelections === void 0 ? true : _ref$enoughSelections,
      resources = _ref.resources,
      selected = _ref.selected,
      setSelected = _ref.setSelected,
      _ref$allowCreation = _ref.allowCreation,
      allowCreation = _ref$allowCreation === void 0 ? true : _ref$allowCreation,
      props = _objectWithoutProperties(_ref, ["enoughSelections", "resources", "selected", "setSelected", "allowCreation"]);

  var fields = props.model.fields;
  var classes = useStyles(); //const { enqueueSnackbar } = useSnackbar();

  return enoughSelections && /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_core.TableContainer
  /* component={Paper} */
  , {
    className: (0, _clsx.default)(allowCreation && !props.hideAddButton && classes.tableContainer),
    style: {
      backgroundColor: "#e8e8e8"
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Table, {
    className: classes.table,
    size: "small",
    "aria-label": "a dense table",
    style: {
      backgroundColor: "white"
    }
  }, /*#__PURE__*/_react.default.createElement(_core.TableHead, null, /*#__PURE__*/_react.default.createElement(_core.TableRow, null, props.checkbox && /*#__PURE__*/_react.default.createElement(_core.TableCell, null), (0, _lodash.default)(fields).filter(function (f) {
    return f.only === "list" || !f.only;
  }).map(function (f) {
    return /*#__PURE__*/_react.default.createElement(_core.TableCell, {
      key: "header-".concat(f.name)
    }, f.name);
  }).value(), allowCreation && /*#__PURE__*/_react.default.createElement(_core.TableCell, null, " Acciones "))), /*#__PURE__*/_react.default.createElement(_core.TableBody, null, resources.length ? resources.map(function (r) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: "row-".concat(r.id)
    }, /*#__PURE__*/_react.default.createElement(_core.TableRow, {
      hover: true,
      selected: selected === r.id,
      onClick: function onClick() {
        return setSelected ? setSelected(r.id) : null;
      }
    }, props.checkbox && /*#__PURE__*/_react.default.createElement(_core.TableCell, {
      component: "th",
      scope: "row"
    }, /*#__PURE__*/_react.default.createElement(_core.Checkbox, {
      defaultChecked: true,
      color: "primary",
      inputProps: {
        "aria-label": "secondary checkbox"
      }
    })), (0, _lodash.default)(fields).filter(function (f) {
      return f.only === "list" || !f.only;
    }).map(function (f) {
      return /*#__PURE__*/_react.default.createElement(_core.TableCell, {
        key: "row-".concat(r.id, "-").concat(f.name),
        component: "th",
        scope: "row",
        className: selected === r.id ? classes.selectedRow : classes.notSelectedRow
      }, renderField(r, f));
    }).value(), " ", allowCreation && /*#__PURE__*/_react.default.createElement(_core.TableCell, {
      component: "th",
      scope: "row",
      className: selected === r.id ? classes.selectedRow : classes.notSelectedRow
    })), props.afterRow && /*#__PURE__*/_react.default.createElement(_core.TableRow, null, /*#__PURE__*/_react.default.createElement(_core.TableCell, {
      colSpan: fields.length + 1
    }, props.afterRow(r))));
  }) : /*#__PURE__*/_react.default.createElement(_core.TableRow, null, /*#__PURE__*/_react.default.createElement(_core.TableCell, null, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "caption"
  }, " No hay datos")))))));
}

ResourcesAsTable.propTypes = {
  model: _propTypes.default.shape({
    fields: _propTypes.default.array.isRequired
  })
};
var _default = ResourcesAsTable;
exports.default = _default;