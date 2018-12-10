import React from 'react'
import { withStyles } from '@material-ui/core'
const styles = theme => (theme.parallax)

const ParallaxPageCss = (props) => {
  const { classes } = props

  return (
    <div className={
      props.mobile
        ? [classes.parallaxContainer, classes.mobile].join(' ') : classes.parallaxContainer
    }>
      <div className={classes.parallax}>
        <div className={classes.content}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(ParallaxPageCss)
