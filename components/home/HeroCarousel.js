import fetcher from '@/utils/fetcher';
import { Box, Heading, Skeleton } from '@chakra-ui/react';
import React from 'react';

import useSWR from 'swr';

import Image from 'next/image';
// Import Swiper React components
import Swiper from 'react-id-swiper';

import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper';

// Import Swiper styles

import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, EffectFade]);

const HeroCarousel = ({ images }) => {
     const { data, error } = useSWR(`/api/images/carousel`, fetcher, {
          initialData: images
     });
     if (error) return <Skeleton height="100vh"></Skeleton>;

     if (!data) {
          return <Skeleton height="100vh"></Skeleton>;
     }

     const params = {
          slidesPerView: 1,

          pagination: {
               el: '.swiper-pagination',
               clickable: true
          },
          autoplay: {
               delay: 2500,
               disableOnInteraction: false
          },
          navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev'
          }
     };

     return (
          <Swiper {...params}>
               {data.images.map((data) => {
                    return (
                         <Box height="100vh">
                              <Image
                                   layout="fill"
                                   objectFit="cover"
                                   src={data.imageUrl}
                              />
                         </Box>
                    );
               })}
          </Swiper>
     );
};

export async function getStaticProps(context) {
     const images = await fetcher('/api/images/carousel');
     return { props: { images }, revalidate: 1 };
}

export default HeroCarousel;
