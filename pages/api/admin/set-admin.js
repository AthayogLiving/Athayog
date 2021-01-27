import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
import { auth } from '@/lib/firebase-admin';

// Initialize the cors middleware
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['GET', 'POST', 'OPTIONS'],
        origin: true
    })
);

export default async function handler(req, res) {
    // Run cors
    await cors(req, res);

    const token = req.body.token;
    const role = req.body.role;

    if (req.method === 'POST') {
        auth.verifyIdToken(token).then((claims) => {
            if (
                typeof claims.email !== 'undefined' &&
                // typeof claims.email_verified !== 'undefined' &&
                // claims.email_verified &&
                claims.email.endsWith('@athayogliving.com')
            ) {
                // Add custom claims for additional privileges.
                console.log(req.body);
                auth.setCustomUserClaims(claims.sub, {
                    admin: false,
                    role: role
                }).then(function (user) {
                    // Tell client to refresh token on user.
                    return res.status(200).json({
                        message: 'Successfully given admin privilages'
                    });
                });
            } else {
                console.log('It ran here', claims);
                return res.status(422).json({ message: 'Unverified email' });
            }
        });
    }

    if (req.method === 'PUT') {
        const admin = req.body.admin;
        auth.verifyIdToken(token).then((claims) => {
            if (
                typeof claims.email !== 'undefined' &&
                // typeof claims.email_verified !== 'undefined' &&
                // claims.email_verified &&
                claims.email.endsWith('@athayogliving.com')
            ) {
                // Add custom claims for additional privileges.
                auth.setCustomUserClaims(claims.sub, {
                    admin: admin,
                    role: role
                }).then(function (user) {
                    // Tell client to refresh token on user.
                    return res.status(200).json({
                        message: 'Successfully updated admin privilages'
                    });
                });
            } else {
                console.log('It ran here', claims);
                return res.status(422).json({ message: 'Unverified email' });
            }
        });
    }
}
