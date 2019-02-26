import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { 
  BioFinanceiraTheme, 
  Slider, 
  MuiThemeProvider,
  Typography
} from '../../../../src'
import { number, withKnobs } from '@storybook/addon-knobs';
import style from '../../style'

const SliderStory = (props) => {
  const [value, handleChange] = useState(0)
  return(
    <div style={{
        ...style.section, 
        gridTemplateColumns: 'repeat(auto-fill,minmax(30rem, 1fr))'
      }}>
        <div style={{...style.sectionItemWrapper, placeSelf: 'center'}}>
          <div style={{...style.sectionItem, borderBottom: 'none'}}>
            <MuiThemeProvider theme={BioFinanceiraTheme}>
              <div style={{width: '250px'}}>
                <Slider
                  max={props.max}
                  value={value}
                  onChange={() => handleChange(event.target.value)}
                />
              </div>
            </MuiThemeProvider>
          </div>
        </div>
        <div style={style.sectionDetails}>
          <Typography variant='body1'>
            &lt;
              <span style={style.tag}>Stepper </span>
              {
                Object.keys(props).map( key => (
                  <React.Fragment key={key}>
                    <span style={style.attr}>{key}</span>=
                    <span style={style.value}>'{`${props[key]}`}' </span>
                  </React.Fragment>
                ))
              }
            /&gt;
          </Typography>
          <Typography variant='overline' style={style.details}>
            Props
          </Typography>
          <Typography variant='caption'>
            max: PropTypes.number.isRequired,
            <br/>
            onChange: PropTypes.func.isRequired,
            <br/>
            value: PropTypes.number.isRequired
          </Typography>
        </div>
    </div>
  )
}

storiesOf('Components / Input', module)
  .addDecorator(withKnobs)
  .add('Slider', () => <SliderStory 
      max={number('Max value', 5)}
  />)