import Image from 'next/image';
import React from 'react';

import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Hero = (props) => {
    const { name, heroImage } = props.pageData;

    return (
        <Flex
            position="relative"
            height="100vh"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                height="100%"
                bg="linear-gradient(to bottom, rgba(0,0,0,0) 50%,rgba(0,0,0,0.5) 100%)"
                width="100%"
                zIndex={1}
            ></Box>
            <Box zIndex={2} position="absolute" bottom="0%">
                <Heading fontSize="5xl" color="white" fontWeight="medium">
                    <Text d="inline-block" mr={4} fontWeight="light">
                        ATHAYOG
                    </Text>
                    {name.toUpperCase()}
                </Heading>
                <Divider
                    width="80%"
                    m="auto"
                    height="2px"
                    mt={3}
                    bg="#fff"
                    border="none"
                />
                <ChevronDownIcon
                    color="white"
                    fontSize="3rem"
                    margin="1rem auto 0 auto"
                    width="100%"
                />
            </Box>

            <Image
                layout="fill"
                objectFit="cover"
                priority={true}
                key="1"
                className="object-center object-cover pointer-events-none"
                src={heroImage}
                alt="space"
            />
        </Flex>
    );
};

export default Hero;
