import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider'

import BaseFooter from '../../src/BaseFooter/index'
import MktAppsFooter from '../../src/MktAppsFooter/index'
import finBioTheme from '../../src/BioFinanceiraTheme'
import withTests from './withTests'

class BaseFooterStory extends PureComponent {

  render () {

    const { children } = this.props

    return (
      <MuiThemeProvider theme={finBioTheme}>
        <div className='flex flex-column items-center'>
          <div className='roboto-light' style={{minHeight: 'calc(100vh - 70px)'}}>
            <h2>Content here</h2>
            <h2>Content here</h2>
            <h2>Content here</h2>
          </div>
          <BaseFooter>
            {children}
          </BaseFooter>
        </div>
      </MuiThemeProvider>
    )
  }
}

storiesOf('Footers', module)
  .addDecorator(withTests('mktAppsFooter'))
  .add('MktAppsFooter', () => {
    return (
      <BaseFooterStory>
        <MktAppsFooter/>
      </BaseFooterStory>
    )
  })
