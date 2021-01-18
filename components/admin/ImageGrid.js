import {
     Box,
     Button,
     HStack,
     Skeleton,
     AlertDialog,
     AlertDialogBody,
     AlertDialogFooter,
     AlertDialogHeader,
     AlertDialogContent,
     AlertDialogOverlay,
     useToast
} from '@chakra-ui/react';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { deleteImage } from '@/lib/db';

const ImageGrid = ({ imageType }) => {
     const { data } = useSWR(`/api/images/${imageType}`, fetcher);

     const toast = useToast();
     const [isOpen, setIsOpen] = useState(false);
     const [isloading, setIsLoading] = useState(false);
     const [selectedImage, setSelectedImage] = useState('');
     const [imageRef, setImageRef] = useState('');
     const cancelRef = useRef();
     const onClose = () => setIsOpen(false);

     const setDeletedImage = (imageId, imageType) => {
          setIsOpen(true);
          setSelectedImage(imageId);
          setImageRef(imageType);
     };

     const deleteImageFirestore = async () => {
          setIsLoading(true);
          await deleteImage(selectedImage, imageRef);
          setIsLoading(false);
          setIsOpen(false);
          toast({
               title: 'Image Deleted.',
               description: "We've have deleted the image from storage.",
               status: 'success',
               duration: 9000,
               isClosable: true
          });
     };

     if (!data) {
          return <Skeleton my={5} height="250px" width="250px"></Skeleton>;
     }

     return (
          <Box>
               <HStack my={5} spacing="24px" width="100%">
                    {data.images ? (
                         data.images.map((image) => {
                              return (
                                   <Box
                                        key={image.id}
                                        d="flex"
                                        flexDirection="column"
                                   >
                                        <Image
                                             src={image.imageUrl}
                                             height="250px"
                                             width="250px"
                                             objectFit="cover"
                                        />
                                        <Button
                                             colorScheme="red"
                                             mt={3}
                                             onClick={() =>
                                                  setDeletedImage(
                                                       image.id,
                                                       imageType
                                                  )
                                             }
                                        >
                                             Delete
                                        </Button>
                                   </Box>
                              );
                         })
                    ) : (
                         <>
                              <Text>No Data</Text>
                         </>
                    )}
               </HStack>

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
                                   Delete Image
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
                                        isLoading={isloading}
                                        onClick={() => deleteImageFirestore()}
                                        ml={3}
                                   >
                                        Delete
                                   </Button>
                              </AlertDialogFooter>
                         </AlertDialogContent>
                    </AlertDialogOverlay>
               </AlertDialog>
          </Box>
     );
};

export default ImageGrid;
