import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Box,
    useColorModeValue
} from '@chakra-ui/react';

const DataTable = ({ users, userType }) => {
    const bg = useColorModeValue('white', 'gray.800');
    const color = useColorModeValue('white', 'gray.800');
    return (
        <Box bg={bg} rounded="lg" borderWidth="1px" padding={2} width="100%">
            <Table variant="simple">
                <TableCaption>
                    {userType === 'users' ? 'Users' : 'Admin Users'}
                </TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {users.map((user) => {
                        return (
                            <Tr key={user.uid}>
                                <Td>{user.displayName}</Td>
                                <Td>{user.email}</Td>
                                <Td>Action</Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </Box>
    );
};

export default DataTable;
