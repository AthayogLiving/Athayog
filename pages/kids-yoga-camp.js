import HomeLayout from '@/components/layout/HomeLayout';
import KidsYogaForm from '@/components/shared/KidsYogaForm';
import NavbarHelper from '@/components/shared/NavbarHelper';
import {
     AspectRatio,
     Box,
     Button,
     chakra,
     Divider,
     Flex,
     Grid,
     Heading,
     List,
     ListIcon,
     ListItem,
     Stack,
     StackDivider,
     Text
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import kids1 from 'public/kids-yoga-1.jpeg';
import kids2 from 'public/kids-yoga-2.jpg';
import kids3 from 'public/kids-yoga-3.jpg';
import kids5 from 'public/kids-yoga-5.jpg';
import kids6 from 'public/kids-yoga-6.jpg';
import kids7 from 'public/kids-yoga-7.jpg';
import React, { useState } from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
const MotionText = motion(Text);

function KidsYogaCamp() {
     const [isLoading, setLoading] = useState(true);
     const whyEnroll = [
          {
               id: 0,
               question: 'JUMP START YOUR KIDS’ YOGA PRACTICE!',
               answer: 'If Yoga is new to you or your kids’, this is a great time to introduce them to the amazing life-transforming tool of Yoga. Yoga unlike other sports and activities is a mind-body practice that helps them in every aspect of life. Yoga helps build self-awareness and body-awareness at a very young age.'
          },
          {
               id: 1,
               question: 'A STRONG & HEALTHY FOUNDATION ',
               answer: 'What better way than Yoga to set a strong base for your kid’s overall well-being. They don’t just learn the poses to bend their bodies and move in different ways but they also learn how to stay still, breathe better and maintain their health.'
          },
          {
               id: 2,
               question: 'ASANAS AS A TOOL TO EXPLORE',
               answer: 'Kids learn how to pause as they hold in an asana or yoga pose. They learn to express, create, balance, stretch, twist and even tell a story. At AthaYog kid’s summer camp, our interdisciplinary approach to learning through play helps them get curious, explore and navigate life as they grow up.'
          },
          {
               id: 3,
               question: 'BALANCE THE EXCITEMENT OF CHILDHOOD WITH STILLNESS',
               answer: 'It’s not just your kid but we live in a fast-paced world and even the little ones are affected by it. Let them learn the art of stillness and mindfulness at the Kids’ Yoga Camp. In the long run, it will increase their focus and concentration to get better at whatever they do and perform.'
          }
     ];

     const classesIncludes = [
          'Yoga class',
          'Chanting / Satsang ',
          'Yoga game',
          'Group activity / Art & Craft ',
          'Sattvik snack / Healthy snack'
     ];

     const imageCollection = [
          { id: 1, image: kids1, alt: 'Stand in tree pose' },
          { id: 2, image: kids2, alt: 'Bend in mountain pose' },
          { id: 3, image: kids3, alt: 'Hold in crow pose' },
          { id: 4, image: kids5, alt: 'Breathe in fish pose!' }
     ];

     const otherInfo = [
          {
               id: 0,
               heading: 'LET THEM LEARN TO HOW TO BREATHE, FIRST!',
               para: [
                    'The essential art and practice of breathing is something which is not taught to kids even in schools. At the Kid’s Camp, children learn various breathing techniques to boost their immunity, focus better and live healthily!',
                    'From Bee’s breath (Brahmmari Pranayama) to Ocean Breath (Ujjayi Breath), the little ones will learn to breathe better.  Because what other preventive care than the breath in your own body to prevent and heal from diseases?'
               ]
          },
          {
               id: 1,
               heading: 'GROW UP WITH YOGA!',
               para: [
                    'Unlike other activities, yoga is suitable for all children and can be continued as they grow up to be a stronger and healthier adult. Apart from that, learning Yoga at the Kids’ Camp helps them develop their imagination, visualisation and expression and their entire personality. Visualisation helps them learn better at school and remember concepts for a long time.'
               ]
          },
          {
               id: 2,
               heading: '10 DAYS OF VARIOUS FUN ACTIVITIES!',
               para: [
                    'Kids love movement and variety! At Kids’ Camp, there is no repetition of the same lesson as they will learn new asanas and activities every day!',
                    'Our trained teachers use different teaching methods and learning tricks to make every day interesting so that kids’ leave the camp wanting to come back for more the next day.'
               ]
          },
          {
               id: 3,
               heading: 'EVOLVE TO THE NEW NORMAL WITH YOGA!',
               para: [
                    'Today’s world is very different from the world we grew up in! From the fast-paced environment to the constant online presence for even everyday classes, kids need to adapt to learn.',
                    'This doesn’t just affect their mind but sometimes they also undergo stress like adults. Kids need to know how to manage stress as much as adults do.',
                    'For example, online classes require kids to watch the screen for too long as they use screentime for entertainment as well. So doing some simple eye exercises between each class helps them protect their eyes. At Kid’s Camp, we teach various tools like this to equip them for the new normal.'
               ]
          }
     ];
     return (
          <Box>
               <NavbarHelper />
               <Flex
                    height="80vh"
                    justifyContent="center"
                    alignItems="center"
                    bgSize="cover"
                    bgPosition="center"
                    direction="column"
                    position="relative"
                    background="linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))"
               >
                    <Box zIndex={-1}>
                         <Image
                              src={kids6}
                              layout="fill"
                              objectFit="cover"
                              alt="hero"
                              placeholder="blur"
                         />
                    </Box>
                    <Box width="container.lg" textAlign="center">
                         {' '}
                         <Heading
                              fontSize="5xl"
                              fontWeight="light"
                              textColor="white"
                         >
                              Unlock Your Little Ones Potential At AYL&#39;S
                              <br />
                              <chakra.span
                                   textColor="aygreen.300"
                                   cursor="pointer"
                              >
                                   Kids Yoga Camp
                              </chakra.span>
                         </Heading>
                         <Text
                              margin="0 auto"
                              fontSize="xl"
                              textColor="aygreen.50"
                              mt="16"
                         >
                              It’s that time of the year when the days are long
                              and hot!{' '}
                              <chakra.span fontWeight="medium">
                                   AthaYog’s Summer Kid’s Camp{' '}
                              </chakra.span>
                              to give you and your kids’ a break!
                         </Text>
                    </Box>
                    <Stack
                         border="1.5px solid"
                         borderColor="gray.100"
                         py="3"
                         boxShadow="base"
                         bg="white"
                         px="5"
                         rounded="base"
                         spacing={{ base: '5', md: '8' }}
                         width="container.lg"
                         position="absolute"
                         bottom="-20px"
                         divider={<StackDivider borderColor="gray.300" />}
                         mt="8"
                         align={{ base: 'baseline', md: 'center' }}
                         justifyContent={{
                              base: 'space-between',
                              md: 'space-evenly'
                         }}
                         direction={{ base: 'column', md: 'row' }}
                    >
                         <Flex direction="column" alignItems="center">
                              <Button
                                   variant="solid"
                                   colorScheme="green"
                                   href=""
                              >
                                   Register Now
                              </Button>
                         </Flex>
                         <Flex direction="column">
                              <Box textColor="gray.600">Age</Box>{' '}
                              <Box textColor="gray.900" fontWeight="medium">
                                   6 - 11yr
                              </Box>
                         </Flex>
                         <Flex direction="column">
                              <Box textColor="gray.600">Date</Box>{' '}
                              <Box textColor="gray.900" fontWeight="medium">
                                   2nd May - 13th May
                              </Box>
                         </Flex>
                         <Flex direction="column">
                              <Box textColor="gray.600">Time</Box>{' '}
                              <Box textColor="gray.900" fontWeight="medium">
                                   11am - 1pm{' '}
                              </Box>
                         </Flex>
                         <Flex direction="column">
                              <Box textColor="gray.600">Location</Box>
                              <Box textColor="gray.900" fontWeight="medium">
                                   Indiranagar / KR Puram / Online
                              </Box>
                         </Flex>
                    </Stack>{' '}
               </Flex>

               <Box
                    margin="0 auto"
                    textColor="green.900"
                    bg="green.50"
                    textAlign="center"
                    w="100%"
               >
                    {' '}
                    <Grid
                         gridTemplateColumns="repeat(2,1fr)"
                         gridGap="10"
                         alignItems="center"
                         justifyContent="space-evenly"
                         width="100%"
                    >
                         <Box>
                              <Text margin="0 auto" fontSize="4xl">
                                   This summer, let your kids chill out in their
                                   own zone engaged in fun activities and
                                   learning.
                              </Text>
                         </Box>
                         <Box
                              width="100%"
                              bg="white"
                              py={{ base: '5', md: '20' }}
                         >
                              <List
                                   width="80%"
                                   spacing={3}
                                   fontSize="xl"
                                   textAlign="left"
                                   margin="0 auto"
                              >
                                   <ListItem>
                                        <ListIcon
                                             as={BsArrowRightCircleFill}
                                             color="green.500"
                                        />
                                        Move, Pose & Breathe in the Yoga Asana
                                        Class
                                   </ListItem>
                                   <ListItem>
                                        <ListIcon
                                             as={BsArrowRightCircleFill}
                                             color="green.500"
                                        />
                                        Chant your Hearts out at Satsang
                                   </ListItem>
                                   <ListItem>
                                        <ListIcon
                                             as={BsArrowRightCircleFill}
                                             color="green.500"
                                        />
                                        Learn through Play with Yoga games &
                                        more
                                   </ListItem>
                                   <ListItem>
                                        <ListIcon
                                             as={BsArrowRightCircleFill}
                                             color="green.500"
                                        />
                                        Group activities to Nurture the Social
                                        skills
                                   </ListItem>
                                   <ListItem>
                                        <ListIcon
                                             as={BsArrowRightCircleFill}
                                             color="green.500"
                                        />
                                        Sattvic snacks to Build Healthy Eating
                                        Habits
                                   </ListItem>
                              </List>
                         </Box>
                    </Grid>
               </Box>

               <Box
                    py={{ base: '5', md: '20' }}
                    px="20"
                    margin="0 auto"
                    bg="gray.50"
               >
                    <Heading fontSize="3xl">
                         WHY SHOULD I ENROLL MY KIDS FOR THE SUMMER KID’S CAMP?
                    </Heading>

                    <Stack mt={16} spacing={10}>
                         {whyEnroll.map(({ id, question, answer }) => {
                              return (
                                   <Box key={id}>
                                        <MotionText
                                             fontWeight="bold"
                                             width="max-content"
                                             borderBottom="2px solid"
                                             borderColor="green.900"
                                             fontSize="xl"
                                             whileHover={{
                                                  backgroundColor: 'green',
                                                  transition: { duration: 1 }
                                             }}
                                        >
                                             {question}
                                        </MotionText>
                                        <Text fontSize="xl" mt={5}>
                                             {answer}
                                        </Text>
                                   </Box>
                              );
                         })}
                    </Stack>
                    <Text mt={10}>
                         LET YOUR KIDS LEARN TO{' '}
                         <chakra.span fontWeight="bold">COOPERATE</chakra.span>,{' '}
                         <chakra.span fontWeight="bold">CONNECT</chakra.span>{' '}
                         AND{' '}
                         <chakra.span fontWeight="bold">
                              COMMUNICATE
                         </chakra.span>
                         {'  '}
                         BETTER WITH THEIR INNER SELF & OTHERS AROUND THEM.
                    </Text>
               </Box>

               {/* Images Section */}
               <Box
                    width="100%"
                    bg="green.50"
                    py={{ base: '5', md: '20' }}
                    px="20"
               >
                    <Heading fontSize="3xl" fontWeight="light">
                         Learn more about NATURE as you
                    </Heading>
                    <Flex mt={8} justifyContent="center" gap={1}>
                         {imageCollection.map(({ id, image, alt }) => {
                              return (
                                   <Box key={id} flex="1 1 auto" width="100%">
                                        <AspectRatio
                                             maxW="100%"
                                             ratio={4 / 3}
                                             overflow="hidden"
                                        >
                                             <Image
                                                  src={image}
                                                  layout="fill"
                                                  objectFit="cover"
                                                  alt={alt}
                                                  placeholder="blur"
                                             />
                                        </AspectRatio>
                                        <Text
                                             bg="aygreen.600"
                                             textColor="aygreen.50"
                                             py={2}
                                             px={5}
                                        >
                                             {alt}
                                        </Text>
                                   </Box>
                              );
                         })}
                    </Flex>
                    <Text mt={8} fontWeight="light" fontSize="xl">
                         At the Kid’s Camp, we teach poses in Yoga inspired by
                         animals, plants and stories from nature and mythology.
                    </Text>
               </Box>

               <Stack
                    bg="gray.50"
                    py={{ base: '5', md: '20' }}
                    px="20"
                    textColor="black"
                    spacing={10}
                    divider={<Divider colorScheme="green" />}
               >
                    {' '}
                    {otherInfo.map(({ id, heading, para }) => {
                         return (
                              <Box key={id}>
                                   <Heading
                                        fontSize="xl"
                                        fontWeight="bold"
                                        borderBottom="2px solid"
                                        borderColor="green.900"
                                        width="max-content"
                                   >
                                        {heading}
                                   </Heading>
                                   <Stack fontSize="xl" mt={5} spacing={5}>
                                        {para.map((text, idx) => {
                                             return (
                                                  <Text fontSize="xl" key={idx}>
                                                       {text}
                                                  </Text>
                                             );
                                        })}
                                   </Stack>
                              </Box>
                         );
                    })}
               </Stack>

               <Box bg="green.50">
                    <Box
                         maxW="container.lg"
                         margin="0 auto"
                         py={{ base: '5', md: '10' }}
                         px="5"
                    >
                         <Box>
                              <Heading
                                   textTransform="uppercase"
                                   fontSize="2xl"
                                   mb={3}
                              >
                                   Register Now
                              </Heading>
                              <KidsYogaForm />
                         </Box>
                    </Box>
               </Box>
          </Box>
     );
}

export default KidsYogaCamp;
KidsYogaCamp.Layout = HomeLayout;
