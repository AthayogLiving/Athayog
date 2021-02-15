import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavbarMobile = () => {
     const [open, onOpen] = useState(false);
     const onHamburgerOpen = () => {
          onOpen(!open);
     };
     return (
          <>
               <GiHamburgerMenu onClick={() => onHamburgerOpen()} />

               {open ? (
                    <Box
                         height="100vh"
                         bg="red"
                         width="100vw"
                         zIndex={20}
                         position="absolute"
                    >
                         Content
                    </Box>
               ) : null}
          </>
     );
};

export default NavbarMobile;
