import {
     Button,
     Flex,
     Menu,
     MenuButton,
     MenuItem,
     MenuList,
     Stack,
     Text,
     useColorModeValue
} from '@chakra-ui/react';
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
import { ChevronDownIcon } from '@chakra-ui/icons';

function Sidebar() {
     const router = useRouter();
     const bg = useColorModeValue('white', 'gray.800');
     const color = useColorModeValue('black', 'gray.100');

     return (
          <Flex
               direction="row"
               boxSize="border-box"
               color={color}
               alignItems="center"
               boxShadow="base"
               py={3}
               px={10}
               bg={bg}
               gap={10}
               width="100%"
          >
               <Link href="/admin/dashboard" passHref>
                    <Button
                         width="100%"
                         fontSize="sm"
                         d="flex"
                         variant="ghost"
                         colorScheme="teal"
                         maxW="max-content"
                         isActive={
                              router.pathname == '/admin/dashboard' ? true : ''
                         }
                         leftIcon={<FiHome />}
                         rounded="base"
                         justifyContent="flex-start"
                    >
                         Dashboard
                    </Button>
               </Link>
               <Link href="/admin/forms" passHref>
                    <Button
                         isActive={
                              router.pathname == '/admin/forms' ? true : ''
                         }
                         width="100%"
                         fontSize="sm"
                         rounded="base"
                         maxW="max-content"
                         colorScheme="teal"
                         variant="ghost"
                         d="flex"
                         justifyContent="flex-start"
                         leftIcon={<FiFileText />}
                    >
                         Forms
                    </Button>
               </Link>
               <Link href="/admin/customers" passHref>
                    <Button
                         colorScheme="teal"
                         variant="ghost"
                         isActive={
                              router.pathname == '/admin/customers' ? true : ''
                         }
                         maxW="max-content"
                         width="100%"
                         fontSize="sm"
                         rounded="base"
                         d="flex"
                         justifyContent="flex-start"
                         leftIcon={<FiUsers />}
                    >
                         Customers
                    </Button>
               </Link>
               <Link href="/admin/users" width="100%" passHref>
                    <Button
                         colorScheme="teal"
                         variant="ghost"
                         isActive={
                              router.pathname == '/admin/users' ? true : ''
                         }
                         width="100%"
                         fontSize="sm"
                         maxW="max-content"
                         rounded="base"
                         d="flex"
                         justifyContent="flex-start"
                         leftIcon={<FiGithub />}
                    >
                         Admins
                    </Button>
               </Link>

               <Menu>
                    <MenuButton
                         as={Button}
                         rightIcon={<ChevronDownIcon />}
                         size="sm"
                         variant="ghost"
                         rounded="base"
                         colorScheme="teal"
                    >
                         Resources
                    </MenuButton>
                    <MenuList>
                         <MenuItem>
                              <Link
                                   href="/admin/schedule"
                                   width="100%"
                                   passHref
                              >
                                   <Button
                                        isActive={
                                             router.pathname ==
                                             '/admin/schedule'
                                                  ? true
                                                  : ''
                                        }
                                        d="flex"
                                        colorScheme="teal"
                                        variant="ghost"
                                        justifyContent="flex-start"
                                        width="100%"
                                        maxW="max-content"
                                        fontSize="sm"
                                        rounded="base"
                                        leftIcon={<FiCalendar />}
                                   >
                                        Schedule
                                   </Button>
                              </Link>
                         </MenuItem>

                         <MenuItem>
                              <Link href="/admin/images" width="100%" passHref>
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
                                        rounded="base"
                                        d="flex"
                                        justifyContent="flex-start"
                                        leftIcon={<FiImage />}
                                   >
                                        Images
                                   </Button>
                              </Link>
                         </MenuItem>
                         <MenuItem>
                              {' '}
                              <Link
                                   href="/admin/testimonials"
                                   width="100%"
                                   passHref
                              >
                                   <Button
                                        colorScheme="teal"
                                        variant="ghost"
                                        isActive={
                                             router.pathname ==
                                             '/admin/testimonials'
                                                  ? true
                                                  : ''
                                        }
                                        width="100%"
                                        fontSize="sm"
                                        rounded="base"
                                        d="flex"
                                        justifyContent="flex-start"
                                        leftIcon={<VscFeedback />}
                                   >
                                        Testimonials
                                   </Button>
                              </Link>
                         </MenuItem>
                         <MenuItem>
                              <Link
                                   href="/admin/offerings"
                                   width="100%"
                                   passHref
                              >
                                   <Button
                                        colorScheme="teal"
                                        variant="ghost"
                                        isActive={
                                             router.pathname.match(
                                                  '/admin/offerings'
                                             )
                                                  ? true
                                                  : ''
                                        }
                                        width="100%"
                                        fontSize="sm"
                                        rounded="base"
                                        d="flex"
                                        justifyContent="flex-start"
                                        leftIcon={<VscPreview />}
                                   >
                                        Offerings
                                   </Button>
                              </Link>
                         </MenuItem>
                    </MenuList>
               </Menu>
          </Flex>
     );
}

export default Sidebar;
