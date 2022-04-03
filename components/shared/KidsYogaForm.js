import {
     Box,
     FormControl,
     FormLabel,
     FormErrorMessage,
     FormHelperText,
     Input,
     VStack,
     Button,
     HStack,
     Stack,
     Text,
     Select,
     Divider,
     Heading
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function KidsYogaForm() {
     const { handleSubmit, register, errors, reset } = useForm();
     const [loading, setLoading] = useState(false);
     const handleData = (data) => {
          setLoading(true);
          console.log(data);
     };

     useEffect(() => {
          // call api or anything
          (function () {
               var d = document;
               var x = !d.getElementById('razorpay-embed-btn-js');
               if (x) {
                    var s = d.createElement('script');
                    s.defer = !0;
                    s.id = 'razorpay-embed-btn-js';
                    s.src =
                         'https://cdn.razorpay.com/static/embed_btn/bundle.js';
                    d.body.appendChild(s);
               } else {
                    var rzp = window['__rzp__'];
                    rzp && rzp.init && rzp.init();
               }
          })();
     });
     return (
          <Box bg="white">
               <Box
                    maxW="container.lg"
                    margin="0 auto"
                    py={{ base: '5', md: '10' }}
                    px="5"
               >
                    <div
                         className="razorpay-embed-btn"
                         data-url="https://pages.razorpay.com/pl_JErS8rQFN4sbHl/view"
                         data-text="Pay Now"
                         data-color="#81A57C"
                         data-size="large"
                    ></div>

                    {/* <Box>
                         <Heading
                              textTransform="uppercase"
                              fontSize="2xl"
                              mb={3}
                         >
                              Register Now
                         </Heading>
                         <VStack
                              bg="white"
                              boxShadow="base"
                              rounded="md"
                              py={{ base: '5', md: '8' }}
                              px={{ base: '5', md: '8' }}
                              spacing={8}
                              as="form"
                              onSubmit={handleSubmit((data) =>
                                   handleData(data)
                              )}
                         >
                              <Text
                                   textAlign="left"
                                   width="100%"
                                   textTransform="uppercase"
                              >
                                   Parents Details
                              </Text>
                              <Stack
                                   width="100%"
                                   direction={['column', 'row']}
                                   spacing="24px"
                              >
                                   <FormControl>
                                        <FormLabel htmlFor="parentName">
                                             Parents Name
                                        </FormLabel>
                                        <Input
                                             id="parentName"
                                             type="text"
                                             name="parentName"
                                             isDisabled={loading}
                                             ref={register({
                                                  required:
                                                       'Please enter your gaurdian/parent name'
                                             })}
                                        />
                                   </FormControl>
                                   <FormControl>
                                        <FormLabel htmlFor="parentPhone">
                                             Phone number
                                        </FormLabel>
                                        <Input
                                             id="parentPhone"
                                             name="parentPhone"
                                             type="number"
                                             isDisabled={loading}
                                             ref={register({
                                                  required:
                                                       'Please enter your parent phone'
                                             })}
                                        />
                                   </FormControl>
                              </Stack>
                              <FormControl>
                                   <FormLabel htmlFor="parentEmail">
                                        {' '}
                                        Email Address.
                                   </FormLabel>
                                   <Input
                                        id="parentEmail"
                                        type="email"
                                        isDisabled={loading}
                                        name="email"
                                        ref={register({
                                             required: 'Please enter your email'
                                        })}
                                   />
                              </FormControl>

                              <Divider />
                              <Text
                                   textAlign="left"
                                   width="100%"
                                   textTransform="uppercase"
                              >
                                   Kids Details
                              </Text>

                              <Stack
                                   width="100%"
                                   direction={['column', 'row']}
                                   spacing="24px"
                              >
                                   <FormControl>
                                        <FormLabel htmlFor="kidName">
                                             Name
                                        </FormLabel>
                                        <Input
                                             id="kidName"
                                             isDisabled={loading}
                                             type="text"
                                             name="kidsName"
                                             ref={register({
                                                  required:
                                                       'Please enter kids name'
                                             })}
                                        />
                                   </FormControl>{' '}
                                   <FormControl>
                                        <FormLabel htmlFor="kidDOB">
                                             DOB
                                        </FormLabel>
                                        <Input
                                             id="kidDOB"
                                             type="date"
                                             isDisabled={loading}
                                             name="date"
                                             ref={register({
                                                  required: 'Select a date'
                                             })}
                                        />
                                   </FormControl>
                              </Stack>
                              <Stack
                                   width="100%"
                                   direction={['column', 'row']}
                                   spacing="24px"
                              >
                                   <FormControl>
                                        <FormLabel htmlFor="published-date">
                                             Class
                                        </FormLabel>
                                        <Input
                                             id="kidClass"
                                             type="text"
                                             name="class"
                                             isDisabled={loading}
                                             ref={register({
                                                  required:
                                                       'Please enter your class'
                                             })}
                                        />
                                   </FormControl>
                                   <FormControl>
                                        <FormLabel htmlFor="published-date">
                                             School Name
                                        </FormLabel>
                                        <Input
                                             id="school"
                                             type="text"
                                             name="school"
                                             isDisabled={loading}
                                             ref={register({
                                                  required:
                                                       'Please enter your school'
                                             })}
                                        />
                                   </FormControl>
                              </Stack>
                              <FormControl>
                                   <FormLabel htmlFor="published-date">
                                        Location
                                   </FormLabel>
                                   <Select
                                        name="location"
                                        isDisabled={loading}
                                        ref={register({
                                             required:
                                                  'Please select a location'
                                        })}
                                   >
                                        <option value="online">
                                             Online (Indiranagar/KR Puram)
                                        </option>
                                        <option value="offline">Offline</option>
                                   </Select>
                              </FormControl>

                              <FormControl>
                                   <Button
                                        type="submit"
                                        colorScheme="green"
                                        isLoading={loading}
                                        loadingText="Submitting"
                                   >
                                        Register
                                   </Button>
                              </FormControl>
                         </VStack>
                    </Box> */}
               </Box>
          </Box>
     );
}

export default KidsYogaForm;
