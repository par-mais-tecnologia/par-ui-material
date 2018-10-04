import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '../'
import PropTypes from 'prop-types'

const styles = (theme) => ({
  dropCap: theme.styles && theme.styles.fonts && theme.styles.fonts.title3 ? theme.styles.fonts.title3 : {},
  body: theme.styles && theme.styles.colors && theme.styles.fonts.body2 ? { color: theme.styles.fonts.body2 } : {}
})

class DropCap extends PureComponent {
  render () {
    const { classes, children, dropCap } = this.props

    return (
      <Grid container spacing={16} alignItems='center' className='growItems'>
        <Grid item>
          <Typography className={`${classes.dropCap} growItem`}>
            {dropCap}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={`${classes.body} growItem`} style={{ whiteSpace: 'pre-line' }}>
            {children}
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

DropCap.propTypes = {
  dropCap: PropTypes.string
}

DropCap.defaultProps = {
  dropCap: 'DropCap'
}

export default withStyles(styles)(DropCap)
