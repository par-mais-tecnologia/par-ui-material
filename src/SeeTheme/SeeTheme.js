import { createMuiTheme } from '@material-ui/core/styles'
import { styles } from './styles/styles'
import buttonStyle from './styles/button'
import menu from './styles/menu'
import rentabilityBar from './styles/rentabilityBar'
import financialPanel from './styles/financialPanel'

export const seeTheme = createMuiTheme({
  styles,
  palette: {
    primary: {
      main: styles.colors.turquise
    }
  },
  typography: {
    fontFamily: '\'Roboto Light\', \'sans-serif\'',
    fontSize: '1rem',
    color: styles.colors.gray_01,
    body1: {
      ...styles.fonts.body1
    },
    body2: {
      ...styles.fonts.body2
    },
    button: {
      ...styles.fonts.button
    },
    caption: {
      ...styles.fonts.caption
    },
    display1: {
      ...styles.fonts.display1
    },
    display2: {
      ...styles.fonts.display2
    },
    display3: {
      ...styles.fonts.display3
    },
    display4: {
      ...styles.fonts.display4
    },
    h1: {
      ...styles.fonts.h1
    },
    h2: {
      ...styles.fonts.h2
    },
    h3: {
      ...styles.fonts.h3
    },
    h4: {
      ...styles.fonts.h4
    },
    h5: {
      ...styles.fonts.h5
    },
    h6: {
      ...styles.fonts.h6
    },
    headline: {
      ...styles.fonts.headline
    },
    inherit: {
      /* free to use */
    },
    overline: {
      ...styles.fonts.overline
    },
    srOnly: {
      /* free to use */
    },
    subtitle1: {
      ...styles.fonts.subtitle1
    },
    subtitle2: {
      ...styles.fonts.subtitle2
    },
    subheading: {
      ...styles.fonts.subheading
    },
    title: {
      ...styles.fonts.title
    }
  },
  overrides: {
    MuiPickersSlideTransition: {
      transitionContainer: {
        fontFamily: 'Roboto Light',
        fontSize: '12px'
      }
    },
    MuiInputBase: {
      input: {
        fontFamily: 'Roboto Light'
      }
    },
    MuiInputLabel: {
      root: {
        fontFamily: 'Roboto Regular'
      }
    },
    MuiFormLabel: {
      asterisk: {
        display: 'none'
      }
    },
    MuiFormHelperText: {
      required: {
        color: '#f44336'
      }
    },
    MuiExpansionPanelDetails: {
      root: {
        flexDirection: 'column'
      }
    }
  },
  buttonStyle,
  menu,
  rentabilityBar,
  financialPanel
})

export default seeTheme
