import AddOfferings from '@/components/admin/offerings/AddOfferings';
import Offers from '@/components/admin/offerings/Offers';
import OfferringsHeader from '@/components/admin/OfferingsHeader';
import { Box, useColorModeValue } from '@chakra-ui/react';

import { useRouter } from 'next/router';
import React from 'react';
import Dashboard from '../dashboard';

const offeringsType = () => {
     const router = useRouter();
     const { offeringsType } = router.query;
     const bg = useColorModeValue('white', 'gray.800');
     return (
          <Dashboard>
               <OfferringsHeader siteLink={offeringsType} />
               <Box bg={bg} shadow="base" rounded="lg" padding={5} mt={3}>
                    <Offers offerType={offeringsType} />
                    <AddOfferings type={offeringsType} />
               </Box>
          </Dashboard>
     );
};

export default offeringsType;
