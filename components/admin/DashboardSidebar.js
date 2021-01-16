import { Button, Flex, Stack, Text } from '@chakra-ui/react';

import { useRouter } from 'next/router';
import Link from 'next/link';
import {
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
     const router = useRouter();
     console.log(router.pathname);
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
                    <Link href="dashboard" width="100%">
                         <Button
                              width="100%"
                              fontSize="sm"
                              borderLeft="blue.800"
                              as="flex"
                              variant="ghost"
                              colorScheme="teal"
                              isActive={
                                   router.pathname == '/admin/dashboard'
                                        ? true
                                        : ''
                              }
                              rounded="lg"
                              justifyContent="flex-start"
                              leftIcon={<FiHome />}
                         >
                              Dashboard
                         </Button>
                    </Link>
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
                    <Link href="users" width="100%">
                         <Button
                              colorScheme="teal"
                              variant="ghost"
                              isActive={
                                   router.pathname == '/admin/users' ? true : ''
                              }
                              width="100%"
                              fontSize="sm"
                              rounded="lg"
                              as="flex"
                              justifyContent="flex-start"
                              leftIcon={<FiUsers />}
                         >
                              Users
                         </Button>
                    </Link>
                    <Link href="forms" width="100%">
                         <Button
                              isActive={
                                   router.pathname == '/admin/forms' ? true : ''
                              }
                              width="100%"
                              fontSize="sm"
                              rounded="lg"
                              colorScheme="teal"
                              variant="ghost"
                              as="flex"
                              justifyContent="flex-start"
                              leftIcon={<FiFileText />}
                         >
                              Forms
                         </Button>
                    </Link>
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
                         isActive={
                              router.pathname == '/admin/schedule' ? true : ''
                         }
                         as="flex"
                         colorScheme="teal"
                         variant="ghost"
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
                         isActive={
                              router.pathname == '/admin/images' ? true : ''
                         }
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
                         isActive={
                              router.pathname == '/admin/classes' ? true : ''
                         }
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
                         isActive={
                              router.pathname == '/admin/courses' ? true : ''
                         }
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
