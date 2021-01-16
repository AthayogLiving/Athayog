import ImageGrid from '@/components/admin/ImageGrid';
import UploadImages from '@/components/admin/UploadImages';
import { Box, Divider, Heading, Select } from '@chakra-ui/react';
import { useState } from 'react';
import Dashboard from './dashboard';
const images = () => {
     const [imageType, setImageType] = useState('gallery');
     const handleChange = (e) => {
          setImageType(e.target.value);
     };
     return (
          <Dashboard>
               <Box bg="white" padding={6} rounded="lg" boxShadow="sm">
                    <Heading size="md">Images</Heading>
                    <Select
                         placeholder="Select An Option"
                         mt={2}
                         size="sm"
                         variant="outline"
                         rounded="lg"
                         width="fit-content"
                         defaultValue="gallery"
                         onChange={handleChange}
                    >
                         <option value="gallery">Gallery</option>
                         <option value="hero">Hero</option>
                         <option value="space">Space</option>
                    </Select>
                    <ImageGrid imageType={imageType} />
                    <Divider />
                    <UploadImages />
               </Box>
          </Dashboard>
     );
};

export default images;
