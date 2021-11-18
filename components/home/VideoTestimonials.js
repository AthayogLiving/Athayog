import { Box, Divider, Flex, Grid, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import VideoOne from 'public/video_testimonials_1.mp4';
import VideoTwo from 'public/video_testimonials_2.mp4';
import VideoThree from 'public/video_testimonials_3.mp4';
import VideoFour from 'public/video_testimonials_4.mp4';
import ReactPlayer from 'react-player';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';
import FilePlayer from 'react-player/file';
import { v4 as uuidv4 } from 'uuid';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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

     const videoSources = [VideoOne, VideoThree, VideoFour];
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
                                        src={VideoTwo}
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
