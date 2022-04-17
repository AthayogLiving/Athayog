import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
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
               <Stack spacing={5}>
                    <Text fontSize="xl">Only limited spots available</Text>
                    <Button
                         colorScheme="whiteAlpha"
                         variant="outline"
                         margin="0 auto"
                         rounded="none"
                    >
                         Register Now
                    </Button>
               </Stack>
          </Flex>
     );
}

export default Register;
