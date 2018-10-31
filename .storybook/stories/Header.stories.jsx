import { storiesOf } from '@storybook/react'
import React, { PureComponent } from 'react'
import 'tachyons/css/tachyons.min.css'
import withTests from './withTests'
import { Header, BioFinanceiraTheme } from '../../src'
import Typography from '@material-ui/core/Typography/Typography'

class HeaderStory extends PureComponent {

  render () {
    return (
      <Header
        classes='justify-center'
        boxShadow={'0px -3px 20px 0px'}
        backgroundImage={BioFinanceiraTheme.styles.colors.seeGradient}
        height='70px' margin='16px'
        justifyContent='center'>
        <Typography align='center' style={BioFinanceiraTheme.styles.fonts.mainTitle}>
          <b>BIO</b> <span style={{fontWeight: 100}}>FINANCEIRA</span>
        </Typography>
      </Header>
    )
  }
}

storiesOf('Header', module)
  .addDecorator(withTests('Header'))
  .add('Bio Financeira Header', () => {
    return <HeaderStory />
  })
