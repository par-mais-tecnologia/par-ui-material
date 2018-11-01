import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MyWalletLoading } from '../index'

configure({ adapter: new Adapter() })

describe('MyWalletLoading', () => {
  it('shallow MyWalletLoading', () => {
    const wrapper = shallow(
      <MyWalletLoading />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow MyWalletLoading match Snapshot', () => {
    const wrapper = shallow(
      <MyWalletLoading fontSize='3em' />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
