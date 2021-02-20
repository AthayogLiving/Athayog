import React from 'react';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { Grid, Spinner, Stack } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';

function Home() {
     // const { user } = useAuth();
     // const { data } = useSWR(
     //      user ? [`/api/user/details`, user.token] : null,
     //      fetcher
     // );
     // if (!data) {
     //      return (
     //           <Grid placeItems="center" mt={10}>
     //                <Spinner
     //                     thickness="4px"
     //                     speed="0.65s"
     //                     emptyColor="gray.200"
     //                     color="blue.500"
     //                     size="xl"
     //                />
     //           </Grid>
     //      );
     // }
     return <Stack d="flex" direction="row" spacing={5} width="100%"></Stack>;
}

export default Home;
