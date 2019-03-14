import * as styles from './styles'

export default {
  appBar: {
    backgroundColor: styles.styles.colors.white
  },
  toolBar: {
    minHeight: 60
  },
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
  listItem: {
    '&:hover': {
      backgroundColor: 'white'
    }
  },
  listItemText: {
    '&:hover': {
      color: '#347A7C'
    },
    '&:focus': {
      color: '#347A7C',
      backgroundColor: '#F0F0F0',
      fontFamily: 'Roboto Bold, sans-serif'
    }
  },
  menuIcon: {
    color: styles.styles.colors.gray_02
  },
  exitIcon: {
    color: styles.styles.colors.purple
  },
  closeIcon: {
    color: styles.styles.colors.gray_02
  }
}
