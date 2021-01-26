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

const DataTable = ({ users, userType }) => {
    return (
        <Box bg="white" rounded="lg" borderWidth="1px" padding={2} width="100%">
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
