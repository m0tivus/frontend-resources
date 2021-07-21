import React from 'react'

const withResources = (WrappedElement) => {
  const WithResources = (props) => {
    const [resources, setResources] = React.useState([])
    const fetchData = (force = false) => {
      async function dataGetter() {
        return props.model.all(
          ...(props.routeParams || []),
          ...(props.parentSelections || []),
        )
      }
      async function getData() {
        const _resources = await dataGetter()
        setResources(_resources)
      }
      if (force) {
        return getData
      } else {
        if (props.enoughSelections) {
          getData()
        }
      }
    }
    React.useEffect(fetchData, [
      props.enoughSelections,
      props.externalState,
      ...(props.routeParams || []),
      ...props.parentSelections,
    ])
    return (
      <WrappedElement
        {...props}
        resources={resources}
        refreshData={async () => await fetchData(true)()}
      />
    )
  }
  return WithResources
}

export default withResources
