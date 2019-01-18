import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'

const styles = theme => ({
  footer: {
    bottom: '0px',
    width: ' 100%',
    margin: '0 auto',
    background: theme.styles && theme.styles.bgFooter ? theme.styles.bgFooter : '#000',
    zIndex: ' 100'
  }
})

class BaseFooter extends PureComponent {
  render () {
    const { children, classes, footerProps } = this.props

    return (
      <Grid container justify='center' style={{ footerProps }} className={classes.footer}>
        {children}
      </Grid>
    )
  }
}

BaseFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default withStyles(styles)(BaseFooter)
