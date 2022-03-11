import { Box, Divider, Flex, Grid, Heading, Text } from '@chakra-ui/layout';
import VideoOne from 'public/video_testimonials_1.mp4';
import VideoTwo from 'public/video_testimonials_2.mp4';
import VideoThree from 'public/video_testimonials_3.mp4';
import VideoFour from 'public/video_testimonials_4.mp4';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import 'swiper/swiper-bundle.css';
import { v4 as uuidv4 } from 'uuid';
import videoOneThumbnail from 'public/videoOne.png';
import videoTwoThumbnail from 'public/videoTwoThumbnail.png';
import Image from 'next/image';

const VideoTestimonials = () => {
     const videoSources = [VideoOne, VideoThree, VideoFour];

     const [mainPlayer, setMainPlayer] = useState('');
     const [previewPlayer, setPreviewPlayer] = useState(VideoTwo);

     const setThumbnailPlayer = (idx) => {
          console.log('CLciked');
          console.log();
          setPreviewPlayer([videoSources[idx]]);
     };
     return (
          <Box bg="white" py={20}>
               <Box maxW="95vw" margin="0 auto">
                    <Heading as="h3">Success Stories</Heading>
                    <Flex
                         marginTop={{
                              base: '8',
                              md: '8',
                              lg: '8'
                         }}
                         justifyContent="space-between"
                         gap={20}
                         alignItems="stretch"
                         direction="row"
                    >
                         {' '}
                         <Box
                              boxShadow="base"
                              rounded="md"
                              overflow="hidden"
                              height="auto"
                              width="100%"
                              bg="aygreen.50"
                         >
                              <video
                                   width="100%"
                                   height="100%"
                                   src={mainPlayer}
                                   onClick={() => setMainPlayer(previewPlayer)}
                                   poster={videoOneThumbnail}
                                   controls="true"
                              ></video>
                              <Box py={5} px={5}>
                                   <Heading
                                        as="h4"
                                        fontSize="2xl"
                                        color="aygreen.900"
                                   >
                                        Tanisha
                                   </Heading>
                                   <Text
                                        fontSize="md"
                                        color="aygreen.700"
                                        mt={3}
                                   >
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Integer aliquam lacinia
                                        efficitur. Vestibulum semper iaculis
                                        dictum. Integer ut lectus elit. Etiam
                                        volutpat felis quam, vel tempus velit
                                        lacinia quis. Nunc vel enim vel urna
                                        convallis placerat sed ac
                                   </Text>
                              </Box>
                         </Box>
                         <Flex
                              direction="column"
                              width="100%"
                              gap={5}
                              height="auto"
                              alignItems="stretch"
                              justifyContent="space-between"
                         >
                              {videoSources.map((video, idx) => {
                                   return (
                                        <Flex
                                             boxShadow="base"
                                             rounded="md"
                                             overflow="hidden"
                                             height="100%"
                                             width="100%"
                                             key={idx}
                                             bg="aygreen.50"
                                        >
                                             <Box
                                                  width="10rem"
                                                  p={2}
                                                  rounded="md"
                                                  height="100%"
                                                  overflow="hidden"
                                             >
                                                  <Image
                                                       src={videoTwoThumbnail}
                                                       layout="intrinsic"
                                                       width="100%"
                                                       objectFit="cover"
                                                       height="100%"
                                                       alt="Video"
                                                  />
                                             </Box>
                                             <Box py={3} px={5}>
                                                  {' '}
                                                  <Heading
                                                       as="h4"
                                                       fontSize="2xl"
                                                       color="aygreen.900"
                                                  >
                                                       Pradeep
                                                  </Heading>
                                                  <Text
                                                       fontSize="md"
                                                       color="aygreen.700"
                                                       mt={3}
                                                  >
                                                       Lorem ipsum dolor sit
                                                       amet, consectetur
                                                       adipiscing elit. Integer
                                                       aliquam lacinia
                                                       efficitur. Vestibulum
                                                  </Text>
                                             </Box>
                                        </Flex>
                                   );
                              })}
                         </Flex>
                    </Flex>
               </Box>
          </Box>
     );
};

export default VideoTestimonials;
