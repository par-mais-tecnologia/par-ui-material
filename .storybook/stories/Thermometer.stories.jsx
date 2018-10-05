import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import { MuiThemeProvider, BioFinanceiraTheme, Thermometer } from '../../src'
import withTests from './withTests'

class ThermometerStory extends PureComponent {
  render () {
    const {children} = this.props
    return (
      <div className="pa3 w-100">
        <MuiThemeProvider theme={BioFinanceiraTheme}>
          <div>
            {children}
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

storiesOf('Thermometer', module)
  .addDecorator(withTests('Thermometer'))
  .addDecorator(withKnobs)
  .add('shallow', () => {
    return (
      <Thermometer />
    )
  })
  .add('Laranja', () => {
    return (
      <ThermometerStory>
          <Thermometer bioColor={text('Cor da BIO ["azul","verde","amarela","laranja","vermelha",]', `laranja`)} />
      </ThermometerStory>
    )
  })