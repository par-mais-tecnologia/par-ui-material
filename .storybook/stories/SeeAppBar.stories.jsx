import React from 'react'
import { storiesOf } from '@storybook/react'
import { 
  MuiThemeProvider,
  SeeTheme,
  SeeAppBar,
} from '../../src'

import withTests from './withTests'

class AppBarStories extends React.Component {
  render() {
    const name = 'Rui Cavaleiro'
    const lastUpdate = { date: '29/09/1989', time: '14:34' }
    const menuItems = [
      {
        item: 'SEUS OBJETIVOS',
        onClick: () => console.log('objetivos')
      },
      {
        item: 'INTELIGÊNCIA EM INVESTIMENTOS',
        onClick: () => console.log('inteligencia')
      },
      {
        item: 'INFORMAÇÕES',
        onClick: () => console.log('info')
      },
      {
        item: 'CONTATO',
        onClick: () => console.log('contato')
      }
    ]
    return (
      <div>
        <SeeAppBar 
          name={name}
          lastUpdate={lastUpdate}
          menuItems={this.props.withoutMenuItems ? [] : menuItems}
          handleExit={()=>console.log('exit')}
        />
        <div>
          FOO
        </div>
      </div>
    )
  }
}

storiesOf('SeeAppBar', module)
  .addDecorator(withTests('AppBar'))
  .add('SeeAppBar', () => {
    return (
      <MuiThemeProvider theme={SeeTheme}>
        <AppBarStories />
      </MuiThemeProvider>
    )
  })
  .add('SeeAppBar without MenuItems MVP', () => {
    return (
      <MuiThemeProvider theme={SeeTheme}>
        <AppBarStories withoutMenuItems/>
      </MuiThemeProvider>
    )
  })