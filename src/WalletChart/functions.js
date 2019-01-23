import * as dictionary from '../Core/dictionary'

export function getStrategiesData (strategiesWithValues, initialInvestment) {
  let strategiesArray = []

  strategiesWithValues.map(item => {
    let object = {
      name: item[0],
      amount: item[1].toFixed(2),
      percentual: ((item[1] * 100) / initialInvestment).toFixed(1)
    }

    strategiesArray.push(object)
  })

  return strategiesArray
}

export function getStrategies (initialInvestment, wallet) {
  let strategies = inicializeStrategies()

  wallet.forEach(item => {
    strategies.forEach(strategy => {
      if (strategy[0] === item.product.strategy) {
        strategy[1] += initialInvestment * item.percentual
      }
    })
  })

  return strategies
}

function inicializeStrategies () {
  return [
    [dictionary.ACOES_STRATEGIE, 0],
    [dictionary.RENDA_POS_FIXADO_STRATEGIE, 0],
    [dictionary.RENDA_PRE_FIXADO_STRATEGIE, 0],
    [dictionary.RENDA__INFLACAO_STRATEGIE, 0],
    [dictionary.MULTIMERCADO_STRATEGIE, 0],
    [dictionary.INTERNACIONAL_STRATEGIE, 0],
    [dictionary.FUNDO_IMOBILIARIO_STRATEGIE, 0],
    [dictionary.PREVIDENCIA_STRATEGIE, 0]
  ]
}

export function getStrategieColorLegend (strategieName) {
  switch (strategieName) {
    case 'Ações': return '#D4426A'
    case 'Renda Fixa Pós-Fixado': return '#94ba1d'
    case 'Renda Fixa Pré-Fixado': return '#E6BB52'
    case 'Renda Fixa Inflação': return '#FF8000'
    case 'Multimercado': return '#007CA3'
    case 'Internacional': return '#F7DC00'
    case 'Fundo Imobiliário': return '#632B7D'
    case 'Previdência': return '#BA2B31'
  }
}

export function getStrategiesColors () {
  return {
    'Ações': '#D4426A',
    'Renda Fixa Pós-Fixado': '#94ba1d',
    'Renda Fixa Pré-Fixado': '#E6BB52',
    'Renda Fixa Inflação': '#FF8000',
    'Multimercado': '#007CA3',
    'Internacional': '#F7DC00',
    'Fundo Imobiliário': '#632B7D',
    'Previdência': '#BA2B31'
  }
}

export function formatValue (value) {
  let valueString = value.toString()
  let tmpDiv = valueString.replace(/([0-9]{2})$/g, '$1')
  let tmp = tmpDiv.replace('.', ',')
  if (tmp.length > 6) {
    tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ' $1,$2')
  }
  return tmp
}

export function formatPercent (cdi) {
  let cdiPercent = ''
  if (typeof cdi === 'string') {
    cdiPercent = cdi.replace('.', ',')
  } else {
    cdiPercent = cdi.toString().replace('.', ',')
  }

  return `${cdiPercent}`
}
