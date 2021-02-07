import Dashboard from '../dashboard';
import fetcher from '@/utils/fetcher';
import useSWR from 'swr';
import FormsData from '@/components/admin/table/FormsData';
import { Box, Flex, Grid, Spinner, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import FormHeader from '@/components/admin/FormHeader';

const offerings = () => {
     const [latestDoc, setLatestDoc] = useState(0);
     const [form, setForm] = useState();
     const { data, error } = useSWR(`/api/forms/${latestDoc}`, fetcher);

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

     console.log('Parent', latestDoc.id);
     console.log('Parent', data);

     const handleForm = (form) => {
          setForm(form);
     };
     return (
          <Dashboard>
               <FormHeader siteLink="Offerings" />

               <FormsData
                    forms={data.submissions}
                    latestDoc={latestDoc}
                    setDocs={setLatestDoc}
               />
          </Dashboard>
     );
};

export default offerings;
