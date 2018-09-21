import { createMuiTheme } from '@material-ui/core/styles'
import { styles } from './styles/styles'
import sliderStyle from './styles/slider'

export const bioFinanceiraTheme = createMuiTheme({
  styles,
  typography: {
    fontFamily: '\'Roboto Light\', \'sans-serif\'',
    fontSize: '1rem',
    color: styles.colors.gray_01,
    headline: {
      ...styles.fonts.title2
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
      ...styles.fonts.body4
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
    MuiSlider: sliderStyle
  }
})

export default bioFinanceiraTheme