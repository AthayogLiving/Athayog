const { auth } = require('@/lib/firebase-admin');
const functions = require('firebase-functions');

// On sign up.
exports.processSignUp = functions.auth.user().onCreate((user) => {
    // Check if user meets role criteria.
    if (
        user.email &&
        user.email.endsWith('@@athayogliving.com') &&
        user.emailVerified
    ) {
        const customClaims = {
            admin: true
        };
        // Set custom user claims on this newly created user.
        return auth
            .setCustomUserClaims(user.uid, customClaims)
            .then(() => {
                // Update real-time database to notify client to force refresh.
                const metadataRef = admin
                    .database()
                    .ref('metadata/' + user.uid);
                // Set the refresh time to the current UTC timestamp.
                // This will be captured on the client to force a token refresh.
                return metadataRef.set({ refreshTime: new Date().getTime() });
            })
            .catch((error) => {
                console.log(error);
            });
    }
});
