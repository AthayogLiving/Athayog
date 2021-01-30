import Hero from '@/components/shared/Hero';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import athayogChikitsa from 'public/athayogChikitsa.jpeg';
import Information from '@/components/shared/Information';
import Classes from '@/components/shared/Classes';
import Pricing from '@/components/shared/Pricing';
import Register from '@/components/shared/Register';

const Workshop = () => {
     const pageData = {
          name: 'Workshop',
          heroImage: athayogChikitsa,
          whatis: `In audio, a mastering studio is a facility specialised in audio mastering. Tasks may include but not be limited to audio restoration, corrective and tone-shaping EQ, dynamic control, stereo or 5.1 surround editing, vinyl and tape transfers, vinyl cutting, and CD compilation. Depending on the quality of the original mix, the mastering engineer's role can change from small corrections to improving the overall sound of a mix drastically. Typically studios contain a combination of high-end analogue equipment with low-noise circuitry and digital hardware and plug-ins. Some may contain tape machines and vinyl lathes. They may also contain full-range monitoring systems and be acoustically tuned to provide an accurate reproduction of the sound information contained in the original medium. The mastering engineer must prepare the file for its intended destination, which may be radio, CD, vinyl or digital distribution.In video production, a mastering studio is a facility specialized in the post-production of video recordings. Tasks may include but not be limited to: video editing, colour grading correction, mixing, DVD authoring and audio mastering. The mastering engineer must prepare the file for its intended destination, which may be broadcast, DVD or digital distribution`,
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

export default Workshop;
