import HomeLayout from '@/components/layout/HomeLayout';
import React from 'react';
import { Box } from '@chakra-ui/react';
import Hero from '@/components/arambha/Hero';

function YogaDay() {
     return (
          <div>
               <Hero />
          </div>
     );
}

export default YogaDay;
YogaDay.Layout = HomeLayout;
