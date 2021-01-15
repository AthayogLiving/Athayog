import React from 'react';
import {
     Table,
     Thead,
     Tbody,
     Tr,
     Th,
     Td,
     TableCaption,
     Skeleton,
     Box
} from '@chakra-ui/react';

const DataTable = ({ users }) => {
     return (
          <Box>
               <Table
                    variant="simple"
                    colorScheme="teal"
                    bg="white"
                    rounded="lg"
                    boxShadow="base"
               >
                    <TableCaption>Users</TableCaption>
                    <Thead bg="gray.50">
                         <Tr>
                              <Th>Name</Th>
                              <Th>Email</Th>
                         </Tr>
                    </Thead>
                    <Tbody>
                         {users.map((user) => {
                              return (
                                   <Tr key={user.uid}>
                                        <Td>{user.id}</Td>
                                        <Td>{user.email}</Td>
                                   </Tr>
                              );
                         })}
                    </Tbody>
               </Table>
          </Box>
     );
};

export default DataTable;
