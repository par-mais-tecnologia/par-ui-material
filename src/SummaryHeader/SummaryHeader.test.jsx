import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SummaryHeader from './'

configure({ adapter: new Adapter() })

export const test = describe('SummaryHeader', () => {
  it('shallow Header', () => {
    const wrapper = shallow(
      <SummaryHeader />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow Header match Snapshot', () => {
    const wrapper = shallow(
      <SummaryHeader />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
