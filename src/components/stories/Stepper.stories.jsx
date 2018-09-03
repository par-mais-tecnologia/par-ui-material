import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import { specs } from 'storybook-addon-specifications'

import StepperParMais from '../Stepper';
import { testShallow , testHorizontal, testVertical } from '../Stepper/stepper.test'

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
  .add('shallow', () => {
    specs(() => testShallow);
    return (<StepperStories orientation='vertical'/>)
  })
  .add('horizontal', () => {
    specs(() => testHorizontal)
    return (<StepperStories orientation='horizontal'/>)
  })
  .add('vertical', () => {
    specs(()=> testVertical)
    return (<StepperStories orientation='vertical'/>)
  })
  .add('mobile', () => {
    specs(()=> testHorizontal)
    return (
      <MobileStepper>
        <StepperStories orientation='horizontal'/>
      </MobileStepper>
    )
  })
