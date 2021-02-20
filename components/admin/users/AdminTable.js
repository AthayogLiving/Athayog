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
import { withLayout } from '@/components/Layout';
function UsersTable() {
     const [status, changeStatus] = useState(true);
     const [adminChange, changeAdmin] = useState(false);
     const toast = useToast();
     const bg = useColorModeValue('white', 'gray.800');
     const color = useColorModeValue('white', 'gray.800');
     const { user } = useAuth();
     const { data } = useSWR(
          user ? [`/api/adminUsers`, user.token] : null,
          fetcher,
          {
               refreshInterval: 100
          }
     );

     const handleAdminAccess = async (id, name, admin) => {
          changeStatus(false);

          const roleType = {
               0: 'admin',
               1: 'manager',
               2: 'worker'
          };

          await axios({
               method: 'post',
               url: '/api/admin/set-admin',
               data: { token: user.token, role: 0, admin: !admin, id: id }
          })
               .then(function (response) {
                    changeAdmin(true);
                    toast({
                         title: `${admin ? 'Removed' : 'Gave'} Access.`,
                         description: `${name} has ${
                              admin ? 'taken away the' : 'given'
                         } admin privileges`,
                         status: `${admin ? 'warning' : 'success'}`,
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

     if (!data) {
          return <SkeletonTable />;
     }

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
                                             {userType === 'users' ? null : (
                                                  <>
                                                       <Th>Account Access</Th>
                                                       <Th>Role</Th>
                                                  </>
                                             )}
                                             {userType === 'users' ? (
                                                  <>
                                                       <Th>Subscriptions</Th>
                                                  </>
                                             ) : null}
                                        </Tr>
                                   </Thead>
                                   <Tbody>
                                        {data.users.map((user) => {
                                             return (
                                                  <Tr key={user.uid}>
                                                       <Td>
                                                            {user.name
                                                                 ? user.name
                                                                 : user.displayName}
                                                       </Td>
                                                       <Td>{user.email}</Td>
                                                       {userType ===
                                                       'users' ? null : (
                                                            <>
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
                                                                                handleAdminAccess(
                                                                                     user.id,
                                                                                     user.displayName,
                                                                                     user.admin
                                                                                )
                                                                           }
                                                                      />
                                                                 </Td>
                                                                 <Td>
                                                                      {
                                                                           user
                                                                                .metadata
                                                                                ?.roleName
                                                                      }
                                                                 </Td>
                                                            </>
                                                       )}
                                                       {userType === 'users' ? (
                                                            <>
                                                                 {user.referenceId ? (
                                                                      <Td>
                                                                           <Link href="/">
                                                                                <Badge
                                                                                     bg="green.200"
                                                                                     rounded="lg"
                                                                                     _hover="green.800"
                                                                                     cursor="pointer"
                                                                                >
                                                                                     Check
                                                                                     Subscriptions
                                                                                </Badge>
                                                                           </Link>
                                                                      </Td>
                                                                 ) : (
                                                                      <Td>
                                                                           No
                                                                           Subscriptions
                                                                      </Td>
                                                                 )}
                                                            </>
                                                       ) : null}
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

export default withLayout(UsersTable);
