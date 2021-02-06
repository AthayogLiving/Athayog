import Hero from '@/components/shared/Hero';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import athayogChikitsa from 'public/athayogChikitsa.jpeg';
import Information from '@/components/shared/Information';
import Classes from '@/components/shared/Classes';
import Pricing from '@/components/shared/Pricing';
import Register from '@/components/shared/Register';
import InformationSplit from '@/components/shared/InformationSplit';

const Workshops = () => {
     const pageData = {
          name: 'Workshops',
          heroImage: athayogChikitsa,
          whatis: `Experience a profound approach to Yogic knowledge and living. Explore the deeper, subtler and more authentic aspects of Yoga as we share our collective wisdom on specialized and focussed topics in the Yogic realm.`,
          secondBlock: `What you get`,
          description: `Workshop of the Week is a 75-minute workshop that we organize weekly, covering individual subjects to give you a more insightful perspective on the subtleties of the Yogic cosmos.\nWorkshop of the Month is a 10-hour series of 4 workshops in a month, branching out into broader Yogic themes, stemming from time-honoured wisdom.`,
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
          ],
          pricing: [
               {
                    courseName: 'Workshop of the week',
                    description: `Workshop of the week`,
                    duration: `1 Workshop`,
                    price: 999
               },
               {
                    courseName: 'Workshop of the month',
                    description: `Workshop of the month`,
                    duration: `4 Workshops`,
                    price: 3999
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

export default Workshops;
