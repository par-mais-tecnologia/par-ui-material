import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MuiThemeProvider } from '@material-ui/core/styles'

import finBioTheme from '../../src/BioFinanceiraTheme'
import BaseFooter from './'
import MktAppsFooter from './MktAppsFooter'

configure({ adapter: new Adapter() })

const getShallow = () => (
  <MuiThemeProvider theme={finBioTheme}>
    <BaseFooter>
      <MktAppsFooter />
    </BaseFooter>
  </MuiThemeProvider>
)

describe('mktAppsFooter', () => {
  const wrapper = shallow(getShallow())

  it('shallow mktAppsFooter', () => {
    expect(wrapper).toBeTruthy()
  })

  it('shallow mktAppsFooter match Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
