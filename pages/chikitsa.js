import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

function chikitsa() {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <Box height="100vh" bg="red.100">
                <Box>
                    <h1>Hi From everyone</h1>
                    <p>asd localStorageManager</p>
                </Box>
            </Box>
        </motion.div>
    );
}

export default chikitsa;
