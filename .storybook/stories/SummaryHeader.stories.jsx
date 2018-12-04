import { storiesOf } from '@storybook/react'
import React, { PureComponent } from 'react'
import 'tachyons/css/tachyons.min.css'
import withTests from './withTests'
import { SummaryHeader, SeeTheme, IconButton } from '../../src'
import Typography from '@material-ui/core/Typography/Typography'
import RepeatIcon from '@material-ui/icons/Repeat'

class SummaryHeaderStory extends PureComponent {

  state = {
    value : 12.3,
    liquidGross: true,
  }

  numberFormat(number) {
    if (isNaN(number) || number === null) {
      return defaultValue
    }

    let numberValue = Number(number)

    let salary = this.state.liquidGross ? numberValue - (numberValue * 0.11) : numberValue

    const value = 'R$' + salary.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});

    return value.replace(/\./g, ',');
  }

  getHelperText() {
    if(this.state.liquidGross) {
      return 'É O VALOR LÍQUIDO TOTAL APLICADO'
    } else {
      return 'É O VALOR BRUTO TOTAL APLICADO'
    }
  }

  handleChangeTypes = () => {
    this.setState({liquidGross: !this.state.liquidGross})
  }

  render () {
    const { value } = this.state

    return (
      <SummaryHeader
        classes='justify-center'
        boxShadow={'0px -3px 20px 0px'}
        backgroundImage={SeeTheme.styles.colors.seeGradient}
        margin='16px'
        justifyContent='center'>

        <div className='flex justify-center items-center flex-column'>
          <div>
            <Typography align='center' style={SeeTheme.styles.fonts.headline}>
              <p style={{marginTop:'117px', marginBottom:'0px'}}>INVESTIMENTOS TOTAIS</p>
            </Typography>
          </div>
          <div className='flex flex-row'>
            <div className='left'>
              <p style={{marginTop:'18px', color:'white', fontSize:'24px',fontFamily:'Roboto Light', marginBottom:'0' }}>
                {this.numberFormat(value)}
              </p>
            </div>
            <div className='right'>
              <IconButton onClick={() => this.handleChangeTypes()}>
                <RepeatIcon style={{color:'white', fontSize:'24px', marginTop:'6px'}} />
              </IconButton>
            </div>
          </div>
          <div>
            <Typography align='center' style={SeeTheme.styles.fonts.subtitle1}>
              <p style={{marginBottom:'117px', marginTop:'0'}}> {this.getHelperText()} </p>
            </Typography>
          </div>
        </div>

      </SummaryHeader>
    )
  }
}

storiesOf('SummaryHeader', module)
  .addDecorator(withTests('SummaryHeader'))
  .add('SummaryHeader', () => {
    return <SummaryHeaderStory />
  })
