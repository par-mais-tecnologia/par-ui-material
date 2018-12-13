import React from 'react'
import { storiesOf } from '@storybook/react'
import {LineChart, SeeTheme, MuiThemeProvider} from '../../src'


storiesOf('LineChart', module)
  .add('Base', () => {
    return (
      <MuiThemeProvider theme={SeeTheme}>
        <LineChart 
            lineStroke={['#5EB8C0', '#d3d3d3']}
            lineStrokeWidth={[4, 2]}
            lineFill={['none', 'none']}
            paddingH={100}
            paddingW={50}
            yTicks={9}
            xTicks={5}
        />
      </MuiThemeProvider>
    )
  })
