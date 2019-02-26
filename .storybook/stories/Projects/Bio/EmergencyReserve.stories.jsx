import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { number, withKnobs } from '@storybook/addon-knobs'
import { MuiThemeProvider, BioFinanceiraTheme, SeeTheme, EmergencyReserve, NumberedTitle } from '../../../../src'
import withTests from '../../withTests'

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

storiesOf('Projects / Bio ', module)
  .addDecorator(withTests('EmergencyReserve'))
  .addDecorator(withKnobs)
  .add('Emergency Reserve', () => {
    return (
      <EmergencyReserveStory>
        <EmergencyReserve
          reserve={number('Reserva', 8000)}
          months={number('Meses', 6)}
        />
      </EmergencyReserveStory>
    )
  })