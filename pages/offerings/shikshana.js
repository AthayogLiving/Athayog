import Hero from '@/components/shared/Hero';
import { motion } from 'framer-motion';
import React from 'react';
import athayogShikshana from 'public/athayogShikshana.jpg';
import Pricing from '@/components/shared/Pricing';
import Register from '@/components/shared/Register';
import InformationSplit from '@/components/shared/InformationSplit';
import Schedule from '@/components/shared/Schedule';
import { getOffer } from '@/lib/db/offerings';
import HomeLayout from '@/components/layout/HomeLayout';

export async function getStaticProps(context) {
     const { offers } = await getOffer('shikshana');

     if (!offers) {
          return {
               notFound: true
          };
     }
     return {
          props: {
               offers: JSON.parse(JSON.stringify(offers)),
               notFound: false
          },
          revalidate: 1
     };
}

const Shikshana = ({ offers, notFound }) => {
     const pageData = {
          name: 'Shikshana Pada',
          heroImage: athayogShikshana,
          whatis: `Climb up the career ladder with the certificate programs and teachers’ training under AthaYog Shikshana Pada.`,
          secondBlock: `What you get`,
          description: `A 300 hour teachers’ training course that spans across a two and a half month-duration to guide you as you imbibe a comprehensive understanding of Yogic principles and practices. Accredited by SVYASA and RYT200, the AthaYog teachers’ training course sheds light on Level 1 RYT 200 of the Yoga Teachers’ Training Course. During the course duration, you also get to experience a 2-day Yogic retreat with your accommodation and meals taken care of.* Upon completion of the course, you get RYT 200 and YIC certificates and an all-round, spiritually fulfilling experience with an added advantage of upskilling yourself.`,
          pricing: [
               {
                    courseName: 'Shikshana Pada',
                    description: `Shikshana Pada`,
                    duration: `No Duration`,
                    price: 63000
               }
          ]
     };

     const apiPricing = [];
     offers.map((data) => {
          apiPricing.push({
               id: data.id,
               courseName: data.name,
               description: data.description,
               duration: data.isTrial
                    ? data.days + ' Trial'
                    : data.days == 0
                    ? 'No Duration'
                    : data.days + ' Days',
               durationNum: data.days,
               price: data.price
          });
     });

     return (
          <motion.div
               exit={{ opacity: 0 }}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
          >
               <Hero pageData={pageData} />
               <InformationSplit pageData={pageData} />
               <Pricing pricing={apiPricing} />
               <Schedule schedule="shikhshana" />
               {/* <Register registerTo={pageData.name.toLocaleLowerCase()} /> */}
          </motion.div>
     );
};

export default Shikshana;
Shikshana.Layout = HomeLayout;
