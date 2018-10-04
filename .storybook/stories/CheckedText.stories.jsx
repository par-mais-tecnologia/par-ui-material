import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import { MuiThemeProvider, BioFinanceiraTheme, CheckedText } from '../../src'
import withTests from './withTests'

class CheckedTextStory extends PureComponent {
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

storiesOf('Checked Text', module)
  .addDecorator(withTests('CheckedText'))
  .addDecorator(withKnobs)
  .add('shallow', () => {
    return (
      <CheckedText />
    )
  })
  .add('Normal', () => {
    return (
      <CheckedTextStory>
          <CheckedText>
            {text('Texto', 'Você não possui dependentes Você não possui dependentes Você não possui dependentes Você não possui dependentes Você não possui dependentes Você não possui dependentes ')}
          </CheckedText>
      </CheckedTextStory>
    )

  })
  .add('Com HTML', () => {
    return (
      <CheckedTextStory>
        <CheckedText>
          Você <b>possui</b> dependentes
        </CheckedText>
      </CheckedTextStory>
    )
  })
  .add('Multiplos checks', () => {
    return (
      <CheckedTextStory>
        <CheckedText>
          Você <b>possui</b> dependentes
        </CheckedText>
        <CheckedText>
          <b>Claro</b> escuro
        </CheckedText>
      </CheckedTextStory>
    )
  })