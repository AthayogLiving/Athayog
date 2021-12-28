import fetcher from '@/utils/fetcher';
import { Box, Flex, Heading, Skeleton, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import useSWR from 'swr';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';
import { v4 as uuidv4 } from 'uuid';

const Stars = ({ totalStars, totalFilled }) =>
     [...Array(totalStars).keys()].map((key) => (
          <AiFillStar fontSize="1.1rem" key={key} />
     ));

const Testimonials = ({ testimonials }) => {
     const { data, error } = useSWR(`/api/testimonials/active`, fetcher, {
          initialData: testimonials
     });
     if (error) return <Skeleton height="100vh"></Skeleton>;

     if (!data) {
          return <Skeleton height="100vh"></Skeleton>;
     }

     const activeTestimonials = data.testimonials.filter(
          (testi) => testi.isActive === true
     );

     if (activeTestimonials.length === 0) {
          return null;
     }

     const handleDragStart = (e) => e.preventDefault();
     const items = [];

     const params = {
          slidesPerView: 1,
          ContainerEl: 'section',
          WrapperEl: 'section',
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

     return (
          <Flex
               bg="aygreen.700"
               justifyContent="center"
               alignItems="center"
               height={{ base: 'sm', md: 'md', lg: 'md' }}
          >
               <Box
                    width={{ base: '100vw', md: '80vw', lg: '60vw' }}
                    padding={{ base: '2', md: '5', lg: '10' }}
               >
                    <Heading
                         textAlign="center"
                         color="white"
                         fontWeight="normal"
                         fontSize={{ base: '2xl', md: '3xl' }}
                    >
                         Testimonials
                         <Box
                              mt={10}
                              justifyContent="center"
                              alignItems="center"
                              width="100%"
                         >
                              <Swiper {...params} key={uuidv4()}>
                                   {activeTestimonials.map((data) => {
                                        return (
                                             <Box
                                                  padding={{
                                                       base: '0 1rem',
                                                       md: '0 2rem',
                                                       lg: '0 5rem'
                                                  }}
                                                  key={data.id}
                                                  width="100%"
                                             >
                                                  <Flex justifyContent="center">
                                                       {[
                                                            ...Array(
                                                                 Number(
                                                                      data.stars
                                                                 )
                                                            )
                                                       ].map((el, index) => (
                                                            <AiFillStar
                                                                 fontSize="1.1rem"
                                                                 key={index}
                                                            />
                                                       ))}
                                                  </Flex>

                                                  <Text
                                                       mt={5}
                                                       fontSize={{
                                                            base: 'sm'
                                                       }}
                                                  >
                                                       {data.review}
                                                  </Text>
                                                  <Text
                                                       fontWeight="medium"
                                                       mt={5}
                                                       fontSize={{
                                                            base: 'md'
                                                       }}
                                                  >
                                                       {data.name}
                                                  </Text>
                                             </Box>
                                        );
                                   })}
                              </Swiper>
                         </Box>
                    </Heading>
               </Box>
          </Flex>
     );
};

export default Testimonials;
