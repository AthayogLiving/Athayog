import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

function ContactMore() {
     return (
          <Flex
               margin="auto"
               padding={{
                    base: '2rem 0',
                    md: '3rem 0',
                    lg: '5rem 0'
               }}
               justifyContent="center"
               alignItems="center"
               width="100vw"
               bg="#fbfbfb"
          >
               <Flex
                    justifyContent="center"
                    direction="column"
                    alignItems="center"
                    width="60%"
               >
                    <Heading
                         fontWeight="normal"
                         fontSize="xl"
                         fontStyle="italic"
                    >
                         Contact us for more information
                    </Heading>
               </Flex>
          </Flex>
     );
}

export default ContactMore;
