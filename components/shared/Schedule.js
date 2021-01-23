import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Box,
    Flex,
    Heading
} from '@chakra-ui/react';

const tableData = {
    week: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ],
    shedules: [
        {
            day: 'Moday',
            times: [
                '5:30 am - 6:30 am',
                'Something',
                'Something',
                'Something',
                'Something',
                'Something'
            ]
        },
        {
            day: 'Moday',
            times: [
                '5:30 am - 6:30 am',
                'Something',
                'Something',
                'Something',
                'Something',
                'Something'
            ]
        },
        {
            day: 'Moday',
            times: [
                '5:30 am - 6:30 am',
                'Something',
                'Something',
                'Something',
                'Something',
                'Something'
            ]
        },
        {
            day: 'Moday',
            times: [
                '5:30 am - 6:30 am',
                'Something',
                'Something',
                'Something',
                'Something',
                'Something'
            ]
        },
        {
            day: 'Moday',
            times: [
                '5:30 am - 6:30 am',
                'Something',
                'Something',
                'Something',
                'Something',
                'Something'
            ]
        },
        {
            day: 'Moday',
            times: [
                '5:30 am - 6:30 am',
                'Something',
                'Something',
                'Something',
                'Something',
                'Something'
            ]
        },
        {
            day: 'Moday',
            times: [
                '5:30 am - 6:30 am',
                'Something',
                'Something',
                'Something',
                'Something',
                'Something'
            ]
        }
    ]
};

console.log(tableData);

const Schedule = () => {
    return (
        <Flex
            margin="auto"
            padding="5rem 0"
            justifyContent="center"
            alignItems="center"
            width="100vw"
            bg="#fbfbfb"
        >
            <Flex
                justifyContent="center"
                direction="column"
                alignItems="center"
                width="60vw"
            >
                <Heading fontWeight="normal">Schedule</Heading>
                <Table variant="striped" colorScheme="aygreen" mt={10}>
                    <Thead>
                        <Tr>
                            {tableData.week.map((data, index) => {
                                return <Th key="index">{data}</Th>;
                            })}
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>5:30 am - 6:30 am</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                        </Tr>
                        <Tr>
                            <Td>5:30 am - 6:30 am</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                        </Tr>
                        <Tr>
                            <Td>5:30 am - 6:30 am</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                        </Tr>
                        <Tr>
                            <Td>5:30 am - 6:30 am</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                        </Tr>
                        <Tr>
                            <Td>5:30 am - 6:30 am</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                        </Tr>
                        <Tr>
                            <Td>5:30 am - 6:30 am</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                        </Tr>
                        <Tr>
                            <Td>5:30 am - 6:30 am</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                            <Td>Something</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Flex>
        </Flex>
    );
};

export default Schedule;
