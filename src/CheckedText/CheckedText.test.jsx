import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CheckedText from './'

configure({ adapter: new Adapter() })

export const test = describe('CheckedText', () => {
  it('shallow CheckedText', () => {
    const wrapper = shallow(
      <CheckedText />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow CheckedText match Snapshot', () => {
    const wrapper = shallow(
      <CheckedText />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
