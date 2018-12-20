export default {
  tooltipWrapper: {
    background: 'rgba(99, 43, 125, .8)',
    borderRadius: '3px',
    padding: '15px',
    color: '#fff',
    minWidth: '10rem',
    fontWeight: '14px'
  },
  tooltip: {
    transform: 'translate(5px,-70px)',
    opacity: '0.75',
    fill: '#333333'
  },
  tooltipCircle: {
    fill: '#632B7D'
  },
  tooltipLine: {
    stroke: '#636363',
    strokeWidth: '1px'
  },
  tooltipElement: {
    transition: 'all .0s ease-in'
  },
  filterTabsRow: {
    borderBottom: '#E2E2E2 solid 1px',
    margin: '2rem'
  },
  tabsIndicator: {
    backgroundColor: '#632B7D'
  },
  tabLabel: {
    color: '#632B7D'
  },
  buttonsWrapper: {
    margin: '2rem'
  },
  buttonsRow: {
    minWidth: '15rem',
    margin: '0rem 2rem',
    justifyContent: 'space-evenly'
  },
  buttonDefault: {
    color: '#9C9C9C',
    border: '1px solid #9C9C9C',
    borderRadius: '20px',
    background: 'transparent',
    boxShadow: 'none',
    transition: 'all .5s ease',
    '&:hover': {
      background: 'transparent'
    }
  },
  buttonActive: {
    color: '#fff',
    border: 'none',
    background: '#5EB8C0',
    borderRadius: '20px',
    boxShadow: 'none',
    transition: 'all .5s ease',
    '&:hover': {
      background: '#5EB8C0'
    }
  },
  axis: {
    fontFamily: 'Roboto Regular, sans-serif',
    fontSize: '14px'
  }
}
