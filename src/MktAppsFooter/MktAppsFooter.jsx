import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid'

const styles = {
  title1: {
    fontFamily: 'Roboto Regular, sans-serif',
    fontSize: '.875rem',
    color: '#B6DDDC',
    lineHeight: 1.2
  },
  title2: {
    fontFamily: 'Roboto Regular, sans-serif',
    fontSize: '.875rem',
    color: '#F0F0F0',
    lineHeight: 1.2
  }
}

class MktAppsFooter extends PureComponent {
  render () {
    return (
      <Grid container justify='space-around' className='pa3'>
        <Grid item className='flex w-100 w-auto-l pb2 items-center justify-center items-center'>
          <img src='https://static.parmais.com.br/images/parmais-logo.svg' width='100px' />
        </Grid>
        <Grid className='flex flex-wrap tc tl-l mb3 mb0-l items-center'>
          <Grid className='w-100 w-auto-l pb2 pb0-l mb2 mb0-l bb b--white-20 bn-l' style={{ ...styles.title1 }}>
            <span className='di db-l'>Par Mais</span>
            <span> Emponderamento Financeiro</span>
          </Grid>
          <Grid className='bl-l b--white-20 ml3-l pl3-l w-100 w-auto-l mt1 mt0-l'>
            <span style={{ ...styles.title2 }}>
              Par Mais gestão administração de valores imobiliários <br />
              CNPJ: 21.719.643/0001-60
            </span>
          </Grid>
        </Grid>
        <Grid className='flex w-100 w-auto-l justify-center items-center'>
          <span style={{ ...styles.title2 }} className='dn db-l'>
            Nossas<br />redes sociais
          </span>
          <Grid className='bl-l b--white-20 ml0 ml3-l'>
            <a className='no-underline' href='https://www.facebook.com/parmais' target='_blank' rel='noopener noreferrer'>
              <i className='ml0 ml3-l white par-icon-facebook' />
            </a>
            <a className='no-underline' href='https://br.linkedin.com/company/par-mais' target='_blank' rel='noopener noreferrer'>
              <i className='ml3 ml2-l white par-icon-linkedin' />
            </a>
            <a className='no-underline' href='https://www.youtube.com/parmais' target='_blank' rel='noopener noreferrer'>
              <i className='ml3 ml2-l white par-icon-youtube' />
            </a>
            <a className='no-underline' href='https://www.instagram.com/parmais' target='_blank' rel='noopener noreferrer'>
              <i className='ml3 ml2-l white par-icon-instagram' />
            </a>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default MktAppsFooter
