import React from 'react';
import { chakra, theme as chakraTheme } from '@chakra-ui/react';

const theme = {
     ...chakraTheme,
     fonts: {
          ...chakraTheme.fonts,
          body: `Montserrat, sans-serif`
     },
     fontWeights: {
          normal: 400,
          medium: 500,
          bold: 700
     },
     icons: {
          ...chakraTheme.icons,
          athayog: {}
     }
};

export default theme;
