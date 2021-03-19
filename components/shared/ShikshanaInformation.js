import React from 'react';

import {
     Box,
     Center,
     chakra,
     Flex,
     Heading,
     HStack,
     List,
     ListIcon,
     ListItem,
     OrderedList,
     Stack,
     Text,
     UnorderedList
} from '@chakra-ui/react';
const ShikshanaInformation = () => {
     return (
          <Flex
               margin="auto"
               padding={{
                    base: '2rem 0',
                    md: '3rem 0',
                    lg: '3rem 0'
               }}
               justifyContent="center"
               alignItems="center"
               width="100vw"
               bg="primaryWhite"
          >
               <Flex
                    justifyContent="center"
                    direction="column"
                    alignItems="flex-start"
                    width="80vw"
               >
                    <>
                         <Heading
                              fontWeight="normal"
                              fontSize={{
                                   base: '1.5rem',
                                   md: '2rem',
                                   lg: '2rem'
                              }}
                         >
                              Courses
                         </Heading>
                         <Flex
                              padding={{
                                   base: '1rem 0',
                                   md: '1rem 0',
                                   lg: '2rem 0'
                              }}
                              justifyContent="space-between"
                         >
                              <Stack spacing={2}>
                                   <Text
                                        fontWeight="light"
                                        textAlign="left"
                                        fontSize={{
                                             base: '1rem',
                                             md: '1rem',
                                             lg: '1.2rem'
                                        }}
                                   >
                                        <chakra.span fontWeight="medium">
                                             1. YIC
                                        </chakra.span>{' '}
                                        - Yoga Instructor course
                                   </Text>
                                   <Text>
                                        Athayog offers YIC course affiliated
                                        through VYASA, Bengaluru. The duration
                                        of the course is for 3 months and the
                                        course will help to transform the
                                        knowledge to be able to teach yoga
                                        independently with confidence and
                                        quality
                                   </Text>
                              </Stack>
                         </Flex>
                    </>

                    <Box mt={10}>
                         <Heading
                              fontWeight="normal"
                              fontSize={{
                                   base: '1.5rem',
                                   md: '2rem',
                                   lg: '2rem'
                              }}
                         >
                              Course Inclusion
                         </Heading>
                         <Flex
                              padding={{
                                   base: '1rem 0',
                                   md: '1rem 0',
                                   lg: '2rem 0'
                              }}
                              justifyContent="space-between"
                         >
                              <OrderedList spacing={20}>
                                   <HStack
                                        justifyContent="space-between"
                                        alignItems="flex-start"
                                        spacing={{
                                             base: 0,
                                             md: 20,
                                             lg: 20
                                        }}
                                        flexDirection={{
                                             base: 'column',
                                             md: 'row',
                                             lg: 'row'
                                        }}
                                   >
                                        <Box>
                                             <ListItem>
                                                  Classical Asanas
                                             </ListItem>
                                             <ListItem>Pranayama</ListItem>
                                             <ListItem>Yoga Nidra</ListItem>
                                             <ListItem>
                                                  Anatomy & Physiology
                                             </ListItem>
                                             <ListItem>Philosophy</ListItem>
                                             <ListItem>
                                                  Yoga Text / Yoga Sutra -
                                                  Bhagvatgita
                                             </ListItem>
                                             <ListItem>Ayurveda</ListItem>
                                        </Box>
                                        <Box>
                                             <ListItem>Shatkarma</ListItem>
                                             <ListItem>Chanting</ListItem>
                                             <ListItem>2 Days Retreat</ListItem>
                                             <ListItem>
                                                  Teaching Methodology
                                             </ListItem>
                                             <ListItem>
                                                  Class Apprenticeship
                                             </ListItem>
                                             <ListItem>Internship</ListItem>
                                             <ListItem>
                                                  Career Opportunity
                                             </ListItem>
                                        </Box>
                                   </HStack>
                              </OrderedList>
                         </Flex>
                    </Box>
               </Flex>
          </Flex>
     );
};

export default ShikshanaInformation;
