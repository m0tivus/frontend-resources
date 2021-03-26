import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import FormSuggested from './FormSuggested'

it('shows suggested value from field definition', async () => {
  render(
    <FormSuggested
      suggestedValue='the value'
      value=''
      setFieldValue={() => null}
      formValues={{ aValue: 'the value' }}
      field={{
        suggestedValue: (_formData, form) => form.aValue,
      }}
    />,
  )
  screen.getByDisplayValue(/the value/i)
})
