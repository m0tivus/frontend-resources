import React from 'react'
import TextFieldCustom from '../TextFieldCustom'

const FormSuggested = ({
  field,
  data,
  setFieldValue: setFormFieldValue,
  suggestedValue,
  ...props
}) => {
  const [fieldValue, setFieldValue] = React.useState(props.value)
  const [touched, setTouched] = React.useState(false)
  const handleChange = (event) => {
    setFieldValue(event.target.value)
    setFormFieldValue(field.field, event.target.value)
    setTouched(true)
  }

  React.useEffect(() => {
    if (touched) {
      setTouched(false)
    }
  }, [suggestedValue])

  React.useEffect(() => {
    if (!touched) {
      if (suggestedValue !== props.value) {
        setFieldValue(suggestedValue)
        setFormFieldValue(field.field, suggestedValue)
      }
    } else {
      if (props.value !== fieldValue) {
        setFieldValue(props.value)
      }
    }
  }, [
    touched,
    suggestedValue,
    field,
    props.value,
    setFormFieldValue,
    fieldValue,
  ])

  return (
    <TextFieldCustom
      fullWidth
      required
      variant='filled'
      inputProps={{ role: 'textbox' }}
      InputProps={props.InputProps || {}}
      type={field.type || 'text'}
      name={field.field}
      label={field.name}
      value={fieldValue}
      onChange={handleChange}
      id={field.name}
    />
  )
}

export default FormSuggested
