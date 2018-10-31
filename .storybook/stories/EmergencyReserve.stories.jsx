import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { number, withKnobs } from '@storybook/addon-knobs'
import { MuiThemeProvider, BioFinanceiraTheme, EmergencyReserve, NumberedTitle } from '../../src'
import withTests from './withTests'

class EmergencyReserveStory extends PureComponent {
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

storiesOf('Emergency Reserve', module)
  .addDecorator(withTests('EmergencyReserve'))
  .addDecorator(withKnobs)
  .add('shallow', () => {
    return (
      <EmergencyReserveStory>
        <EmergencyReserve
          reserve={number('Reserva', 8000)}
          months={number('Meses', 6)}
        />
      </EmergencyReserveStory>
    )
  })
  .add('Bio Financeira', () => {
    return (
      <EmergencyReserveStory>
        <NumberedTitle number={3} title={`Sua reserva`} subtitle={`de emergência`}>
          <EmergencyReserve
            reserve={number('Reserva', 8000)}
            months={number('Meses', 6)}
          />
        </NumberedTitle>
      </EmergencyReserveStory>
    )
  })