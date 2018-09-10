import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Currency from './currency'

configure({ adapter: new Adapter() })

export const test = describe('Currency', () => {
  it('shallow Currency', () => {
    const wrapper = shallow(
      <Currency />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow Currency match Snapshot', () => {
    const wrapper = shallow(
      <Currency />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
