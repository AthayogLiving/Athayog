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
import React, { useState } from 'react';
import { Router, useRouter } from 'next/router';
import { motion } from 'framer-motion';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { capitalizeFirstLetter } from '@/components/helper/Capitalize';
import { useAuth } from '@/lib/auth';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { logo } from 'public/og.png';
import HomeLayout from '@/components/layout/HomeLayout';
import { registerForm, registerFormFree } from '@/lib/db/forms';

const Register = () => {
     const router = useRouter();
     const { form, price, duration, courseName, courseId } = router.query;
     const { user } = useAuth();
     const [loading, setLoading] = useState(false);
     const [paymentLoader, setPaymentLoader] = useState(true);
     const { data } = useCheckboxGroup();
     const { handleSubmit, register, errors, reset } = useForm();
     const toast = useToast();

     if (!form && !price && !duration && !courseName && !courseId) {
          return (
               <Grid height="100vh" placeItems="center ">
                    <Spinner />
               </Grid>
          );
     }

     if (form == 'trial') {
          toast({
               title: 'Login First',
               description:
                    'Create or Login to your account to continue payment',
               status: 'warning',
               duration: 5000,
               isClosable: true
          });
          setButtonId('');

          cookie.set('routeTo', `/register/trial`, {
               expires: 1
          });

          router.push('/account/login');

          return;
     }

     if (!user) {
          return (
               <Grid height="100vh" placeItems="center ">
                    <Spinner />
               </Grid>
          );
     }

     if (/@athayogliving.com\s*$/.test(user.email)) {
          router.push('/');
          toast({
               title: 'Admin Account',
               description: `Can't make purchases from admin account`,
               status: 'warning',
               duration: 5000,
               isClosable: true
          });
          return;
     }

     let ogData = {};

     const getOffer = async () => {
          await axios
               .get(`/api/offerings/offer/${courseId}`)
               .then((response) => {
                    ogData = response.data;
               });
     };

     getOffer();

     if (!ogData) {
          return (
               <Grid height="100vh" placeItems="center ">
                    <Spinner />
               </Grid>
          );
     }

     function loadScript(src) {
          return new Promise((resolve) => {
               const script = document.createElement('script');
               script.src = src;
               script.async = true;
               script.onload = () => {
                    resolve(true);
               };
               script.onerror = () => {
                    resolve(false);
               };
               document.body.appendChild(script);
          });
     }

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
          if (form == 'onsite' || form == 'chikitsa' || form == 'trial') {
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
          }

          if (price == 0) {
               submitWithoutPaymentFree({
                    name,
                    email,
                    phone,
                    gender,
                    experience,
                    style,
                    referral,
                    conditions,
                    courseName,
                    courseId,
                    price,
                    duration
               });
               return;
          }
          const res = await loadScript(
               'https://checkout.razorpay.com/v1/checkout.js'
          );

          if (!res) {
               toast({
                    title: 'Are you online?.',
                    description: 'Razorpay SDK failed to load. Are you online?',
                    status: 'error',
                    duration: 5000,
                    isClosable: true
               });
               setLoading(false);
               return;
          }

          const result = await axios.post('/api/payment/orders', {
               amount: ogData.price * 100,
               receipt: ogData.id
          });

          if (!result) {
               toast({
                    title: 'Are you online?.',
                    description: 'An error occured',
                    status: 'error',
                    duration: 5000,
                    isClosable: true
               });
               setLoading(false);
               return;
          }

          const { id: order_id } = result.data;

          const options = {
               key: process.env.RAZORPAY_KEY_ID,
               amount: ogData.price * 100,
               currency: 'INR',
               name: ogData.name,
               description: ogData.days,
               image: { logo },
               order_id: order_id,
               handler: async function (response) {
                    const data = {
                         orderCreationId: order_id,
                         razorpayPaymentId: response.razorpay_payment_id,
                         razorpayOrderId: response.razorpay_order_id,
                         razorpaySignature: response.razorpay_signature
                    };

                    await registerForm(
                         user.uid,
                         name,
                         email,
                         phone,
                         gender,
                         experience,
                         style,
                         capitalizeFirstLetter(form),
                         referral,
                         conditions,
                         capitalizeFirstLetter(form)
                    )
                         .then((response) => {
                              reset();
                              window.location.href = `/payment/success?razorpayPaymentId=${data.razorpayPaymentId}&razorpayOrderId=${data.razorpayOrderId}&courseName=${courseName}`;
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
               },
               modal: {
                    ondismiss: function () {
                         setLoading(false);
                    }
               },
               prefill: {
                    name: name,
                    email: email,
                    contact: phone
               },
               notes: {
                    userId: user.uid,
                    courseId: ogData.id,
                    courseName: ogData.name,
                    duration: ogData.days,
                    price: ogData.price,
                    address:
                         '307, Athayog living, Sun Rise Arcade, Devasandra Main Rd, Kodigehalli, Krishnarajapura, Bengaluru, Karnataka 560036'
               },
               theme: {
                    color: '#84986D'
               }
          };

          const paymentObject = new window.Razorpay(options);
          paymentObject.open();
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
          await registerForm(
               user.uid,
               name,
               email,
               phone,
               gender,
               experience,
               style,
               capitalizeFirstLetter(form),
               referral,
               conditions,
               capitalizeFirstLetter(form)
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

     const submitWithoutPaymentFree = async ({
          name,
          email,
          phone,
          gender,
          experience,
          style,
          referral,
          conditions,
          courseName,
          courseId,
          price,
          duration
     }) => {
          setLoading(true);
          await registerFormFree(
               user.uid,
               name,
               email,
               phone,
               gender,
               experience,
               style,
               capitalizeFirstLetter(form),
               referral,
               conditions,
               capitalizeFirstLetter(form),
               courseName,
               courseId,
               price,
               duration
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
                              Register For{' '}
                              {form ? capitalizeFirstLetter(form) : ''}
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
                                             <FormLabel>Full Name</FormLabel>
                                             <Input
                                                  type="name"
                                                  value={user.name}
                                                  readOnly
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
                                             <FormLabel>Phone Number</FormLabel>
                                             <Input
                                                  type="number"
                                                  name="phone"
                                                  defaultValue={user.phone}
                                                  ref={register({
                                                       required:
                                                            'Please enter your number.'
                                                  })}
                                             />
                                             <FormErrorMessage>
                                                  {errors.phone &&
                                                       errors.phone.message}
                                             </FormErrorMessage>
                                        </FormControl>
                                        <FormControl id="email">
                                             <FormLabel>Email</FormLabel>
                                             <Input
                                                  type="email"
                                                  name="email"
                                                  value={user.email}
                                                  readOnly
                                                  ref={register({
                                                       required:
                                                            'Please enter your email.'
                                                  })}
                                             />
                                             <FormErrorMessage>
                                                  {errors.email &&
                                                       errors.email.message}
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
                                                       errors.gender.message}
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
                                                  errors.experience.message}
                                        </FormErrorMessage>
                                   </FormControl>
                                   <FormControl id="style">
                                        <FormLabel>Style of yoga</FormLabel>
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
                                        <FormLabel>Course Interested</FormLabel>
                                        <Select
                                             placeholder="Select a option"
                                             ref={register({
                                                  required:
                                                       'Please select your course.'
                                             })}
                                             name="course"
                                             isReadOnly
                                             value={capitalizeFirstLetter(form)}
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
                                                  errors.conditions.message}
                                        </FormErrorMessage>
                                   </FormControl>

                                   <SimpleGrid
                                        minChildWidth="400px"
                                        spacing="20px"
                                        width="100%"
                                   >
                                        <FormControl id="referral">
                                             <FormLabel>
                                                  How did you hear about us?
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
                                                       errors.referral.message}
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
               {paymentLoader ? (
                    <Box
                         position="fixed"
                         height="100vh"
                         width="100wv"
                         zIndex="20"
                    >
                         <Grid
                              placeItems="center"
                              height="100vh"
                              bg="rgba(0,0,0,0.8)"
                              width="100%"
                         >
                              <Grid placeItems="center">
                                   <Spinner
                                        thickness="4px"
                                        speed="0.65s"
                                        emptyColor="gray.200"
                                        color="teal.blue"
                                        size="xl"
                                   />
                                   <Text textColor="white" mt={3}>
                                        Redirecting... Please Wait...
                                   </Text>
                              </Grid>
                         </Grid>
                    </Box>
               ) : null}
          </>
     );
};

export default Register;
Register.Layout = HomeLayout;
