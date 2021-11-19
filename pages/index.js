import Faq from '@/components/home/Faq';
import Gallery from '@/components/home/Gallery';
import Offerings from '@/components/home/Offerings';
import Enquiry from '@/components/home/Enquiry';
import { motion } from 'framer-motion';
import Testimonials from '@/components/shared/Testimonials';
import HeroCarousel from '@/components/home/HeroCarousel';
import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import HomeLayout from '@/components/layout/HomeLayout';
import { getImages, getTestimonials } from '@/lib/db/db-admin';
import Certificate from '@/components/home/Certificate';
import VideoTestimonials from '@/components/home/VideoTestimonials';
import RecentBlogs from '@/components/home/RecentBlogs';
import LeadModal from '@/components/home/LeadModal';

export async function getStaticProps() {
     const reqCarousel = await getImages('carousel');
     const reqGallery = await getImages('gallery');
     const reqTestimonials = await getTestimonials();
     const carousel = JSON.parse(JSON.stringify(reqCarousel));
     const gallery = JSON.parse(JSON.stringify(reqGallery));
     const testimonials = JSON.parse(JSON.stringify(reqTestimonials));

     return {
          props: { carousel, gallery, testimonials },
          revalidate: 60
     };
}

export default function Home({ carousel, gallery, testimonials }) {
     return (
          <motion.div
               exit={{ opacity: 0 }}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               duration="400"
          >
               <HeroCarousel images={carousel} />
               <Certificate />
               <Offerings />
               <Gallery images={gallery} />
               <VideoTestimonials />
               <Testimonials testimonials={testimonials} />
               <RecentBlogs />
               <Faq />
               <Enquiry />
               <WhatsAppWidget
                    phoneNumber="+919611771434"
                    companyName="Athayog"
                    style={{ zIndex: 10 }}
               />
               <LeadModal />
          </motion.div>
     );
}

Home.Layout = HomeLayout;
