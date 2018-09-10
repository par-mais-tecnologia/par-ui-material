import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Generic from '../Generic'

configure({ adapter: new Adapter() })

export const test = describe('Generic', () => {
  it('shallow Generic', () => {
    const wrapper = shallow(
      <Generic />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow Generic match Snapshot', () => {
    const wrapper = shallow(
      <Generic />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
