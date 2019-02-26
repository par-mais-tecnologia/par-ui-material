import React, { useState, useEffect, useRef } from 'react'
import { storiesOf } from '@storybook/react'
import {
  BioFinanceiraTheme,
  Modal,
  Button,
  MuiThemeProvider,
  Typography,
  SeeTheme
} from '../../../src'
import style from '../style'

const ModalSample = (props) => (
  <Modal open={props.open} onClose={props.onClose} >
    <div style={{
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: '200px'
    }}>
      <Typography variant='h1' className='tc mv2'>
        Check out this awesome Modal Component
      </Typography>

      <Button variant='contained' onClick={props.onClose}>
        Close
      </Button>
    </div>
  </Modal>
)
const themes = [
  {
    name: 'SeeTheme',
    theme: SeeTheme,
  },
  {
    name: 'BioFinanceiraTheme',
    theme: BioFinanceiraTheme,
  }
]

const ModalStory = ({theme}) => {
  const [isOpen, setModal] = useState(false)
  
  return(
    <div>
      <div style={style.sectionItemWrapper}>
        <div style={style.sectionItem}>
          <div style={style.content}>
            <MuiThemeProvider theme={theme.theme}>
              <ModalSample open={isOpen} onClose={() => setModal(!isOpen)}/>
            </MuiThemeProvider>
          </div>
          <Button onClick={() => setModal(!isOpen)} variant='outlined'>
            Open
          </Button>
          <Typography variant='body1'>
            &lt;<span style={style.tag}>Modal</span>&gt;...
            &lt;/<span style={style.tag}>Modal</span>&gt;
          </Typography>
        </div>
        <div style={style.sectionItemWrapper}>
          <div style={style.sectionDetails}>
            <Typography variant='overline' style={style.details}>
              Theme: <b>{theme.name}</b>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

storiesOf('Components ', module)
  .add('Modal', () => (
    <div style={{...style.section, gridTemplateColumns: 'repeat(auto-fill,minmax(400px, .5fr))'}}>
      {
        themes.map((theme, i) => (
          <>
            <ModalStory theme={theme}/>
          </>
        ))
      }
      <div style={style.sectionItemWrapper}>
        <div style={style.sectionDetails}>
          <Typography variant='title'>
            How to use?
          </Typography>
          <Typography variant='subtitle1'>
            To use the <span style={style.value}>Modal component </span>
            you just need to wrapp the content that goess inside with the tags.
            We have two differents themes that affect the buttons display,
            to implement each you have to import <span style={style.tag}>MuiThemeProvider </span>
            and the respective theme file, in this case we are using <span style={style.attr}>Theme name </span>
            on your work file and then add the tag as following:
          </Typography>
          <Typography variant='body1'>
            &lt;
              <span style={style.tag}>MuiThemeProvider </span>
              <span style={style.attr}>theme</span>=
              <span style={style.value}>'Theme name'</span>
            &gt;...
          </Typography>
        </div>
      </div>
    </div>
  ))