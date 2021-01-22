import { Box, Flex, Grid, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const Classes = ({ classes }) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    return (
        <Flex
            margin="auto"
            padding="5rem 0"
            justifyContent="center"
            alignItems="center"
            width="100vw"
            bg="white"
        >
            <Flex
                justifyContent="center"
                direction="column"
                alignItems="center"
                width="80vw"
            >
                <Heading fontWeight="normal">Classes</Heading>
                <Text fontWeight="light" mt={4}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Illo nulla quasi commodi quas aperiam voluptatum accusantium
                    repellendus repudiandae ex numquam odio officiis, tenetur in
                    magnam iure, ipsum modi labore neque. Ullam, tempora
                    consequuntur repellat dolor sit sint dolorem, eos ex eum id
                    minima nemo saepe veritatis consectetur magni. Voluptatum
                    necessitatibus magnam nisi rerum aperiam sequi pariatur
                    natus? Ducimus, explicabo velit! Nam illo dicta
                    reprehenderit, aliquid exercitationem cumque quasi vitae
                    placeat nisi perspiciatis? Qui iusto tempora eum ipsa saepe
                    fuga provident ducimus incidunt sunt facilis? Recusandae
                    odio facilis error quibusdam veritatis?
                </Text>

                <SimpleGrid
                    minChildWidth="400px"
                    spacing="20px"
                    width="100%"
                    mt={10}
                >
                    {classes.map((data, index) => {
                        return (
                            <Box
                                bg={
                                    index % 2 == 0
                                        ? 'aygreen.100'
                                        : 'aygreen.200'
                                }
                                height="auto"
                                rounded="lg"
                                padding={10}
                                textAlign="center"
                                key={index}
                            >
                                <Heading fontSize="3xl" fontWeight="normal">
                                    {capitalizeFirstLetter(data.className)}
                                </Heading>
                                <Text
                                    mt={5}
                                    fontWeight="light"
                                    textAlign="justify"
                                >
                                    {data.classInfo}
                                </Text>
                            </Box>
                        );
                    })}
                </SimpleGrid>
            </Flex>
        </Flex>
    );
};

export default Classes;
