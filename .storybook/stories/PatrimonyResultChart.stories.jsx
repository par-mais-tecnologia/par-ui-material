import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number, withKnobs } from '@storybook/addon-knobs'
import { BioFinanceiraTheme, NumberedTitle, PatrimonyResultChart, MuiThemeProvider } from '../../src'

storiesOf('Patrimony Result Chart', module)
  .addDecorator(withKnobs)
  .add('shallow', () => {
    return (
      <div style={{width: '100%', padding: '0px 10px 0px 10px'}}>
        <PatrimonyResultChart
          investments={number('investments', 5000000)}
          investmentColor={text('investment color', '#632B7D')}
          realState={number('real state', 2000000)}
          realStateColor={text('real state color', '#5EB8C0')}
          movableAssets={number('movable assets', 500000)}
          movableAssetsColor={text('movable assets color', '#347A7C')}
        />
      </div>
    )
})
  .add('with Numbered Title and Bio Theme', () => {
    return (
      <MuiThemeProvider theme={BioFinanceiraTheme}>
        <div style={{width: '100%', padding: '0px 10px 0px 10px'}}>
          <NumberedTitle
            number={1}
            title={`Seus bens`}
            subtitle={`${5000000 + 2000000 + 500000}`}
          >
            <PatrimonyResultChart
              investments={number('investments', 5000000)}
              investmentColor={'#632B7D'}
              realState={number('real state', 2000000)}
              realStateColor={'#5EB8C0'}
              movableAssets={number('movable assets', 500000)}
              movableAssetsColor={'#347A7C'}
            />
          </NumberedTitle>
        </div>
      </MuiThemeProvider>
    )
  })