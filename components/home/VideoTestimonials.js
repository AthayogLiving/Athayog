import {
     Box,
     Divider,
     Flex,
     Grid,
     Heading,
     Text,
     Center
} from '@chakra-ui/layout';
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
     const videoObj = [
          {
               id: '1',
               nameTag: 'Tanisha',
               description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam lacinia efficitur. Vestibulum semper iaculis dictum. Integer ut lectus elit. Etiam volutpat felis quam, vel tempus velitlacinia quis. Nunc vel enim vel urna convallis placerat sed ac',
               src: VideoTwo,
               thumbnail: videoTwoThumbnail,
               main: true
          },
          {
               id: '2',
               nameTag: 'Pradeep',
               description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.em ipsum dolor sit amet, consectetur',
               src: VideoTwo,
               thumbnail: videoTwoThumbnail,
               main: false
          },
          {
               id: '3',
               nameTag: 'John Doe',
               description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.em ipsum dolor sit amet, consectetur ',
               src: VideoTwo,
               thumbnail: videoTwoThumbnail,
               main: false
          },
          {
               id: '4',
               nameTag: 'Jane Doe',
               description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.em ipsum dolor sit amet, consectetur ',
               src: VideoTwo,
               thumbnail: videoTwoThumbnail,
               main: false
          }
     ];

     const [videoState, setVideoState] = useState(videoObj);

     const setMainPlayer = (id) => {
          let updatedVideo = videoState;
          updatedVideo.map((video) => {
               if (video.id == id) {
                    video.main = true;
               } else {
                    video.main = false;
               }
          });

          setVideoState(updatedVideo);
     };
     return (
          <Box bg="white" py={20}>
               <Box maxW="95vw" margin="0 auto">
                    <Heading as="h3" fontSize="3xl">
                         Success Stories
                    </Heading>
                    <Flex
                         marginTop={{
                              base: '8',
                              md: '8',
                              lg: '8'
                         }}
                         justifyContent="space-between"
                         gap={10}
                         alignItems="stretch"
                         direction="column"
                         flex="1 1 0px"
                    >
                         {videoState
                              .filter((image) => image.main === true)
                              .map(
                                   ({
                                        id,
                                        nameTag,
                                        description,
                                        src,
                                        thumbnail
                                   }) => {
                                        return (
                                             <Flex
                                                  boxShadow="base"
                                                  rounded="md"
                                                  overflow="hidden"
                                                  height="auto"
                                                  width="100%"
                                                  bg="aygreen.50"
                                                  key={id}
                                             >
                                                  <video
                                                       width="100%"
                                                       height="100%"
                                                       style={{
                                                            flexGrow: 1,
                                                            flexBasis: '80%'
                                                       }}
                                                       src={src}
                                                       poster={
                                                            videoOneThumbnail
                                                       }
                                                       controls="true"
                                                  ></video>
                                                  <Box
                                                       py={5}
                                                       px={5}
                                                       flexGrow="1"
                                                       flexBasis="1005"
                                                  >
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
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit.
                                                            Integer aliquam
                                                            lacinia efficitur.
                                                            Vestibulum semper
                                                            iaculis dictum.
                                                            Integer ut lectus
                                                            elit. Etiam volutpat
                                                            felis quam, vel
                                                            tempus velit lacinia
                                                            quis. Nunc vel enim
                                                            vel urna convallis
                                                            placerat sed ac,
                                                            iaculis dictum.
                                                            Integer ut lectus
                                                            elit. Etiam volutpat
                                                            felis quam, vel
                                                            tempus velit lacinia
                                                            quis. Nunc vel enim
                                                            vel urna convallis
                                                            placerat sed ac
                                                       </Text>
                                                  </Box>
                                             </Flex>
                                        );
                                   }
                              )}

                         <Flex
                              direction="row"
                              width="100%"
                              gap={5}
                              height="auto"
                              alignItems="stretch"
                              justifyContent="space-between"
                         >
                              {videoState
                                   .filter((image) => image.main === false)
                                   .map(
                                        ({
                                             id,
                                             nameTag,
                                             description,
                                             src,
                                             thumbnail
                                        }) => {
                                             return (
                                                  <Flex
                                                       boxShadow="base"
                                                       rounded="md"
                                                       overflow="hidden"
                                                       height="100%"
                                                       width="100%"
                                                       key={id}
                                                       bg="aygreen.50"
                                                  >
                                                       <Flex
                                                            height="100%"
                                                            width="100%"
                                                            justifyContent="center"
                                                            alignItem="center"
                                                            flexBasis="50%"
                                                            rounded="md"
                                                            overflow="hidden"
                                                            padding={2}
                                                       >
                                                            <Box
                                                                 w="100%"
                                                                 rounded="md"
                                                                 height="100%"
                                                                 overflow="hidden"
                                                                 onClick={() =>
                                                                      setMainPlayer(
                                                                           id
                                                                      )
                                                                 }
                                                            >
                                                                 <Image
                                                                      src={
                                                                           thumbnail
                                                                      }
                                                                      layout="responsive"
                                                                      width="100%"
                                                                      objectFit="cover"
                                                                      height="100%"
                                                                      alt="Video"
                                                                 />
                                                            </Box>
                                                       </Flex>

                                                       <Box
                                                            py={3}
                                                            px={5}
                                                            flexBasis="100%"
                                                       >
                                                            <Heading
                                                                 as="h4"
                                                                 fontSize="xl"
                                                                 color="aygreen.900"
                                                            >
                                                                 {nameTag}
                                                            </Heading>
                                                            <Text
                                                                 fontSize="md"
                                                                 color="aygreen.700"
                                                                 mt={2}
                                                            >
                                                                 {description}
                                                            </Text>
                                                       </Box>
                                                  </Flex>
                                             );
                                        }
                                   )}
                         </Flex>
                    </Flex>
               </Box>
          </Box>
     );
};

export default VideoTestimonials;
