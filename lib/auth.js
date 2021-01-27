import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

import firebase from './firebase';
import { createUser } from './db/users';

const authContext = createContext();

export function AuthProvider({ children }) {
     const auth = useProvideAuth();
     return (
          <authContext.Provider value={auth}>{children}</authContext.Provider>
     );
}

export const useAuth = () => {
     return useContext(authContext);
};

function useProvideAuth() {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     const handleUser = async (rawUser, userCreation) => {
          if (rawUser) {
               let isAdmin = false;
               await rawUser.getIdTokenResult().then((idTokenResult) => {
                    isAdmin =
                         idTokenResult.claims.admin === undefined
                              ? false
                              : idTokenResult.claims.admin;
               });

               const user = await formatUser(rawUser, isAdmin);

               const { token, ...userWithoutToken } = user;
               console.log(userWithoutToken);
               if (userCreation) {
                    createUser(user.uid, userWithoutToken);
               }

               setUser(user);

               cookie.set('athayog-auth', true, {
                    expires: 1
               });

               setLoading(false);
               return user;
          } else {
               setUser(false);
               cookie.remove('athayog-auth');

               setLoading(false);
               return false;
          }
     };

     const signinWithEmail = (email, password, redirect) => {
          setLoading(true);
          return firebase
               .auth()
               .signInWithEmailAndPassword(email, password)
               .then((response) => {
                    handleUser(response.user, false);
                    if (redirect) {
                         Router.push(redirect);
                    }
               });
     };

     const createUserWithEmailAndPassword = (email, password, displayName) => {
          return firebase
               .auth()
               .createUserWithEmailAndPassword(email, password)
               .then((userCredential) => {
                    var user = userCredential.user;
                    user.updateProfile({
                         displayName: displayName
                    }).then(
                         function () {
                              handleUser(user, true);
                              console.log(user);
                         },
                         function (error) {
                              error;
                         }
                    );
               })
               .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;

                    error;
               });
     };

     const signinWithGoogle = (redirect) => {
          setLoading(true);
          return firebase
               .auth()
               .signInWithPopup(new firebase.auth.GoogleAuthProvider())
               .then((response) => {
                    handleUser(response.user);

                    if (redirect) {
                         Router.push(redirect);
                    }
               });
     };

     const signout = (redirect) => {
          if (redirect) {
               Router.push(redirect);
          }

          return firebase
               .auth()
               .signOut()
               .then(() => handleUser(false));
     };

     useEffect(() => {
          const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);

          return () => unsubscribe();
     }, []);

     // useEffect(() => {
     //      firebase.auth().onAuthStateChanged(function (user) {
     //           if (user) {
     //                user.getIdTokenResult().then((idTokenResult) => {
     //                     console.log('Claimns', idTokenResult.claims);
     //                });

     //                return user;
     //           }
     //      });
     // });

     return {
          user,
          loading,
          signinWithEmail,
          signinWithGoogle,
          signout,
          createUserWithEmailAndPassword
     };
}

const formatUser = async (user, isAdmin) => {
     return {
          uid: user.uid,
          email: user.email,
          name: user.displayName,
          token: user.ya,
          admin: isAdmin,
          creationTime: user.metadata.creationTime,
          lastSignInTime: user.metadata.lastSignInTime
     };
};
