import Hero from '@/components/arambha/Hero';
import Info from '@/components/arambha/Info';
import HomeLayout from '@/components/layout/HomeLayout';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

function YogaDay() {
     return (
          <div>
               <Head>
                    <title>Yoga Day - Arambha</title>
               </Head>
               <Hero />
               <Info />
               <Flex
                    justifyContent="center"
                    bg="green.900"
                    textColor="green.50"
                    p={10}
                    direction="column"
                    alignItems="center"
                    gap={6}
               >
                    <Text fontSize="xl">
                         Register now and celebrate International Day of Yoga
                         with us!
                    </Text>
                    <Link href="/yoga-day/register" passHref>
                         <Button
                              variant="outline"
                              maxW="xs"
                              colorScheme="whiteAplha"
                              rounded="none"
                         >
                              Register Now
                         </Button>
                    </Link>
               </Flex>
          </div>
     );
}

export default YogaDay;
YogaDay.Layout = HomeLayout;
