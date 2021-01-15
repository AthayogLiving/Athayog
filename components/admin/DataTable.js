import {
     Table,
     Thead,
     Tbody,
     Tr,
     Th,
     Td,
     TableCaption,
     Box
} from '@chakra-ui/react';

const DataTable = ({ users }) => {
     return (
          <Box
               bg="white"
               rounded="lg"
               borderWidth="1px"
               padding={2}
               boxShadow="base"
          >
               <Table variant="simple">
                    <TableCaption>Users</TableCaption>
                    <Thead>
                         <Tr>
                              <Th>Name</Th>
                              <Th>Email</Th>
                              <Th>Acess Level</Th>
                         </Tr>
                    </Thead>
                    <Tbody>
                         {users.map((user) => {
                              return (
                                   <Tr key={user.uid}>
                                        <Td>{user.id}</Td>
                                        <Td>{user.email}</Td>
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
