import { BlogData } from '@/components/home/BlogData';
import HomeLayout from '@/components/layout/HomeLayout';
import { MotionBox } from '@/components/shared/MotionElements';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { Box, Container, Flex, Heading, Text, VStack } from '@chakra-ui/layout';
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

                              <Box>
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
