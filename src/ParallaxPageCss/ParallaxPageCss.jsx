import React from 'react'
import { withStyles } from '@material-ui/core'
const styles = theme => (theme.parallax)

const ParallaxPageCss = (props) => {
  const { classes } = props

  return (
    <div className={[classes.parallax, props.className].join(' ')}>
      {props.children}
    </div>
  )
}

export default withStyles(styles)(ParallaxPageCss)
