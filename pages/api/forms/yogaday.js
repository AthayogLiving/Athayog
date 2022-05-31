import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
import { leadForm } from '@/lib/db/forms';
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

     if (req.method === 'POST') {
          const { name, email, phone } = req.body;
          await leadForm(name, email, phone)
               .then((response) => {
                    return res.status(200).json({
                         message: 'Updated Form'
                    });
               })
               .catch((error) => {
                    return res.status(500).json(error);
               });
     }

     if (req.method === 'GET') {
          try {
               const latestDoc = req.query.latestDoc;

               const snapshot = await db
                    .collection('arambhaForm')
                    .orderBy('createdAt', 'desc')
                    .limit(20)
                    .get();
               const submissions = [];

               snapshot.forEach((doc) => {
                    submissions.push({ id: doc.id, ...doc.data() });
               });

               res.status(200).json({ submissions });
          } catch (error) {
               res.status(500).json(error);
          }
     }
}
