import { createMuiTheme } from '@material-ui/core/styles'
import { styles } from './styles/styles'
import sliderStyle from './styles/slider'
import patrimonyResultChartStyle from './styles/patrimonyResultChart'
import stepperDotsStyle from './styles/stepperDots'
import buttonStyle from './styles/button'

const theme = {
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
    headline: {
      ...styles.fonts.headline
    },
    body1: {
      ...styles.fonts.body1
    },
    body2: {
      ...styles.fonts.body2
    },
    subheading: {
      ...styles.fonts.subheading
    },
    display1: {
      ...styles.fonts.title2
    },
    display2: {
      ...styles.fonts.body3
    },
    button: {
      ...styles.fonts.button
    },
    title: {
      ...styles.fonts.title1
    }
  },
  overrides: {
    MuiMenuItem: {
      root: {
        height: 'auto',
        whiteSpace: 'normal'
      }
    },
    MuiSlider: sliderStyle,
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
        fontFamily: 'Roboto'
      }
    },
    MuiFormLabel: {
      asterisk: {
        display: 'none'
      }
    },
    MuiFormHelperText: {
      root: {
        marginTop: '2px'
      },
      required: {
        color: '#f44336'
      }
    }
  },
  patrimonyResultChart: patrimonyResultChartStyle,
  stepperDotsStyle,
  buttonStyle
}
theme.overrides.MuiInputLabel.root = theme.typography.body2
theme.overrides = {
  ...theme.overrides,
  MuiSelect: { selectMenu: { whiteSpace: 'inherit' } },
  MuiSlider: { ...theme.overrides.MuiSlider, root: { marginBottom: '1rem' } },
  MuiFormLabel: { ...theme.overrides.MuiFormLabel, root: { width: 'max-content' } },
  MuiFormHelperText: {
    ...theme.overrides.MuiFormHelperText,
    root: { fontFamily: '\'Roboto Regular\', \'sans-serif\'', fontSize: '.875rem', marginTop: '2px' } },
  MuiInput: {
    root: { borderBottom: '0px solid #d4d4d4' },
    underline: {
      '&:before': {
        borderBottomColor: '#d4d4d4'
      }
    }
  },
  MuiTypography: {
    ...theme.styles.fonts,
    display3: {
      ...theme.styles.fonts.display3,
      fontSize: 24,
      fontWeight: 'bold',
      color: '#5EB8C0'
    }
  }
}

export const bioFinanceiraTheme = createMuiTheme(theme)

export default bioFinanceiraTheme
