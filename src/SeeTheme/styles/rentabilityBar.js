export default {
  mainBox: {
    backgroundColor: '#F0F0F0',
    borderRadious: '20px',
    padding: '1rem 0'
  },
  subBox: {
    width: '100%',
    maxWidth: '825px'
  },
  sign: {
    marginRight: '2px'
  },
  nonSign: {
    marginRight: '7.75px'
  },
  collapsableRow: {
    maxHeight: 0,
    transition: 'all 0.4s',
    overflow: 'hidden'
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
    fontFamily: 'Roboto Regular',
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
    color: '#BA2B31'
  },
  positiveState: {
    color: '#7FBD42'
  },
  negativeState: {
    color: '#BA2B31'
  },
  neutralState: {
    color: '#636363'
  },
  title: {
    color: '#9C9C9C',
    fontSize: '14px',
    fontFamily: 'Roboto Regular',
    fontWeight: '300',
    textTransform: 'uppercase'
  }
}
