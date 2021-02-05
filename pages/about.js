import Employee from '@/components/shared/Employee';
import Hero from '@/components/shared/Hero';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import athayogOnline from 'public/athayogOnline.jpg';
import React from 'react';

const About = () => {
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
                    <Employee />
               </Flex>
          </>
     );
};

export default About;
