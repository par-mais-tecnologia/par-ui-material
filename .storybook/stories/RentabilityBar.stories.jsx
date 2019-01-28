import React from 'react'
import { storiesOf } from '@storybook/react'
import {RentabilityBar, SeeTheme, MuiThemeProvider} from '../../src'
import { withKnobs, text} from '@storybook/addon-knobs'

storiesOf('RentabilityBar', module)
  .addDecorator(withKnobs)
  .add('Base', () => {
    return (
      <MuiThemeProvider theme={SeeTheme}>
        <RentabilityBar
          firstTitle={text('First Title','Rentabilidade em R$')}
          firstValue={text('First Value','100.000')}

          secondTitle={text('Second Title','Rentabilidade em %')}
          secondValue={text('Second Value',0)}

          thirdTitle={text('Third Title','cdi')}
          thirdValue={text('Third Value',1)}
        />
      </MuiThemeProvider>
    )
  })
