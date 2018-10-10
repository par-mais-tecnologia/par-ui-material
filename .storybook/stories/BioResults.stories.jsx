import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import {
  Grid,
  Typography,
  MuiThemeProvider,
  BioFinanceiraTheme,
  YourFinance,
  NumberedTitle,
  CheckedText,
  LineCirclesBox,
  DropCap,
  Thermometer,
  EmergencyReserve,
  Button,
  WalletChart
} from '../../src'

import { mock } from '../../src/YourProfile/'
import { walletExample } from '../../src/Core/mocks'
import { number } from '@storybook/addon-knobs'

class BioResultStory extends PureComponent {
  render () {
    const {children} = this.props
    return (
      <div className="w-100 pa2">
        <MuiThemeProvider theme={BioFinanceiraTheme}>
          <div>
            {children}
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

storiesOf('Bio Resultados', module)
  .add('2 - Suas finanças', () => {
    return (
      <BioResultStory>
        <NumberedTitle number={2} title={`Suas`} subtitle={`finanças`}>
          <YourFinance incomes={800} expenses={550}/>
        </NumberedTitle>
      </BioResultStory>
    )
  })
  .add('3 - Reserva de Emergência', () => {
    return (
      <BioResultStory>
        <NumberedTitle number={3} title={`Sua reserva`} subtitle={`de emergência`}>
          <EmergencyReserve
            reserve={number('Reserva', 8000)}
            months={number('Meses', 6)}
          />
        </NumberedTitle>
      </BioResultStory>
    )
  })
  .add('4 - Seu perfil psicológico', () => {
    return (
      <BioResultStory>
        <NumberedTitle number={4} title={'Seu perfil'} subtitle={'psicológico'}>
          <Grid container direction='column' className='mt3'>
            <Grid className='mb3'>
              <Typography>
                Levando em conta os fatores psicológicos, seu perfil de risco é: <b>{mock.profile}</b>
              </Typography>
            </Grid>
            <Grid className='mb4'>
              <Typography>
                {mock.justification}
              </Typography>
            </Grid>
            <Grid>
              {Object.values(mock.options).map((i) => {
                return (
                  <CheckedText key={i} containerClasses='mb4'>
                    {i}
                  </CheckedText>
                )
              })}
            </Grid>
          </Grid>
        </NumberedTitle>
      </BioResultStory>
    )
  })
  .add('5 - Sua capacidade financeira', () => {

    const mainPhrases = [
      'Permite que você busque maiores retornos nos seus investimentos, porque:',
      'É limitada porque:'
    ]

    return (
      <BioResultStory>
        <NumberedTitle number={5} title={'Sua capacidade'} subtitle={'financeira'}>
          <Grid container direction='column' className='mt3 ml2'>
            <Grid className='mb4'>
              <Typography>
                {mainPhrases[0]}
              </Typography>
            </Grid>
            <LineCirclesBox>
              <Grid className='pl3'>
                <Grid className='mb3'>
                  <Typography>
                    Você consegue poupar
                  </Typography>
                  <DropCap dropCap='20%'>
                    do que ganha
                  </DropCap>
                </Grid>
                <hr align="left" width={50} color='#E2E2E2' className='mb3'/>
                <Grid>
                  <Typography>
                    E o valor atual dos seus investimentos lhe <br/>
                    dá segurança, pois eles poderiam cobrir
                  </Typography>
                  <DropCap dropCap='20%'>
                    das suas despesas
                  </DropCap>
                </Grid>
              </Grid>
            </LineCirclesBox>
          </Grid>
        </NumberedTitle>
      </BioResultStory>
    )
  })
  .add('6 - Seu momento de vida', () => {

    const mainPhrases = [
      'Seu momento de vida permite que você ouse em seus investimentos, pois:',
      'Seu momento de vida pede cautela nos seus investimentos, pois:'
    ]

    const phrases = [
      'Você possui X dependentes',
      'Você não possui dependentes',
      'E está há X anos da idade que pretende parar de trabalhar'
    ]

    return (
      <BioResultStory>
        <NumberedTitle number={6} title={`Seu momento`} subtitle={`de vida`}>
          <Grid container direction='column' className='mt3'>
            <Grid className='mb4'>
              <Typography>
                {mainPhrases[0]}
              </Typography>
            </Grid>
            <Grid className='mb4'>
              {Object.values(phrases).map((i) => {
                return (
                  <CheckedText key={i} containerClasses='mb4'>
                    {i}
                  </CheckedText>
                )
              })}
            </Grid>
          </Grid>
        </NumberedTitle>
      </BioResultStory>
    )
  })
  .add('7 - Sua BIO financeira', () => {

    const bioColor = 'Laranja'

    return (
      <BioResultStory>
        <NumberedTitle number={7} title={`Sua BIO`} subtitle={`financeira`}>
          <Grid container direction='column'>
            <Grid className='mt3'>
              <Typography>
                Portanto, de acordo com a nossa metodologia, sua BIO Financeira está <b>{bioColor}</b>
              </Typography>
            </Grid>
            <Grid className='mb4'>
              <Thermometer bioColor={bioColor}/>
            </Grid>
            <Grid>
              <LineCirclesBox lineColor='#FF8C18'>
                <Typography>
                  Sua BIO indica que você pode <b>ousar e investir com entusiasmo</b>,
                  permitindo uma <b>dose extra de risco</b> em seus investimentos
                </Typography>
              </LineCirclesBox>
            </Grid>
          </Grid>
        </NumberedTitle>
      </BioResultStory>
    )
  })
  .add('8 - Carteira de investimentos', () => {
    const bioColor = 'Laranja'
    return (
      <BioResultStory>
        <NumberedTitle number={8} title={'Carteira de invesimentos'} subtitle={`alinhadas à sua BIO ${bioColor}`}>
          <WalletChart initialInvestment={200000} name='Charlinho de Jesus' wallet={walletExample}/>
        </NumberedTitle>
      </BioResultStory>
    )
  })
  .add('9 - Próximos passos', () => {
    const name = 'Vânia'
    const bioColor = 'Laranja'
    return (
      <BioResultStory>
        <Grid container direction='column' className='mt3'>
          <Grid item className='pv3'>
            <Typography style={BioFinanceiraTheme.styles.fonts.subtitle2}>{name},</Typography>
          </Grid>
          <Grid item className='pv3'>
            <Typography>Agora que você já sabe</Typography>
          </Grid>
          <Grid>
            <CheckedText containerClasses='mb4'>
              Que sua BIO está {bioColor}
            </CheckedText>
          </Grid>
          <Grid>
            <CheckedText containerClasses='mb4'>
              O valor para sua reserva de emergência
            </CheckedText>
          </Grid>
          <Grid>
            <CheckedText containerClasses='mb4'>
              A estratégia de investimentos mais adequada à sua BIO
            </CheckedText>
          </Grid>
          <Grid item className='pv3'>
            <Typography>É hora de definir seus objetivos financeiros com o Time de Especialistas da Par
              Mais </Typography>
          </Grid>
        </Grid>
        <div className={'pv3'}>
        <Grid container justify="center"  alignItems="center" spacing={12}>
          <Grid item xm={6} className={'tc'}></Grid>
            <Grid item sm={6} className={'tc'}>
            <Button
              variant='outlined'
            >
              FALE COM UM ESPECIALISTA
            </Button>
            <Typography>Consulta gratuita</Typography>
          </Grid>
          <Grid item sm={6} className={'tc'}>
            <Button variant='contained'>
              CONTRATE ONLINE
            </Button>
            <Typography style={{color: '#fff'}}> .</Typography>
          </Grid>
            <Grid item xm={6} className={'tc'}></Grid>
            </Grid>
        </div>
      </BioResultStory>
    )
  })