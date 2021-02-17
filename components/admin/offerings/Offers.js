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
     useToast
} from '@chakra-ui/react';
import React, { useState } from 'react';
import useSWR from 'swr';
import EditOfferings from './EditOfferings';

const Offers = ({ offerType }) => {
     const { data, error } = useSWR(`/api/offerings/${offerType}`, fetcher, {
          refreshInterval: 500
     });
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
     return (
          <>
               <Box>
                    <Table variant="simple">
                         <Thead>
                              <Tr>
                                   <Th>Name</Th>
                                   <Th>Description</Th>
                                   <Th>Days</Th>
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
                                                            isDisabled={isLive}
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
                                                                 ogName={name}
                                                                 ogDescription={
                                                                      description
                                                                 }
                                                                 ogDays={days}
                                                                 ogPrice={price}
                                                                 ogIsActive={
                                                                      isActive
                                                                 }
                                                                 ogIsTrial={
                                                                      isTrial
                                                                 }
                                                                 id={id}
                                                            />
                                                            <Button
                                                                 colorScheme="red"
                                                                 onClick={() =>
                                                                      setIsOpen(
                                                                           true
                                                                      )
                                                                 }
                                                            >
                                                                 Delete
                                                            </Button>
                                                            <AlertDialog
                                                                 isOpen={isOpen}
                                                                 leastDestructiveRef={
                                                                      cancelRef
                                                                 }
                                                                 onClose={
                                                                      onClose
                                                                 }
                                                            >
                                                                 <AlertDialogOverlay>
                                                                      <AlertDialogContent>
                                                                           <AlertDialogHeader
                                                                                fontSize="lg"
                                                                                fontWeight="bold"
                                                                           >
                                                                                Delete
                                                                                Offer
                                                                           </AlertDialogHeader>

                                                                           <AlertDialogBody>
                                                                                Are
                                                                                you
                                                                                sure?
                                                                                You
                                                                                can't
                                                                                undo
                                                                                this
                                                                                action
                                                                                afterwards.
                                                                           </AlertDialogBody>

                                                                           <AlertDialogFooter>
                                                                                <Button
                                                                                     ref={
                                                                                          cancelRef
                                                                                     }
                                                                                     onClick={
                                                                                          onClose
                                                                                     }
                                                                                >
                                                                                     Cancel
                                                                                </Button>
                                                                                <Button
                                                                                     colorScheme="red"
                                                                                     onClick={
                                                                                          onClose
                                                                                     }
                                                                                     isLoading={
                                                                                          loading
                                                                                     }
                                                                                     ml={
                                                                                          3
                                                                                     }
                                                                                     onClick={() =>
                                                                                          deleteOffer(
                                                                                               id
                                                                                          )
                                                                                     }
                                                                                >
                                                                                     Delete
                                                                                </Button>
                                                                           </AlertDialogFooter>
                                                                      </AlertDialogContent>
                                                                 </AlertDialogOverlay>
                                                            </AlertDialog>
                                                       </ButtonGroup>
                                                  </Td>
                                             </Tr>
                                        );
                                   }
                              )}
                         </Tbody>
                    </Table>
               </Box>
          </>
     );
};

export default Offers;
