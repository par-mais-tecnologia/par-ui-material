import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { MuiThemeProvider, BioFinanceiraTheme, LineCirclesBox, Typography } from '../../../../src'
import withTests from '../../withTests'
import style from '../../style'

const LineCirclesBoxStory = (props) => (
  <div style={{
      ...style.section, 
      gridTemplateColumns: 'repeat(auto-fill,minmax(30rem, 1fr))'
    }}>
      <div style={{...style.sectionItemWrapper, placeSelf: 'center'}}>
        <div style={{...style.sectionItem, borderBottom: 'none'}}>
          <MuiThemeProvider theme={BioFinanceiraTheme}>
            <LineCirclesBox lineColor={props.color}>
              {props.text}            
            </LineCirclesBox>
          </MuiThemeProvider>
        </div>
      </div>
      <div style={style.sectionDetails}>
        <Typography variant='body1'>
          &lt;
            <span style={style.tag}>LineCirclesBox  </span>

            <span style={style.attr}>lineColor </span>=
            <span style={style.value}>'{props.color }'</span>
          &gt;
          <br/>
          {props.text}
          <br/>
          &lt;/ <span style={style.tag}>LineCirclesBox</span> &gt;
        </Typography>
        <Typography variant='overline' style={style.details}>
          Props
        </Typography>
        <Typography variant='caption'>
          lineColor: PropTypes.string,
        </Typography>
      </div>
  </div>
)

storiesOf('Components / Text ', module)
  .addDecorator(withTests('LineCirclesBox'))
  .addDecorator(withKnobs)
  .add('LineCirclesBox', () => <LineCirclesBoxStory color={text('lineColor', '#26a69a')} text={text('Text content', 'Lorem ipsum dolor sit amet')} />)