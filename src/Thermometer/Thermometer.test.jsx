import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Thermometer from './'

configure({ adapter: new Adapter() })

export const test = describe('Thermometer', () => {
  it('shallow Thermometer', () => {
    const wrapper = shallow(
      <Thermometer />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow Thermometer match Snapshot', () => {
    const wrapper = shallow(
      <Thermometer />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
