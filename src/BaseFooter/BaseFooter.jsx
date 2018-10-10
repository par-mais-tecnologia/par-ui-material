import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'

const styles = (theme) => ({
  footer: {
    position: 'fixed',
    bottom: '0px',
    width: ' 100%',
    margin: '0 auto',
    background: theme.styles && theme.styles.bgFooter ? theme.styles.bgFooter : '#000',
    zIndex: ' 100'
  }
})

class BaseFooter extends PureComponent {
  render () {
    const { children, classes, height } = this.props

    return (
      <Grid container justify='center' style={{ height }} className={classes.footer}>
        {children}
      </Grid>
    )
  }
}

BaseFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  height: PropTypes.number.isRequired
}

export default withStyles(styles)(BaseFooter)
