import {
     Box,
     Heading,
     ListItem,
     OrderedList,
     Text,
     Accordion,
     AccordionItem,
     AccordionButton,
     AccordionPanel,
     AccordionIcon,
     chakra,
     Grid,
     Flex,
     Stack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

function Info() {
     const information = [
          {
               id: 1,
               title: 'Sunset Yoga Sessions & Nature walks',
               description: [
                    'Get in-depth instruction for guided Yoga sessions led by our Founder Sharath as you learn asanas in the serene space. Refresh your mind and soul as you take a stroll through nature. Attune your senses to nature as you experience its healing power.'
               ]
          },
          {
               id: 2,
               title: 'Pranayama & Meditation',
               description: [
                    'Enhance your spiritual experience and mindfulness with Pranayama or breathing techniques. Steady your mind-body and learn to tap into your breath. Pranayama is the classical practice of controlling the breath, which in turn is the source of Prana (life force). Return to the quality of your natural breath through various breathing practices and restore your bodily health and calm your mind. ',
                    'Meditate with the deep awareness gained through Pranayama.Enhance your emotional and mental well-being as you learn to cope with everyday stress through meditation, Dhyana'
               ]
          },
          {
               id: 3,
               title: 'Yoga Nidra ',
               description: [
                    'Practice the ancient practice of conscious relaxation through guided Yoga Nidra sessions. Find full-body relaxation and ease stress through Yoga Nidra as it allows you to systematically and holistically unwind your entire body from deep within. Still the waves of your mind as you consciously enter into a sleep state.'
               ]
          },
          {
               id: 4,
               title: 'Yoga Lecture Series by Founder',
               description: [
                    'Learn everything you need to know beyond Yoga asanas in the theory and philosophy of ancient wisdom. As our founder & principal teacher, Sharath takes you through the true wisdom of Yoga, gain insights on how to incorporate the practice into your daily life as a lifelong companion.'
               ]
          },
          {
               id: 5,
               title: 'Satsangs - Group chanting',
               description: [
                    'Find your spiritual community and spark spiritual insights in a group setting with other practitioners during Satsang. Chant mantras and meditate together in Satsang gathering and feel the sense of belonging. '
               ]
          },
          {
               id: 6,
               title: ' Guided Cleansing Practice',
               description: [
                    'Reap the therapeutic benefits of classic Yoga cleansing practices. Detox and purify the body from inside out as you get ready for summer. Cure the bodily impurities as we guide you through each cleansing ritual.'
               ]
          },
          {
               id: 7,
               title: ' Shared accomodation and 3 meals a day',
               description: [
                    'Shared accommodation and refreshing meals are provided at Fig & Lily, Kanakapura. Nestled amidst nature, get attuned to the Yogic way of life for two whole days and feel rejuvenated. '
               ]
          },
          {
               id: 8,
               title: 'One-to-one sessions with Principal Teacher, Sharath',
               description: [
                    'Get personalized insights on your Yoga practice from the Founder himself and evolve your spiritual journey as he guides you with a wholesome approach.'
               ]
          }
     ];

     return (
          <Box px={{ base: 5, md: 10 }} py={{ base: 10, md: 20 }}>
               <Heading
                    as="h3"
                    fontSize="xl"
                    textColor="green.800"
                    textAlign="center"
                    textTransform="uppercase"
               >
                    AthaYog Living{' '}
               </Heading>
               <Heading as="h3" mt={3} fontSize="3xl" textAlign="center">
                    Spiritual Yoga Retreat Includes
               </Heading>

               <Box>
                    <Grid
                         gridTemplateColumns={{
                              base: 'repeat(1,1fr)',
                              md: 'repeat(2,1fr)'
                         }}
                         gridGap={{ base: 5, md: 10 }}
                         mt={{ base: 10, md: 20 }}
                    >
                         {information.map((list, idx) => {
                              return (
                                   <Flex
                                        key={idx}
                                        as={motion.div}
                                        direction="column"
                                        bg="green.50"
                                        p={5}
                                        whileHover={{
                                             backgroundColor:
                                                  'rgb(198, 246, 213)'
                                        }}
                                        transition={{ delay: 0.5 }}
                                        initial="hidden"
                                        animate="visible"
                                   >
                                        <Text fontSize="xl" fontWeight="bold">
                                             {list.id}. {list.title}
                                        </Text>
                                        <Stack
                                             spacing={5}
                                             mt={3}
                                             ml={4}
                                             fontSize="lg"
                                             textColor="gray.600"
                                        >
                                             {list.description.map(
                                                  (desc, idx) => {
                                                       return (
                                                            <Text key={idx}>
                                                                 {desc}
                                                            </Text>
                                                       );
                                                  }
                                             )}
                                        </Stack>
                                   </Flex>
                              );
                         })}
                    </Grid>
               </Box>
          </Box>
     );
}

export default Info;
