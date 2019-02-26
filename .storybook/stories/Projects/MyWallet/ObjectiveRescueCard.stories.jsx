import { storiesOf } from '@storybook/react'
import React, { PureComponent } from 'react'
import withTests from '../../withTests'
import { ObjectiveRescueCard, MuiThemeProvider, SeeTheme, Button } from '../../../../src'
import { decorateAction } from '@storybook/addon-actions'
import * as validation from '../../../../src/Core/validation'

const validator = new validation.Validator()

class ObjectiveRescueCardStory extends PureComponent {

  state = {
    reasonValue : '',
    amountRequestValue: 0,
    requestAll: false,
    totalValue: 8450.045
  }

  handleSelectChange = decorateAction([args => {
    this.setState({reasonValue: args[0].target.value})
    return args
  }])

  handleTextChange = decorateAction([args => {
    this.setState({amountRequestValue: args[0].target.value})
    return args
  }])

  handleSwitchChange = decorateAction([args => {
    this.setState({requestAll: args[0].target.checked, amountRequestValue: this.state.totalValue})
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

    const { reasonValue, amountRequestValue, totalValue, requestAll } = this.state;

    return (
      <MuiThemeProvider theme={SeeTheme}>

        <div className='mv4 w-100 justify-center flex'
             style={{ margin: '0 auto', marginTop: '2rem', marginBottom: '2rem' }}
             onClick={() => console.log('Click')}>
          <ObjectiveRescueCard
            validator={validator}
            amountRequest = { amountRequestValue }
            onChangeText={this.handleTextChange('alterado valor de texto')}
            reasonValue = { reasonValue }
            onChangeSelect={this.handleSelectChange('valor selecionado')}
            requestAll = { requestAll }
            onChangeSwitch={this.handleSwitchChange('switch selecionado')}
            objectiveType={'SECURITY_RESERVE'}
            value={totalValue}
            numberOfDays={15}
            requested={true}
            isConfirmRequest={false}
            userData={
              {bank:'Banco do Brasil',
                holder:'João da Silveira',
                cpf: '00000000000',
                agency: '000000-5',
                currentAccount: '000000-5'}}
            dateExpected={ '08/06/2018' }
            paperClasses={'justify-center'}
          />
        </div>

        <Button onClick={() => this.testForm()} variant='contained'>
          Confirmar resgate
        </Button>

      </MuiThemeProvider>
    )
  }
}

storiesOf('Projects / My Wallet ', module)
  .addDecorator(withTests('ObjectiveRescueCard'))
  .add('ObjectiveRescue Card', () => {
    return <ObjectiveRescueCardStory/>
  })