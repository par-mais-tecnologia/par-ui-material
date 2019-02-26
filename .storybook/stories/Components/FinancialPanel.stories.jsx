import React from 'react'
import { SeeTheme, MuiThemeProvider} from '../../../src'
import { FinancialPanel, Typography } from '../../../src'
import { storiesOf } from '@storybook/react'
import { withKnobs} from '@storybook/addon-knobs'
import style from '../style'

const data = [
  {
    fundLiquidity: 32,
    fundName: "PAR MAIS MAXIMUM FIC FIM",
    percentual: "0.061",
    product: {
      cnpj: "21.983.042/0001-60",
      currentPL: 1179318698,
      evaluationClient: "Ações e mercado de juros global com hedge cambial",
      name: "ABSOLUTE ALPHA GLOBAL FIC FIM",
      rentability: 138,
      strategy: "Multimercado"
    }
  }
]

const FinancialPanelStory = (props) => (
    <div style={{
        ...style.section, 
        gridTemplateColumns: 'repeat(auto-fill,minmax(30rem, 1fr))'
      }}>
        <div style={{...style.sectionItemWrapper, placeSelf: 'center'}}>
          <div style={{...style.sectionItem, borderBottom: 'none'}}>
            <MuiThemeProvider theme={SeeTheme}>
                <FinancialPanel 
                headerName='Multimercado' 
                headerPercentage='6.1' 
                color='#0580C4'
                data={data} />
            </MuiThemeProvider>
          </div>
        </div>
        <div style={style.sectionDetails}>
          <Typography variant='body1'>
            <div>
                &lt;
                    <span style={style.tag}>FinancialPanel </span>

                    <span style={style.attr}>headerName</span>=
                    <span style={style.value}>'Multimercado' </span>
                    <br />
                    <span style={style.attr}>headerPercentage</span>=
                    <span style={style.value}>'0.35' </span>
                    <br />
                    <span style={style.attr}>color</span>=
                    <span style={style.value}>'#0580C4' </span>
                    <br />
                    <span style={style.attr}>data</span>=
                    <span style={style.value}>
                        &#123; 
                            percentual: 0.061, 
                            <br/>
                            product: &#123;
                                rentability: 138,
                                evaluationClient: 'Ações e mercado de juros global com hedge cambial',
                                name:'ABSOLUTE ALPHA GLOBAL FIC FIM',
                                currentPL:1179318698,
                                cnpj:'21.983.042/0001-60',
                            &#125;
                        &#125; 
                    </span>
                /&gt;
            </div>
          </Typography>
          <Typography variant='overline' style={style.details}>
            Props
          </Typography>
          <Typography variant='caption'>
            headerName:  PropTypes.string,
            <br/>
            headerPercentage: PropTypes.number,
            <br/>
            color: PropTypes.string,
            <br/>
            data: PropTypes.object
          </Typography>
        </div>
    </div>
)

storiesOf('Components ', module)
    .addDecorator(withKnobs)
    .add('FinancialPanel', () => (
        <FinancialPanelStory />
    ))