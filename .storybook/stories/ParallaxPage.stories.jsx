import React from 'react'
import { storiesOf } from '@storybook/react'
import withTests from './withTests'
import {
  MuiThemeProvider,
  ParallaxPage,
  SeeTheme,
  SeeAppBar
} from '../../src'

const foo = (
  <div className='flex flex-column items-center justify-center pa4' style={{ backgroundColor: 'red', height: '100%' }}>
    <div>00000000</div>
    <div>aaaaaaaaa</div>
    <div>uuuuuuuuuuu</div>
  </div>
)

const foo2 = (
  <div style={{ backgroundColor: 'grey' }}>
    <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.
    </p>
    <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.
    </p>
    <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.
    </p>
    <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.
    </p>
    <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.
    </p>
    <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.
    </p>
    <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.
    </p>
    <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.
    </p>
    <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.
    </p>
    <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.
    </p>
  </div>
)


storiesOf('ParallaxPage', module)
  .addDecorator(withTests('ParallaxPage'))
  .add('default', ()=> {
    return (
      <ParallaxPage
        header={foo}
        content={foo2}
      />
    )
  })
  .add('header full page in mobile', ()=> {
    return (
      <ParallaxPage
        header={foo}
        content={foo2}
        headerFullPage
      />
    )
  })
  .add('with seeAppBar', ()=> {
    return (
      <MuiThemeProvider theme={SeeTheme}>
        <SeeAppBar 
          name={'Marcelo Silveira'}
          lastUpdate={'29/09/1989'}
          menuItems={[]}
          handleExit={()=>console.log('handleExit')}
          menuIsOpen={false}
          closeMenu={()=>console.log('closeMenu')}
          openMenu={()=>console.log('openMenu')}
          selectedIndex={0}
        />
        <ParallaxPage
          header={foo}
          content={foo2}
          headerFullPage
        />
      </MuiThemeProvider>
    )
  })

