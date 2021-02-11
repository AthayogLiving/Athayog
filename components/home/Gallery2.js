import fetcher from '@/utils/fetcher';
import { Box, Heading, Skeleton } from '@chakra-ui/react';
import React, { useEffect } from 'react';

import useSWR from 'swr';

import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Navigation, Pagination } from 'swiper';

// Import Swiper styles

import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination]);

const Gallery2 = ({ images }) => {
     const { data, error } = useSWR(`/api/images/carousel`, fetcher, {
          initialData: images
     });
     if (error) return <Skeleton height="100vh"></Skeleton>;

     if (!data) {
          return <Skeleton height="100vh"></Skeleton>;
     }

     return (
          <Box padding={10} height="100%" margin="auto">
               <Heading fontWeight="normal" textAlign="center" mb={10}>
                    Gallery
               </Heading>
               <Swiper
                    spaceBetween={50}
                    EffectFade={true}
                    navigation
                    pagination
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
               >
                    {data.images.map((data) => {
                         return (
                              <SwiperSlide>
                                   <img src={data.imageUrl} />
                              </SwiperSlide>
                         );
                    })}
               </Swiper>
          </Box>
     );
};

export async function getStaticProps(context) {
     const images = await fetcher('/api/images/carousel');
     return { props: { images }, revalidate: 1 };
}

export default Gallery2;
