import React, { useState } from 'react';
import { auth } from 'firebase';
import { useAuth } from '../../lib/auth';
import { Input, Stack, Button, ButtonGroup } from '@chakra-ui/react';

const index = () => {
     const auth = useAuth();
     const [email, setEmail] = useState();
     const [password, setPassword] = useState();
     const handleClick = (e) => {
          e.preventDefault();
          auth.signinWithEmail(email, password);
     };
     return (
          <>
               <div>
                    <Stack spacing={3}>
                         {!auth.user ? (
                              <div>
                                   {' '}
                                   <Input
                                        variant="outline"
                                        placeholder="Basic usage"
                                        type="text"
                                        onChange={(e) =>
                                             setEmail(e.target.value)
                                        }
                                   />
                                   <Input
                                        variant="outline"
                                        placeholder="Basic usage"
                                        type="password"
                                        onChange={(e) =>
                                             setPassword(e.target.value)
                                        }
                                   />
                              </div>
                         ) : null}
                    </Stack>
                    {!auth.user ? (
                         <Button
                              colorScheme="blue"
                              type="button"
                              onClick={(e) => handleClick(e)}
                         >
                              SingIn
                         </Button>
                    ) : (
                         <Button
                              colorScheme="red"
                              onClick={() => auth.signout()}
                         >
                              SignOut
                         </Button>
                    )}
               </div>

               <p>{auth?.user?.email}</p>
          </>
     );
};

export default index;
