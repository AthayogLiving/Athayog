import ShowClasses from '@/components/admin/courses/ShowClasses';
import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Dashboard from './dashboard';

function courses() {
    const bg = useColorModeValue('white', 'gray.800');
    const color = useColorModeValue('teal', 'gray.700');
    return (
        <Dashboard>
            <Box bg={bg} padding={6} rounded="lg" boxShadow="sm">
                <ShowClasses />
            </Box>
        </Dashboard>
    );
}

export default courses;
