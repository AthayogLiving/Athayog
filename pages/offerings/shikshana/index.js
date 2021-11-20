import Hero from '@/components/shared/Hero';
import { motion } from 'framer-motion';
import React from 'react';
import athayogShikshana from 'public/athayogShikshana.jpg';
import Pricing from '@/components/shared/Pricing';
import InformationSplit from '@/components/shared/InformationSplit';
import ShikshanaTable from '@/components/shared/ShikshanaTable';
import ShikshanaInformation from '@/components/shared/ShikshanaInformation';
import { getOffer } from '@/lib/db/offerings';
import HomeLayout from '@/components/layout/HomeLayout';
import {
     Box,
     Flex,
     Grid,
     Heading,
     ListItem,
     Text,
     UnorderedList
} from '@chakra-ui/react';
import Certificate from '@/components/home/Certificate';
import ShikshanaGraduates from '@/components/shared/ShikshanaGraduates';
import ShikshanaCourses from '@/components/shared/ShikshanaCourses';

export async function getStaticProps(context) {
     const { offers } = await getOffer('shikshana');

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

const Shikshana = ({ offers, notFound }) => {
     const pageData = {
          name: 'Shikshana Pada',
          heroImage: athayogShikshana,
          whatis: `Climb up the career ladder with the certificate programs and teachers’ training under AthaYog Shikshana Pada.`,
          secondBlock: `What you get`,
          description: `To be a good teacher, You have to first be a good student. Start your learning Journey with us and craft yourself into becoming a Yoga teacher. Build your own knowledge and practice and nurture others through learning the skills of being a good teacher. Athayog Shikshana Pada brings to you Yoga instructor Course (YIC) Affiliated to VYASA, Bengaluru, RYT 200 Affiliated to Yoga Alliance, USA`
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
               {/* <Certificate /> */}
               <InformationSplit pageData={pageData} />
               {/* <ShikshanaInformation /> */}
               <ShikshanaCourses />
               {/* <ShikshanaTable /> */}
               <Grid
                    bg="gray.50"
                    placeItems="center"
                    margin="auto"
                    padding={{
                         base: '2rem 0',
                         md: '3rem 0',
                         lg: '5rem 0'
                    }}
               >
                    <Text fontWeight="normal" fontSize="xl" fontStyle="italic">
                         Contact us for more Information
                    </Text>
               </Grid>
          </motion.div>
     );
};

export default Shikshana;
Shikshana.Layout = HomeLayout;
