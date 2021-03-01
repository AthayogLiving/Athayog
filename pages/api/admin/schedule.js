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
          case 'GET':
               try {
                    const snapshot = await db.collection('schedule').get();
                    const schedule = [];

                    snapshot.forEach((doc) => {
                         schedule.push({ id: doc.id, ...doc.data() });
                    });

                    res.status(200).json({ schedule });
               } catch (error) {
                    res.status(500).json(error);
               }

               break;

          default:
               break;
     }
}
