import firebase from './firebase';
import { createAdminUser } from './db';

export const createAdminUserWithEmail = (email, password, name) => {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
            response.user
                .updateProfile({
                    displayName: name
                })
                .then(
                    function () {
                        const user = {
                            uid: response.user.uid,
                            name: response.user.displayName,
                            email: response.user.email
                        };
                        console.log(user);
                        createAdminUser(user);
                    },
                    function (error) {
                        console.log(error);
                    }
                );
            return user;
        });
};
