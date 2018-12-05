import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Typography from '../Typography'
import { getWalletComposition } from './functions'

class WalletComposition extends PureComponent {
  render () {
    const { data, containerClasses } = this.props
    const walletComposition = getWalletComposition(data)
    return (
      <div className={containerClasses}>
        <Typography variant='body2'>Composição da carteira</Typography>
        {walletComposition.map(item => (
          <div className='mt2'>
            <Typography>{item.fundName} <br />{item.percentage}</Typography>
          </div>
        ))}
      </div>
    )
  }
}

WalletComposition.PropTypes = {
  data: PropTypes.array,
  containerClasses: PropTypes.string
}

export default WalletComposition
