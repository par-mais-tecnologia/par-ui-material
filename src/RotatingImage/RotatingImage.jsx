import React, { PureComponent } from 'react'

import './style.css'

export default class RotatingImage extends PureComponent {
  render () {
    const { width, height, imageUrl } = this.props
    return (
      <div>
        <img
          id='loading'
          style={{ width: width, height: height }}
          src={imageUrl}
        />
      </div>
    )
  }
}
