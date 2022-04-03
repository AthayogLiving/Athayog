import { Box, Button, Flex, Stack, StackDivider } from '@chakra-ui/react';
import React from 'react';

function RegisterNow() {
     return (
          <Stack
               border="1.5px solid"
               borderColor="gray.100"
               py="3"
               boxShadow="base"
               bg="white"
               px="5"
               display={{ base: 'none', md: 'none', lg: 'flex' }}
               rounded="base"
               spacing={{ base: '5', md: '8' }}
               width={{ base: '100%', lg: 'container.lg' }}
               position={{ base: 'relative', md: 'absolute' }}
               bottom={{ base: '0px', md: '-20px' }}
               divider={<StackDivider borderColor="gray.300" />}
               mt="8"
               align={{ base: 'baseline', md: 'center' }}
               justifyContent={{
                    base: 'space-between',
                    md: 'space-evenly'
               }}
               direction={{ base: 'column', md: 'row' }}
          >
               <Flex direction="column" alignItems="center">
                    <Button variant="solid" colorScheme="green" href="">
                         Register Now
                    </Button>
               </Flex>
               <Flex direction="column">
                    <Box textColor="gray.600">Age</Box>{' '}
                    <Box textColor="gray.900" fontWeight="medium">
                         6 - 11yr
                    </Box>
               </Flex>
               <Flex direction="column">
                    <Box textColor="gray.600">Date</Box>{' '}
                    <Box textColor="gray.900" fontWeight="medium">
                         2nd May - 13th May
                    </Box>
               </Flex>
               <Flex direction="column">
                    <Box textColor="gray.600">Time</Box>{' '}
                    <Box textColor="gray.900" fontWeight="medium">
                         11am - 1pm{' '}
                    </Box>
               </Flex>
               <Flex direction="column">
                    <Box textColor="gray.600">Location</Box>
                    <Box textColor="gray.900" fontWeight="medium">
                         Indiranagar / KR Puram / Online
                    </Box>
               </Flex>
          </Stack>
     );
}

export default RegisterNow;
