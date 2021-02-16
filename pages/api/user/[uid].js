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

          const information = [];
          const snapshot = await db
               .collection('payments')
               .where('uid', '==', uid)
               .get();
          snapshot.forEach((doc) => {
               information.push({ id: doc.id, ...doc.data() });
          });
          return res.status(200).json({ information });
     } else {
          return res.status(401).json({ message: 'Unauthorized Access' });
     }
};
