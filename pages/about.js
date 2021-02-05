import { profileData, EmployeeData } from '@/components/home/ContentData';
import Enquiry from '@/components/home/Enquiry';
import Employee from '@/components/shared/Employee';
import Hero from '@/components/shared/Hero';
import Information from '@/components/shared/Information';
import SubEmployee from '@/components/shared/SubEmployee';
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import athayogOnline from 'public/athayogOnline.jpg';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

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
                    padding="5rem 0"
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
                    padding="5rem 0"
                    justifyContent="center"
                    alignItems="center"
                    bg="primaryWhite"
                    direction="column"
               >
                    <Box width="60vw" textAlign="center">
                         <Heading>WHAT WE DO</Heading>
                         <Text mt={10} fontWeight="light">
                              At AthaYog Living, we educate and illuminate you
                              with a clear direction by sharing transformational
                              tools that allow you to reconnect with your true
                              nature. Supported by the pillars of ancient Yogic
                              knowledge, we encourage change towards higher
                              living.
                         </Text>
                    </Box>
               </Flex>

               <Flex
                    margin="auto"
                    padding="5rem 0"
                    justifyContent="center"
                    alignItems="center"
                    bg="white"
                    direction="column"
               >
                    <Box width="60vw" textAlign="center">
                         <Heading>WHY US?</Heading>
                         <Text mt={10} fontWeight="light">
                              When you register with us, we offer free
                              consultation by suggesting lifestyle changes to
                              help you attain higher living, empowering you to
                              progress on your journey by entrusting you to
                              practice on your own. Embrace a complete, Yogic
                              lifestyle with AthaYog Living.
                         </Text>
                    </Box>
               </Flex>

               <Flex
                    margin="auto"
                    padding="5rem 0"
                    justifyContent="center"
                    alignItems="center"
                    bg="#fbfbfb"
                    direction="column"
               >
                    <Heading
                         textAlign="center"
                         fontWeight="normal"
                         textTransform="uppercase"
                    >
                         Meet our team
                    </Heading>
                    <Text mt={10} width="60vw" fontWeight="light">
                         Our team is a diverse group of young, energetic and
                         dynamic individuals; our journeys stitched together,
                         interweaving on the quest for true Yogic knowledge. A
                         mutual faith in the institution of Yog, guides us onto
                         the path of truth and illuminates the way ahead.
                    </Text>
                    {profiles.map((data) => {
                         return <Employee {...data} />;
                    })}
               </Flex>
               <Divider width="80%" margin="auto" />
               <Flex
                    margin="auto"
                    padding="5rem 10rem"
                    justifyContent="center"
                    flexWrap="wrap"
                    alignItems="start"
                    bg="#fbfbfb"
                    direction="row"
               >
                    {employees.map((data) => {
                         return (
                              <Box flex="1 1 150px">
                                   <SubEmployee {...data} />
                              </Box>
                         );
                    })}
               </Flex>
               <Enquiry />
          </>
     );
};

export default About;
