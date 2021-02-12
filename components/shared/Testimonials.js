import fetcher from '@/utils/fetcher';
import { Box, Flex, Heading, Skeleton, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import useSWR from 'swr';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';

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
               bg="aygreen.400"
               justifyContent="center"
               alignItems="center"
               height="md"
          >
               <Box width="60vw" padding={10}>
                    <Heading
                         textAlign="center"
                         color="white"
                         fontWeight="normal"
                    >
                         Testimonials
                         <Box
                              mt={10}
                              justifyContent="center"
                              alignItems="center"
                         >
                              <Swiper {...params}>
                                   {data.testimonials.map((data) => {
                                        return (
                                             <Box padding="0 5rem">
                                                  <Flex justifyContent="center">
                                                       <Stars
                                                            totalStars={
                                                                 data.stars
                                                            }
                                                            totalFilled={5}
                                                       />
                                                  </Flex>

                                                  <Text fontSize="md" mt={5}>
                                                       {data.review}
                                                  </Text>
                                                  <Text
                                                       fontSize="2xl"
                                                       fontWeight="medium"
                                                       mt={5}
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

export async function getStaticProps(context) {
     const testimonials = await fetcher('/api/testimonials');
     return { props: { testimonials }, revalidate: 1 };
}

export default Testimonials;
