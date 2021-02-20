import { Button } from '@chakra-ui/react';
import Navbar from '../home/Navbar';
import Footer from '../shared/Footer';
import ScrollToTop from '../shared/ScrollToTop';
import { v4 as uuidv4 } from 'uuid';

const HomeLayout = ({ children }) => (
     <div>
          <Navbar />
          {children}
          <ScrollToTop key={uuidv4()} />
          <Footer />
     </div>
);

export default HomeLayout;
