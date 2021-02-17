import ImageGrid from '@/components/admin/Image/ImageGrid';
import UploadImages from '@/components/admin/Image/UploadImages';
import {
     Box,
     Divider,
     useColorModeValue,
     Tabs,
     TabList,
     TabPanels,
     Tab,
     TabPanel,
     Select
} from '@chakra-ui/react';
import { useState } from 'react';
import Dashboard from './dashboard';
const images = () => {
     const imageCategories = [
          'carousel',
          'athayog_space',
          'about_us',
          'shikshana_pada',
          'chikitsa',
          'online',
          'sessions'
     ];
     const [imageType, setImageType] = useState(imageCategories[0]);
     const bg = useColorModeValue('white', 'gray.800');
     const color = useColorModeValue('teal', 'gray.700');

     const handleTabChange = (value) => {
          setImageType(imageCategories[value]);
     };

     const [totalImages, setTotalImage] = useState(0);

     const Capitalize = (str) => {
          return str.charAt(0).toUpperCase() + str.slice(1);
     };

     const [mobileImage, setMobileImage] = useState('desktop');

     const handleMobileImage = (e) => {
          setMobileImage(e.target.value);
     };

     console.log('Totlal Images', totalImages);
     return (
          <Dashboard>
               <Box bg={bg} padding={6} rounded="lg" boxShadow="base">
                    <Select
                         size="sm"
                         rouned="lg"
                         name="deviceType"
                         width="xs"
                         onChange={(e) => handleMobileImage(e)}
                    >
                         <option value="desktop">Desktop</option>
                         <option value="mobile">Mobile</option>
                    </Select>
                    <Tabs
                         colorScheme="blue"
                         mt={2}
                         onChange={handleTabChange}
                         isLazy={true}
                         size="sm"
                    >
                         <TabList>
                              {imageCategories.map((category) => {
                                   return (
                                        <Tab>
                                             {Capitalize(
                                                  category.replace('_', ' ')
                                             )}
                                        </Tab>
                                   );
                              })}
                         </TabList>
                         <TabPanels>
                              {imageCategories.map((category) => {
                                   return (
                                        <TabPanel>
                                             <ImageGrid
                                                  imageType={category}
                                                  isMobile={mobileImage}
                                                  setTotalImage={setTotalImage}
                                             />
                                        </TabPanel>
                                   );
                              })}
                         </TabPanels>
                    </Tabs>

                    <Divider />
                    <UploadImages
                         imageType={imageType}
                         isMobile={mobileImage}
                    />
               </Box>
          </Dashboard>
     );
};

export default images;
