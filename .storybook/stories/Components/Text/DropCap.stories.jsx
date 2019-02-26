import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { MuiThemeProvider, BioFinanceiraTheme, DropCap, Typography } from '../../../../src'
import withTests from '../../withTests'
import style from '../../style'

const DropCapStory = (props) => (
  <div style={{
      ...style.section, 
      gridTemplateColumns: 'repeat(auto-fill,minmax(30rem, 1fr))'
    }}>
      <div style={{...style.sectionItemWrapper, placeSelf: 'center'}}>
        <div style={{...style.sectionItem, borderBottom: 'none'}}>
          <MuiThemeProvider theme={BioFinanceiraTheme}>
            <DropCap dropCap={props.dropCap}>
              {props.text}
            </DropCap>
          </MuiThemeProvider>
        </div>
      </div>
      <div style={style.sectionDetails}>
        <Typography variant='body1'>
          &lt;
            <span style={style.tag}>DropCap </span>

            <span style={style.attr}>dropCap</span>=
            <span style={style.value}>'{props.dropCap}'</span>
          &gt;
          <br/>
          {props.text}
          <br/>
          &lt;/ <span style={style.tag}>DropCap </span> &gt;
        </Typography>
        <Typography variant='overline' style={style.details}>
          Props
        </Typography>
        <Typography variant='caption'>
          dropCap: PropTypes.string,
        </Typography>
      </div>
  </div>
)

storiesOf('Components / Text ', module)
  .addDecorator(withTests('DropCap'))
  .addDecorator(withKnobs)
  .add('Drop Cap', () => <DropCapStory dropCap={text('Drop Cap', '20%')} text={text('Texto', `do que 
  ganha`)} />)