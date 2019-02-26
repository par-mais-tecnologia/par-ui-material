import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, withKnobs, text } from '@storybook/addon-knobs'
import moment from 'moment'
import MomentUtils from 'material-ui-pickers/utils/moment-utils'
import 'moment/locale/pt-br'
import { 
  DatePicker, 
  BioFinanceiraTheme, 
  Button, 
  MuiThemeProvider,
  Typography
} from '../../../../src'
import withTests from '../../withTests'
import * as validation from '../../../../src/Core/validation'
import style from '../../style'
import PropsTable from '../../../utils/PropsTable'

moment.locale('pt-br')

const validator = new validation.Validator()

const DatePickerStory = (props) => {
  const [selectedDate, handleDateChange] = useState()
  return(
    <div style={{
        ...style.section, 
        gridTemplateColumns: 'repeat(auto-fill,minmax(30rem, 1fr))'
      }}>
        <div style={{...style.sectionItemWrapper, placeSelf: 'center'}}>
          <div style={{...style.sectionItem, borderBottom: 'none' }}>
            <MuiThemeProvider theme={BioFinanceiraTheme}>
              <DatePicker
                required={props.required}
                keyboard={props.keyboard}
                showTodayButton={props.showTodayButton}
                clearable={props.clearable}
                id='DatePickerWithValidation'
                mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
                validator={{validator, type: validation.types.required}}
                label={props.label}
                invalidDateMessage={props.invalidDateMessage}
                dateUtilityLibrary={MomentUtils}
                cancelLabel={props.cancelLabel}
                clearLabel={props.clearLabel}
                format='DD/MM/YYYY'
                okLabel={props.okLabel}
                todayLabel={props.todayLabel}
                value={selectedDate}
                onChange={ (event) => handleDateChange(event.target.value)}
              />
            </MuiThemeProvider>
          </div>
          <Button onClick={validator.validate} variant='outlined'>
            Validate
          </Button>
        </div>
        <div style={style.sectionDetails}>
          <Typography variant='body1'>
            &lt;
              <span style={style.tag}>DatePicker  </span>
              {
                Object.keys(props).map( key => (
                  <React.Fragment key={key}>
                    <span style={style.attr}>{key}</span>=
                    <span style={style.value}>'{`${props[key]}`}' </span>
                  </React.Fragment>
                ))
              }
            /&gt;
          </Typography>
          <Typography variant='overline' style={style.details}>
            Props
          </Typography>
          <PropsTable of={DatePicker}/>
        </div>
    </div>
  )
}

storiesOf('Components / Input', module)
  .addDecorator(withKnobs)
  .addDecorator(withTests('DatePicker'))
  .add('Date Picker', () => <DatePickerStory
    required={boolean('Required', false)}
    keyboard={boolean('Keyboard', false)}
    showTodayButton={boolean('Show "today" button', false)}
    clearable={boolean('Clearable', false)}
    invalidDateMessage={text('Invalid message', 'Data invalida')}
    label={text('Label', 'Data')}
    cancelLabel={text('Cancel button label', 'Cancelar')}
    clearLabel={text('Clear button label', 'apagar')}
    okLabel={text('Confirm button label', 'Confirmar')}
    todayLabel={text('Today button label', 'Hoje')}
  />)
