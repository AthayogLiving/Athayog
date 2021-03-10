import { profileData, EmployeeData } from '@/components/home/ContentData';
import Enquiry from '@/components/home/Enquiry';
import HomeLayout from '@/components/layout/HomeLayout';
import Employee from '@/components/shared/Employee';
import Hero from '@/components/shared/Hero';
import SubEmployee from '@/components/shared/SubEmployee';
import { Box, Divider, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import athayogOnline from 'public/athayogOnline.jpg';
import React from 'react';

const About = () => {
     const { profiles } = profileData;
     const { employees } = EmployeeData;
     const pageData = {
          name: 'About Us',
          heroImage: athayogOnline,
          whatis: `AthaYog Living is an institution of Yog (Yoga) devoted to preserving the long-standing legacy of Yog by propagating the true purpose, philosophies and practices associated with this Yogic wisdom into your daily lives and embedding this ancient knowledge into the modern-day reality.`
     };
     return (
          <>
               <Hero pageData={pageData} />
               <Flex
                    margin="auto"
                    padding={{ base: '2rem 0', md: '3rem 0', lg: '5rem 0' }}
                    justifyContent="center"
                    alignItems="center"
                    width="60vw"
                    direction="column"
               >
                    <Text fontWeight="normal">
                         AthaYog Living is an institution of Yog (Yoga) devoted
                         to preserving the long-standing legacy of Yog by
                         propagating the true purpose, philosophies and
                         practices associated with this Yogic wisdom into your
                         daily lives and embedding this ancient knowledge into
                         the modern-day reality.
                    </Text>
                    <Text mt={10} fontWeight="light">
                         At AthaYog, our Yog (Yoga) studio embodies a sacred
                         space; an oasis of knowledge and truth, where one can
                         experience transformation, and is in the pursuit for
                         higher living. When you embrace a holistic, Yogic
                         lifestyle, there is a need to gain the right flow of
                         knowledge that can mould you into this way of life.
                         This is where we come in.
                    </Text>
               </Flex>

               <Flex
                    margin="auto"
                    padding={{ base: '2rem 0', md: '3rem 0', lg: '5rem 0' }}
                    justifyContent="center"
                    alignItems="center"
                    bg="primaryWhite"
                    width="100%"
                    direction="column"
               >
                    <Flex
                         width={{ base: '90%', md: '80%', lg: '80%' }}
                         textAlign="center"
                         flexDirection={{
                              base: 'column',
                              md: 'column',
                              lg: 'row'
                         }}
                    >
                         <Box>
                              <Heading
                                   fontSize={{
                                        base: '1.5rem',
                                        md: '2rem',
                                        lg: '2.2rem'
                                   }}
                              >
                                   WHAT WE DO
                              </Heading>
                              <Text mt={10} fontWeight="light">
                                   At AthaYog Living, we educate and illuminate
                                   you with a clear direction by sharing
                                   transformational tools that allow you to
                                   reconnect with your true nature. Supported by
                                   the pillars of ancient Yogic knowledge, we
                                   encourage change towards higher living.
                              </Text>
                         </Box>
                         <Box
                              mt={{
                                   base: 10,
                                   md: 10,
                                   lg: 0
                              }}
                         >
                              <Heading>WHY US?</Heading>
                              <Text mt={10} fontWeight="light">
                                   When you register with us, we offer free
                                   consultation by suggesting lifestyle changes
                                   to help you attain higher living, empowering
                                   you to progress on your journey by entrusting
                                   you to practice on your own. Embrace a
                                   complete, Yogic lifestyle with AthaYog
                                   Living.
                              </Text>
                         </Box>
                    </Flex>
               </Flex>

               <Flex
                    margin="auto"
                    padding={{ base: '2rem 0', md: '3rem 0', lg: '5rem 0' }}
                    justifyContent="center"
                    alignItems="center"
                    bg="#fbfbfb"
                    width="100%"
                    direction="column"
               >
                    <Heading
                         textAlign="center"
                         fontWeight="normal"
                         textTransform="uppercase"
                    >
                         Meet our team
                    </Heading>
                    <Text
                         mt={10}
                         width={{ base: '90%', md: '80%', lg: '60%' }}
                         fontWeight="light"
                    >
                         Our team is a diverse group of young, energetic and
                         dynamic individuals; our journeys stitched together,
                         interweaving on the quest for true Yogic knowledge. A
                         mutual faith in the institution of Yog, guides us onto
                         the path of truth and illuminates the way ahead.
                    </Text>
                    {profiles.map((data, index) => {
                         return (
                              <React.Fragment key={index}>
                                   <Employee {...data} />
                              </React.Fragment>
                         );
                    })}
               </Flex>
               <Divider width="80%" margin="auto" />
               <Grid
                    margin="auto"
                    padding={{
                         base: '2rem',
                         md: '3rem 5rem',
                         lg: '5rem 10rem'
                    }}
                    gridTemplateColumns={{
                         base: 'repeat(auto-fit, minmax(220px, 1fr))',
                         md: 'repeat(auto-fit, minmax(300px, 1fr))',
                         lg: 'repeat(auto-fit, minmax(500px, 1fr))'
                    }}
                    justifyContent="center"
                    gridGap="6rem"
                    alignItems="start"
                    bg="#fbfbfb"
               >
                    {employees.map((data, index) => {
                         return (
                              <Box key={index}>
                                   <SubEmployee {...data} />
                              </Box>
                         );
                    })}
               </Grid>
               <Enquiry />
          </>
     );
};

export default About;
About.Layout = HomeLayout;
