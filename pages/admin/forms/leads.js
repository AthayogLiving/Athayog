import FormHeader from '@/components/admin/FormHeader';
import React, { useState } from 'react';
import fetcher from '@/utils/fetcher';
import useSWR from 'swr';
import { Grid, Spinner, useColorModeValue } from '@chakra-ui/react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import LeadsData from '@/components/admin/table/LeadsData';

const leads = () => {
     const [latestDoc, setLatestDoc] = useState(0);
     const { data, error } =
          latestDoc != 0 && latestDoc != undefined
               ? useSWR(`/api/forms/${latestDoc}?type=leadForms`, fetcher)
               : useSWR(`/api/forms/lead`, fetcher);

     const bg = useColorModeValue('white', 'gray.800');

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

     return (
          <>
               <FormHeader siteLink="Enquiry" />
               <LeadsData
                    forms={data.submissions}
                    latestDoc={latestDoc}
                    setDocs={setLatestDoc}
               />
          </>
     );
};

export default leads;
leads.Layout = DashboardLayout;
