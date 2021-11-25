import NavbarHelper from '@/components/shared/NavbarHelper';
import { Button } from '@chakra-ui/button';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Flex, Heading } from '@chakra-ui/layout';
import { useRouter } from 'next/router';

function HeaderLayout({ children }) {
     const router = useRouter();
     return (
          <>
               {' '}
               <NavbarHelper />
               <Flex
                    margin="auto"
                    padding={{
                         base: '2rem 0',
                         md: '3rem 0',
                         lg: '3rem 0'
                    }}
                    justifyContent="center"
                    alignItems="center"
                    width="100vw"
                    bg="white"
               >
                    <Flex
                         justifyContent="center"
                         direction="column"
                         alignItems="flex-start"
                         width="80vw"
                    >
                         <Button
                              leftIcon={<ArrowBackIcon />}
                              size="md"
                              variant="outline"
                              mb={10}
                              onClick={() =>
                                   router.push('/offerings/shikshana/')
                              }
                         >
                              Back To Shikshana
                         </Button>

                         {children}
                    </Flex>
               </Flex>
          </>
     );
}

export default HeaderLayout;
