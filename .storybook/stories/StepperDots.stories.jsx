import React from 'react'
import { storiesOf } from '@storybook/react'
import { StepperDots, MuiThemeProvider, BioFinanceiraTheme } from '../../src'
import withTests from './withTests'

class StepperDotsStories extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      activeStep: 0
    }
    this.handleNext = this.handleNext.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }))
  }

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }))
  }

  render() {
    return (
      <MuiThemeProvider theme={BioFinanceiraTheme}>
        <StepperDots
          steps={3}
          activeStep={this.state.activeStep}
          handleNext={this.handleNext}
          handleBack={this.handleBack}
          position='bottom'
        />
      </MuiThemeProvider>
    )
  }
}

storiesOf('Stepper Dots', module)
  .addDecorator(withTests('StepperDots'))
  .add('shallow', ()=> {
    return (
      <StepperDots
        steps={3}
        activeStep={0}
        handleNext={()=>{}}
        handleBack={()=>{}}
        position='bottom'
      />
    )
  })
  .add('FinBio StepperDots', ()=>{
    return (
      <StepperDotsStories />
    )
  })
