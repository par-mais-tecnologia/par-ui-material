import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { importAllImages } from '../Core/functions'

const images = importAllImages(require.context('./assets', false, /\.(svg)$/))

class Thermometer extends PureComponent {
  render () {
    const { bioColor } = this.props
    const img = images[`BIO_${bioColor.toUpperCase()}_MOBILE.svg`]
    return (
      <img className='t'
        src={img}
      />
    )
  }
}

Thermometer.propTypes = {
  bioColor: PropTypes.string
}

Thermometer.defaultProps = {
  bioColor: 'azul'
}

export default Thermometer
