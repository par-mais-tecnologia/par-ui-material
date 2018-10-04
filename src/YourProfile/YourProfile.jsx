import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, CheckedText } from '../index'

class YourProfile extends PureComponent {
  render () {
    const { profile, justification, options } = this.props

    return (
      <Grid container direction='column' className='mt3'>
        <Grid className='mb3'>
          <Typography>
            Levando em conta os fatores psicológicos, seu perfil de risco é: <b>{profile}</b>
          </Typography>
        </Grid>
        <Grid className='mb4'>
          <Typography>
            {justification}
          </Typography>
        </Grid>
        <Grid>
          {Object.values(options).map((i) => {
            return (
              <CheckedText key={i} containerClasses='mb4'>
                {i}
              </CheckedText>
            )
          })}
        </Grid>
      </Grid>
    )
  }
}

YourProfile.propTypes = {
  profile: PropTypes.string,
  justification: PropTypes.string,
  options: PropTypes.oneOfType(
    [
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.object
    ]
  )
}

YourProfile.defaultProps = {
  profile: 'Lorem ipsum',
  justification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  options: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  ]
}

export default YourProfile
