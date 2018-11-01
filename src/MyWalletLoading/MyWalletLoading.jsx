import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './style.css'

export default class MyWalletLoading extends PureComponent {
  render () {
    const { fontSize } = this.props
    return (
      <div style={{ height: '100%' }} className='flex justify-center items-center'>
        <div className='flex justify-center items-center'>
          <div class='container' style={{ fontSize }}>
            <div class='back-layer'>
              <p className='rounded-elegance'>
                <span class='hashtag'>#</span>
                <span class='cliente'>Cliente</span>
                <span class='mais'>Mais</span>
              </p>
            </div>
            <div class='front-layer'>
              <p class='linear-wipe rounded-elegance'>
                <span>#ClienteMais</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MyWalletLoading.propTypes = {
  fontSize: PropTypes.string
}

MyWalletLoading.defaultProps = {
  fontSize: '2em'
}
