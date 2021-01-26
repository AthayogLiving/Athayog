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
    useColorModeValue
} from '@chakra-ui/react';

function SkeletonTable() {
    const bg = useColorModeValue('white', 'gray.800');
    const color = useColorModeValue('white', 'gray.800');
    return (
        <Table
            variant="simple"
            colorScheme="teal"
            bg={bg}
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
