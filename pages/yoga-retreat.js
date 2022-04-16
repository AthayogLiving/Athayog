import HomeLayout from '@/components/layout/HomeLayout';
import Hero from '@/components/retreat/Hero';
import Info from '@/components/retreat/Info';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';

function YogaRetreat() {
     return (
          <div>
               <Hero />
               <Info />
          </div>
     );
}

export default YogaRetreat;
YogaRetreat.Layout = HomeLayout;
