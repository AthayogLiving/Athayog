import { Box, Divider, Flex, Grid, Heading } from '@chakra-ui/layout';
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import 'swiper/swiper-bundle.css';
import { v4 as uuidv4 } from 'uuid';

const VideoTestimonials = () => {
     const params = {
          slidesPerView: 1,
          ContainerEl: 'section',
          WrapperEl: 'section',
          autoplay: {
               delay: 2500,
               disableOnInteraction: false
          },

          navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev'
          },
          renderPrevButton: () => (
               <IoIosArrowBack
                    className="swiper-button-prev"
                    style={{ color: 'black' }}
               />
          ),
          renderNextButton: () => (
               <IoIosArrowForward
                    className="swiper-button-next"
                    style={{ color: 'black' }}
               />
          )
     };

     const videoSources = [
          'https://firebasestorage.googleapis.com/v0/b/authentication-test-7c342.appspot.com/o/videos%2Fvideo_testimonials_1.mp4?alt=media&token=5eff437e-6974-49e5-b3dc-ae9ae7a7fe6d',
          'https://firebasestorage.googleapis.com/v0/b/authentication-test-7c342.appspot.com/o/videos%2Fvideo_testimonials_4.mp4?alt=media&token=99108c88-f1c8-4597-a1ab-3b9384cdd028',
          'https://firebasestorage.googleapis.com/v0/b/authentication-test-7c342.appspot.com/o/videos%2Fvideo_testimonials_3.mp4?alt=media&token=bcf1481f-6be6-4aa7-af76-29ade2f55a7b'
     ];
     return (
          <Flex
               bg="white"
               justifyContent="center"
               alignItems="center"
               height="100%"
          >
               <Box
                    width={{ base: '100vw', md: '80vw', lg: '60vw' }}
                    padding={{ base: '2', md: '5', lg: '10' }}
               >
                    <Heading
                         textAlign="center"
                         color="black"
                         fontWeight="normal"
                         fontSize={{ base: '2xl', md: '3xl' }}
                         mb={10}
                    >
                         Video Testimonials
                         <Grid margin="0 auto" placeItems="center">
                              {' '}
                              <video
                                   width="100%"
                                   height="320px"
                                   controls
                                   style={{
                                        marginTop: '1rem',
                                        borderRadius: '0.25rem',
                                        overflow: 'hidden'
                                   }}
                              >
                                   <source
                                        src="https://firebasestorage.googleapis.com/v0/b/authentication-test-7c342.appspot.com/o/videos%2Fvideo_testimonials_2.mp4?alt=media&token=5426d22b-6dff-4a26-b4f6-ffe220b7bf93"
                                        type="video/mp4"
                                   ></source>
                              </video>
                         </Grid>
                         <Divider />
                         <Grid
                              mt={5}
                              justifyContent="center"
                              alignItems="center"
                              height="100%"
                              gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
                              width="100%"
                              flexWrap="wrap"
                              gap="1rem"
                              rounded="lg"
                         >
                              {videoSources.map((data) => {
                                   return (
                                        <video
                                             width="100%"
                                             height="100px"
                                             controls
                                             key={uuidv4()}
                                             style={{
                                                  marginTop: '1rem',
                                                  borderRadius: '0.25rem',
                                                  overflow: 'hidden'
                                             }}
                                        >
                                             <source
                                                  src={data}
                                                  type="video/mp4"
                                             ></source>
                                        </video>
                                   );
                              })}
                         </Grid>
                    </Heading>
               </Box>
          </Flex>
     );
};

export default VideoTestimonials;
