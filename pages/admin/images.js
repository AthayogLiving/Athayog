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
     TabPanel
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

     const Capitalize = (str) => {
          return str.charAt(0).toUpperCase() + str.slice(1);
     };
     return (
          <Dashboard>
               <Box bg={bg} padding={6} rounded="lg" boxShadow="sm">
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
                                             <ImageGrid imageType={category} />
                                        </TabPanel>
                                   );
                              })}
                         </TabPanels>
                    </Tabs>

                    <Divider />
                    <UploadImages imageType={imageType} />
               </Box>
          </Dashboard>
     );
};

export default images;
