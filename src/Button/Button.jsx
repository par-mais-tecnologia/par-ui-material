import React from 'react'
import { Button, withStyles, Typography } from '@material-ui/core'
// TODO: move to BioFinanceiraTheme
const styles = {
  contained: {
    color: 'white',
    backgroundColor: '#D4436B',
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
  const { classes, variant, onClick, href, target } = props
  return (
    <Button
      target={target}
      href={href}
      variant={variant}
      classes={{
        contained: classes.contained,
        outlined: classes.outlined
      }}
      onClick={onClick}
    >
      <Typography
        variant='button'
        color='inherit'
        noWrap
      >
        {props.children}
      </Typography>
    </Button>
  )
}

export default withStyles(styles)(ButtonPar)
