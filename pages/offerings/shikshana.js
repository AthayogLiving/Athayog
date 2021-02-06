import Hero from '@/components/shared/Hero';
import { motion } from 'framer-motion';
import React from 'react';
import athayogShikshana from 'public/athayogShikshana.jpg';
import Information from '@/components/shared/Information';
import Classes from '@/components/shared/Classes';
import Pricing from '@/components/shared/Pricing';
import Register from '@/components/shared/Register';
import InformationSplit from '@/components/shared/InformationSplit';

const Shikshana = () => {
     const pageData = {
          name: 'Shikshana Pada',
          heroImage: athayogShikshana,
          whatis: `Climb up the career ladder with the certificate programs and teachers’ training under AthaYog Shikshana Pada.`,
          secondBlock: `What you get`,
          description: `A 300 hour teachers’ training course that spans across a two and a half month-duration to guide you as you imbibe a comprehensive understanding of Yogic principles and practices. Accredited by SVYASA and RYT200, the AthaYog teachers’ training course sheds light on Level 1 RYT 200 of the Yoga Teachers’ Training Course. During the course duration, you also get to experience a 2-day Yogic retreat with your accommodation and meals taken care of.* Upon completion of the course, you get RYT 200 and YIC certificates and an all-round, spiritually fulfilling experience with an added advantage of upskilling yourself.`,
          pricing: [
               {
                    courseName: 'Shikshana Pada',
                    description: `Shikshana Pada`,
                    duration: `No Duration`,
                    price: 63000
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

export default Shikshana;
