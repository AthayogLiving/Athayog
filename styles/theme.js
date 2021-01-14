import React from 'react';
import { chakra, theme as chakraTheme } from '@chakra-ui/react';

const theme = {
     ...chakraTheme,
     fonts: {
          ...chakraTheme.fonts,
          body: `Josefin Sans, sans-serif`
     },
     fontWeights: {
          normal: 400,
          medium: 500,
          bold: 700
     },
     icons: {
          ...chakraTheme.icons,
          athayog: {}
     },
     colors: {
          ...chakraTheme.colors,
          indigo: {
               50: '#f7e3ff',
               100: '#e0b2ff',
               200: '#c980ff',
               300: '#b34efe',
               400: '#9e1dfd',
               500: '#8405e4',
               600: '#6702b2',
               700: '#4a0080',
               800: '#2c004e',
               900: '#11001e'
          }
     }
};

export default theme;
