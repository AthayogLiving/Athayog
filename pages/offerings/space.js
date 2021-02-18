import Hero from '@/components/shared/Hero';
import { motion } from 'framer-motion';
import React from 'react';
import athayogSpace from 'public/athayogSpace.jpg';
import Information from '@/components/shared/Information';
import Classes from '@/components/shared/Classes';
import Pricing from '@/components/shared/Pricing';
import Register from '@/components/shared/Register';
import { Skeleton } from '@chakra-ui/react';
import fetcher from '@/utils/fetcher';
import useSWR from 'swr';

const Space = ({ offers }) => {
     const { data, error } = useSWR(`/api/offerings/space`, fetcher, {
          initialData: offers
     });
     if (error) return <Skeleton height="100vh"></Skeleton>;

     if (!data) {
          return <Skeleton height="100vh"></Skeleton>;
     }

     const pageData = {
          name: 'Space',
          heroImage: athayogSpace,
          whatis: `Elevate your Yogic practice at the AthaYog Space - a peaceful and hygienic environment to practice. Here you can begin or advance in your yoga journey by instilling transformation with a strong hold on your lifestyle.`,
          classes: [
               {
                    className: 'Universal Harmony',
                    classInfo: `This class is centered around grounding rituals, with an emphasis on asana practices, pranayama, dharana and relaxation practice. Inculcate balance as you harmonize a connection with the inner universe.\nA 75-minute class open to all levels of practitioners and all age groups.`
               },
               {
                    className: 'Transcending Transitions ',
                    classInfo: `A practice that combines elements of Hatha and Vinyasa, starting with grounding rituals, moving on to Surya Namaskar and a sequence of classical asana postures, conforming to a more energetic and fluid vinyasa style. Explore transitional movements and transcend all physical limitations.\nA 75-minute class open to all levels of practitioners and all age groups.`
               },
               {
                    className: 'Rhythm of Being',
                    classInfo: `Hatha Asana variations that bring attention to the breath using relaxation techniques, this class emphasizes on consequently shifting the focus to a more dynamic practice in sync with the traditional form of Hatha asanas. Tune into the rhythm of being.\nA 75-minute class open to all levels of practitioners and all age groups`
               },
               {
                    className: 'Inner World',
                    classInfo: `This guided Yoga Nidra practice tunes the senses inwards and prepares for withdrawal from one state of consciousness to another, exploring the different states. Navigate the inner world.\nA 75-minute class open to all levels of practitioners and all age groups.`
               },
               {
                    className: 'Deep Space',
                    classInfo: `A completely immersive session that teaches you to dissolve into the subtle aspects of breath using the mind as a key. Supported by dynamic breathing asanas and internalization techniques, this pranayama and meditation class stills the breath and steadies the mind. Enter the deep space.\nA 75-minute class open to all levels of practitioners and all age groups.`
               },
               {
                    className: 'Little Star',
                    classInfo: `This class works on empowering and nurturing young minds to instill the focus and awareness required to grow as individuals with the right guidance to gain composure.\nA 60-minute class open to age groups between 7-14 years.`
               }
          ]
     };

     const apiPricing = [];
     data.offers.map((data) => {
          if (data.isActive) {
               apiPricing.push({
                    id: data.id,
                    courseName: data.name,
                    description: data.description,
                    duration: data.isTrial
                         ? data.days + ' Days Trial'
                         : data.days + ' Days',
                    durationNum: data.days,
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
               <Information pageData={pageData} />
               <Classes classes={pageData.classes} />
               <Pricing pricing={apiPricing} />
               <Register registerTo={pageData.name.toLocaleLowerCase()} />
          </motion.div>
     );
};

export default Space;
