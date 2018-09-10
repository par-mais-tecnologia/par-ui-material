import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import {convertHexToRGB} from "./functions";

import 'tachyons/css/tachyons.min.css';
import '../Core/styles/index.css';

const InitialScreen = (props) => {

  const {
    imageSrc,
    middleBoxColor,
  } = props;

  const styles = {
    backgroundContainer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundImage: `url(${imageSrc})`,
      backgroundSize: 'cover',
    },
    middleBox: {
      backgroundColor: middleBoxColor !== '' ? convertHexToRGB(middleBoxColor, 0.6) : '',
      borderRadius: '5px'
      // filter: 'blur(2px)',
    }
  };

  return (
    <div className='flex justify-center items-center' style={styles.backgroundContainer}>
      <div className='flex pa4 row justify-center items-center flex-wrap' style={styles.middleBox}>
        {props.children}
      </div>
    </div>
  )
};

InitialScreen.defaultProps = {
  middleBoxColor: '#347A7C',
  imageSrc: ''
};

export default InitialScreen;
