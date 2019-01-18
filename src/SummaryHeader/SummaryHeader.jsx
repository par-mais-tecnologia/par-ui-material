import React, { PureComponent } from 'react'

class SummaryHeader extends PureComponent {
  getStyle (headerProps) {
    return {
      ...headerProps,
      height: headerProps && headerProps.heigth ? headerProps.heigth : 'auto',
      backgroundImage: headerProps && headerProps.backgroundImage ? headerProps.backgroundImage : 'linear-gradient(26deg, rgb(52, 122, 124), rgb(138, 202, 199))'
    }
  }

  render () {
    const { classes, headerProps } = this.props

    return (
      <div className={`flex items-center w-100 ${classes}`} style={this.getStyle(headerProps)}>
        {this.props.children}
      </div>
    )
  }
}

export default SummaryHeader
