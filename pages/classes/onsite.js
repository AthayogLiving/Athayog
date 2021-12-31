import Hero from '@/components/shared/Hero';
import { motion } from 'framer-motion';
import React from 'react';
import athayogOnsite from 'public/athayogOnsite.jpg';
import Information from '@/components/shared/Information';
import Pricing from '@/components/shared/Pricing';
import Register from '@/components/shared/Register';
import HomeLayout from '@/components/layout/HomeLayout';
import { getOffer } from '@/lib/db/offerings';
import BreadCrumb from '@/components/shared/offerings/BreadCrumb';
import CTA from '@/components/shared/CTA';

export async function getStaticProps(context) {
     const { offers } = await getOffer('onsite');

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

const Onsite = ({ offers, notFound }) => {
     const pageData = {
          name: 'Onsite',
          heroImage: athayogOnsite,
          whatis: `AthaYog Onsite is for people seeking Yogic education on their own personal time, from the comfort of their space. And unsure about stepping out in the midst of pandemic. With Athayog Onsite you can continue your practice at your space by our teachers visiting you.`
     };

     const apiPricing = [];
     offers.map((data) => {
          if (data.isActive) {
               apiPricing.push({
                    id: data.id,
                    courseName: data.name,
                    description: data.description,
                    duration: data.isTrial
                         ? data.days + ' Days Trial'
                         : data.days + ' Days',
                    isTrial: data.isTrial,
                    old_price: data.old_price,
                    durationNum: data.days,
                    isGeneral: data.isGeneral,
                    price: data.price
               });
          }
     });
     const d = new Date();

     return (
          <motion.div
               exit={{ opacity: 0 }}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
          >
               <Hero pageData={pageData} />
               <BreadCrumb subLinks="classes" currentPage="Onsite" />
               {/* <Information pageData={pageData} /> */}

               <Pricing pricing={apiPricing} toRegister={true} />

               <Register registerTo={pageData.name.toLocaleLowerCase()} />
          </motion.div>
     );
};

export default Onsite;
Onsite.Layout = HomeLayout;
