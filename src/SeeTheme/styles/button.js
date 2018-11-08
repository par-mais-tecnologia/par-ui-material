export default {
  contained: {
    color: 'white',
    backgroundColor: 'rgba(99, 43, 125, 1)',
    '&$contained:hover': {
      backgroundColor: '#491760'
    },
    '&$contained:focus': {
      color: 'rgba(99, 43, 125, 1)',
      backgroundColor: 'white'
    }
  },
  outlined: {
    color: 'rgba(99, 43, 125, 1)',
    backgroundColor: 'white',
    borderStyle: 'hidden solid solid solid',
    boxShadow: '0px 1px #C1C1C1',
    '&$outlined:hover': {
      backgroundColor: '#F0F0F0'
    },
    '&$outlined:focus': {
      backgroundColor: '#F0F0F0'
    }
  }
}
