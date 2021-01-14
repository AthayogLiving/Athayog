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
     FaImage,
     FaRegSnowflake,
     FaChalkboardTeacher,
     FaBook,
     FaCog
} from 'react-icons/fa';

function DashboardSidebar() {
     return (
          <Flex
               direction="column"
               justifyContent="space-between"
               boxSize="border-box"
               color="white"
               alignItems="center"
               py={10}
               h="100%"
               bg="white"
               boxShadow="md"
               rounded="lg"
               width="100%"
          >
               <Text
                    color="teal.700"
                    fontSize="xl"
                    fontWeight="500"
                    cursor="pointer"
               >
                    Athayog Living
               </Text>

               <Stack
                    direction="column"
                    width="100%"
                    spacing={6}
                    align="center"
                    justifyContent="center"
               >
                    <Button
                         colorScheme="teal"
                         variant="ghost"
                         width="80%"
                         paddingLeft={6}
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FaHome size="1.1rem" />}
                    >
                         Dashboard
                    </Button>
                    <Button
                         colorScheme="teal"
                         variant="ghost"
                         width="80%"
                         paddingLeft={6}
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FaUserCircle size="1.1rem" />}
                    >
                         Users
                    </Button>
                    <Button
                         variant="ghost"
                         width="80%"
                         colorScheme="teal"
                         paddingLeft={6}
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FaWpforms size="1.1rem" />}
                    >
                         Forms
                    </Button>
                    <Button
                         variant="ghost"
                         as="flex"
                         colorScheme="teal"
                         paddingLeft={6}
                         justifyContent="flex-start"
                         width="80%"
                         leftIcon={<FaCalendarAlt size="1.1rem" />}
                    >
                         Schedule
                    </Button>
                    <Button
                         colorScheme="teal"
                         variant="ghost"
                         width="80%"
                         paddingLeft={6}
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FaImage size="1.1rem" />}
                    >
                         Images
                    </Button>
                    <Button
                         colorScheme="teal"
                         variant="ghost"
                         width="80%"
                         paddingLeft={6}
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FaChalkboardTeacher size="1.1rem" />}
                    >
                         Classes
                    </Button>
                    <Button
                         colorScheme="teal"
                         variant="ghost"
                         width="80%"
                         paddingLeft={6}
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FaBook size="1.1rem" />}
                    >
                         Courses
                    </Button>
               </Stack>

               <Stack
                    direction="column"
                    width="100%"
                    spacing={6}
                    align="center"
                    justifyContent="center"
               >
                    <Button
                         colorScheme="teal"
                         variant="ghost"
                         width="80%"
                         paddingLeft={6}
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FaCog size="1.1rem" />}
                    >
                         Settings
                    </Button>
               </Stack>
          </Flex>
     );
}

export default DashboardSidebar;
