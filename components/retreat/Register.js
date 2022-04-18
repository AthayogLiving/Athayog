import { Button, Flex, Stack, Text, Link } from '@chakra-ui/react';

import React from 'react';

function Register() {
     return (
          <Flex
               justifyContent="center"
               alignItems="center"
               p={{ base: 5, md: 10 }}
               width="100%"
               bg="green.900"
               flex="1 1 0"
               textColor="white"
          >
               <Stack spacing={5} alignItems="center">
                    <Text fontSize="xl">Only limited spots available</Text>
                    <Link
                         passHref
                         href="https://rzp.io/l/tDvi8Ww9z"
                         target="_blank"
                    >
                         <Button
                              colorScheme="whiteAlpha"
                              variant="outline"
                              margin="0 auto"
                              rounded="none"
                         >
                              Register Now
                         </Button>
                    </Link>
               </Stack>
          </Flex>
     );
}

export default Register;
