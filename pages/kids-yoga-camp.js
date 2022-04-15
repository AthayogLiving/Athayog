import BasicInfo from '@/components/kids/BasicInfo';
import EnrollKids from '@/components/kids/EnrollKids';
import KidsGallery from '@/components/kids/KidsGallery';
import KidsHero from '@/components/kids/KidsHero';
import KidsInfo from '@/components/kids/KidsInfo';
import RegisterBlock from '@/components/kids/RegisterBlock';
import RegisterNow from '@/components/kids/RegisterNow';
import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import Head from 'next/head';
import React from 'react';
function KidsYogaCamp() {
     return (
          <>
               <Head>
                    <title>Kids Yoga Camp - Athayog</title>
                    <script
                         dangerouslySetInnerHTML={{
                              __html: `gtag('event', 'conversion', {
                                        'send_to': 'AW-616323515/KfguCPO0qLMDELuz8aUC',
                                        'value': 2500.0,
                                        'currency': 'INR'
                                   });
                                   gtag('config', 'AW-616323515');
                                   `
                         }}
                    />
               </Head>
               <NavbarHelper />
               <KidsHero />
               <RegisterNow pageType="base" />
               <BasicInfo />
               <EnrollKids />
               <KidsGallery />
               <KidsInfo />
               <RegisterBlock />
          </>
     );
}

export default KidsYogaCamp;
KidsYogaCamp.Layout = HomeLayout;
