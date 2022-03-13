import { Box, Center, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { offeringsData } from '@/components/home/ContentData';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { MotionBox } from '../shared/MotionElements';

const Offerings = () => {
     return (
          <Box height="100%" bg="gray.100" width="100%">
               <Box maxW="95vw" py={20} margin="0 auto">
                    <Heading as="h3" fontSize="3xl">
                         Our Offerings
                    </Heading>

                    <Box width="100%" margin="auto">
                         <Grid
                              marginTop={{
                                   base: '8',
                                   md: '8',
                                   lg: '8'
                              }}
                              gridGap="1rem"
                              width="100%"
                              gridTemplateColumns="repeat(auto-fit, minmax(220px, 1fr))"
                              alignItems="start"
                         >
                              {offeringsData.offering.map((offer, index) => {
                                   return (
                                        <Link href={offer.link} key={uuidv4()}>
                                             <Flex
                                                  direction="column"
                                                  justifyContent="strech"
                                                  alignItems="space-between"
                                                  cursor="pointer"
                                                  boxShadow="md"
                                                  height="100%"
                                                  width="100%"
                                                  bg="white"
                                                  rounded="md"
                                                  overflow="hidden"
                                             >
                                                  <MotionBox
                                                       height="150px"
                                                       width="100%"
                                                       overflow="hidden"
                                                       borderColor="primaryGreen"
                                                  >
                                                       <Image
                                                            src={offer.image}
                                                            alt={offer.name}
                                                            layout="responsive"
                                                            objectFit="cover"
                                                            height="150px"
                                                            width="250px"
                                                       />
                                                  </MotionBox>
                                                  <Box px={5} py={3}>
                                                       <Text
                                                            fontSize="lg"
                                                            fontWeight="bold"
                                                            color="gray.700"
                                                       >
                                                            Athayog {offer.name}
                                                       </Text>
                                                       <Text
                                                            mt={2}
                                                            color="primaryDarkGray"
                                                       >
                                                            {offer.information}
                                                       </Text>
                                                  </Box>
                                             </Flex>
                                        </Link>
                                   );
                              })}
                         </Grid>
                    </Box>
               </Box>
          </Box>
     );
};

export default Offerings;
