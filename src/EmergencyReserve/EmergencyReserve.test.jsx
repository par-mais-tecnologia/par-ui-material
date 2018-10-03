import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import EmergencyReserve from './'

configure({ adapter: new Adapter() })

describe('EmergencyReserve', () => {
  it('shallow EmergencyReserve', () => {
    const wrapper = shallow(
      <EmergencyReserve
        incomes={5000}
        expenses={2000}
      />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow EmergencyReserve match Snapshot', () => {
    const wrapper = shallow(
      <EmergencyReserve
        incomes={4500}
        expenses={1000}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
