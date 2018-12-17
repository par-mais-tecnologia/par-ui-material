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
      <div className={classes.parallaxSection}>
        <div className={classes.parallaxContent}>
          {props.header}
        </div>
      </div>
      <div className={classes.content}>
        {props.content}
      </div>
      <div>
        {props.footer}
      </div>
    </div>
  )
}

export default withStyles(styles)(ParallaxPageCss)
