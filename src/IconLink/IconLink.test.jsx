import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import IconLink from './'

configure({ adapter: new Adapter() })

const wrapper = shallow(
  <IconLink
    color={'#909090'}
    fontSize={15}
    icon={'reload'}
    onClick={() => console.log('onClick function!')}
    text={'Refazer BIO'}
  />
)

export const test = describe('IconLink', () => {
  it('shallow IconLink', () => {
    expect(wrapper).toBeTruthy()
  })

  it('shallow IconLink match Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
