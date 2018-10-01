import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

function NumberedTitle (props) {
  return (
    <Grid container direction='column'>
      <Grid container direction='row' alignItems='center'>
        <Grid item>
          <Typography variant='display1'>
            {props.number}
          </Typography>
        </Grid>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='headline' style={{ lineHeight: '1em' }}>
                {props.title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='subheading' style={{ lineHeight: '1em' }}>
                {props.subtitle}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {props.children}
      </Grid>
    </Grid>
  )
}

export default NumberedTitle
