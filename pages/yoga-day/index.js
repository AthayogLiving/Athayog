import Hero from '@/components/arambha/Hero';
import Info from '@/components/arambha/Info';
import Register from '@/components/arambha/Register';
import Welcome from '@/components/arambha/Welcome';
import HomeLayout from '@/components/layout/HomeLayout';
import Head from 'next/head';
import React from 'react';

function YogaDay() {
     return (
          <div>
               <Head>
                    <title>Yoga Day - Sadhana</title>
               </Head>

               <Hero />
               <Register />
               <Welcome />
               <Info />
          </div>
     );
}

export default YogaDay;
YogaDay.Layout = HomeLayout;
