import useSWR, { mutate } from 'swr';
import fetcher from '@/utils/fetcher';
import SkeletonTable from '@/components/shared/SkeletonTable';
import {
     Box,
     Table,
     Thead,
     Tbody,
     Tr,
     Th,
     Td,
     TableCaption,
     useColorModeValue,
     ButtonGroup,
     Button,
     Badge,
     Switch,
     toast,
     useToast
} from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import { useState } from 'react';
import axios from 'axios';
import { updateAdminUser } from '@/lib/db/admin-users';
import Link from 'next/link';

import DashboardLayout from '@/components/layout/DashboardLayout';
function AdminTable({ admin }) {
     const [status, changeStatus] = useState(true);
     const [adminChange, changeAdmin] = useState(false);
     const toast = useToast();
     const bg = useColorModeValue('white', 'gray.800');
     const color = useColorModeValue('white', 'gray.800');
     const { user } = useAuth();

     const handleAdminAccess = async (id, name, permission) => {
          changeStatus(false);

          const roleType = {
               0: 'admin',
               1: 'manager',
               2: 'worker'
          };

          await axios({
               method: 'post',
               url: '/api/admin/set-admin',
               data: { token: user.token, role: 0, admin: !permission, id: id }
          })
               .then(function (response) {
                    changeAdmin(true);
                    toast({
                         title: `${permission ? 'Removed' : 'Gave'} Access.`,
                         description: `${name} has ${
                              permission ? 'taken away the' : 'given'
                         } admin privileges`,
                         status: `${permission ? 'warning' : 'success'}`,
                         duration: 9000,
                         isClosable: true
                    });
               })
               .catch(function (error) {
                    changeAdmin(false);
                    toast({
                         title: 'An error occurred.',
                         description: 'Email not verified',
                         status: 'error',
                         duration: 5000,
                         isClosable: true
                    });
               });

          mutate([`/api/admin/users`, user.token]);

          changeStatus(true);
     };

     return (
          <>
               <Box
                    bg={bg}
                    rounded="lg"
                    borderWidth="1px"
                    padding={2}
                    boxShadow="base"
                    width="100%"
                    mt={3}
               >
                    <Table variant="simple">
                         <TableCaption>Admin Users</TableCaption>
                         <Thead>
                              <Tr>
                                   <Th>Name</Th>
                                   <Th>Email</Th>

                                   <Th>Account Access</Th>
                                   <Th>Role</Th>
                              </Tr>
                         </Thead>
                         <Tbody>
                              {admin.map((user) => {
                                   return (
                                        <Tr key={user.uid}>
                                             <Td>{user.displayName}</Td>
                                             <Td>{user.email}</Td>

                                             <Td>
                                                  <Switch
                                                       id="access"
                                                       colorScheme="green"
                                                       isDisabled={!status}
                                                       defaultChecked={
                                                            user.admin
                                                       }
                                                       onChange={(e) =>
                                                            handleAdminAccess(
                                                                 user.id,
                                                                 user.displayName,
                                                                 user.admin
                                                            )
                                                       }
                                                  />
                                             </Td>
                                             <Td>{user.metadata?.roleName}</Td>
                                        </Tr>
                                   );
                              })}
                         </Tbody>
                    </Table>
               </Box>
          </>
     );
}

export default AdminTable;
AdminTable.Layout = DashboardLayout;
