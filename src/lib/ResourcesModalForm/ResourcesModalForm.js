import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import { useFormik } from 'formik'
import _ from 'lodash'
import { useSnackbar } from 'notistack'
import FormElement from 'lib/FormElement'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    boxShadow: theme.shadows[5],
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    padding: '10px',
  },
  avatar: {
    height: '28px',
    width: '28px',
    fontSize: '.8em',
  },
  yellowTheme: {
    color: '#fff',
    backgroundColor: '#bb9832',
  },
  greenTheme: {
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
  },
  textField: {
    width: '100%',
    backgroundColor: 'white',
    marginBottom: '10px',
  },
  addResource: {
    textTransform: 'none',
    width: '100%',
  },
}))

export default function ResourcesModalForm(props) {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)
  const [modelData, setModelData] = React.useState({})

  const defaultValues = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

  const initialSelection = _(props.model.fields)
    .filter((f) => !f.value)
    .filter((f) => !f.editable)
    .filter((f) => f.only === 'create' || !f.only)
    .filter((f) => f.model)
    .map('model.resourceKey')
    .zipObject(defaultValues)
    .value()

  const [selectionData, setSelectionData] = React.useState(initialSelection)
  const { enqueueSnackbar } = useSnackbar()

  const handleOpen = () => {
    props.setOpenModal ? props.setOpenModal(true) : setOpen(true)
  }

  const handleClose = () => {
    props.setOpenModal ? props.setOpenModal(false) : setOpen(false)
  }

  const resource = props.editingResource?.id
    ? { ...props.editingResource, ...props.additionalValues }
    : props.resource

  const fieldNames = _(props.model.fields)
    .filter((f) => !f.value)
    .filter((f) => f.only === 'create' || !f.only)
    .map('field')

  const form = useFormik({
    initialValues: _(fieldNames)
      .zipObject()
      .mapValues((_v, k) => (resource ? resource[k] : ''))
      .value(),
    enableReinitialize: true,
    onSubmit: () => null,
  })

  const postForm = () => {
    async function postData() {
      if (!props.model.create) {
        throw new Error('Missing create function on model')
      }

      let values = { ...form.values }
      if (props.additionalValues) {
        values = { ...values, ...props.additionalValues }
      }

      const { id } = await props.model.create(
        ...(props.parentSelections || []),
        values,
        props.externalState,
      )
      await props.refreshData()
      handleClose()
      enqueueSnackbar('Agregado con éxito', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      })
      form.resetForm()
      props.setSelected(id)
    }
    postData()
  }

  const postEditForm = () => {
    async function postData() {
      if (!props.model.edit) {
        throw new Error('Missing edit function on model')
      }
      const resource_id = props.editingResource?.id || props.resource.id
      let values = { ...form.values }
      if (props.additionalValues) {
        values = { ...values, ...props.additionalValues }
      }
      // WARNING: distinto a model.create!!!
      await props.model.edit(
        resource_id,
        values,
        ...(props.parentSelections || []),
      )
      await props.refreshData()
      handleClose()
      enqueueSnackbar('Editado con éxito', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      })
      form.resetForm()
      /* props.setSelected(id) */
    }
    postData()
  }

  const dependantKeys = _(props.model.fields)
    .filter((f) => !f.value)
    .filter((f) => f.only === 'create' || !f.only)
    .map((f) => {
      if (f.model && f.depends) {
        return f.depends
      }
      return null
    })
    .filter()
    .value()

  const dependantValues = _(form.values).pick(dependantKeys).values().value()

  const updateModelData = () => {
    _(props.model.fields)
      .filter((f) => !f.value)
      .filter((f) => f.only === 'create' || !f.only)
      .each(async (f) => {
        if (f.model && (!f.depends || form.values[f.depends])) {
          const depends = form.values[f.depends]
          const data = await f.model.all(depends)

          setModelData((prev) => ({ ...prev, [f.model.collectionKey]: data }))
        }
      })
  }

  useEffect(updateModelData, [...dependantValues])

  const mode = props.modalMode ? props.modalMode : props.mode
  const formValues = {
    ...form.values,
    ...(props.additionalValues || {}),
  }
  return (
    <div>
      {props.buttonComponent
        ? React.cloneElement(props.buttonComponent, { onClick: handleOpen })
        : !props.hideAddButton && (
            <Button
              variant='contained'
              color='secondary'
              size='small'
              className={classes.addResource}
              onClick={handleOpen}
            >
              Añadir {props.title}
            </Button>
          )}

      <Modal
        open={props.openModal ? props.openModal : open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {mode === 'edit' ? (
          /* FORMULARIO EDICIÓN */
          <div className={classes.paper}>
            <h2 id='simple-modal-title'>Editar {props.title}</h2>
            <form onSubmit={form.handleSubmit} autoComplete='off'>
              {_(props.model.fields)
                .filter((f) => !f.value)
                .filter((f) => !f.editable)
                .filter((f) => f.only === 'create' || !f.only)
                .map((f) => (
                  <FormElement
                    editMode
                    field={f}
                    resource={resource}
                    resources={props.resources}
                    onChange={form.handleChange}
                    setFieldValue={form.setFieldValue}
                    value={formValues[f.field]}
                    formValues={formValues}
                    key={f.name}
                    data={f.model ? modelData[f.model.collectionKey] || [] : []}
                    selectionData={selectionData}
                    setSelectionData={(selection) =>
                      f.model
                        ? setSelectionData((prev) => ({
                            ...prev,
                            [f.model.resourceKey]: selection,
                          }))
                        : {}
                    }
                  />
                ))
                .value()}
              <Button
                variant='contained'
                color='secondary'
                type='submit'
                onClick={postEditForm}
              >
                Confirmar
              </Button>
            </form>
          </div>
        ) : (
          /* FORMULARIO CREACIÓN */
          <div className={classes.paper}>
            <h2 id='simple-modal-title'>Añadir {props.title}</h2>

            <form onSubmit={form.handleSubmit} autoComplete='off'>
              {_(props.model.fields)
                .filter((f) => !f.value)
                .filter((f) => !f.editable)
                .filter((f) => f.only === 'create' || !f.only)
                .map((f) => (
                  <FormElement
                    field={f}
                    resources={props.resources}
                    onChange={form.handleChange}
                    setFieldValue={form.setFieldValue}
                    value={formValues[f.field]}
                    formValues={formValues}
                    key={f.name}
                    data={f.model ? modelData[f.model.collectionKey] || [] : []}
                    selectionData={selectionData}
                    setSelectionData={(selection) =>
                      f.model
                        ? setSelectionData((prev) => ({
                            ...prev,
                            [f.model.resourceKey]: selection,
                          }))
                        : {}
                    }
                  />
                ))
                .value()}
              <Button
                variant='contained'
                color='secondary'
                type='submit'
                onClick={postForm}
              >
                Confirmar
              </Button>
            </form>
          </div>
        )}
      </Modal>
    </div>
  )
}
