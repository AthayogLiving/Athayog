import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';

const Register = ({ registerTo }) => {
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
                         Register Now.
                    </Heading>
                    <Link href={`/register/${registerTo}`}>
                         <Button
                              bg="aygreen.100"
                              color="primaryDarkGray"
                              variant="solid"
                              size="sm"
                              fontSize="md"
                              rounded="md"
                              mt={10}
                              px={10}
                              py={5}
                         >
                              Register
                         </Button>
                    </Link>
               </Flex>
          </Box>
     );
};

export default Register;
