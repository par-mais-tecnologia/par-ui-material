import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, array } from '@storybook/addon-knobs'
import {
  GoalSummary, 
  SeeTheme, 
  MuiThemeProvider,
  Typography
} from '../../../src'
import PropsTable from '../../utils/PropsTable'
import style from '../style'

const GoalSummaryStory = () => (
  <div style={{...style.section, gridTemplateColumns: 'repeat(auto-fill)', padding: '2rem'}}>
    <div style={style.sectionItemWrapper}>
      <div>
        <Typography variant='title'>
          How to use?
        </Typography>
        <Typography variant='body2'>
          The style of <span style={style.tag}>GoalSummary </span> is part of 
          <span style={style.tag}>SeeTheme </span> theme, to use it you must import the files
          into your project.
          This component accept a prop <span style={style.attr}>data</span>, which is an array of objects
          that contains the following keys: <span style={style.value}>title, value and type</span>, and accepts
          as many keys as possible, dividing the render space equally for each object.
        </Typography>
      </div>
      <div style={style.sectionItem}>
        <div style={{ ...style.sectionContent, display: 'flex', justifyContent: 'center' }}>
          <GoalSummary
            data={array('data', [
              { title: 'Aportar mensalmente', value: 10000, type: 'currency' },
              { title: 'Para ter', value: 300000, type: 'currency' },
              { title: 'Em', value: '2 anos e 3 meses' }
            ])}
          />
        </div>
        <Typography variant='body1'>
            &lt;
                <span style={style.tag}>GoalSummary </span>
                <span style={style.attr}>data</span>=
                <span style={style.value}>
                [
                  &#123; 
                    title: 'Aportar mensalmente', 
                    value: 10000, 
                    type: 'currency'
                  &#125;,
                  &#123; 
                    title: 'Para ter', 
                    value: 300000, 
                    type: 'currency'
                  &#125;,
                  &#123; 
                    title: 'Em', 
                    value: '2 anos e 3 meses'
                  &#125;
                ]
                </span>
            /&gt;
        </Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant='overline' style={{ ...style.details, marginTop: 10 }}>
          Props
        </Typography>
        <PropsTable of={GoalSummary} />
      </div>
    </div>
  </div>
)

storiesOf('Components ', module)
  .addDecorator(withKnobs)
  .add('GoalSummary', () => (
    <MuiThemeProvider theme={SeeTheme}>
      <GoalSummaryStory/>
    </MuiThemeProvider>
  ))