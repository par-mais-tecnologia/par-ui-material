import React from 'react'
import { storiesOf } from '@storybook/react'
import { SeeTheme, MuiThemeProvider, Switch, Select, MenuItem, Typography } from '../../src'

storiesOf('Switch', module)
  .add('Base', () => {
    return (
      <MuiThemeProvider theme={SeeTheme}>
        <div className='flex flex-column w-50'>
          <div className='mb2'>
            <Switch/>
          </div>
          <div className='mh5'>
            <Select>
              <MenuItem value={10}>
                10
              </MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={25}>25</MenuItem>
            </Select>
          </div>
        </div>
      </MuiThemeProvider>
    )
  })
