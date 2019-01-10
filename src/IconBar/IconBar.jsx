import React, { PureComponent } from 'react'
import Grid from '../Grid'

export default class IconBar extends PureComponent {
  render () {
    return (
      <Grid container justify='center' alignItems='center' className='mt2'>
        <a className='no-underline mh1 mh4-ns'
          href='https://www.facebook.com/parmais'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            border='0'
            alt='Facebook'
            src='https://s3-sa-east-1.amazonaws.com/static.parmais.com.br/images/facebook_contact.svg'
            width='50'
            height='50' />
        </a>
        <a className='no-underline mh1 mh4-ns'
          href='https://www.instagram.com/parmais'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            border='0'
            alt='Instagram'
            src='https://s3-sa-east-1.amazonaws.com/static.parmais.com.br/images/instagram_contact.svg'
            width='50'
            height='50' />
        </a>
        <a className='no-underline mh1 mh4-ns'
          href='https://www.youtube.com/parmais'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            border='0'
            alt='Youtube'
            src='https://s3-sa-east-1.amazonaws.com/static.parmais.com.br/images/youtube_contact.svg'
            width='50'
            height='50' />
        </a>
        <a className='no-underline mh1 mh4-ns'
          href='https://br.linkedin.com/company/par-mais'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            border='0'
            alt='Linkedin'
            src='https://s3-sa-east-1.amazonaws.com/static.parmais.com.br/images/linkedin_contact.svg'
            width='50'
            height='50' />
        </a>
      </Grid>
    )
  }
}
