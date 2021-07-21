import React from 'react'
import { useHistory } from 'react-router-dom'
import { ArrowForward } from '@material-ui/icons'

const withNestedResources = (resources) => (WrappedComponent) => {
  const WithNestedResources = ({ routeParams = [], ...props }) => {
    let history = useHistory()
    const actions = resources.map(({ name, path }) => ({
      icon: ArrowForward,
      tooltip: `Ver ${name}`,
      onClick: (event, rowData) => history.push(path(rowData, routeParams)),
    }))

    return (
      <WrappedComponent
        nestedResourceActions={actions}
        routeParams={routeParams}
        {...props}
      />
    )
  }

  return WithNestedResources
}

export default withNestedResources
