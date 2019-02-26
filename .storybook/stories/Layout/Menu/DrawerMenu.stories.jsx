import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { 
  DrawerMenu, 
  Button, 
  SeeTheme, 
  Typography, 
  MuiThemeProvider
} from '../../../../src'
import style from '../../style'

const DrawerMenuStory = () => {
  const [menuIsOpen, handleMenuOpen] = useState(false)

  const menuItems = [
    {
      name: 'MEUS OBJETIVOS',
      onClick: () => console.log('Clicou em MEUS OBJETIVOS')
    },
    {
      name: 'TRANSAÇÕES',
      onClick: () => console.log('Clicou em TRANSAÇÕES')

    },
    {
      name: 'INTELIGÊNCIA',
      onClick: () => console.log('Clicou em INTELIGÊNCIA'),
    },
    {
      name: 'INFORMAÇÕES',
      onClick: () => console.log('Clicou em INFORMAÇÕES')
    },
    {
      name: 'CONTATO',
      onClick: () => console.log('Clicou em CONTATO')
    }
  ]

  const toggleMenu = () => handleMenuOpen(!menuIsOpen)

  return(
    <div style={{
        ...style.section, 
        gridTemplateColumns: 'repeat(auto-fill,minmax(30rem, 1fr))'
      }}>
        <div style={{...style.sectionItemWrapper, placeSelf: 'center'}}>
          <div style={{...style.sectionItem, borderBottom: 'none' }}>
            <MuiThemeProvider theme={SeeTheme}>
            <div className='ma4'>
              <Button
                onClick={() => handleMenuOpen(true)}>
                Open Menu
              </Button>
              <DrawerMenu
                menuItems={menuItems}
                isOpen={menuIsOpen}
                openMenu={toggleMenu}
                closeMenu={toggleMenu}
                name={'João da Silveira'}
                handleExit={() => console.log('Click Exit button')}
                lastUpdateDate={'25/02/2019'}
              />
            </div>
            </MuiThemeProvider>
          </div>
        </div>
        <div style={style.sectionDetails}>
          <Typography variant='body1'>
            &lt;
              <span style={style.tag}>SeeAppBar </span> 

              <span style={style.attr}>menuItems</span>=
              <span style={style.value}>&#123;[obj, obj, obj]&#125; </span>

              <span style={style.attr}>isOpen</span>=
              <span style={style.value}>&#123;{`${menuIsOpen}`}&#125; </span>

              <span style={style.attr}>openMenu</span>=
              <span style={style.value}>&#123;( ) => toggleMenu(!isOpen)&#125; </span>
              <span style={style.attr}>closeMenu</span>=
              <span style={style.value}>&#123;( ) => toggleMenu(!isOpen)&#125; </span>
              <br/>
              <span style={style.attr}>name</span>=
              <span style={style.value}>'João da Silveira' </span>
              <span style={style.attr}>lastUpdateDate</span>=
              <span style={style.value}>'25/02/2019' </span>
            /&gt;
          </Typography>
          <Typography variant='title'>
            How to use?
          </Typography>
          <Typography variant='subtitle1'>
            To use it you must pass: an <span style={style.value}>array of objects </span> 
             containing the <span style={style.attr}>name and onClick as keys</span>, which the last
             will be a function that will select the item index of the menu;
             a <span style={style.value}>function </span> to open and close the menu; 
             a <span style={style.value}>boolean </span> to sinalize if the menu is already open;
             a <span style={style.value}>strings </span> to define the name of the user and the last updated date;
             a <span style={style.value}>number </span> to sinalize the menu item selected;  
          </Typography>
        </div>
    </div>
  )
}

storiesOf('Layout / Menu', module)
  .add('DrawerMenu', () => <DrawerMenuStory />)
