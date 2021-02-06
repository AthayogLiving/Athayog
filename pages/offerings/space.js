import Hero from '@/components/shared/Hero';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

import athayogSpace from 'public/athayogSpace.jpg';
import Information from '@/components/shared/Information';
import Classes from '@/components/shared/Classes';
import Pricing from '@/components/shared/Pricing';
import Register from '@/components/shared/Register';

const Space = () => {
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
          ],
          pricing: [
               {
                    courseName: 'INITIATION',
                    description: `Experience A Free 2-DAY TRIAL`,
                    duration: `2 Day Trial`,
                    price: 0
               },
               {
                    courseName: 'CONTEMPLATION',
                    description: `Register For 30 Days`,
                    duration: `30 Days`,
                    price: 1999
               },
               {
                    courseName: 'DETERMINATION',
                    description: `Register For 90 Days`,
                    duration: `90 Days`,
                    price: 4999
               },
               {
                    courseName: 'EVOLUTION',
                    description: `Register For 180 Days`,
                    duration: `180 Days`,
                    price: 9999
               },
               {
                    courseName: 'TRANSFORMATION',
                    description: `Register For 360 Days`,
                    duration: `360 Days`,
                    price: 11999
               }
          ]
     };
     return (
          <motion.div
               exit={{ opacity: 0 }}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
          >
               <Hero pageData={pageData} />
               <Information pageData={pageData} />
               <Classes classes={pageData.classes} />
               <Pricing pricing={pageData.pricing} />
               <Register registerTo={pageData.name.toLocaleLowerCase()} />
          </motion.div>
     );
};

export default Space;
