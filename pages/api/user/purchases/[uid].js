import { db, auth } from '@/lib/firebase-admin';

export default async (req, res) => {
     const token = req.headers.token;

     try {
          if (token) {
               const uid = req.query.uid;
               await auth
                    .verifyIdToken(token)
                    .then((decodedToken) => {})
                    .catch((error) => {
                         return res.status(200).json(error);
                    });

               const purchases = [];
               const snapshot = await db
                    .collection('users')
                    .doc(uid)
                    .collection('payments')
                    .get();
               snapshot.forEach((doc) => {
                    purchases.push({ id: doc.id, ...doc.data() });
               });
               return res.status(200).json({ purchases });
          } else {
               return res.status(401).json({ message: 'Unauthorized Access' });
          }
     } catch (error) {
          res.status(500).json(error);
     }
};
