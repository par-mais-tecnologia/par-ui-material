import React from 'react'
import { storiesOf } from '@storybook/react'
import {LineChart, SeeTheme, MuiThemeProvider} from '../../src'
import dataset from '../assets/Dados_Backend.json'

storiesOf('LineChart', module)
  .add('Base', () => {
    return (
      <MuiThemeProvider theme={SeeTheme}>
        <LineChart 
            dataset={dataset}
            lineStroke={['#5EB8C0', '#d3d3d3']}
            lineStrokeWidth={[4, 2]}
            lineFill={['none', 'none']}
            paddingH={150}
            paddingW={150}
            yTicks={9}
            xTicks={5}
        />
      </MuiThemeProvider>
    )
  })
