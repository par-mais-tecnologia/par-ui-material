import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { number, withKnobs } from '@storybook/addon-knobs'
import { MuiThemeProvider, BioFinanceiraTheme, YourFinance, NumberedTitle } from '../../../../src'
import withTests from '../../withTests'

class YourFinanceStory extends PureComponent {
  render() {
    const { children } = this.props
    return(
      <div className="pa3 w-100">
        <MuiThemeProvider theme={BioFinanceiraTheme}>
          <div>
            {children}
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

storiesOf('Projects / Bio ', module)
  .addDecorator(withTests('YourFinances'))
  .addDecorator(withKnobs)
  .add('YourFinances', () => {
    return (
      <YourFinanceStory>
        <YourFinance
          incomes={number('Rendas', 800)}
          expenses={number('Despesas', 550)}
        />
      </YourFinanceStory>
    )
  })