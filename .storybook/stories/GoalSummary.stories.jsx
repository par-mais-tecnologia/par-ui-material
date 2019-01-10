import React from 'react'
import { storiesOf } from '@storybook/react'
import {
    GoalSummary, 
    SummaryHeader, 
    SeeTheme, 
    MuiThemeProvider,
    Typography
} from '../../src'
import { withKnobs, text, number} from '@storybook/addon-knobs'

storiesOf('GoalSummary', module)
  .addDecorator(withKnobs)
  .add('Base', () => (
    <div style={{background: '#3d3d3d', width: '100vw', height: '100vh'}}>
      <MuiThemeProvider theme={SeeTheme}>
        <GoalSummary
            firstTitle={text('First Title', 'Aportar mensalmente')}
            firstValue={text('First Value', '000 000 000,00')}
            secondTitle={text('Second Title', 'Para ter')}
            secondValue={number('Second Value', '000 000 000,00')}
            thirdTitle={text('Third Title','Em')}
            thirdValueMonths={number('Third Months Value', 5)}
            thirdValueYears={number('Third Years Value', 2)}
        />
      </MuiThemeProvider>
    </div>
    )).add('Implemented', () => (
    <MuiThemeProvider theme={SeeTheme}>
      <SummaryHeader
        classes='justify-center pv5'
        boxShadow={'0px -3px 20px 0px'}
        margin='16px'
        justifyContent='center'>

        <div className='flex justify-center items-center flex-column white w-70'>
          <div>
            <Typography align='center' color='inherit' >
                RESERVA DE EMERGÊNCIA
            </Typography>
          </div>

          <div className='mt4'>
              <Typography align='center' color='inherit'>
                R$ 000 000 000,00
              </Typography>
              <Typography align='center' color='inherit'>
                É o valor liquido total aplicado
              </Typography>
          </div>
          <div className='mt4' style={{width: '100%'}}>
            <GoalSummary
                firstTitle={text('First Title', 'Aportar mensalmente')}
                firstValue={text('First Value', '000 000 000,00')}
                secondTitle={text('Second Title', 'Para ter')}
                secondValue={number('Second Value', '000 000 000,00')}
                thirdTitle={text('Third Title','Em')}
                thirdValueMonths={number('Third Months Value', 5)}
                thirdValueYears={number('Third Years Value', 2)}
            />
          </div>
        </div>

      </SummaryHeader>
      </MuiThemeProvider>
    ))