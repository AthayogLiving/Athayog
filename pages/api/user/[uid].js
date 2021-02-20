import { db, auth } from '@/lib/firebase-admin';

export default async (req, res) => {
     const token = req.headers.token;

     if (token) {
          const uid = req.query.uid;

          await auth
               .verifyIdToken(token)
               .then((decodedToken) => {})
               .catch((error) => {
                    return res.status(200).json(error);
               });

          const payment = [];
          const ref = db.collection('users').doc(uid);
          const userData = await ref.get();
          const payments = await ref.collection('payments').get();

          const user = { id: userData.id, ...userData.data() };

          payments.forEach((doc) => {
               payment.push({ id: doc.id, ...doc.data() });
          });

          return res.status(200).json({ user, payment });
     } else {
          return res.status(401).json({ message: 'Unauthorized Access' });
     }
};
