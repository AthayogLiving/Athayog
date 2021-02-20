import { Button, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
     FiHome,
     FiUsers,
     FiFileText,
     FiCalendar,
     FiImage,
     FiGithub
} from 'react-icons/fi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { VscFeedback, VscPreview } from 'react-icons/vsc';

function Sidebar() {
     const router = useRouter();
     const bg = useColorModeValue('white', 'gray.800');
     const color = useColorModeValue('black', 'gray.100');

     return (
          <Flex
               direction="column"
               justifyContent="flex-start"
               boxSize="border-box"
               color={color}
               alignItems="flex-start"
               boxShadow="base"
               px={5}
               py={10}
               h="100%"
               bg={bg}
               width="100%"
               position="sticky"
          >
               <Flex
                    color={color}
                    fontSize="lg"
                    fontWeight="500"
                    bg={bg}
                    cursor="pointer"
                    mb={10}
                    textAlign="center"
                    width="100%"
                    d="flex"
                    justifyContent="center"
                    alignItems="center"
               >
                    <Text>Athayog</Text>
               </Flex>

               <Text
                    color={color}
                    fontSize="sm"
                    fontWeight="bold"
                    pl={2}
                    mb={2}
                    ml={2}
               >
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
                    <Link href="/admin/dashboard" width="100%">
                         <Button
                              width="100%"
                              fontSize="sm"
                              d="flex"
                              variant="ghost"
                              colorScheme="teal"
                              isActive={
                                   router.pathname == '/admin/dashboard'
                                        ? true
                                        : ''
                              }
                              leftIcon={<FiHome />}
                              rounded="lg"
                              justifyContent="flex-start"
                         >
                              Dashboard
                         </Button>
                    </Link>
               </Stack>

               <Text
                    color={color}
                    fontWeight="bold"
                    fontSize="sm"
                    pl={2}
                    mb={2}
                    ml={2}
               >
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
                    <Link href="/admin/customers" width="100%">
                         <Button
                              colorScheme="teal"
                              variant="ghost"
                              isActive={
                                   router.pathname == '/admin/customers'
                                        ? true
                                        : ''
                              }
                              width="100%"
                              fontSize="sm"
                              rounded="lg"
                              d="flex"
                              justifyContent="flex-start"
                              leftIcon={<FiUsers />}
                         >
                              Customers
                         </Button>
                    </Link>
                    <Link href="/admin/users" width="100%">
                         <Button
                              colorScheme="teal"
                              variant="ghost"
                              isActive={
                                   router.pathname == '/admin/users' ? true : ''
                              }
                              width="100%"
                              fontSize="sm"
                              rounded="lg"
                              d="flex"
                              justifyContent="flex-start"
                              leftIcon={<FiGithub />}
                         >
                              Admins
                         </Button>
                    </Link>
                    <Link href="/admin/forms" width="100%">
                         <Button
                              isActive={
                                   router.pathname == '/admin/forms' ? true : ''
                              }
                              width="100%"
                              fontSize="sm"
                              rounded="lg"
                              colorScheme="teal"
                              variant="ghost"
                              d="flex"
                              justifyContent="flex-start"
                              leftIcon={<FiFileText />}
                         >
                              Forms
                         </Button>
                    </Link>
               </Stack>
               <Text
                    color={color}
                    fontWeight="bold"
                    fontSize="sm"
                    pl={2}
                    mb={2}
                    ml={2}
               >
                    Payment
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
                    <Link href="/admin/payment" width="100%">
                         <Button
                              isActive={
                                   router.pathname == '/admin/payment'
                                        ? true
                                        : ''
                              }
                              d="flex"
                              colorScheme="teal"
                              variant="ghost"
                              justifyContent="flex-start"
                              width="100%"
                              fontSize="sm"
                              rounded="lg"
                              leftIcon={<FiCalendar />}
                         >
                              Payment
                         </Button>
                    </Link>
               </Stack>

               <Text
                    color={color}
                    fontWeight="bold"
                    fontSize="sm"
                    pl={2}
                    mb={2}
                    ml={2}
               >
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
                    <Link href="/admin/schedule" width="100%">
                         <Button
                              isActive={
                                   router.pathname == '/admin/schedule'
                                        ? true
                                        : ''
                              }
                              d="flex"
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
                    </Link>

                    <Link href="/admin/images" width="100%">
                         <Button
                              colorScheme="teal"
                              variant="ghost"
                              isActive={
                                   router.pathname == '/admin/images'
                                        ? true
                                        : ''
                              }
                              width="100%"
                              fontSize="sm"
                              rounded="lg"
                              d="flex"
                              justifyContent="flex-start"
                              leftIcon={<FiImage />}
                         >
                              Images
                         </Button>
                    </Link>
                    <Link href="/admin/testimonials" width="100%">
                         <Button
                              colorScheme="teal"
                              variant="ghost"
                              isActive={
                                   router.pathname == '/admin/testimonials'
                                        ? true
                                        : ''
                              }
                              width="100%"
                              fontSize="sm"
                              rounded="lg"
                              d="flex"
                              justifyContent="flex-start"
                              leftIcon={<VscFeedback />}
                         >
                              Testimonials
                         </Button>
                    </Link>
                    <Link href="/admin/offerings" width="100%">
                         <Button
                              colorScheme="teal"
                              variant="ghost"
                              isActive={
                                   router.pathname.match('/admin/offerings')
                                        ? true
                                        : ''
                              }
                              width="100%"
                              fontSize="sm"
                              rounded="lg"
                              d="flex"
                              justifyContent="flex-start"
                              leftIcon={<VscPreview />}
                         >
                              Offerings
                         </Button>
                    </Link>
               </Stack>
          </Flex>
     );
}

export default Sidebar;
