import Hero from '@/components/shared/Hero';
import { motion } from 'framer-motion';
import React from 'react';
import athayogOnline from 'public/athayogOnline.jpg';
import Information from '@/components/shared/Information';
import Pricing from '@/components/shared/Pricing';
import { getOffer } from '@/lib/db/offerings';
import HomeLayout from '@/components/layout/HomeLayout';
import Schedule from '@/components/shared/Schedule';
import {
     Table,
     Thead,
     Tbody,
     Tfoot,
     Tr,
     Th,
     Td,
     TableCaption,
     Heading,
     Flex,
     Box,
     Text
} from '@chakra-ui/react';
import OnlineCourses from '@/components/shared/OnlineCourses';
export async function getStaticProps(context) {
     const { offers } = await getOffer('online');

     if (!offers) {
          return {
               notFound: true
          };
     }
     return {
          props: {
               offers: JSON.parse(JSON.stringify(offers)),
               notFound: false
          },
          revalidate: 1
     };
}

const Online = ({ offers, notFound }) => {
     const pageData = {
          name: 'Online',
          heroImage: athayogOnline,
          whatis: `You may be looking to keep your practice going at a steady pace but are unsure about stepping out in the midst of the pandemic. With AthaYog Online, you can continue from the comfort of your own space.`
     };

     const apiPricing = [];
     offers.map((data) => {
          if (data.isActive) {
               apiPricing.push({
                    id: data.id,
                    courseName: data.name,
                    description: data.description,
                    duration: data.isTrial
                         ? data.days + ' Days Trial'
                         : data.days + ' Days',
                    isTrial: data.isTrial,
                    durationNum: data.days,
                    price: data.price
               });
          }
     });
     return (
          <motion.div
               exit={{ opacity: 0 }}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
          >
               <Hero pageData={pageData} />
               {/* <Information pageData={pageData} /> */}
               {/* <OnlineCourses /> */}
               <Flex
                    margin="auto"
                    padding={{ base: '2rem 0', md: '3rem 0', lg: '5rem 0' }}
                    justifyContent="center"
                    alignItems="center"
                    width="100vw"
                    bg="primaryWhite"
               >
                    <Flex
                         justifyContent="center"
                         direction="column"
                         alignItems="center"
                         width={{ base: '95%', md: '90%', lg: '80%' }}
                    >
                         <Heading
                              fontWeight="normal"
                              fontSize={{ base: '2xl', md: '3xl' }}
                         >
                              Schedule
                         </Heading>
                         <Box
                              overflowX="auto"
                              width="100%"
                              boxShadow="base"
                              rounded="lg"
                              mt={10}
                         >
                              <Table
                                   variant="simple"
                                   size="md"
                                   bg="white"
                                   colorScheme="aygreen"
                                   className="scheduleTable"
                              >
                                   <Thead>
                                        <Tr>
                                             <Th bg="aygreen.200">Time</Th>
                                             <Th bg="aygreen.200">Monday</Th>
                                             <Th bg="aygreen.200">Tuesday</Th>
                                             <Th bg="aygreen.200">Wednesday</Th>
                                             <Th bg="aygreen.200">Thursday</Th>
                                             <Th bg="aygreen.200">Friday</Th>
                                             <Th bg="aygreen.200">Saturday</Th>
                                             <Th bg="aygreen.200">Sunday</Th>
                                        </Tr>
                                   </Thead>
                                   <Tbody>
                                        <Tr>
                                             <Td bg="aygreen.100">
                                                  6.00 AM - 7.00 AM
                                             </Td>
                                             <Td>Transcending Transition </Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>---</Td>
                                             <Td>---</Td>
                                        </Tr>
                                        <Tr>
                                             <Td bg="aygreen.100">
                                                  7.00 AM - 8.00 AM
                                             </Td>
                                             <Td>Rhythm of Being </Td>
                                             <Td>Transcending Transition </Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Deep Space</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm of Being</Td>
                                        </Tr>
                                        <Tr>
                                             <Td bg="aygreen.100">
                                                  8:00 AM - 9:00 AM
                                             </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Universal Harmony- </Td>
                                        </Tr>
                                        <Tr>
                                             <Td bg="aygreen.100">
                                                  10:00 AM - 12:30 PM
                                             </Td>
                                             <Td>Shikshana Pada - Sharath</Td>
                                             <Td>Shikshana Pada - Sharath</Td>
                                             <Td>Shikshana Pada - Sharath</Td>
                                             <Td>Shikshana Pada - Sharath</Td>
                                             <Td>Shikshana Pada - Sharath</Td>
                                             <Td>---</Td>
                                             <Td>---</Td>
                                        </Tr>
                                        <Tr>
                                             <Td bg="aygreen.100">
                                                  4:00 PM - 5:00 PM
                                             </Td>
                                             <Td>Kids Yoga </Td>
                                             <Td>Kids Yoga </Td>
                                             <Td>Kids Yoga </Td>
                                             <Td>Kids Yoga </Td>
                                             <Td>Kids Yoga </Td>
                                             <Td>---</Td>
                                             <Td>---</Td>
                                        </Tr>
                                        <Tr>
                                             <Td bg="aygreen.100">
                                                  5:00 PM - 6:00 PM
                                             </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Deep space</Td>
                                             <Td>Universal Harmony</Td>
                                        </Tr>
                                        <Tr>
                                             <Td bg="aygreen.100">
                                                  6:00 PM - 7:00 PM
                                             </Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Deep space</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Transcending Transition</Td>
                                        </Tr>
                                        <Tr>
                                             <Td bg="aygreen.100">
                                                  7:00 PM - 8:00 PM
                                             </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Deep space</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>---</Td>
                                             <Td>---</Td>
                                        </Tr>
                                        <Tr>
                                             <Td bg="aygreen.100">
                                                  6:00 AM - 7:30 AM
                                             </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                        </Tr>
                                        <Tr>
                                             <Td bg="aygreen.100">
                                                  6:00 PM - 7:30 PM
                                             </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                        </Tr>
                                   </Tbody>
                              </Table>
                         </Box>

                         <Box
                              overflowX="auto"
                              width="100%"
                              boxShadow="base"
                              rounded="lg"
                              mt={10}
                         >
                              <Table
                                   variant="simple"
                                   size="md"
                                   bg="white"
                                   colorScheme="aygreen"
                                   className="scheduleTable"
                              >
                                   <Thead>
                                        <Tr>
                                             <Th bg="aygreen.200">Time</Th>
                                             <Th bg="aygreen.200">Monday</Th>
                                             <Th bg="aygreen.200">Tuesday</Th>
                                             <Th bg="aygreen.200">Wednesday</Th>
                                             <Th bg="aygreen.200">Thursday</Th>
                                             <Th bg="aygreen.200">Friday</Th>
                                             <Th bg="aygreen.200">Saturday</Th>
                                             <Th bg="aygreen.200">Sunday</Th>
                                        </Tr>
                                   </Thead>
                                   <Tbody>
                                        <Tr>
                                             <Td bg="aygreen.100">
                                                  6:00 AM - 7:30 AM
                                             </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                        </Tr>
                                        <Tr>
                                             <Td bg="aygreen.100">
                                                  6:00 PM - 7:30 PM
                                             </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                             <Td>Athayog sadhana </Td>
                                        </Tr>
                                   </Tbody>
                              </Table>
                         </Box>
                    </Flex>
               </Flex>

               <Pricing
                    pricing={apiPricing}
                    registerTo={pageData.name.toLocaleLowerCase()}
               />
          </motion.div>
     );
};

export default Online;
Online.Layout = HomeLayout;
