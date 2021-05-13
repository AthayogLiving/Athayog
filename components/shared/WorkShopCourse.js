import React from 'react';

import {
     Box,
     Center,
     chakra,
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
const WorkShopCourse = () => {
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
                         direction="column"
                    >
                         <Text fontSize="xl">PRANAYAMA</Text>
                         <Stack spacing={2} mt={5}>
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
                                        1. Yoga for immunity
                                   </chakra.span>{' '}
                              </Text>
                              <Text textColor="gray.600">
                                   The immune system plays a vital role in
                                   keeping the body healthy by preventing
                                   infections. We cannot hide ourselves from not
                                   being infected but we can definitely work our
                                   way to strengthen our defense mechanism not
                                   only by taking medicine but by practicing
                                   yoga as a natural immunity booster. Yoga is a
                                   holistic practice which strengthens our body
                                   physically as well as mentally. As a result,
                                   the body’s defense mechanism also improves in
                                   such a condition. Asanas work on the entire
                                   body including the Cardio-vascular system,
                                   Respiratory system, Nervous system, Thyroid
                                   system etc. If all these systems work
                                   properly and remain healthy there will be no
                                   rise of any disease and it will always boost
                                   one’s immunity.
                              </Text>
                         </Stack>
                         <Stack spacing={2} mt={10}>
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
                                        2. Yoga Nidra
                                   </chakra.span>{' '}
                              </Text>
                              <Text textColor="gray.600">
                                   Yoga nidra benefits all those who have sleep
                                   concerns and insomnia. It is known to unwind
                                   your mind and keep you stress free. This
                                   practice provides relaxation and soothes the
                                   mind for deep sleep. Yoga nidra helps us
                                   maintain an emotionally neutral life.
                              </Text>
                         </Stack>
                         <Stack spacing={2} mt={10}>
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
                                        3. Astanga Yoga
                                   </chakra.span>{' '}
                              </Text>
                              <Text textColor="gray.600">
                                   ‘Astanga Yoga’ means ‘eight limbed yoga,’ and
                                   it is an authentic practice that can lead to
                                   liberation and greater awareness of our
                                   spiritual potential. The eight limbs of
                                   Astanga Yoga can be described as eight
                                   disciplines. They are yama, niyama, asana,
                                   pranayama, pratyahara, dharana, dhyana, and
                                   samadhi. Of these, the third limb, asana (the
                                   practice of yoga postures), is the most
                                   important for us to practice, and through it
                                   we can understand the other limbs. Yama
                                   (restraints) and niyama (observances) should
                                   be observed at all times, otherwise yoga
                                   asana practice is reduced to a purely
                                   physical pursuit. Pranayama (breath control)
                                   should only be taught after mastering asanas,
                                   when the nervous system is strengthened and
                                   prepared for more rigorous practice. The last
                                   four limbs are pratyahara (withdrawal of the
                                   senses), dharana (concentration), dhyana
                                   (meditation), and samadhi (blissful union).
                                   These final four are considered ‘internal
                                   limbs,’ meaning that they arise spontaneously
                                   as a result of practice of the first four and
                                   lead to the experience of ‘union.’
                              </Text>
                         </Stack>
                         <Stack spacing={2} mt={10}>
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
                                        4. Sivananda
                                   </chakra.span>{' '}
                              </Text>
                              <Text textColor="gray.600">
                                   Sivananda yoga is a spiritual yoga system
                                   founded by Vishnudevananda. This system gets
                                   its name from his guru Swami Sivananda that
                                   aims to spread the teachings of yoga and the
                                   message of world peace. This has been refined
                                   to practicing and teaching the ancient yogic
                                   knowledge for health, peace, unity in
                                   diversity and self-realization. The whole
                                   idea of sivananda yoga is to synthesize the
                                   four paths of yoga- karma yoga, bhakti yoga,
                                   raja yoga and jnana yoga through the 5 points
                                   of yoga as given by vishnudevananda.
                              </Text>
                         </Stack>
                         <Stack spacing={2} mt={10}>
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
                                        5. Yoga for covid
                                   </chakra.span>{' '}
                              </Text>
                              <Text textColor="gray.600">
                                   The class will start from opening rituals and
                                   grounding practices moving to shivananda,
                                   surya namaskar and postures of forward and
                                   backward bending along with twisting and
                                   lateral bending. Then QRT (quick relaxation
                                   technique) to kriya practice (kapalabhati),
                                   bhastrika and nadi suddhi pranayama and in
                                   the end deep relaxation technique (DRT)
                                   leading with A-U-M chanting and om chanting
                                   as well as ending rituals. It is helpful for
                                   recovery from covid. Although, it is not
                                   advisable for kids to participate in.
                              </Text>
                         </Stack>
                         <Stack spacing={2} mt={10}>
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
                                        6. Teaching Methodology
                                   </chakra.span>{' '}
                              </Text>
                              <Text textColor="gray.600">
                                   This is for existing yoga teachers so that
                                   they can fine tune their teaching skills. One
                                   can learn how to teach online, structure
                                   their classes and also assess practitioners.
                                   The workshop includes a combination of theory
                                   and practical experiences.
                              </Text>
                         </Stack>
                    </Flex>
               </Flex>
          </Flex>
     );
};

export default WorkShopCourse;
