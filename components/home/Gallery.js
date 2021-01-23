import {
    Box,
    Flex,
    Heading,
    Grid,
    GridItem,
    Skeleton,
    forwardRef
} from '@chakra-ui/react';
import React, { useState } from 'react';
import athayogOnline from 'public/athayogOnline.jpg';
import Image from 'next/image';
import { motion, isValidMotionProp, AnimatePresence } from 'framer-motion';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Gallery = ({ images }) => {
    const { data, error } = useSWR(`/api/images/carousel`, fetcher, {
        initialData: images
    });
    const [current, setCurrent] = useState(0);

    if (error) return <Skeleton height="100vh"></Skeleton>;

    if (!data) {
        return <Skeleton height="100vh"></Skeleton>;
    }

    if (data.images.length <= 0) {
        return <Skeleton height="100vh"></Skeleton>;
    }

    const carouselImages = data.images.filter((image) => {
        return image.isActive == true;
    });
    const length = carouselImages.length;
    if (!Array.isArray(carouselImages) || carouselImages.length <= 0) {
        return null;
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const MotionBox = motion.custom(
        forwardRef((props, ref) => {
            const chakraProps = Object.fromEntries(
                Object.entries(props).filter(([key]) => !isValidMotionProp(key))
            );
            return <Box ref={ref} {...chakraProps} />;
        })
    );
    return (
        <Flex
            margin="auto"
            padding="5rem 0"
            justifyContent="center"
            alignItems="center"
            width="100vw"
            bg="gray.100"
        >
            <Flex
                justifyContent="center"
                direction="column"
                alignItems="center"
                position="relative"
                width="70vw"
            >
                <Heading fontWeight="normal">Gallery</Heading>

                <Grid
                    h="500px"
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(10, 1fr)"
                    gap={4}
                    width="90%"
                    mt={20}
                >
                    <Box
                        // onClick={() => previousSlide()}
                        position="absolute"
                        top="55%"
                        background="rgba(255,255,255,0.5)"
                        left="0px"
                        color="black"
                        rounded="full"
                        padding={1}
                        zIndex={2}
                    >
                        <IoIosArrowBack size="1.5rem" cursor="pointer" />
                    </Box>
                    {carouselImages.map((slide, index) => {
                        return (
                            <React.Fragment>
                                {index === 0 ? (
                                    <GridItem
                                        rowSpan={2}
                                        colSpan={5}
                                        rounded="sm"
                                        overflow="hidden"
                                        boxShadow="md"
                                        position="relative"
                                    >
                                        <Image
                                            src={slide.imageUrl}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </GridItem>
                                ) : (
                                    ''
                                )}
                                {index === 1 ? (
                                    <GridItem
                                        colSpan={5}
                                        rounded="sm"
                                        overflow="hidden"
                                        boxShadow="md"
                                        position="relative"
                                    >
                                        <Image
                                            src={slide.imageUrl}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </GridItem>
                                ) : (
                                    ''
                                )}
                                {index === 2 ? (
                                    <GridItem
                                        colSpan={5}
                                        rounded="sm"
                                        overflow="hidden"
                                        boxShadow="md"
                                        position="relative"
                                    >
                                        <Image
                                            src={slide.imageUrl}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </GridItem>
                                ) : (
                                    ''
                                )}
                            </React.Fragment>
                        );
                    })}

                    <Box
                        // onClick={() => nextSlide()}
                        position="absolute"
                        top="55%"
                        right="0px"
                        background="rgba(255,255,255,0.5)"
                        rounded="full"
                        color="black"
                        padding={1}
                        zIndex={2}
                    >
                        <IoIosArrowForward size="1.5rem" cursor="pointer" />
                    </Box>
                </Grid>
                <Box
                    height={4}
                    width={4}
                    mt={10}
                    // key={slide.id}
                    bg="white"
                    // background={index === current ? 'white' : 'primaryGray'}
                    // onClick={() => setCurrent(index)}
                    rounded="full"
                    cursor="pointer"
                ></Box>
            </Flex>
        </Flex>
    );
};

export async function getStaticProps() {
    const posts = await fetcher('/api/images/carousel');
    return { props: { images } };
}

export default Gallery;
