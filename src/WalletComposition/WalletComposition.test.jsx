import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WalletComposition from './'
import { walletExample } from '../Core/mocks'

configure({ adapter: new Adapter() })

export const test = describe('WalletComposition', () => {
  it('shallow WalletComposition', () => {
    const wrapper = shallow(
      <WalletComposition data={walletExample} />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow WalletComposition match Snapshot', () => {
    const wrapper = shallow(
      <WalletComposition data={walletExample} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
