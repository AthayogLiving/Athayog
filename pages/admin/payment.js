import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import Dashboard from './dashboard';
const payment = () => {
     const bg = useColorModeValue('white', 'gray.800');
     const color = useColorModeValue('teal', 'gray.700');
     return <Dashboard>payment</Dashboard>;
};

export default payment;
