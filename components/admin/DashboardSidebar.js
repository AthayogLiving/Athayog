import {
     Box,
     Center,
     Divider,
     Flex,
     Grid,
     Spacer,
     Text
} from '@chakra-ui/react';
import Image from 'next/image';

function DashboardSidebar() {
     return (
          <Flex
               direction="column"
               justifyContent="flex-start"
               boxSize="border-box"
               color="black"
               alignItems="strech"
               py={10}
               pl={10}
               h="100%"
               bg="white"
               boxShadow="md"
               rounded="lg"
          >
               <Text
                    color="black"
                    fontSize="xl"
                    fontWeight="bold"
                    cursor="pointer"
               >
                    Athayog Living
               </Text>

               <Grid templateRows="repeat(auto, 1fr)" gap={6} mt={10}>
                    <Text>Dashboard</Text>
                    <Text>Users</Text>
                    <Text>Schedule</Text>
                    <Text>Forms</Text>
                    <Text>Images</Text>
               </Grid>
          </Flex>
     );
}

export default DashboardSidebar;
