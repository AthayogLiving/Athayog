import { useAuth } from '@/lib/auth';
import { useState, useEffect } from 'react';
import DashboardShell from '@/components/admin/DashboardShell';
import {
     Box,
     Heading,
     Stack,
     Skeleton,
     SkeletonCircle,
     SkeletonText,
     Flex,
     Grid,
     GridItem
} from '@chakra-ui/react';

const dashboard = () => {
     const { user, signout, loading } = useAuth();

     return (
          <Box>
               <Grid
                    h="200px"
                    templateColumns="repeat(5, auto)"
                    templateRows="repeat(2, 50px auto)"
               >
                    <GridItem colSpan={1} rowSpan={2} bg="white"></GridItem>
                    <GridItem colSpan={4} bg="gray.200">
                         <DashboardShell user={user} signout={signout} />
                    </GridItem>
                    <GridItem colSpan={4} bg="gray.100">
                         <Flex justifyContent="column">
                              <Flex>
                                   <Skeleton isLoaded={!loading}>
                                        <Heading> Hi {user?.email}</Heading>
                                   </Skeleton>
                              </Flex>
                         </Flex>
                    </GridItem>
               </Grid>
          </Box>
     );
};

export default dashboard;
