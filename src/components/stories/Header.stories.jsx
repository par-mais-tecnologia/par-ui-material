import { storiesOf } from '@storybook/react'
import Header from '../Header/header'
import React, { PureComponent } from 'react'
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider'
import 'tachyons/css/tachyons.min.css'
import finBioTheme from '../themes/bioFinanceira/theme'
import { createMuiTheme } from '@material-ui/core'

class HeaderStory extends PureComponent {
  getThemeHeader (finBioTheme) {
    return createMuiTheme({
      overrides: {
        MuiTypography: {
          root: {
            margin: 'auto'
          },
          title: {
            ...finBioTheme.styles.fonts.mainTitle
          }
        }
      }
    })
  }

  render () {
    return (
      <MuiThemeProvider theme={this.getThemeHeader(finBioTheme)}>
        <Header classes={finBioTheme}
          backgroundImage={finBioTheme.styles.colors.seeGradient}
          height='70px' margin='16px'>
          <b>BIO</b> FINANCEIRA
        </Header>
      </MuiThemeProvider>
    )
  }
}

storiesOf('Header', module)
  .add('Bio Financeira Header', () => {
    return <HeaderStory />
  })
