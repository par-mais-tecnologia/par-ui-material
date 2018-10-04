import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import { MuiThemeProvider, BioFinanceiraTheme, DropCap } from '../../src'
import withTests from './withTests'

class DropCapStory extends PureComponent {
  render () {
    const {children} = this.props
    return (
      <div className="pa3 w-100">
        <MuiThemeProvider theme={BioFinanceiraTheme}>
          <div>
            {children}
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

storiesOf('Drop Cap', module)
  .addDecorator(withTests('DropCap'))
  .addDecorator(withKnobs)
  .add('shallow', () => {
    return (
      <DropCap />
    )
  })
  .add('Normal', () => {
    return (
      <DropCapStory>
          <DropCap dropCap='20%'>
            {text('Texto', `do que
            ganha`)}
          </DropCap>
      </DropCapStory>
    )

  })
  .add('Com HTML', () => {
    return (
      <DropCapStory>
        <DropCap dropCap='4 anos'>
          de suas <br/><b>despesas</b>
        </DropCap>
      </DropCapStory>
    )
  })