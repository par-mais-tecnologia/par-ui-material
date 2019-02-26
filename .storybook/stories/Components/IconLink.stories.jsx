import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { number, text, withKnobs } from '@storybook/addon-knobs'
import withTests from '../withTests'
import { IconLink, Typography, MuiThemeProvider, BioFinanceiraTheme } from '../../../src'
import style from '../style'

const IconLinkStory = (props) => (
  <div style={{
      ...style.section, 
      gridTemplateColumns: 'repeat(auto-fill,minmax(30rem, 1fr))'
    }}>
      <div style={{...style.sectionItemWrapper, placeSelf: 'center'}}>
        <div style={{...style.sectionItem, borderBottom: 'none'}}>
          <MuiThemeProvider theme={BioFinanceiraTheme}>
            <IconLink
              color={props.color}
              fontSize={props.fontSize}
              icon={props.icon}
              onClick={props.onClick}
              text={props.text}
            />
          </MuiThemeProvider>
        </div>
      </div>
      <div style={style.sectionDetails}>
        <Typography variant='body1'>
          &lt;
            <span style={style.tag}>IconLink </span>

            <span style={style.attr}>color</span>=
            <span style={style.value}>'{props.color}' </span>

            <span style={style.attr}>fontSize</span>=
            <span style={style.value}>'{props.fontSize}'</span>
            <br />
            <span style={style.attr}>icon</span>=
            <span style={style.value}>'{props.icon}' </span>

            <span style={style.attr}>onClick</span>=
            <span style={style.value}>&#123;() => handleClick()&#125;</span>
            <br/>
            <span style={style.attr}>text</span>=
            <span style={style.value}>'{props.text}' </span>
          /&gt;
        </Typography>
        <Typography variant='title'>
          How to use?
        </Typography>
        <Typography variant='subtitle1'>
          All the icons that you can use to style can be found at the <span style={style.value}>par-ui-icons </span>
          library, to use it you just need to copy and paste the name of the icon inside the <span style={style.tag}>
          icon </span> property.
          Note: you can also use it <i style={style.attr}>without </i> any icon, as the component does not have a default property.
        </Typography>
        <Typography variant='overline' style={style.details}>
          Props
        </Typography>
        <Typography variant='caption'>
          color: PropTypes.string,
          <br/>
          className: PropTypes.string,
          <br/>
          fontSize: PropTypes.number,
          <br/>
          icon: PropTypes.string,
          <br/>
          onClick: PropTypes.func,
          <br/>
          text: PropTypes.string
        </Typography>
      </div>
  </div>
)

storiesOf('Components ', module)
  .addDecorator(withTests('IconLink'))
  .addDecorator(withKnobs)
  .add('IconLink', () => <IconLinkStory
    color={text('color', '#909090')}
    fontSize={number('fontSize', 30)}
    icon={text('icon', 'reload')}
    onClick={action('Clicou e executou função!')}
    text={text('text', 'Refazer BIO')}
  /> )