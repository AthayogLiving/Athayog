import {
     Box,
     Flex,
     Grid,
     List,
     ListIcon,
     ListItem,
     Stack,
     Text
} from '@chakra-ui/react';
import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import Location from './Location';

function JoinBlock() {
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
                    bgPosition="center"
                    width="full"
                    direction="column"
                    textColor="white"
                    position="relative"
                    bg="green.900"
               >
                    <Box
                         width="100%"
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
                                   Join us for an enriching weekend of Yoga
                                   practices which include
                              </Text>
                              <List spacing={3}>
                                   <ListItem>
                                        <ListIcon
                                             as={MdCheckCircle}
                                             color="green.500"
                                        />
                                        Asana
                                   </ListItem>
                                   <ListItem>
                                        <ListIcon
                                             as={MdCheckCircle}
                                             color="green.500"
                                        />
                                        Pranayama
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
                                        Lectures on Yoga
                                   </ListItem>
                                   <ListItem>
                                        <ListIcon
                                             as={MdCheckCircle}
                                             color="green.500"
                                        />
                                        Cleansing practices & more
                                   </ListItem>
                              </List>
                              <Text fontStyle="">
                                   In the lush green haven of Karnataka at Fig &
                                   Lily, Kanakapura.
                              </Text>
                         </Stack>
                    </Box>
               </Flex>
               <Location />
          </Grid>
     );
}

export default JoinBlock;
