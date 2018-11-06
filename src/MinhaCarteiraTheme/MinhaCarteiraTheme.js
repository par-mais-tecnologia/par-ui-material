import { createMuiTheme } from '@material-ui/core/styles'
import { styles } from './styles/styles'
import sliderStyle from './styles/slider'
import patrimonyResultChartStyle from './styles/patrimonyResultChart'
import stepperDotsStyle from './styles/stepperDots'

export const minhaCarteiraTheme = createMuiTheme({
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
      required: {
        color: '#f44336'
      }
    }
  },
  patrimonyResultChart: patrimonyResultChartStyle,
  stepperDotsStyle
})

export default minhaCarteiraTheme
