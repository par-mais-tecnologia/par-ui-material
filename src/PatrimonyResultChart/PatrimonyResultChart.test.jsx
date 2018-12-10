import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import PatrimonyResultChart from './'

configure({ adapter: new Adapter() })

const foo = {
  totalInvestment: 0,
  immovableProperty: 0,
  movableProperty: 0
}

export const testShallow = describe('PatrimonyResultChart shallow', () => {
  const getShallow = () => (
    <PatrimonyResultChart
      investments={foo.totalInvestment}
      investmentColor={'#632B7D'}
      realState={foo.immovableProperty}
      realStateColor={'#5EB8C0'}
      movableAssets={foo.movableProperty}
      movableAssetsColor={'#347A7C'}
    />
  )

  it(`shallow PatrimonyResultChart`, () => {
    const wrapper = shallow(getShallow())
    console.log(wrapper.props())
    expect(wrapper).toBeTruthy()
  })

  it('shallow PatrimonyResultChart match Snapshot', () => {
    const wrapper = shallow(getShallow())
    expect(wrapper).toMatchSnapshot()
  })
})
