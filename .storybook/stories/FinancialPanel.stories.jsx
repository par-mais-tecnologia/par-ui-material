import React from 'react'
import { SeeTheme, MuiThemeProvider} from '../../src'
import { FinancialPanel } from '../../src'
import { storiesOf } from '@storybook/react'
import { withKnobs, text} from '@storybook/addon-knobs'

const data = [
    {
        fundCnpj: "28.648.953/0001-80",
        fundId: "cj9zv1aom002zh0jet99m7em9",
        fundLiquidity: 32,
        fundName: "PAR MAIS MAXIMUM FIC FIM",
        nri: "Faixa 5",
        percentual: "0.061",
        product: {
            cnpj: "21.983.042/0001-60",
            createdAt: "2018-04-02T15:10:47.510Z",
            currentPL: 1179318698,
            evaluation: "Rentabilidade dos últimos 24 meses – 149% do CDI↵↵Carteira – Ações e mercado de juros global com hedge cambial↵↵PL atual – R$ 704 milhões↵↵CNPJ do fundo: 21.983.042/0001-60",
            evaluationClient: "Ações e mercado de juros global com hedge cambial",
            evaluationUpdatedAt: "2018-10-05T20:31:59.977Z",
            evaluationUpdatedById: "vagner.bellenzier@parmais.com.br",
            id: "cjfidggx900060emo8ztm5u2t",
            institution: "Absolute",
            liquidity: 18,
            name: "ABSOLUTE ALPHA GLOBAL FIC FIM",
            reference: [],
            rentability: 138,
            status: "Recomendado",
            strategy: "Multimercado",
            subStrategy: "Macro",
            updatedAt: "2018-12-22T00:34:46.299Z"
        }
    },
    {
        fundCnpj: "28.648.953/0001-80",
        fundId: "cj9zv1aom002zh0jet99m7em9",
        fundLiquidity: 32,
        fundName: "PAR MAIS MAXIMUM FIC FIM",
        nri: "Faixa 5",
        percentual: "0.061",
        product: {
            cnpj: "21.983.042/0001-60",
            createdAt: "2018-04-02T15:10:47.510Z",
            currentPL: 1179318698,
            evaluation: "Rentabilidade dos últimos 24 meses – 149% do CDI↵↵Carteira – Ações e mercado de juros global com hedge cambial↵↵PL atual – R$ 704 milhões↵↵CNPJ do fundo: 21.983.042/0001-60",
            evaluationClient: "Ações e mercado de juros global com hedge cambial",
            evaluationUpdatedAt: "2018-10-05T20:31:59.977Z",
            evaluationUpdatedById: "vagner.bellenzier@parmais.com.br",
            id: "cjfidggx900060emo8ztm5u2t",
            institution: "Absolute",
            liquidity: 18,
            name: "ABSOLUTE ALPHA GLOBAL FIC FIM",
            reference: [],
            rentability: 138,
            status: "Recomendado",
            strategy: "Multimercado",
            subStrategy: "Macro",
            updatedAt: "2018-12-22T00:34:46.299Z"
        }
    },
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