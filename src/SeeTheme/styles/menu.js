import * as styles from './styles'

export default {
  menuItem: {
    color: '#9C9C9C',
    '&:hover': {
      color: '#347A7C',
      backgroundColor: 'white'
    },
    '&:focus': {
      color: '#347A7C',
      backgroundColor: '#F0F0F0',
      fontFamily: 'Roboto Bold, sans-serif'
    }
  },
  closeIconButton: {
    color: styles.styles.colors.gray_02
  }
}
