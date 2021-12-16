import NavbarHelper from '@/components/shared/NavbarHelper';
import { Button } from '@chakra-ui/button';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Flex, Heading } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import {Box} from '@chakra-ui/react'

function CoursesLayout({ children }) {
     const router = useRouter();
     return (
          <>
               {' '}
               <NavbarHelper />
               <Box
                    margin="auto"
                    padding={{
                         base: '2rem',
                         md: '3rem',
                         lg: '3rem'
                    }}
                   
                    width='100%'
                    bg="white"
               >
                   
                         <Button
                              leftIcon={<ArrowBackIcon />}
                              size="md"
                              variant="outline"
                              mb={10}
                              onClick={() =>
                                   router.push('/courses')
                              }
                         >
                              Back To Courses
                         </Button>
                    {children}
               </Box>
          </>
     );
}

export default CoursesLayout;
