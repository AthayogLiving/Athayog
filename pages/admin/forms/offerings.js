import Dashboard from '../dashboard';
import fetcher from '@/utils/fetcher';
import useSWR from 'swr';
import FormsData from '@/components/admin/table/FormsData';
import {
     Box,
     Flex,
     Grid,
     Spinner,
     Text,
     useColorModeValue
} from '@chakra-ui/react';
import { useState } from 'react';
import FormHeader from '@/components/admin/FormHeader';
import { useMediaQuery } from 'react-responsive';
import DashboardLayout from '@/components/layout/DashboardLayout';

const offerings = () => {
     const [latestDoc, setLatestDoc] = useState(0);
     const [form, setForm] = useState();

     const { data, error } =
          latestDoc != 0 && latestDoc != undefined
               ? useSWR(`/api/forms/${latestDoc}?type=forms`, fetcher)
               : useSWR(`/api/forms/offerings`, fetcher);

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

     const handleForm = (form) => {
          setForm(form);
     };

     return (
          <>
               <FormHeader siteLink="Offerings" />

               <FormsData
                    forms={data.submissions}
                    latestDoc={latestDoc}
                    setDocs={setLatestDoc}
               />
          </>
     );
};

export default offerings;
offerings.Layout = DashboardLayout;
