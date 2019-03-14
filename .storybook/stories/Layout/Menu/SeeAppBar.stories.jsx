import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { 
  SeeAppBar, 
  SeeTheme, 
  MuiThemeProvider, 
  Typography 
} from '../../../../src'
import style from '../../style'
import withTests from '../../withTests'

const AppBarComponent = () => {
  const [menuIsOpen, handleMenuOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState('')

  const menuItems = [
    {
      name: 'MEUS OBJETIVOS',
      onClick: () => setSelectedIndex(0)
    },
    {
      name: 'TRANSAÇÕES',
      onClick: () => setSelectedIndex(1)
    },
    {
      name: 'INTELIGÊNCIA',
      onClick: () => setSelectedIndex(2)
    },
    {
      name: 'INFORMAÇÕES',
      onClick: () => setSelectedIndex(3)
    },
    {
      name: 'CONTATO',
      onClick: () => setSelectedIndex(4)
    }
  ]

  const toggleMenu = () => handleMenuOpen(!menuIsOpen)
  
  return (
    <MuiThemeProvider theme={SeeTheme}>
      <SeeAppBar
        menuItems={menuItems}
        isOpen={menuIsOpen}
        openMenu={toggleMenu}
        closeMenu={toggleMenu}
        name={'João da Silveira'}
        selectedIndex={selectedIndex}
        lastUpdateDate={'25/02/2019'}
        onClickLogo={() => alert('Clicoooou')}
      />
      <div style={{...style.section,  gridTemplateColumns: 'repeat(auto-fill)', padding: '6rem 2rem'}}>
        <div style={style.sectionItemWrapper}>
          <Typography variant='title'>
            How to use?
          </Typography>
          <Typography variant='body2' style={{maxWidth: '800px'}}>
            To use it you must pass: an <span style={style.value}>array of objects </span> 
             containing the <span style={style.attr}>name and onClick as keys</span>, which the last
             will be a function that will select the item index of the menu;
             a <span style={style.value}>function </span> to open and close the menu; 
             a <span style={style.value}>boolean </span> to sinalize if the menu is already open;
             a <span style={style.value}>strings </span> to define the name of the user and the last updated date;
             a <span style={style.value}>number </span> to sinalize the menu item selected;             
          </Typography>
          <div style={style.sectionItem}>
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
                <span style={style.attr}>selectedIndex</span>=
                <span style={style.value}>&#123;{`${selectedIndex}`}&#125;</span>
              /&gt;
            </Typography>
          </div>
        </div>
      </div>
    </MuiThemeProvider>

  )
}

storiesOf('Layout / Menu', module)
  .addDecorator(withTests('AppBar'))
  .add('SeeAppBar', () => <AppBarComponent /> )