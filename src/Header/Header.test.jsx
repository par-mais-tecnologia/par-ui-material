import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './'

configure({ adapter: new Adapter() })

export const test = describe('Header', () => {
  it('shallow Header', () => {
    const wrapper = shallow(
      <Header />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow Header match Snapshot', () => {
    const wrapper = shallow(
      <Header />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
