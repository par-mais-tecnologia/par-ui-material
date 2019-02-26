import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { 
  Toggle, 
  Typography, 
  MuiThemeProvider, 
  BioFinanceiraTheme 
} from '../../../../src'
import withTests from '../../withTests'
import style from '../../style'
import { text, withKnobs } from '@storybook/addon-knobs';

const ToggleStory= (props) => {
  const [value, handleValue] = useState(false)
  
  return(
    <div style={{
        ...style.section, 
        gridTemplateColumns: 'repeat(auto-fill,minmax(30rem, 1fr))'
      }}>
        <div style={{...style.sectionItemWrapper, placeSelf: 'center'}}>
          <div style={{...style.sectionItem, borderBottom: 'none' }}>
            <MuiThemeProvider theme={BioFinanceiraTheme}>
              <Toggle
                id='ToggleId'
                checked={value}
                label={props.label}
                value='CheckToogle'
                onChange={() => handleValue(!value)}
              />
            </MuiThemeProvider>
          </div>
        </div>
        <div style={style.sectionDetails}>
          <Typography variant='body1'>
            &lt;
              <span style={style.tag}>Toggle  </span>
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
            label: Proptypes.string
          </Typography>
        </div>
    </div>
  )
}

storiesOf('Components / Input', module)
  .addDecorator(withKnobs)
  .addDecorator(withTests('Toggle'))
  .add('Toggle', () => {
    return <ToggleStory label={text('Label', 'Toggle field')}/>
  })
