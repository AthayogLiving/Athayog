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
     const [admin, setAdmin] = useState(false);
     const [loading, setLoading] = useState(true);

     const handleUser = async (rawUser, userCreation, phone) => {
          if (rawUser) {
               let isAdmin = false;
               await rawUser.getIdTokenResult().then((idTokenResult) => {
                    isAdmin =
                         idTokenResult.claims.admin === undefined
                              ? false
                              : idTokenResult.claims.admin;
               });

               const user = await formatUser(rawUser, isAdmin, phone);

               const { token, ...userWithoutToken } = user;

               if (userCreation) {
                    createUser(user.uid, userWithoutToken);
               }

               setUser(user);
               setAdmin(true);

               cookie.set(
                    isAdmin ? 'athayog-auth-admin' : 'athayog-auth',
                    true,
                    {
                         expires: 1
                    }
               );

               setLoading(false);
               return user;
          } else {
               setUser(false);
               cookie.remove(admin ? 'athayog-auth-admin' : 'athayog-auth');
               setAdmin(false);

               setLoading(false);
               return false;
          }
     };

     const signinWithEmail = async (email, password, redirect) => {
          setLoading(true);
          cookie.remove('routeTo');
          return await firebase
               .auth()
               .signInWithEmailAndPassword(email, password)
               .then((response) => {
                    handleUser(response.user, false);
                    if (redirect) {
                         Router.push(redirect);
                    }
               });
     };

     const createUserWithEmailAndPassword = async (
          email,
          password,
          displayName,
          phone
     ) => {
          return await firebase
               .auth()
               .createUserWithEmailAndPassword(email, password)
               .then((userCredential) => {
                    var user = userCredential.user;
                    user.updateProfile({
                         displayName: displayName
                    }).then(
                         function () {
                              handleUser(user, true);
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

     const handleOTPUser = async (user, phone) => {
          handleUser(user, true, phone);
     };

     const signinWithGoogle = async (redirect) => {
          setLoading(true);
          return await firebase
               .auth()
               .signInWithPopup(new firebase.auth.GoogleAuthProvider())
               .then((response) => {
                    handleUser(response.user);

                    if (redirect) {
                         Router.push(redirect);
                    }
               });
     };

     const signout = async (redirect) => {
          if (redirect) {
               Router.push(redirect);
          }

          return await firebase
               .auth()
               .signOut()
               .then(() => handleUser(false));
     };

     useEffect(() => {
          const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);

          return () => unsubscribe();
     }, [handleUser]);

     return {
          user,
          admin,
          loading,
          handleOTPUser,
          signinWithEmail,
          signinWithGoogle,
          signout,
          createUserWithEmailAndPassword
     };
}

const formatUser = async (user, isAdmin, phone) => {
     return {
          uid: user.uid,
          email: user.email,
          name: user.displayName,
          token: user.ya,
          admin: isAdmin,
          phone: user.phoneNumber,
          creationTime: user.metadata.creationTime,
          lastSignInTime: user.metadata.lastSignInTime
     };
};
