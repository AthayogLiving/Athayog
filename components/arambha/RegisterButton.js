import {
     Box,
     Button,
     Container,
     Flex,
     useBreakpointValue
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

function RegisterButton() {
     const buttonSize = useBreakpointValue(['sm', 'md']);
     return (
          <Box bg="gray.50" width="full">
               <Flex
                    p={{ base: '5', md: '5', lg: '10' }}
                    justifyContent="center"
                    width="full"
                    alignItems="center"
               >
                    {' '}
                    <Link href="/yoga-day/register" passHref>
                         <Button
                              size={buttonSize}
                              colorScheme="aygreen"
                              rounded="none"
                              maxW="max-content"
                         >
                              REGISTER NOW! - FREE AND OPEN TO ALL
                         </Button>
                    </Link>
               </Flex>
          </Box>
     );
}

export default RegisterButton;
