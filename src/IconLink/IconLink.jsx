import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const IconLink = ({ color, icon, onClick, text, fontSize, className }) => {
  return (
    <Grid container className={`b pointer ${className}`} onClick={onClick}>
      <Typography align='center' variant='body1'>
        <i style={{ color, fontSize: fontSize - 3 }} className={`par-icon-${icon} mr2`} />
        <b style={{ color, fontSize }}>{text}</b>
      </Typography>
    </Grid>
  )
}

IconLink.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  fontSize: PropTypes.number,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string
}

IconLink.defaultProps = {
  color: '#CCC',
  fontSize: 15,
  icon: 'reload',
  text: 'Texto'
}

export default IconLink
