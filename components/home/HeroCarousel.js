import fetcher from '@/utils/fetcher';
import {
     Box,
     chakra,
     ChakraProvider,
     Heading,
     Skeleton
} from '@chakra-ui/react';
import React from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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