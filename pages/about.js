import { profileData, EmployeeData } from '@/components/home/ContentData';
import Employee from '@/components/shared/Employee';
import Hero from '@/components/shared/Hero';
import SubEmployee from '@/components/shared/SubEmployee';
import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import athayogOnline from 'public/athayogOnline.jpg';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const About = () => {
     const { profiles } = profileData;
     const { employees } = EmployeeData;
     return (
          <>
               <Flex
                    position="relative"
                    height="100vh"
                    justifyContent="center"
                    alignItems="center"
               >
                    <Image
                         layout="fill"
                         objectFit="cover"
                         priority={true}
                         key="1"
                         className="object-center object-cover pointer-events-none"
                         src={athayogOnline}
                         alt="space"
                    />
               </Flex>
               <Flex
                    margin="auto"
                    padding="5rem 0"
                    justifyContent="center"
                    alignItems="center"
                    bg="#fbfbfb"
                    direction="column"
               >
                    <Heading textAlign="center" fontWeight="normal">
                         Who we are?
                    </Heading>
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
          </>
     );
};

export default About;
