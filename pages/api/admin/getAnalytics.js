import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
import { db, auth } from '@/lib/firebase-admin';
import { getLatestUsers } from '@/lib/db/db-admin';
import subDays from 'date-fns/subDays';

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
               const token = req.headers.token;
               if (token) {
                    await auth
                         .verifyIdToken(token)
                         .then((decodedToken) => {})
                         .catch((error) => {
                              return res.status(200).json(error);
                         });

                    const lastDay = subDays(new Date(), 1);
                    const snapshot = await db
                         .collection('users')
                         .where('createdAt', '<', new Date())
                         .where('createdAt', '>=', lastDay)
                         .get();
                    const snapshotForms = await db
                         .collection('forms')
                         .where('createdAt', '<=', new Date())
                         .where('createdAt', '>=', lastDay)
                         .get();
                    const snapshotEnquiryForms = await db
                         .collection('enquiryForms')
                         .where('createdAt', '<', new Date())
                         .where('createdAt', '>=', lastDay)
                         .get();

                    const usersAnalytics = [];
                    const formAnalytics = [];
                    const enquiryAnalytics = [];

                    snapshot.forEach((doc) => {
                         usersAnalytics.push({ id: doc.id, ...doc.data() });
                    });
                    snapshotForms.forEach((doc) => {
                         formAnalytics.push({ id: doc.id, ...doc.data() });
                    });
                    snapshotEnquiryForms.forEach((doc) => {
                         enquiryAnalytics.push({ id: doc.id, ...doc.data() });
                    });

                    return res.status(200).json({
                         usersAnalytics,
                         formAnalytics,
                         enquiryAnalytics
                    });
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
