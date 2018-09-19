import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default class Header extends PureComponent {
  getStyle (props) {
    return {
      height: props.height,
      backgroundImage: props.backgroundImage
    }
  }

  render () {
    return (
      <Grid container alignItems='center' style={this.getStyle(this.props)}>
        <Typography align='center' variant='title'>
          {this.props.children}
        </Typography>
      </Grid>
    )
  }
}

Header.defaultProps = {
  height: '70px',
  backgroundImage: 'linear-gradient(26deg, rgb(52, 122, 124), rgb(138, 202, 199));'
}
