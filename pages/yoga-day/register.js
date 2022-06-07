import HomeLayout from '@/components/layout/HomeLayout';
import React from 'react';
import EventRegister from '@/components/arambha/EventRegister';
import Head from 'next/head';
import Script from 'next/script';

function Register() {
     return (
          <div>
               <Head>
                    <title>Register | Yoga Arambha</title>
               </Head>
               <Script
                    src="https://www.googletagmanager.com/gtag/js?id=AW-616323515"
                    strategy="beforeInteractive"
               ></Script>
               <Script id="google-analytics" strategy="afterInteractive">
                    {`
           window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-616323515');
        `}
               </Script>
               <Script id="g-track">
                    {`  document.getElementById('submitButton').addEventListener('click', function() {
 fbq('track', 'CompleteRegistration', {
    value: 0,
    currency: '0',
  });
}, false);`}
               </Script>
               <EventRegister />
          </div>
     );
}

export default Register;
Register.Layout = HomeLayout;
