import AddTestimonials from '@/components/admin/testimonials/AddTestimonials';
import ShowTestimonials from '@/components/admin/testimonials/ShowTestimonials';
import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Dashboard from './dashboard';

const testimonials = () => {
     const bg = useColorModeValue('white', 'gray.800');
     return (
          <Dashboard>
               <Box bg={bg} padding={6} rounded="lg" boxShadow="base">
                    <ShowTestimonials />
                    <AddTestimonials />
               </Box>
          </Dashboard>
     );
};

export default testimonials;
