import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
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
     if (req.method === 'GET') {
          try {
               const snapshot = await db
                    .collection('testimonials')
                    .where('isActive', '==', true)
                    .limit(5)
                    .get();
               const testimonials = [];

               snapshot.forEach((doc) => {
                    testimonials.push({ id: doc.id, ...doc.data() });
               });

               res.status(200).json({ testimonials });
          } catch (error) {
               res.status(500).json(error);
          }
     }
}
