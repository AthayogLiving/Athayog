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
     return <Stack d="flex" direction="row" spacing={5} width="100%"></Stack>;
}

export default Home;
