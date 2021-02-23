import Hero from '@/components/shared/Hero';
import { motion } from 'framer-motion';
import React from 'react';
import athayogOnsite from 'public/athayogOnsite.jpeg';
import Information from '@/components/shared/Information';
import Pricing from '@/components/shared/Pricing';
import Register from '@/components/shared/Register';
import HomeLayout from '@/components/layout/HomeLayout';

const Onsite = () => {
     const pageData = {
          name: 'Onsite',
          heroImage: athayogOnsite,
          whatis: `AthaYog Onsite is for people seeking Yogic education on their own personal time, from the comfort of their space. And unsure about stepping out in the midst of pandemic. With Athayog Onsite you can continue your practice at your space by our teachers visiting you.`,
          pricing: [
               {
                    courseName: 'Onsite Group class',
                    description: `Number of Students: Depending on the space`,
                    duration: `As per your convenience`,
                    price: `Contact us`
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

               <Pricing pricing={pageData.pricing} toRegister={false} />
               <Register registerTo={pageData.name.toLocaleLowerCase()} />
          </motion.div>
     );
};

export default Onsite;
Onsite.Layout = HomeLayout;
