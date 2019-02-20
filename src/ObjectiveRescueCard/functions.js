import { SeeTheme } from '../index'

export function getObjectiveType (type) {
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

export function verifyTitle (standardType, title) {
  if (standardType) {
    if (title) {
      return title
    } else {
      return standardType.title
    }
  }
  return title
}