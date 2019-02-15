import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '../'

const styles = (theme) => ({
  checked: theme.styles && theme.styles.fonts && theme.styles.fonts.highlight3 ? theme.styles.fonts.highlight3 : {},
  icon: theme.styles && theme.styles.colors && theme.styles.colors.turquise ? { color: theme.styles.colors.turquise } : {}
})

class CheckedText extends PureComponent {
  render () {
    const { classes, children, containerClasses, iconProps } = this.props

    return (
      <Grid container spacing={0} className={containerClasses}>
        <Grid item sm={0} style={{ paddingTop: '4px' }}>
          <i style={{ fontSize: '0.8em', ...iconProps }} className={`${classes.icon} pr3 par-icon-check`} />
        </Grid>
        <Grid item xs='true'>
          <Typography className={classes.checked}>
            {children}
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(CheckedText)
