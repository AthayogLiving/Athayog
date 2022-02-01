import React, { useState } from 'react';
import {
     Box,
     Flex,
     Heading,
     FormControl,
     FormLabel,
     FormErrorMessage,
     SimpleGrid,
     Input,
     Textarea,
     Divider,
     Select,
     Stack,
     RadioGroup,
     Radio,
     Button,
     CheckboxGroup,
     Checkbox,
     useCheckboxGroup,
     useToast,
     Spinner,
     Grid,
     Text
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { capitalizeFirstLetter } from '@/components/helper/Capitalize';
import { useAuth } from '@/lib/auth';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { logo } from 'public/og.png';
import HomeLayout from '@/components/layout/HomeLayout';
import { registerForm, registerFormTrial } from '@/lib/db/forms';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';

function Trial() {
     const [loading, setLoading] = useState(false);
     const { handleSubmit, register, errors, reset } = useForm();
     const toast = useToast();
     const router = useRouter();

     const submitForm = async ({
          name,
          email,
          phone,
          gender,
          experience,
          style,
          referral,
          conditions
     }) => {
          setLoading(true);
          submitWithoutPayment({
               name,
               email,
               phone,
               gender,
               experience,
               style,
               referral,
               conditions
          });
          return;
     };

     const submitWithoutPayment = async ({
          name,
          email,
          phone,
          gender,
          experience,
          style,
          referral,
          conditions
     }) => {
          setLoading(true);
          await registerFormTrial(
               name,
               email,
               phone,
               gender,
               experience,
               style,
               capitalizeFirstLetter('trial'),
               referral,
               conditions,
               capitalizeFirstLetter('trial')
          )
               .then((response) => {
                    reset();
                    toast({
                         title: 'Successfully Submitted.',
                         description: 'We will reach back to you soon :)',
                         status: 'success',
                         duration: 5000,
                         isClosable: true
                    });
                    // Send Email
                    fetch('https://formsubmit.co/ajax/info@athayogliving.com', {
                         method: 'POST',
                         headers: {
                              'Content-Type': 'application/json',
                              Accept: 'application/json'
                         },
                         body: JSON.stringify({
                              FormType: 'Trial Form',
                              name: name,
                              email: email,
                              phone: phone,
                              gender: gender,
                              experience: experience,
                              style: style,

                              referral: referral,
                              conditions: conditions.toString()
                         })
                    });
                    router.push('/');
               })
               .catch((error) => {
                    setLoading(false);
                    toast({
                         title: 'An error occurred.',
                         description: error.message,
                         status: 'error',
                         duration: 5000,
                         isClosable: true
                    });
                    setLoading(false);
                    reset();
               });
     };
     return (
          <div>
               {' '}
               <>
                    <motion.div
                         exit={{ opacity: 0 }}
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                    >
                         <NavbarHelper />

                         <Flex
                              justifyContent="center"
                              alignItems="center"
                              height="100%"
                              bg="primaryWhite"
                              padding={{
                                   base: '2rem 0',
                                   md: '3rem 0',
                                   lg: '5rem 0'
                              }}
                              flexDirection="column"
                         >
                              <Heading
                                   fontWeight="normal"
                                   fontSize={{
                                        base: '2xl',
                                        md: '2xl',
                                        lg: '4xl'
                                   }}
                              >
                                   Register For Trial Classes
                              </Heading>
                              <Box
                                   bg="white"
                                   rounded="lg"
                                   textAlign="center"
                                   mt={{ base: 2, md: 5, lg: 10 }}
                                   padding={8}
                                   width={{ base: '95%', md: '90%', lg: '75%' }}
                                   as="form"
                                   boxshadow="base"
                                   onSubmit={handleSubmit((data) =>
                                        submitForm(data)
                                   )}
                              >
                                   <Stack spacing={5}>
                                        <SimpleGrid
                                             minChildWidth={{
                                                  base: '200px',
                                                  md: '300px',
                                                  lg: '400px'
                                             }}
                                             spacing="20px"
                                             width="100%"
                                        >
                                             <FormControl id="name">
                                                  <FormLabel>
                                                       Full Name
                                                  </FormLabel>
                                                  <Input
                                                       type="name"
                                                       name="name"
                                                       ref={register({
                                                            required:
                                                                 'Please enter your name.'
                                                       })}
                                                  />
                                                  <FormErrorMessage>
                                                       {errors.name &&
                                                            errors.name.message}
                                                  </FormErrorMessage>
                                             </FormControl>
                                             <FormControl id="phone">
                                                  <FormLabel>
                                                       Phone Number
                                                  </FormLabel>
                                                  <Input
                                                       type="number"
                                                       name="phone"
                                                       ref={register({
                                                            required:
                                                                 'Please enter your number.'
                                                       })}
                                                  />
                                                  <FormErrorMessage>
                                                       {errors.phone &&
                                                            errors.phone
                                                                 .message}
                                                  </FormErrorMessage>
                                             </FormControl>
                                             <FormControl id="email">
                                                  <FormLabel>Email</FormLabel>
                                                  <Input
                                                       type="email"
                                                       name="email"
                                                       ref={register({
                                                            required:
                                                                 'Please enter your email.'
                                                       })}
                                                  />
                                                  <FormErrorMessage>
                                                       {errors.email &&
                                                            errors.email
                                                                 .message}
                                                  </FormErrorMessage>
                                             </FormControl>
                                             <FormControl id="gender">
                                                  <FormLabel>Gender</FormLabel>
                                                  <Select
                                                       placeholder="Select option"
                                                       name="gender"
                                                       ref={register({
                                                            required:
                                                                 'Please select your gender.'
                                                       })}
                                                  >
                                                       <option value="Male">
                                                            Male
                                                       </option>
                                                       <option value="Female">
                                                            Female
                                                       </option>
                                                       <option value="Other">
                                                            Other
                                                       </option>
                                                  </Select>
                                                  <FormErrorMessage>
                                                       {errors.gender &&
                                                            errors.gender
                                                                 .message}
                                                  </FormErrorMessage>
                                             </FormControl>
                                        </SimpleGrid>
                                        <FormControl id="experience">
                                             <FormLabel>
                                                  Previous yoga experience
                                             </FormLabel>
                                             <Textarea
                                                  name="experience"
                                                  ref={register({
                                                       required:
                                                            'Please fill your yoga experience.'
                                                  })}
                                             />
                                             <FormErrorMessage>
                                                  {errors.experience &&
                                                       errors.experience
                                                            .message}
                                             </FormErrorMessage>
                                        </FormControl>
                                        <FormControl id="style">
                                             <FormLabel>
                                                  Style of yoga
                                             </FormLabel>
                                             <Textarea
                                                  name="style"
                                                  ref={register({
                                                       required:
                                                            'Please fill your style of yoga.'
                                                  })}
                                             />
                                             <FormErrorMessage>
                                                  {errors.style &&
                                                       errors.style.message}
                                             </FormErrorMessage>
                                        </FormControl>
                                        <Divider
                                             variant="dashed"
                                             colorScheme="blue"
                                             width="100%"
                                        />

                                        <FormControl id="course">
                                             <FormLabel>
                                                  Course Interested
                                             </FormLabel>
                                             <Select
                                                  placeholder="Select a option"
                                                  ref={register({
                                                       required:
                                                            'Please select your course.'
                                                  })}
                                                  name="course"
                                                  isReadOnly
                                                  value={capitalizeFirstLetter(
                                                       'trial'
                                                  )}
                                                  disabled
                                             >
                                                  <option value="Space">
                                                       AthaYog Space
                                                  </option>
                                                  <option value="Shikshana Pada">
                                                       AthaYog Shikshana Pada
                                                  </option>
                                                  <option value="Chikitsa">
                                                       AthaYog Chikitsa
                                                  </option>
                                                  <option value="Online">
                                                       AthaYog Online
                                                  </option>
                                                  <option value="Personal">
                                                       AthaYog Personal
                                                  </option>
                                                  <option value="Workshops">
                                                       AthaYog Workshops
                                                  </option>
                                                  <option value="Onsite">
                                                       AthaYog Onsite
                                                  </option>
                                                  <option value="Trial">
                                                       Free Trial
                                                  </option>
                                             </Select>
                                             <FormErrorMessage>
                                                  {errors.course &&
                                                       errors.course.message}
                                             </FormErrorMessage>
                                        </FormControl>
                                        <FormControl id="conditions">
                                             <FormLabel>
                                                  Health and medical conditions
                                             </FormLabel>
                                             <CheckboxGroup
                                                  colorScheme="green"
                                                  defaultValue={[
                                                       'Spine/Joint',
                                                       'Heart',
                                                       'Neurological/Psychological',
                                                       'Others'
                                                  ]}
                                                  name="conditions"
                                             >
                                                  <Stack
                                                       direction={{
                                                            base: 'column',
                                                            md: 'column',
                                                            lg: 'row'
                                                       }}
                                                  >
                                                       <Checkbox
                                                            value="Spine/Joint"
                                                            name="conditions"
                                                            ref={register}
                                                       >
                                                            Spine/Joint Related
                                                       </Checkbox>
                                                       <Checkbox
                                                            value="Heart"
                                                            name="conditions"
                                                            ref={register}
                                                       >
                                                            Heart Related
                                                       </Checkbox>
                                                       <Checkbox
                                                            value="Neurological/Psychological"
                                                            name="conditions"
                                                            ref={register}
                                                       >
                                                            Neurological/Psychological
                                                       </Checkbox>
                                                       <Checkbox
                                                            value="Others"
                                                            name="conditions"
                                                            ref={register}
                                                       >
                                                            Others
                                                       </Checkbox>
                                                  </Stack>
                                             </CheckboxGroup>
                                             <FormErrorMessage>
                                                  {errors.conditions &&
                                                       errors.conditions
                                                            .message}
                                             </FormErrorMessage>
                                        </FormControl>

                                        <SimpleGrid
                                             minChildWidth="400px"
                                             spacing="20px"
                                             width="100%"
                                        >
                                             <FormControl id="referral">
                                                  <FormLabel>
                                                       How did you hear about
                                                       us?
                                                  </FormLabel>
                                                  <RadioGroup>
                                                       <Stack
                                                            direction={{
                                                                 base: 'column',
                                                                 md: 'column',
                                                                 lg: 'row'
                                                            }}
                                                       >
                                                            <Radio
                                                                 value="Google"
                                                                 name="referral"
                                                                 ref={register}
                                                            >
                                                                 Google
                                                            </Radio>
                                                            <Radio
                                                                 value="Facebook"
                                                                 name="referral"
                                                                 ref={register}
                                                            >
                                                                 Facebook
                                                            </Radio>
                                                            <Radio
                                                                 value="Instagram"
                                                                 name="referral"
                                                                 ref={register}
                                                            >
                                                                 Instagram
                                                            </Radio>
                                                            <Radio
                                                                 value=" Word of Mouth"
                                                                 name="referral"
                                                                 ref={register}
                                                            >
                                                                 Word of Mouth
                                                            </Radio>
                                                            <Radio
                                                                 value="Alumni "
                                                                 name="referral"
                                                                 ref={register}
                                                            >
                                                                 Alumni
                                                            </Radio>
                                                       </Stack>
                                                  </RadioGroup>
                                                  <FormErrorMessage>
                                                       {errors.referral &&
                                                            errors.referral
                                                                 .message}
                                                  </FormErrorMessage>
                                             </FormControl>
                                        </SimpleGrid>
                                   </Stack>
                                   <Button
                                        colorScheme="aygreen"
                                        mt={10}
                                        ml="auto"
                                        type="submit"
                                        isLoading={loading}
                                        loadingText="Submitting"
                                   >
                                        Register
                                   </Button>
                              </Box>
                         </Flex>
                    </motion.div>
               </>
          </div>
     );
}

export default Trial;
Trial.Layout = HomeLayout;
