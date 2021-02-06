import {
     Box,
     Flex,
     Heading,
     FormControl,
     FormLabel,
     FormErrorMessage,
     FormHelperText,
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
     HStack,
     Checkbox,
     useCheckboxGroup,
     Toast,
     useToast
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { capitalizeFirstLetter } from '@/components/helper/Capitalize';
import { useAuth } from '@/lib/auth';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = () => {
     const router = useRouter();
     const { form } = router.query;
     const { user } = useAuth();
     const [loading, setLoading] = useState(false);
     const { data } = useCheckboxGroup();
     const { handleSubmit, register, errors, reset } = useForm();
     const toast = useToast();

     const onSubmit = async ({
          name,
          email,
          phone,
          gender,
          experience,
          style,
          course,
          referral,
          conditions
     }) => {
          setLoading(true);
          await axios
               .post(`/api/forms/${form}`, {
                    name,
                    email,
                    phone,
                    gender,
                    experience,
                    style,
                    course,
                    referral,
                    conditions,
                    type: form
               })
               .then(function (response) {
                    setLoading(false);
                    router.push('/');
                    toast({
                         title: 'Account created.',
                         description: "We've created your account for you.",
                         status: 'success',
                         duration: 9000,
                         isClosable: true
                    });
                    reset();
               })
               .catch(function (error) {
                    setLoading(false);
                    toast({
                         title: 'An error occurred.',
                         description: error.message,
                         status: 'error',
                         duration: 5000,
                         isClosable: true
                    });
                    reset();
               });
     };

     return (
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
                    padding="5rem 0"
                    flexDirection="column"
               >
                    <Heading fontWeight="normal" fontSize="4xl">
                         Register For {form ? capitalizeFirstLetter(form) : ''}
                    </Heading>
                    <Box
                         bg="white"
                         rounded="lg"
                         textAlign="center"
                         mt={10}
                         padding={8}
                         width="50vw"
                         as="form"
                         boxShadow="sm"
                         onSubmit={handleSubmit((data) => onSubmit(data))}
                    >
                         <Stack spacing={5}>
                              <SimpleGrid
                                   minChildWidth="400px"
                                   spacing="20px"
                                   width="100%"
                              >
                                   <FormControl id="name">
                                        <FormLabel>Full Name</FormLabel>
                                        <Input
                                             type="name"
                                             value={user?.name}
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
                                             <option value="male">Male</option>
                                             <option value="female">
                                                  Female
                                             </option>
                                             <option value="other">
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
                                        {errors.style && errors.style.message}
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
                                   >
                                        <option value="space">
                                             AthaYog Space
                                        </option>
                                        <option value="shikshana pada">
                                             AthaYog Shikshana Pada
                                        </option>
                                        <option value="chikitsa">
                                             AthaYog Chikitsa
                                        </option>
                                        <option value="online">
                                             AthaYog Online
                                        </option>
                                        <option value="personal">
                                             AthaYog Personal
                                        </option>
                                        <option value="workshops">
                                             AthaYog Workshops
                                        </option>
                                        <option value="onsite">
                                             AthaYog Onsite
                                        </option>
                                   </Select>
                                   <FormErrorMessage>
                                        {errors.course && errors.course.message}
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
                                        <HStack>
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
                                        </HStack>
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
                                             <Stack direction="row">
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
                              Regiser
                         </Button>
                    </Box>
               </Flex>
          </motion.div>
     );
};

export default Register;
