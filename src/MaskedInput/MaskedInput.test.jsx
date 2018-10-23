import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MaskedInput from './'

configure({ adapter: new Adapter() })

export const test = describe('MaskedInput', () => {
  it('shallow MaskedInput', () => {
    const wrapper = shallow(
      <MaskedInput />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow MaskedInput match Snapshot', () => {
    const wrapper = shallow(
      <MaskedInput />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
