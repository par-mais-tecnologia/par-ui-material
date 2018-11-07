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

  pink: '#D4436B',

  green: '#94BA1D',

  purple: '#632B7D',

  cobalt: '#007CA3',

  white: '#ffffff',

  seeGradient: 'linear-gradient(26deg, #347A7C, #8ACAC7)',
  bgFooter: '#383838'
}

const classes = {
  title1: 'f4 brandon-regular pink',
  title2: 'f1 roboto-medium gray_01',
  title3: 'f1 roboto-medium turquise',
  subtitle1: 'f3 roboto-light gray_01',
  subtitle2: 'f3 roboto-medium turquise',
  subtitle3: 'f4 brandon-regular turquise',
  subtitle4: 'f6 brandon-bold turquise',
  subtitle5: 'f7 roboto-light gray_04',
  body1: 'f5 roboto-light gray_01',
  body2: 'f4 roboto-light gray_01',
  body4: 'f5 roboto-medium gray_01',
  highlight1: 'f5 roboto-medium pink',
  highlight2: 'f6 roboto-regular gray_01',
  highlight3: 'f5 roboto-light pink',
  links: 'f6 roboto-bold gray_02',
  button: 'f6 roboto-medium pink toUppercase'
}

const fonts = {
  title1: {
    fontFamily: '\'Brandon Regular\', sans-serif',
    fontSize: '1.25rem',
    color: colors.pink
  },
  title2: {
    fontFamily: '\'Roboto Medium\', sans-serif',
    fontSize: '3rem',
    color: colors.gray_01
  },
  title3: {
    fontFamily: '\'Roboto Medium\', sans-serif',
    fontSize: '3rem',
    color: colors.turquise
  },
  subtitle1: {
    fontFamily: '\'Roboto Light\', sans-serif',
    fontSize: '1.5rem',
    color: colors.gray_01
  },
  subtitle2: {
    fontFamily: '\'Roboto Medium\', sans-serif',
    fontSize: '1.5rem',
    color: colors.turquise
  },
  subtitle3: {
    fontFamily: '\'Roboto Regular\', sans-serif',
    fontSize: '1.25rem',
    color: colors.turquise
  },
  subtitle4: {
    fontFamily: '\'Roboto Regular\', sans-serif',
    fontSize: '.875rem',
    color: colors.turquise
  },
  body1: {
    fontFamily: '\'Roboto Light\', sans-serif',
    fontSize: '1rem',
    color: colors.gray_01
  },
  body2: {
    fontFamily: '\'Roboto Regular\', sans-serif',
    fontSize: '.875rem',
    color: colors.gray_02
  },
  body3: {
    fontFamily: '\'Roboto Medium\', sans-serif',
    fontSize: '3rem',
    color: colors.turquise
  },
  body4: {
    fontFamily: '\'Roboto Medium\', sans-serif',
    fontSize: '1rem',
    color: colors.gray_01
  },
  highlight1: {
    fontFamily: '\'Roboto Medium\', sans-serif',
    fontSize: '1rem',
    color: colors.pink
  },
  highlight2: {
    fontFamily: '\'Roboto Regular\', sans-serif',
    fontSize: '.875rem',
    color: colors.gray_01
  },
  highlight3: {
    fontFamily: '\'Roboto Light\', sans-serif',
    fontSize: '1rem',
    color: colors.pink
  },
  links: {
    fontFamily: '\'Brandon Regular\', sans-serif',
    fontSize: '1.25rem',
    color: colors.pink
  },
  button: {
    fontFamily: '\'Roboto Medium\', sans-serif',
    fontSize: '.875rem',
    color: colors.pink
  },
  subheading: {
    fontFamily: '\'Roboto Medium\', sans-serif',
    fontSize: '1rem',
    color: colors.pink
  },
  mainTitle: {
    fontFamily: "'Brandon Light', sans-serif",
    fontSize: '1.6rem',
    color: colors.white
  },
  footerText: {
    fontFamily: 'Roboto-Light, sans-serif',
    fontSize: '0.875rem',
    color: colors.gray_04
  },
  headline: {
    fontFamily: 'Roboto-Light, sans-serif',
    fontSize: '1.25rem',
    color: colors.gray_01
  }
}

export const styles = {
  colors,
  classes,
  fonts
}
