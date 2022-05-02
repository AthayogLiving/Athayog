import Hero from '@/components/shared/Hero';
import { motion } from 'framer-motion';
import React from 'react';
import athayogSpace from 'public/athayogSpace.jpg';
import Information from '@/components/shared/Information';
import Classes from '@/components/shared/Classes';
import Pricing from '@/components/shared/Pricing';
import IntensityTable from '@/components/shared/IntensityTable';
import { getOffer } from '@/lib/db/offerings';
import HomeLayout from '@/components/layout/HomeLayout';
import ProsAndCons from '@/components/shared/ProsAndCons';
import Schedule from '@/components/shared/classes/Schedule';
import BreadCrumb from '@/components/shared/offerings/BreadCrumb';
import CTA from '@/components/shared/CTA';

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
                    classInfo: `Find the harmony between your BODY, BREATH & MIND. Restore the balance and explore your inner universe in this hour-long journey!`,
                    structure: [
                         'Grounding',
                         '35 minutes of Asana Practice',
                         'Relaxation',
                         'Breathing (Pranayama) & Meditation'
                    ]
               },
               {
                    className: 'Transcending Transitions ',
                    classInfo: `Find your flow in a class combining Hatha Yoga with Vinyasa flow that lasts 60 minutes. Transcend the body and mind as you transition from one pose to another with ease.`,
                    structure: [
                         'Grounding',
                         '45 minutes of Hatha Vinyasa Flow',
                         'Relaxation'
                    ]
               },
               {
                    className: 'Rhythm of Being',
                    classInfo: `Move to the rhythm of your breath for 60 minutes. Reconnect with your body with a dynamic Hatha yoga practice.`,
                    structure: [
                         'Grounding',
                         '45 minutes of Asana Practice',
                         'Relaxation'
                    ]
               },
               {
                    className: 'Inner World',
                    classInfo: `Slow down the inner chaos of your restless mind in the span of 60 minutes. Unwind and effortlessly rest your body and mind with the relaxation technique of Yoga Nidra or “Yogic Sleep”.`,
                    structure: [
                         'Grounding',
                         'Yoga Nidra - 45 minutes of Guided Relaxation'
                    ]
               },
               {
                    className: 'Deep Space',
                    classInfo: `Delve deeper into the space beyond your body and mind with this hour-long guided meditation class. Reconnect with your true self in the deep state of conscious relaxation.`,
                    structure: [
                         'Grounding',
                         '15 minutes of Warm-Up & Surya Namaskar',
                         'Guided Relaxation',
                         'Breathing (Pranayama) & Meditation'
                    ]
               },
               {
                    className: 'Kids Yoga',
                    classInfo: `Let the little ones start their Yoga practice when the mind is still fresh and young with this fun-filled and interactive 60 minutes class.`,
                    structure: [
                         'Grounding',
                         'Warm Up - Engaging & Interactive Activities',
                         'Asana Practice',
                         'Relaxation'
                    ]
               },
               {
                    className: 'Ashtanga',
                    classInfo: `This rigorous hour-long practice synchronizes breath with movement. Immerse and feel the body heat up with dynamic movement.`,
                    structure: [
                         'Grounding',
                         'Ashtanga Surya Namaskar',
                         'Ashtanga Primary Series Asanas',
                         'Relaxation'
                    ]
               },
               {
                    className: 'Sivananda',
                    classInfo: `In the span of 60 minutes, find a relaxed and meditative state of mind as you practise Hatha yoga in Sivananda style. Founded by Vishnudevananda, this deep Yogic breathing and relaxation-focused practice is fit for all levels.`,
                    structure: [
                         'Grounding',
                         '15 minutes of Warm-Up',
                         'Breathing (Pranayama)',
                         'Surya Namaskar',
                         'Asana Practice',
                         'Guided Relaxation'
                    ]
               }
          ],
          prosAndCons: [
               [
                    'Clarity of teacher’s demonstration and voice.',
                    'Physical correction. ',
                    'Experience of group energy as you practise with others.',
                    'The advantage of physical space to practise.',
                    'Teacher-Student connection/ bond Eg. Eye-eye contact with teacher and reassuring physical presence.'
               ],
               [
                    'Travel to the studio.',
                    'Fear of COVID-19 Safety among students.',
                    'Need to allot time for both practise and travel',
                    'During monsoon and winter weather, the student has to plan their time and commute.',
                    'Being on time is crucial.'
               ]
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

               <BreadCrumb subLinks="classes" currentPage="Space" />
               <Classes classes={pageData.classes} />
               <IntensityTable />
               {/* <Schedule schedule="general" /> */}
               <Schedule />
               <Pricing
                    registerTo={pageData.name.toLocaleLowerCase()}
                    pricing={apiPricing}
               />

               <ProsAndCons data={pageData.prosAndCons} name="Space" />
          </motion.div>
     );
};

export default Space;
Space.Layout = HomeLayout;
