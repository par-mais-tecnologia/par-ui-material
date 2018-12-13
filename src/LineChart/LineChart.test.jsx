import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SeeTheme, MuiThemeProvider } from '../'

import LineChart from './'

configure({ adapter: new Adapter() })

export const test = describe('RentabilityBar', () => {
  const getShallow = () => (
    <MuiThemeProvider theme={SeeTheme}>
      <LineChart
        lineStroke={['#5EB8C0', '#d3d3d3']}
        lineStrokeWidth={4}
        lineFill={'none'}
        width={900}
        height={400}
        paddingH={100}
        paddingW={100}
        yTicks={6}
        xTicks={10}
      />
    </MuiThemeProvider>
  )

  it('shallow RentabilityBar', () => {
    const wrapper = shallow(
      <MuiThemeProvider theme={SeeTheme}>
        <LineChart
          lineStroke={['#5EB8C0', '#d3d3d3']}
          lineStrokeWidth={4}
          lineFill={'none'}
          width={900}
          height={400}
          paddingH={100}
          paddingW={100}
          yTicks={6}
          xTicks={10}
        />
      </MuiThemeProvider>
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow RentabilityBar match Snapshot', () => {
    const wrapper = shallow(getShallow())
    expect(wrapper).toMatchSnapshot()
  })
})
