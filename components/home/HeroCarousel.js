import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import { v4 as uuidv4 } from 'uuid';
import kidsDesktop from 'public/kids-summer-desktop.png';
import kidsMobile from 'public/kids-summer-mobile.png';
import retreatDesktop from 'public/retreat-dekstop.png';
import retreatMobile from 'public/retreat-mobile.png';
import { useRouter } from 'next/router';
SwiperCore.use([Navigation, Pagination]);

const HeroCarousel = () => {
     const router = useRouter();
     const prevRef = useRef(null);
     const nextRef = useRef(null);

     const images = [
          {
               id: 1,
               alt: 'kids yoga camp',
               imageUrl: kidsDesktop,
               url: '/kids-yoga-camp'
          },
          {
               id: 2,
               alt: 'kids yoga camp',
               imageUrl: kidsMobile,
               url: '/kids-yoga-camp'
          },
          {
               id: 3,
               alt: 'Yoga retreat',
               imageUrl: retreatDesktop,
               url: '/yoga-retreat'
          },
          {
               id: 4,
               alt: 'Yoga retreat',
               imageUrl: retreatMobile,
               url: '/yoga-retreat'
          }
     ];

     return (
          <Box height="100vh">
               <Swiper
                    key={uuidv4()}
                    autoplay={{
                         delay: 8000,
                         disableOnInteraction: false
                    }}
                    navigation={{
                         prevEl: prevRef.current ? prevRef.current : undefined,
                         nextEl: nextRef.current ? nextRef.current : undefined
                    }}
                    onInit={(swiper) => {
                         swiper.params.navigation.prevEl = prevRef.current;
                         swiper.params.navigation.nextEl = nextRef.current;
                         swiper.navigation.update();
                    }}
               >
                    {images.map((image) => {
                         return (
                              <SwiperSlide
                                   key={image.id}
                                   onClick={() => router.push(image.url)}
                              >
                                   <Box height="100vh">
                                        <Image
                                             layout="fill"
                                             alt={image.alt}
                                             objectFit="cover"
                                             src={image.imageUrl}
                                        />
                                   </Box>
                              </SwiperSlide>
                         );
                    })}

                    <IoIosArrowBack ref={prevRef} />
                    <IoIosArrowForward ref={nextRef} />
               </Swiper>
          </Box>
     );
};

export default HeroCarousel;
