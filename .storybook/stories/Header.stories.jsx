import { storiesOf } from '@storybook/react'
import React, { PureComponent } from 'react'
import 'tachyons/css/tachyons.min.css'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import withTests from './withTests'

import { Header, BioFinanceiraTheme } from '../../src'

class HeaderStory extends PureComponent {
  getThemeHeader (BioFinanceiraTheme) {
    return createMuiTheme({
      overrides: {
        MuiTypography: {
          title: {
            ...BioFinanceiraTheme.styles.fonts.mainTitle
          }
        }
      }
    })
  }

  render () {
    return (
      <MuiThemeProvider theme={this.getThemeHeader(BioFinanceiraTheme)}>
        <Header
          classes='justify-center'
          boxShadow={'0px -3px 20px 0px'}
          backgroundImage={BioFinanceiraTheme.styles.colors.seeGradient}
          height='70px' margin='16px'
          justifyContent='center'>
          <b>BIO</b> <span style={{fontWeight: 100}}>FINANCEIRA</span>
        </Header>
      </MuiThemeProvider>
    )
  }
}

storiesOf('Header', module)
  .addDecorator(withTests('Header'))
  .add('Bio Financeira Header', () => {
    return <HeaderStory />
  })
