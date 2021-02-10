import Faq from '@/components/home/Faq';
import Gallery from '@/components/home/Gallery';
import Hero from '@/components/home/Hero';
import Offerings from '@/components/home/Offerings';
import Schedule from '@/components/shared/Schedule';
import Enquiry from '@/components/home/Enquiry';
import { motion } from 'framer-motion';
import ScrollToTop from '@/components/shared/ScrollToTop';
import Testimonials from '@/components/shared/Testimonials';

export default function Home() {
     return (
          <motion.div
               exit={{ opacity: 0 }}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               duration="400"
          >
               <Hero />
               <Offerings />
               <Gallery />
               <Schedule />
               <Testimonials />
               <Faq />
               <Enquiry />
          </motion.div>
     );
}
