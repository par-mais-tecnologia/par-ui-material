import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { LineCirclesBox } from '../index'

configure({ adapter: new Adapter() })

describe('LineCirclesBox', () => {
  it('shallow LineCirclesBox', () => {
    const wrapper = shallow(
      <LineCirclesBox lineColor='#991d99'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </LineCirclesBox>
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow LineCirclesBox match Snapshot', () => {
    const wrapper = shallow(
      <LineCirclesBox lineColor='#99251d'>
        Lorem ipsum dolor sit amet.
      </LineCirclesBox>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
