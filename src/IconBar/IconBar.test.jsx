import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import IconBar from './'

configure({ adapter: new Adapter() })

export const test = describe('IconBar', () => {
  it('shallow IconBar', () => {
    const wrapper = shallow(
      <IconBar />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow IconBar match Snapshot', () => {
    const wrapper = shallow(
      <IconBar />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
