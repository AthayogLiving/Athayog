import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
import { db, auth } from '@/lib/firebase-admin';

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
     switch (req.method) {
          case 'POST':
               await auth
                    .createUser({
                         ...req.body
                    })
                    .then((userRecord) => {
                         return res.status(200).json(userRecord);
                    })
                    .catch((error) => {
                         return res.status(200).json(error);
                    });
               break;
          case 'GET':
               const token = req.headers.token;
               if (token) {
                    await auth
                         .verifyIdToken(token)
                         .then((decodedToken) => {})
                         .catch((error) => {
                              return res.status(200).json(error);
                         });

                    const snapshot = await db.collection('adminUsers').get();
                    const users = [];
                    snapshot.forEach((doc) => {
                         users.push({ id: doc.id, ...doc.data() });
                    });
                    return res.status(200).json({ users });
               } else {
                    return res
                         .status(401)
                         .json({ message: 'Unauthorized Acess' });
               }

               break;
          default:
               break;
     }
}
