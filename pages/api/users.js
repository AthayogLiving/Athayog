import { db, auth } from '@/lib/firebase-admin';

export default async (req, res) => {
     const token = req.headers.token;

     try {
          if (token) {
               await auth
                    .verifyIdToken(token)
                    .then((decodedToken) => {})
                    .catch((error) => {
                         return res.status(200).json(error);
                    });

               const users = [];
               const snapshot = await db
                    .collection('users')
                    .orderBy('creationTime', 'desc')
                    .limit(20)
                    .get();

               snapshot.forEach((doc) => {
                    users.push({ id: doc.id, ...doc.data() });
               });
               return res.status(200).json({ users });
          } else {
               return res.status(401).json({ message: 'Unauthorized Access' });
          }
     } catch (error) {
          res.status(500).json(error);
     }
};
