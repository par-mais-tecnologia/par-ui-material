import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ObjectiveCard from './'

configure({ adapter: new Adapter() })

export const test = describe('ObjectiveCard', () => {
  it('shallow ObjectiveCard', () => {
    const wrapper = shallow(
      <ObjectiveCard />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow ObjectiveCard match Snapshot', () => {
    const wrapper = shallow(
      <ObjectiveCard />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
