import React, { PureComponent } from 'react'
import { Grid, Paper, SeeTheme, Typography } from '../index'
import { getCurrencyFormat } from '../Core/masks'
import * as PropTypes from 'prop-types'

export default class ObjectiveCard extends PureComponent {
  getObjectiveType (type) {
    switch (type) {
      case 'SECURITY_RESERVE':
        return {
          title: 'RESERVA DE EMERGÊNCIA',
          titleProps: { color: SeeTheme.styles.colors.gray_01, marginLeft: '5px', marginTop: '2px', fontSize: '16px' },
          subTitle: 'Valor total',
          alt: 'Reserva de Emergência',
          iconSrc: 'https://s3-sa-east-1.amazonaws.com/static.parmais.com.br/images/padlock.svg',
          width: 21,
          heigth: 21
        }
      case 'TIMED_OBJECTIVE':
        return {
          title: 'SONHOS E METAS',
          titleProps: { color: SeeTheme.styles.colors.gray_01, marginLeft: '5px', marginTop: '2px', fontSize: '16px' },
          subTitle: 'Valor total',
          alt: 'Sonhos e Metas',
          iconSrc: 'https://s3-sa-east-1.amazonaws.com/static.parmais.com.br/images/clock.svg',
          width: 27,
          heigth: 27
        }
      case 'FINANCIAL_INDEPENDENCE':
        return {
          title: 'VIVER DE RENDA',
          titleProps: { color: SeeTheme.styles.colors.gray_01, marginLeft: '5px', fontSize: '16px' },
          subTitle: 'Valor total',
          alt: 'Viver de Renda',
          iconSrc: 'https://s3-sa-east-1.amazonaws.com/static.parmais.com.br/images/pig.svg',
          width: 30,
          heigth: 30
        }
      case 'IMPROVE_PROFITABILITY':
        return {
          title: 'INVESTIR MELHOR',
          titleProps: { color: SeeTheme.styles.colors.gray_01, marginLeft: '5px', marginTop: '1px', fontSize: '16px' },
          subTitle: 'Valor total',
          alt: 'Reserva de Emergência',
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
    const { title, subTitle, value, alt, iconSrc, width, height, titleProps, objectiveType, classes } = this.props

    let standardType = null
    if (objectiveType) {
      standardType = this.getObjectiveType(objectiveType)
    }

    let titleValue = this.verifyTitle(standardType, title)
    let subTitleValue = standardType ? standardType.subTitle : subTitle
    let titlePropsValue = standardType ? standardType.titleProps : titleProps
    let altValue = standardType ? standardType.alt : alt
    let iconSrcValue = standardType ? standardType.iconSrc : iconSrc
    let widthValue = standardType ? standardType.width : width
    let heightValue = standardType ? standardType.height : height

    return (
      <Paper elevation={1} className={`ph4 pv4 flex-column ${classes}`}>
        <Grid container
          direction='row'>
          <Grid item>
            <img
              border='0'
              alt={altValue}
              src={iconSrcValue}
              width={widthValue}
              height={heightValue} />
          </Grid>
          <Grid item>
            <Typography variant={'h2'}
              style={{ ...titlePropsValue }}>
              { titleValue }
            </Typography>
          </Grid>
        </Grid>
        <div>
          <Typography variant={'caption'} style={{ fontSize: '16px' }}>
            { subTitleValue }
          </Typography>
        </div>
        <div>
          <Typography variant={'body2'}>
            {getCurrencyFormat(value, 'R$', 0, ' ')}
          </Typography>
        </div>
      </Paper>
    )
  }
}

ObjectiveCard.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  value: PropTypes.number,
  alt: PropTypes.string,
  iconSrc: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  titleProps: PropTypes.object,
  objectiveType: PropTypes.string,
  classes: PropTypes.string
}
