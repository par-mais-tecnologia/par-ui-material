import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CheckBox from './'

configure({ adapter: new Adapter() })

export const test = describe('CheckBox', () => {
  it('shallow Currency', () => {
    const wrapper = shallow(
      <CheckBox />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow Currency match Snapshot', () => {
    const wrapper = shallow(
      <CheckBox />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
