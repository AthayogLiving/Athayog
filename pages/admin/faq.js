import React, { useState } from 'react';
import Dashboard from './dashboard';
import fetcher from '@/utils/fetcher';
import useSWR from 'swr';
import { Button, ButtonGroup, Flex, Text } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useTable, useSortBy } from 'react-table';

import {
    Box,
    Divider,
    useColorModeValue,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Skeleton
} from '@chakra-ui/react';
import AddFaq from '@/components/admin/modals/AddFaq';
const faq = () => {
    const { data, error } = useSWR(`/api/faq`, fetcher);
    const bg = useColorModeValue('white', 'gray.800');
    const color = useColorModeValue('teal', 'gray.700');
    const [currentCategory, setCurrentCategory] = useState('');

    if (error)
        return (
            <Dashboard>
                <Box bg={bg} padding={6} rounded="lg" boxShadow="sm">
                    <Tabs>
                        <TabList>
                            <Skeleton>Loading..</Skeleton>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Skeleton>Loading..</Skeleton>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Dashboard>
        );

    if (!data) {
        return (
            <Dashboard>
                <Box bg={bg} padding={6} rounded="lg" boxShadow="sm">
                    <Tabs>
                        <TabList>
                            <Skeleton>Loading..</Skeleton>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Skeleton>Loading..</Skeleton>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Dashboard>
        );
    }

    const handleTabChange = (e) => {
        console.log(e);
    };

    let categoryList = [];

    data.faq.map((category) => {
        categoryList.push(category.category);
    });

    console.log(categoryList);

    return (
        <Dashboard>
            <Box bg={bg} padding={6} rounded="lg" boxShadow="sm">
                <Tabs
                    colorScheme="blue"
                    mt={2}
                    onChange={handleTabChange}
                    isLazy={true}
                    size="sm"
                >
                    <TabList>
                        {data.faq.map((category) => {
                            return (
                                <Tab key={category.id}>{category.category}</Tab>
                            );
                        })}
                    </TabList>
                    <TabPanels>
                        {data.faq.map((category, index) => {
                            return (
                                <TabPanel key={index}>
                                    {category.questions.map((quest) => {
                                        return (
                                            <Flex
                                                mt={2}
                                                justifyContent="space-between"
                                                width="100%"
                                                border="1px"
                                                flexDirection="column"
                                                borderColor="gray.100"
                                                rounded="lg"
                                                padding={5}
                                                key={quest.id}
                                            >
                                                <Box>
                                                    <Text fontWeight="bold">
                                                        Q. {quest.question}
                                                    </Text>
                                                    <Text color="primaryDarkGray">
                                                        A.{quest.answer}
                                                    </Text>
                                                </Box>
                                                <ButtonGroup size="sm" mt={5}>
                                                    <Button
                                                        colorScheme="blue"
                                                        leftIcon={<EditIcon />}
                                                    >
                                                        Edit
                                                    </Button>
                                                    <Button
                                                        colorScheme="red"
                                                        leftIcon={
                                                            <DeleteIcon />
                                                        }
                                                    >
                                                        Delete
                                                    </Button>
                                                </ButtonGroup>
                                            </Flex>
                                        );
                                    })}
                                </TabPanel>
                            );
                        })}
                    </TabPanels>
                </Tabs>

                <Divider />
                <AddFaq category={categoryList} />
            </Box>
        </Dashboard>
    );
};

export default faq;
