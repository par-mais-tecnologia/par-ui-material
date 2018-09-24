import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  const { styles } = theme
  return {
    title1: {
      ...theme.typography.body2,
      color: styles.colors.fairy,
      lineHeight: 1.2
    },
    title2: {
      ...theme.typography.body2,
      color: styles.colors.gray_04,
      lineHeight: 1.2
    }
  }
}

class MktAppsFooter extends PureComponent {
  render () {
    const { classes } = this.props

    return (
      <Grid container justify='space-around' className='pa3'>
        <Grid item className='flex mb2 mb0-ns pb2 items-center'>
          <img src='https://static.parmais.com.br/images/parmais-logo.svg' width='100px' />
        </Grid>
        <Grid className='flex flex-wrap tc tl-ns mb3 mb0-ns items-center'>
          <Grid className={`${classes.title1} w-100 w-auto-ns pb2 pb0-ns mb2 mb0-ns bb b--white-20 bn-ns`}>
            <span className='di db-ns'>Par Mais</span>
            <span> Emponderamento Financeiro</span>
          </Grid>
          <Grid className='bl-ns b--white-20 ml3-ns pl3-ns w-100 w-auto-ns mt1 mt0-ns'>
            <span className={classes.title2}>
                Par Mais gestão administração de valores imobiliários <br />
                CNPJ: 21.719.643/0001-60
            </span>
          </Grid>
        </Grid>
        <Grid className='flex w-100 w-auto-ns justify-center items-center'>
          <span className={`${classes.title1} dn db-ns`}>
              Nossas<br />redes sociais
          </span>
          <Grid className='bl-ns b--white-20 ml0 ml3-ns'>
            <a href=''>
              <i className='ml0 ml3-ns white par-icon-facebook' />
            </a>
            <a href=''>
              <i className='ml3 ml2-ns white par-icon-linkedin' />
            </a>
            <a href=''>
              <i className='ml3 ml2-ns white par-icon-youtube' />
            </a>
            <a href=''>
              <i className='ml3 ml2-ns white par-icon-instagram' />
            </a>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles, { withTheme: true })(MktAppsFooter)
