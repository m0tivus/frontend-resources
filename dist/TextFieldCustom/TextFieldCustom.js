"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var TextFieldCustom = (0, _core.withStyles)(function () {
  return {
    root: {
      backgroundColor: "white",
      marginBottom: "10px"
    }
  };
})(_core.TextField);
var _default = TextFieldCustom;
exports.default = _default;