import React from 'react'
import { useParams } from 'react-router-dom'
import _ from 'lodash'

const withRouteParams = (params) => (WrappedComponent) => {
  const WithRouteParams = (props) => {
    const routeParams = useParams()

    return (
      <WrappedComponent
        routeParams={_(params)
          .map((param) => routeParams[param])
          .value()}
        {...props}
      />
    )
  }
  return WithRouteParams
}

export default withRouteParams
