import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, waitFor, within } from '@testing-library/react'

import { MenuItem } from '@material-ui/core'

import ResourcesModalForm from './ResourcesModalForm'
import userEvent from '@testing-library/user-event'

const machineries = [
  { id: 1, name: 'uno', cost: 100 },
  { id: 2, name: 'dos', cost: 200 },
]

const resource = {
  id: 1,
  //name: 'uno',
  cost: 100,
  comment: 'prueba',
  factor: 7,
  is_active: true,
  machinery: 1,
}

const Machinery = {
  all: () => machineries,
  resourceKey: 'machinery',
}
const model = {
  all: () => [],
  fields: [
    { name: 'Maquinaria', field: 'machinery', model: Machinery },
    {
      name: 'Costo',
      field: 'cost',
      type: 'currency',
      suggestedValue: (formData, formValues) =>
        (formData.machinery?.cost || 0) * (formValues.factor || 1) * 1.1,
    },
    { name: 'Comentario', field: 'comment' },
    { name: 'Factor', field: 'factor', type: 'number' },
    { name: 'Activo', field: 'is_active', type: 'boolean' },
  ],
}

jest.mock('notistack', () => ({
  useSnackbar: () => ({ enqueueSnackbar: () => null }),
}))

it('can create a resource', async () => {
  const create = jest.fn(() => ({ id: 1 }))
  model.create = create

  render(
    <ResourcesModalForm
      model={model}
      refreshData={model.all}
      setSelected={() => null}
    />,
  )

  userEvent.click(screen.getByRole('button'), { name: /añadir/i })

  screen.getByText(/maquinaria/i)
  screen.getByText(/costo/i)
  screen.getByText(/comentario/i)
  screen.getByText(/activo/i)

  userEvent.click(screen.getByRole('button', { name: /open/i }))
  await screen.findByText(/uno/i)
  userEvent.click(screen.getByText(/uno/i))

  screen.getByDisplayValue(/110/)

  userEvent.type(
    screen.getByRole('textbox', { name: /comentario/i }),
    'sin comentarios',
  )

  userEvent.click(screen.getByRole('checkbox', { name: /activo/i }))

  userEvent.click(screen.getByRole('button', { name: /confirmar/i }))

  expect(create).toHaveBeenCalledWith(
    {
      machinery: 1,
      cost: 110,
      comment: 'sin comentarios',
      is_active: true,
      factor: '',
    },
    undefined,
  )

  await waitFor(() => expect(screen.queryByRole('presentation')).toBeNull())

  // userEvent.click(screen.getByTitle(/open/i))
  // await screen.findByText(/dos/i)
  // userEvent.click(screen.getByText(/dos/i))

  // screen.getByDisplayValue(/220/)
})

it('can create a resource with suggeted values', async () => {
  const create = jest.fn(() => ({ id: 1 }))
  model.create = create

  render(
    <ResourcesModalForm
      model={model}
      refreshData={model.all}
      setSelected={() => null}
    />,
  )

  userEvent.click(screen.getByRole('button'), { name: /añadir/i })
  const suggested = screen.getByRole('textbox', { name: /costo/i })
  const factor = screen.getByRole('textbox', { name: /factor/i })

  screen.getByText(/maquinaria/i)
  screen.getByText(/costo/i)
  screen.getByText(/comentario/i)
  screen.getByText(/activo/i)

  userEvent.click(screen.getByRole('button', { name: /open/i }))
  await screen.findByText(/uno/i)
  userEvent.click(screen.getByText(/uno/i))

  expect(suggested).toHaveValue('110')

  userEvent.click(screen.getByRole('button', { name: /open/i }))
  await screen.findByText(/dos/i)
  userEvent.click(screen.getByText(/dos/i))

  expect(suggested).toHaveValue('220')

  userEvent.type(factor, '2')

  expect(suggested).toHaveValue('440')

  userEvent.type(suggested, '{selectall}220')
  expect(suggested).toHaveValue('220')

  userEvent.type(factor, '{backspace}3')
  expect(factor).toHaveValue(3)

  expect(suggested).toHaveValue('660')

  userEvent.click(screen.getByRole('button', { name: /confirmar/i }))

  expect(create).toHaveBeenCalledWith(
    { machinery: 2, cost: 660, comment: '', is_active: '', factor: '3' },
    undefined,
  )

  await waitFor(() => expect(screen.queryByRole('presentation')).toBeNull())
})

it('can see the above information when editing an item', async () => {
  const edit = jest.fn(() => ({ id: 1 }))
  model.edit = edit

  render(
    <ResourcesModalForm
      model={model}
      refreshData={model.all}
      setSelected={() => null}
      mode='edit'
      resource={resource}
      buttonComponent={<MenuItem>Editar</MenuItem>}
    />,
  )

  //Hacer click en boton flecha y luego en editar
  userEvent.click(screen.getByText('Editar'))

  //Esperar que este abierto el modal
  await waitFor(() => expect(screen.queryByRole('presentation')))

  //Capturar que la info mostrada corresponde con 'resource'

  //Maquinaria, Costo, Comentario, Factor, Activo

  const cost = screen.getByRole('textbox', { name: /costo/i })
  const comment = screen.getByRole('textbox', { name: /comentario/i })
  const factor = screen.getByRole('textbox', { name: /factor/i })

  //los valores obtenidos tienen que ser los de resource

  expect(cost).toHaveValue('100')
  expect(comment).toHaveValue('prueba')
  expect(factor).toHaveValue(7)

  userEvent.click(screen.getByRole('button', { name: /open/i }))
  await screen.findByText(/dos/i)
  userEvent.click(screen.getByText(/dos/i))

  expect(screen.getByRole('textbox', { name: /costo/i })).toHaveValue('1540')

  userEvent.click(screen.getByRole('button', { name: /confirmar/i }))

  expect(edit).toHaveBeenCalledWith(1, {
    machinery: 2,
    cost: 1540,
    comment: 'prueba',
    is_active: true,
    factor: 7,
  })

  await waitFor(() => expect(screen.queryByRole('presentation')).toBeNull())
})
