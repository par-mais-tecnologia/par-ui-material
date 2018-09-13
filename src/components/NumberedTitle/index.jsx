import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

function NumberedTitle (props) {
  const { classes } = props
  return (
    <Grid container direction='column'>
      <Grid container direction='row' alignItems='center'>
        <Typography variant='headline'>
          {props.number}
        </Typography>
        <Grid direction='column'>
          <Typography variant='body2'>
            {props.title}
          </Typography>
          <Typography variant='subheading'>
            {props.subtitle}
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        {props.children}
      </Grid>
    </Grid>
  )
}

export default NumberedTitle
