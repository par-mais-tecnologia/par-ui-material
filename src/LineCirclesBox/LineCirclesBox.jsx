import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, createMuiTheme, MuiThemeProvider } from '../index'

import './styles.css'

class LineCirclesBox extends PureComponent {
  getTheme (lineColor) {
    return createMuiTheme({
      overrides: {
        MuiGrid: {
          container: {
            borderLeft: `1px solid ${lineColor}`,
            '&:before, &:after': {
              background: lineColor
            }
          }
        }
      }
    })
  }

  render () {
    const { children, lineColor } = this.props
    return (
      <MuiThemeProvider theme={this.getTheme(lineColor)}>
        <Grid container className='line-circles-box'>
          {children}
        </Grid>
      </MuiThemeProvider>
    )
  }
}

LineCirclesBox.propTypes = {
  lineColor: PropTypes.string
}

LineCirclesBox.defaultProps = {
  lineColor: '#7fbd42'
}

export default LineCirclesBox
