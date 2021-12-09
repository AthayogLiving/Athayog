import Hero from '@/components/shared/Hero';
import { motion } from 'framer-motion';
import React from 'react';
import athayogSpace from 'public/athayogSpace.jpg';
import Information from '@/components/shared/Information';
import Schedule from '@/components/shared/Schedule';
import Classes from '@/components/shared/Classes';
import Pricing from '@/components/shared/Pricing';
import IntensityTable from '@/components/shared/IntensityTable';
import { getOffer } from '@/lib/db/offerings';
import HomeLayout from '@/components/layout/HomeLayout';

export async function getStaticProps(context) {
     const { offers } = await getOffer('space');

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

const Space = ({ offers, notFound }) => {
     const pageData = {
          name: 'Space',
          heroImage: athayogSpace,
          whatis: `Elevate your Yogic practice at the AthaYog Space - a peaceful and hygienic environment to practice. Here you can begin or advance in your yoga journey by instilling transformation with a strong hold on your lifestyle.`,
          classes: [
               {
                    className: 'Universal Harmony',
                    classInfo: `A 60 minute class that revolves around grounding rituals, asana practices, pranayama, dharana and relaxation practice. This class helps with inculcating balance and harmonising with the inner universe.`
               },
               {
                    className: 'Transcending Transitions ',
                    classInfo: `A 60 minute class that combines Hatha and Vinayasa along with grounding rituals, Surya Namaskar and asanas in an energetic and fluid Vinayasa style.`
               },
               {
                    className: 'Rhythm of Being',
                    classInfo: `A 60 minute class that prioritises relaxed breathing through Hatha Asana. This class helps focusing on a dynamic practice in sync with the traditional Hatha asanas.`
               },
               {
                    className: 'Inner World',
                    classInfo: `A 60 minute class that works on tuning your senses, withdrawing yourself from other states of consciousness and navigating through the inner world.`
               },
               {
                    className: 'Deep Space',
                    classInfo: `A 60 minute class that immerses you in subtle breathing with your mind being the key. It includes dynamic breathing, internalisation techniques, pranayama and meditation to guide you through your mind and body’s deep space.`
               },
               {
                    className: 'Little Star',
                    classInfo: `A 60 minute class to empower and nurture young minds to improve their focus and awareness. This is for the age groups 7-14 years.`
               }
          ]
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
                    durationNum: data.days,
                    isTrial: data.isTrial,
                    old_price: data.old_price,
                    isGeneral: data.isGeneral,
                    price: data.price
               });
          }
     });

     return (
          <motion.div
               exit={{ opacity: 0 }}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
          >
               <Hero pageData={pageData} />
               {/* <Information pageData={pageData} /> */}
               <Classes classes={pageData.classes} />
               <IntensityTable />
               <Schedule schedule="general" />
               <Pricing
                    registerTo={pageData.name.toLocaleLowerCase()}
                    pricing={apiPricing}
               />
          </motion.div>
     );
};

export default Space;
Space.Layout = HomeLayout;
