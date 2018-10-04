import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DropCap from './'

configure({ adapter: new Adapter() })

export const test = describe('DropCap', () => {
  it('shallow DropCap', () => {
    const wrapper = shallow(
      <DropCap />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow DropCap match Snapshot', () => {
    const wrapper = shallow(
      <DropCap />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
