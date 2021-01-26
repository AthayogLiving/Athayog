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
import { changeUserAccess } from '@/lib/db';
import { useState } from 'react';
import axios from 'axios';
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

    const handleAccess = async (id, status) => {
        changeStatus(false);

        axios({
            method: 'post', //you can set what request you want to be
            url: 'http://localhost:3000/api/admin/set-admin',
            data: { token: user.token },
            body: {
                token: user.token
            }
        })
            .then(function (response) {
                // setLoading(false);
                // onClose();
                toast({
                    title: 'Made Admin.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true
                });
            })
            .catch(function (error) {
                // setLoading(false);

                toast({
                    title: 'An error occurred.',
                    description: error.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true
                });
            });

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
                                {userType === 'users' ? 'Users' : 'Admin Users'}
                            </TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Name</Th>
                                    <Th>Email</Th>
                                    <Th>Account Access</Th>
                                    <Th>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {data.users.map((user) => {
                                    return (
                                        <Tr key={user.uid}>
                                            <Td>{user.displayName}</Td>
                                            <Td>{user.email}</Td>
                                            <Td>
                                                <Switch
                                                    id="access"
                                                    colorScheme="green"
                                                    isDisabled={!status}
                                                    defaultChecked={user.admin}
                                                    onChange={(e) =>
                                                        handleAccess(
                                                            user.id,
                                                            user.admin
                                                        )
                                                    }
                                                />
                                            </Td>
                                            <Td>
                                                <ButtonGroup size="sm">
                                                    <Button colorScheme="green">
                                                        Access
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
