import ImageGrid from '@/components/admin/Image/ImageGrid';
import UploadImages from '@/components/admin/Image/UploadImages';
import {
     Box,
     Divider,
     Heading,
     Select,
     useColorModeValue
} from '@chakra-ui/react';
import { useState } from 'react';
import Dashboard from './dashboard';
const images = () => {
     const [imageType, setImageType] = useState('gallery');
     const bg = useColorModeValue('white', 'gray.800');
     const color = useColorModeValue('teal', 'gray.700');
     const handleChange = (e) => {
          setImageType(e.target.value);
     };
     return (
          <Dashboard>
               <Box bg={bg} padding={6} rounded="lg" boxShadow="sm">
                    <Heading size="md">Images</Heading>
                    <Select
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
