import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { boolean, withKnobs, text } from '@storybook/addon-knobs'
import withTests from '../../withTests'
import { 
  BioFinanceiraTheme, 
  TextField, 
  Button, 
  MuiThemeProvider, 
  Typography
} from '../../../../src'
import * as validation from '../../../../src/Core/validation'
import style from '../../style'

const validator = new validation.Validator()

const InputStory = (props) => {
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
                label={props.label}
                onChange={(event) => handleValue(event.target.value)}
                value={value}
                name='Input'
                type={props.type}
                showHelper={props.showHelper}
                helperText={props.helperText}
              />
            </MuiThemeProvider>
          </div>
          <Button onClick={validator.validate} variant='outlined'>
            Validate
          </Button>
        </div>
        <div style={style.sectionDetails}>
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
            /&gt;
          </Typography>
          <Typography variant='title'>
            How to use?
          </Typography>
          <Typography variant='subtitle1'>
            You can change the type of the component by sending the following values
            to the <span style={style.value}>type</span> prop: <span style={style.tag}>
            'password', 'email',''</span>.
          </Typography>
          <Typography variant='overline' style={style.details}>
            Props
          </Typography>
          <Typography variant='caption'>
            required: Proptypes.boolean,
            <br/>
            validator: Proptypes.object,
            <br/>
            label: Proptypes.string,
            <br/>
            showHelper: Proptypes.boolean,
            <br/>
            spellCheck: Proptypes.boolean,
          </Typography>
        </div>
    </div>
  )
}

storiesOf('Components / Input', module)
  .addDecorator(withKnobs)
  .addDecorator(withTests('TextField'))
  .add('Input', () => <InputStory
    required={boolean('Required', false)}
    showHelper={boolean('Show helper text', false)}
    label={text('Label', 'Input')}
    type={text('Type', '')}
    helperText={text('Helper text', 'Hey you!')}
  />)
