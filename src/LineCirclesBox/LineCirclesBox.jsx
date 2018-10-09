import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Grid, createMuiTheme, MuiThemeProvider } from '../index'
import { withStyles } from '@material-ui/core/styles'
import './styles.css'

const styles = {
  line: {
    borderLeft: '1px solid var(--line-color)',
    '&:before, &:after': {
      background: 'var(--line-color)'
    }
  }
}

class LineCirclesBox extends PureComponent {
  componentDidMount () {
    const { classes, lineColor } = this.props
    const line = classes.line

    this.lineRef = ReactDOM.findDOMNode(this);
    this.lineRef.style.setProperty('--line-color', lineColor)
  }

  render () {
    const { children, classes } = this.props
    const line = classes.line
    return (
        <Grid container ref={this.setLineRefRef} className={`line-circles-box ${line}`}>
          {children}
        </Grid>
    )
  }
}

LineCirclesBox.propTypes = {
  lineColor: PropTypes.string
}

LineCirclesBox.defaultProps = {
  lineColor: '#7fbd42'
}

export default withStyles(styles)(LineCirclesBox)
