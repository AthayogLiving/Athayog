import { Container } from '@chakra-ui/react';
import React from 'react';
import YouTube from 'react-youtube';

function Youtube() {
     return (
          <Container py={10}>
               <YouTube
                    className="video-container"
                    videoId={'b6EhElLVQX0'} // defaults -> ''
               />
          </Container>
     );
}

export default Youtube;
