import ShowClasses from '@/components/admin/courses/ShowClasses';
import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import Dashboard from './dashboard';
const classes = () => {
    const bg = useColorModeValue('white', 'gray.800');
    const color = useColorModeValue('teal', 'gray.700');
    return <Dashboard>classes</Dashboard>;
};

export default classes;
