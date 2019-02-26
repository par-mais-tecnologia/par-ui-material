import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { 
  Typography, 
  TextField, 
  Button, 
  MuiThemeProvider, 
  BioFinanceiraTheme 
} from '../../../../src'
import * as validation from '../../../../src/Core/validation'
import style from '../../style'

const validator = new validation.Validator()

const FormValidationStory = (props) => {
  const [value, handleValue] = useState()
  
  return(
    <div style={{
        ...style.section, 
        gridTemplateColumns: 'repeat(auto-fill,minmax(30rem, 1fr))'
      }}>
      <div style={{...style.sectionItemWrapper, placeSelf: 'center'}}>
        <div style={{...style.sectionItem, borderBottom: 'none' }}>
          <MuiThemeProvider theme={BioFinanceiraTheme}>
            <TextField
              required={props.required}
              validator={{validator, type: validation.types.required}}
              label='Testing validation'
              onChange={ (event) => handleValue(event.target.value)}
              value={value}
            />
          </MuiThemeProvider>
        </div>
        <Button onClick={validator.validate} variant='outlined'>
          Validate
        </Button>
      </div>
      <div style={style.sectionDetails}>
        <Typography variant='body1'>
          const <span style={style.attr}>validator</span> = new <span style={style.value}>validation.Validator</span>()
        </Typography>
        <Typography variant='body1'>
          &lt;
            <span style={style.tag}>TextField  </span>
            {
              Object.keys(props).map( key => (
                <React.Fragment key={key}>
                  <span style={style.attr}>{key}</span>=
                  <span style={style.value}>'{`${props[key]}`}' </span>
                </React.Fragment>
              ))
            }
            <br />
            <span style={style.attr}>validator</span>=
            <span style={style.value}>
              &#123;&#123;
              validator, type: validation.types.required
              &#125;&#125; 
            </span>
          /&gt;
        </Typography>
        <Typography variant='title'>
          How to use?
        </Typography>
        <Typography variant='subtitle1'>
          To use the <span style={style.tag}>validation functionality</span> you
          must import <span style={style.tag}>validation and instantiate it </span>
          and apply it to the <span style={style.tag}>validator input prop </span>
          as is showed above. It will check all inputs, that is required, are filled.
          To run the functionality you must call the <span style={style.value}>
           validate function</span>.
        </Typography>
      </div>
    </div>
  )
}

storiesOf('Components / Input', module)
  .addDecorator(withKnobs)
  .add('Form validation', () => <FormValidationStory
    required={boolean('Required', false)}
  /> )
