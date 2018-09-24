import { storiesOf } from '@storybook/react'
import React, { PureComponent } from 'react'
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider'
import 'tachyons/css/tachyons.min.css'
import { Header, BioFinanceiraTheme } from '../../src'
import { createMuiTheme } from '@material-ui/core'
import withTests from './withTests'

class HeaderStory extends PureComponent {
  getThemeHeader (BioFinanceiraTheme) {
    return createMuiTheme({
      overrides: {
        MuiTypography: {
          root: {
            margin: 'auto'
          },
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
          classes={BioFinanceiraTheme}
          boxShadow={'0px -3px 20px 0px'}
          backgroundImage={BioFinanceiraTheme.styles.colors.seeGradient}
          height='70px' margin='16px'>
          <b>BIO</b> <spam style={{fontWeight: 100}}>FINANCEIRA</spam>
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
