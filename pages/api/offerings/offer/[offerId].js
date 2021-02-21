import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
import { db } from '@/lib/firebase-admin';
import offeringsType from 'pages/admin/offerings/[offeringsType]';

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
          const offerId = req.query.offerId;
          try {
               const snapshot = await db
                    .collection('offerings')
                    .doc(offerId)
                    .get();
               const offer = [];

               res.status(200).json({ id: snapshot.id, ...snapshot.data() });
          } catch (error) {
               res.status(500).send(error);
          }
     }
}
