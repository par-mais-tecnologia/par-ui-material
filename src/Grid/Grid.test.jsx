import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Grid from './'

configure({ adapter: new Adapter() })

export const test = describe('Grid', () => {
  it('shallow Grid', () => {
    const wrapper = shallow(
      <Grid />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow Grid match Snapshot', () => {
    const wrapper = shallow(
      <Grid />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
