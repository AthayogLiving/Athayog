import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
import { auth, db } from '@/lib/firebase-admin';
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
          try {
               auth.verifyIdToken(token).then((claims) => {
                    if (
                         typeof claims.email !== 'undefined' &&
                         // typeof claims.email_verified !== 'undefined' &&
                         // claims.email_verified &&
                         claims.email.endsWith('@athayogliving.com')
                    ) {
                         // Add custom claims for additional privileges.
                         auth.setCustomUserClaims(id, {
                              admin: admin,
                              role: role
                         })
                              .then(function (user) {
                                   // Tell client to refresh token on user.
                                   const data = {
                                        admin,
                                        metadata: {
                                             role,
                                             roleName: 'admin'
                                        }
                                   };
                                   db.collection('adminUsers')
                                        .doc(id)
                                        .update(data);
                              })
                              .catch((error) => {
                                   res.state(400).json({
                                        message: 'Something happend try again'
                                   });
                              });
                    } else {
                         return res
                              .status(422)
                              .json({ message: 'Unverified email' });
                    }
               });
               return res.status(200).json({
                    message: 'Successfully given admin privilages'
               });
          } catch (error) {
               return res.status(500).json({
                    message: error
               });
          }
     }
}
