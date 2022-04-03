import { Box, Heading, Stack, Text, chakra } from '@chakra-ui/react';
import React from 'react';
import { MotionText } from '../shared/MotionElements';

function EnrollKids() {
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
     return (
          <Box
               py={{ base: '5', md: '20' }}
               px={{ base: '5', md: '20' }}
               margin="0 auto"
               bg="gray.50"
          >
               <Heading fontSize={{ base: '2xl', md: '3xl' }}>
                    WHY SHOULD I ENROLL MY KIDS FOR THE SUMMER KID’S CAMP?
               </Heading>

               <Stack mt={{ base: 8, md: 16 }} spacing={10}>
                    {whyEnroll.map(({ id, question, answer }) => {
                         return (
                              <Box key={id}>
                                   <MotionText
                                        fontWeight="bold"
                                        width={{
                                             base: '100%',
                                             md: 'max-content'
                                        }}
                                        borderBottom="2px solid"
                                        borderColor="green.900"
                                        fontSize={{ base: 'lg', md: 'xl' }}
                                        whileHover={{
                                             backgroundColor: 'green',
                                             transition: { duration: 1 }
                                        }}
                                   >
                                        {question}
                                   </MotionText>
                                   <Text
                                        fontSize={{ base: 'md', md: 'xl' }}
                                        mt={5}
                                   >
                                        {answer}
                                   </Text>
                              </Box>
                         );
                    })}
               </Stack>
               <Text mt={10}>
                    LET YOUR KIDS LEARN TO{' '}
                    <chakra.span fontWeight="bold">COOPERATE</chakra.span>,{' '}
                    <chakra.span fontWeight="bold">CONNECT</chakra.span> AND{' '}
                    <chakra.span fontWeight="bold">COMMUNICATE</chakra.span>
                    {'  '}
                    BETTER WITH THEIR INNER SELF & OTHERS AROUND THEM.
               </Text>
          </Box>
     );
}

export default EnrollKids;
