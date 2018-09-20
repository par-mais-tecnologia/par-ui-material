import React, { PureComponent } from 'react'

import { storiesOf } from '@storybook/react'
import { decorateAction } from '@storybook/addon-actions'

import Button from '@material-ui/core/Button'
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider'

import { 
  BioFinanceiraTheme,
  Modal,
  ModalFinBioEmailInput
} from '../../src'
import { Grid, Typography } from '@material-ui/core/es'

function ModalSample(props) {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
    >
      <Grid container direction='column'>
        <Typography variant='body1'>Digite seu e-mail</Typography>
        <Typography variant='body1'>
          Enviaremos o resultados para você acessá-lo quando quiser
         </Typography>

        <Grid container direction='row' wrap='nowrap'>
          <Button onClick={props.onClose}> Fechar </Button>
          <Button onClick={() => { }}> Acessar Resultado </Button>
        </Grid>
      </Grid>
    </Modal>
  )
}

class ModalStories extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      email: ''
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleContinue = this.handleContinue.bind(this)
  }

  handleOpen() {
    this.setState({ open: true})
  }

  handleClose() {
    this.setState({ open: false})
  }

  handleEmailChange(foo) {
    this.setState({email: foo.target.value})
  }

  handleContinue() {
    console.log('CONTINUA')
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleOpen}> Abrir </Button>
        {
          React.cloneElement(this.props.children, 
            {
              open: this.state.open,
              onClose: this.handleClose,
              email: this.state.email,
              onChangeEmail: this.handleEmailChange,
              onContinue: this.handleContinue
            })
        }
      </div>
    )
  }
}

storiesOf('Modal', module)
  .add('modal structure', () => {
    return (
    <ModalStories>
      <ModalSample />
    </ModalStories>
    )
  })
  .add('finBio email input', () => {
    return (
      <MuiThemeProvider theme={BioFinanceiraTheme}>
        <ModalStories>
          <ModalFinBioEmailInput />
        </ModalStories>
      </MuiThemeProvider>
    )
  })