import {
     Box,
     Button,
     Container,
     Flex,
     Grid,
     Heading,
     Stack,
     Text,
     useBreakpointValue
} from '@chakra-ui/react';
import Link from 'next/link';

import React from 'react';

function Welcome() {
     const buttonSize = useBreakpointValue(['sm', 'md']);
     return (
          <Container maxW="container.xl">
               <Stack
                    spacing={10}
                    bottom="0"
                    width="100%"
                    textAlign="center"
                    py={16}
                    justifyContent="center"
                    alignItems="center"
               >
                    <Heading
                         textAlign="center"
                         fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
                         fontWeight="normal"
                    >
                         Namaskara Bengaluru, Arise & Awake.
                         <br />
                         Join us this International Day of Yoga!
                    </Heading>
                    <Text
                         fontSize={{ base: 'xl', md: '3xl', lg: '3xl' }}
                         fontWeight="normal"
                    >
                         June 21st, 2022, 5.30 AM onwards
                         <br />
                         Kittur Rani Chennamma Stadium, Bengaluru
                    </Text>
                    <Link href="/yoga-day/register" passHref>
                         <Button
                              size={buttonSize}
                              colorScheme="aygreen"
                              rounded="none"
                              maxW="max-content"
                         >
                              REGISTER NOW! - FREE AND OPEN TO ALL
                         </Button>
                    </Link>
               </Stack>
               <Stack
                    spacing={10}
                    py={10}
                    fontWeight="light"
                    fontSize={{ base: 'xl', md: 'xl', lg: '2xl' }}
                    textColor="black"
               >
                    <Text textAlign="left">
                         We at AthaYog Living are celebrating Yoga with a grand
                         festival and we cordially invite each and every one of
                         you to celebrate the Yogic way of life.
                    </Text>
                    <Grid
                         templateColumns={{
                              base: 'repeat(1,1fr)',
                              md: 'repeat(2,1fr)',
                              lg: 'repeat(2,1fr)'
                         }}
                         gap={10}
                    >
                         <Stack spacing={10}>
                              <Text>
                                   Last year, we celebrated International Day of
                                   Yoga with a 12-hour Yogathon celebration and
                                   our members joined the asana, pranayama,
                                   meditation, lecture, chanting and satsang
                                   session with great joy.
                              </Text>
                              <Text>
                                   This year we are taking it forward with a
                                   grand initiative beyond our studio to an
                                   outdoor space open to everyone in Bengaluru.
                              </Text>
                              <Text>
                                   {' '}
                                   Meet people from all walks of life united
                                   through Yoga.
                              </Text>
                         </Stack>
                         <Stack
                              spacing={10}
                              padding={{ base: '3', md: '6', lg: '10' }}
                              bg="aygray.100"
                         >
                              <Text fontWeight="medium">Who Can Join?</Text>
                              <Text>
                                   We value the importance of community and Yoga
                                   helps rebuild this sense of community by
                                   allowing people of different backgrounds,
                                   ages, and interests to share the experience.
                              </Text>
                              <Text>
                                   Please note that it is open to all above 6
                                   years.
                              </Text>
                         </Stack>
                    </Grid>
               </Stack>
          </Container>
     );
}

export default Welcome;