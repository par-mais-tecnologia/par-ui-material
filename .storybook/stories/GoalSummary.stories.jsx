import React from 'react'
import { storiesOf } from '@storybook/react'
import {
    GoalSummary, 
    SummaryHeader, 
    SeeTheme, 
    MuiThemeProvider,
    Typography
} from '../../src'
import { withKnobs, array} from '@storybook/addon-knobs'

storiesOf('GoalSummary', module)
  .addDecorator(withKnobs)
  .add('Base', () => (
    <div style={{background: '#3d3d3d', width: '100vw', height: '100vh'}}>
      <MuiThemeProvider theme={SeeTheme}>
        <GoalSummary
          data={array('data', [
            { title: 'Aportar mensalmente', value: 10000, type: 'currency' },
            { title: 'Em', value: '2 anos e 3 meses' }
          ])}
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
              data={array('data', [
                { title: 'Aportar mensalmente', value: 10000, type: 'currency' },
                { title: 'Para ter', value: 10000, type: 'currency' },
                { title: 'Em', value: '2 anos e 3 meses' }
              ])}
            />
          </div>
        </div>

      </SummaryHeader>
      </MuiThemeProvider>
    ))