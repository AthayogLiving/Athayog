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
import { getImageLinkFromFirebaseHome } from '@/lib/db/db-admin';

export async function getServerSideProps(context) {
     const firebaseImages = await getImageLinkFromFirebaseHome(
          'carousel',
          false
     );
     const images = JSON.parse(JSON.stringify(firebaseImages));
     return {
          props: { images } // will be passed to the page component as props
     };
}

export default function Home({ images }) {
     return (
          <motion.div
               exit={{ opacity: 0 }}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               duration="400"
          >
               <HeroCarousel images={images} />
               <Offerings />
               <Gallery />
               <Schedule schedule="general" />
               <Testimonials />
               <Faq />
               <Enquiry />
               <WhatsAppWidget
                    phoneNumber="+919611771434"
                    companyName="Athayog"
                    style={{ zIndex: 10 }}
               />
          </motion.div>
     );
}

Home.Layout = HomeLayout;
