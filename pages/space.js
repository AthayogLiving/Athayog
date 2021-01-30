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
                    className: 'universal harmony',
                    classInfo:
                         'A 75 minute class centered around grounding rituals, with an emphasis on asana practices, pranayama, dharana and relaxation practice. Inculcate balance as you harmonize a connection with the inner universe.'
               },
               {
                    className: 'transcending transition',
                    classInfo:
                         'A 75 minute practice that combines elements of Hatha and Vinyasa , starting with ground rituals, moving on to surya namaskar and a sequence of classical asana postures, conforming to a more energetic and fluid vinyasa style. Explore transitional movements and transcend all physical limitations.'
               },
               {
                    className: 'universal harmony',
                    classInfo:
                         'A 75 minute class centered around grounding rituals, with an emphasis on asana practices, pranayama, dharana and relaxation practice. Inculcate balance as you harmonize a connection with the inner universe.'
               },
               {
                    className: 'transcending transition',
                    classInfo:
                         'A 75 minute practice that combines elements of Hatha and Vinyasa , starting with ground rituals, moving on to surya namaskar and a sequence of classical asana postures, conforming to a more energetic and fluid vinyasa style. Explore transitional movements and transcend all physical limitations.'
               },
               {
                    className: 'universal harmony',
                    classInfo:
                         'A 75 minute class centered around grounding rituals, with an emphasis on asana practices, pranayama, dharana and relaxation practice. Inculcate balance as you harmonize a connection with the inner universe.'
               },
               {
                    className: 'transcending transition',
                    classInfo:
                         'A 75 minute practice that combines elements of Hatha and Vinyasa , starting with ground rituals, moving on to surya namaskar and a sequence of classical asana postures, conforming to a more energetic and fluid vinyasa style. Explore transitional movements and transcend all physical limitations.'
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
               <Pricing classes={pageData.classes} />
               <Register registerTo={pageData.name.toLocaleLowerCase()} />
          </motion.div>
     );
};

export default Space;
