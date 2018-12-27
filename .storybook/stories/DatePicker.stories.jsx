import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { decorateAction } from '@storybook/addon-actions'
import moment from 'moment'
import MomentUtils from 'material-ui-pickers/utils/moment-utils'
import 'moment/locale/pt-br'
import { DatePicker, BioFinanceiraTheme, Button, MuiThemeProvider } from '../../src'
import withTests from './withTests'
import * as validation from '../../src/Core/validation'

moment.locale('pt-br')

const validator = new validation.Validator()

class DatePickerStory extends PureComponent {
  state = {
    selectedDate: null
  }

  handleDateChange = decorateAction([args => {
    this.setState({selectedDate: args[0]})
    return args
  }])

  render () {
    const {selectedDate} = this.state

    return (
      <div className='pl3'>
        <h5> Uso Básico </h5>
        <DatePicker
          label='Campo de Data'
          dateUtilityLibrary={MomentUtils}
          format='DD MM YYYY'
          value={selectedDate}
          onChange={this.handleDateChange('selecionei a data')}
        />

        <h5> Auto Ok ao selecionar data </h5>
        <DatePicker
          autoOk
          label='Campo de Data'
          dateUtilityLibrary={MomentUtils}
          format='DD MM YYYY'
          value={selectedDate}
          onChange={this.handleDateChange('selecionei a data')}
        />

        <h5> Com botão de limpar </h5>
        <DatePicker
          autoOk
          clearable
          disableFuture
          label='Campo de Data'
          dateUtilityLibrary={MomentUtils}
          format='DD MM YYYY'
          value={selectedDate}
          onChange={this.handleDateChange('selecionei a data')}
        />

        <h5> Com botão para selecionar "hoje" </h5>
        <DatePicker
          showTodayButton
          label='Campo de Data'
          dateUtilityLibrary={MomentUtils}
          format='DD MM YYYY'
          value={selectedDate}
          onChange={this.handleDateChange('selecionei a data')}
        />

        <h5> Digitar data com máscara </h5>
        <DatePicker
          keyboard
          label='Campo de Data'
          dateUtilityLibrary={MomentUtils}
          format='DD/MM/YYYY'
          mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
          value={selectedDate}
          disableOpenOnEnter
          animateYearScrolling={false}
          onChange={this.handleDateChange('selecionei a data')}
        />

        <h5> labels de botões personalizados </h5>
        <DatePicker
          showTodayButton
          label='Campo de Data'
          dateUtilityLibrary={MomentUtils}
          cancelLabel='Cancelar'
          clearLabel='Limpar'
          format='DD/MM/YYYY'
          okLabel='Ok'
          todayLabel='Hoje'
          value={selectedDate}
          onChange={this.handleDateChange('selecionei a data')}
        />

        <MuiThemeProvider theme={BioFinanceiraTheme}>
          <h5> Date Picker com tema </h5>
          <DatePicker
            showTodayButton
            label='Campo de Data'
            dateUtilityLibrary={MomentUtils}
            cancelLabel='Cancelar'
            clearLabel='Limpar'
            format='DD/MM/YYYY'
            okLabel='Ok'
            todayLabel='Hoje'
            value={selectedDate}
            onChange={this.handleDateChange('selecionei a data')}
          />
        </MuiThemeProvider>

        <MuiThemeProvider theme={BioFinanceiraTheme}>
          <h5> Date Picker com validação </h5>
          <DatePicker
            required
            keyboard
            showTodayButton
            clearable
            id='DatePickerWithValidation'
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
        </MuiThemeProvider>

        <Button onClick={validator.validate} variant='contained'>
          Validate
        </Button>
      </div>
    )
  }
}

storiesOf('Input', module)
  .addDecorator(withTests('DatePicker'))
  .add('Date Picker', () => {
    return <DatePickerStory/>
  })
