import {
    Box,
    Center,
    Flex,
    Heading,
    List,
    ListIcon,
    ListItem,
    OrderedList,
    Text,
    UnorderedList
} from '@chakra-ui/react';
import React from 'react';
import { IoMdCheckmarkCircle } from 'react-icons/io';

const Information = (props) => {
    const { name, whatis } = props.pageData;
    return (
        <Flex
            margin="auto"
            padding="5rem 0"
            justifyContent="center"
            alignItems="center"
            width="100vw"
            bg="primaryWhite"
        >
            <Flex
                justifyContent="center"
                direction="column"
                alignItems="center"
                width="80vw"
            >
                <Heading fontWeight="normal">What is AthaYog {name}</Heading>
                <Flex padding="2rem 0" justifyContent="space-between">
                    <Box width="45%">
                        <Text fontWeight="light" textAlign="left">
                            {whatis}
                        </Text>
                    </Box>
                    <Box width="45%">
                        <List spacing={3} fontWeight="light">
                            <ListItem>
                                <ListIcon
                                    as={IoMdCheckmarkCircle}
                                    color="green.500"
                                />
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={IoMdCheckmarkCircle}
                                    color="green.500"
                                />
                                Assumenda, quia temporibus eveniet a libero
                                incidunt suscipit
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={IoMdCheckmarkCircle}
                                    color="green.500"
                                />
                                Quidem, ipsam illum quis sed voluptatum quae eum
                                fugit earum
                            </ListItem>
                            {/* You can also use custom icons from react-icons */}
                            <ListItem>
                                <ListIcon
                                    as={IoMdCheckmarkCircle}
                                    color="green.500"
                                />
                                Quidem, ipsam illum quis sed voluptatum quae eum
                                fugit earum
                            </ListItem>
                        </List>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Information;
