import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import {
     Avatar,
     Box,
     Flex,
     Heading,
     Skeleton,
     Text,
     useColorModeValue
} from '@chakra-ui/react';
import React from 'react';

const account = () => {
     const { user } = useAuth();
     const bg = useColorModeValue('white', 'gray.800');
     const color = useColorModeValue('teal', 'gray.700');

     if (!user) {
          return (
               <Dashboard>
                    <Skeleton>
                         <Box bg={bg} padding={6} rounded="lg" boxshadow="base">
                              <Flex>
                                   <Avatar size="2xl" />
                              </Flex>
                         </Box>
                    </Skeleton>
               </Dashboard>
          );
     }

     return (
          <Box bg={bg} padding={6} rounded="lg" boxshadow="base" width="md">
               <Flex direction="column">
                    <Avatar size="lg" name={user?.name} />
                    <Heading size="md" fontWeight="normal" mt={5}>
                         {user?.name}
                    </Heading>
                    <Text color="aygray.500">{user?.email}</Text>
                    <Text color="aygray.500">{user?.creationTime}</Text>
                    <Text color="aygray.500">{user?.lastSignInTime}</Text>
               </Flex>
          </Box>
     );
};

export default account;
account.Layout = DashboardLayout;
