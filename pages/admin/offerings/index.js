import OfferringsHeader from '@/components/admin/OfferingsHeader';
import { capitalizeFirstLetter } from '@/components/helper/Capitalize';
import {
     Box,
     useColorModeValue,
     Table,
     Thead,
     Tbody,
     Tfoot,
     Tr,
     Th,
     Td,
     TableCaption,
     Heading
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import Dashboard from '../dashboard';

const offerings = () => {
     const bg = useColorModeValue('white', 'gray.800');
     const offersType = [
          'space',
          'shikshana',
          'online',
          'personal',
          'workshops'
     ];

     return (
          <Dashboard>
               <OfferringsHeader siteLink="" />
               <Table
                    variant="simple"
                    mt={5}
                    bg={bg}
                    padding={6}
                    rounded="lg"
                    boxShadow="base"
               >
                    <TableCaption>Offerings by AthaYog</TableCaption>
                    <Thead>
                         <Tr>
                              <Th>Name</Th>
                              <Th>Actions</Th>
                         </Tr>
                    </Thead>
                    <Tbody>
                         {offersType.map((data, index) => {
                              return (
                                   <Tr key={index}>
                                        <Td>
                                             Athayog{' '}
                                             {capitalizeFirstLetter(data)}
                                        </Td>
                                        <Td>
                                             <Link href={`offerings/${data}`}>
                                                  <a
                                                       style={{
                                                            textDecoration:
                                                                 'underline'
                                                       }}
                                                  >
                                                       Open
                                                  </a>
                                             </Link>
                                        </Td>
                                   </Tr>
                              );
                         })}
                    </Tbody>
               </Table>
          </Dashboard>
     );
};

export default offerings;
