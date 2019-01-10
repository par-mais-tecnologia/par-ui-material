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
            objectiveType={'EmergencyReserve'}
            value={8450.045}
          />
          <ObjectiveCard
            objectiveType={'DreamsAndGoals'}
            value={8450.045}
          />
          <ObjectiveCard
            objectiveType={'LivingInCome'}
            value={8450.045}
          />
          <ObjectiveCard
            objectiveType={'UnderMeasure'}
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