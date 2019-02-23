import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import {
  BioFinanceiraTheme,
  Modal,
  ModalFinBioEmailInput,
  Button,
  MuiThemeProvider,
  Grid,
  Typography, SeeTheme
} from '../../src'

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
  .add('modal minha carteira', () => {
    return (
      <MuiThemeProvider theme={SeeTheme}>
        <ModalStories>
          <ModalFinBioEmailInput />
        </ModalStories>
      </MuiThemeProvider>
    )
  })