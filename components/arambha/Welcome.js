import { Text } from '@chakra-ui/react';
import React from 'react';

function Welcome() {
     return (
          <div>
               {' '}
               <Text
                    textAlign="center"
                    fontSize="2xl"
                    bg="green.900"
                    textColor="green.50"
                    padding="10"
               >
                    AthaYog Living is celebrating Yoga with a grand festival and
                    we cordially invite each and every one of you to celebrate
                    the Yogic way of life.
               </Text>
          </div>
     );
}

export default Welcome;
