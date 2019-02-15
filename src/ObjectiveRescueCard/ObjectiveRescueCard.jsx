import React, { PureComponent } from 'react'
import { Switch, Grid, MenuItem, Paper, SeeTheme, Select, TextField, Typography } from '../index'
import { getCurrencyFormat, NumberFormatCustom } from '../Core/masks'
import * as PropTypes from 'prop-types'
import { MuiThemeProvider, withStyles } from '@material-ui/core'

const styles = theme => ({
  divisor: {
    ...theme.goalSummary.divisor,
    width: '80%',
    height: '1px',
    background: '#F0F0F0'
  }
})

class ObjectiveRescueCard extends PureComponent {
  getObjectiveType (type) {
    switch (type) {
      case 'SECURITY_RESERVE':
        return {
          preTitle: 'Do objetivo:',
          title: 'RESERVA DE EMERGÊNCIA',
          titleProps: { color: SeeTheme.styles.colors.siren, marginLeft: '5px', marginTop: '2px' },
          sTitle: 'Saldo disponível para resgatar',
          alt: 'Reserva de emergência',
          firstQuestion: 'Quanto você deseja resgatar?',
          secondQuestion: 'Qual o motivo do resgate?',
          switchText: 'Resgatar todo o valor',
          iconSrc: 'https://s3-sa-east-1.amazonaws.com/static.parmais.com.br/images/padlock.svg',
          width: 21,
          heigth: 21
        }
      case 'TIMED_OBJECTIVE':
        return {
          preTitle: 'Do objetivo:',
          title: 'SONHOS E METAS',
          titleProps: { color: SeeTheme.styles.colors.siren, marginLeft: '5px', marginTop: '2px' },
          sTitle: 'Saldo disponível para resgatar',
          alt: 'Sonhos e Metas',
          firstQuestion: 'Quanto você deseja resgatar?',
          secondQuestion: 'Qual o motivo do resgate?',
          switchText: 'Resgatar todo o valor',
          iconSrc: 'https://s3-sa-east-1.amazonaws.com/static.parmais.com.br/images/clock.svg',
          width: 21,
          heigth: 21
        }
      case 'FINANCIAL_INDEPENDENCE':
        return {
          preTitle: 'Do objetivo:',
          title: 'VIVER DE RENDA',
          titleProps: { color: SeeTheme.styles.colors.siren, marginLeft: '5px', marginTop: '2px' },
          sTitle: 'Saldo disponível para resgatar',
          alt: 'Viver de renda',
          firstQuestion: 'Quanto você deseja resgatar?',
          secondQuestion: 'Qual o motivo do resgate?',
          switchText: 'Resgatar todo o valor',
          iconSrc: 'https://s3-sa-east-1.amazonaws.com/static.parmais.com.br/images/pig.svg',
          width: 21,
          heigth: 21
        }
      case 'IMPROVE_PROFITABILITY':
        return {
          preTitle: 'Do objetivo:',
          title: 'INVESTIR MELHOR',
          titleProps: { color: SeeTheme.styles.colors.siren, marginLeft: '5px', marginTop: '2px' },
          sTitle: 'Saldo disponível para resgatar',
          alt: 'Investir melhor',
          firstQuestion: 'Quanto você deseja resgatar?',
          secondQuestion: 'Qual o motivo do resgate?',
          switchText: 'Resgatar todo o valor',
          iconSrc: 'https://s3-sa-east-1.amazonaws.com/static.parmais.com.br/images/wallet.svg',
          width: 21,
          heigth: 21
        }
      default:
        return null
    }
  }

  verifyTitle (standardType, title) {
    if (standardType) {
      if (title) {
        return title
      } else {
        return standardType.title
      }
    }
    return title
  }

  render () {
    const {
      preTitle,
      title,
      titleProps,
      sTitle,
      value,
      alt,
      iconSrc,
      width,
      height,
      objectiveType,
      paperClasses,
      amountRequest,
      firstQuestion,
      secondQuestion,
      switchText,
      classes,
      reasonValue } = this.props

    let standardType = null
    if (objectiveType) {
      standardType = this.getObjectiveType(objectiveType)
    }

    let mainTitle = this.verifyTitle(standardType, title)
    let secondTitle = standardType ? standardType.sTitle : sTitle
    let pTitle = standardType ? standardType.preTitle : preTitle
    let fQuestion = standardType ? standardType.firstQuestion : firstQuestion
    let sQuestion = standardType ? standardType.secondQuestion : secondQuestion
    let sText = standardType ? standardType.switchText : switchText
    let titlePropsValue = standardType ? standardType.titleProps : titleProps
    let altValue = standardType ? standardType.alt : alt
    let iconSrcValue = standardType ? standardType.iconSrc : iconSrc
    let widthValue = standardType ? standardType.width : width
    let heightValue = standardType ? standardType.height : height

    return (
      <MuiThemeProvider theme={{}}>
        <Paper elevation={1} className={`ph4 pv4 flex-column ${paperClasses}`} style={{ minWidth: '650px' }}>
          <div className='flex justify-center mt3'>
            <Typography variant={'caption'}>
              { pTitle }
            </Typography>
          </div>
          <Grid container
            direction='row'
            className='flex justify-center'>
            <Grid item>
              <img
                border='0'
                alt={altValue}
                src={iconSrcValue}
                width={widthValue}
                height={heightValue} />
            </Grid>
            <Grid item>
              <Typography variant={'headline'}
                style={{ ...titlePropsValue }}>
                { mainTitle }
              </Typography>
            </Grid>
          </Grid>
          <div className='flex justify-center mt3'>
            <Typography variant={'body2'}>
              { secondTitle }
            </Typography>
          </div>
          <div className='flex justify-center mt1'>
            <Typography variant={'body1'}>
              {getCurrencyFormat(value, 'R$', 0, ' ')}
            </Typography>
          </div>
          <div className='flex justify-center mt4'>
            <div className={classes.divisor} />
          </div>
          <div className='flex justify-center mt4'>
            <div style={{ width: '20%' }} />
            <div className='main' style={{ flex: '1' }}>
              <Typography variant={'caption'}>
                { fQuestion }
              </Typography>
            </div>
            <div style={{ width: '20%' }} />
          </div>

          <div className='flex justify-center' >
            <div style={{ width: '20%' }} />
            <div className='flex main justify-center w-100' style={{ flex: '1' }}>
              <TextField
                style={{ width: '100%', marginBottom: '0px', color: 'red' }}
                value={amountRequest}
                onChange={(e) => console.log(e)}
                InputProps={{
                  inputComponent: NumberFormatCustom
                }}
              />
            </div>
            <div style={{ width: '20%' }} />
          </div>

          <div className='flex'>
            <div style={{ width: '20%' }} />
            <div className='main flex-row' style={{ flex: '1', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant={'body2'}>
                  { sText }
                </Typography>
                <Switch />
              </div>
            </div>
            <div style={{ width: '20%' }} />
          </div>

          <div className='flex justify-center mt4'>
            <div style={{ width: '20%' }} />
            <div className='main' style={{ flex: '1' }}>
              <Typography variant={'caption'}>
                { sQuestion }
              </Typography>
            </div>
            <div style={{ width: '20%' }} />
          </div>

          <div className='flex justify-center mb4'>
            <div style={{ width: '20%' }} />
            <div className='main' style={{ flex: '1' }}>
              <Select
                formControlStyle={{ width: '100%' }}
                style={{ marginTop: '0px', style: '100%' }}
                value={reasonValue}
                onChange={(e) => console.log(e)}
                minWidth={120}>
                <MenuItem value=''>
                  <em>
                    <Typography variant={'body1'}>
                      Selecionar
                    </Typography>
                  </em>
                </MenuItem>
                <MenuItem value={10}>
                  <Typography variant={'body1'}>
                    Atingi meu objetivo
                  </Typography>
                </MenuItem>
                <MenuItem value={20}>
                  <Typography variant={'body1'}>
                    Motivos pessoais
                  </Typography>
                </MenuItem>
                <MenuItem value={30}>
                  <Typography variant={'body1'}>
                    Não estou satisfeito com minha carteira
                  </Typography>
                </MenuItem>
              </Select>
            </div>
            <div style={{ width: '20%' }} />
          </div>

        </Paper>
      </MuiThemeProvider>
    )
  }
}

ObjectiveRescueCard.propTypes = {
  title: PropTypes.string,
  sTitle: PropTypes.string,
  tTitle: PropTypes.string,
  numberOfDays: PropTypes.number,
  value: PropTypes.number,
  alt: PropTypes.string,
  iconSrc: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  titleProps: PropTypes.object,
  objectiveType: PropTypes.string,
  paperClasses: PropTypes.string
}

ObjectiveRescueCard.defaultProps = {
  requested: false,
  value: 0,
  amountRequest: 0
}

export default withStyles(styles)(ObjectiveRescueCard)
