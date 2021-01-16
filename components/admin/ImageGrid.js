import { Box, Flex, HStack, Skeleton, Stack } from '@chakra-ui/react';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import Image from 'next/image';

const ImageGrid = ({ imageType }) => {
     const { data } = useSWR(`/api/images/${imageType}`, fetcher);

     if (!data) {
          return <Skeleton my={5} height="250px" width="250px"></Skeleton>;
     }

     return (
          <HStack my={5} spacing="24px" width="100%">
               {data.images.map((image) => {
                    return (
                         <Box>
                              <Image
                                   src={image.imageUrl}
                                   key={image.id}
                                   height="250px"
                                   width="250px"
                                   objectFit="cover"
                              />
                         </Box>
                    );
               })}
          </HStack>
     );
};

export default ImageGrid;
