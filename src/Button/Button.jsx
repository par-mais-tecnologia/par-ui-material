import React from 'react'
import { Button, withStyles, Typography } from '@material-ui/core'

const styles = theme => (theme.buttonStyle)

function ButtonPar (props) {
  const { classes, variant, onClick, href, target } = props
  return (
    <Button
      {...props}
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
