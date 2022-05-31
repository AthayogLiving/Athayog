import HomeLayout from '@/components/layout/HomeLayout';
import React from 'react';
import EventRegister from '@/components/arambha/EventRegister';
import Head from 'next/head';

function Register() {
     return (
          <div>
               <Head>
                    <title>Register | Yoga Arambha</title>
               </Head>
               <EventRegister />
          </div>
     );
}

export default Register;
Register.Layout = HomeLayout;
