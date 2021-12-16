import HomeLayout from '@/components/layout/HomeLayout';
import ShikshanaGraduates from '@/components/shared/ShikshanaGraduates';
import { Box, Grid } from '@chakra-ui/layout';
import React from 'react';

const Graduates = () => {
     return (
          <Grid bg="primaryWhite" placeItems="center" minHeight="100vh">
               <ShikshanaGraduates />
          </Grid>
     );
};

export default Graduates;
Graduates.Layout = HomeLayout;
