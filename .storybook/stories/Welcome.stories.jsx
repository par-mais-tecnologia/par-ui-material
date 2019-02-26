import React from 'react'
import { storiesOf } from '@storybook/react'
import {
    MuiThemeProvider,
    SeeTheme,
    Typography
} from '../../src'
import { Wave } from '../utils/components'
import style from './style'

const Welcome = () => (
    <div style={{...style.section, gridTemplateColumns: 'repeat(auto-fill,minmax(100%, .5fr))'}}>
        <div style={{background: '#5fbac2', height: '10rem'}}>
            <Wave style={{fill: '#fff'}}/>
        </div>
        <div className='tc'>
            <Typography variant='title'>
                Welcome to Par-ui-material StoryBook
            </Typography>
            <Typography variant='display1'>
                Here you will find examples of our components
            </Typography>
        </div>
    </div>
)

storiesOf('Welcome', module)
  .add('to our StoryBook', () => (
    <MuiThemeProvider theme={SeeTheme}>
        <Welcome />
    </MuiThemeProvider>
  ))