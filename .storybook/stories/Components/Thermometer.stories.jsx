import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { MuiThemeProvider, BioFinanceiraTheme, Thermometer, Typography } from '../../../src'
import withTests from '../withTests'
import style from '../style'

const ThermometerStory = () => (
  <div style={{
      ...style.section, 
      gridTemplateColumns: 'repeat(auto-fill,minmax(30rem, 1fr))'
    }}>
      <div style={{...style.sectionItemWrapper, placeSelf: 'center'}}>
        <div style={{...style.sectionItem, borderBottom: 'none'}}>
          <MuiThemeProvider theme={BioFinanceiraTheme}>
            <Thermometer bioColor={text('Cor da BIO ["azul","verde","amarela","laranja","vermelha",]', `laranja`)} />
          </MuiThemeProvider>
        </div>
      </div>
      <div style={style.sectionDetails}>
        <Typography variant='body1'>
          <div>
              &lt;
                  <span style={style.tag}>Thermometer </span>

                  <span style={style.attr}>bioColor</span>=
                  <span style={style.value}>'laranja' </span>
              /&gt;
          </div>
        </Typography>
        <Typography variant='title'>
          How to use?
        </Typography>
        <Typography variant='subtitle1'>
          This component is part of the <span style={style.value}>BioFinanceiraTheme</span> theme,
          to implement it you must import <span style={style.tag}>MuiThemeProvider </span>
          and the respective theme file on your work file and then add the tag as following:
        </Typography>
        <Typography variant='body1'>
          &lt;
            <span style={style.tag}>MuiThemeProvider </span>
            <span style={style.attr}>theme</span>=
            <span style={style.value}>'BioFinanceiraTheme'</span>
          &gt;...
        </Typography>
        <Typography variant='subtitle1'>
          Also, to interact with the component you must change the <span style={style.value}>bioColor</span> prop
          between the following values: <span style={style.tag}>'azul', 'verde', 'amarela', 'laranja', 'vermelha'</span>
        </Typography>
        <Typography variant='overline' style={style.details}>
          Props
        </Typography>
        <Typography variant='caption'>
          bioColor:  PropTypes.string
        </Typography>
      </div>
  </div>
)

storiesOf('Components ', module)
  .addDecorator(withTests('Thermometer'))
  .addDecorator(withKnobs)
  .add('Thermometer', () => <ThermometerStory/>)