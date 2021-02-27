import fetcher from '@/utils/fetcher';
import { Box, Skeleton } from '@chakra-ui/react';
import React from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { isMobile } from 'react-device-detect';

const HeroCarousel = ({ images, imagesMobile }) => {
     const { data, error } = isMobile
          ? useSWR(`/api/images/carousel?mobile=true`, fetcher, {
                 initialData: imagesMobile
            })
          : useSWR(`/api/images/carousel`, fetcher, {
                 initialData: images
            });
     if (error) return <Skeleton height="100vh"></Skeleton>;

     if (!data) {
          return <Skeleton height="100vh"></Skeleton>;
     }

     const params = {
          slidesPerView: 1,
          loop: true,

          centeredSlides: true,
          autoplay: {
               delay: 2500,
               disableOnInteraction: false
          },
          pagination: {
               el: '.swiper-pagination',
               clickable: true
               // type: 'fraction'
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

     data.images.map((data) => {
          if (data.isActive) {
               activeCarousel.push(data);
          }
     });

     return (
          <Box height="100vh">
               <Swiper {...params}>
                    {activeCarousel.map((data) => {
                         return (
                              <Box key={data.id} height="100vh">
                                   <Image
                                        layout="fill"
                                        objectFit="cover"
                                        src={data.imageUrl}
                                   />
                              </Box>
                         );
                    })}
               </Swiper>
          </Box>
     );
};

export default HeroCarousel;
