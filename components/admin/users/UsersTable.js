import useSWR from 'swr';
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
function UsersTable({ userType }) {
     const [status, changeStatus] = useState(true);
     const toast = useToast();
     const bg = useColorModeValue('white', 'gray.800');
     const color = useColorModeValue('white', 'gray.800');
     const { user } = useAuth();
     const { data } = useSWR(
          user ? [`/api/${userType}`, user.token] : null,
          fetcher,
          {
               refreshInterval: 500
          }
     );

     const handleAccess = async (id, status, name) => {
          changeStatus(false);

          const roleType = {
               0: 'Admin',
               1: 'Manager',
               2: 'Worker'
          };

          await axios({
               method: 'post',
               url: '/api/admin/set-admin',
               data: { token: user.token, role: 0 }
          })
               .then(function (response) {
                    toast({
                         title: 'Made Manager.',
                         description: `${name} has given admin privileges`,
                         status: 'success',
                         duration: 9000,
                         isClosable: true
                    });
               })
               .catch(function (error) {
                    toast({
                         title: 'An error occurred.',
                         description: 'Email not verified',
                         status: 'error',
                         duration: 5000,
                         isClosable: true
                    });
               });

          changeStatus(true);
     };

     const changeAccess = async (id, status, name, role, admin) => {
          changeStatus(false);

          const roleType = ['Admin', 'Manager', 'Worker', 'Not Assigned'];

          await axios({
               method: 'put',
               url: '/api/admin/set-admin',
               data: { token: user.token, role: 0, admin: admin }
          })
               .then(function (response) {
                    console.log(response);
                    toast({
                         title: 'Made sdf.',
                         description: `${name} has given admin privileges`,
                         status: 'success',
                         duration: 9000,
                         isClosable: true
                    });
               })
               .catch(function (error) {
                    toast({
                         title: 'An error occurred.',
                         description: 'Email not verified',
                         status: 'error',
                         duration: 5000,
                         isClosable: true
                    });
               });

          changeStatus(true);
     };

     const updateAdmin = async (userId, admin, role, roleName) => {
          user = {
               admin,
               metadata: {
                    role,
                    roleName
               }
          };
          const response = await updateAdminUser(userId, ...user);
          console.log('Fone', response);
     };

     if (!data) {
          return <SkeletonTable />;
     }

     console.log(userType, data);

     return (
          <>
               {data.users ? (
                    <>
                         <Box
                              bg={bg}
                              rounded="lg"
                              borderWidth="1px"
                              padding={2}
                              width="100%"
                         >
                              <Table variant="simple">
                                   <TableCaption>
                                        {userType === 'users'
                                             ? 'Users'
                                             : 'Admin Users'}
                                   </TableCaption>
                                   <Thead>
                                        <Tr>
                                             <Th>Name</Th>
                                             <Th>Email</Th>
                                             <Th>Account Access</Th>
                                             <Th>Role Type</Th>
                                        </Tr>
                                   </Thead>
                                   <Tbody>
                                        {data.users.map((user) => {
                                             return (
                                                  <Tr key={user.uid}>
                                                       <Td>
                                                            {user.displayName}
                                                       </Td>
                                                       <Td>{user.email}</Td>
                                                       <Td>
                                                            <Switch
                                                                 id="access"
                                                                 colorScheme="green"
                                                                 isDisabled={
                                                                      !status
                                                                 }
                                                                 defaultChecked={
                                                                      user.admin
                                                                 }
                                                                 onChange={(
                                                                      e
                                                                 ) =>
                                                                      handleAccess(
                                                                           user.id,
                                                                           user.admin,
                                                                           user.displayName
                                                                      )
                                                                 }
                                                            />
                                                       </Td>
                                                       <Td>
                                                            <ButtonGroup size="sm">
                                                                 <Button colorScheme="green">
                                                                      {
                                                                           user
                                                                                .metadata
                                                                                ?.roleName
                                                                      }
                                                                 </Button>
                                                            </ButtonGroup>
                                                       </Td>
                                                  </Tr>
                                             );
                                        })}
                                   </Tbody>
                              </Table>
                         </Box>
                    </>
               ) : (
                    <>
                         <h1>No Users</h1>
                    </>
               )}
          </>
     );
}

export default UsersTable;
