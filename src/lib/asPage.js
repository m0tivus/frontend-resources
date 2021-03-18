import React from 'react'

import { Grid, Typography } from '@material-ui/core'

import PageContainer from './PageContainer'

const asPage = (config) => (WrappedElement) => {
  const AsPage = (props) => (
    <PageContainer>
      <Grid item md={12}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography gutterBottom variant="h4">
              {config.title}
            </Typography>
          </Grid>
          <Grid item md={12}>
            <WrappedElement {...props} />
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  )

  AsPage.propTypes = { ...WrappedElement.propTypes }

  return AsPage
}

export default asPage
