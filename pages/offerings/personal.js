import Hero from '@/components/shared/Hero';
import { motion } from 'framer-motion';
import React from 'react';
import athayogPersonal from 'public/athayogPersonal.jpg';
import Information from '@/components/shared/Information';
import Classes from '@/components/shared/Classes';
import Pricing from '@/components/shared/Pricing';
import Register from '@/components/shared/Register';
import InformationSplit from '@/components/shared/InformationSplit';

const Personal = () => {
     const pageData = {
          name: 'Personal',
          heroImage: athayogPersonal,
          whatis: `Eliminate the distractions and keep your focus intact on your Yogic practice as you welcome change and break the patterns with AthaYog Personal Sessions. In the personal sessions, you can expect a more customized and structured approach to learning that suits your needs.`,
          secondBlock: `What you get`,
          description: `Experience a more personalized and up-close path to immersing yourself in the Yogic way of life.`,
          pricing: [
               {
                    courseName: 'Personal Session',
                    description: `Personal Session`,
                    duration: `1 session`,
                    price: 999
               },
               {
                    courseName: 'Personal Session',
                    description: `Personal Session`,
                    duration: `12 sessions`,
                    price: 9999
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
               <InformationSplit pageData={pageData} />

               <Pricing pricing={pageData.pricing} />
               <Register registerTo={pageData.name.toLocaleLowerCase()} />
          </motion.div>
     );
};

export default Personal;
