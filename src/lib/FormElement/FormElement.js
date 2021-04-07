import React, { useEffect, useRef, useState } from 'react'
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

import FormSuggested from '../FormSuggested'
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

function getSuggestedValue(
  field,
  selectionData,
  formValues,
  additionalValues,
  resources,
) {
  let value = field.suggestedValue(
    selectionData,
    {
      ...formValues,
      ...(additionalValues || {}),
    },
    resources,
  )
  if (field.type === 'number' || field.type === 'currency') {
    value = _.toInteger(value)
  }
  return value
}

function FormElement({ field, data, editMode, ...props }) {
  const classes = useStyles()
  const [showSuggested, setShowSuggested] = useState(false)
  const [suggestedDidUpdate, setSuggestedDidUpdate] = useState(false)
  const suggestedRef = useRef(undefined)

  const suggestedValue = field.suggestedValue
    ? getSuggestedValue(
        field,
        props.selectionData,
        props.formValues,
        props.additionalValues,
        props.resources,
      )
    : undefined
  useEffect(() => {
    const normalStart = !editMode && field.suggestedValue && !showSuggested
    if (normalStart) {
      setShowSuggested(true)
    }
  }, [suggestedValue, editMode, field, showSuggested])

  useEffect(() => {
    if (suggestedRef.current === undefined) {
      suggestedRef.current = suggestedValue
      return
    }
    if (
      suggestedRef.current !== suggestedValue &&
      editMode &&
      field.suggestedValue
    ) {
      suggestedRef.current = suggestedValue
      setShowSuggested(true)
    }
  }, [editMode, field.suggestedValue, suggestedValue])

  switch (field.type) {
    case 'currency':
      if (showSuggested) {
        return (
          <FormSuggested
            suggestedValue={suggestedValue}
            field={field}
            data={data}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>$</InputAdornment>
              ),
            }}
            {...props}
          />
        )
      } else {
        return (
          <TextFieldAlba
            fullWidth
            required
            name={field.field}
            label={field.name}
            variant='filled'
            type='number'
            inputProps={{ role: 'textbox' }}
            value={props.value}
            onChange={props.onChange}
            id={field.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>$</InputAdornment>
              ),
            }}
            field={field}
          />
        )
      }

    case 'boolean':
      return (
        <Box width='100%' px={1}>
          <FormControlLabel
            control={
              <AlbaCheckbox
                color='primary'
                name={field.field}
                checked={!!props.value}
                onChange={props.onChange}
              />
            }
            label={field.name}
          />
        </Box>
      )

    case 'date':
      return (
        <DatePickerAlba
          variant='filled'
          inputVariant='filled'
          format='dd/MM/yyyy'
          name={field.field}
          label={field.name}
          onChange={(d) => props.setFieldValue(field.field, d)}
        />
      )

    case 'number':
      return (
        <TextFieldAlba
          fullWidth
          required
          name={field.field}
          label={field.name}
          id={field.name}
          variant='filled'
          field={field}
          value={props.value}
          inputProps={{ role: 'textbox' }}
          onChange={(e) => props.setFieldValue(field.field, e.target.value)}
        />
      )

    default:
      if (field.model) {
        return (
          <Autocomplete
            id={field.field}
            options={data}
            getOptionLabel={(option) => option.name || ''}
            onChange={(_event, value) => {
              const newValue = (value && value.id) || undefined
              props.setFieldValue(field.field, newValue)
              props.setSelectionData(value)
            }}
            defaultValue={
              props.resource
                ? _(props.resource).get(field.editValue) || null
                : null
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label={field.name}
                variant='filled'
                size='small'
                className={classes.textField}
                InputProps={{
                  ...params.InputProps,
                  role: 'search',
                  // <React.Fragment>
                  //   {loading ? (
                  //     <CircularProgress
                  //       role='progressbar'
                  //       color='inherit'
                  //       size={20}
                  //     />
                  //   ) : null}
                  //   {params.InputProps.endAdornment}
                  // </React.Fragment>
                }}
              />
            )}
            disablePortal
          />
        )
      }
      if (showSuggested) {
        return (
          <FormSuggested
            suggestedValue={suggestedValue}
            field={field}
            data={data}
            {...props}
          />
        )
      } else {
        return (
          <TextFieldAlba
            fullWidth
            required
            name={field.field}
            label={field.name}
            id={field.name}
            variant='filled'
            field={field}
            value={props.value}
            inputProps={{ role: 'textbox' }}
            onChange={(e) => props.setFieldValue(field.field, e.target.value)}
          />
        )
      }
  }
}

export default FormElement
