import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid'
import { withTheme } from '@material-ui/core/styles'

import PropTypes from 'prop-types'

class BaseFooter extends PureComponent {
  render () {
    const { children, theme } = this.props
    const { colors } = theme.styles

    return (
      <Grid container justify='center' style={{ backgroundColor: colors.bgFooter }}>
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

export default withTheme()(BaseFooter)
