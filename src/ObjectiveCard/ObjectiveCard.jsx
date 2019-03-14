import React, { PureComponent } from 'react'
import { Paper, Typography } from '../index'
import { getCurrencyFormat } from '../Core/masks'
import * as PropTypes from 'prop-types'

export default class ObjectiveCard extends PureComponent {
  render () {
    const {
      title,
      subTitle,
      value,
      titleProps,
      className,
      ...rest
    } = this.props

    return (
      <Paper elevation={1} className={`ph4 pv4 flex flex-column justify-between ${className}`} {...rest}>
        <div>
          <Typography variant='h2' align='center' style={{ fontSize: 16, ...titleProps.style }} {...titleProps}>
            { title }
          </Typography>
        </div>
        <div>
          <Typography variant='caption' align='center' style={{ fontSize: '16px' }}>
            { subTitle }
          </Typography>
          <Typography variant='body2' align='center'>
            {getCurrencyFormat(value, 'R$', 0, ' ')}
          </Typography>
        </div>
      </Paper>
    )
  }
}

ObjectiveCard.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  value: PropTypes.number.isRequired,
  titleProps: PropTypes.object
}

ObjectiveCard.defaultProps = {
  subTitle: 'Valor total',
  titleProps: { style: {} }
}
