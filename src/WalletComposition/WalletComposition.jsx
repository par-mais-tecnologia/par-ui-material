import React, { PureComponent } from 'react'
import * as PropTypes from 'prop-types'
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
          <div className='mt3' id={item.fundName}>
            <Typography variant='caption'>
              {item.fundName}<br />
              <Typography variant='body1'>
                {item.percentage}
              </Typography>
            </Typography>
          </div>
        ))}
      </div>
    )
  }
}

WalletComposition.propTypes = {
  data: PropTypes.array,
  containerClasses: PropTypes.string
}

export default WalletComposition
