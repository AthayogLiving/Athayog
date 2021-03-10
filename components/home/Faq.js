import {
     Box,
     Flex,
     Heading,
     Accordion,
     AccordionItem,
     AccordionButton,
     AccordionPanel,
     AccordionIcon
} from '@chakra-ui/react';
import React from 'react';
import { Faqs } from '@/components/home/ContentData';
import { v4 as uuidv4 } from 'uuid';

const Faq = () => {
     const { faq } = Faqs;

     return (
          <Box height="100%" bg="#f9f9f9">
               <Flex
                    alignItems="center"
                    justifyContent="flex-start"
                    direction="column"
                    height="100%"
                    width="100%"
               >
                    <Box mt="5%" mb="5%">
                         <Heading
                              textAlign="center"
                              fontWeight="normal"
                              fontSize={{ base: '2xl', md: '3xl' }}
                              color="primaryDarkGray"
                         >
                              FAQ
                         </Heading>
                         <Flex
                              justifyContent="space-around"
                              alignItems="flex-start"
                              mt={{ base: '5', md: '8', lg: '10' }}
                              width={{ base: '95vw', md: '80vw', lg: '60vw' }}
                              bg="white"
                              padding={{ base: '5', md: '8', lg: '10' }}
                              rounded="lg"
                              boxShadow="base"
                         >
                              <Accordion
                                   width="100%"
                                   border="1px"
                                   borderColor="gray.100"
                              >
                                   {faq.map((data, index) => {
                                        return (
                                             <AccordionItem key={uuidv4()}>
                                                  <AccordionButton
                                                       _expanded={{
                                                            bg: 'aygreen.100'
                                                       }}
                                                  >
                                                       <Box
                                                            flex="1"
                                                            textAlign="left"
                                                       >
                                                            {data.question}
                                                       </Box>
                                                       <AccordionIcon />
                                                  </AccordionButton>
                                                  <AccordionPanel
                                                       pb={{
                                                            base: '2',
                                                            md: '3',
                                                            lg: '4'
                                                       }}
                                                       bg="aygreen.50"
                                                  >
                                                       {data.answer}
                                                  </AccordionPanel>
                                             </AccordionItem>
                                        );
                                   })}
                              </Accordion>
                         </Flex>
                    </Box>
               </Flex>
          </Box>
     );
};

export default Faq;
