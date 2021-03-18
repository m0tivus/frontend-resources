import React from "react";
import _ from "lodash";
import TextFieldCustom from "./TextFieldCustom";

const FormSuggested = ({
  field,
  data,
  setFieldValue: setFormFieldValue,
  ...props
}) => {
  const [fieldValue, setFieldValue] = React.useState("");
  const [touched, setTouched] = React.useState(false);
  const handleChange = (event) => {
    setFieldValue(event.target.value);
    setFormFieldValue(field.field, event.target.value);
    setTouched(true);
  };

  React.useEffect(() => {
    if (!touched && !props.value) {
      let value = field.suggestedValue(
        props.selectionData,
        {
          ...props.formValues,
          ...(props.additionalValues || {}),
        },
        props.resources
      );
      if (field.type === "number" || field.type === "currency") {
        value = _.toInteger(value);
      }
      if (value !== props.value) {
        setFieldValue(value);
        setFormFieldValue(field.field, value);
      }
    } else {
      if (props.value) {
        setFieldValue(props.value);
      }
    }
  }, [
    touched,
    field,
    props.selectionData,
    props.formValues,
    props.additionalValues,
    props.value,
    setFormFieldValue,
    props.resources,
  ]);

  return (
    <TextFieldCustom
      fullWidth
      required
      variant="filled"
      type={field.type || "text"}
      name={field.field}
      label={field.name}
      {...props}
      value={fieldValue}
      onChange={handleChange}
    />
  );
};

export default FormSuggested;
