import { withStyles, TextField } from "@material-ui/core";

const TextFieldCustom = withStyles(() => ({
  root: {
    backgroundColor: "white",
    marginBottom: "10px",
  },
}))(TextField);

export default TextFieldCustom;
