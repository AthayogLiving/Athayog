import FormHeader from '@/components/admin/FormHeader';
import EnquiryData from '@/components/admin/table/EnquiryData';
import React from 'react';
import fetcher from '@/utils/fetcher';
import useSWR from 'swr';
import Dashboard from '../dashboard';
import { Grid, Spinner, useColorModeValue } from '@chakra-ui/react';

const enquiry = () => {
     const { data, error } = useSWR(`/api/forms/enquiry`, fetcher);

     const bg = useColorModeValue('white', 'gray.800');

     if (!data) {
          return (
               <Dashboard>
                    <Grid placeItems="center" mt={10}>
                         <Spinner
                              thickness="4px"
                              speed="0.65s"
                              emptyColor="gray.200"
                              color="blue.500"
                              size="xl"
                         />
                    </Grid>
               </Dashboard>
          );
     }

     console.log(data);
     return (
          <Dashboard>
               <FormHeader siteLink="Enquiry" />
               <EnquiryData forms={data.submissions} />
          </Dashboard>
     );
};

export default enquiry;
