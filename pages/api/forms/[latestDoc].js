import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
import { registerForm } from '@/lib/db/forms';
import { db } from '@/lib/firebase-admin';

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
     const latestDoc = req.query.latestDoc;
     const type = req.query.type;
     if (req.method === 'GET') {
          const snapshot = await db
               .collection(type)
               .orderBy('createdAt', 'desc')
               .startAfter(latestDoc)
               .limit(40)
               .get();
          const submissions = [];

          snapshot.forEach((doc) => {
               submissions.push({ id: doc.id, ...doc.data() });
          });

          res.status(200).json({ submissions });
     }
}
