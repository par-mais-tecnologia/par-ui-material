import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { LegendChart } from '../index'
import { getStrategies } from '../WalletChart/functions'
import { walletExample } from '../Core/mocks'

configure({ adapter: new Adapter() })

const initialInvestment = 200000
const strategies = getStrategies(initialInvestment, walletExample)

const wrapper = shallow(
  <LegendChart initialInvestment={initialInvestment} strategies={strategies} />
)

describe('LegendChart', () => {
  it('shallow LegendChart', () => {
    expect(wrapper).toBeTruthy()
  })

  it('shallow LegendChart match Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
