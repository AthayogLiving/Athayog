import { Box, Center, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import defaultCarousel from '../../public/defaultCarousel.png';
import { offeringsData } from '@/components/home/ContentData';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { MotionBox } from '../shared/MotionElements';

import athayogSpace from 'public/athayogSpace.jpg';
import { data } from 'autoprefixer';
const Offerings = () => {
     return (
          <Box height="100%" bg="primaryWhite" width="100%">
               <Flex
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                    height="100%"
                    width="100%"
                    padding={{ base: '2rem 0', md: '5rem 0', lg: '5rem 0' }}
               >
                    <Heading
                         textAlign="center"
                         fontWeight="normal"
                         color="primaryDarkGray"
                    >
                         Our Offerings
                    </Heading>
                    <Box width="95%" margin="auto">
                         <Grid
                              marginTop={{
                                   base: '10',
                                   md: '20',
                                   lg: '20'
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
                                                  justifyContent="center"
                                                  alignItems="center"
                                                  cursor="pointer"
                                             >
                                                  <MotionBox
                                                       rounded="full"
                                                       height="150px"
                                                       width="150px"
                                                       overflow="hidden"
                                                       border="5px dotted"
                                                       borderColor="primaryGreen"
                                                       whileHover={{
                                                            scale: 1.1
                                                       }}
                                                       whileTap={{ scale: 0.9 }}
                                                  >
                                                       <Image
                                                            src={offer.image}
                                                            layout="responsive"
                                                            objectFit="cover"
                                                            height="150px"
                                                            width="150px"
                                                       />
                                                  </MotionBox>
                                                  <Text
                                                       mt={10}
                                                       fontSize="lg"
                                                       color="primaryDarkGray"
                                                  >
                                                       Athayog {offer.name}
                                                  </Text>
                                                  <Text
                                                       mt={5}
                                                       px="5"
                                                       color="primaryDarkGray"
                                                       textAlign="center"
                                                  >
                                                       {offer.information}
                                                  </Text>
                                             </Flex>
                                        </Link>
                                   );
                              })}
                         </Grid>
                    </Box>
               </Flex>
          </Box>
     );
};

export default Offerings;
