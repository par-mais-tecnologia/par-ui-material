import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './style.css'

export default class MyWalletLoading extends PureComponent {
  render () {
    const { fontSize } = this.props
    return (
      <div style={{ height: '100%' }} className='flex justify-center items-center'>
        <div className='flex justify-center items-center'>
          <div className='container' style={{ fontSize }}>
            <div className='back-layer'>
              <p className='rounded-elegance'>
                <span className='hashtag'>#</span>
                <span className='cliente'>Cliente</span>
                <span className='mais'>Mais</span>
              </p>
            </div>
            <div className='front-layer'>
              <p className='linear-wipe rounded-elegance'>
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
