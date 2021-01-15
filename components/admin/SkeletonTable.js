import React from 'react';
import {
     Table,
     Thead,
     Tbody,
     Tr,
     Th,
     Td,
     TableCaption,
     Skeleton
} from '@chakra-ui/react';

function SkeletonTable() {
     return (
          <Table
               variant="simple"
               colorScheme="teal"
               bg="white"
               rounded="lg"
               boxShadow="base"
          >
               <TableCaption>Users</TableCaption>
               <Thead>
                    <Tr>
                         <Th>Name</Th>
                         <Th>Email</Th>
                    </Tr>
               </Thead>
               <Tbody>
                    <Tr>
                         <Td>
                              <Skeleton height="20px" />
                         </Td>
                         <Td>
                              <Skeleton height="20px" />
                         </Td>
                    </Tr>
                    <Tr>
                         <Td>
                              <Skeleton height="20px" />
                         </Td>
                         <Td>
                              <Skeleton height="20px" />
                         </Td>
                    </Tr>
                    <Tr>
                         <Td>
                              <Skeleton height="20px" />
                         </Td>
                         <Td>
                              <Skeleton height="20px" />
                         </Td>
                    </Tr>
               </Tbody>
          </Table>
     );
}

export default SkeletonTable;
