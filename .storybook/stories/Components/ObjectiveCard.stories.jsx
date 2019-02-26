import { storiesOf } from '@storybook/react'
import React from 'react'
import withTests from '../withTests'
import { 
  ObjectiveCard, 
  MuiThemeProvider, 
  SeeTheme,
  Typography
} from '../../../src'
import style from '../style'

const variants = ['SECURITY_RESERVE', 'TIMED_OBJECTIVE', 'FINANCIAL_INDEPENDENCE', 'IMPROVE_PROFITABILITY', 'SECURITY_RESERVE']

const ObjectiveCardStory = () => (
  <div style={{...style.section, gridTemplateColumns: 'repeat(auto-fill,minmax(450px, .5fr))'}}>
    {
      variants.map(variant => (
        <div style={{...style.sectionItemWrapper, placeSelf: 'center'}}>
          <div style={style.sectionItem}>
            <div style={style.content}>
              <MuiThemeProvider theme={SeeTheme}>
                <ObjectiveCard
                  objectiveType={variant}
                  value={8450.045}
                />
              </MuiThemeProvider>
            </div>
              <Typography variant='body1'>
                &lt;
                  <span style={style.tag}>ObjectiveCard </span>
                  <span style={style.attr}>variant</span>=
                  <span style={style.value}>'{variant}' </span>

                  <span style={style.attr}>value</span>=
                  <span style={style.value}>8450.045</span>
                &gt;
              </Typography>
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
          Also, the component has default configutations, which are based on the <span style={style.value}>variant</span> prop,
          but you can do it on your on adding props as: <span style={style.tag}>
          title, subTitle, value, alt, iconSrc, width, height, titleProps, objectiveType, classes</span>
        </Typography>
        <Typography variant='overline' style={style.details}>
          Props
        </Typography>
        <Typography variant='caption'>
          title: PropTypes.string,
          <br/>
          titleProps: PropTypes.object,
          <br/>
          subTitle: PropTypes.string,
          <br/>
          alt: PropTypes.string,
          <br/>
          iconSrc: PropTypes.string,
          <br/>
          width: PropTypes.number,
          <br/>
          heigth: PropTypes.number
        </Typography>
      </div>
    </div>
  </div>
)

storiesOf('Components ', module)
  .addDecorator(withTests('ObjectiveCard'))
  .add('Objective Card', () => <ObjectiveCardStory/>)