import React from 'react';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import {
     Box,
     Flex,
     Grid,
     Heading,
     Skeleton,
     Spinner,
     Stack,
     Text
} from '@chakra-ui/react';
import { FiFileText, FiUsers } from 'react-icons/fi';
import { useAuth } from '@/lib/auth';

function Home() {
     const { user } = useAuth();
     const { data } = useSWR(user ? [`/api/users`, user.token] : null, fetcher);
     if (!data) {
          return (
               <Grid placeItems="center" mt={10}>
                    <Spinner
                         thickness="4px"
                         speed="0.65s"
                         emptyColor="gray.200"
                         color="blue.500"
                         size="xl"
                    />
               </Grid>
          );
     }
     return (
          <Stack d="flex" direction="row" spacing={5} width="100%">
               {data.users ? (
                    <Box
                         padding={7}
                         boxShadow="base"
                         bg="white"
                         rounded="lg"
                         key={data.users.id}
                    >
                         <Flex alignItems="center" justifyContent="flex-start">
                              <Box bg="blue.100" padding={5} rounded="full">
                                   <FiUsers size="1.2rem" />
                              </Box>

                              <Box ml={8} lineHeight={0.8}>
                                   <Heading size="lg">
                                        {data.users ? data.users.length : '0'}
                                   </Heading>
                                   <Text color="gray.500" fontSize="sm">
                                        Total Users
                                   </Text>
                              </Box>
                         </Flex>
                    </Box>
               ) : null}
               {Array(3)
                    .fill()
                    .map((data, index) => {
                         return (
                              <Box
                                   padding={7}
                                   boxShadow="base"
                                   bg="white"
                                   rounded="lg"
                                   key={index}
                                   lineHeight={0.8}
                              >
                                   <Flex
                                        alignItems="center"
                                        justifyContent="flex-start"
                                   >
                                        <Box
                                             bg="purple.100"
                                             padding={5}
                                             rounded="full"
                                        >
                                             <FiFileText size="1.2rem" />
                                        </Box>

                                        <Box ml={8}>
                                             <Heading size="lg">2023</Heading>
                                             <Text
                                                  color="gray.500"
                                                  fontSize="sm"
                                             >
                                                  Forms Registered
                                             </Text>
                                        </Box>
                                   </Flex>
                              </Box>
                         );
                    })}
          </Stack>
     );
}

export default Home;
