import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import StepperDots from './'
import BioFinanceiraTheme from '../BioFinanceiraTheme'

import { MuiThemeProvider } from '@material-ui/core'

configure({ adapter: new Adapter() })

export const test = describe('StepperDots', () => {
  it('shallow StepperDots', () => {
    const wrapper = shallow(
      <StepperDots
        steps={3}
        activeStep={1}
        handleNext={() => {}}
        handleBack={() => {}}
        position='bottom'
      />
    )
    expect(wrapper).toBeTruthy()
  })
})

it('shallow FinBio StepperDots match Snapshot', () => {
  const wrapper = shallow(
    <MuiThemeProvider theme={BioFinanceiraTheme}>
      <StepperDots
        steps={3}
        activeStep={1}
        handleNext={() => {}}
        handleBack={() => {}}
        position='bottom'
      />
    </MuiThemeProvider>
  )
  expect(wrapper).toMatchSnapshot()
})
