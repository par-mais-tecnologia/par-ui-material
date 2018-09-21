import React from 'react'
import { storiesOf } from '@storybook/react'

import { BioFinanceiraTheme, NumberedTitle, PatrimonyResultChart } from '../../src'

import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider'

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Curabitur quis mattis turpis, a eleifend enim. Vestibulum ante ipsum primis 
in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent augue est, 
pharetra sit amet dolor pulvinar, porta interdum arcu. Suspendisse mollis sem 
quis ante ultrices, ac imperdiet ipsum consectetur. Cras ultrices venenatis erat 
vel sollicitudin. Suspendisse vulputate convallis viverra. Nam quis neque ut 
tellus vulputate tincidunt. Nam justo elit, placerat vel lacus sed, pellentesque 
suscipit libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
per inceptos himenaeos.Integer leo orci, mattis et diam fringilla, accumsan accumsan 
ipsum. Integer pretium sem sit amet neque lobortis vehicula. Aenean ut iaculis velit. 
Quisque interdum lobortis porta. Maecenas sit amet neque eros. Vestibulum ut dictum odio, 
quis elementum tortor. Mauris eleifend tortor vel diam varius, at congue erat cursus.
Pellentesque ut elit laoreet, aliquet augue at, tempor nisi.`

storiesOf('NumberedTitle', module)
  .add('shallow', () => {
    return (
      <NumberedTitle
        number={1}
        title={`Suas`}
        subtitle={`finanças`}
      >
        {lorem}
      </NumberedTitle>
    )
  })
  .add('bio financeira', () => {
    return (
      <MuiThemeProvider theme={BioFinanceiraTheme}>
        <div style={{width: '400px', padding: '10px'}}>
          <NumberedTitle
            number={1}
            title={`Suas`}
            subtitle={`finanças`}
          >
            {lorem}
          </NumberedTitle>
        </div>
      </MuiThemeProvider>
    )
  })
  .add('with result 1', () => {
    return (
      <MuiThemeProvider theme={BioFinanceiraTheme}>
        <div style={{width: '400px', padding: '0px 10px 0px 10px'}}>
          <NumberedTitle
            number={1}
            title={`Seus bens`}
            subtitle={`${5000000 + 2000000 + 500000}`}
          >
            <PatrimonyResultChart
              investments={5000000}
              realState={2000000}
              movableAssets={500000}
              classes={BioFinanceiraTheme.styles.classes}
            />
          </NumberedTitle>
        </div>
      </MuiThemeProvider>
    )
  })