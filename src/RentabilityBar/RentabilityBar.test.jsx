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
        header={[
          {
            title: 'Rentabilidade em R$',
            value: 100.00,
            type: 'currency'
          },
          {
            title: 'Rentabilidade em %',
            value: -0.01
          },
          {
            title: 'cdi',
            value: 0.4786554
          }
        ]}
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
