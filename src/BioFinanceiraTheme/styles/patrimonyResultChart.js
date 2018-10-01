import './animations.css'

export default {
  paddingBottom: '16px',
  '&$patrimony .display4': {
    color: '#707070',
    fontFamily: 'Roboto Medium'
  },
  '&$patrimony .percentage': {
    color: '#A3A3A3'
  },
  '&$patrimony:hover .onHover.investment': {
    color: '#632B7D'
  },
  '&$patrimony:hover .onHover.realstate': {
    color: '#5EB8C0'
  },
  '&$patrimony:hover .onHover.movable': {
    color: '#347A7C'
  },
  '&$patrimony:hover .bar': {
    animation: 'createBox 0.2s forwards'
  }
}
