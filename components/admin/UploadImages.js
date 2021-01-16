import { useState } from 'react';
import { Box, FormControl, Heading, Input } from '@chakra-ui/react';
import firebase from 'firebase';
import { uploadImageToStorage } from '@/lib/db';

const UploadImages = () => {
     const onFileChange = (e) => {
          const file = e.target.files[0];
          uploadImageToStorage(file);
     };
     return (
          <Box padding={6} bg="white" rouded="lg">
               <Heading size="md">Images</Heading>
               <FormControl>
                    <Input type="file" onChange={onFileChange} />
               </FormControl>
          </Box>
     );
};

export default UploadImages;
