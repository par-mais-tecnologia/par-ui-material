import React from 'react'
import { SeeTheme, MuiThemeProvider} from '../../src'
import { FinancialPanel } from '../../src'
import { storiesOf } from '@storybook/react'
import { withKnobs, text} from '@storybook/addon-knobs'

const data = [
    {
        name: 'AZ Legan Low VOL',
        walletComposition: 0.2, 
        performance24: 1.38, 
        portfolio: 'Ações, moedas, mercado de juros', 
        index: 'CDI', 
        gross: 297321988, 
        cnpj: '05.488.919/001-90'
    },
    {
        name: 'AZ Legan Low VOL',
        walletComposition: 0.2, 
        performance24: 1.38, 
        portfolio: 'Ações, moedas, mercado de juros', 
        index: 'CDI', 
        gross: 297321988, 
        cnpj: '05.488.919/001-90'
    },
    {
        name: 'AZ Legan Low VOL',
        walletComposition: 0.2, 
        performance24: 1.38, 
        portfolio: 'Ações, moedas, mercado de juros', 
        index: 'CDI', 
        gross: 297321988, 
        cnpj: '05.488.919/001-90'
    }
]


storiesOf('FinancialPanel', module)
    .addDecorator(withKnobs)
    .add('Base', () => (
        <MuiThemeProvider theme={SeeTheme}>
            <FinancialPanel 
            headerName='Multimercado' 
            headerPercentage='0.35' 
            color='#0580C4'
            data={data} />
        </MuiThemeProvider>
    ))

storiesOf('FinancialPanel', module)
    .addDecorator(withKnobs)
    .add('Both Headers', () => (
        <MuiThemeProvider theme={SeeTheme}>
            <FinancialPanel 
            headerName='Multimercado' 
            headerPercentage='0.35' 
            color='#0580C4'
            data={data} />
            <FinancialPanel 
            headerName='Renda fixa pós-fixado' 
            headerPercentage='0.35' 
            color='#7FBD42'
            data={data} />
        </MuiThemeProvider>
    ))