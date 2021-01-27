import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
import { auth } from '@/lib/firebase-admin';
import { updateAdminUser } from '@/lib/db/admin-users';

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
     const admin = req.body.admin;
     const id = req.body.id;
     if (req.method === 'POST') {
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
                         const data = {
                              admin,
                              metadata: {
                                   role,
                                   roleName: 'admin'
                              }
                         };
                         updateAdminUser(id, data);
                         return res.status(200).json({
                              message: 'Successfully given admin privilages'
                         });
                    });
               } else {
                    return res
                         .status(422)
                         .json({ message: 'Unverified email' });
               }
          });
     }
}
