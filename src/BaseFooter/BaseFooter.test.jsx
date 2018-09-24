import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import BaseFooter from './'

configure({ adapter: new Adapter() })

const getShallow = () => (
  <BaseFooter>
    <h1 className='roboto-light white'>
      Footer content here
    </h1>
  </BaseFooter>
)

describe('baseFooter', () => {
  const wrapper = shallow(getShallow())

  it('shallow BaseFooter', () => {
    expect(wrapper).toBeTruthy()
  })

  it('shallow BaseFooter match Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
