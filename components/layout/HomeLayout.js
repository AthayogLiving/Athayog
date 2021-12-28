import { Button, useColorMode } from '@chakra-ui/react';
import Navbar from '../home/Navbar';
import Footer from '../shared/Footer';
import ScrollToTop from '../shared/ScrollToTop';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

const HomeLayout = ({ children }) => {
     const { colorMode, toggleColorMode } = useColorMode();

     useEffect(() => {
          if (colorMode === 'dark') {
               toggleColorMode('light');
          }
     }, [colorMode, toggleColorMode]);
     return (
          <div>
               <Navbar />
               {children}
               <ScrollToTop key={uuidv4()} />

               <Footer />
          </div>
     );
};

export default HomeLayout;
