import { storiesOf } from '@storybook/react'
import React, { PureComponent } from 'react'
import withTests from './withTests'
import { ObjectiveCard, MuiThemeProvider, SeeTheme } from '../../src'

class ObjectiveCardStory extends PureComponent {

  render () {
    return (
      <MuiThemeProvider theme={SeeTheme}>
        <div className={'flex-column flex'}>
          <ObjectiveCard
            objectiveType={'SECURITY_RESERVE'}
            value={8450.045}
          />
          <ObjectiveCard
            objectiveType={'TIMED_OBJECTIVE'}
            value={8450.045}
          />
          <ObjectiveCard
            objectiveType={'FINANCIAL_INDEPENDENCE'}
            value={8450.045}
          />
          <ObjectiveCard
            objectiveType={'IMPROVE_PROFITABILITY'}
            value={8450.045}
          />
          <ObjectiveCard
            title={'CARD DE SEGURANÇA'}
            objectiveType={'SECURITY_RESERVE'}
            value={8450.045}
          />
        </div>
      </MuiThemeProvider>
    )
  }
}

storiesOf('ObjectiveCard', module)
  .addDecorator(withTests('ObjectiveCard'))
  .add('Objective Card', () => {
    return <ObjectiveCardStory/>
  })