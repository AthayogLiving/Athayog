import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Dashboard from './dashboard';

const offerings = () => {
     const bg = useColorModeValue('white', 'gray.800');
     return (
          <Dashboard>
               <Box bg={bg} padding={6} rounded="lg" boxShadow="base">
                    Offerings
               </Box>
          </Dashboard>
     );
};

export default offerings;
