import Certificate from '@/components/home/Certificate';
import Enquiry from '@/components/home/Enquiry';
import Faq from '@/components/home/Faq';
import Gallery from '@/components/home/Gallery';
import GuideBook from '@/components/home/GuideBook';
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

export async function getStaticProps() {
     // const reqCarousel = await getImages('carousel');
     const reqGallery = await getImages('gallery');
     const reqTestimonials = await getTestimonials();
     // const carousel = JSON.parse(JSON.stringify(reqCarousel));
     const gallery = JSON.parse(JSON.stringify(reqGallery));
     const testimonials = JSON.parse(JSON.stringify(reqTestimonials));

     return {
          props: { gallery, testimonials },
          revalidate: 60
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
               <HeroCarousel />
               <Certificate />
               <Offerings />
               <Gallery images={gallery} />
               <VideoTestimonials />
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
