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
                              color="primaryDarkGray"
                         >
                              Faq
                         </Heading>
                         <Flex
                              justifyContent="space-around"
                              alignItems="flex-start"
                              mt={10}
                              width="50vw"
                              bg="white"
                              padding={10}
                              rounded="lg"
                              boxShadow="base"
                         >
                              <Accordion
                                   width="100%"
                                   border="1px"
                                   borderColor="gray.100"
                              >
                                   {faq.map((data) => {
                                        return (
                                             <AccordionItem>
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
                                                       pb={4}
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
