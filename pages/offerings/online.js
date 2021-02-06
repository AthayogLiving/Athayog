import Hero from '@/components/shared/Hero';
import { motion } from 'framer-motion';
import React from 'react';
import athayogOnline from 'public/athayogOnline.jpg';
import Information from '@/components/shared/Information';
import Classes from '@/components/shared/Classes';
import Pricing from '@/components/shared/Pricing';
import Register from '@/components/shared/Register';

const Online = () => {
     const pageData = {
          name: 'Online',
          heroImage: athayogOnline,
          whatis: `You may be looking to keep your practice going at a steady pace but are unsure about stepping out in the midst of the pandemic. With AthaYog Online, you can continue from the comfort of your own space.`,
          pricing: [
               {
                    courseName:
                         'Online Group class* (*Subject to number of students)',
                    description: `Number of students : Minimum 5 and Maximum 10.`,
                    duration: `1 month, 5 sessions a week`,
                    price: 1500
               },
               {
                    courseName: 'Online Personal class',
                    description: `Number of students: 1`,
                    duration: `12 sessions`,
                    price: 5999
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

               <Pricing pricing={pageData.pricing} />
               <Register registerTo={pageData.name.toLocaleLowerCase()} />
          </motion.div>
     );
};

export default Online;
