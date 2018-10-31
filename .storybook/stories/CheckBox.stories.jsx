import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { decorateAction } from '@storybook/addon-actions'
import { BioFinanceiraTheme, CheckBox, MuiThemeProvider } from '../../src'
import withTests from './withTests'

class CheckBoxStory extends PureComponent {
  state = {
    checkedA: false,
    checkedB: false
  }

  handleCheckedChangeA = decorateAction([args => {
    this.setState({checkedA: args[1]})
    return args
  }])

  handleCheckedChangeB = decorateAction([args => {
    this.setState({checkedB: args[1]})
    return args
  }])

  render () {
    const {checkedA, checkedB} = this.state

    return (
      <div className='pl3'>
        <CheckBox
          checked={checkedA}
          onChange={this.handleCheckedChangeA('marquei a caixa')}
          value='checked'
        />
        <h5> CheckBox with theme</h5>
        <MuiThemeProvider theme={BioFinanceiraTheme}>
          <CheckBox
            checked={checkedB}
            onChange={this.handleCheckedChangeB('marquei a caixa do check box theme')}
            value='checked'
            color='primary'
          />
        </MuiThemeProvider>
      </div>
    )
  }
}

storiesOf('Input', module)
  .addDecorator(withTests('CheckBox'))
  .add('CheckBox', () => {
    return <CheckBoxStory/>
  })
