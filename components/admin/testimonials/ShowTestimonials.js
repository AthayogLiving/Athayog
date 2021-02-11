import { updateTestimonialsStatus } from '@/lib/db/testimonials';
import fetcher from '@/utils/fetcher';
import {
     Box,
     Grid,
     Heading,
     Skeleton,
     Spinner,
     useColorModeValue,
     Table,
     Thead,
     Tbody,
     Tfoot,
     Tr,
     Th,
     Td,
     TableCaption,
     FormControl,
     Switch,
     FormLabel,
     Text
} from '@chakra-ui/react';
import React, { useState } from 'react';
import useSWR from 'swr';

const ShowTestimonials = () => {
     const [status, setStatus] = useState(false);
     const { data, error } = useSWR(`/api/testimonials`, fetcher);
     if (error)
          return (
               <Grid placeItems="center" mt={10}>
                    <Text>
                         Something happend while retreiving data. Try Again
                    </Text>
               </Grid>
          );

     if (!data) {
          return (
               <Grid placeItems="center" mt={10}>
                    <Spinner
                         thickness="4px"
                         speed="0.65s"
                         emptyColor="gray.200"
                         color="blue.500"
                         size="xl"
                    />
               </Grid>
          );
     }

     const onPublicChange = async (id, isAvailaible) => {
          setStatus(true);
          await updateTestimonialsStatus(id, !isAvailaible);
          setStatus(false);
     };

     return (
          <Table variant="striped" colorScheme="teal">
               <TableCaption>Testimonials</TableCaption>
               <Thead>
                    <Tr>
                         <Th>Name</Th>
                         <Th>Review</Th>
                         <Th>Rating</Th>
                         <Th>Public</Th>
                    </Tr>
               </Thead>
               <Tbody>
                    {data.testimonials.map((data) => {
                         return (
                              <Tr key={data.id}>
                                   <Td>{data.name}</Td>
                                   <Td>{data.review}</Td>
                                   <Td isNumeric>{data.stars}/5</Td>
                                   <Td>
                                        <FormControl
                                             display="flex"
                                             alignItems="center"
                                        >
                                             <Switch
                                                  id="email-alerts"
                                                  isDisabled={status}
                                                  onChange={(e) =>
                                                       onPublicChange(
                                                            data.id,
                                                            data.isActive
                                                       )
                                                  }
                                                  defaultChecked={data.isActive}
                                             />
                                        </FormControl>
                                   </Td>
                              </Tr>
                         );
                    })}
               </Tbody>
          </Table>
     );
};

export default ShowTestimonials;
