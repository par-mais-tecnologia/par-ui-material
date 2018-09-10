import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';

import InitialScreen from "../InitialScreen";
import MyWalletLoginView from "../InitialScreen/components/MyWalletLoginView";
import BioInitialView from "../InitialScreen/components/BioInitialView";

storiesOf('InitialScreen', module)
  .add('Minha Carteira', () => {
    return (
      <InitialScreen
        imageSrc={'https://static.parmais.com.br/images/background.jpg'}
        middleBoxColor='#347A7C'>
        <MyWalletLoginView/>
      </InitialScreen>
    )
  })
  .add('Bio Financeira', () => {
    return (
      <InitialScreen
        imageSrc={'https://static.parmais.com.br/images/background.jpg'}
        middleBoxColor='#347A7C'>
        <BioInitialView/>
      </InitialScreen>
    )
  });
