import React, { PureComponent } from 'react'

class SummaryHeader extends PureComponent {
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
      <div className={`flex items-center w-100 ${classes}`} style={this.getStyle(this.props)}>
        {this.props.children}
      </div>
    )
  }
}

SummaryHeader.defaultProps = {
  height: 'auto',
  backgroundImage: 'linear-gradient(26deg, rgb(52, 122, 124), rgb(138, 202, 199))',
  boxShadow: '0px -3px 20px 0px'
}

export default SummaryHeader
