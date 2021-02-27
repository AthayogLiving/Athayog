import React from 'react';
import {
     Stack,
     Stat,
     StatLabel,
     StatNumber,
     StatHelpText,
     StatArrow,
     StatGroup,
     useColorModeValue,
     Grid,
     Text,
     Spinner,
     Box,
     Link as ChakraLink,
     Flex
} from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import Link from 'next/link';

const Home = () => {
     const { user } = useAuth();
     const { data, error } = useSWR(
          user ? [`/api/admin/getAnalytics`, user.token] : null,
          fetcher,
          {
               refreshInterval: 100
          }
     );
     const bg = useColorModeValue('white', 'gray.800');
     if (error) {
          return (
               <Grid height="350px" placeItems="center">
                    <Text>Sorry Something Happend Try Again :(</Text>
               </Grid>
          );
     }

     if (!data) {
          return (
               <Grid height="350px" placeItems="center">
                    <Spinner />
               </Grid>
          );
     }

     if (data.usersAnalytics) {
          console.log(data);
     }

     return (
          <>
               <Stack
                    d="flex"
                    direction={['column', 'row']}
                    spacing={5}
                    width="100%"
               >
                    <Stat
                         bg={bg}
                         width={{ base: '100%', md: 'md', lg: 'md' }}
                         rounded="lg"
                         padding={5}
                         boxShadow="base"
                    >
                         <StatLabel>User Signed Up</StatLabel>
                         <StatNumber>{data?.usersAnalytics?.length}</StatNumber>
                         <StatHelpText>Last 24 Hours</StatHelpText>
                    </Stat>
                    <Stat
                         bg={bg}
                         width={{ base: '100%', md: 'md', lg: 'md' }}
                         rounded="lg"
                         padding={5}
                         boxShadow="base"
                    >
                         <StatLabel>Form Submitted</StatLabel>
                         <StatNumber>{data?.formAnalytics?.length}</StatNumber>
                         <StatHelpText>Last 24 Hours</StatHelpText>
                    </Stat>
                    <Stat
                         bg={bg}
                         width={{ base: '100%', md: 'md', lg: 'md' }}
                         rounded="lg"
                         padding={5}
                         boxShadow="base"
                    >
                         <StatLabel>Enquiry Form Submitted</StatLabel>
                         <StatNumber>
                              {data?.enquiryAnalytics?.length}
                         </StatNumber>
                         <StatHelpText>Last 24 Hours</StatHelpText>
                    </Stat>
               </Stack>
          </>
     );
};

export default Home;
