import Hero from '@/components/shared/Hero';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

import athayogSpace from 'public/athayogSpace.jpg';
import Information from '@/components/shared/Information';

const Space = () => {
    const pageData = {
        name: 'Space',
        heroImage: athayogSpace,
        whatis: `The studio of any artist, especially from the 15th to the 19th centuries, characterized all the assistants, thus the designation of paintings as "from the workshop of..." or "studio of..." An art studio is sometimes called an atelier, especially in earlier eras. In contemporary, English language use, "atelier" can also refer to the Atelier Method, a training method for artists that usually takes place in a professional artist's studio. 
 
The above-mentioned "method" calls upon that zeal for study to play a significant role in the production which occurs in a studio space. A studio is more or less artful to the degree that the artist who occupies it is committed to the continuing education in his or her formal discipline. Academic curricula categorize studio classes in order to prepare students for the rigors of building sets of skills which require a continuity of practice in order to achieve growth and mastery of their artistic expression. A versatile and creative mind will embrace the opportunity of such practice to innovate and experiment, which develops uniquely individual qualities of each artist's expression. Thus the method raises and maintains an art studio space above the level of a mere production facility or workshop. 
 
Safety is or may be a concern in studios, with some painting materials required to be handled, stored, or used properly to prevent poisoning, chemical burns, or fire.`
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

export default Space;
