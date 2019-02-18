import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Input from './'

configure({ adapter: new Adapter() })

export const test = describe('Input', () => {
  it('shallow Input', () => {
    const wrapper = shallow(
      <Input />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow Input match Snapshot', () => {
    const wrapper = shallow(
      <Input />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
