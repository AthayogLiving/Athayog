import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import EnquiryModal from './Enquiry/EnquiryModal';

const Enquiry = () => {
    return (
        <Box height="sm" bg="white">
            <Flex
                alignItems="center"
                justifyContent="center"
                direction="column"
                height="100%"
                width="100%"
            >
                <Heading
                    textAlign="center"
                    fontWeight="normal"
                    color="primaryDarkGray"
                >
                    Having an Enquiry? Reach out to us.
                </Heading>
                <EnquiryModal />
            </Flex>
        </Box>
    );
};

export default Enquiry;
