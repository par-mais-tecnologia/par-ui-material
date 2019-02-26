import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, text, withKnobs } from '@storybook/addon-knobs'
import { 
  BioFinanceiraTheme, 
  NumberedTitle, 
  MuiThemeProvider, 
  Typography 
} from '../../../../src'
import style from '../../style'

const NumberedTitleStory = (props) => (
  <div style={{
      ...style.section, 
      gridTemplateColumns: 'repeat(auto-fill,minmax(30rem, 1fr))'
    }}>
      <div style={{...style.sectionItemWrapper, placeSelf: 'center'}}>
        <div style={{...style.sectionItem, borderBottom: 'none'}}>
          <MuiThemeProvider theme={BioFinanceiraTheme}>
            <NumberedTitle
              number={props.number}
              title={props.title}
              subtitle={props.subtitle}
            />
          </MuiThemeProvider>
        </div>
      </div>
      <div style={style.sectionDetails}>
        <Typography variant='body1'>
          &lt;
            <span style={style.tag}>NumberedTitle </span>

            <span style={style.attr}>number</span>=
            <span style={style.value}>&#123;{props.number}&#125; </span>

            <span style={style.attr}>title</span>=
            <span style={style.value}>'{props.title}'</span>
            <br />
            <span style={style.attr}>subtitle</span>=
            <span style={style.value}>'{props.subtitle}' </span>
          /&gt;
        </Typography>
        <Typography variant='overline' style={style.details}>
          Props
        </Typography>
        <Typography variant='caption'>
          title: PropTypes.string,
          <br/>
          subtitle: PropTypes.string,
          <br/>
          number: PropTypes.number
        </Typography>
      </div>
  </div>
)

storiesOf('Components / Text ', module)
  .addDecorator(withKnobs)
  .add('NumberedTitle', () => <NumberedTitleStory 
    number={number('Number', 2)}
    title={text('Title', 'Suas')}
    subtitle={text('Subtitle', 'finanças')}/>)