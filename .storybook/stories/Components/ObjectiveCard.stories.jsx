import { storiesOf } from '@storybook/react'
import React from 'react'
import withTests from '../withTests'
import { 
  ObjectiveCard, 
  MuiThemeProvider, 
  SeeTheme,
  Typography
} from '../../../src'
import PropsTable from '../../utils/PropsTable'
import style from '../style'

const variants = [
  {
    title: 'RESERVA DE EMERGÊNCIA',
    subTitle: 'Valor total',
    value: '27549'
  },
  {
    title: 'VIVER DE RENDA',
    subTitle: 'Valor total',
    value: '215384'
  },
  {
    title: 'MEU OBJETIVO',
    subTitle: 'Valor total',
    value: '21547'
  }
]

const ObjectiveCardStory = () => (
  <div style={{ ...style.section, gridTemplateColumns: 'auto' }}>
    {
      variants.map((variant, i) => (
        <div key={i} style={{...style.sectionItemWrapper, placeSelf: 'center'}}>
          <div style={style.sectionItem}>
            <div style={style.content}>
              <MuiThemeProvider theme={SeeTheme}>
                <ObjectiveCard
                  title={variant.title.toUpperCase()}
                  subTitlte={variant.subTitle}
                  value={variant.value}
                  style={{ width: 350, height: 150 }}
                />
              </MuiThemeProvider>
            </div>
            <div style={{ padding: '0 32px' }}>
              <Typography variant='body1'>
                &lt;
                  <span style={style.tag}>ObjectiveCard </span>
                  <span style={style.attr}>title</span>=
                  <span style={style.value}>'{variant.title}' </span>

                  <span style={style.attr}>subTitlte</span>=
                  <span style={style.value}>'{variant.subTitle}' </span>

                  <span style={style.attr}>value</span>=
                  <span style={style.value}>{variant.value} </span>

                  <span style={style.attr}>style</span>=
                  <span style={style.value}>&#123;&#123; width: 350, height: 150 &#125;&#125;</span>
                &gt;
              </Typography>
            </div>
          </div>
        </div>
      ))
    }
    <div style={style.sectionItemWrapper}>
      <div style={style.sectionDetails}>
        <Typography variant='title'>
          How to use?
        </Typography>
        <Typography variant='subtitle1'>
          This component is part of the <span style={style.value}>SeeTheme</span> theme,
          to implement it you must import <span style={style.tag}>MuiThemeProvider </span>
          and the respective theme file on your work file and then add the tag as following:
        </Typography>
        <Typography variant='body1'>
          &lt;
            <span style={style.tag}>MuiThemeProvider </span>
            <span style={style.attr}>theme</span>=
            <span style={style.value}>'SeeTheme'</span>
          &gt;...
        </Typography>
        <Typography variant='subtitle1'>
          You have access to the following props: <span style={style.tag}>
          title, subTitle, value, titleProps</span>.
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant='overline' style={{ ...style.details, marginTop: 10 }}>
            Props
          </Typography>
          <PropsTable of={ObjectiveCard} />
        </div>
      </div>
    </div>
  </div>
)

storiesOf('Components ', module)
  .addDecorator(withTests('ObjectiveCard'))
  .add('Objective Card', () => <ObjectiveCardStory/>)