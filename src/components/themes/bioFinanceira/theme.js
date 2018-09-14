import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles';
import { styles } from './styles';

export const theme = createMuiTheme({
    styles,
    typography: {
        fontFamily: "'Roboto Light', 'sans-serif'",
        fontSize: '1rem',
        color: styles.colors.gray_01
    },
});

export default theme;