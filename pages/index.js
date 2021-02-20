import Faq from '@/components/home/Faq';
import Gallery from '@/components/home/Gallery';
import Offerings from '@/components/home/Offerings';
import Schedule from '@/components/shared/Schedule';
import Enquiry from '@/components/home/Enquiry';
import { motion } from 'framer-motion';
import Testimonials from '@/components/shared/Testimonials';
import HeroCarousel from '@/components/home/HeroCarousel';
import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import HomeLayout from '@/components/layout/HomeLayout';

export default function Home() {
     return (
          <motion.div
               exit={{ opacity: 0 }}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               duration="400"
          >
               <HeroCarousel />
               <Offerings />
               <Gallery />
               <Schedule schedule="general" />
               <Testimonials />
               <Faq />
               <Enquiry />
               <WhatsAppWidget
                    phoneNumber="+919611771434"
                    companyName="Athayog"
               />
          </motion.div>
     );
}

Home.Layout = HomeLayout;
