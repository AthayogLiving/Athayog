import { deleteOffering, updateOfferingActiveState } from '@/lib/db/offerings';
import fetcher from '@/utils/fetcher';
import {
     Box,
     Grid,
     Spinner,
     Table,
     Thead,
     Tbody,
     Tfoot,
     Tr,
     Th,
     Td,
     TableCaption,
     Switch,
     Badge,
     ButtonGroup,
     Button,
     AlertDialog,
     AlertDialogBody,
     AlertDialogFooter,
     AlertDialogHeader,
     toast,
     AlertDialogContent,
     AlertDialogOverlay,
     Text,
     useToast,
     Flex
} from '@chakra-ui/react';
import React, { useState } from 'react';
import useSWR from 'swr';
import EditOfferings from './EditOfferings';
import { useMediaQuery } from 'react-responsive';

const Offers = ({ offerType }) => {
     const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
     const { data, error } = useSWR(`/api/offerings/${offerType}`, fetcher, {
          refreshInterval: 500
     });
     const [delteId, setDeleteID] = useState('');
     const [isOpen, setIsOpen] = useState(false);
     const [isLive, setIsLive] = useState(false);
     const onClose = () => setIsOpen(false);
     const [loading, setLoading] = useState(false);
     const cancelRef = React.useRef();
     const toast = useToast();

     if (error)
          return (
               <Grid placeItems="center" height="350px">
                    <Text ml={2}> Something Happend Try Again!</Text>
               </Grid>
          );

     if (!data) {
          return (
               <Grid height="350px" placeItems="center">
                    <Spinner />
               </Grid>
          );
     }

     if (data.offers.length <= 0) {
          return (
               <Grid height="350px" placeItems="center">
                    <Text ml={2}> No Offers Found! :(</Text>
               </Grid>
          );
     }

     const updateActiveState = async (id, state) => {
          setIsLive(true);

          await updateOfferingActiveState(id, !state)
               .then((response) => {
                    toast({
                         title: `Offer Is Now ${!state ? 'Live' : 'Offline'}`,
                         description:
                              "We've have updated the offerings and it's live.",
                         status: 'success',
                         duration: 9000,
                         isClosable: true
                    });
                    setLoading(false);
                    setIsLive(false);
               })
               .catch((error) => {
                    toast({
                         title: 'Something Happend',
                         description: error.message,
                         status: 'error',
                         duration: 9000,
                         isClosable: true
                    });
                    setLoading(false);
                    setIsLive(false);
               });
     };

     const deleteOffer = async (id) => {
          setLoading(true);
          await deleteOffering(id)
               .then((response) => {
                    toast({
                         title: 'Offer Deleted',
                         description: "We've have deleted the offering.",
                         status: 'success',
                         duration: 9000,
                         isClosable: true
                    });
                    setIsOpen(false);
                    setLoading(false);
               })
               .catch((error) => {
                    toast({
                         title: 'Something Happend',
                         description: error.message,
                         status: 'error',
                         duration: 9000,
                         isClosable: true
                    });
                    setIsOpen(false);
                    setLoading(false);
               });
     };

     const openModel = (id) => {
          setIsOpen(true);
          setDeleteID(id);
     };
     return (
          <>
               {isTabletOrMobile ? (
                    <Box>
                         {data?.offers?.map(
                              ({
                                   name,
                                   price,
                                   days,
                                   isActive,
                                   description,
                                   old_price,
                                   isTrial,
                                   id
                              }) => {
                                   return (
                                        <Box
                                             padding={3}
                                             index={id}
                                             mb={5}
                                             key={id}
                                             borderBottom="1px solid #ddd"
                                        >
                                             <Flex
                                                  alignItems="center"
                                                  justifyContent="space-between"
                                                  mb={2}
                                             >
                                                  <Text>Name:</Text>
                                                  <Text>{name}</Text>
                                             </Flex>
                                             <Flex
                                                  alignItems="center"
                                                  justifyContent="space-between"
                                                  flexWrap="wrap"
                                                  mb={2}
                                             >
                                                  <Text>Description:</Text>
                                                  <Text>{description}</Text>
                                             </Flex>
                                             <Flex
                                                  alignItems="center"
                                                  justifyContent="space-between"
                                                  mb={2}
                                             >
                                                  <Text>Old Price:</Text>
                                                  <Text>{old_price}</Text>
                                             </Flex>
                                             <Flex
                                                  alignItems="center"
                                                  justifyContent="space-between"
                                                  mb={2}
                                             >
                                                  <Text>Price:</Text>
                                                  <Text>{price}</Text>
                                             </Flex>
                                             <Flex
                                                  alignItems="center"
                                                  justifyContent="space-between"
                                                  mb={2}
                                             >
                                                  <Text>Days:</Text>
                                                  <Text>{days}</Text>
                                             </Flex>
                                             <Flex
                                                  alignItems="center"
                                                  justifyContent="space-between"
                                                  mb={2}
                                             >
                                                  <Text>is Active</Text>
                                                  <Switch
                                                       colorScheme={
                                                            isActive
                                                                 ? 'teal'
                                                                 : 'red'
                                                       }
                                                       defaultChecked={isActive}
                                                       isDisabled={isLive}
                                                       onChange={() =>
                                                            updateActiveState(
                                                                 id,
                                                                 isActive
                                                            )
                                                       }
                                                  />
                                             </Flex>
                                             <Flex
                                                  alignItems="center"
                                                  justifyContent="space-between"
                                                  mb={2}
                                             >
                                                  <Text>Is Trial</Text>
                                                  <Badge
                                                       colorScheme={
                                                            isTrial
                                                                 ? 'teal'
                                                                 : 'yellow'
                                                       }
                                                  >
                                                       {isTrial ? 'Yes' : 'No'}
                                                  </Badge>
                                             </Flex>
                                             <ButtonGroup size="sm">
                                                  <EditOfferings
                                                       type={offerType}
                                                       ogName={name}
                                                       ogDescription={
                                                            description
                                                       }
                                                       ogOldPrice={old_price}
                                                       ogDays={days}
                                                       ogPrice={price}
                                                       ogIsActive={isActive}
                                                       ogIsTrial={isTrial}
                                                       id={id}
                                                  />
                                                  {/* <Button
                                                       colorScheme="red"
                                                       onClick={() =>
                                                            setIsOpen(true)
                                                       }
                                                  >
                                                       Delete
                                                  </Button> */}
                                             </ButtonGroup>
                                        </Box>
                                   );
                              }
                         )}
                    </Box>
               ) : (
                    <Box>
                         <Table variant="simple">
                              <Thead>
                                   <Tr>
                                        <Th>Name</Th>
                                        <Th>Description</Th>
                                        <Th>Days</Th>
                                        <Th>Old Price</Th>
                                        <Th>Price</Th>
                                        <Th>Is Active</Th>
                                        <Th>Is Trial</Th>
                                        <Th>Action</Th>
                                   </Tr>
                              </Thead>
                              <Tbody>
                                   {data?.offers?.map(
                                        ({
                                             name,
                                             old_price,
                                             price,
                                             days,
                                             isActive,
                                             description,
                                             isTrial,
                                             id
                                        }) => {
                                             return (
                                                  <Tr key={id}>
                                                       <Td>{name}</Td>
                                                       <Td>{description}</Td>
                                                       <Td>{days}</Td>
                                                       <Td>{old_price}</Td>
                                                       <Td>{price}</Td>
                                                       <Td>
                                                            <Switch
                                                                 colorScheme={
                                                                      isActive
                                                                           ? 'teal'
                                                                           : 'red'
                                                                 }
                                                                 defaultChecked={
                                                                      isActive
                                                                 }
                                                                 isDisabled={
                                                                      isLive
                                                                 }
                                                                 onChange={() =>
                                                                      updateActiveState(
                                                                           id,
                                                                           isActive
                                                                      )
                                                                 }
                                                            />
                                                       </Td>
                                                       <Td>
                                                            <Badge
                                                                 colorScheme={
                                                                      isTrial
                                                                           ? 'teal'
                                                                           : 'yellow'
                                                                 }
                                                            >
                                                                 {isTrial
                                                                      ? 'Yes'
                                                                      : 'No'}
                                                            </Badge>
                                                       </Td>
                                                       <Td>
                                                            <ButtonGroup size="sm">
                                                                 <EditOfferings
                                                                      type={
                                                                           offerType
                                                                      }
                                                                      ogName={
                                                                           name
                                                                      }
                                                                      ogDescription={
                                                                           description
                                                                      }
                                                                      ogDays={
                                                                           days
                                                                      }
                                                                      ogOldPrice={
                                                                           old_price
                                                                      }
                                                                      ogPrice={
                                                                           price
                                                                      }
                                                                      ogIsActive={
                                                                           isActive
                                                                      }
                                                                      ogIsTrial={
                                                                           isTrial
                                                                      }
                                                                      id={id}
                                                                 />
                                                                 {/* <Button
                                                                      colorScheme="red"
                                                                      onClick={() =>
                                                                           openModel(
                                                                                id
                                                                           )
                                                                      }
                                                                 >
                                                                      Delete
                                                                 </Button> */}
                                                            </ButtonGroup>
                                                       </Td>
                                                  </Tr>
                                             );
                                        }
                                   )}
                              </Tbody>
                         </Table>
                    </Box>
               )}
               <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
               >
                    <AlertDialogOverlay>
                         <AlertDialogContent>
                              <AlertDialogHeader
                                   fontSize="lg"
                                   fontWeight="bold"
                              >
                                   Delete Offer
                              </AlertDialogHeader>

                              <AlertDialogBody>
                                   Are you sure? You can't undo this action
                                   afterwards.
                              </AlertDialogBody>

                              <AlertDialogFooter>
                                   <Button ref={cancelRef} onClick={onClose}>
                                        Cancel
                                   </Button>
                                   <Button
                                        colorScheme="red"
                                        onClick={onClose}
                                        isLoading={loading}
                                        ml={3}
                                        onClick={() => deleteOffer(delteId)}
                                   >
                                        Delete
                                   </Button>
                              </AlertDialogFooter>
                         </AlertDialogContent>
                    </AlertDialogOverlay>
               </AlertDialog>
          </>
     );
};

export default Offers;
