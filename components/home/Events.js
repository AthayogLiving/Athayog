import fetcher from '@/utils/fetcher';
import { Box, Button, Flex, Skeleton, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import useSWR from 'swr';
import { v4 as uuidv4 } from 'uuid';
import {
     Swiper,
     SwiperSlide,
     Pagination,
     Navigation,
     Lazy
} from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { IoIosArrowBack } from 'react-icons/io';

function Events({ images }) {
     const { data, error } = useSWR(`/api/images/carousel`, fetcher, {
          initialData: images
     });

     if (error)
          return (
               <Box bg="white">
                    <Skeleton bg="white" height="200px" width="100%"></Skeleton>
               </Box>
          );
     if (!data) {
          return (
               <Box bg="white">
                    <Skeleton bg="white" height="200px" width="100%"></Skeleton>
               </Box>
          );
     }

     if (data.images.length === 0) {
          return (
               <Box bg="white">
                    <Skeleton bg="white" height="200px" width="100%"></Skeleton>
               </Box>
          );
     }

     return (
          <Box py={20} px={10} bg="white" width="100%">
               <Heading
                    as="h3"
                    marginBottom={{
                         base: '8',
                         md: '8',
                         lg: '8'
                    }}
                    fontSize="3xl"
               >
                    Live Events
               </Heading>
               <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={true}
                    lazy={true}
                    modules={[Lazy, Pagination, Navigation]}
                    zoom={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                         640: {
                              slidesPerView: 1,
                              spaceBetween: 10
                         },
                         768: {
                              slidesPerView: 4,
                              spaceBetween: 10
                         },
                         1024: {
                              slidesPerView: 4,
                              spaceBetween: 10
                         }
                    }}
                    renderPrevButton={() => (
                         <IoIosArrowBack
                              className="swiper-button-prev"
                              style={{ color: 'black' }}
                         />
                    )}
               >
                    {data.images
                         .filter(
                              (image) =>
                                   image.isMobile === false &&
                                   image.isActive === true
                         )
                         .sort((a, b) => a.position - b.position)
                         .map((image) => {
                              return (
                                   <SwiperSlide key={image.id}>
                                        <Flex
                                             rounded="base"
                                             overflow="hidden"
                                             border="1px solid"
                                             borderColor="gray.300"
                                             height="100%"
                                             width="100%"
                                             direction="column"
                                        >
                                             <Image
                                                  layout="intrinsic"
                                                  width={320}
                                                  height={220}
                                                  objectFit="cover    "
                                                  alt={image.alt}
                                                  src={image.imageUrl}
                                             />
                                             <Button
                                                  colorScheme="aygreen"
                                                  rounded="none"
                                                  width="100%"
                                                  onClick={() =>
                                                       window.open(
                                                            `${image.imageUrl}`,
                                                            '_blank'
                                                       )
                                                  }
                                             >
                                                  Check {image.alt}
                                             </Button>
                                        </Flex>
                                   </SwiperSlide>
                              );
                         })}
               </Swiper>
               <Flex
                    justifyContent="center"
                    gap={5}
                    mt={5}
                    flexWrap="wrap"
                    w="100%"
               ></Flex>
          </Box>
     );
}

export default Events;
