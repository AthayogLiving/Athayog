import { deleteOffering } from '@/lib/db/offerings';
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

const Offers = ({ offerType }) => {
     const { data, error } = useSWR(`/api/offerings/${offerType}`, fetcher, {
          refreshInterval: 500
     });
     const [isOpen, setIsOpen] = useState(false);
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
               <Grid height="350px">
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
                                                       <Badge
                                                            colorScheme={
                                                                 isActive
                                                                      ? 'teal'
                                                                      : 'red'
                                                            }
                                                       >
                                                            {isActive
                                                                 ? 'Active'
                                                                 : 'Not Active'}
                                                       </Badge>
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
                                                            <Button colorScheme="blue">
                                                                 Edit
                                                            </Button>
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
