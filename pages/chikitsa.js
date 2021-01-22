import Hero from '@/components/shared/Hero';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

function chikitsa() {
    const pageData = {
        name: 'Chikitsa'
    };
    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <Hero pageData={pageData} />
        </motion.div>
    );
}

export default chikitsa;
