import React from 'react';
import { FiFrown } from 'react-icons/fi';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import {
    Box,
    Button,
    ButtonGroup,
    Center,
    Spinner,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Flex,
    Heading,
    Divider,
    Text,
    Stack,
    StackItem,
    VStack,
    StackDivider
} from '@chakra-ui/react';
import { capitalizeFirstLetter } from '@/components/helper/Capitalize';

const ShowClasses = () => {
    const { data, error } = useSWR(`/api/courses/`, fetcher, {
        refreshInterval: 500
    });

    if (error)
        return (
            <Center height="350px">
                <FiFrown />
                <Text ml={2}> Something Happend Try Again!</Text>
            </Center>
        );

    if (!data) {
        return (
            <Center height="350px">
                <Spinner />
            </Center>
        );
    }

    if (data.classes.length <= 0) {
        return (
            <Center height="350px">
                <FiFrown />
                <Text ml={2}> No Courses Found!</Text>
            </Center>
        );
    }
    return (
        <Box>
            <Heading fontSize="xl">Courses Name</Heading>
            <Divider />
            <VStack spacing={3} align="stretch" mt={5}>
                {data?.classes.map((data) => {
                    return (
                        <Box key={data.id} padding={2} rouned="md">
                            {capitalizeFirstLetter(data.className)}
                        </Box>
                    );
                })}
            </VStack>
        </Box>
    );
};

export default ShowClasses;
