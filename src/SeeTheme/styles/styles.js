import './animations.css'
import './colors.css'
import './fonts.css'
import './reset.css'

const colors = {
  gray_01: '#636363',
  gray_02: '#9C9C9C',
  gray_03: '#D4D4D4',
  gray_04: '#F0F0F0',

  fairy: '#B6DDDC',
  aqua: '#8ACAC7',
  turquise: '#5EB8C0',
  siren: '#019193',
  see: '#347A7C',

  pink: '#D2436C',

  green: '#94BA1D',

  lightGreen: '#7FBC42',

  red: '#BA2B31',

  purple: '#632B7D',

  cobalt: '#0880C4',

  white: '#ffffff',

  yellow: '#F8DB02',

  seeGradient: 'linear-gradient(26deg, #347A7C, #8ACAC7)',
  bgFooter: '#383838'
}

const classes = {
  h1Style: 'f2 roboto-light gray_01',
  h2Style: 'f3 roboto-light gray_01',
  h3Style: 'f3 roboto-light white',
  h4Style: 'f5 roboto-regular white',
  h5Style: 'f5 roboto-light white',
  h6Style: 'f2 brandon-regular white'
}

const fonts = {
  body1: {
    fontFamily: 'Roboto Light, sans-serif',
    fontSize: '16px',
    color: colors.gray_01
  },
  body2: {
    fontFamily: 'Roboto Regular, sans-serif',
    fontSize: '16px',
    color: colors.gray_01
  },
  button: {
    fontFamily: 'Roboto Bold, sans-serif',
    fontSize: '14px',
    color: colors.purple
  },
  caption: {
    fontFamily: 'Roboto Regular, sans-serif',
    fontSize: '14px',
    color: colors.gray_02
  },
  display1: {
    fontFamily: 'Roboto Regular, sans-serif',
    fontSize: '16px',
    color: colors.pink
  },
  display2: {
    fontFamily: 'Roboto Regular, sans-serif',
    fontSize: '16px',
    color: colors.lightGreen
  },
  display3: {
    fontFamily: 'Roboto Regular, sans-serif',
    fontSize: '16px',
    color: colors.yellow
  },
  display4: {
    fontFamily: 'Roboto Regular, sans-serif',
    fontSize: '16px',
    color: colors.cobalt
  },
  h1: {
    fontFamily: 'Roboto Light, sans-serif',
    fontSize: '36px',
    color: colors.gray_01
  },
  h2: {
    fontFamily: 'Roboto Light, sans-serif',
    fontSize: '24px',
    lineHeight: 1.5,
    color: colors.gray_01
  },
  h3: {
    fontFamily: 'Roboto Light, sans-serif',
    fontSize: '24px',
    color: colors.white
  },
  h4: {
    fontFamily: 'Roboto Regular, sans-serif',
    fontSize: '16px',
    color: colors.white
  },
  h5: {
    fontFamily: 'Roboto Light, sans-serif',
    fontSize: '16px',
    color: colors.white
  },
  h6: {
    fontFamily: 'Brandon Regular, sans-serif',
    fontSize: '30px',
    color: colors.white
  },
  headline: {
    fontFamily: 'Brandon Regular, sans-serif',
    fontSize: '20px',
    color: colors.white
  },
  inherit: {
    /* free to use */
  },
  overline: {
    fontFamily: 'Roboto Bold, sans-serif',
    fontSize: '16px',
    color: colors.gray_02
  },
  srOnly: {
    /* free to use */
  },
  subtitle1: {
    fontFamily: 'Roboto Bold, sans-serif',
    fontSize: '16px',
    color: colors.white
  },
  subtitle2: {
    fontFamily: 'Roboto Bold, sans-serif',
    fontSize: '14px',
    color: colors.white
  },
  subheading: {
    fontFamily: 'Roboto Regular, sans-serif',
    fontSize: '12px',
    color: colors.white
  },
  title: {
    fontFamily: 'Roboto Light, sans-serif',
    fontSize: '28px',
    color: colors.gray_01
  }
}

const buttonStyles = {
  contained: {
    color: 'white',
    backgroundColor: '#632B7D',
    '&$contained:hover': {
      backgroundColor: '#491760'
    },
    '&$contained:focus': {
      backgroundColor: '#8849A5'
    }
  },
  outlined: {
    color: '#D4436B',
    backgroundColor: 'white',
    borderStyle: 'hidden solid solid solid',
    boxShadow: '0px 1px #C1C1C1',
    '&$outlined:hover': {
      backgroundColor: '#F7F7F7'
    },
    '&$outlined:focus': {
      backgroundColor: '#F0F0F0'
    }
  }
}

export const styles = {
  colors,
  classes,
  fonts,
  buttonStyles
}
