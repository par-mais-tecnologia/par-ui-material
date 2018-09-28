import React, { Component } from 'react'

import { Grid, Typography } from '@material-ui/core'

import Modal from '../Modal'
import Button from '../Button'

import TextField from '../TextField'
import * as validation from '../Core/validation'

const validator = new validation.Validator()

class ModalFinBioEmailInput extends Component {
  constructor (props) {
    super(props)
    this.ifValidContinue = this.ifValidContinue.bind(this)
  }

  ifValidContinue () {
    if (validator.validate()) {
      this.props.onContinue()
    }
  }

  render () {
    const { open, onClose, onChangeEmail, email } = this.props
    return (
      <Modal open={open} onClose={onClose}>
        <Grid container direction='column' spacing={16}>
          <Grid item xs={12}>
            <Typography variant='title'>
              DIGITE SEU E-MAIL
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant='body1'>
              Enviaremos o resultado para você acessá-lo quando quiser
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              label='Seu e-mail'
              onChange={onChangeEmail}
              name='email'
              validator={{ validator, type: validation.types.email }}
              value={email}
              style={{ width: '100%' }}
            />
          </Grid>

          <Grid item>
            <Grid
              container
              direction='row'
              wrap='nowrap'
              justify='space-between'
              spacing={16}
              xs={12}
            >
              <Grid item>
                <Button variant='outlined' onClick={onClose}>
                  Fechar
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  onClick={this.ifValidContinue}>
                  Acessar Resultado
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    )
  }
}

export default ModalFinBioEmailInput
