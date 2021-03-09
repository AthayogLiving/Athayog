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
     Text,
     Badge,
     Switch,
     toast,
     useToast,
     Flex
} from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import { useState } from 'react';
import axios from 'axios';
import { updateAdminUser } from '@/lib/db/admin-users';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

import DashboardLayout from '@/components/layout/DashboardLayout';
function AdminTable({ admin }) {
     const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
     const customAdminMobile = useMediaQuery({ query: '(max-width:600px)' });
     const [status, changeStatus] = useState(true);
     const [adminChange, changeAdmin] = useState(false);
     const toast = useToast();
     const bg = useColorModeValue('white', 'gray.800');
     const color = useColorModeValue('white', 'gray.800');
     const { user } = useAuth();

     const handleAdminAccess = async (token, id, name, permission) => {
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
                    console.log(error);
                    changeAdmin(false);
                    toast({
                         title: 'An error occurred.',
                         description: 'lol',
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
               <Box>
                    {customAdminMobile ? (
                         <>
                              {' '}
                              {admin.map((user) => {
                                   return (
                                        <Box
                                             key={user.uid}
                                             padding={3}
                                             fontSize="sm"
                                        >
                                             <Flex
                                                  alignItems="center"
                                                  justifyContent="space-between"
                                                  mb={2}
                                             >
                                                  <Text>Name:</Text>
                                                  <Text>
                                                       {user.displayName}
                                                  </Text>
                                             </Flex>
                                             <Flex
                                                  alignItems="center"
                                                  justifyContent="space-between"
                                                  flexWrap="wrap"
                                                  mb={2}
                                             >
                                                  <Text>Email:</Text>
                                                  <Text>{user.email}</Text>
                                             </Flex>
                                             <Flex
                                                  alignItems="center"
                                                  justifyContent="space-between"
                                                  mb={2}
                                             >
                                                  <Switch
                                                       id="access"
                                                       colorScheme="green"
                                                       isDisabled={!status}
                                                       defaultChecked={
                                                            user.admin
                                                       }
                                                       onChange={(e) =>
                                                            handleAdminAccess(
                                                                 user.token,
                                                                 user.id,
                                                                 user.displayName,
                                                                 user.admin
                                                            )
                                                       }
                                                  />
                                             </Flex>
                                             <Flex
                                                  alignItems="center"
                                                  justifyContent="space-between"
                                                  mb={2}
                                             >
                                                  <Text>Role Name:</Text>
                                                  <Text>
                                                       {user.metadata?.roleName}
                                                  </Text>
                                             </Flex>
                                        </Box>
                                   );
                              })}{' '}
                         </>
                    ) : (
                         <Table
                              variant="simple"
                              size={isTabletOrMobile ? 'sm' : 'lg'}
                         >
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
                                                  <Td>
                                                       {user.metadata?.roleName}
                                                  </Td>
                                             </Tr>
                                        );
                                   })}
                              </Tbody>
                         </Table>
                    )}
               </Box>
          </>
     );
}

export default AdminTable;
AdminTable.Layout = DashboardLayout;
