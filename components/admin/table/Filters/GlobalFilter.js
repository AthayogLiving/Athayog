import {
     Box,
     Button,
     FormControl,
     FormLabel,
     Input,
     Select,
     Text,
     useColorModeValue
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Filter = ({ filter, setFilter }) => {
     const bg = useColorModeValue('white', 'gray.800');
     const inputBg = useColorModeValue('white', 'gray.700');
     const border = useColorModeValue('gray.300', 'gray.600');
     return (
          <Box bg={bg} mb="10" padding={5} rounded="lg" shadow="base">
               <FormControl id="course">
                    <FormLabel>Filter By Anything</FormLabel>
                    <Input
                         value={filter || ''}
                         borderColor={border}
                         bg={inputBg}
                         placeholder="Type anything to filter out"
                         onChange={(e) => setFilter(e.target.value)}
                    />
               </FormControl>
          </Box>
     );
};

export default Filter;
