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
     Stack
} from '@chakra-ui/react';
import React from 'react';

function KidsYogaForm() {
     return (
          <VStack
               bg="white"
               boxShadow="base"
               rounded="md"
               py={{ base: '5', md: '8' }}
               px={{ base: '5', md: '8' }}
               spacing={8}
          >
               <Stack width="100%" direction={['column', 'row']} spacing="24px">
                    <FormControl>
                         <FormLabel htmlFor="name">First Name</FormLabel>
                         <Input id="name" type="name" />
                    </FormControl>
                    <FormControl>
                         <FormLabel htmlFor="name">Last Name</FormLabel>
                         <Input id="name" type="name" />
                    </FormControl>
               </Stack>

               <FormControl>
                    <FormLabel htmlFor="email">Email address</FormLabel>
                    <Input id="email" type="email" />
               </FormControl>

               <Stack width="100%" direction={['column', 'row']} spacing="24px">
                    {' '}
                    <FormControl>
                         <FormLabel htmlFor="phone">Phone</FormLabel>
                         <Input id="phone" type="phone" />
                    </FormControl>
                    <FormControl>
                         <FormLabel htmlFor="age">Age</FormLabel>
                         <Input id="age" type="age" />
                    </FormControl>
               </Stack>
               <FormControl>
                    <Button colorScheme="green">Register</Button>
               </FormControl>
          </VStack>
     );
}

export default KidsYogaForm;
