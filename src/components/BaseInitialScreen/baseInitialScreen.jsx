import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { convertHexToRGB } from './functions'

import '../Core/styles/index.css'
import './styles/index.css'

export default class BaseInitialScreen extends PureComponent {
  render () {
    const { imageSrc, middleBoxColor, middleBoxFullScreen, children } = this.props

    const backgroundClasses = 'flex justify-center absolute items-center w-100 h-100 cover'
    const middleBoxClasses = 'flex middleBox flex ab row justify-center items-center flex-wrap w-auto-ns h-auto-ns absolute'

    const styles = {
      backgroundStyles: {
        backgroundImage: `url(${imageSrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      },
      middleBoxStyles: {
        background: 'inherit',
        overflow: 'hidden',
        width: middleBoxFullScreen ? '100%' : '',
        height: middleBoxFullScreen ? '100%' : ''
      },
      glassColor: {
        backgroundColor: middleBoxColor !== '' ? convertHexToRGB(middleBoxColor, 0.6) : '',
        width: middleBoxFullScreen ? '100%' : '',
        height: middleBoxFullScreen ? '100%' : ''
      }
    }

    return (
      <div className={backgroundClasses} style={styles.backgroundStyles}>
        <div className={middleBoxClasses} style={styles.middleBoxStyles}>
          <div className={`glassColor ma0-ns z-5 pa4`} style={styles.glassColor}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

BaseInitialScreen.propTypes = {
  imageSrc: PropTypes.string,
  middleBoxColor: PropTypes.string,
  middleBoxFullScreen: PropTypes.bool
}

BaseInitialScreen.defaultProps = {
  imageSrc: 'https://static.parmais.com.br/images/background.jpg',
  middleBoxColor: '#347A7C',
  middleBoxFullScreen: false
}