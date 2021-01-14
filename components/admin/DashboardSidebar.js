import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

import {
     FaWpforms,
     FaHome,
     FaUserCircle,
     FaCalendarAlt,
     FaImage,
     FaChalkboardTeacher,
     FaBook,
     FaCog
} from 'react-icons/fa';
import BrandLogo from 'public/logo.png';

function DashboardSidebar() {
     return (
          <Flex
               direction="column"
               justifyContent="space-between"
               boxSize="border-box"
               color="white"
               // alignItems="center"
               py={10}
               h="100%"
               bg="white"
               boxShadow="md"
               rounded="lg"
               width="100%"
          >
               <Text
                    color="black"
                    fontSize="2xl"
                    fontWeight="700"
                    bg="white"
                    cursor="pointer"
                    paddingLeft={10}
               >
                    Athayog
               </Text>

               <Stack
                    direction="column"
                    width="100%"
                    spacing={6}
                    align="center"
                    justifyContent="center"
               >
                    <Button
                         color="gray.100"
                         variant="ghost"
                         width="80%"
                         paddingLeft={10}
                         _hover={{ bg: 'gray.600' }}
                         bg="gray.900"
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FaHome size="1.1rem" />}
                    >
                         Dashboard
                    </Button>
                    <Button
                         color="black"
                         variant="ghost"
                         width="80%"
                         paddingLeft={10}
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FaUserCircle size="1.1rem" />}
                    >
                         Users
                    </Button>
                    <Button
                         variant="ghost"
                         width="80%"
                         rounded="0"
                         color="black"
                         paddingLeft={10}
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FaWpforms size="1.1rem" />}
                    >
                         Forms
                    </Button>
                    <Button
                         variant="ghost"
                         as="flex"
                         color="black"
                         paddingLeft={10}
                         justifyContent="flex-start"
                         width="80%"
                         rounded="0"
                         leftIcon={<FaCalendarAlt size="1.1rem" />}
                    >
                         Schedule
                    </Button>
                    <Button
                         color="black"
                         variant="ghost"
                         width="80%"
                         rounded="0"
                         paddingLeft={10}
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FaImage size="1.1rem" />}
                    >
                         Images
                    </Button>
                    <Button
                         color="black"
                         variant="ghost"
                         width="80%"
                         rounded="0"
                         paddingLeft={10}
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FaChalkboardTeacher size="1.1rem" />}
                    >
                         Classes
                    </Button>
                    <Button
                         color="black"
                         variant="ghost"
                         width="80%"
                         rounded="0"
                         paddingLeft={10}
                         as="flex"
                         justifyContent="flex-start"
                         leftIcon={<FaBook size="1.1rem" />}
                    >
                         Courses
                    </Button>
               </Stack>

               <Stack
                    direction="column"
                    width="80%"
                    spacing={6}
                    align="center"
                    justifyContent="center"
               >
                    <Button
                         color="black"
                         variant="ghost"
                         width="80%"
                         rounded="0"
                         paddingLeft={10}
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
