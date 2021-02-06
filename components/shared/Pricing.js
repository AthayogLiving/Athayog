import React from 'react';
import {
     Box,
     Button,
     Flex,
     Grid,
     Heading,
     SimpleGrid,
     Text
} from '@chakra-ui/react';
import { capitalizeFirstLetter } from '@/components/helper/Capitalize';

const Pricing = ({ pricing }) => {
     if (!pricing) {
          return null;
     }
     console.log('pricing', pricing);
     if (pricing === 'Contact For More') {
          return (
               <Flex
                    margin="auto"
                    padding="5rem 0"
                    justifyContent="center"
                    alignItems="center"
                    width="100vw"
                    bg="#fbfbfb"
               >
                    <Flex
                         justifyContent="center"
                         direction="column"
                         alignItems="center"
                         width="60vw"
                    >
                         <Heading
                              fontWeight="normal"
                              fontSize="xl"
                              fontStyle="italic"
                         >
                              Contact us for more information on customized
                              plans.
                         </Heading>
                    </Flex>
               </Flex>
          );
     }
     return (
          <Flex
               margin="auto"
               padding="5rem 0"
               justifyContent="center"
               alignItems="center"
               width="100vw"
               bg="#fbfbfb"
          >
               <Flex
                    justifyContent="center"
                    direction="column"
                    alignItems="center"
                    width="60vw"
               >
                    <Heading fontWeight="normal">Pricing</Heading>

                    <SimpleGrid
                         minChildWidth="300px"
                         spacing="20px"
                         width="100%"
                         mt={10}
                    >
                         {pricing.map((data, index) => {
                              return (
                                   <Box
                                        bg="aygreen.100"
                                        height="auto"
                                        rounded="lg"
                                        padding={8}
                                        textAlign="center"
                                        d="flex"
                                        flexDirection="column"
                                        key={index}
                                        justifyContent="space-between"
                                   >
                                        <Box>
                                             <Heading
                                                  fontSize="2xl"
                                                  fontWeight="normal"
                                                  textAlign="left"
                                             >
                                                  {capitalizeFirstLetter(
                                                       data.courseName
                                                  )}
                                             </Heading>
                                             <Text
                                                  mt={5}
                                                  fontWeight="light"
                                                  textAlign="left"
                                             >
                                                  {data.description}
                                             </Text>
                                        </Box>
                                        <Box>
                                             <Flex
                                                  justifyContent="space-between"
                                                  align="center"
                                                  mt={5}
                                             >
                                                  <Text fontSize="xl">
                                                       {data.duration}
                                                  </Text>
                                                  <Text fontSize="3xl">
                                                       ₹ {data.price}
                                                  </Text>
                                             </Flex>
                                             <Button
                                                  bg="aygreen.200"
                                                  width="8rem"
                                                  size="sm"
                                                  mt={4}
                                             >
                                                  Register
                                             </Button>
                                        </Box>
                                   </Box>
                              );
                         })}
                    </SimpleGrid>
               </Flex>
          </Flex>
     );
};

export default Pricing;
