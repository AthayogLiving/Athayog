import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
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
import { isMobile } from 'react-device-detect';

const HeroCarousel = () => {
     const router = useRouter();
     const [collection, setCollection] = useState([]);

     const images = [
          {
               id: 1,
               alt: 'kids yoga camp',
               imageUrl: kidsDesktop,
               url: '/kids-yoga-camp'
          },

          {
               id: 3,
               alt: 'Yoga retreat',
               imageUrl: retreatDesktop,
               url: '/yoga-retreat'
          }
     ];

     const imagesMobile = [
          {
               id: 2,
               alt: 'kids yoga camp',
               imageUrl: kidsMobile,
               url: '/kids-yoga-camp'
          },
          {
               id: 4,
               alt: 'Yoga retreat',
               imageUrl: retreatMobile,
               url: '/yoga-retreat'
          }
     ];

     useEffect(() => {
          if (isMobile) {
               setCollection(imagesMobile);
          } else {
               setCollection(images);
          }
          return () => {};
     }, []);

     return (
          <Box height="100vh">
               <Swiper
                    key={uuidv4()}
                    navigation={true}
                    autoplay={{
                         delay: 8000,
                         disableOnInteraction: false
                    }}
               >
                    {collection?.map((image) => {
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
                                             placeholder="blur"
                                        />
                                   </Box>
                              </SwiperSlide>
                         );
                    })}
               </Swiper>
          </Box>
     );
};

export default HeroCarousel;
