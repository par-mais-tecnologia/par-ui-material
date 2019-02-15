import React, { PureComponent } from 'react'
import { CheckedText, Grid, Paper, SeeTheme, Typography } from '../index'
import { getCurrencyFormat } from '../Core/masks'
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

class ObjectiveExpandableCard extends PureComponent {
  getObjectiveType (type) {
    switch (type) {
      case 'SECURITY_RESERVE':
        return {
          title: 'RESERVA DE EMERGÊNCIA',
          titleProps: { color: SeeTheme.styles.colors.siren, marginLeft: '5px', marginTop: '2px' },
          sTitle: 'Valor total',
          tTitle: 'Prazo para resgate',
          alt: 'Reserva de Emergência',
          iconSrc: 'https://s3-sa-east-1.amazonaws.com/static.parmais.com.br/images/padlock.svg',
          width: 21,
          heigth: 21
        }
      case 'TIMED_OBJECTIVE':
        return {
          title: 'SONHOS E METAS',
          titleProps: { color: SeeTheme.styles.colors.siren, marginLeft: '5px', marginTop: '2px' },
          sTitle: 'Valor total',
          tTitle: 'Prazo para resgate',
          alt: 'Sonhos e Metas',
          iconSrc: 'https://s3-sa-east-1.amazonaws.com/static.parmais.com.br/images/clock.svg',
          width: 27,
          heigth: 27
        }
      case 'FINANCIAL_INDEPENDENCE':
        return {
          title: 'VIVER DE RENDA',
          titleProps: { color: SeeTheme.styles.colors.siren, marginLeft: '5px' },
          sTitle: 'Valor total',
          tTitle: 'Prazo para resgate',
          alt: 'Viver de Renda',
          iconSrc: 'https://s3-sa-east-1.amazonaws.com/static.parmais.com.br/images/pig.svg',
          width: 30,
          heigth: 30
        }
      case 'IMPROVE_PROFITABILITY':
        return {
          title: 'INVESTIR MELHOR',
          titleProps: { color: SeeTheme.styles.colors.siren, marginLeft: '5px', marginTop: '1px' },
          sTitle: 'Valor total',
          tTitle: 'Prazo para resgate',
          alt: 'Investir melhor',
          iconSrc: 'https://s3-sa-east-1.amazonaws.com/static.parmais.com.br/images/wallet.svg',
          width: 23,
          height: 23
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
      title,
      sTitle,
      tTitle,
      numberOfDays,
      value,
      alt,
      iconSrc,
      width,
      height,
      titleProps,
      objectiveType,
      paperClasses,
      requested,
      amountRequest,
      classes } = this.props

    let standardType = null
    if (objectiveType) {
      standardType = this.getObjectiveType(objectiveType)
    }

    let mainTitle = this.verifyTitle(standardType, title)
    let secondTitle = standardType ? standardType.sTitle : sTitle
    let thirdTitle = standardType ? standardType.tTitle : tTitle
    let titlePropsValue = standardType ? standardType.titleProps : titleProps
    let altValue = standardType ? standardType.alt : alt
    let iconSrcValue = standardType ? standardType.iconSrc : iconSrc
    let widthValue = standardType ? standardType.width : width
    let heightValue = standardType ? standardType.height : height

    return (
      <MuiThemeProvider theme={SeeTheme}>
        <Paper elevation={1} className={`ph4 pv4 flex-column ${paperClasses}`} style={{ minWidth: '320px' }}>
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
          <div className='flex justify-center mt3'>
            <Typography variant={'body1'}>
              {getCurrencyFormat(value, 'R$', 0, ' ')}
            </Typography>
          </div>
          <div className='flex justify-center mv3'>
            <div className={classes.divisor} />
          </div>
          <div className='flex justify-center mt2'>
            <Typography variant={'caption'}>
              { thirdTitle }
            </Typography>
          </div>
          <div className='flex justify-center'>
            <Typography variant={'body1'}>
              {numberOfDays > 1 ? `${numberOfDays} dias corridos` : `${numberOfDays} dia corrido` }
            </Typography>
          </div>

          { requested
            ? <div className='mt4'>
              <div className='flex justify-center'>
                <CheckedText iconProps={{ color: SeeTheme.styles.colors.lightGreen }}>
                  <Typography variant={'caption'}>
                Resgate solicitado no valor de
                  </Typography>
                </CheckedText>
              </div>
              <div className='flex justify-center'>
                <Typography variant={'body1'}>
                  {getCurrencyFormat(amountRequest, 'R$', 0, ' ')}
                </Typography>
              </div>
            </div> : ''
          }
        </Paper>
      </MuiThemeProvider>
    )
  }
}

ObjectiveExpandableCard.propTypes = {
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

ObjectiveExpandableCard.defaultProps = {
  requested: false,
  value: 0,
  amountRequest: 0
}

export default withStyles(styles)(ObjectiveExpandableCard)
