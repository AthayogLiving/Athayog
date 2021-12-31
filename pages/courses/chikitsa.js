import Hero from '@/components/shared/Hero';
import { motion } from 'framer-motion';
import React from 'react';
import athayogChikitsa from 'public/athayogChikitsa.jpg';
import Pricing from '@/components/shared/Pricing';
import Register from '@/components/shared/Register';
import InformationSplit from '@/components/shared/InformationSplit';
import HomeLayout from '@/components/layout/HomeLayout';
import { getOffer } from '@/lib/db/offerings';
import { Box, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

export async function getStaticProps(context) {
     const { offers } = await getOffer('chikitsa');

     if (!offers) {
          return {
               notFound: true
          };
     }
     return {
          props: {
               offers: JSON.parse(JSON.stringify(offers)),
               notFound: false
          },
          revalidate: 1
     };
}

const Chikitsa = ({ offers }) => {
     const router = useRouter();
     const pageData = {
          name: 'Chikitsa',
          heroImage: athayogChikitsa,
          whatis: `If you’re seeking wellness and better health, AthaYog Chikitsa is designed to help you adapt into Yogic living as a medium of alternative healing and wellness, enriched by the power of Ayurveda.`,
          secondBlock: `What you get`,
          description: `We empower you to embrace the deepest, subtler levels that exist within you, and work together with you to open the door to your wellbeing. By reprogramming the Trigunas, or attributes inherent to you, and analysing your Doshas, we decode the Ayurvedic constitution of your body, enabling you to lead a wholesome life.`,
          pricing: 'Contact For More'
     };
     const apiPricing = [];
     offers.map((data) => {
          apiPricing.push({
               id: data.id,
               courseName: data.name,
               description: data.description,
               duration: data.isTrial
                    ? data.days + ' Trial'
                    : data.days == 0
                    ? 'No Duration'
                    : data.days + ' Days',
               durationNum: data.days,
               isTrial: data.isTrial,
               isGeneral: data.isGeneral,
               price: data.price
          });
     });
     return (
          <motion.div
               exit={{ opacity: 0 }}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
          >
               <Hero pageData={pageData} />
               <Box
                    margin="auto"
                    padding={{
                         base: '2rem',
                         md: '3rem',
                         lg: '3rem'
                    }}
                    width="100%"
               >
                    <Button
                         leftIcon={<ArrowBackIcon />}
                         size="md"
                         variant="outline"
                         mb={10}
                         onClick={() => router.push('/courses')}
                    >
                         Back To Courses
                    </Button>
               </Box>
               <InformationSplit pageData={pageData} />
               <Pricing pricing={apiPricing} />
               <Register registerTo={pageData.name.toLocaleLowerCase()} />
          </motion.div>
     );
};

export default Chikitsa;
Chikitsa.Layout = HomeLayout;
