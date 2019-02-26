import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { StepperDots, MuiThemeProvider, BioFinanceiraTheme, SeeTheme, Typography } from '../../../../src'
import { number, withKnobs } from '@storybook/addon-knobs'
import withTests from '../../withTests'
import style from '../../style'

const themes = ['', SeeTheme, BioFinanceiraTheme]

const StepperDotsStory = (props) => {
  const [step, moveStep] = useState(0)

  return  (
    <div style={style.section}>
      {
        themes.map(theme => (
          <div style={{...style.sectionItemWrapper, placeSelf: 'center'}}>
            <div style={style.sectionItem}>
                <MuiThemeProvider theme={theme}>
                  <div style={{...style.content, position: 'relative'}}>
                  <StepperDots
                    steps={props.stepQuantity}
                    activeStep={step}
                    handleNext={() => moveStep(step + 1)}
                    handleBack={() => moveStep(step - 1)}
                    position='static'
                  />
              </div>
                </MuiThemeProvider>
                <Typography variant='body1'>
                  &lt;
                    <span style={style.tag}>StepperDots </span>
                    <span style={style.attr}>steps</span>=
                    <span style={style.value}>&#123;{props.stepQuantity}&#125;</span>

                    <span style={style.attr}> activeStep</span>=
                    <span style={style.value}>&#123;{step}&#125;</span>
                    <br/>
                    <span style={style.attr}> handleNext</span>=
                    <span style={style.value}>&#123;() => moveStep(step + 1)&#125;</span>
                    <br/>
                    <span style={style.attr}> handleBack</span>=
                    <span style={style.value}>&#123;() => moveStep(step - 1)&#125;</span>
                  /&gt;
                </Typography>
            </div>
          </div>
        ))
      }
      <div style={style.sectionItemWrapper}>
        <div style={style.sectionDetails}>
          <Typography variant='title'>
            How to use?
          </Typography>
          <Typography variant='subtitle1'>
            You can config the position of this component by the <span style={style.value}>position</span> prop,
            whitch by default is set as <span style={style.attr}>'bottom'</span>, you can choose between the following values: 
            <span style={style.tag}> 'bottom' | 'top' | 'static'</span>.
          </Typography>
          <Typography variant='overline' style={style.details}>
            Props
          </Typography>
          <Typography variant='caption'>
            steps: PropTypes.number.isRequired,
            <br/>
            activeStep: PropTypes.number.isRequired,
            <br/>
            handleNext: PropTypes.func.isRequired,
            <br/>
            handleBack: PropTypes.func.isRequired,
            <br/>
            position: PropTypes.string.isRequired
            <br/>
          </Typography>
        </div>
      </div>
    </div>
  )
}


storiesOf('Components / Steppers ', module)
  .addDecorator(withKnobs)
  .addDecorator(withTests('StepperDots'))
  .add('Dots', ()=> <StepperDotsStory stepQuantity={number('Step active', 3)}/>)
