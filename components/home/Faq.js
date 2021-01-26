import {
    Box,
    Flex,
    Heading,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Skeleton
} from '@chakra-ui/react';
import React from 'react';
import fetcher from '@/utils/fetcher';
import useSWR from 'swr';

const Faq = ({ faq }) => {
    const { data, error } = useSWR(`/api/faq`, fetcher, {
        initialData: faq
    });

    if (error) return <Skeleton>Loading..</Skeleton>;

    if (!data) {
        return <Skeleton>Loading..</Skeleton>;
    }

    return (
        <Box height="100vh" bg="#f9f9f9">
            <Flex
                alignItems="center"
                justifyContent="flex-start"
                direction="column"
                height="100%"
                width="100%"
            >
                <Box mt="10%">
                    <Heading
                        textAlign="center"
                        fontWeight="normal"
                        color="primaryDarkGray"
                    >
                        Faq
                    </Heading>
                    <Flex
                        justifyContent="space-around"
                        alignItems="flex-start"
                        mt={10}
                    >
                        <Tabs
                            variant="unstyled"
                            bg="white"
                            width="5xl"
                            align="center"
                        >
                            <TabList width="100%">
                                {data.faq.map((data) => {
                                    return (
                                        <Tab
                                            _selected={{
                                                color: 'black',
                                                bg: 'aygreen.100'
                                            }}
                                            padding="1rem 3rem"
                                            width="100%"
                                            key={data.id}
                                        >
                                            {data.category}
                                        </Tab>
                                    );
                                })}
                            </TabList>
                            <TabPanels>
                                {data.faq.map((faqs) => {
                                    return (
                                        <TabPanel key={faqs.id}>
                                            <Accordion
                                                allowMultiple
                                                defaultIndex={[0]}
                                                border="1px"
                                                borderColor="gray.100"
                                                rounded="lg"
                                            >
                                                <AccordionItem>
                                                    <AccordionButton>
                                                        <Box
                                                            flex="1"
                                                            textAlign="left"
                                                        >
                                                            {faqs.question}
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                    <AccordionPanel
                                                        pb={4}
                                                        bg="aygreen.50"
                                                    >
                                                        {faqs.answer}
                                                    </AccordionPanel>
                                                </AccordionItem>
                                            </Accordion>
                                        </TabPanel>
                                    );
                                })}
                            </TabPanels>
                        </Tabs>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export async function getStaticProps() {
    const faq = await fetcher('/api/faq');
    return { props: { faq } };
}

export default Faq;
