import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

import {
     FaWpforms,
     FaHome,
     FaUserCircle,
     FaCalendarAlt,
     FaImage,
     FaChalkboardTeacher,
     FaBook,
     FaCog,
     FiHome,
     FiUsers,
     FiFileText,
     FiCalendar,
     FiImage,
     FiMonitor,
     FiBook,
     FiTriangle
} from 'react-icons/fi';

function DashboardSidebar() {
     return (
          <Flex
               direction="column"
               justifyContent="flex-start"
               boxSize="border-box"
               color="white"
               alignItems="flex-start"
               px={5}
               py={10}
               h="100%"
               bg="#fff"
               width="100%"
               position="sticky"
          >
               <Flex
                    color="teal.800"
                    fontSize="lg"
                    fontWeight="500"
                    bg="white"
                    cursor="pointer"
                    mb={10}
                    textAlign="center"
                    width="100%"
                    d="flex"
                    pl={4}
                    alignItems="center"
               >
                    <FiTriangle color="teal.800" />
                    <Text ml={2}>Athayog</Text>
               </Flex>

               <Text color="teal.800" fontSize="sm" pl={2} mb={2} ml={2}>
                    Menu
               </Text>
               <Stack
                    direction="column"
                    width="100%"
                    spacing={2}
                    align="flex-start"
                    justifyContent="flex-start"
                    fontWeight="500"
                    mb={10}
               >
                    <Button
                         width="100%"
                         fontSize="sm"
                         borderLeft="blue.800"
                         as="flex"
                         colorScheme="teal"
                         rounded="lg"
                         justifyContent="flex-start"
                         leftIcon={<FiHome />}
                    >
                         Dashboard
                    </Button>
               </Stack>

               <Text color="teal.800" fontSize="sm" pl={2} mb={2} ml={2}>
                    Account
               </Text>
               <Stack
                    direction="column"
                    width="100%"
                    spacing={2}
                    align="flex-start"
                    justifyContent="flex-start"
                    fontWeight="500"
                    mb={10}
               >
                    <Button
                         colorScheme="teal"
                         variant="ghost"
                         width="100%"
                         fontSize="sm"
                         rounded="lg"
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FiUsers />}
                    >
                         Users
                    </Button>
                    <Button
                         variant="ghost"
                         width="100%"
                         fontSize="sm"
                         rounded="lg"
                         colorScheme="teal"
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FiFileText />}
                    >
                         Forms
                    </Button>
               </Stack>

               <Text color="teal.800" fontSize="sm" pl={2} mb={2} ml={2}>
                    Resources
               </Text>
               <Stack
                    direction="column"
                    width="100%"
                    spacing={2}
                    align="flex-start"
                    justifyContent="flex-start"
                    fontWeight="500"
                    mb={10}
               >
                    <Button
                         variant="ghost"
                         as="flex"
                         colorScheme="teal"
                         justifyContent="flex-start"
                         width="100%"
                         fontSize="sm"
                         rounded="lg"
                         leftIcon={<FiCalendar />}
                    >
                         Schedule
                    </Button>
                    <Button
                         colorScheme="teal"
                         variant="ghost"
                         width="100%"
                         fontSize="sm"
                         rounded="lg"
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FiImage />}
                    >
                         Images
                    </Button>
                    <Button
                         colorScheme="teal"
                         variant="ghost"
                         width="100%"
                         fontSize="sm"
                         rounded="lg"
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FiMonitor />}
                    >
                         Classes
                    </Button>
                    <Button
                         colorScheme="teal"
                         variant="ghost"
                         width="100%"
                         fontSize="sm"
                         rounded="lg"
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FiBook />}
                    >
                         Courses
                    </Button>
               </Stack>
          </Flex>
     );
}

export default DashboardSidebar;
