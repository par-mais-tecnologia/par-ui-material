import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TextField from './'

configure({ adapter: new Adapter() })

export const test = describe('TextField', () => {
  it('shallow TextField', () => {
    const wrapper = shallow(
      <TextField />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow TextField match Snapshot', () => {
    const wrapper = shallow(
      <TextField />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
