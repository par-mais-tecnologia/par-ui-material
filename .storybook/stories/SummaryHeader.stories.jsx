import { storiesOf } from '@storybook/react'
import React, { PureComponent } from 'react'
import 'tachyons/css/tachyons.min.css'
import withTests from './withTests'
import { SummaryHeader, SeeTheme, IconButton } from '../../src'
import Typography from '@material-ui/core/Typography/Typography'
import RepeatIcon from '@material-ui/icons/Repeat'
import { CSSTransitionGroup } from 'react-transition-group'
import '../../src/Core/styles/transitions.css'
import { MuiThemeProvider } from '@material-ui/core'

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
      return 'É o valor líquido total aplicado'
    } else {
      return 'É o valor bruto total aplicado'
    }
  }

  handleChangeTypes = () => {
    this.setState({liquidGross: !this.state.liquidGross})
  }

  render () {
    const { value } = this.state

    return (
      <MuiThemeProvider theme={SeeTheme}>
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
                  <p style={{marginTop:'18px', color:'white', fontSize:'24px',fontFamily:'Roboto Light', marginBottom:'0' }}
                     className={this.state.liquidGross? 'frame1' : 'frame2'}>
                    {this.numberFormat(value)}
                  </p>
                </div>

            <div className='right'>
              <IconButton style={{ padding: '12px 0px 12px 12px' }} onClick={() => this.handleChangeTypes()}>
                <RepeatIcon style={{color:'white', fontSize:'24px', marginTop:'6px'}} />
              </IconButton>
            </div>
          </div>
          <div>
              <Typography align='center' style={SeeTheme.styles.fonts.subtitle1} >
                <p style={{marginBottom:'117px', marginTop:'0', animationFillMode: 'backwards'}}
                  className={this.state.liquidGross? 'frame1' : 'frame2'}>
                  {this.getHelperText()}
                </p>
              </Typography>
          </div>
        </div>

      </SummaryHeader>
      </MuiThemeProvider>
    )
  }
}

storiesOf('SummaryHeader', module)
  .addDecorator(withTests('SummaryHeader'))
  .add('SummaryHeader', () => {
    return <SummaryHeaderStory />
  })
