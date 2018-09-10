import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';

import StepperParMais from '../Stepper';
import withTests from './withTests';

class StepperStories extends PureComponent {
  steps = [
    'Conhecendo você',
    'Seu perfil psicológico',
    'Seu momento de vida',
    'Suas finanças e patrimônio',
    'Sua experiência em investimentos'
  ]

  render() {
    return (
      <StepperParMais
        steps={this.steps}
        activeStep={3}
        orientation={this.props.orientation}
      />
    )
  }
}

const MobileStepper = ({children}) => (
  <div style={{width: '290px'}}>
    { children }
  </div>
)

storiesOf('Stepper', module)
  .addDecorator(withTests('stepper'))
  .add('shallow', () => {
    return (<StepperStories orientation='vertical'/>)
  })
  .add('horizontal', () => {
    return (<StepperStories orientation='horizontal'/>)
  })
  .add('vertical', () => {
    return (<StepperStories orientation='vertical'/>)
  })
  .add('mobile', () => {
    return (
      <MobileStepper>
        <StepperStories orientation='horizontal'/>
      </MobileStepper>
    )
  })
