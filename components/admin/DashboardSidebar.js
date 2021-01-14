import {
     Box,
     Button,
     Center,
     Divider,
     Flex,
     Grid,
     Spacer,
     Stack,
     Text
} from '@chakra-ui/react';
import Image from 'next/image';

import {
     FaWpforms,
     FaHome,
     FaUserCircle,
     FaCalendarAlt,
     FaImage
} from 'react-icons/fa';

function DashboardSidebar() {
     return (
          <Flex
               direction="column"
               justifyContent="flex-start"
               boxSize="border-box"
               color="black"
               alignItems="center"
               py={10}
               h="100%"
               bg="white"
               boxShadow="md"
               rounded="lg"
               width="100%"
          >
               <Text
                    color="black"
                    fontSize="xl"
                    fontWeight="bold"
                    cursor="pointer"
               >
                    Athayog Living
               </Text>

               <Stack
                    direction="column"
                    width="100%"
                    spacing={6}
                    mt={10}
                    align="center"
                    justifyContent="center"
               >
                    <Button
                         bg="indigo.600"
                         color="gray.200"
                         variant="solid"
                         width="80%"
                         paddingLeft={6}
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FaHome size="1.1rem" />}
                    >
                         Dashboard
                    </Button>
                    <Button
                         bg="white"
                         variant="solid"
                         color="gray.600"
                         width="80%"
                         paddingLeft={6}
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FaUserCircle size="1.1rem" />}
                    >
                         Users
                    </Button>
                    <Button
                         bg="white"
                         variant="solid"
                         width="80%"
                         color="gray.600"
                         paddingLeft={6}
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FaWpforms size="1.1rem" />}
                    >
                         Forms
                    </Button>
                    <Button
                         bg="white"
                         variant="solid"
                         as="flex"
                         color="gray.600"
                         paddingLeft={6}
                         justifyContent="flex-start"
                         width="80%"
                         leftIcon={<FaCalendarAlt size="1.1rem" />}
                    >
                         Schedule
                    </Button>
                    <Button
                         bg="white"
                         variant="solid"
                         width="80%"
                         color="gray.600"
                         paddingLeft={6}
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FaImage size="1.1rem" />}
                    >
                         Images
                    </Button>
               </Stack>
          </Flex>
     );
}

export default DashboardSidebar;
