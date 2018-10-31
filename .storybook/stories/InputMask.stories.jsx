import { storiesOf } from '@storybook/react'
import { BioFinanceiraTheme, InputMask, MaskedInput, Button, MuiThemeProvider } from '../../src'
import React, { PureComponent } from 'react'
import { decorateAction } from '@storybook/addon-actions'
import * as validation from '../../src/Core/validation'

const validator = new validation.Validator()

class InputMaskStory extends PureComponent {
  state = {
    value: ''
  }

  handleInputMaskChange = decorateAction([args => {
    this.setState({value: args[0].target.value})
    return args
  }])

  handleInputMaskChange2 = evt => {
    this.setState({value: evt.target.value})
  }

  TextMaskCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
      <MaskedInput
        {...other}
        ref={inputRef}
        onChange={onChange}
        mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
        showMask
      />
    );
  }

  render () {
    const {value} = this.state

    return (
      <div className='pl3'>
        <InputMask
          id='MaskInputId'
          label='Mask Input of People'
          typeMask='people'
          value={value}
          showEndAdornment = {true}
          onChange={this.handleInputMaskChange('Input Label alterado')}
        />
        <br/>
        <InputMask
          id='MaskInputId'
          label='Mask Input of Years'
          typeMask='years'
          value={value}
          showEndAdornment = {true}
          onChange={this.handleInputMaskChange('Input Label alterado')}
        />
        <br/>
        <InputMask
          id='MaskInputId'
          label='Mask Input of Years com adorment false'
          typeMask='years'
          value={value}
          showEndAdornment = {false}
          onChange={this.handleInputMaskChange('Input Label alterado')}
        />

        <h5> Input with Mask element</h5>
        <InputMask
          value={value}
          onChange={(evt => this.handleInputMaskChange2(evt))}
          showEndAdornment={false}
          inputComponent={this.TextMaskCustom}
        />

        <div className='mv4'>
          <h5> Com tema e validação</h5>
          <MuiThemeProvider theme={BioFinanceiraTheme}>
            <InputMask
              required
              validator={{ validator, type: validation.types.required}}
              value={value}
              onChange={(evt => this.handleInputMaskChange2(evt))}
              showEndAdornment={false}
              inputComponent={this.TextMaskCustom}
            />
          </MuiThemeProvider>
        </div>

        <Button onClick={validator.validate} variant='contained'>
          Validate
        </Button>
      </div>
    )
  }
}

storiesOf('Input', module)
  .add('Input Mask', () => {
    return <InputMaskStory/>
  })
