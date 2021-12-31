import { Box, Button, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

function CTA({ registerTo }) {
     const router = useRouter();

     const callAction = () => {
          router.push({
               pathname: `/enquire/${registerTo}`
          });
     };
     return (
          <Flex width="100%" pb="5" justifyContent="center" alignItems="center">
               <Button
                    margin="0 auto"
                    onClick={() => callAction()}
                    colorScheme="teal"
                    textTransform="uppercase"
               >
                    Enquire Now
               </Button>
          </Flex>
     );
}

export default CTA;
