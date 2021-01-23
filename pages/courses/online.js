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
        whatis: `The studio of any artist, especially from the 15th to the 19th centuries, characterized all the assistants, thus the designation of paintings as "from the workshop of..." or "studio of..." An art studio is sometimes called an atelier, especially in earlier eras. In contemporary, English language use, "atelier" can also refer to the Atelier Method, a training method for artists that usually takes place in a professional artist's studio.  The above-mentioned "method" calls upon that zeal for study to play a significant role in the production which occurs in a studio space. A studio is more or less artful to the degree that the artist who occupies it is committed to the continuing education in his or her formal discipline. Academic curricula categorize studio classes in order to prepare students for the rigors of building sets of skills which require a continuity of practice in order to achieve growth and mastery of their artistic expression. A versatile and creative mind will embrace the opportunity of such practice to innovate and experiment, which develops uniquely individual qualities of each artist's expression. Thus the method raises and maintains an art studio space above the level of a mere production facility or workshop. Safety is or may be a concern in studios, with some painting materials required to be handled, stored, or used properly to prevent poisoning, chemical burns, or fire.`,
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

export default Online;
