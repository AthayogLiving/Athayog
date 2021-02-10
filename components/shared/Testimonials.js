import fetcher from '@/utils/fetcher';
import { Box, Button, Flex, Heading, Skeleton, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import useSWR from 'swr';
import AliceCarousel from 'react-alice-carousel';

const Stars = ({ totalStars, totalFilled }) =>
     [...Array(totalStars).keys()].map((key) => (
          <AiFillStar
               fontSize="1.1rem"
               key={key}
               isFilled={key < totalFilled}
          />
     ));

const Testimonials = ({ testimonials }) => {
     const { data, error } = useSWR(`/api/testimonials`, fetcher, {
          initialData: testimonials
     });
     if (error) return <Skeleton height="100vh"></Skeleton>;

     if (!data) {
          return <Skeleton height="100vh"></Skeleton>;
     }

     const handleDragStart = (e) => e.preventDefault();
     const items = [];

     data.testimonials.map((data) => {
          items.push(
               <Box onDragStart={handleDragStart}>
                    <Flex justifyContent="center">
                         <Stars totalStars={data.stars} totalFilled={5} />
                    </Flex>

                    <Text fontSize="md" mt={5}>
                         {data.review}
                    </Text>
                    <Text fontSize="2xl" fontWeight="medium" mt={5}>
                         {data.name}
                    </Text>
               </Box>
          );
     });

     return (
          <Flex bg="aygreen.400" justifyContent="center">
               <Box width="6xl" height="100%" padding={10}>
                    <Heading
                         textAlign="center"
                         color="white"
                         fontWeight="normal"
                    >
                         Testimonials
                         <Flex mt={5} justifyContent="center">
                              <AliceCarousel
                                   autoPlay
                                   autoPlayStrategy="none"
                                   autoPlayInterval={8000}
                                   animationDuration={1000}
                                   disableButtonsControls
                                   infinite
                                   mouseTracking
                                   items={items}
                              />
                         </Flex>
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
