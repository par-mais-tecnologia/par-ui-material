import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import FinancialPanel from './FinancialPanel'

configure({ adapter: new Adapter() })

export const test = describe('FinancialPanel', () => {
  const getShallow = () => (
    <FinancialPanel
      headerName='Multimercado'
      headerPercentage='0.35'
      color='#0580C4'
      data={{
        name: 'AZ Legan Low VOL',
        walletComposition: 0.2,
        performance24: 1.38,
        portfolio: 'Ações, moedas, mercado de juros',
        index: 'CDI',
        gross: 297321988,
        cnpj: '05.488.919/001-90'
      }} />
  )

  it('shallow FinancialPanel', () => {
    const wrapper = shallow(
      <FinancialPanel />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow FinancialPanel match Snapshot', () => {
    const wrapper = shallow(getShallow())
    expect(wrapper).toMatchSnapshot()
  })
})
