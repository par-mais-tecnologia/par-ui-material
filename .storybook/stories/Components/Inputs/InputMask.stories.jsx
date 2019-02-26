import { storiesOf } from '@storybook/react'
import { 
  BioFinanceiraTheme, 
  InputMask, 
  MaskedInput, 
  MuiThemeProvider,
  Typography
} from '../../../../src'

import React, { useState } from 'react'
import { text, boolean, withKnobs } from '@storybook/addon-knobs';
import style from '../../style'

const PhoneMask = (props) => <MaskedInput
  mask={[/[1-9]/, /\d/, /\d/,]}
  {...props}
/>

const MaskStory = (props) => {
  const [value, handleValue] = useState()
  
  return(
    <div style={{
        ...style.section, 
        gridTemplateColumns: 'repeat(auto-fill,minmax(30rem, 1fr))'
      }}>
      <div style={{...style.sectionItemWrapper, placeSelf: 'center'}}>
        <div style={{...style.sectionItem, borderBottom: 'none' }}>
          <MuiThemeProvider theme={BioFinanceiraTheme}>
            <InputMask
              id='input'
              label='Number'
              typeMask={props.typeMask}
              value={value}
              showEndAdornment={props.showEndAdornment}
              onChange={() => handleValue(event.target.value)}
              inputComponent={PhoneMask}
              helperText='Type only number'
              showHelper={props.showHelper}
            />
          </MuiThemeProvider>
        </div>
      </div>
      <div style={style.sectionDetails}>
        <Typography variant='body1'>
          &lt;
            <span style={style.tag}>InputMask  </span>
            {
              Object.keys(props).map( key => (
                <React.Fragment key={key}>
                  <span style={style.attr}>{key}</span>=
                  <span style={style.value}>'{`${props[key]}`}' </span>
                </React.Fragment>
              ))
            }
            <br/>
            <span style={style.attr}>inputComponent</span>=
            <span style={style.value}>&#123;&lt;MaskedInput mask=&#123;...&#125;
             &#123;...props&#125; />&#125; </span>
          /&gt;
        </Typography>
        <Typography variant='title'>
          How to use?
        </Typography>
        <Typography variant='subtitle1'>
          We have available two adorments, <span style={style.tag}>people and years</span>,
           to use them you must add their names inside <span style={style.tag}>typeMask</span> prop.
          You can also include a mask on the input by passing the <span style={style.value}>MaskedInput </span>
          component inside <span style={style.value}>inputComponent</span> prop, if you would like to pass some
           custom props to the <span style={style.value}>MaskedInput</span> component just make sure to instantiate it
           outside the <span style={style.attr}>render function</span>, althought you will be re-rendering the component
           everytime you type inside it.
        </Typography>
      </div>
    </div>
  )
}

storiesOf('Components / Input', module)
  .addDecorator(withKnobs)
  .add('InputMask', () => <MaskStory
    typeMask={text('Type of mask', 'people')}
    showEndAdornment={boolean('Show end adorment', false)}
    showHelper={boolean('Show helper', false)}
  />)
