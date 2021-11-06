import HomeLayout from '@/components/layout/HomeLayout';
import ShikshanaGraduates from '@/components/shared/ShikshanaGraduates';
import { Box } from '@chakra-ui/layout';
import React from 'react';

const Graduates = () => {
     return (
          <Box mt={10} minHeight="100vh">
               <ShikshanaGraduates />
          </Box>
     );
};

export default Graduates;
Graduates.Layout = HomeLayout;
