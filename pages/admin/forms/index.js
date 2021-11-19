import {
     useColorModeValue,
     Table,
     Thead,
     Tbody,
     Tr,
     Th,
     Td,
     Text
} from '@chakra-ui/react';
import { useState } from 'react';
import FormHeader from '@/components/admin/FormHeader';
import Link from 'next/link';
import DashboardLayout from '@/components/layout/DashboardLayout';

const forms = () => {
     const [latestDoc, setLatestDoc] = useState(0);

     const bg = useColorModeValue('white', 'gray.800');

     return (
          <>
               <FormHeader siteLink="" />

               <Table
                    variant="simple"
                    bg={bg}
                    mt={3}
                    boxShadow="base"
                    rounded="lg"
               >
                    <Thead>
                         <Tr>
                              <Th>Form Type</Th>
                              <Th>Action</Th>
                         </Tr>
                    </Thead>
                    <Tbody>
                         <Tr>
                              <Td>
                                   <Text>Enquiry</Text>
                              </Td>
                              <Td>
                                   <Link href="forms/enquiry">
                                        <a
                                             style={{
                                                  textDecoration: 'underline'
                                             }}
                                        >
                                             Open
                                        </a>
                                   </Link>
                              </Td>
                         </Tr>
                         <Tr>
                              <Td>
                                   <Text>Offerings</Text>
                              </Td>
                              <Td>
                                   <Link href="forms/offerings">
                                        <a
                                             style={{
                                                  textDecoration: 'underline'
                                             }}
                                        >
                                             Open
                                        </a>
                                   </Link>
                              </Td>
                         </Tr>
                         <Tr>
                              <Td>
                                   <Text>Leads</Text>
                              </Td>
                              <Td>
                                   <Link href="forms/leads">
                                        <a
                                             style={{
                                                  textDecoration: 'underline'
                                             }}
                                        >
                                             Open
                                        </a>
                                   </Link>
                              </Td>
                         </Tr>
                    </Tbody>
               </Table>
          </>
     );
};

export default forms;
forms.Layout = DashboardLayout;
