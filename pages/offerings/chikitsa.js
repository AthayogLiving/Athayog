import Hero from '@/components/shared/Hero';
import { motion } from 'framer-motion';
import React from 'react';
import athayogShikshana from 'public/athayogShikshana.jpg';
import Information from '@/components/shared/Information';
import Classes from '@/components/shared/Classes';
import Pricing from '@/components/shared/Pricing';
import Register from '@/components/shared/Register';
import InformationSplit from '@/components/shared/InformationSplit';

const Chikitsa = () => {
     const pageData = {
          name: 'Chkitsa',
          heroImage: athayogShikshana,
          whatis: `If you’re seeking wellness and better health, AthaYog Chikitsa is designed to help you adapt into Yogic living as a medium of alternative healing and wellness, enriched by the power of Ayurveda.`,
          secondBlock: `What you get`,
          description: `We empower you to embrace the deepest, subtler levels that exist within you, and work together with you to open the door to your wellbeing. By reprogramming the Trigunas, or attributes inherent to you, and analysing your Doshas, we decode the Ayurvedic constitution of your body, enabling you to lead a wholesome life.`,
          pricing: 'Contact For More'
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

export default Chikitsa;
