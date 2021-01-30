import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import defaultCarousel from '../../public/defaultCarousel.png';
import { offeringsData } from '@/components/home/ContentData';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { MotionBox } from '../shared/MotionElements';
import athayogChikitsa from 'public/athayogChikitsa.jpeg';
import athayogPersonal from 'public/athayogPersonal.jpg';
import athayogShikshana from 'public/athayogShikshana.jpg';
import athayogSpace from 'public/athayogSpace.jpg';
import athayogOnline from 'public/athayogOnline.jpg';

const Offerings = () => {
     return (
          <Box height="100vh" bg="primaryWhite">
               <Flex
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                    height="100%"
                    width="100%"
               >
                    <Heading
                         textAlign="center"
                         fontWeight="normal"
                         color="primaryDarkGray"
                    >
                         Our Offerings
                    </Heading>
                    <Flex
                         justifyContent="space-around"
                         alignItems="flex-start"
                         marginTop={20}
                         width="80vw"
                    >
                         {offeringsData.offering.map((offer, index) => {
                              return (
                                   <Link href={offer.link} key={uuidv4()}>
                                        <Flex
                                             direction="column"
                                             justifyContent="center"
                                             alignItems="center"
                                             width="sm"
                                             cursor="pointer"
                                        >
                                             <MotionBox
                                                  rounded="full"
                                                  height="200px"
                                                  width="200px"
                                                  overflow="hidden"
                                                  border="5px dotted"
                                                  borderColor="primaryGreen"
                                                  whileHover={{
                                                       scale: 1.1
                                                  }}
                                                  whileTap={{ scale: 0.9 }}
                                             >
                                                  <Image
                                                       src={athayogSpace}
                                                       layout="responsive"
                                                       objectFit="cover"
                                                       height="200px"
                                                       width="200px"
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
                    </Flex>
               </Flex>
          </Box>
     );
};

export default Offerings;
