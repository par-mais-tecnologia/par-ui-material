import { storiesOf } from '@storybook/react'
import { DatePicker } from '../../src'

import React, { PureComponent } from 'react'
import MomentUtils from 'material-ui-pickers/utils/moment-utils'
import { decorateAction } from '@storybook/addon-actions'
import moment from 'moment'
import 'moment/locale/pt-br'
import withTests from './withTests'
import bioFinanceiraTheme from '../../src/BioFinanceiraTheme/BioFinanceiraTheme'
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider'

moment.locale('pt-br')

class DatePickerStory extends PureComponent {
  state = {
    selectedDate: new Date()
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
          format='DD/MMMM/YYYY'
          okLabel='Ok'
          todayLabel='Hoje'
          value={selectedDate}
          onChange={this.handleDateChange('selecionei a data')}
        />

        <MuiThemeProvider theme={bioFinanceiraTheme}>
          <h5> Date Picker com tema </h5>
          <DatePicker
            showTodayButton
            label='Campo de Data'
            dateUtilityLibrary={MomentUtils}
            cancelLabel='Cancelar'
            clearLabel='Limpar'
            format='DD/MMMM/YYYY'
            okLabel='Ok'
            todayLabel='Hoje'
            value={selectedDate}
            onChange={this.handleDateChange('selecionei a data')}
          />
        </MuiThemeProvider>

      </div>
    )
  }
}

storiesOf('Input', module)
  .addDecorator(withTests('DatePicker'))
  .add('Date Picker', () => {
    return <DatePickerStory/>
  })
