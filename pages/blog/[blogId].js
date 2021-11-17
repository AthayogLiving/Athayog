import { BlogData } from '@/components/home/BlogData';
import HomeLayout from '@/components/layout/HomeLayout';
import { MotionBox } from '@/components/shared/MotionElements';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { Box, Container, Flex, Heading, Text, VStack } from '@chakra-ui/layout';
import yogaKids from 'public/yogaPose1.jpg';
import yogaPose from 'public/yogaPose2.jpg';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
const Blog = ({ currentBlog }) => {
     let easing = [0.175, 0.85, 0.42, 0.96];
     const textVariants = {
          exit: {
               y: -100,
               opacity: 0,
               transition: { duration: 0.5, ease: easing }
          },
          enter: {
               y: 0,
               opacity: 1,
               transition: { duration: 0.5, ease: easing }
          }
     };
     return (
          <>
               <Head>
                    <title>{currentBlog?.seo_title}</title>
               </Head>
               <Flex
                    position="relative"
                    height={{
                         base: '40vh',
                         md: '70vh',
                         lg: '70vh'
                    }}
                    min-height="100px"
                    justifyContent="center"
                    alignItems="center"
               >
                    <Box
                         height="100%"
                         bg={{
                              sm: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.8) 100%)',
                              base: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.8) 100%)',
                              md: 'linear-gradient(to bottom, rgba(0,0,0,0) 50%,rgba(0,0,0,0.8) 100%)'
                         }}
                         width="100%"
                         position="absolute"
                         zIndex={1}
                    ></Box>
                    <Image
                         layout="fill"
                         objectFit="cover"
                         position="bottom"
                         priority={true}
                         key="1"
                         alt={currentBlog.imageAlt}
                         src={currentBlog.image}
                    />
                    <Container
                         maxW="container.xl"
                         position="relative"
                         height="100%"
                    >
                         {' '}
                         <MotionBox
                              zIndex={2}
                              position="absolute"
                              bottom="6%"
                              variants={textVariants}
                              initial="exit"
                              animate="enter"
                              exit="exit"
                         >
                              {' '}
                              <Heading color="white">
                                   {currentBlog.title}
                              </Heading>
                         </MotionBox>
                    </Container>
               </Flex>

               <Box minH="100vh">
                    <NavbarHelper />
                    <Container maxW="container.xl" mb={10}>
                         <>
                              <Box>
                                   {currentBlog.titleContent
                                        .split('%')
                                        .map((i, index) => {
                                             return (
                                                  <Text
                                                       fontSize="lg"
                                                       key={uuidv4()}
                                                       my={5}
                                                  >
                                                       {i}
                                                  </Text>
                                             );
                                        })}
                              </Box>

                              {/* <Box>
                                   {currentBlog.child.map(({ title, desc }) => {
                                        return (
                                             <VStack
                                                  mt={16}
                                                  spacing={15}
                                                  align="strech"
                                                  key={uuidv4()}
                                             >
                                                  <Heading size="lg">
                                                       {title}
                                                  </Heading>
                                                  <Box mt={5}>
                                                       {desc
                                                            .split('%')
                                                            .map((i, index) => {
                                                                 return (
                                                                      <Text
                                                                           fontSize="lg"
                                                                           mb={
                                                                                5
                                                                           }
                                                                           key={uuidv4()}
                                                                      >
                                                                           {i}
                                                                      </Text>
                                                                 );
                                                            })}
                                                  </Box>
                                             </VStack>
                                        );
                                   })}
                              </Box> */}
                              <Box>
                                   <VStack
                                        mt={16}
                                        spacing="4rem"
                                        align="strech"
                                        key={uuidv4()}
                                   >
                                        <Box>
                                             <Heading size="lg">
                                                  What is Yoga - LEARN & UNLEARN
                                             </Heading>
                                             <Box mt={5}>
                                                  <Text
                                                       fontSize="lg"
                                                       mb={5}
                                                       key={uuidv4()}
                                                  >
                                                       So, what is the meaning
                                                       of Yoga? What is it all
                                                       about?
                                                  </Text>
                                                  <Text
                                                       fontSize="lg"
                                                       mb={5}
                                                       key={uuidv4()}
                                                  >
                                                       {' '}
                                                       One of the most common
                                                       misconceptions is that
                                                       “yoga is exercise”. The
                                                       truth is yoga works on
                                                       multiple levels such as
                                                       physical, mental,
                                                       psychological and
                                                       spiritual unlike physical
                                                       exercise that only
                                                       focuses on the physical
                                                       aspect. This is why we
                                                       have to choose Yoga as
                                                       our lifestyle and not
                                                       just as something we
                                                       practice on the mat for
                                                       an hour.
                                                  </Text>
                                             </Box>
                                             <Box
                                                  width="50%"
                                                  height="400px"
                                                  rounded="lg"
                                                  overflow="hidden"
                                                  position="relative"
                                             >
                                                  {' '}
                                                  <Image
                                                       src={yogaKids}
                                                       layout="fill"
                                                  />
                                             </Box>
                                        </Box>
                                        <Box>
                                             <Heading size="lg">
                                                  But what is Yoga therapy?
                                             </Heading>
                                             <Box mt={5}>
                                                  <Text
                                                       fontSize="lg"
                                                       mb={5}
                                                       key={uuidv4()}
                                                  >
                                                       It is an alternative
                                                       system of medicine where
                                                       techniques of yoga and
                                                       principles of yoga are
                                                       used to prevent, promote
                                                       and cure physical,
                                                       mental, and psychosomatic
                                                       disorders.
                                                  </Text>
                                                  <Text
                                                       fontSize="lg"
                                                       mb={5}
                                                       key={uuidv4()}
                                                  >
                                                       Yoga and Ayurveda work
                                                       together and according to
                                                       Ayurveda, we have{' '}
                                                       <a
                                                            style={{
                                                                 color: '#0000EE'
                                                            }}
                                                            href="https://www.dabur.com/daburarogya/ayurveda/ayurveda-aur-hum/Tridoshas-the-three-body-humors.aspx"
                                                       >
                                                            {' '}
                                                            Tridoshas{' '}
                                                       </a>{' '}
                                                       such as vata, pitta and
                                                       kapha. Different
                                                       techniques of yoga help
                                                       balance the doshas in
                                                       order to stay healthy.
                                                       There are five sheaths of
                                                       body and each one has a
                                                       different function, also
                                                       called as koshas -
                                                       Annamayakosha,
                                                       Pranamayakosha,
                                                       Manomayakosha,
                                                       Vijnanamayakosha and
                                                       Anandamayakosha.
                                                  </Text>
                                                  <Text
                                                       fontSize="lg"
                                                       mb={5}
                                                       key={uuidv4()}
                                                  >
                                                       Now that the definition
                                                       of yoga therapy is clear,
                                                       let's understand their
                                                       yoga techniques,
                                                       principles and how they
                                                       actually work or help
                                                       treat various disorders.
                                                  </Text>
                                             </Box>
                                        </Box>

                                        <Box>
                                             <Heading size="lg">
                                                  YOGA THERAPY - A PRACTICAL
                                                  GUIDE
                                             </Heading>
                                             <Box mt={5}>
                                                  <Text
                                                       fontSize="lg"
                                                       mb={5}
                                                       key={uuidv4()}
                                                  >
                                                       Firstly, one has to
                                                       practice kriyas. There
                                                       are shat kriyas and these
                                                       are six internal
                                                       cleansing techniques
                                                       which have to be
                                                       practiced to bring
                                                       balance in our Tridoshas.
                                                  </Text>
                                                  <Text
                                                       fontSize="lg"
                                                       mb={5}
                                                       key={uuidv4()}
                                                  >
                                                       It's advisory to practice
                                                       Ashtanga yoga which is
                                                       mentioned in Patanjali
                                                       Yoga Sutras.  Ashtanga
                                                       yoga (8 limbs) - consists
                                                       of yama, niyama
                                                       (lifestyle) where you
                                                       have to practice
                                                       non-violence,
                                                       cleanliness, self
                                                       practice, self surrender,
                                                       etc. The third and fourth
                                                       limbs are asana and
                                                       pranayama gives physical
                                                       and physiological
                                                       benefits, working on
                                                       different koshas of the
                                                       body. There are five
                                                       sheaths of the body, each
                                                       having different
                                                       functions and restoring
                                                       balance for proper
                                                       functioning.
                                                  </Text>
                                                  <Text
                                                       fontSize="lg"
                                                       mb={5}
                                                       key={uuidv4()}
                                                  >
                                                       Pratyahara, dharana,
                                                       dhyana, samadhi are all
                                                       called antaranga yoga and
                                                       works on the subtle
                                                       level, inner awareness
                                                       and gives mental and
                                                       spiritual benefits.
                                                  </Text>
                                             </Box>
                                             <Box
                                                  width="40%"
                                                  height="500px"
                                                  position="relative"
                                                  rounded="lg"
                                                  overflow="hidden"
                                             >
                                                  {' '}
                                                  <Image
                                                       src={yogaPose}
                                                       layout="fill"
                                                  />
                                             </Box>
                                        </Box>
                                        <Box>
                                             <Heading size="lg">
                                                  WHAT ELSE DO YOU NEED TO KNOW?
                                             </Heading>
                                             <Box mt={5}>
                                                  <Text
                                                       fontSize="lg"
                                                       mb={5}
                                                       key={uuidv4()}
                                                  >
                                                       Beyond the Ashtanga yoga,
                                                       one also has to follow a
                                                       good ahaara (diet). In
                                                       yoga, it is said that
                                                       mitahara (sattvika ahara)
                                                       must be followed - where
                                                       one fourth of the stomach
                                                       should be filled with
                                                       solid, one fourth with
                                                       liquid and rest should be
                                                       kept empty.
                                                  </Text>
                                                  <Text
                                                       fontSize="lg"
                                                       mb={5}
                                                       key={uuidv4()}
                                                  >
                                                       Finally, these are the
                                                       yoga techniques which the
                                                       therapist uses to treat
                                                       different Ailments and
                                                       conditions. When it comes
                                                       to yoga principles, they
                                                       work on Trigunas,
                                                       panchakoshas, pancha
                                                       pranas and Tridoshas,
                                                       working on subtler
                                                       aspects and restoring
                                                       balance in the body.
                                                  </Text>
                                                  <Text
                                                       fontSize="lg"
                                                       mb={5}
                                                       key={uuidv4()}
                                                  >
                                                       <a
                                                            style={{
                                                                 color: 'blue'
                                                            }}
                                                            href="/offerings/chikitsa"
                                                       >
                                                            Yoga therapy
                                                       </a>{' '}
                                                       can be used as an
                                                       alternative treatment for
                                                       common Ailments such as
                                                       headache, asthma,
                                                       obesity, hypertension,
                                                       diabetes, back pain,
                                                       arthritis, PCOS, etc.
                                                       Beyond these, there are
                                                       many more Ailments which
                                                       can be treated and healed
                                                       with the help of Yoga
                                                       therapy.
                                                  </Text>
                                             </Box>
                                        </Box>
                                   </VStack>
                              </Box>
                         </>
                    </Container>
               </Box>
          </>
     );
};

export default Blog;
Blog.Layout = HomeLayout;

export async function getStaticPaths() {
     const res = BlogData;
     const paths = res.map((blogs) => {
          return {
               params: { blogId: blogs.slug.toString() }
          };
     });

     return {
          paths,
          fallback: false
     };
}

export async function getStaticProps(context) {
     const slugName = context.params.blogId;
     const blogs = BlogData;
     const res = blogs.find(({ slug }) => slug === slugName);

     return {
          props: { currentBlog: res }
     };
}
