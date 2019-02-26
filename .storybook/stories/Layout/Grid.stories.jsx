
import React from 'react'
import { storiesOf } from '@storybook/react'
import { 
  MuiThemeProvider, 
  SeeTheme, 
  Typography, 
  Grid, 
  Paper
} from '../../../src'
import withTests from '../withTests'
import style from '../style'
import { number, withKnobs, text } from '@storybook/addon-knobs';
import { Object } from 'es6-shim';

const GridStory = (props) => (
  <MuiThemeProvider theme={SeeTheme}>
    <div style={{...style.section,  gridTemplateColumns: 'repeat(auto-fill)', padding: '2rem'}}>
      <div style={style.sectionItemWrapper}>
        <Typography variant='title'>
          How to use?
        </Typography>
        <Typography variant='body2'>
          To use it you just need to wrap the content with the component and you can also style 
          it with the properties that are provided.
          <br/>
          The <span style={style.attr}>spacing</span> can be changed by the following values: 
          <span style={style.value}>0, 8, 16, 24, 32, 40</span>.
          <br/>
          The <span style={style.attr}>direction</span> can be changed by the following values: 
          <span style={style.value}>row, row-reverse, column, column-reverse</span>.
          <br/>
          The <span style={style.attr}>justify</span> can be changed by the following values: 
          <span style={style.value}>flex-start, center, flex-end, space-between, space-around, space-evenly</span>.
          <br/>
          The <span style={style.attr}>alignItems</span> can be changed by the following values: 
          <span style={style.value}>flex-start, center, flex-end, stretch, baseline</span>.
        </Typography>
        <div style={style.sectionItem}>
          <div style={{...style.sectionContent, background: 'white', width: '100%'}}>
            <Grid container justify="center" spacing={props.spacing}>
              {[0, 1, 2].map(value => (
                <Grid key={value} item>
                  <Paper style={ {height: 140, width:100}}/>
                </Grid>
              ))}
            </Grid>
          </div>
          <Typography variant='body1'>
            &lt;<span style={style.tag}>Grid </span>
            {
              Object.keys(props).map( key => (
                <React.Fragment key={key}>
                  <span style={style.attr}>{key}</span>=
                  <span style={style.value}>'{`${props[key]}`}' </span>
                </React.Fragment>
              ))
            }&gt;...
            &lt;/<span style={style.tag}>Grid</span>&gt;
          </Typography>
        </div>
        <div>
          <Typography variant='overline' style={style.details}>
            Props
          </Typography>
          <Typography variant='caption'>
            {
              Object.keys(props).map( key => (
                <React.Fragment key={key}>
                  {key}: Proptype.{ typeof props[key] } <br/>
                </React.Fragment>
              ))
            }
          </Typography>
        </div>
      </div>
    </div>
  </MuiThemeProvider>
)

storiesOf('Layout ', module)
  .addDecorator(withTests('baseFooter'))
  .addDecorator(withKnobs)
  .add('Grid', () => <GridStory 
    spacing={number('Spacing', 24)} 
    justify={text('Justify', 'center')}
    alignItems={text('Align Items', 'center')}
    direction={text('Direction', 'row')}
  />)
