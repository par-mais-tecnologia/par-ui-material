import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Select from './'

configure({ adapter: new Adapter() })

export const test = describe('Select', () => {
  it('shallow Select', () => {
    const wrapper = shallow(
      <Select id={'1'} />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow Select match Snapshot', () => {
    const wrapper = shallow(
      <Select id={'1'} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
