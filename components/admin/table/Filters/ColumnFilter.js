import { Box, Input, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const ColumnFilter = ({ column }) => {
     const { filterValue, setFilter } = column;
     const bg = useColorModeValue('white', 'gray.700');
     const border = useColorModeValue('gray.300', 'gray.600');
     return (
          <Box bg="white" mt="3" rounded="base">
               <Input
                    value={filterValue || ''}
                    size="sm"
                    borderColor={border}
                    bg={bg}
                    onChange={(e) => setFilter(e.target.value)}
                    placeholder="Type to search"
                    rounded="base"
               />
          </Box>
     );
};

export default ColumnFilter;
