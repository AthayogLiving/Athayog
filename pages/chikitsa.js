import Hero from '@/components/shared/Hero';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import athayogChikitsa from 'public/athayogChikitsa.jpeg';
import Information from '@/components/shared/Information';

const Chikitsa = () => {
    const pageData = {
        name: 'Chikitsa',
        heroImage: athayogChikitsa,
        whatis: `In audio, a mastering studio is a facility specialised in audio mastering. Tasks may include but not be limited to audio restoration, corrective and tone-shaping EQ, dynamic control, stereo or 5.1 surround editing, vinyl and tape transfers, vinyl cutting, and CD compilation. Depending on the quality of the original mix, the mastering engineer's role can change from small corrections to improving the overall sound of a mix drastically. Typically studios contain a combination of high-end analogue equipment with low-noise circuitry and digital hardware and plug-ins. Some may contain tape machines and vinyl lathes. They may also contain full-range monitoring systems and be acoustically tuned to provide an accurate reproduction of the sound information contained in the original medium. The mastering engineer must prepare the file for its intended destination, which may be radio, CD, vinyl or digital distribution. 
 
In video production, a mastering studio is a facility specialized in the post-production of video recordings. Tasks may include but not be limited to: video editing, colour grading correction, mixing, DVD authoring and audio mastering. The mastering engineer must prepare the file for its intended destination, which may be broadcast, DVD or digital distribution`
    };
    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <Hero pageData={pageData} />
            <Information pageData={pageData} />
        </motion.div>
    );
};

export default Chikitsa;
