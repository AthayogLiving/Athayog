import React from 'react';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { Box, Flex, Heading, Skeleton, Stack, Text } from '@chakra-ui/react';
import { FiFileText, FiUsers } from 'react-icons/fi';

function Home() {
     const { data } = useSWR('/api/users', fetcher);
     if (!data) {
          return (
               <Stack d="flex" direction="row" spacing={5} width="100%">
                    <Skeleton
                         padding={5}
                         boxShadow="base"
                         width="fit-content"
                         bg="white"
                         rounded="lg"
                         height="6rem"
                         width="100%"
                    ></Skeleton>
               </Stack>
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
                    .map((data) => {
                         return (
                              <Box
                                   padding={7}
                                   boxShadow="base"
                                   bg="white"
                                   rounded="lg"
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
