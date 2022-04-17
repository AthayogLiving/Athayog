import {
     AspectRatio,
     Grid,
     List,
     ListIcon,
     ListItem,
     Stack,
     Text
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { MdCheckCircle } from 'react-icons/md';

function Unplug() {
     return (
          <Grid
               bg="yellow.50"
               direction="row"
               justifyContent="center"
               height="sm"
               gridTemplateColumns="repeat(2,1fr)"
          >
               <Stack
                    spacing={5}
                    fontSize="lg"
                    p={10}
                    flex="1 1 auto"
                    alignSelf="center"
               >
                    <Text fontWeight="bold" textTransform="uppercase">
                         Unplug from daily life, evolve your spiritual practice
                         with
                    </Text>
                    <List spacing={3}>
                         <ListItem>
                              <ListIcon as={MdCheckCircle} color="green.500" />
                              Yoga
                         </ListItem>
                         <ListItem>
                              <ListIcon as={MdCheckCircle} color="green.500" />
                              Chanting
                         </ListItem>
                         <ListItem>
                              <ListIcon as={MdCheckCircle} color="green.500" />
                              Meditation
                         </ListItem>
                         <ListItem>
                              <ListIcon as={MdCheckCircle} color="green.500" />
                              Cleansing practices & more
                         </ListItem>
                    </List>
                    <Text fontStyle="italic">
                         Take a break to renew from the outer world and rebuild
                         and reconnect with your inner life.
                    </Text>
               </Stack>
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
                              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1219&q=80'
                         }
                         alt={'P'}
                    />
               </AspectRatio>
          </Grid>
     );
}

export default Unplug;
