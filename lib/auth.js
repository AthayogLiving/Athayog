import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

import firebase from './firebase';
import { createUser } from './db';

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
               const user = await formatUser(rawUser);

               const { token, ...userWithoutToken } = user;

               createUser(user.uid, userWithoutToken);
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

     const createUserWithEmail = (email, password, { name }) => {
          return firebase
               .auth()
               .createUserWithEmailAndPassword(email, password)
               .then((response) => {
                    const responseData = {
                         ...response.user,
                         displayName: name
                    };
                    const user = formatUser(responseData);
                    const { token, ...userWithoutToken } = user;
                    createUser(user.uid, userWithoutToken);
                    return user;
               });
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

     const signinWithGitHub = (redirect) => {
          setLoading(true);
          return firebase
               .auth()
               .signInWithPopup(new firebase.auth.GithubAuthProvider())
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

     return {
          user,
          loading,
          signinWithEmail,
          signinWithGitHub,
          signinWithGoogle,
          createUserWithEmail,
          signout
     };
}

// const getStripeRole = async () => {
//      await firebase.auth().currentUser.getIdToken(true);
//      const decodedToken = await firebase.auth().currentUser.getIdTokenResult();

//      return decodedToken.claims.stripeRole || 'free';
// };

const formatUser = async (user) => {
     return {
          uid: user.uid,
          email: user.email,
          name: user.displayName,
          token: user.xa
     };
};
