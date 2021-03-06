export default {
  paper: {
    backgroundColor: '#F0F0F0'
  },
  mainBox: {
    padding: '1rem 0',
    backgroundClip: 'content-box'
  },
  subBox: {
    width: '100%',
    maxWidth: '825px'
  },
  sign: {
    marginRight: '2px'
  },
  collapsableRow: {
    maxHeight: 0,
    transition: 'all 0.4s',
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    '&:last-child': {
      borderRadius: '0 0 20px 20px'
    }
  },
  boxColumn: {
    paddingBottom: '5px',
    width: '20%'
  },
  toggleInput: {
    display: 'none',
    '&:checked + div > div': {
      maxHeight: '5rem',
      borderBottom: '0.75px solid #F0F0F0'
    }
  },
  toggle: {
    display: 'flex',
    justifyContent: 'center',
    color: '#632B7D',
    fontSize: '14px',
    margin: '11px 0',
    fontFamily: 'Roboto Bold',
    cursor: 'pointer'
  },
  typography: {
    fontSize: '16px',
    fontFamily: 'Roboto Regular',
    fontWeight: 300,
    margin: 0,
    textTransform: 'capitalize',
    color: '#9C9C9C'
  },
  positiveState: {
    color: '#7FBD42'
  },
  negativeState: {
    color: '#BA2B31',
    '&::first-letter': {
      marginRight: '2px'
    }
  },
  neutralState: {
    color: '#636363',
    '&::first-letter': {
      marginLeft: '7.75px'
    }
  },
  title: {
    color: '#9C9C9C',
    fontSize: '14px',
    fontFamily: 'Roboto Regular',
    fontWeight: '300',
    textTransform: 'uppercase'
  },
  subTitle: {
    fontSize: '14px'
  }
}
