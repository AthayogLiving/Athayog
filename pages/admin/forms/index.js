import Dashboard from '../dashboard';

import {
     Box,
     Button,
     ButtonGroup,
     Flex,
     Grid,
     Spinner,
     useColorModeValue
} from '@chakra-ui/react';
import { useState } from 'react';
import FormHeader from '@/components/admin/FormHeader';
import Link from 'next/link';
import { MdQuestionAnswer, MdLocalOffer } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';

const forms = () => {
     const [latestDoc, setLatestDoc] = useState(0);

     const bg = useColorModeValue('white', 'gray.800');

     return (
          <Dashboard>
               <FormHeader siteLink="" />

               <Flex mt={3}>
                    <ButtonGroup variant="solid" colorScheme="blue">
                         <Link href="forms/enquiry">
                              <Button
                                   boxShadow="base"
                                   leftIcon={<MdQuestionAnswer />}
                              >
                                   Enquiry
                              </Button>
                         </Link>

                         <Link href="forms/offerings">
                              <Button
                                   boxShadow="base"
                                   leftIcon={<MdLocalOffer />}
                              >
                                   Offerings
                              </Button>
                         </Link>
                    </ButtonGroup>
               </Flex>
          </Dashboard>
     );
};

export default forms;
