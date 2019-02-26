import { storiesOf } from '@storybook/react'
import React, { PureComponent } from 'react'
import 'tachyons/css/tachyons.min.css'
import withTests from '../../withTests'
import { 
  SummaryHeader, 
  SeeTheme, 
  IconButton, 
  RepeatIcon, 
  Typography 
} from '../../../../src'
import '../../../../src/Core/styles/transitions.css'
import { MuiThemeProvider } from '@material-ui/core'
import style from '../../style'

let seeThemeOverride = SeeTheme;
seeThemeOverride.overrides.MuiIconButton = {
  root: {
    '&:hover': {
      backgroundColor: 'none'
    },
    '&:link': {
      backgroundColor: 'none'
    }
  }
},seeThemeOverride.overrides.MuiTouchRipple = {
    root: {
      color: 'transparent'
    }
}


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
      <MuiThemeProvider theme={seeThemeOverride}>
        <div style={{...style.section,  gridTemplateColumns: 'repeat(auto-fill)', padding: '2rem'}}>
          <div style={style.sectionItemWrapper}>
            <div>
              <Typography variant='title'>
                How to use?
              </Typography>
              <Typography variant='body2'>
                The style of <span style={style.tag}>SummaryHeader </span> is part of 
                <span style={style.tag}>SeeTheme </span> theme, to use it you must import the files
                into your project.
                This component accept a prop named as <span style={style.attr}>headerProps</span>, which is an "css" object,
                you should use with the intend to style the component.
              </Typography>
            </div>
            <div style={style.sectionItem}>
              <div style={{...style.sectionContent, width: '100%', background: 'white'}}>
                <SummaryHeader
                  classes='justify-center'
                  headerProps={{
                    boxShadow:'0px -3px 20px 0px',
                    backgroundImage:SeeTheme.styles.colors.seeGradient,
                    margin:'16px 0',
                    justifyContent:'center'
                  }}>

                  <div className='flex justify-center items-center flex-column'>
                    <div>
                      <Typography
                        align='center'
                        style={{...SeeTheme.styles.fonts.headline, marginTop:'117px', marginBottom:'0px'}}>
                        INVESTIMENTOS TOTAIS
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
                      <Typography align='center'
                        style={{...SeeTheme.styles.fonts.subtitle1, marginBottom:'117px', marginTop:'0', animationFillMode: 'backwards'}}
                        className={this.state.liquidGross? 'frame1' : 'frame2'}>
                          {this.getHelperText()}
                      </Typography>
                    </div>
                  </div>

                </SummaryHeader>
              </div>
              <Typography variant='body1'>
                &lt;
                    <span style={style.tag}>SummaryHeader </span>
                    <span style={style.attr}>headerProps</span>=
                    <span style={style.value}>
                    &#123;
                      &#123; 
                        boxShadow:'0px -3px 20px 0px',
                        backgroundImage:SeeTheme.styles.colors.seeGradient,
                        margin:'16px 0',
                        justifyContent:'center'
                      &#125;
                    &#125;
                    </span>
                &gt;...
              </Typography>
            </div>
            <div>
              <Typography variant='overline' style={style.details}>
                Props
              </Typography>
              <Typography variant='caption'>
                headerProps: PropTypes.object,
                <br/>
                children: PropTypes.node
              </Typography>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

storiesOf('Layout / Header', module)
  .addDecorator(withTests('SummaryHeader'))
  .add('SummaryHeader', () =>  <SummaryHeaderStory />)
