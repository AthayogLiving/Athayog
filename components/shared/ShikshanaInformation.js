import React from 'react';

import {
     Box,
     Center,
     chakra,
     Divider,
     Flex,
     Heading,
     HStack,
     List,
     ListIcon,
     ListItem,
     OrderedList,
     Stack,
     Text,
     UnorderedList
} from '@chakra-ui/react';
const ShikshanaInformation = () => {
     return (
          <Flex
               margin="auto"
               padding={{
                    base: '2rem 0',
                    md: '3rem 0',
                    lg: '3rem 0'
               }}
               justifyContent="center"
               alignItems="center"
               width="100vw"
               bg="primaryWhite"
          >
               <Flex
                    justifyContent="center"
                    direction="column"
                    alignItems="flex-start"
                    width="80vw"
               >
                    <Heading
                         fontWeight="normal"
                         fontSize={{
                              base: '1.5rem',
                              md: '2rem',
                              lg: '2rem'
                         }}
                    >
                         Courses
                    </Heading>
                    <Flex
                         padding={{
                              base: '1rem 0',
                              md: '1rem 0',
                              lg: '2rem 0'
                         }}
                         justifyContent="space-between"
                    >
                         <Stack spacing={2}>
                              <Text
                                   fontWeight="light"
                                   textAlign="left"
                                   fontSize={{
                                        base: '1rem',
                                        md: '1rem',
                                        lg: '1.2rem'
                                   }}
                              >
                                   <chakra.span fontWeight="medium">
                                        1. YIC
                                   </chakra.span>{' '}
                                   - Yoga Instructor course
                              </Text>
                              <Text>
                                   The yoga instructor course is a one month
                                   course that helps an individual to shape
                                   their personality and transform their
                                   knowledge to teach yoga comprehensively. It
                                   is propounded by Swami Vivekananda, the
                                   Indian Hindu monk who was a key figure in the
                                   introduction of the Indian philosophies of
                                   Vedanta and Yoga. The objective of this
                                   course is to provide instructions, training,
                                   research and advancement of all the streams
                                   of yoga and its applications. Undertaking
                                   extra-mural studies and activities will help
                                   contribute to Peace, Poise, Harmony, Love,
                                   Health & Happiness. It brings together theory
                                   and practical subjects that cover breathing
                                   techniques, asanas, Sat Kriyas, Pranayama and
                                   meditation techniques. The theory would
                                   include an introduction to Patanjali and
                                   Hatha yoga along with studies of Spiritual
                                   Masters and Applications of Yoga.
                              </Text>
                         </Stack>
                    </Flex>

                    <Box mt={10}>
                         <Heading
                              fontWeight="normal"
                              fontSize={{
                                   base: '1.5rem',
                                   md: '2rem',
                                   lg: '2rem'
                              }}
                         >
                              The syllabus consists of topics like :
                         </Heading>
                         <Flex
                              padding={{
                                   base: '1rem 0',
                                   md: '1rem 0',
                                   lg: '2rem 0'
                              }}
                              justifyContent="space-between"
                         >
                              <OrderedList spacing={20}>
                                   <HStack
                                        justifyContent="space-between"
                                        alignItems="flex-start"
                                        spacing={{
                                             base: 0,
                                             md: 20,
                                             lg: 20
                                        }}
                                        flexDirection={{
                                             base: 'column',
                                             md: 'row',
                                             lg: 'row'
                                        }}
                                   >
                                        <Box>
                                             <ListItem>
                                                  Introduction to Yoga and its
                                                  Streams
                                             </ListItem>
                                             <ListItem>
                                                  Life and Message of Spiritual
                                                  Masters & Indian Culture
                                             </ListItem>
                                             <ListItem>
                                                  Report Writing & Presentation
                                             </ListItem>
                                             <ListItem>
                                                  Kriyā, Āsana, Prāṇāyāma,
                                                  Dhyāna – Practice &
                                                  Presentation
                                             </ListItem>
                                             <ListItem>
                                                  Teaching Techniques -
                                                  Worksheet Writing &
                                                  Presentation
                                             </ListItem>
                                             <ListItem>
                                                  Karma Yoga, Maitri Milana,
                                                  Kīrtana, Krīḍa Yoga & Ānanda
                                                  Sabhā
                                             </ListItem>
                                        </Box>
                                   </HStack>
                              </OrderedList>
                         </Flex>
                    </Box>

                    <Flex
                         padding={{
                              base: '1rem 0',
                              md: '1rem 0',
                              lg: '2rem 0'
                         }}
                         justifyContent="space-between"
                    >
                         <Stack spacing={5}>
                              <Text>
                                   There will also be yogic games and
                                   assignments to improve concentration,
                                   stamina, memory, awareness and a happy
                                   assembly program to tune oneself with nature,
                                   happiness and bliss. The completion of this
                                   course will result in the ability to teach
                                   yoga to the public who are also having health
                                   concerns.
                              </Text>
                              <Text>
                                   Teaching methodologies for students consist
                                   of presentations, application of eight steps,
                                   demonstration, group discussions and
                                   practice, library facility, report writing,
                                   one-to-one discussions, lectures and review
                                   classes. Other value systems and teachings
                                   that would be inculcated are Maitrimilan
                                   (chanting of slok based on the Gita), Karma
                                   Yoga (self-less service), Sattvic food,
                                   spiritual guidance, changes in lifestyle and
                                   other important values.
                              </Text>
                         </Stack>
                    </Flex>
                    <Box mt={10}>
                         <Heading
                              fontWeight="normal"
                              fontSize={{
                                   base: '1.5rem',
                                   md: '2rem',
                                   lg: '2rem'
                              }}
                         >
                              Course Inclusion
                         </Heading>
                         <Flex
                              padding={{
                                   base: '1rem 0',
                                   md: '1rem 0',
                                   lg: '2rem 0'
                              }}
                              justifyContent="space-between"
                         >
                              <OrderedList spacing={20}>
                                   <HStack
                                        justifyContent="space-between"
                                        alignItems="flex-start"
                                        spacing={{
                                             base: 0,
                                             md: 20,
                                             lg: 20
                                        }}
                                        flexDirection={{
                                             base: 'column',
                                             md: 'row',
                                             lg: 'row'
                                        }}
                                   >
                                        <Box>
                                             <ListItem>
                                                  Classical Asanas
                                             </ListItem>
                                             <ListItem>Pranayama</ListItem>
                                             <ListItem>Yoga Nidra</ListItem>
                                             <ListItem>
                                                  Anatomy & Physiology
                                             </ListItem>
                                             <ListItem>Philosophy</ListItem>
                                             <ListItem>
                                                  Yoga Text / Yoga Sutra -
                                                  Bhagvatgita
                                             </ListItem>
                                             <ListItem>Ayurveda</ListItem>
                                        </Box>
                                        <Box>
                                             <ListItem>Shatkarma</ListItem>
                                             <ListItem>Chanting</ListItem>
                                             <ListItem>2 Days Retreat</ListItem>
                                             <ListItem>
                                                  Teaching Methodology
                                             </ListItem>
                                             <ListItem>
                                                  Class Apprenticeship
                                             </ListItem>
                                             <ListItem>Internship</ListItem>
                                             <ListItem>
                                                  Career Opportunity
                                             </ListItem>
                                        </Box>
                                   </HStack>
                              </OrderedList>
                         </Flex>
                         <Divider my={5} colorScheme="teal" />
                         <Flex
                              padding={{
                                   base: '1rem 0',
                                   md: '1rem 0',
                                   lg: '2rem 0'
                              }}
                              justifyContent="space-between"
                         >
                              <Stack spacing={2}>
                                   <Text
                                        fontWeight="light"
                                        textAlign="left"
                                        fontSize={{
                                             base: '1rem',
                                             md: '1rem',
                                             lg: '1.2rem'
                                        }}
                                   >
                                        <chakra.span fontWeight="medium">
                                             2. YIC
                                        </chakra.span>{' '}
                                        - RYT 200 course
                                   </Text>
                                   <Stack spacing={5}>
                                        {' '}
                                        <Text>
                                             AthaYog Living is an institution of
                                             Yoga devoted to preserving its
                                             long-standing legacy by propagating
                                             true purpose, philosophies and
                                             practices. The name Athayog is
                                             derived from the combination of two
                                             Sanskrit words, ‘Atha’ which
                                             translates to ‘now’ and ‘Yog’ than
                                             means ‘to join’. Our deep-rooted
                                             knowledge in this field comes from
                                             age-old scriptures like the Vedas,
                                             Sankhya Philosophy, Bhagwat Geeta,
                                             Patanjali’s Yoga Sutras, Hatha Yoga
                                             Pradipika and the teachings of all
                                             our gurus. We also have a team of
                                             young, energetic and dynamic
                                             individuals who are constantly
                                             enhancing their Yogic knowledge.
                                        </Text>
                                        <Text>
                                             Registered Yoga Teacher (RYT) is a
                                             distinction given to yoga teachers
                                             whose training and teaching
                                             experience meet Yoga Alliance
                                             requirements. A registered Yoga
                                             teacher must complete training with
                                             a Registered Yoga School (RYS),
                                             which is confirms by Yoga Alliance.
                                             Teachers can register as an RYT 200
                                             post completion of a 200 hours
                                             teacher training program registered
                                             with Yoga Alliance. All training
                                             hours must come from the same
                                             school.
                                        </Text>
                                        <Text>
                                             The RYT 200 course at AthaYog is
                                             taught by our Principal Teacher and
                                             Founder, Sharath Basavaraju. His
                                             teachings come from Swami
                                             Satyananda Saraswati from Bihar
                                             School of Yoga and formal Yogic
                                             education from a Swami Vivekananda
                                             Yoga Anusandhana Samsthana.
                                        </Text>
                                   </Stack>
                              </Stack>
                         </Flex>
                    </Box>
               </Flex>
          </Flex>
     );
};

export default ShikshanaInformation;
