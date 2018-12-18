import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SeeTheme, MuiThemeProvider } from '../'

import RentabilityBar from './'

configure({ adapter: new Adapter() })

export const test = describe('RentabilityBar', () => {
  const getShallow = () => (
    <MuiThemeProvider theme={SeeTheme}>
      <RentabilityBar
        firstTitle='Rentabilidade em R$'
        firstValue='100.000'

        secondTitle='Rentabilidade em %'
        secondValue='0'

        thirthTitle='cdi'
        thirthValue='100'
      />
    </MuiThemeProvider>
  )

  it('shallow RentabilityBar', () => {
    const wrapper = shallow(
      <MuiThemeProvider theme={SeeTheme}>
        <RentabilityBar />
      </MuiThemeProvider>
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow RentabilityBar match Snapshot', () => {
    const wrapper = shallow(getShallow())
    expect(wrapper).toMatchSnapshot()
  })
})
