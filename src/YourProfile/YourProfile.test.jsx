import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { YourProfile } from '../index'
import { mock } from './index'

configure({ adapter: new Adapter() })

describe('YourProfile', () => {
  it('shallow YourProfile', () => {
    const wrapper = shallow(
      <YourProfile />
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow YourProfile match Snapshot', () => {
    const wrapper = shallow(
      <YourProfile
        profile={mock.profile}
        justification={mock.justification}
        options={mock.options}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
