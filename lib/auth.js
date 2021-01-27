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

     const handleUser = async (rawUser) => {
          if (rawUser) {
               let isAdmin = false;
               await rawUser.getIdTokenResult().then((idTokenResult) => {
                    isAdmin = idTokenResult.claims.admin;
               });

               const user = await formatUser(rawUser, isAdmin);

               const { token, ...userWithoutToken } = user;

               //    createUser(user.uid, userWithoutToken);

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
                    handleUser(response.user);
                    if (redirect) {
                         Router.push(redirect);
                    }
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

     useEffect(() => {
          firebase.auth().onAuthStateChanged(function (user) {
               if (user) {
                    // User is signed in.
                    user.getIdTokenResult().then((idTokenResult) => {
                         console.log('Claimns', idTokenResult.claims);
                    });
                    // console.log(user);
                    return user;
               }
          });
     });

     return {
          user,
          loading,
          signinWithEmail,
          signinWithGoogle,
          signout
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
