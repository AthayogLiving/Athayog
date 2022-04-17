import { Box, Flex, Text, chakra } from '@chakra-ui/react';
import React from 'react';

function Location() {
     return (
          <Box width="100%" flex="1 1 0">
               <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.176835734419!2d77.46250551527365!3d12.767025322787383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae45871d9df9a9%3A0x8f986e2cae065637!2sThe%20Fig%20%26%20Lily!5e0!3m2!1sen!2sin!4v1650210126251!5m2!1sen!2sin"
                    width="600"
                    height="600"
                    title="Athayog Google Map"
                    frameBorder={0}
                    style={{
                         border: 0,
                         height: '100%',
                         width: '100%',
                         borderRadius: '5px'
                    }}
                    allowFullScreen={false}
                    tabIndex={0}
               ></iframe>
          </Box>
     );
}

export default Location;
