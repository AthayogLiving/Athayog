import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
import { registerForm } from '@/lib/db/forms';
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
     const latestDoc = req.query.latestUsers;
     const token = req.headers.token;

     try {
          if (token) {
               await auth
                    .verifyIdToken(token)
                    .then((decodedToken) => {})
                    .catch((error) => {
                         return res.status(200).json(error);
                    });

               if (req.method === 'GET') {
                    const snapshot = await db
                         .collection('users')
                         .orderBy('creationTime', 'desc')
                         .startAfter(latestDoc)
                         .limit(40)
                         .get();
                    const users = [];

                    snapshot.forEach((doc) => {
                         users.push({ id: doc.id, ...doc.data() });
                    });

                    res.status(200).json({ users });
               }
          }
     } catch (error) {
          res.status(500).json(error);
     }
}
