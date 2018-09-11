import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Generic from './generic'

configure({ adapter: new Adapter() })

export const test = describe('Generic', () => {
  it('shallow Password', () => {
    const wrapper = shallow(
      <Generic />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow Password match Snapshot', () => {
    const wrapper = shallow(
      <Generic />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
