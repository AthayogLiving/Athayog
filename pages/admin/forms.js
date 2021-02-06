import Dashboard from './dashboard';
import fetcher from '@/utils/fetcher';
import useSWR from 'swr';
import FormsData from '@/components/admin/table/FormsData';
import { Box, Text } from '@chakra-ui/react';

const forms = () => {
     const { data, error } = useSWR(`/api/forms/online`, fetcher);

     if (!data) {
          return null;
     }

     return (
          <Dashboard>
               <FormsData forms={data.submissions} />
          </Dashboard>
     );
};

export default forms;
