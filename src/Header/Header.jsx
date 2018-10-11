import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid'

class Header extends PureComponent {
  getStyle (props) {
    return {
      height: props.height,
      backgroundImage: props.backgroundImage,
      boxShadow: props.boxShadow
    }
  }

  render () {
    const { classes } = this.props

    return (
      <Grid container alignItems='center' style={this.getStyle(this.props)} className={`${classes} top-0`}>
        {this.props.children}
      </Grid>
    )
  }
}

Header.defaultProps = {
  height: '70px',
  backgroundImage: 'linear-gradient(26deg, rgb(52, 122, 124), rgb(138, 202, 199))',
  boxShadow: '0px -3px 20px 0px'
}

export default Header
