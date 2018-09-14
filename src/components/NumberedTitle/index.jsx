import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core'

const styles = theme => {
  return {
      headline: {
          fontSize: '48px',
          color: '#636363',
          fontWeight: '500',
          padding: '0px 4px 0px 4px'
      },
      title: {
          fontSize: '20px',
          color: '#636363',
          fontWeight: '300'
      },
      subheading: {
          fontSize: '16px',
          color: '#D4426A',
          fontWeight: '800'
      }
  }
}

function NumberedTitle (props) {
  const { classes } = props
  return (
    <Grid container direction='column'>
      <Grid container direction='row' alignItems='center'>
        <Typography variant='headline' classes={{ headline: classes.headline }}>
          {props.number}
        </Typography>
        <Grid direction='column'>
          <Typography variant='title' classes={{ title: classes.title }}>
            {props.title}
          </Typography>
          <Typography variant='subheading' classes={{ subheading: classes.subheading }}>
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

export default withStyles(styles)(NumberedTitle)
