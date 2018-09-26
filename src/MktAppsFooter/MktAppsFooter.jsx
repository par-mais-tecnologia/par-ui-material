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
        <Grid item className='flex w-100 w-auto-l pb2 items-center justify-center items-center'>
          <img src='https://static.parmais.com.br/images/parmais-logo.svg' width='100px' />
        </Grid>
        <Grid className='flex flex-wrap tc tl-l mb3 mb0-l items-center'>
          <Grid className={`${classes.title1} w-100 w-auto-l pb2 pb0-l mb2 mb0-l bb b--white-20 bn-l`}>
            <span className='di db-l'>Par Mais</span>
            <span> Emponderamento Financeiro</span>
          </Grid>
          <Grid className='bl-l b--white-20 ml3-l pl3-l w-100 w-auto-l mt1 mt0-l'>
            <span className={classes.title2}>
                Par Mais gestão administração de valores imobiliários <br />
                CNPJ: 21.719.643/0001-60
            </span>
          </Grid>
        </Grid>
        <Grid className='flex w-100 w-auto-l justify-center items-center'>
          <span className={`${classes.title1} dn db-l`}>
              Nossas<br />redes sociais
          </span>
          <Grid className='bl-l b--white-20 ml0 ml3-l'>
            <a href=''>
              <i className='ml0 ml3-l white par-icon-facebook' />
            </a>
            <a href=''>
              <i className='ml3 ml2-l white par-icon-linkedin' />
            </a>
            <a href=''>
              <i className='ml3 ml2-l white par-icon-youtube' />
            </a>
            <a href=''>
              <i className='ml3 ml2-l white par-icon-instagram' />
            </a>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles, { withTheme: true })(MktAppsFooter)
