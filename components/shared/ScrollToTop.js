import { Box } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTop = () => {
     const [showScroll, setShowScroll] = useState(false);

     useEffect(() => {
          window.addEventListener('scroll', checkScrollTop);
          return function cleanup() {
               window.removeEventListener('scroll', checkScrollTop);
          };
     });

     const checkScrollTop = () => {
          if (!showScroll && window.pageYOffset > 400) {
               setShowScroll(true);
          } else if (showScroll && window.pageYOffset <= 400) {
               setShowScroll(false);
          }
     };

     const scrollTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
     };

     return (
          <Box
               style={{
                    position: 'fixed',
                    width: '100%',
                    bottom: '40px',
                    left: '40px',
                    alignItems: 'center',
                    height: '40px',
                    justifyContent: 'center',
                    zIndex: '1000',
                    cursor: 'pointer',
                    transition: 'opacity 0.4s',
                    opacity: '0.5'
               }}
          >
               <FaArrowCircleUp
                    onClick={scrollTop}
                    style={{
                         height: 40,
                         display: showScroll ? 'flex' : 'none'
                    }}
               />
          </Box>
     );
};

export default ScrollToTop;
