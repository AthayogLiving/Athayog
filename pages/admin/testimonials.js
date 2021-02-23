import AddTestimonials from '@/components/admin/testimonials/AddTestimonials';
import ShowTestimonials from '@/components/admin/testimonials/ShowTestimonials';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const testimonials = () => {
     const bg = useColorModeValue('white', 'gray.800');
     return (
          <Box bg={bg} padding={6} rounded="lg" boxShadow="base" mb={3}>
               <ShowTestimonials />
               <AddTestimonials />
          </Box>
     );
};

export default testimonials;
testimonials.Layout = DashboardLayout;
