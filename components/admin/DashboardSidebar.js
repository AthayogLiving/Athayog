import { Box, Center, Flex, Spacer, Text } from '@chakra-ui/react';

function DashboardSidebar() {
     return (
          <Flex
               direction="column"
               justifyContent="space-evenly"
               boxSize="border-box"
               color="white"
               alignItems="strech"
               py={10}
               pl={10}
          >
               <Text color="white" fontSize="xl" fontWeight="medium">
                    Dashboard
               </Text>

               <Spacer />

               <Text color="blue.100">User</Text>
          </Flex>
     );
}

export default DashboardSidebar;
