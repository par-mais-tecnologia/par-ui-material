import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import YourFinances from './'

configure({ adapter: new Adapter() })

describe('YourFinances', () => {
  it('shallow YourFinances', () => {
    const wrapper = shallow(
      <YourFinances
        incomes={5000}
        expenses={2000}
      />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow YourFinances match Snapshot', () => {
    const wrapper = shallow(
      <YourFinances
        incomes={4500}
        expenses={1000}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should inform that there is not sufficient balance for investments', () => {
    const wrapper = shallow(
      <YourFinances
        incomes={2500}
        expenses={2600}
      />
    )
    expect(wrapper.find('.without-balance')).toHaveLength(1)
  })
})
