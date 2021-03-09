import fetcher from '@/utils/fetcher';
import { Box, Skeleton } from '@chakra-ui/react';
import React from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { isMobile } from 'react-device-detect';
import { v4 as uuidv4 } from 'uuid';

const HeroCarousel = ({ images }) => {
     const { data, error } = useSWR(`/api/images/carousel`, fetcher, {
          initialData: images
     });

     if (error)
          return (
               <Skeleton
                    startColor="pink.500"
                    endColor="orange.500"
                    height="100vh"
               ></Skeleton>
          );

     if (!data) {
          return (
               <Skeleton
                    startColor="pink.500"
                    endColor="orange.500"
                    height="100vh"
               ></Skeleton>
          );
     }

     if (data.images.length === 0) {
          return (
               <Skeleton
                    height="100vh"
                    startColor="pink.500"
                    endColor="orange.500"
               />
          );
     }

     const params = {
          slidesPerView: 1,
          loop: false,
          autoplay: {
               delay: 2500,
               disableOnInteraction: false
          },
          pagination: {
               el: '.swiper-pagination',
               clickable: true,
               type: 'fraction'
          },
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
                    style={{ color: 'white' }}
               />
          ),
          renderNextButton: () => (
               <IoIosArrowForward
                    className="swiper-button-next"
                    style={{ color: 'white' }}
               />
          )
     };

     const activeCarousel = [];

     return (
          <Box height="100vh">
               <Swiper {...params} key={uuidv4()}>
                    {data.images
                         .filter(
                              (image) =>
                                   image.isMobile === isMobile &&
                                   image.isActive === true
                         )
                         .map((image) => {
                              return (
                                   <Box key={image.id} height="100vh">
                                        <Image
                                             layout="fill"
                                             alt={image.alt}
                                             objectFit="cover"
                                             src={image.imageUrl}
                                        />
                                   </Box>
                              );
                         })}
               </Swiper>
          </Box>
     );
};

export default HeroCarousel;
