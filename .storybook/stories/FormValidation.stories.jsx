import { storiesOf } from '@storybook/react'
import { DatePicker, Select, TextField, Button } from '../../src'
import React, { PureComponent } from 'react'
import { decorateAction } from '@storybook/addon-actions'
import MenuItem from '@material-ui/core/MenuItem'
import * as validation from '../../src/Core/validation'
import MomentUtils from 'material-ui-pickers/utils/moment-utils'

const validator = new validation.Validator()

class FormValidationStory extends PureComponent {
  state = {
    value: '',
    valueEmail: '',
    selectedDate: '',
  }

  handleSelectChange = decorateAction([args => {
    this.setState({value: args[0].target.value})
    return args
  }])

  handleEmailChange = decorateAction([args => {
    this.setState({valueEmail: args[0].target.value})
    return args
  }])

  handleDateChange = decorateAction([args => {
    this.setState({selectedDate: args[0]})
    return args
  }])

  testForm() {
    if(validator.validate()) {
      alert('Está valido');
    } else {
      alert('Está inválido')
    }
  }

  render () {
    const {value, valueEmail, selectedDate} = this.state

    return (
      <div className='pl3'>

        <div>
        <Select
          required
          validator={{validator, type: validation.types.required}}
          value={value}
          onChange={this.handleSelectChange('valor selecionado')}
          minWidth={120}
          renderValue={value => `⚠️  - ${value}`}>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value='hai'>Hai</MenuItem>
          <MenuItem value='olivier'>Olivier</MenuItem>
          <MenuItem value='kevin'>Kevin</MenuItem>
        </Select>
        </div>

        <div>
        <TextField
          required
          label='Email'
          onChange={this.handleEmailChange('Email Modificado')}
          name='email'
          validator={{validator, type: validation.types.email}}
          value={valueEmail}
        />
        </div>

        <div>
        <DatePicker
          required
          keyboard
          showTodayButton
          clearable
          mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
          validator={{validator, type: validation.types.required}}
          label='Campo de Data'
          invalidDateMessage={'Data Inválida'}
          dateUtilityLibrary={MomentUtils}
          cancelLabel='Cancelar'
          clearLabel='Limpar'
          format='DD/MM/YYYY'
          okLabel='Ok'
          todayLabel='Hoje'
          value={selectedDate}
          onChange={this.handleDateChange('selecionei a data')}
        />
        </div>

        <Button onClick={() => this.testForm()} variant='contained'>
          Validate
        </Button>
      </div>

    )
  }
}

storiesOf('Input', module)
  .add('FormValidation', () => {
    return <FormValidationStory/>
  })
