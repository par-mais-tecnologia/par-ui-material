import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Paper from './'

configure({ adapter: new Adapter() })

export const test = describe('Paper', () => {
  it('shallow Paper', () => {
    const wrapper = shallow(
      <Paper />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow Paper match Snapshot', () => {
    const wrapper = shallow(
      <Paper />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
