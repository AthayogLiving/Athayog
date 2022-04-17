import {
     AspectRatio,
     Grid,
     List,
     ListIcon,
     ListItem,
     Stack,
     Text,
     chakra
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { MdCheckCircle } from 'react-icons/md';

function Join() {
     return (
          <Grid
               bg="yellow.50"
               direction="row"
               justifyContent="center"
               height="sm"
               gridTemplateColumns="repeat(2,1fr)"
          >
               <AspectRatio
                    maxW="100%"
                    ratio={4 / 3}
                    overflow="hidden"
                    flex="1 1 auto"
                    width="100%"
               >
                    <Image
                         layout="fill"
                         objectFit="cover"
                         src={
                              'https://images.unsplash.com/photo-1584937005173-c307e769aa24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                         }
                         alt={'P'}
                    />
               </AspectRatio>
               <Stack
                    spacing={5}
                    fontSize="lg"
                    p={10}
                    flex="1 1 auto"
                    alignSelf="center"
               >
                    <Text fontWeight="bold" textTransform="uppercase">
                         Join us for an enriching weekend of Yoga practices
                         which include
                    </Text>
                    <List spacing={3}>
                         <ListItem>
                              <ListIcon as={MdCheckCircle} color="green.500" />
                              Asana
                         </ListItem>
                         <ListItem>
                              <ListIcon as={MdCheckCircle} color="green.500" />
                              Pranayama
                         </ListItem>
                         <ListItem>
                              <ListIcon as={MdCheckCircle} color="green.500" />
                              Meditation lectures on Yoga
                         </ListItem>
                         <ListItem>
                              <ListIcon as={MdCheckCircle} color="green.500" />
                              Cleansing practices & more
                         </ListItem>
                    </List>
                    <Text fontStyle="">
                         In the lush green haven of Karnataka{' '}
                         <chakra.span
                              fontWeight=""
                              borderBottom="1px solid"
                              textTransform="uppercase"
                         >
                              at Fig & Lily, Kanakapura.
                         </chakra.span>
                    </Text>
               </Stack>
          </Grid>
     );
}

export default Join;
