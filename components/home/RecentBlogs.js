import { Badge, Box, Grid, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import { BlogData } from './BlogData';
import Link from 'next/link';
import Image from 'next/image';
import { MotionBox } from '../shared/MotionElements';
import { Button } from '@chakra-ui/button';
import { v4 as uuidv4 } from 'uuid';

const RecentBlogs = () => {
     const Blogs = BlogData;

     return (
          <Box
               padding={{ base: '1rem', md: '2rem', lg: '5rem' }}
               height="100%"
               margin="auto"
               bg="gray.200"
          >
               <Heading
                    fontWeight="normal"
                    textAlign="center"
                    fontSize={{ base: '2xl', md: '3xl' }}
                    mb={{ base: '2', md: '5', lg: '10' }}
               >
                    Recent Blogs
               </Heading>
               <Grid placeItems="center">
                    {Blogs.map(
                         ({
                              id,
                              seo_title,
                              slug,
                              image,
                              summaryText,
                              published_at
                         }) => {
                              return (
                                   <React.Fragment key={uuidv4()}>
                                        <Link href={'/blog/' + slug} passHref>
                                             <MotionBox
                                                  bg="white"
                                                  shadow="md"
                                                  rounded="md"
                                                  cursor="pointer"
                                                  maxW="sm"
                                                  borderWidth="1px"
                                             >
                                                  <MotionBox
                                                       height="200px"
                                                       maxW="sm"
                                                       rounded="md"
                                                       overflow="hidden"
                                                       exit={{ opacity: 0 }}
                                                       initial={{ opacity: 0 }}
                                                       animate={{ opacity: 1 }}
                                                       borderColor="primaryGreen"
                                                       position="relative"
                                                  >
                                                       <Image
                                                            layout="responsive"
                                                            objectFit="cover"
                                                            height="200px"
                                                            width="250px"
                                                            src={image}
                                                       />
                                                  </MotionBox>
                                                  <Box p="6">
                                                       <Box
                                                            display="flex"
                                                            alignItems="baseline"
                                                       >
                                                            <Badge
                                                                 borderRadius="full"
                                                                 px="2"
                                                                 colorScheme="teal"
                                                            >
                                                                 New
                                                            </Badge>
                                                            <Box
                                                                 color="gray.500"
                                                                 fontWeight="semibold"
                                                                 letterSpacing="wide"
                                                                 fontSize="xs"
                                                                 textTransform="uppercase"
                                                                 ml="2"
                                                            >
                                                                 {published_at}
                                                            </Box>
                                                       </Box>
                                                       <Box
                                                            mt="3"
                                                            fontWeight="semibold"
                                                            as="h4"
                                                            lineHeight="tight"
                                                       >
                                                            {seo_title}
                                                       </Box>
                                                       <Box
                                                            mt="2"
                                                            color="gray.600"
                                                            fontSize="sm"
                                                       >
                                                            {summaryText}
                                                       </Box>
                                                       <Link
                                                            href={
                                                                 '/blog/' + slug
                                                            }
                                                            passHref
                                                       >
                                                            <Button
                                                                 size="sm"
                                                                 mt={3}
                                                                 colorScheme="aygreen"
                                                            >
                                                                 Read More
                                                            </Button>
                                                       </Link>
                                                  </Box>
                                             </MotionBox>
                                        </Link>
                                   </React.Fragment>
                              );
                         }
                    )}
               </Grid>
          </Box>
     );
};

export default RecentBlogs;
