import {
     AspectRatio,
     Box,
     Flex,
     Grid,
     List,
     ListIcon,
     ListItem,
     Stack,
     Text
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import Register from './Register';

function UnplugBlock({ imageProps }) {
     return (
          <Grid
               gridTemplateColumns={{
                    md: 'repeat(1,1fr)',
                    lg: 'repeat(2,1fr)'
               }}
               direction={{ base: 'column', md: 'row' }}
               width="100%"
          >
               <Flex
                    justifyContent="center"
                    alignItems="center"
                    bgSize="cover"
                    width="full"
                    bgPosition="center"
                    direction="column"
                    textColor="white"
                    position="relative"
                    background="linear-gradient(to bottom,rgba(0,0,0,0.6) ,rgba(0,0,0,0.6))"
               >
                    <Box zIndex={-1}>
                         <Image
                              src={
                                   'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1219&q=80'
                              }
                              layout="fill"
                              objectFit="cover"
                              alt="hero"
                              placeholder="blur"
                              blurDataURL={imageProps}
                         />
                    </Box>

                    <Box
                         width={{ base: '100%' }}
                         position={{ base: 'relative' }}
                         textAlign="left"
                         p={{ base: '0', md: '10' }}
                    >
                         <Stack
                              spacing={5}
                              fontSize="lg"
                              p={{ base: 6, md: 10 }}
                              flex="1 1 auto"
                              alignSelf="center"
                         >
                              <Text fontWeight="bold" textTransform="uppercase">
                                   Unplug from daily life, evolve your spiritual
                                   practice with
                              </Text>
                              <List spacing={3}>
                                   <ListItem>
                                        <ListIcon
                                             as={MdCheckCircle}
                                             color="green.500"
                                        />
                                        Yoga
                                   </ListItem>
                                   <ListItem>
                                        <ListIcon
                                             as={MdCheckCircle}
                                             color="green.500"
                                        />
                                        Chanting
                                   </ListItem>
                                   <ListItem>
                                        <ListIcon
                                             as={MdCheckCircle}
                                             color="green.500"
                                        />
                                        Meditation
                                   </ListItem>
                                   <ListItem>
                                        <ListIcon
                                             as={MdCheckCircle}
                                             color="green.500"
                                        />
                                        Cleansing practices & more
                                   </ListItem>
                              </List>
                              <Text>
                                   Take a break to renew from the outer world
                                   and rebuild and reconnect with your inner
                                   life.
                              </Text>
                         </Stack>
                    </Box>
               </Flex>
               <Register />
          </Grid>
     );
}

export default UnplugBlock;
