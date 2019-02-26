import React from 'react'
import { storiesOf } from '@storybook/react'
import { Stepper, Typography } from '../../../../src'
import { text, number, withKnobs } from '@storybook/addon-knobs'
import withTests from '../../withTests'
import style from '../../style'

const StepperStory = (props) => (
  <div style={{
      ...style.section, 
      gridTemplateColumns: 'repeat(auto-fill,minmax(30rem, 1fr))'
    }}>
      <div style={{...style.sectionItemWrapper, placeSelf: 'center'}}>
        <div style={{...style.sectionItem, borderBottom: 'none'}}>
            <Stepper
              steps={[
                'Conhecendo você',
                'Seu perfil psicológico',
                'Seu momento de vida',
                'Suas finanças e patrimônio',
                'Sua experiência em investimentos'
              ]}
              activeStep={props.active}
              orientation={props.orientation}
            />
        </div>
      </div>
      <div style={style.sectionDetails}>
        <Typography variant='body1'>
          <div>
              &lt;
                  <span style={style.tag}>Stepper </span>
                  <br/>
                  <span style={style.attr}>steps</span>=
                  <span style={style.value}>
                    &#123;[
                      'Conhecendo você',
                      'Seu perfil psicológico',
                      'Seu momento de vida',
                      'Suas finanças e patrimônio',
                      'Sua experiência em investimentos'
                    ] &#125;
                  </span>
                  <br />
                  <span style={style.attr}>activeStep</span>=
                  <span style={style.value}>&#123;{`${props.active}`}&#125;</span>
                  <br />
                  <span style={style.attr}>orientation</span>=
                  <span style={style.value}>&#123;{`${props.orientation}`}&#125;</span>
              /&gt;
          </div>
        </Typography>
        <Typography variant='title'>
          How to use?
        </Typography>
        <Typography variant='subtitle1'>
          You can change the orientation of the component by sending the following values
          to the <span style={style.value}>orientation</span> prop: <span style={style.tag}>
          'horizontal', 'vertical'</span>.
        </Typography>
        <Typography variant='overline' style={style.details}>
          Props
        </Typography>
        <Typography variant='caption'>
          steps: PropTypes.array,
          <br/>
          activeStep: PropTypes.number,
          <br/>
          orientation: PropTypes.string
        </Typography>
      </div>
  </div>
)

storiesOf('Components / Steppers ', module)
  .addDecorator(withTests('Stepper'))
  .addDecorator(withKnobs)
  .add('Stepper', () => <StepperStory orientation={text('Orientation', 'horizontal')} active={number('Step active', 4) - 1}/> )