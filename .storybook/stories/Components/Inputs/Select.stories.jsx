import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { 
  BioFinanceiraTheme, 
  Select, 
  MenuItem, 
  Button, 
  MuiThemeProvider,
  Typography
} from '../../../../src'
import withTests from '../../withTests'
import style from '../../style'
import { text, withKnobs } from '@storybook/addon-knobs';

const SelectStory = (props) => {
  const [value, handleValue] = useState()
  
  return(
    <div style={{
        ...style.section, 
        gridTemplateColumns: 'repeat(auto-fill,minmax(30rem, 1fr))'
      }}>
        <div style={{...style.sectionItemWrapper, placeSelf: 'center'}}>
          <div style={{...style.sectionItem, borderBottom: 'none' }}>
            <MuiThemeProvider theme={BioFinanceiraTheme}>
            <Select
                id='SelectId'
                label={props.label}
                value={value}
                onChange={() => handleValue(event.target.value)}
                minWidth={120}
                renderValue={value => `${props.renderValue}${value}`}>
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Dez</MenuItem>
                <MenuItem value={20}>Vinte</MenuItem>
                <MenuItem value={30}>Trinta</MenuItem>
              </Select>
            </MuiThemeProvider>
          </div>
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
          <Typography variant='overline' style={style.details}>
            Props
          </Typography>
          <Typography variant='caption'>
            id: Proptypes.string,
            <br/>
            showError: Proptypes.boolean,
            <br/>
            showLabel: Proptypes.boolean,
            <br/>
            required: Proptypes.boolean,
            <br/>
            errorMessage: Proptypes.string,
            <br/>
            error: Proptypes.boolean,
          </Typography>
        </div>
    </div>
  )
}

storiesOf('Components / Input', module)
  .addDecorator(withKnobs)
  .addDecorator(withTests('Select'))
  .add('Select', () => <SelectStory 
    label={text('Label', 'Campo Select')} 
    renderValue={text('Render Value', '⚠️  -')}
  />)
