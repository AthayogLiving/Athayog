import React from 'react';
import {
     Breadcrumb,
     BreadcrumbItem,
     BreadcrumbLink,
     BreadcrumbSeparator,
     Flex
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
function BreadCrumb({ subLinks, currentPage }) {
     return (
          <div>
               <Flex
                    margin="auto"
                    justifyContent="flex-start"
                    py={10}
                    width="100%"
                    alignItems="center"
                    bg="white"
               >
                    <Breadcrumb
                         spacing="8px"
                         border="1px"
                         borderColor="gray.200"
                         padding="3"
                         rounded="lg"
                         fontSize="xl"
                         boxShadow="sm"
                         bg="white"
                         margin="auto"
                         width={{ base: '90%', md: '85%', lg: '80%' }}
                         separator={<ChevronRightIcon color="gray.500" />}
                    >
                         <BreadcrumbItem>
                              <BreadcrumbLink
                                   textColor="aygreen.700"
                                   as={Link}
                                   href="/"
                              >
                                   Home
                              </BreadcrumbLink>
                         </BreadcrumbItem>

                         <BreadcrumbItem>
                              <BreadcrumbLink
                                   as={Link}
                                   textColor="aygreen.700"
                                   href={'/' + subLinks}
                              >
                                   Classes
                              </BreadcrumbLink>
                         </BreadcrumbItem>

                         <BreadcrumbItem isCurrentPage>
                              <BreadcrumbLink>{currentPage}</BreadcrumbLink>
                         </BreadcrumbItem>
                    </Breadcrumb>
               </Flex>
          </div>
     );
}

export default BreadCrumb;
