import Certificate from '@/components/home/Certificate';
import Enquiry from '@/components/home/Enquiry';
import Events from '@/components/home/Events';
import Faq from '@/components/home/Faq';
import Gallery from '@/components/home/Gallery';
import GuideBook from '@/components/home/GuideBook';
import Hero from '@/components/home/Hero';
import HeroCarousel from '@/components/home/HeroCarousel';
import Offerings from '@/components/home/Offerings';
import RecentBlogs from '@/components/home/RecentBlogs';
import VideoTestimonials from '@/components/home/VideoTestimonials';
import HomeLayout from '@/components/layout/HomeLayout';
import Testimonials from '@/components/shared/Testimonials';
import { getImages, getTestimonials } from '@/lib/db/db-admin';
import { motion } from 'framer-motion';
import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

export async function getServerSideProps() {
     const reqGallery = await getImages('gallery');
     const reqTestimonials = await getTestimonials();

     const gallery = JSON.parse(JSON.stringify(reqGallery));
     const testimonials = JSON.parse(JSON.stringify(reqTestimonials));

     return {
          props: { gallery, testimonials }
     };
}

export default function Home({ gallery, testimonials }) {
     return (
          <motion.div
               exit={{ opacity: 0 }}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               duration="400"
          >
               <Hero />
               <Certificate />
               <Events />
               <Offerings />
               <VideoTestimonials />
               <Gallery images={gallery} />
               <Testimonials testimonials={testimonials} />
               <GuideBook />
               <RecentBlogs />
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
