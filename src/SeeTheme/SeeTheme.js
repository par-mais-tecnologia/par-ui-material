import { createMuiTheme } from '@material-ui/core/styles'
import { styles } from './styles/styles'
import buttonStyle from './styles/button'
import menu from './styles/menu'
import rentabilityBar from './styles/rentabilityBar'
import financialPanel from './styles/financialPanel'
import parallax from './styles/parallax'
import lineGraph from './styles/lineGraph'

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
    MuiExpansionPanelDetails: {
      root: {
        flexDirection: 'column'
      }
    },
    MuiInput: {
      underline: {
        '&:after': {
          borderBottomColor: styles.colors.siren
        },
        '&:before': {
          borderBottom: `1px solid ${styles.colors.gray_02}`
        },
        '&$error:after': {
          borderBottomColor: styles.colors.red
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottomColor: styles.colors.turquise
        }
      }
    },
    MuiInputBase: {
      input: {
        ...styles.fonts.body1,
        padding: '10px 0 7px',
        caretColor: styles.colors.siren
      },
      inputType: {
        height: '2rem'
      }
    },
    MuiInputLabel: {
      root: {
        ...styles.fonts.caption
      },
      shrink: {
        transform: 'translate(0, 1.5px) scale(1)'
      }
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: styles.colors.siren
        },
        '&$error': {
          color: styles.colors.red
        }
      },
      asterisk: {
        display: 'none'
      }
    },
    MuiFormHelperText: {
      required: {
        ...styles.fonts.caption,
        color: styles.colors.red,
        marginTop: 0
      }
    },
    MuiFormControl: {
      marginNormal: {
        marginTop: 0,
        marginBottom: '10px'
      }
    },
    MuiButton: {
      outlinedSecondary: {
        border: '1px solid transparent',
        '&:hover': {
          border: '1px solid transparent'
        }
      }
    }
  },
  buttonStyle,
  menu,
  rentabilityBar,
  financialPanel,
  parallax,
  lineGraph
})

export default seeTheme
