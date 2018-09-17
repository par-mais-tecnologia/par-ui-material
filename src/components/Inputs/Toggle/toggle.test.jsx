import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Toogle from './toggle'

configure({ adapter: new Adapter() })

export const test = describe('toogle', () => {
  it('shallow Toogle', () => {
    const wrapper = shallow(
      <Toogle />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow Toogle match Snapshot', () => {
    const wrapper = shallow(
      <Toogle />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
