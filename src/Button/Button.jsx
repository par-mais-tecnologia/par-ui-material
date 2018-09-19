import React from 'react'

import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const styles = {
  contained: {
    color: 'white',
    backgroundColor: '#D4436B',
    boxShadow: '0px 1px #C1C1C1',
    '&$contained:hover': {
      backgroundColor: '#9D0238'
    },
    '&$contained:focus': {
      backgroundColor: '#BB5679'
    }
  },
  outlined: {
    color: '#D4436B',
    backgroundColor: 'white',
    borderStyle: 'hidden solid solid solid',
    boxShadow: '0px 1px #C1C1C1',
    '&$outlined:hover': {
      backgroundColor: '#F7F7F7'
    },
    '&$outlined:focus': {
      backgroundColor: '#F0F0F0'
    }
  }
}

function ButtonPar (props) {
  const { classes, variant } = props
  return (
    <Button
      variant={variant}
      classes={{
        contained: classes.contained,
        outlined: classes.outlined
      }}
    >
      <Typography
        variant='button'
        color='inherit'
      >
        {props.children}
      </Typography>
    </Button>
  )
}

export default withStyles(styles)(ButtonPar)
