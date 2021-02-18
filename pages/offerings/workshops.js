import Hero from '@/components/shared/Hero';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import athayogWorkshop from 'public/athayogWorkshop.jpg';
import Information from '@/components/shared/Information';
import Classes from '@/components/shared/Classes';
import Pricing from '@/components/shared/Pricing';
import Register from '@/components/shared/Register';
import InformationSplit from '@/components/shared/InformationSplit';
import { getOffer } from '@/lib/db/offerings';

export async function getStaticProps(context) {
     const { offers } = await getOffer('workshops');

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

const Workshops = ({ offers, notFound }) => {
     const pageData = {
          name: 'Workshops',
          heroImage: athayogWorkshop,
          whatis: `Experience a profound approach to Yogic knowledge and living. Explore the deeper, subtler and more authentic aspects of Yoga as we share our collective wisdom on specialized and focussed topics in the Yogic realm.`,
          secondBlock: `What you get`,
          description: `Workshop of the Week is a 75-minute workshop that we organize weekly, covering individual subjects to give you a more insightful perspective on the subtleties of the Yogic cosmos.\nWorkshop of the Month is a 10-hour series of 4 workshops in a month, branching out into broader Yogic themes, stemming from time-honoured wisdom.`
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
               <InformationSplit pageData={pageData} />
               {notFound || offers.length == 0 ? null : (
                    <Pricing pricing={apiPricing} />
               )}
               <Register registerTo={pageData.name.toLocaleLowerCase()} />
          </motion.div>
     );
};

export default Workshops;
