import React from 'react'
import {
  InputAdornment,
  makeStyles,
  withStyles,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'

import _ from 'lodash'

import FormSuggested from '../FormSuggested/FormSuggested'
import { DatePicker } from '@material-ui/pickers'

const TextFieldAlba = withStyles(() => ({
  root: {
    backgroundColor: 'white',
    marginBottom: '10px',
  },
}))((props) => <TextField {...props} type={props.field.type || 'text'} />)

const DatePickerAlba = withStyles(() => ({
  root: {
    backgroundColor: 'white',
    marginBottom: '10px',
    width: '100%',
  },
}))(DatePicker)

const AlbaCheckbox = withStyles(() => ({
  root: {
    color: 'white',
    '&$checked': {
      color: 'white',
    },
  },

  checked: {},
}))(Checkbox)

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '100%',
    backgroundColor: 'white',
    marginBottom: '10px',
  },
}))

function FormElement({ field, data, ...props }) {
  const classes = useStyles()

  switch (field.type) {
    case 'currency':
      if (field.suggestedValue) {
        return <FormSuggested field={field} data={data} {...props} />
      } else {
        return (
          <TextFieldAlba
            fullWidth
            required
            name={field.field}
            label={field.name}
            variant="filled"
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            field={field}
            {...props}
          />
        )
      }

    case 'boolean':
      return (
        <Box width="100%" px={1}>
          <FormControlLabel
            control={
              <AlbaCheckbox
                color="primary"
                name={field.field}
                {...props}
                checked={props.value}
              />
            }
            label={field.name}
          />
        </Box>
      )

    case 'date':
      return (
        <DatePickerAlba
          variant="filled"
          inputVariant="filled"
          format="dd/MM/yyyy"
          name={field.field}
          label={field.name}
          {...props}
          onChange={(d) => props.setFieldValue(field.field, d)}
        />
      )

    default:
      if (field.model) {
        return (
          <Autocomplete
            id={field.field}
            options={data}
            getOptionLabel={(option) => option.name}
            onChange={(event, value) => {
              const newValue = (value && value.id) || undefined
              props.setFieldValue(field.field, newValue)
              props.setSelectionData(value)
            }}
            defaultValue={
              props.resource
                ? _(props.resource).get(field.editValue) || {
                  name: 'Seleccione ...',
                }
                : ''
            } // _(row).get(field.field)
            renderInput={(params) => (
              <TextField
                {...params}
                label={field.name}
                variant="filled"
                size="small"
                className={classes.textField}
              />
            )}
          />
        )
      } else {
        if (field.suggestedValue) {
          return <FormSuggested field={field} data={data} {...props} />
        } else {
          return (
            <TextFieldAlba
              fullWidth
              required
              name={field.field}
              label={field.name}
              variant="filled"
              field={field}
              {...props}
            />
          )
        }
      }
  }
}

export default FormElement
