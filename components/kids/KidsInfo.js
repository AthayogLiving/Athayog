import { Box, Divider, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

function KidsInfo() {
     const otherInfo = [
          {
               id: 0,
               heading: 'LET THEM LEARN TO HOW TO BREATHE, FIRST!',
               para: [
                    'At the Kid’s Camp, children learn various breathing techniques to boost their immunity, focus better and live healthily! From Bee’s breath (Brahmmari Pranayama) to Ocean Breath (Ujjayi Breath), the little ones will learn to breathe better.'
               ]
          },
          {
               id: 1,
               heading: 'GROW UP WITH YOGA!',
               para: [
                    'Unlike other activities, yoga is suitable for all children and can be continued into adulthood. Apart from that, learning Yoga helps them develop their imagination, visualisation and expression and helps them find who they are.'
               ]
          },
          {
               id: 2,
               heading: '10 DAYS OF VARIOUS FUN ACTIVITIES!',
               para: [
                    'At the Kids’ Camp, there is no repetition of the same lesson as they will learn new asanas and activities every day, all tuned to satisfy their need for movement and variety.',
                    'Our trained teachers use different teaching methods and learning tricks to make every day interesting so that children leave the camp wanting to come back for more the next day..'
               ]
          },
          {
               id: 3,
               heading: 'EVOLVE TO THE NEW NORMAL WITH YOGA!',
               para: [
                    'Children today have started to undergo stress just like adults, and just like us, they need to know how to manage stress.',
                    'For example, online classes require kids to watch the screen for too long and they use screen-time for entertainment as well. Doing simple eye exercises between each class helps them protect their eyes. We teach various tools like this to equip them for the new normal.'
               ]
          }
     ];
     return (
          <Stack
               bg="gray.50"
               py={{ base: '10', md: '20' }}
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
                                   spacing={{ base: 8, md: 8 }}
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
