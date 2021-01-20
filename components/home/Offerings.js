import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import defaultCarousel from '../../public/defaultCarousel.png';

const offeringsData = {
     offering: [
          {
               name: 'Space',
               information:
                    'Steve Austin: Astronaut. A man barely alive. Gentlemen... we can rebuild him. We have the technology. We have the capability to make the worlds first bionic man.'
          },
          {
               name: 'Chikitsa',
               information:
                    'The creature is wanted for a murder he didnt commit. David Banner is believed to be dead, and he must let the world think that he is dead, until he can find a way.'
          },
          {
               name: 'Shikshana Pada',
               information:
                    ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ni eveniet, enim corrupti distinctio sequi nesciunt velit voluptatem totam, aliquam amet?'
          },
          {
               name: 'Online',
               information:
                    ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ni eveniet, enim corrupti distinctio sequi nesciunt velit voluptatem totam, aliquam amet?'
          },
          {
               name: 'Personal Sessions',
               information:
                    ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ni eveniet, enim corrupti distinctio sequi nesciunt velit voluptatem totam, aliquam amet?'
          }
     ]
};
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
                                   <Flex
                                        direction="column"
                                        justifyContent="center"
                                        alignItems="center"
                                        width="sm"
                                        key={index}
                                   >
                                        <Box
                                             rounded="full"
                                             height="200px"
                                             width="200px"
                                             overflow="hidden"
                                             border="5px dotted"
                                             borderColor="primaryGreen"
                                        >
                                             <Image
                                                  src={defaultCarousel}
                                                  layout="responsive"
                                                  objectFit="cover"
                                                  height="200px"
                                                  width="200px"
                                             />
                                        </Box>
                                        <Text
                                             mt={10}
                                             fontSize="lg"
                                             color="primaryDarkGray"
                                        >
                                             {offer.name}
                                        </Text>
                                        <Text
                                             mt={5}
                                             px="5"
                                             color="primaryDarkGray"
                                        >
                                             {offer.information}
                                        </Text>
                                   </Flex>
                              );
                         })}
                    </Flex>
               </Flex>
          </Box>
     );
};

export default Offerings;
