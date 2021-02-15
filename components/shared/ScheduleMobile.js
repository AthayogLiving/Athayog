import {
     Box,
     Tabs,
     TabList,
     TabPanels,
     Tab,
     TabPanel,
     Flex,
     Text
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

const ScheduleMobile = ({ schedule }) => {
     return (
          <Tabs
               variant="soft-rounded"
               colorScheme="aygreen"
               boxShadow="base"
               padding={{ base: '0rem', md: '2', lg: '2' }}
               bg="gray.50"
               fontSize={{ base: 'sm', md: 'lg', lg: 'lg' }}
          >
               <TabList flexWrap="wrap">
                    <Tab>Monday</Tab>
                    <Tab>Tuesday</Tab>
                    <Tab>Wednesday</Tab>
                    <Tab>Thursday</Tab>
                    <Tab>Friday</Tab>
                    <Tab>Saturday</Tab>
                    <Tab>Sunday</Tab>
               </TabList>
               <TabPanels fontSize={{ base: 'sm', md: 'lg', lg: 'lg' }}>
                    <TabPanel>
                         {schedule.map(
                              ({
                                   id,
                                   fromHours,
                                   fromMinutes,
                                   fromPeriod,
                                   toHours,
                                   toMinutes,
                                   toPeriod,
                                   monday,
                                   tuesday,
                                   wednesday,
                                   thursday,
                                   friday,
                                   saturday,
                                   sunday
                              } = data) => {
                                   return (
                                        <Flex
                                             key={uuidv4()}
                                             justify="space-between"
                                             bg="gray.100"
                                             rounded="lg"
                                             padding={2}
                                             mb={2}
                                        >
                                             <Box
                                                  width="50%"
                                                  fontWeight="medium"
                                             >
                                                  {' '}
                                                  {fromHours}:{fromMinutes}{' '}
                                                  {fromPeriod} - {toHours}:
                                                  {toMinutes} {toPeriod}
                                             </Box>
                                             <Box width="50%">{monday}</Box>
                                        </Flex>
                                   );
                              }
                         )}
                    </TabPanel>
                    <TabPanel>
                         {schedule.map(
                              ({
                                   id,
                                   fromHours,
                                   fromMinutes,
                                   fromPeriod,
                                   toHours,
                                   toMinutes,
                                   toPeriod,
                                   monday,
                                   tuesday,
                                   wednesday,
                                   thursday,
                                   friday,
                                   saturday,
                                   sunday
                              } = data) => {
                                   return (
                                        <Flex
                                             key={uuidv4()}
                                             justify="space-between"
                                             bg="gray.100"
                                             rounded="lg"
                                             padding={2}
                                             mb={2}
                                        >
                                             <Box
                                                  width="50%"
                                                  fontWeight="medium"
                                             >
                                                  {' '}
                                                  {fromHours}:{fromMinutes}{' '}
                                                  {fromPeriod} - {toHours}:
                                                  {toMinutes} {toPeriod}
                                             </Box>
                                             <Box width="50%">{tuesday}</Box>
                                        </Flex>
                                   );
                              }
                         )}
                    </TabPanel>
                    <TabPanel>
                         {schedule.map(
                              ({
                                   id,
                                   fromHours,
                                   fromMinutes,
                                   fromPeriod,
                                   toHours,
                                   toMinutes,
                                   toPeriod,
                                   monday,
                                   tuesday,
                                   wednesday,
                                   thursday,
                                   friday,
                                   saturday,
                                   sunday
                              } = data) => {
                                   return (
                                        <Flex
                                             key={uuidv4()}
                                             justify="space-between"
                                             bg="gray.100"
                                             rounded="lg"
                                             padding={2}
                                             mb={2}
                                        >
                                             <Box
                                                  width="50%"
                                                  fontWeight="medium"
                                             >
                                                  {' '}
                                                  {fromHours}:{fromMinutes}{' '}
                                                  {fromPeriod} - {toHours}:
                                                  {toMinutes} {toPeriod}
                                             </Box>
                                             <Box width="50%">{wednesday}</Box>
                                        </Flex>
                                   );
                              }
                         )}
                    </TabPanel>
                    <TabPanel>
                         {schedule.map(
                              ({
                                   id,
                                   fromHours,
                                   fromMinutes,
                                   fromPeriod,
                                   toHours,
                                   toMinutes,
                                   toPeriod,
                                   monday,
                                   tuesday,
                                   wednesday,
                                   thursday,
                                   friday,
                                   saturday,
                                   sunday
                              } = data) => {
                                   return (
                                        <Flex
                                             key={uuidv4()}
                                             justify="space-between"
                                             bg="gray.100"
                                             rounded="lg"
                                             padding={2}
                                             mb={2}
                                        >
                                             <Box
                                                  width="50%"
                                                  fontWeight="medium"
                                             >
                                                  {' '}
                                                  {fromHours}:{fromMinutes}{' '}
                                                  {fromPeriod} - {toHours}:
                                                  {toMinutes} {toPeriod}
                                             </Box>
                                             <Box width="50%">{thursday}</Box>
                                        </Flex>
                                   );
                              }
                         )}
                    </TabPanel>
                    <TabPanel>
                         {schedule.map(
                              ({
                                   id,
                                   fromHours,
                                   fromMinutes,
                                   fromPeriod,
                                   toHours,
                                   toMinutes,
                                   toPeriod,
                                   monday,
                                   tuesday,
                                   wednesday,
                                   thursday,
                                   friday,
                                   saturday,
                                   sunday
                              } = data) => {
                                   return (
                                        <Flex
                                             key={uuidv4()}
                                             justify="space-between"
                                             bg="gray.100"
                                             rounded="lg"
                                             padding={2}
                                             mb={2}
                                        >
                                             <Box
                                                  width="50%"
                                                  fontWeight="medium"
                                             >
                                                  {' '}
                                                  {fromHours}:{fromMinutes}{' '}
                                                  {fromPeriod} - {toHours}:
                                                  {toMinutes} {toPeriod}
                                             </Box>
                                             <Box width="50%">{friday}</Box>
                                        </Flex>
                                   );
                              }
                         )}
                    </TabPanel>
                    <TabPanel>
                         {schedule.map(
                              ({
                                   id,
                                   fromHours,
                                   fromMinutes,
                                   fromPeriod,
                                   toHours,
                                   toMinutes,
                                   toPeriod,
                                   monday,
                                   tuesday,
                                   wednesday,
                                   thursday,
                                   friday,
                                   saturday,
                                   sunday
                              } = data) => {
                                   return (
                                        <Flex
                                             key={uuidv4()}
                                             justify="space-between"
                                             bg="gray.100"
                                             rounded="lg"
                                             padding={2}
                                             mb={2}
                                        >
                                             <Box
                                                  width="50%"
                                                  fontWeight="medium"
                                             >
                                                  {' '}
                                                  {fromHours}:{fromMinutes}{' '}
                                                  {fromPeriod} - {toHours}:
                                                  {toMinutes} {toPeriod}
                                             </Box>
                                             <Box width="50%">{saturday}</Box>
                                        </Flex>
                                   );
                              }
                         )}
                    </TabPanel>
                    <TabPanel>
                         {schedule.map(
                              ({
                                   id,
                                   fromHours,
                                   fromMinutes,
                                   fromPeriod,
                                   toHours,
                                   toMinutes,
                                   toPeriod,
                                   monday,
                                   tuesday,
                                   wednesday,
                                   thursday,
                                   friday,
                                   saturday,
                                   sunday
                              } = data) => {
                                   return (
                                        <Flex
                                             key={uuidv4()}
                                             justify="space-between"
                                             bg="gray.100"
                                             rounded="lg"
                                             padding={2}
                                             mb={2}
                                        >
                                             <Box
                                                  width="50%"
                                                  fontWeight="medium"
                                             >
                                                  {' '}
                                                  {fromHours}:{fromMinutes}{' '}
                                                  {fromPeriod} - {toHours}:
                                                  {toMinutes} {toPeriod}
                                             </Box>
                                             <Box width="50%">{sunday}</Box>
                                        </Flex>
                                   );
                              }
                         )}
                    </TabPanel>
               </TabPanels>
          </Tabs>
     );
};

export default ScheduleMobile;
