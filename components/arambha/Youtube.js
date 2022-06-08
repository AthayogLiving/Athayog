import { Box, Container, Text, chakra, Flex } from '@chakra-ui/react';
import React from 'react';
import YouTube from 'react-youtube';
import SpecialDay from 'public/special_day.png';
import Image from 'next/image';

function Youtube() {
     return (
          <Container py={10}>
               <YouTube className="video-container" videoId={'b6EhElLVQX0'} />
          </Container>
     );
}

export default Youtube;
