import Cors from 'cors';
import initMiddleware from '@/lib/cors-middleware';
import { enquiryForm, registerForm } from '@/lib/db/forms';
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
          const { name, email, phone, details, type } = req.body;
          await enquiryForm(name, email, phone, details, type);
          return res.status(200).json({
               message: 'Updated Form'
          });
     }
     if (req.method === 'GET') {
          const latestDoc = req.query.latestDoc;

          const snapshot = await db
               .collection('enquiryForms')
               .orderBy('createdAt', 'desc')
               .limit(20)
               .get();
          const submissions = [];

          snapshot.forEach((doc) => {
               submissions.push({ id: doc.id, ...doc.data() });
          });

          res.status(200).json({ submissions });
     }
}
