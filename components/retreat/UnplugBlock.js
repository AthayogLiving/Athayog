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
import RetreatUnplug from 'public/retreat-join.jpg';

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
                    <Box
                         zIndex={-1}
                         title={`Photo by <a href="https://unsplash.com/@simonmigaj?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">S Migaj</a> on <a href="https://unsplash.com/s/photos/yoga?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  `}
                    >
                         <Image
                              src={RetreatUnplug}
                              layout="fill"
                              objectFit="cover"
                              alt="Hero"
                              placeholder="blur"
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
