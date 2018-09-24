import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import withTests from './withTests'

import BaseFooter from '../../src/BaseFooter/index'
import finBioTheme from '../../src/BioFinanceiraTheme'

class BaseFooterStory extends PureComponent {

  render () {

    const { children, height } = this.props

    return (
      <MuiThemeProvider theme={finBioTheme}>
        <div className='flex flex-column items-center'>
          <div className='roboto-light' style={{minHeight: 'calc(100vh - 70px)'}}>
            <h2>Content here</h2>
            <h2>Content here</h2>
            <h2>Content here</h2>
          </div>
            <BaseFooter height={height}>
              {children}
            </BaseFooter>
        </div>
      </MuiThemeProvider>
    )
  }
}

storiesOf('Footers', module)
  .addDecorator(withTests('baseFooter'))
  .add('Base', () => {
    return (
      <BaseFooterStory>
        <h2 className='white roboto-light'>Footer content</h2>
      </BaseFooterStory>)
  })
