import { Box, Divider, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

function KidsInfo() {
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
          <Stack
               bg="gray.50"
               py={{ base: '5', md: '20' }}
               px={{ base: '5', md: '20' }}
               textColor="black"
               spacing={10}
               divider={<Divider colorScheme="green" />}
          >
               {' '}
               {otherInfo.map(({ id, heading, para }) => {
                    return (
                         <Box key={id}>
                              <Heading
                                   fontSize={{ base: 'lg', md: 'xl' }}
                                   fontWeight="bold"
                                   borderBottom="2px solid"
                                   borderColor="green.900"
                                   width={{
                                        base: '100%',
                                        md: 'max-content'
                                   }}
                              >
                                   {heading}
                              </Heading>
                              <Stack
                                   fontSize="xl"
                                   mt={5}
                                   spacing={{ base: 0, md: 8 }}
                              >
                                   {para.map((text, idx) => {
                                        return (
                                             <Text
                                                  fontSize={{
                                                       base: 'md',
                                                       md: 'xl'
                                                  }}
                                                  key={idx}
                                             >
                                                  {text}
                                             </Text>
                                        );
                                   })}
                              </Stack>
                         </Box>
                    );
               })}
          </Stack>
     );
}

export default KidsInfo;
