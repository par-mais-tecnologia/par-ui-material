import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SeeTheme, MuiThemeProvider } from '..'
import GoalSummary from '.'

configure({ adapter: new Adapter() })

export const test = describe('GoalSummary', () => {
  const getShallow = () => (
    <MuiThemeProvider theme={SeeTheme}>
      <GoalSummary
        data={[
          { title: 'Aportar mensalmente', value: 10000, type: 'currency' },
          { title: 'Para ter', value: 10000, type: 'currency' },
          { title: 'Em', value: '2 anos e 3 meses' }
        ]}
      />
    </MuiThemeProvider>
  )

  it('shallow GoalSummary', () => {
    const wrapper = shallow(
      <MuiThemeProvider theme={SeeTheme}>
        <GoalSummary />
      </MuiThemeProvider>
    )
    expect(wrapper).toBeTruthy()
  })

  it('shallow GoalSummary match Snapshot', () => {
    const wrapper = shallow(getShallow())
    expect(wrapper).toMatchSnapshot()
  })
})
