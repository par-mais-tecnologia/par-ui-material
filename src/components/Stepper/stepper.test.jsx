import React from 'react'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Stepper from './index'
import Step from '@material-ui/core/Step'
import { Typography } from '@material-ui/core'

configure({ adapter: new Adapter() })

export const testShallow = describe('Stepper shallow', () => {
  const getShallow = () => (
    <Stepper
      steps={['foo1', 'foo2']}
      activeStep={0}
      orientation={'vertical'}
    />
  )

  it(`shallow Stepper`, () => {
    const wrapper = shallow(getShallow())
    expect(wrapper).toBeTruthy()
  })

  it('shallow Stepper match Snapshot', () => {
    const wrapper = shallow(getShallow())
    expect(wrapper).toMatchSnapshot()
  })

  it(`should have the number of <Step/>'s equals the number of steps`, () => {
    const steps = ['1', '2', '3']
    const wrapper = shallow(
      <Stepper
        steps={steps}
        activeStep={0}
        orientation={'vertical'}
      />
    )
    expect(wrapper.find(Step)).toHaveLength(steps.length)
  })
})

export const testHorizontal = describe('Stepper horizontal', () => {
  const steps = ['Foo1', 'Foo2', 'Foo3']
  const activeStep = 1
  const stepper = (
    <Stepper
      steps={steps}
      activeStep={1}
      orientation={'horizontal'}
    />
  )

  it(`should be horizontal`, () => {
    const wrapper = mount(stepper)
    expect(wrapper.props().orientation).toBe('horizontal')
  })

  it(`should not show step labels`, () => {
    const wrapper = mount(stepper)
    expect(wrapper.find(`.stepLabelPPlus`)).toHaveLength(0)
  })

  it(`should have Typography`, () => {
    const wrapper = shallow(stepper)
    expect(wrapper.find(Typography)).toHaveLength(1)
  })

  it(`should have Typography with step text inside`, () => {
    const wrapper = mount(stepper)
    expect(wrapper.find(Typography).find('p').text()).toBe(steps[activeStep])
  })
})

export const testVertical = describe('Stepper vertical', () => {
  it(`should show all step labels`, () => {
    const steps = ['Foo1', 'Foo2', 'Foo3']
    const wrapper = mount(
      <Stepper
        steps={steps}
        activeStep={0}
        orientation={'vertical'}
      />
    )
    expect(wrapper.props().orientation).toBe('vertical')
    expect(wrapper.find(`.stepLabelPPlus`)).toHaveLength(3)
  })
})
